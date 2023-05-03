// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ErpPickingForm', 'xui.Module',{
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
                .setHost(host,"pdb")
                .setName("pdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("61.714285714285715em")
                .setHeight("37.333333333333336em")
                .setCaption("領料報工單")
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
                xui.create("xui.UI.Button")
                .setHost(host,"uploadBtn")
                .setDock("left")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("24.685714285714287em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("確認上傳")
                .onClick("_uploadbtn_onclick")
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
                .setHost(host,"xui_ui_block638")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("2.2857142857142856em")
                .setHeight("13.714285714285714em")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input531")
                .setDataBinder("pdb")
                .setDataField("維修單別")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修單別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput359")
                .setDataBinder("pdb")
                .setDataField("維修部門")
                .setLeft("0.7619047619047619em")
                .setTop("3.0476190476190474em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修部門")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput362")
                .setDataBinder("pdb")
                .setDataField("維修站別")
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修站別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput364")
                .setDataBinder("pdb")
                .setDataField("單據日期")
                .setLeft("0.7619047619047619em")
                .setTop("7.619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("單據日期")
                .setType("date")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput367")
                .setDataBinder("pdb")
                .setDataField("產品品號")
                .setLeft("17.523809523809526em")
                .setTop("0.7619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品品號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput369")
                .setDataBinder("pdb")
                .setDataField("產品品名")
                .setLeft("17.523809523809526em")
                .setTop("3.0476190476190474em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品品名")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput371")
                .setDataBinder("pdb")
                .setDataField("產品序號")
                .setLeft("17.523809523809526em")
                .setTop("5.333333333333333em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品序號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput373")
                .setDataBinder("pdb")
                .setDataField("客戶簡稱")
                .setLeft("17.523809523809526em")
                .setTop("7.619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("客戶簡稱")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput383")
                .setDataBinder("pdb")
                .setDataField("發票地址一")
                .setLeft("32em")
                .setTop("0.7619047619047619em")
                .setWidth("26.895238095238096em")
                .setLabelSize("6em")
                .setLabelCaption("發票地址一")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input533")
                .setDataBinder("pdb")
                .setDataField("發票地址二")
                .setLeft("32em")
                .setTop("3.0476190476190474em")
                .setWidth("26.895238095238096em")
                .setLabelSize("6em")
                .setLabelCaption("發票地址二")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput397")
                .setDataBinder("pdb")
                .setDataField("課稅別")
                .setLeft("32em")
                .setTop("5.333333333333333em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("課稅別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput399")
                .setDataBinder("pdb")
                .setDataField("營業稅率")
                .setLeft("32em")
                .setTop("7.619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("營業稅率")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput442")
                .setDataBinder("pdb")
                .setDataField("工時")
                .setLeft("0.7619047619047619em")
                .setTop("10.438095238095238em")
                .setWidth("14.476190476190476em")
                .setLabelSize("6em")
                .setLabelCaption("工時")
                .setType("spin")
                .setPrecision(1)
                .setValue(0)
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6490")
                .setDataBinder("pdb")
                .setDataField("領料報工單號")
                .setLeft("15.6em")
                .setTop("10.066666666666666em")
                .setWidth("16.4em")
                .setPlaceholder("儲存後自動產生")
                .setLabelSize("8em")
                .setLabelCaption("領料報工單號")
            );
            
            host.form.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"mgrid")
                .setProperties({
                    "tableName" : "領料報工單子表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "領料報工單號={領料報工單號}",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "領料報工單號",
                    "openPageName" : "PickingEditForm",
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
                                        "id" : "領用庫別",
                                        "caption" : "領用庫別",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "材料品號",
                                        "caption" : "材料品號",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "領料數量",
                                        "caption" : "領料數量",
                                        "width" : "8em",
                                        "type" : "input"
                                    }
                                ]
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
            "onReady" : "_page_onready"
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
        _page_onready:function(e,i){
            var ns = this;

        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _uploadbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
             console.log(utils.createDDL(ns.form, "領料報工單"));
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