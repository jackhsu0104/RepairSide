// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.AskDataDialog', 'xui.Module',{
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
                xui.create("xui.DataBinder")
                .setHost(host,"dbask")
                .setName("dbask")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("22.095238095238095em")
                .setTop("6.095238095238095em")
                .setWidth("20.419047619047618em")
                .setHeight("30.476190476190474em")
                .setCaption("輸入資料")
                .setCloseBtn(false)
                .setModal(true)
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block595")
                .setDock("bottom")
                .setLeft("14.095238095238095em")
                .setTop("21.485714285714284em")
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
            
            host.xui_ui_block595.append(
                xui.create("xui.UI.Button")
                .setHost(host,"cancelBtn")
                .setDock("right")
                .setLeft("23.16190476190476em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("取消")
                .onClick("_cancelbtn_onclick")
            );
            
            host.xui_ui_block595.append(
                xui.create("xui.UI.Button")
                .setHost(host,"okBtn")
                .setDock("right")
                .setLeft("23.923809523809524em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("確定")
                .onClick("_okbtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block596")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("9.904761904761905em")
                .setOverflow("hidden")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 10,
                    "right" : 10,
                    "bottom" : 0
                })
                .setConDockSpacing({
                    "width" : 0,
                    "height" : 5
                })
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input1")
                .setDataBinder("dbask")
                .setDataField("登錄編號")
                .setDock("top")
                .setLeft("4.571428571428571em")
                .setTop("6.857142857142857em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input2")
                .setDataBinder("dbask")
                .setDataField("CN#")
                .setDock("top")
                .setLeft("5.333333333333333em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("CN#")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"startDate")
                .setDataBinder("dbask")
                .setDataField("查詢起始日")
                .setDock("top")
                .setLeft("6.095238095238095em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("查詢起始日")
                .setType("date")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"endDate")
                .setDataBinder("dbask")
                .setDataField("查詢截止日")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("9.904761904761905em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("查詢截止日")
                .setType("date")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input3")
                .setDataBinder("dbask")
                .setDataField("Chamber管理代碼")
                .setDock("top")
                .setLeft("6.095238095238095em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("Chamber管理代碼")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input4")
                .setDataBinder("dbask")
                .setDataField("P,I,E製程代號")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("P,I,E製程代號")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input5")
                .setDataBinder("dbask")
                .setDataField("客戶名稱")
                .setDock("top")
                .setLeft("5.333333333333333em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("客戶名稱")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"input6")
                .setDataBinder("dbask")
                .setDataField("估價單類別")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("16.761904761904763em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("估價單類別")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "NotRobot",
                        "caption" : "Not Robot",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Robot",
                        "caption" : "Robot Case",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Special",
                        "caption" : "Special Case",
                        "imageClass" : ""
                    }
                ])
                .setValue("NotRobot")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input7")
                .setDataBinder("dbask")
                .setDataField("PO#")
                .setDock("top")
                .setLeft("6.095238095238095em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("PO#")
            );
            
            host.xui_ui_block596.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"input8")
                .setDataBinder("dbask")
                .setDataField("Number")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("17.523809523809526em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("Number")
                .setType("counter")
                .setPrecision(0)
                .setMin(1)
                .setValue(1)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
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
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _okbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.dbask.updateDataFromUI();
            var data = ns.dbask.getData();
            if(ns.dialog.onOkClose)
              ns.dialog.onOkClose(data);  
            ns.dialog.close();
        },
        askData: function(config, cb){
            var ns = this, i = 0, caption;
            ns.dialog.showModal();
            ns.startDate.hide();
            ns.endDate.hide();
            ns.input1.hide();
            ns.input2.hide();
            ns.input3.hide();
            ns.input4.hide();
            ns.input5.hide();
            ns.input6.hide();
            ns.input7.hide();
            ns.input8.hide();
           
            if(caption = config["formCaption"])
                ns.dialog.setCaption(caption);
            if(typeof (caption = config["登錄編號"]) != "undefined")
            {
               ns.input1.show();  
               i++; 
            }
            if(typeof (caption = config["CN#"]) != "undefined")
            {
              ns.input2.show();    
               i++; 
            }
            if(typeof (caption = config["查詢起始日"]) != "undefined")
            {
              ns.startDate.show();    
              if(caption != "")  
                  ns.startDate.setLabelCaption(caption); 
              i++; 
            }
            if(typeof (caption = config["查詢截止日"]) != "undefined")
            {
              ns.endDate.show();    
              if(caption != "")  
                  ns.endDate.setLabelCaption(caption); 
              i++; 
            }   
            if(typeof (caption = config["Chamber管理代碼"]) != "undefined")
            {
              ns.input3.show();    
               i++; 
            }
            if(typeof (caption = config["P,I,E製程代號"]) != "undefined")
            {
              ns.input4.show();    
               i++; 
            }
            if(typeof (caption = config["客戶名稱"]) != "undefined")
            {
              ns.input5.show();    
               i++; 
            }
            if(typeof (caption = config["估價單類別"]) != "undefined")
            {
              ns.input6.show();    
               i++; 
            }
            if(typeof (caption = config["PO#"]) != "undefined")
            {
              ns.input7.show();    
               i++; 
            }
            if(typeof (caption = config["Number"]) != "undefined")
            {
               ns.input8.show();    
               i++; 
              if(caption != "")  
                  ns.input8.setLabelCaption(caption); 
            }
            ns.dialog.setHeight(((i+1)*2 + 8)+ "em");
            ns.dialog.onOkClose = cb;
            //ns.destroy();
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