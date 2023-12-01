// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CryopumpTestForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "keyvalue" : null,
            "tableName" : "CryopumpTestForm",
            "datas" : null
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
                xui.create("xui.Timer")
                .setHost(host,"timer1")
                .onTime("_timer1_ontime")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"testdb")
                .setName("testdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("8.6em")
                .setTop("1.9333333333333333em")
                .setWidth("62.476190476190474em")
                .setHeight("38.095238095238095em")
                .setCaption("Cryopump Test Form")
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
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm1")
                .setDataBinder("testdb")
                .setDataField("組長確認")
                .setReadonly(true)
                .setLeft("-0.0761904761904762em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("組長確認")
                .setType("getter")
                .onClick("_confirm1_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm2")
                .setDataBinder("testdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("13.638095238095238em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("秘書確認")
                .setType("getter")
                .onClick("_confirm2_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"confirmBtn")
                .setDataBinder("opdb")
                .setDataField("秘書確認")
                .setLeft("25.82857142857143em")
                .setTop("0.6857142857142857em")
                .setWidth("9.142857142857142em")
                .setCaption("通知秘書確認")
                .onClick("_confirmbtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"form")
                .setDock("top")
                .setLeft("12.952380952380953em")
                .setTop("10.666666666666666em")
                .setHeight("11.428571428571429em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 0,
                    "right" : 20,
                    "bottom" : 0
                })
                .setCustomStyle({
                    "FRAME" : {
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setDataBinder("testdb")
                .setDataField("登錄編號")
                .setLeft("3.8095238095238093em")
                .setTop("1.0666666666666667em")
                .setWidth("15.238095238095237em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"type")
                .setDataBinder("testdb")
                .setDataField("Type")
                .setReadonly(true)
                .setItems([
                    {
                        "id" : "維修前測試",
                        "caption" : "維修前測試",
                        "imageClass" : ""
                    },
                    {
                        "id" : "一般維修測試",
                        "caption" : "一般維修測試",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("3.6666666666666665em")
                .setTop("3.4em")
                .setWidth("30.2em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("維修前測試")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setLeft("20.8em")
                .setTop("0.9333333333333333em")
                .setWidth("8.666666666666666em")
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("20.666666666666668em")
                .setTop("5.333333333333333em")
                .setWidth("8.666666666666666em")
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("22.095238095238095em")
            );
            
            host.block2.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"ctl_sbutton1")
                .setTips("Refresh")
                .setTop("0.5833333333333334em")
                .setWidth("1.6666666666666667em")
                .setRight("0.8333333333333334em")
                .setZIndex(1002)
                .setVisibility("hidden")
                .setImageClass("xuicon xui-refresh")
                .onClick("_ctl_sbutton1_onclick")
                .setCustomStyle({
                    "KEY" : {
                        "cursor" : "pointer"
                    }
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.PageBar")
                .setHost(host,"pagebar")
                .setTop("0.4166666666666667em")
                .setRight("3em")
                .setVisibility("hidden")
                .setCaption("")
                .onPageSet("_pagebar_onpageset")
            );
            
            host.block2.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"modGrid")
                .setProperties({
                    "tableName" : "CryopumpTestForm",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "登錄編號 = {登錄編號}",
                    "condition2" : "",
                    "orderby" : "登錄編號",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 0,
                    "keyid" : "rowid",
                    "openPageName" : "CryopumpTestSubForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "header" : [
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "required" : false,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Pump",
                                        "caption" : "Pump",
                                        "required" : false,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
                                        "required" : false,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "S/N",
                                        "caption" : "S/N",
                                        "required" : false,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "rowid",
                                        "caption" : "rowid",
                                        "hidden" : true,
                                        "width" : "8em",
                                        "type" : "input"
                                    }
                                ]
                            }
                        },
                        "ctl_sbutton1" : {
                            "properties" : {
                                "zIndex" : 1
                            }
                        },
                        "newBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "openBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "deleteBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "selectAllBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "excelBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "pageLength" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "custom1Btn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "filter" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
                .setEvents({
                    "onInitNewData" : "_modgrid_oninitnewdata",
                    "onPrepareCondition" : null
                })
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
            "afterShow" : "_page_aftershow"
        },
        /**
         * Fired when the control was rendered
         * @method onRender [xui.Module event]
         * @param {xui.UIProfile.} profile  The current control's profile object
        */
        _page_onrender:function(profile){


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
            utils.saveForm(ns);
            if(ns.modGrid.grid.getRows().length > 0)
              utils.updateWorkSheetRepairState(ns.repairNo.getUIValue(), "開始測試");
            ns.destroy();
            //if(prop.mode == "edit")
             //   ns.modGrid.grid.setDisabled(false);
 
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop = ns.properties;
            prop.mode = "edit";
            ns.saveBtn.setCaption("儲存");
            // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
            
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
            if(ns.confirmBtn.getCaption() == "組長已確認")
            {
              var state = utils.getItemValue("維修站總資料表","登錄編號",ns.repairNo.getUIValue(),"維修狀態");
              if(state == "開始測試")
              {
                  ns.confirmBtn.setCaption("通知秘書確認");
              }
             
            }
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
        _page_aftershow:function(e,i){
            var ns = this, prop=ns.properties;
            if(prop.mode == "new")
                ns.modGrid.grid.setDisabled(true);
        },
            /**
         * When the timer is triggered regularly. If returns [false], the timer will end
         * @method onTime [xui.Timer event]
         * @param {xui} profile .Profile
         * @param {} threadId  String
        */
            _timer1_ontime:function(profile, threadId){
                var ns = this, uictrl = profile.boxing();
                if(ns.repairNo.getUIValue() == "")
                    ns.modGrid.setDisabled(true);
                else 
                    ns.modGrid.setDisabled(false);
                    
            },
        _modgrid_oninitnewdata:function(){
            var ns = this;
            var id = ns.repairNo.getValue();
            var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號",id,"*");
            if(item != "")
              var data = {"登錄編號": id, "Type":ns.type.getUIValue(), "P/N":item["In P/N"], "S/N": item["In S/N"],"Pump":item["In Model"]};
            else    
              var data = {"登錄編號": id, "Type":ns.type.getUIValue()};
            ns.testdb.updateDataFromUI();
            var tdata = ns.testdb.getData();
            data["組長確認"] = tdata["組長確認"];
            data["秘書確認"] = tdata["秘書確認"];
            data["確認狀態"] = tdata["確認狀態"];
            return data;

        },
            /**
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
            _confirm1_onclick:function(profile, e, src, value, n){
                var ns = this, uictrl = profile.boxing();
                utils.confirmNameClick(ns, uictrl, "組長");
            },
        /**
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
        _confirm2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.confirmNameClick(ns, uictrl, "秘書");
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _confirmbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
             utils.confirmBtnClick(ns, uictrl);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _repairbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showRepairEditForm(ns.repairNo.getUIValue(), true);  //true, readonly
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _pickingbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                utils.showPickingSheetMenu(uictrl, ns.repairNo.getUIValue());
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