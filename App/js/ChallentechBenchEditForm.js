// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ChallentechBenchEditForm', 'xui.Module',{
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
                .setHost(host,"cdb")
                .setName("cdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("3.3333333333333335em")
                .setTop("1.5238095238095237em")
                .setWidth("65.33333333333333em")
                .setHeight("39.8em")
                .setCaption("Challentech Bench 維修工單")
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
                .setHost(host,"xui_ui_div2069")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("3.4285714285714284em")
                .setHeight("3.2666666666666666em")
            );
            
            host.xui_ui_div2069.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7112")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("客戶名稱")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div2069.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2895")
                .setName("日期")
                .setDataBinder("cdb")
                .setDataField("日期")
                .setLeft("16.666666666666668em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div2069.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("cdb")
                .setDataField("登錄編號")
                .setLeft("28.666666666666668em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
            );
            
            host.xui_ui_div2069.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox583")
                .setDataBinder("cdb")
                .setDataField("Report")
                .setLeft("44em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2070")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("3.4285714285714284em")
                .setHeight("3em")
            );
            
            host.xui_ui_div2070.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7115")
                .setName("品名")
                .setDataBinder("cdb")
                .setDataField("品名")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("品名")
                .setMaxlength("32")
            );
            
            host.xui_ui_div2070.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7116")
                .setName("P/N")
                .setDataBinder("cdb")
                .setDataField("P/N")
                .setLeft("16.666666666666668em")
                .setTop("0.6em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_div2070.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7117")
                .setName("S/N")
                .setDataBinder("cdb")
                .setDataField("S/N")
                .setLeft("28.666666666666668em")
                .setTop("0.6em")
                .setWidth("14em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_div2070.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setLeft("44.4em")
                .setTop("0.26666666666666666em")
                .setWidth("9.266666666666667em")
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2075")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("4.190476190476191em")
                .setHeight("2.8em")
            );
            
            host.xui_ui_div2075.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7123")
                .setName("Remark")
                .setDataBinder("cdb")
                .setDataField("Remark")
                .setLeft("28.666666666666668em")
                .setTop("0.26666666666666666em")
                .setWidth("22.666666666666668em")
                .setLabelSize("5em")
                .setLabelCaption("Remark")
                .setMaxlength("32")
            );
            
            host.xui_ui_div2075.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1598")
                .setDataBinder("cdb")
                .setDataField("Type")
                .setItems([
                    {
                        "id" : "Repair",
                        "caption" : "Repair",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CIC/W",
                        "caption" : "CIC/W",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Exchange",
                        "caption" : "Exchange",
                        "imageClass" : "",
                        "disabled" : false
                    },
                    {
                        "id" : "OT",
                        "caption" : "Test/Other",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("0.6666666666666666em")
                .setTop("-0.06666666666666667em")
                .setWidth("30.2em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2078")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("4.190476190476191em")
                .setHeight("3em")
            );
            
            host.xui_ui_div2078.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7131")
                .setName("上次登錄編號")
                .setDataBinder("cdb")
                .setDataField("上次登錄編號")
                .setLeft("-0.4em")
                .setTop("0.6em")
                .setWidth("15.733333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div2078.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2902")
                .setName("上次登錄時間")
                .setDataBinder("cdb")
                .setDataField("上次登錄時間")
                .setLeft("15.333333333333334em")
                .setTop("0.6em")
                .setWidth("16.066666666666666em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div2078.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7134")
                .setName("Runtime")
                .setDataBinder("cdb")
                .setDataField("Runtime")
                .setLeft("31.333333333333332em")
                .setTop("0.6em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("Runtime")
                .setMaxlength("20")
            );
            
            host.xui_ui_div2078.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1595")
                .setLeft("46em")
                .setTop("0.8666666666666667em")
                .setCaption("hrs")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2083")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("4.190476190476191em")
                .setHeight("3em")
            );
            
            host.xui_ui_div2083.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7148")
                .setName("上次故障原因")
                .setDataBinder("cdb")
                .setDataField("上次故障原因")
                .setLeft("-0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("46.666666666666664em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2086")
                .setDock("top")
                .setLeft("11.657142857142857em")
                .setTop("4.9523809523809526em")
                .setHeight("3em")
            );
            
            host.xui_ui_div2086.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1602")
                .setDataBinder("cdb")
                .setDataField("配件是否齊全")
                .setItems([
                    {
                        "id" : "Y",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "N",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("0em")
                .setTop("0.3333333333333333em")
                .setWidth("15.733333333333333em")
                .setHeight("1.9047619047619047em")
                .setLabelSize("7em")
                .setLabelGap("0em")
                .setLabelCaption("配件是否齊全")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div2086.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7152")
                .setName("上次登錄編號")
                .setDataBinder("cdb")
                .setDataField("配件是否齊全#2")
                .setLeft("16em")
                .setTop("0.6em")
                .setWidth("9.333333333333334em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div2086.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7153")
                .setName("Software")
                .setDataBinder("cdb")
                .setDataField("Software")
                .setLeft("26em")
                .setTop("0.6em")
                .setWidth("15.733333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Software")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2093")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("4.190476190476191em")
                .setHeight("3em")
            );
            
            host.xui_ui_div2093.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7165")
                .setName("入廠原因")
                .setDataBinder("cdb")
                .setDataField("入廠原因")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("49.333333333333336em")
                .setLabelSize("5em")
                .setLabelCaption("入廠原因")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2094")
                .setDock("top")
                .setLeft("11.657142857142857em")
                .setTop("4.9523809523809526em")
                .setHeight("4.866666666666666em")
            );
            
            host.xui_ui_div2094.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7168")
                .setName("故障原因")
                .setDataBinder("cdb")
                .setDataField("故障原因")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("49.333333333333336em")
                .setHeight("4em")
                .setLabelSize("5em")
                .setLabelCaption("故障原因")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2095")
                .setDock("top")
                .setLeft("12.41904761904762em")
                .setTop("5.714285714285714em")
                .setHeight("4.866666666666666em")
            );
            
            host.xui_ui_div2095.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7169")
                .setName("處理方法")
                .setDataBinder("cdb")
                .setDataField("處理方法")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("49.333333333333336em")
                .setHeight("4em")
                .setLabelSize("5em")
                .setLabelCaption("處理方法")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2146")
                .setDock("top")
                .setLeft("11.657142857142857em")
                .setTop("4.9523809523809526em")
                .setHeight("3.6em")
            );
            
            host.xui_ui_div2146.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7234")
                .setDataBinder("cdb")
                .setDataField("維修時間起A")
                .setLeft("-0.6666666666666666em")
                .setTop("1.2666666666666666em")
                .setWidth("13.714285714285714em")
                .setLabelSize("8em")
                .setLabelCaption("維修時間&ensp;起")
            );
            
            host.xui_ui_div2146.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7235")
                .setDataBinder("cdb")
                .setDataField("訖A")
                .setLeft("14.533333333333333em")
                .setTop("1.2666666666666666em")
                .setWidth("7.314285714285714em")
                .setLabelSize("1.5em")
                .setLabelCaption("訖")
            );
            
            host.xui_ui_div2146.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7236")
                .setDataBinder("cdb")
                .setDataField("計A")
                .setLeft("23.666666666666668em")
                .setTop("1.2666666666666666em")
                .setWidth("7.771428571428571em")
                .setLabelSize("1.5em")
                .setLabelCaption("計")
            );
            
            host.xui_ui_div2146.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7237")
                .setDataBinder("cdb")
                .setDataField("維修簽名")
                .setLeft("34em")
                .setTop("1.2666666666666666em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
            );
            
            host.xui_ui_div2146.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2934")
                .setDataBinder("cdb")
                .setDataField("維修日期")
                .setLeft("43em")
                .setTop("1.2666666666666666em")
                .setWidth("8.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2147")
                .setDock("top")
                .setLeft("13.18095238095238em")
                .setTop("6.476190476190476em")
                .setHeight("7.733333333333333em")
            );
            
            host.xui_ui_div2147.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7238")
                .setName("Test Data")
                .setDataBinder("cdb")
                .setDataField("Test Data")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("49.333333333333336em")
                .setHeight("6.666666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("Test Data")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2181")
                .setDock("top")
                .setLeft("12.41904761904762em")
                .setTop("5.714285714285714em")
                .setHeight("3.6em")
            );
            
            host.xui_ui_div2181.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7296")
                .setDataBinder("cdb")
                .setDataField("檢測時間起B")
                .setLeft("-0.6666666666666666em")
                .setTop("1.2666666666666666em")
                .setWidth("13.714285714285714em")
                .setLabelSize("8em")
                .setLabelCaption("檢測時間&ensp;起")
            );
            
            host.xui_ui_div2181.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7297")
                .setDataBinder("cdb")
                .setDataField("訖B")
                .setLeft("14.533333333333333em")
                .setTop("1.2666666666666666em")
                .setWidth("7.314285714285714em")
                .setLabelSize("1.5em")
                .setLabelCaption("訖")
            );
            
            host.xui_ui_div2181.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7298")
                .setDataBinder("cdb")
                .setDataField("計B")
                .setLeft("23.666666666666668em")
                .setTop("1.2666666666666666em")
                .setWidth("7.771428571428571em")
                .setLabelSize("1.5em")
                .setLabelCaption("計")
            );
            
            host.xui_ui_div2181.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7299")
                .setDataBinder("cdb")
                .setDataField("檢測簽名")
                .setLeft("34em")
                .setTop("1.2666666666666666em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
            );
            
            host.xui_ui_div2181.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2945")
                .setDataBinder("cdb")
                .setDataField("檢測日期")
                .setLeft("43em")
                .setTop("1.2666666666666666em")
                .setWidth("8.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
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
            console.log(utils.createDDL(ns.dialog,"ChallentechBench維修工單"))
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
         * Fired when control's inner value is changed!
         * @method onValueChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue ,  old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
                _repairno_onvaluechange:function(profile, oldValue, newValue, force, tag){
                    var ns = this, uictrl = profile.boxing();
                    utils.updateNewWorkSheetValue(ns.cdb, newValue);
                },
                    /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
                    _lastworksheetbtn_onclick:function(profile, e, src, value){
                        var ns = this, uictrl = profile.boxing();
                        utils.showLastWorkSheet(ns,"ChallentechBenchEditForm", "ChallentechBench維修工單", 'S/N');
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