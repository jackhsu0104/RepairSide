// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.PickingEditForm', 'xui.Module',{
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
                xui.create("xui.DataBinder")
                .setHost(host,"pdb2")
                .setName("pdb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("37.333333333333336em")
                .setHeight("44.19047619047619em")
                .setCaption("維修用料明細表")
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
                xui.create("xui.UI.Div")
                .setHost(host,"block1")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("2.2857142857142856em")
                .setHeight("6.095238095238095em")
            );
            
            host.block1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"model")
                .setDataBinder("pdb")
                .setDataField("Model")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setCaption("M530")
                .setFontSize("22px")
                .setFontWeight("bold")
            );
            
            host.block1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"repairSide")
                .setDataBinder("pdb")
                .setDataField("維修站名")
                .setLeft("16em")
                .setTop("0.7619047619047619em")
                .setCaption("Vacuum Side")
                .setFontSize("22px")
                .setFontWeight("bold")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input316")
                .setDataBinder("pdb")
                .setDataField("領用人名稱")
                .setLeft("2.2857142857142856em")
                .setTop("3.0476190476190474em")
                .setWidth("12.19047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("領用人")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput196")
                .setDataBinder("pdb")
                .setDataField("領用時間")
                .setLeft("15.238095238095237em")
                .setTop("3.0476190476190474em")
                .setWidth("13.714285714285714em")
                .setLabelSize("5em")
                .setLabelCaption("領用時間")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"layout")
                .setDock("top")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("13.714285714285714em")
                .setTop("20.571428571428573em")
                .setWidth("33.2952380952381em")
                .setHeight("16.228571428571428em")
                .setDefaultColumnSize(2)
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 3,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 30
                        },
                        "2" : {
                            "manualHeight" : 30
                        },
                        "3" : {
                            "manualHeight" : 30
                        },
                        "4" : {
                            "manualHeight" : 30
                        },
                        "5" : {
                            "manualHeight" : 30
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "品名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "數量",
                            "style" : {
                                "textAlign" : "center"
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
        createControls: function(rows){
            var ns = this;
            var cells = {   
                        "A1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "品名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "數量",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
            };
            for(var i=0; i<rows.length; i++)
            {
                var data = rows[i];
                cells["A"+(i+2)] = {"value": data[2], "style":{"textAlign":"right"}}; //P/N
                cells["B"+(i+2)] = {"value": data[3], "style":{"textAlign":"right"}};  //品名
                var input = xui.create("xui.UI.ComboInput").setType("spin").setIncrement(1).setPrecision(0);
                input.setDock("none")
                 .setLeft(x +"em")
                 .setTop(h+"em")
                 .setWidth("18em")
                 .setName(data[2])
                 .setDataBinder("pdb2")
                 .setDataField(data[2]);
                ns.layout.append(input,"C"+(i+2));
            }
            var layoutdata = {
                    "rows" : items.length+1,
                    "cols" : 3,
                    "cells" : cells
            };    
            ns.layout.setLayoutData(layoutdata);
        },
        loadControls: function(){
            var ns=this, prop=ns.properties;
            var data = ns.pdb.getData();
            ns.model.setCaption(data.Model);
            ns.repairSide.setCaption(data["維修站名"]);
            var condition = `Model = '${data.Model}' AND 維修站名 = '${data["維修站名"]}'`;
            var cb = function(data){
              ns.createControls(data.rows);  
              if(prop["mode"] == "edit")
              {
                ns.pdb2.setData(data["領用材料列表"]);
                ns.pdb2.updateDataToUI();
              }
            }
            utils.getTableItems({"table":"維修領料副資料表", "condition":condition}, cb);
        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop=ns.properties;
            ns.loadControls();
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