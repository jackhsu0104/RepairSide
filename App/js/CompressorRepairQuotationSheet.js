// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CompressorRepairQuotationSheet', 'xui.Module',{
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
                .setHost(host,"qsdb")
                .setName("qsdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("4.666666666666667em")
                .setTop("1.5238095238095237em")
                .setWidth("62em")
                .setHeight("46.32380952380952em")
                .setCaption("Compressor Repair Quotation Sheet")
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
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs5")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "Quotation Sheet"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("16.761904761904763em")
                .setTop("13.714285714285714em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input125")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("客戶名稱")
                .setLeft("4.495238095238095em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input126")
                .setName("登錄編號")
                .setDataBinder("qsdb")
                .setDataField("登錄編號")
                .setLeft("33.523809523809526em")
                .setTop("0.7333333333333333em")
                .setWidth("12.19047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input127")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("ATTN")
                .setLeft("19.047619047619047em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("ATTN")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input128")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("Compressor Model")
                .setLeft("-0.45714285714285713em")
                .setTop("5.104761904761904em")
                .setWidth("17.523809523809526em")
                .setLabelSize("10em")
                .setLabelCaption("Compressor Model")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input129")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("P/N")
                .setLeft("19.047619047619047em")
                .setTop("5.104761904761904em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input131")
                .setDataBinder("qsdb")
                .setDataField("故障問題簡述")
                .setLeft("0.7619047619047619em")
                .setTop("9.82857142857143em")
                .setWidth("30.933333333333334em")
                .setHeight("4.876190476190477em")
                .setLabelSize("8em")
                .setLabelCaption("故障問題簡述")
                .setMultiLines(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input132")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("預估金額")
                .setLeft("33.523809523809526em")
                .setTop("7.542857142857143em")
                .setWidth("12.19047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("預估金額")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox81")
                .setDataBinder("qsdb")
                .setDataField("Delivery")
                .setItems([
                    {
                        "id" : "Standard",
                        "caption" : "Standard",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Others",
                        "caption" : "Others",
                        "imageClass" : ""
                    }
                ])
                .setLeft("-4.571428571428571em")
                .setTop("2.5142857142857142em")
                .setWidth("20.723809523809525em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Delivery")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input133")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("Delivery#2")
                .setLeft("16.761904761904763em")
                .setTop("2.9714285714285715em")
                .setWidth("14.933333333333334em")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input134")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("S/N")
                .setLeft("33.523809523809526em")
                .setTop("5.257142857142857em")
                .setWidth("12.19047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input135")
                .setDataBinder("qsdb")
                .setDataField("維修內容簡述")
                .setLeft("0.7619047619047619em")
                .setTop("15.161904761904761em")
                .setWidth("30.857142857142858em")
                .setHeight("4.876190476190477em")
                .setLabelSize("8em")
                .setLabelCaption("維修內容簡述")
                .setMultiLines(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input136")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("Request By")
                .setLeft("3.0476190476190474em")
                .setTop("23.542857142857144em")
                .setWidth("13.714285714285714em")
                .setLabelSize("7em")
                .setLabelCaption("Request By")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input138")
                .setName("客戶名稱")
                .setDataBinder("qsdb")
                .setDataField("Manager")
                .setLeft("32em")
                .setTop("23.542857142857144em")
                .setWidth("13.714285714285714em")
                .setLabelSize("7em")
                .setLabelCaption("Manager")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput110")
                .setDataBinder("qsdb")
                .setDataField("日期")
                .setLeft("19.80952380952381em")
                .setTop("23.61904761904762em")
                .setWidth("11.885714285714286em")
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_tabs5.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("13.714285714285714em")
                .setTop("19.047619047619047em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"layout")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("11.428571428571429em")
                .setWidth("59.6em")
                .setHeight("36.266666666666666em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 7,
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
                    "colSetting" : {
                        "A" : {
                            "manualWidth" : 50
                        },
                        "B" : {
                            "manualWidth" : 50
                        },
                        "C" : {
                            "manualWidth" : 150
                        },
                        "D" : {
                            "manualWidth" : 300
                        },
                        "F" : {
                            "manualWidth" : 150
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "Item",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "Select",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "DESCRIPTION",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E1" : {
                            "value" : "Price (NT)",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "value" : "P/N CTI",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "value" : "報價後確認更換\nbyVenissa",
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
            var data = ns.getControlData();
            ns.qsdb.setData("選用材料列表", JSON.stringify(data));
            utils.saveForm(ns);
        },
        updateControls: function(datas){
            var ns = this;
            for(var i=0; i<datas.length;i++)
            {
              var pn = datas[i]["P/N"];  
              var name = datas[i]["確認簽名"];
              for(var j=0; j<ns.checkboxList.length; j++)
              {
                var ch = ns.checkboxList[j];  
                  var btn = ns.buttonList[j];
                if(ch.getTag() == pn)
                {
                  ch.setValue(true);  
                  btn.setCaption(name);  
                  btn.show();
                  break;        
                }        
              }
            }
            
        },
        getControlData: function(){
            var datas = [];
            var sheet = ns.sheetData;
            for(var i=0; i<ns.checkboxList.length; i++)
            {
              var ch = ns.checkboxList[i];  
              if(ch.getValue() == true)
              {
                var s = sheet[i];  
                var caption = ns.buttonList[i].getCaption();  
                if(caption == "秘書確認")
                    caption = "";
                var d = {"P/N": s["P/N"], "Price":s["Price (NT)"], "確認簽名": caption};      
                datas.push(d);
              }
            }
            return datas;
        },
        addLayoutButton: function(id,tag){
            var ns = this;
            var btn = xui.create("xui.UI.Button")
                .setHost(ns)
                .setName(id)
                .setTag(tag)
                .onClick("_btn_onclick")
                .setCaption("秘書確認");
            ns.layout.append(btn,id);
            //var box = btn.getProfile().boxing(); 
            //console.log(btn);
            btn.hide();
            return btn;
        },
        addLayoutCheckbox: function(id,tag){
            var ns = this;
            var check = xui.create("xui.UI.CheckBox")
                .setHost(ns)
                .setName(id)
                .setHAlign("center")
                .setVAlign("middle")
                .setTag(tag)
                .onChange("_checkbox_onchange")
                .setCaption("");
            ns.layout.append(check, id);   
            return check;
        },
        loadLayoutData:function(){
            var ns = this;
            var datas = utils.getTableItems({"tableName":"CompressorRepairQuotationSheet副資料庫", "orberby":"item"}, null, true);
            var items = utils.getRowMap(datas)
            var data ={
                    "rows" : items.length+1,
                    "cols" : 7,
                    "colSetting" : {

                        "A" : {
                            "manualWidth" : 50
                        },
                        "B" : {
                            "manualWidth" : 50
                        },
                        "C" : {
                            "manualWidth" : 120
                        },
                        "D" : {
                            "manualWidth" : 300
                        },
                        "F" : {
                            "manualWidth" : 120
                        }
                    },
            
                   "cells" : {
                        "A1" : {
                            "value" : "Item",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "Select",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "DESCRIPTION",
                            "style" : {
                                "textAlign" : "center",
                            }
                        },
                        "E1" : {
                            "value" : "Price (NT)",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "value" : "P/N CTI",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "value" : "報價後確認更換\nbyVenissa",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                };
            ns.sheetData = items;
            ns.checkboxList = [];
            ns.buttonList = [];
            for(var i=0; i<items.length;i++)
            {
              var idx = i+2;  
              var it = items[i];  
                var tag = it["P/N"];
              data.cells["A"+idx] = {"value":it["Item"], "style":{"textAlign" : "left"}};
              data.cells["C"+idx] = {"value":it["P/N"], "style":{"textAlign" : "left"}};
              data.cells["D"+idx] = {"value":it["Description"], "style":{"textAlign" : "left"}};
              data.cells["E"+idx] = {"value":it["Price (NT)"], "style":{"textAlign" : "right"}};
              data.cells["F"+idx] = {"value":it["P/N CTI"], "style":{"textAlign" : "left"}};
            }
            ns.layout.setLayoutData(data);
            for(var i=0; i<items.length; i++)
            {
              var idx = i+2;  
              var tag = items[i]["P/N"];
              ns.checkboxList.push(ns.addLayoutCheckbox("B"+idx, tag)); 
              ns.buttonList.push(ns.addLayoutButton("G"+idx, tag));  
            }

        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var ns = this, prop = ns.properties;
            console.log(utils.createDDL(ns.dialog, "Compressor Repair Quotation Sheet"));
            ns.loadLayoutData();
            var data = ns.qsdb.getData();
            var d = data["選用材料列表"];
            if(d)
              ns.updateControls(JSON.parse(d));
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
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _btn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        },
        /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.CheckBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _checkbox_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            for(var i=0; i<ns.checkboxList.length; i++)
            {
              var btn = ns.checkboxList[i];  
              if(btn.getTag() == uictrl.getTag())
              {
                if(newValue == true) 
                    ns.buttonList[i].show();
                else  
                    ns.buttonList[i].hide();
              }
            }
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