// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.TestForm', 'xui.Module',{
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
                .setHost(host,"db")
                .setName("db")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("13.266666666666667em")
                .setTop("-1.4em")
                .setWidth("43.46666666666667em")
                .setHeight("52.733333333333334em")
                .setCaption("Dialog")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input32")
                .setName("客戶名稱")
                .setDataBinder("db")
                .setDataField("客戶名稱")
                .setLeft("2em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input33")
                .setName("Pump")
                .setDataBinder("db")
                .setDataField("Pump")
                .setLeft("22em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput216")
                .setName("日期")
                .setDataBinder("db")
                .setDataField("日期")
                .setLeft("2em")
                .setTop("4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input34")
                .setName("登錄編號")
                .setDataBinder("db")
                .setDataField("Pump")
                .setDisabled(true)
                .setLeft("22em")
                .setTop("4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox6")
                .setName("Repair")
                .setDataBinder("db")
                .setDataField("Repair")
                .setLeft("2em")
                .setTop("6em")
                .setWidth("18em")
                .setCaption("Repair")
                .onChange("_xui_ui_checkbox6_onchange")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox7")
                .setName("CIC/W")
                .setDataBinder("db")
                .setDataField("CIC/W")
                .setLeft("22em")
                .setTop("6em")
                .setWidth("18em")
                .setCaption("CIC/W")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox8")
                .setName("OT")
                .setDataBinder("db")
                .setDataField("OT")
                .setLeft("2em")
                .setTop("8em")
                .setWidth("18em")
                .setCaption("OT")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox9")
                .setName("Exchange")
                .setDataBinder("db")
                .setDataField("Exchange")
                .setLeft("22em")
                .setTop("8em")
                .setWidth("18em")
                .setCaption("Exchange")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input35")
                .setName("上次登錄編號")
                .setDataBinder("db")
                .setDataField("上次登錄編號")
                .setLeft("2em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput217")
                .setName("上次登錄時間")
                .setDataBinder("db")
                .setDataField("上次登錄時間")
                .setLeft("22em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn1")
                .setLeft("11.333333333333334em")
                .setTop("6.666666666666667em")
                .setWidth("7.266666666666667em")
                .setCaption("Button")
                .onClick("_btn1_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"combo5")
                .setDataBinder("db")
                .setDataField("combo5")
                .setLeft("1.3333333333333333em")
                .setTop("14em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("test")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item4"
                    }
                ])
                .onValueChange("_combo5_onvaluechange")
                .afterUIValueSet("_combo5_afteruivalueset")
                .onChange("_combo5_onchange")
            );
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"type")
                .setDataBinder("rdb")
                .setDataField("Type")
                .setItems([
                    {
                        "id" : "Repair",
                        "caption" : "Repair",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Exchange",
                        "caption" : "Exchange",
                        "imageClass" : "",
                        "disabled" : false
                    },
                    {
                        "id" : "CIC/W",
                        "caption" : "CIC/W",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("5.104761904761904em")
                .setTop("19.333333333333332em")
                .setWidth("26em")
                .setHeight("2.6666666666666665em")
                .setSelMode("multi")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.form.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"grid11")
                .setDock("width")
                .setLeft("1.5333333333333334em")
                .setTop("22.333333333333332em")
                .setWidth("38.333333333333336em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id" : "label",
                        "type" : "label",
                        "width" : "8em",
                        "caption" : "label"
                    },
                    {
                        "id" : "input",
                        "type" : "input",
                        "width" : "8em",
                        "caption" : "input"
                    },
                    {
                        "id" : "combobox",
                        "type" : "combobox",
                        "width" : "8em",
                        "caption" : "combobox"
                    },
                    {
                        "id" : "listbox",
                        "type" : "listbox",
                        "width" : "8em",
                        "caption" : "listbox"
                    },
                    {
                        "id" : "getter",
                        "type" : "getter",
                        "width" : "8em",
                        "caption" : "getter"
                    },
                    {
                        "id" : "cmdbox",
                        "type" : "cmdbox",
                        "width" : "8em",
                        "caption" : "cmdbox"
                    },
                    {
                        "id" : "popbox",
                        "type" : "popbox",
                        "width" : "8em",
                        "caption" : "popbox"
                    },
                    {
                        "id" : "date",
                        "type" : "date",
                        "width" : "8em",
                        "caption" : "date"
                    },
                    {
                        "id" : "time",
                        "type" : "time",
                        "width" : "8em",
                        "caption" : "time"
                    },
                    {
                        "id" : "datetime",
                        "type" : "datetime",
                        "width" : "8em",
                        "caption" : "datetime"
                    },
                    {
                        "id" : "color",
                        "type" : "color",
                        "width" : "8em",
                        "caption" : "color"
                    },
                    {
                        "id" : "spin",
                        "type" : "spin",
                        "width" : "8em",
                        "caption" : "spin"
                    },
                    {
                        "id" : "counter",
                        "type" : "counter",
                        "width" : "8em",
                        "caption" : "counter"
                    },
                    {
                        "id" : "currency",
                        "type" : "currency",
                        "width" : "8em",
                        "caption" : "currency"
                    },
                    {
                        "id" : "number",
                        "type" : "number",
                        "width" : "8em",
                        "caption" : "number"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "label1"
                            },
                            {
                                "value" : "input1"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "00:00"
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "#FFFFFF"
                            },
                            {
                                "value" : 0.12
                            },
                            {
                                "value" : 0.12
                            },
                            {
                                "value" : 23.44
                            },
                            {
                                "value" : 43.23
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "label2"
                            },
                            {
                                "value" : "input2"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "02:00"
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "#F0F0F0"
                            },
                            {
                                "value" : 0.13
                            },
                            {
                                "value" : 0.13
                            },
                            {
                                "value" : 123
                            },
                            {
                                "value" : 56.32
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "label3"
                            },
                            {
                                "value" : "input3"
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "03:00"
                            },
                            {
                                "value" : "2023-06-28 13:06:24"
                            },
                            {
                                "value" : "#0F0F0F"
                            },
                            {
                                "value" : 0.14
                            },
                            {
                                "value" : 0.14
                            },
                            {
                                "value" : 233.55
                            },
                            {
                                "value" : 43.53
                            }
                        ]
                    }
                ])
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
 /*           var check = xui.create("xui.UI.CheckBox")
                .setHost(ns)
                .setName("A1")
                .setHAlign("center")
                .setVAlign("middle")
                .onChange("_xui_ui_checkbox371_onchange")
                .setCaption("");
            ns.layout.append(check, "A1");
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
            },
                /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
                _btn1_onclick:function(profile, e, src, value){
                    var ns = this, uictrl = profile.boxing();
                    //xui.alert(ns.type.getValue());
                    //ns.db.updateDataFromUI();
                    //var data = ns.db.getData();
                   // var data = ns.grid11.getRowMap();
                    var f = ns.combo5.n0.beforeComboPop;
                    console.log(f);
                    ns[f](ns.combo5.getProfile());
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
                    _xui_ui_checkbox6_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
                        var ns = this, uictrl = profile.boxing();
                        console.log("changed");
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
        _xui_ui_checkbox371_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            console.log("!")
        },
            /**
         * Fired after setUIValue is called
         * @method afterUIValueSet [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
            _combo5_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
                var ns = this, uictrl = profile.boxing();
                console.log("UI Value Set");
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
        _combo5_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            console.log("OnChange");
        },
        /**
         * Fired when control's inner value is changed!
         * @method onValueChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue ,  old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _combo5_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
              console.log("OnValueChange");
        },
            /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
            _combo5_beforecombopop:function(profile, pos, e, src){
                var ns = this, uictrl = profile.boxing();
                xui.alert("beforeComboPop");
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