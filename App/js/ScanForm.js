// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ScanForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("7.933333333333334em")
                .setTop("4.6em")
                .setWidth("59.4em")
                .setHeight("35.4em")
                .setCaption("掃碼器")
                .onShow("_dialog_onshow")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block")
                .setDock("fill")
                .setLeft("6.666666666666667em")
                .setTop("9.333333333333334em")
                .setWidth("15.6em")
                .setHtml("<video id=\"video2\" width=\"600\" height=\"400\">\n</video>\n")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block74")
                .setDock("top")
                .setLeft("6em")
                .setTop("2em")
                .setWidth("20.533333333333335em")
                .setHeight("4.133333333333334em")
            );
            
            host.xui_ui_block74.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"camera")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("29.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelSize("8em")
                .setLabelCaption("攝影機")
                .setLabelVAlign("middle")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1"
                    }
                ])
                .onChange("_camera_onchange")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        startCodeReader: function(cb){
                        var ns = this;
                        if(typeof CodeReader == 'undefined')
                            ns.initCodeReader();
                        CodeReader.decodeOnceFromVideoDevice(CameraDeviceId, 'video2').then((result) => {
                            console.log(result);
                            cb(result.text);
                            ns.resetCodeReader();
                            ns.destroy();
                            //ns.scanRepairNo.setValue(result.text);
                            //ns.processInsite();
                        }).catch((err) => {
                            console.log(err)
                        })
                        console.log(`Started continous decode from camera with id ${CameraDeviceId}`)
            
        },
        resetCodeReader: function(){
                        if(CodeReader != undefined)
                        {
                          CodeReader.reset();
                          console.log('Reset.');            
                        }
        },
        initCodeReader: function(){
            var ns = this;
            if(typeof CodeReader != 'undefined')
            {
                if(typeof CameraItems != "undefined")
                    ns.camera.setItems(CameraItems);
                return;
            }
            CameraDeviceId = localStorage.getItem("RepairSide_CameraId");
            CodeReader = new ZXing.BrowserMultiFormatReader;//BrowserBarcodeReader();
            console.log('ZXing code reader initialized');
            CodeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                    if(CameraDeviceId == null)
                      CameraDeviceId = videoInputDevices[0].deviceId;
                    var items = [];
                    if (videoInputDevices.length > 0) {
                        videoInputDevices.forEach((element) => {
                            let item = {"id":element.deviceId,"caption":element.label};
                            items.push(item);
                        })
                    }
                    CameraItems = items;
                    ns.camera.setItems(items);
                    ns.camera.setValue(CameraDeviceId);
                })
                .catch((err) => {
                    console.log(err)
                })        
        },
        events:{
            "onReady" : "_page_onready"
        },
        _page_onready:function(e,i){
            var ns = this;
            ns.initCodeReader();

        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            if(typeof CameraItems != 'undefined')
            {
              ns.camera.setItems(CameraItems);
              ns.camera.setValue(CameraDeviceId);
            }
            if(ns.onCodeRead != undefined)  
              ns.startCodeReader(ns.onCodeRead);

        },
        /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _camera_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            CameraDeviceId = newValue;
            localStorage.setItem("RepairSide_CameraId", newValue);
            ns.resetCodeReader();
            ns.startCodeReader(ns.onCodeRead);
        },        
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});