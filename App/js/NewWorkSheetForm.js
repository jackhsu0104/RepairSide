/*************************************************************************************************
 程式代號：RepairSide
 程式名稱：App/js/NewWorkSheetForm.js
 系統版本：企業版(for SQL Server)
*************************************************************************************************
 程式版本：1.0
 修改日期：2024/03/02
 修改人員：Jack Hsu
 修改說明：(1). 初始版本
*************************************************************************************************/
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
                .setCaption("新增工單")
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
                .setWidth("7em")
                .setCaption("新增工單")
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
                .setDataField("In Model")
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
                .setDataField("In P/N")
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
                .setDataField("In S/N")
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
                        "caption" : "維修前測試單",
                        "hidden" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("維修前測試單")
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
                        "imageClass" : ""
                    },
                    {
                        "id" : "Crosshead維修工單",
                        "caption" : "Crosshead維修工單",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Compressor維修工單",
                        "caption" : "Compressor維修工單"
                    },
                    {
                        "id" : "Controler維修工單",
                        "caption" : "Controler維修工單"
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
            var ns = this;
            var kind = ns.workKind.getValue();
            var data = ns.newdb.getData();
            var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號", data["登錄編號"],"*");
            var page = "";
            if(item != "")
            {
              if(kind == "Cryopump維修工單")        
                  page = "CryopumpEditForm";
              else if(kind == "Crosshead維修工單")
                  page = "CrossheadEditForm";
              else if(kind == "Controler維修工單")
                  page = "3phControlerEditForm";
              else if(kind == "Module功能測試表")
                  page = "ModuleTestForm";
              else if(kind == "Compressor維修工單")
                  page = "CompressorEditForm";
            }
            var newitem = {"登錄編號":item["登錄編號"], "Model":item["In Model"], "P/N":item["In P/N"], "S/N": item["In S/N"],"客戶名稱": item["客戶名稱"], "日期":utils.today(),
                           "保固期":item["保固期"],"上次登錄編號":item["上次登錄編號"], "上次登錄時間":item["上次登錄時間"],"上次故障原因":item["上次故障原因"],
                          "Pump": item["In Model"], "Pump P/N": item["In P/N"],  "Pump S/N": item["In S/N"]}; 
            var descb = function(){
                ns.destroy();
            }
            utils.showDataPage(page,newitem,"new", null, descb);
        },
        showTestPage: function(){
            var ns = this;
            var kind = ns.testKind.getValue();
            var data = ns.newdb.getData();
            var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號", data["登錄編號"],"*");
            var page = "";
            if(item != "")
            {
              if(kind == "Cryopump Test Form")        
                  page = "CryopumpTestForm";
              else if(kind == "Cryopump Warranty原因分析表")
                  page = "CryopumpWarrantyEditForm";
            }
            var newitem = {"登錄編號":item["登錄編號"], "Model":item["In Model"], "P/N":item["In P/N"], "S/N": item["In S/N"],"客戶名稱": item["客戶名稱"], "日期":utils.today(),
                           "保固期":item["保固期"],"上次登錄編號":item["上次登錄編號"], "上次登錄時間":item["上次登錄時間"],"上次故障原因":item["上次故障原因"],
                          "Pump": item["In Model"], "Pump P/N": item["In P/N"],  "Pump S/N": item["In S/N"]}; 
            
            utils.showDataPage(page,newitem,"new");
            ns.destroy();
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
            var ns = this, prop = ns.properties;
            if(prop.mode == "newRepair")
            {
              ns.tabs.updateItem("維修前測試單",{"hidden":true});
              ns.tabs.setValue("維修工單");  
              ns.saveBtn.setCaption("新增工單");
            }
            if(prop.mode == "newTest")
            {
              ns.tabs.updateItem("維修工單",{"hidden":true});
              ns.tabs.setValue("維修前測試單");  
              ns.saveBtn.setCaption("新增測試單");
              ns.dialog.setCaption("新增測試單");
            }
/*            
            if(data["維修前測試"] == "1")
            {
              ns.tabs.setValue("維修前測試單");
              ns.updateItem("維修工單",{"hidden":true});  
            }
            else 
            {
              ns.tabs.setValue("維修工單");
              ns.updateItem("維修前測試單",{"hidden":true});  
            }
*/            
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