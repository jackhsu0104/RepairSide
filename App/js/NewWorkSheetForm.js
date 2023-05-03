// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.NewWorkSheetForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "",
            "tableName" : null,
            "datas" : null,
            "mode" : "new"
        },

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"newdb")
                .setName("newdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("40em")
                .setHeight("21.133333333333333em")
                .setCaption("新增表單")
                .setModal(true)
                .setConLayoutColumns(null)
                .onShow("_dialog_onshow")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block103")
                .setDock("bottom")
                .setLeft("13.333333333333334em")
                .setTop("20.723809523809525em")
                .setHeight("3.8857142857142857em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 10,
                    "right" : 20,
                    "bottom" : 10
                })
                .setConDockSpacing({
                    "width" : 20,
                    "height" : 0
                })
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"cancelBtn")
                .setDock("right")
                .setLeft("23.16190476190476em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("取消")
                .onClick("_cancelbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"saveBtn")
                .setDock("right")
                .setLeft("23.923809523809524em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("儲存")
                .onClick("_savebtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"form")
                .setDock("fill")
                .setLeft("12.952380952380953em")
                .setTop("10.666666666666666em")
                .setCustomStyle({
                    "FRAME" : {
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block3008")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("6em")
                .setHeight("5.4em")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14489")
                .setDataBinder("newdb")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14490")
                .setDataBinder("newdb")
                .setDataField("客戶名稱")
                .setReadonly(true)
                .setLeft("0.6666666666666666em")
                .setTop("2.6em")
                .setWidth("12.666666666666666em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14491")
                .setDataBinder("newdb")
                .setDataField("Model")
                .setReadonly(true)
                .setLeft("12em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("Model")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14492")
                .setDataBinder("newdb")
                .setDataField("P/N")
                .setReadonly(true)
                .setLeft("12em")
                .setTop("2.6em")
                .setWidth("12.666666666666666em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14493")
                .setDataBinder("newdb")
                .setDataField("S/N")
                .setReadonly(true)
                .setLeft("24.666666666666668em")
                .setTop("2.6em")
                .setWidth("13.333333333333334em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_block3008.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input14504")
                .setDataBinder("newdb")
                .setDataField("保固期限")
                .setReadonly(true)
                .setLeft("24.666666666666668em")
                .setTop("0.6em")
                .setWidth("13.333333333333334em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("保固期限")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "維修工單",
                        "caption" : "維修工單",
                        "imageClass" : ""
                    },
                    {
                        "id" : "維修前測試單",
                        "caption" : "維修前測試單"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("維修工單")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("13.466666666666667em")
                .setTop("3.466666666666667em"),
                "維修工單"
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"workKind")
                .setLeft("0.6666666666666666em")
                .setTop("2em")
                .setWidth("24em")
                .setLabelSize("8em")
                .setLabelCaption("維修工單種類")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "Cryopump維修工單",
                        "caption" : "Cryopump維修工單",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "SHI CryoPump維修工單",
                        "caption" : "SHI CryoPump維修工單",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "Crosshead維修工單",
                        "caption" : "Crosshead維修工單",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "SHI Crosshead維修工單",
                        "caption" : "SHI Crosshead維修工單",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    },
                    {
                        "id" : "3phControler維修工單",
                        "caption" : "3phControler維修工單"
                    },
                    {
                        "id" : "Challentech Bench維修工單",
                        "caption" : " Challentech Bench維修工單"
                    },
                    {
                        "id" : "Module功能測試表",
                        "caption" : "Module功能測試表"
                    }
                ])
                .setValue("Cryopump維修工單")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("9.333333333333334em")
                .setTop("10em"),
                "維修前測試單"
            );
            
            host.tabs.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testKind")
                .setLeft("0.6666666666666666em")
                .setTop("2.742857142857143em")
                .setWidth("24em")
                .setLabelSize("8em")
                .setLabelCaption("測試單種類")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "Cryopump Test Form",
                        "caption" : "Cryopump Test Form",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Cryopump Warranty原因分析表",
                        "caption" : "Cryopump Warranty原因分析表",
                        "imageClass" : ""
                    }
                ])
                .setValue("Cryopump Test Form"),
                "維修前測試單"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{
        },
        /**
         * Fired when the control was rendered
         * @method onRender [xui.Module event]
         * @param {xui.UIProfile.} profile  The current control's profile object
        */
        _page_onrender:function(profile){


        },
        showWorkPage: function(){
            var kind = ns.workKind.getValue();
            var data = ns.newdb.getValue();
            var item = utils.getItemValue("","登錄編號", data["登錄編號"],"*");
            var page = "";
            if(item != "")
            {
              if(kind == "Cryopump維修工單")        
                  page = "CryopumpEditForm";
              else if(kind == "SHI CryoPump維修工單")
                  page = "ShiCryopumpEditForm";
              else if(kind == "Crosshead維修工單")
                  page = "CrossheadEditForm";
              else if(kind == "SHI Crosshead維修工單")
                  page = "ShiCrossheadEditFor";
              else if(kind == "3phControler維修工單")
                  page = "3phControlerEditForm";
              else if(kind == "Challentech Bench維修工單")
                  page = "ChallentechBenchEditForm";
              else if(kind == "Module功能測試表")
                  page = "ModuleTestForm";
            }
            var newitem = {"登錄編號":item["登錄編號"], "Model":item["In Model"], "P/N":item["In P/N"], "S/N": item["In S/N"],"客戶名稱": item["客戶名稱"], "日期":utils.today(),
                           "保固期":item["保固期"],"上次登錄編號":item["上次登錄編號"], "上次登錄時間":item["上次登錄時間"],"上次故障原因":item["上次故障原因"],
                          "Pump": item["In Model"], "Pump P/N": item["In P/N"],  "Pump S/N": item["In S/N"]}; 
            
            utils.showDataPage(page,newitem,"new");
        },
        showTestPage: function(){
            
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _savebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing(), prop = ns.properties;
            //utils.saveForm(ns);
            var sheet = ns.tabs.getValue();
            if(sheet == "維修工單")
                ns.showWorkPage();
            else  //test sheet
                ns.showTestPage();
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var ns = this, prop = ns.properties;
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _cancelbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.dialog.close();
            }
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