// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.UnitServiceForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "總表單號",
            "keyvalue" : null,
            "table" : "UnitServiceForm總表",
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
                .setHost(host,"unitdb")
                .setName("unitdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("62.476190476190474em")
                .setHeight("38.095238095238095em")
                .setCaption("Unit Service  Form")
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
                .setHost(host,"xui_ui_comboinput192")
                .setDataBinder("unitdb")
                .setDataField("日期")
                .setRequired(true)
                .setLeft("0.7619047619047619em")
                .setTop("3.3523809523809525em")
                .setWidth("18.285714285714285em")
                .setLabelSize("8em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"id")
                .setDataBinder("unitdb")
                .setDataField("總表單號")
                .setReadonly(true)
                .setLeft("3.8095238095238093em")
                .setTop("1.0666666666666667em")
                .setWidth("15.238095238095237em")
                .setPlaceholder("儲存後產生")
                .setLabelSize("5em")
                .setLabelCaption("單號")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput141")
                .setDataBinder("unitdb")
                .setDataField("業務ID")
                .setRequired(true)
                .setLeft("0.7619047619047619em")
                .setTop("5.942857142857143em")
                .setWidth("18.285714285714285em")
                .setLabelSize("8em")
                .setLabelCaption("業務ID")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput148")
                .setDataBinder("unitdb")
                .setDataField("業務名稱")
                .setLeft("0.7619047619047619em")
                .setTop("8.380952380952381em")
                .setWidth("18.285714285714285em")
                .setLabelSize("8em")
                .setLabelCaption("業務名稱")
                .setType("popbox")
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
                    "tableName" : "UnitServiceForm子表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "子表單號",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 0,
                    "keyid" : "子表單號",
                    "openPageName" : "SubUnitServiceForm",
                    "mode" : "normal",
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
                                        "id" : "Model",
                                        "caption" : "Model",
                                        "required" : true,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
                                        "required" : true,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "S/N",
                                        "caption" : "S/N",
                                        "required" : true,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "公司編號",
                                        "caption" : "公司編號",
                                        "required" : true,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "公司名稱",
                                        "caption" : "公司名稱",
                                        "required" : true,
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "工號",
                                        "caption" : "工號",
                                        "required" : true,
                                        "type" : "button",
                                        "width" : "8em"
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
                    "onPrepareCondition" : "_modgrid_onpreparecondition"
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
            //if(prop.mode == "edit")
             //   ns.modGrid.grid.setDisabled(false);
 
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
                if(ns.id.getValue() == "")
                    ns.modGrid.setDisabled(true);
                else 
                    ns.modGrid.setDisabled(false);
                    
            },
        _modgrid_oninitnewdata:function(){
            var ns = this;
            var nbr = ns.id.getValue();
            return {"總表單號": nbr};

        },
            _modgrid_onpreparecondition:function(){
                var ns = this;
                return `總表單號 = '${ns.id.getUIValue()}'`;
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