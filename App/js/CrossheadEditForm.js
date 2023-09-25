// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CrossheadEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "Crosshead維修工單",
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
                .setHost(host,"crdb")
                .setName("crdb")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"crdb2")
                .setName("crdb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("10.6em")
                .setTop("1.2666666666666666em")
                .setWidth("60em")
                .setHeight("48.76190476190476em")
                .setCaption("Crosshead維修工單")
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
                .setHost(host,"nextBtn")
                .setAutoTips(false)
                .setLeft("32.666666666666664em")
                .setTop("0.8666666666666667em")
                .setWidth("10.333333333333334em")
                .setCaption("工單到下一站")
                .setType("drop")
                .onClick("_nextbtn_onclick")
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
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div868")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("3.4285714285714284em")
                .setHeight("5.933333333333334em")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Input")
                .setHost(host,"customer")
                .setName("客戶名稱")
                .setDataBinder("crdb")
                .setDataField("客戶名稱")
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Input")
                .setHost(host,"pump")
                .setName("Pump")
                .setDataBinder("crdb")
                .setDataField("上次登錄編號")
                .setLeft("26em")
                .setTop("0.6em")
                .setWidth("16em")
                .setLabelSize("9em")
                .setLabelCaption("Pump上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"date")
                .setName("日期")
                .setDataBinder("crdb")
                .setDataField("日期")
                .setLeft("13.333333333333334em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setLeft("45.333333333333336em")
                .setTop("3.2666666666666666em")
                .setWidth("10em")
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sheetType")
                .setDataBinder("crdb")
                .setDataField("工單類別")
                .setLeft("0.6666666666666666em")
                .setTop("3.2666666666666666em")
                .setWidth("15.333333333333334em")
                .setLabelSize("5em")
                .setLabelCaption("工單類別")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "Crosshead",
                        "caption" : "Crosshead"
                    },
                    {
                        "id" : "SHI Crosshead",
                        "caption" : "SHI Crosshead"
                    }
                ])
                .setValue("Crosshead")
                .onValueChange("_sheettype_onvaluechange")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setLeft("16.733333333333334em")
                .setTop("3.2em")
                .setWidth("8.666666666666666em")
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("26.666666666666668em")
                .setTop("3.1333333333333333em")
                .setWidth("8.666666666666666em")
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("登錄編號")
                .setLeft("42em")
                .setTop("0.7333333333333333em")
                .setWidth("13.266666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("getter")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
            );
            
            host.xui_ui_div868.append(
                xui.create("xui.UI.Button")
                .setHost(host,"changeRepairBtn")
                .setTips("更換登錄編號")
                .setLeft("55.46666666666667em")
                .setTop("0.6em")
                .setCaption("▼")
                .onClick("_changerepairbtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs1")
                .setItems([
                    {
                        "id" : "d",
                        "caption" : "基本資料登錄"
                    },
                    {
                        "id" : "a",
                        "caption" : "A.Motor",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "B. Driver Housing & Valve Plate"
                    },
                    {
                        "id" : "c",
                        "caption" : "C.整體組裝"
                    }
                ])
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setValue("d")
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("16.761904761904763em")
                .setTop("11.428571428571429em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div908")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("3.8095238095238093em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div908.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1736")
                .setDataBinder("crdb")
                .setDataField("A1#1")
                .setDirtyMark(true)
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.057142857142857em")
                .setTop("8.380952380952381em")
                .setWidth("22.78095238095238em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("9em")
                .setLabelGap("0em")
                .setLabelCaption("1.軸心規格：原規格")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div908.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox800")
                .setDataBinder("crdb")
                .setDataField("A1#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("25.676190476190477em")
                .setTop("8.761904761904763em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("更換軸心")
            );
            
            host.xui_ui_div908.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1737")
                .setDataBinder("crdb")
                .setDataField("A1#3")
                .setDirtyMark(true)
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("31.61904761904762em")
                .setTop("8.304761904761905em")
                .setWidth("22.78095238095238em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelGap("0em")
                .setLabelCaption("更換後規格")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div909")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("6.857142857142857em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5626")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A2#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("10.742857142857142em")
                .setWidth("12.952380952380953em")
                .setLabelSize("8em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5627")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A2#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("10.81904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5628")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A2#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.01904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5629")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A2#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("27.961904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("8.533333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Ω  ⏚")
                .setMaxlength("20")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox803")
                .setDataBinder("rdb")
                .setDataField("Report")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("37.333333333333336em")
                .setTop("10.971428571428572em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("更換線圈")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5630")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A2#5")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("43.50476190476191em")
                .setTop("10.81904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div910")
                .setDock("top")
                .setLeft("7.085714285714285em")
                .setTop("4.723809523809524em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div910.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5635")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A3#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.1333333333333333em")
                .setTop("12.952380952380953em")
                .setWidth("12.495238095238095em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("5em")
                .setLabelCaption("3.線圈編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div910.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1740")
                .setDataBinder("crdb")
                .setDataField("A3#2")
                .setItems([
                    {
                        "id" : "CTI",
                        "caption" : "CTI",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CIC",
                        "caption" : "CIC",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("12.8em")
                .setWidth("11.047619047619047em")
                .setHeight("2.2095238095238097em")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div910.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox806")
                .setDataBinder("crdb")
                .setDataField("A3#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("27.428571428571427em")
                .setTop("13.028571428571428em")
                .setWidth("10.285714285714286em")
                .setIconPos("right")
                .setCaption("PCB焊點接點確認")
            );
            
            host.xui_ui_div910.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5636")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A3#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("38.095238095238095em")
                .setTop("12.952380952380953em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div911")
                .setDock("top")
                .setLeft("9.142857142857142em")
                .setTop("9.142857142857142em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div911.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5641")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A4#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("12.495238095238095em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("6em")
                .setLabelCaption("1.5KV   IR:")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div911.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox811")
                .setDataBinder("crdb")
                .setDataField("A4#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(0)
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("7.619047619047619em")
                .setHeight("2.6666666666666665em")
                .setVAlign("middle")
                .setIconPos("right")
                .setCaption("4.Hippo Test")
                .setCustomStyle({
                    "CAPTION" : {
                        "margin" : "-42px 0px 0px 0px"
                    }
                })
            );
            
            host.xui_ui_div911.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5642")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A4#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("21.333333333333332em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelCaption("AC:")
                .setMaxlength("20")
            );
            
            host.xui_ui_div911.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label477")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("1.7523809523809524em")
                .setCaption("mA")
            );
            
            host.xui_ui_div911.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox812")
                .setDataBinder("crdb")
                .setDataField("A4#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div912")
                .setDock("top")
                .setLeft("6.095238095238095em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div912.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1745")
                .setDataBinder("crdb")
                .setDataField("A5#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("22.17142857142857em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("9em")
                .setLabelGap("0em")
                .setLabelCaption("5.Motor Bearing：前")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div912.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1746")
                .setDataBinder("crdb")
                .setDataField("A5#2")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.38095238095238em")
                .setTop("17.295238095238094em")
                .setWidth("13.028571428571428em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("2em")
                .setLabelGap("0em")
                .setLabelCaption("/ 後")
                .setLabelHAlign("left")
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
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div963")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div963.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1803")
                .setDataBinder("crdb")
                .setDataField("A6#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("18em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("7em")
                .setLabelGap("0em")
                .setLabelCaption("6.Motor面板:  前")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div963.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox855")
                .setDataBinder("crdb")
                .setDataField("A6#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("26.438095238095237em")
                .setTop("9.523809523809524em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("/ 剛套")
            );
            
            host.xui_ui_div963.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox856")
                .setDataBinder("crdb")
                .setDataField("A6#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("27.2em")
                .setTop("10.285714285714286em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("/ 壓痕")
            );
            
            host.xui_ui_div963.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5789")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A6#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelCaption("內徑")
                .setMaxlength("20")
            );
            
            host.xui_ui_div963.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox859")
                .setDataBinder("crdb")
                .setDataField("A6#5")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div971")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div971.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1813")
                .setDataBinder("crdb")
                .setDataField("A6#6")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("18em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("7em")
                .setLabelGap("0em")
                .setLabelCaption("後")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div971.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox868")
                .setDataBinder("crdb")
                .setDataField("A6#7")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("26.438095238095237em")
                .setTop("9.523809523809524em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("/ 剛套")
            );
            
            host.xui_ui_div971.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox869")
                .setDataBinder("crdb")
                .setDataField("A6#8")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("27.2em")
                .setTop("10.285714285714286em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("/ 壓痕")
            );
            
            host.xui_ui_div971.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5809")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A6#9")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelCaption("內徑")
                .setMaxlength("20")
            );
            
            host.xui_ui_div971.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox870")
                .setDataBinder("crdb")
                .setDataField("A6#10")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div980")
                .setDock("top")
                .setLeft("9.371428571428572em")
                .setTop("18.438095238095237em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div980.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label490")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9em")
                .setHeight("1.7523809523809524em")
                .setCaption("7.電源接頭 50 in-lb")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div980.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox884")
                .setDataBinder("crdb")
                .setDataField("A7#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_div980.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label491")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setHeight("1.7523809523809524em")
                .setCaption("/ 焊點接點確認")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div980.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox909")
                .setDataBinder("crdb")
                .setDataField("A7#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("37.02857142857143em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1019")
                .setDock("top")
                .setLeft("16em")
                .setTop("7.619047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5916")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("10.742857142857142em")
                .setWidth("14em")
                .setLabelSize("9em")
                .setLabelCaption("8.軸心Washer 片數")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5917")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("10.81904761904762em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("順序")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5918")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.01904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5969")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.78095238095238em")
                .setTop("11.657142857142857em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5970")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#5")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("23.542857142857144em")
                .setTop("12.41904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1019.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5971")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A8#6")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.304761904761904em")
                .setTop("13.18095238095238em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1040")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("19.2em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1040.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label510")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("7em")
                .setHeight("1.7523809523809524em")
                .setCaption("9.螺桿 30 in-lb")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1040.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox967")
                .setDataBinder("crdb")
                .setDataField("A9#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_div1040.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5974")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A9#2")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("38.857142857142854em")
                .setTop("13.714285714285714em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1074")
                .setDock("top")
                .setLeft("9.904761904761905em")
                .setTop("9.904761904761905em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1074.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6053")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A10#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("14em")
                .setLabelCaption("10.軸心 Spring Push Test：1<sup>st</sup>   ")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1074.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6054")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A10#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("21.333333333333332em")
                .setTop("-0.0761904761904762em")
                .setWidth("13em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("5em")
                .setLabelCaption("mm / 2nd  ")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1074.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label524")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("1.7523809523809524em")
                .setCaption("mm")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1099")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("19.2em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1099.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox1043")
                .setDataBinder("crdb")
                .setDataField("A11#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setHeight("2.5904761904761906em")
                .setVAlign("middle")
                .setIconPos("right")
                .setCaption("11.充磁      ")
            );
            
            host.xui_ui_div1099.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label536")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setHeight("2.4380952380952383em")
                .setCaption(" RPM")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1099.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6113")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A11#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.857142857142858em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelCaption("內徑")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1099.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6114")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A11#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("23.61904761904762em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("4em")
                .setLabelCaption("V /扭力")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1099.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6115")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A11#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("24.38095238095238em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelCaption(" in-lb / ")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1100")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1100.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6116")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("A12#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("22em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("16em")
                .setLabelCaption("12軸心偏心值(標準值範圍0.24mm)")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1100.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label537")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("1.7523809523809524em")
                .setCaption("mm")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1115")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("19.961904761904762em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1115.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label545")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setHeight("1.7523809523809524em")
                .setCaption("13.異音Test/聽診器確認")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1115.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox1060")
                .setDataBinder("crdb")
                .setDataField("A13#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("11.428571428571429em")
                .setTop("14.476190476190476em")
                .setConDockPadding({
                    "left" : 10,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                }),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div119")
                .setDock("top")
                .setLeft("9.904761904761905em")
                .setTop("9.904761904761905em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div119.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input133")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("B1#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("14em")
                .setLabelCaption("1.Driver Housing Bushing 孔徑 ")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div119.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label36")
                .setDataBinder("crdb")
                .setDataField("C1#1")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("8em")
                .setCaption(" / 80 lb推力測試")
            );
            
            host.xui_ui_div119.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox44")
                .setDataBinder("crdb")
                .setDataField("B1#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div186")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div186.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input285")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("B1#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("14em")
                .setLabelCaption("Valve Plate Bushing    孔徑")
                .setMaxlength("20")
            );
            
            host.xui_ui_div186.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label73")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("8em")
                .setCaption(" / 80 lb推力測試")
            );
            
            host.xui_ui_div186.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox113")
                .setDataBinder("crdb")
                .setDataField("B1#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div208")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div208.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox137")
                .setDataBinder("crdb")
                .setDataField("B2#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("24em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("2.Timing Valve Bearing：Inlet")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div208.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox138")
                .setDataBinder("crdb")
                .setDataField("B2#2")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.38095238095238em")
                .setTop("17.295238095238094em")
                .setWidth("16em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("4em")
                .setLabelGap("0em")
                .setLabelCaption("/   Exhaust")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div227")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div227.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox150")
                .setDataBinder("crdb")
                .setDataField("B3#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("20em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("3.Driver Bearing")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div227.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label107")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("32em")
                .setTop("0.45714285714285713em")
                .setWidth("8em")
                .setHeight("1.6761904761904762em")
                .setCaption("/  高度間距確認")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div227.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox170")
                .setDataBinder("crdb")
                .setDataField("B3#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setHeight("2.1333333333333333em")
                .setVAlign("bottom")
                .setCaption("PASS")
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div271")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div271.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label121")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("18em")
                .setCaption("4.Timing Valve Support Bracket 12 in-lb")
                .setHAlign("left")
            );
            
            host.xui_ui_div271.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox192")
                .setDataBinder("crdb")
                .setDataField("B4#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div312")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div312.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label146")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("15em")
                .setCaption("5.Valve Body Inleakage Gas Test")
                .setHAlign("left")
            );
            
            host.xui_ui_div312.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox233")
                .setDataBinder("crdb")
                .setDataField("B5#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("5em")
                .setCaption("PASS")
            );
            
            host.xui_ui_div312.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input496")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("B5#2")
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("35.80952380952381em")
                .setTop("-0.0761904761904762em")
                .setWidth("8.380952380952381em")
                .setLabelSize("1em")
                .setLabelCaption(":")
                .setMaxlength("20")
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div443")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div443.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label233")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("11em")
                .setCaption("6.Timing Valve校正工具")
                .setHAlign("left")
            );
            
            host.xui_ui_div443.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox372")
                .setDataBinder("crdb")
                .setDataField("B6#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("4em")
                .setCaption("A / ")
            );
            
            host.xui_ui_div443.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input718")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("B6#3")
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("35.80952380952381em")
                .setTop("-0.0761904761904762em")
                .setWidth("8.380952380952381em")
                .setLabelSize("1em")
                .setLabelCaption(":")
                .setMaxlength("20")
            );
            
            host.xui_ui_div443.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox373")
                .setDataBinder("crdb")
                .setDataField("B6#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("5em")
                .setCaption("Other")
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("16em")
                .setTop("13.714285714285714em")
                .setConDockPadding({
                    "left" : 10,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                }),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div492")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label264")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("22em")
                .setCaption("1.Driver Housing & Valve Plate & Motor 60 in-lbs")
                .setHAlign("left")
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox422")
                .setDataBinder("crdb")
                .setDataField("C1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div516")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div516.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label280")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("6em")
                .setCaption("2.異音 Test")
                .setHAlign("left")
            );
            
            host.xui_ui_div516.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox447")
                .setDataBinder("crdb")
                .setDataField("C2#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div541")
                .setDock("top")
                .setLeft("12.952380952380953em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div541.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label297")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("6em")
                .setCaption("3.Leak Test")
                .setHAlign("left")
            );
            
            host.xui_ui_div541.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox473")
                .setDataBinder("crdb")
                .setDataField("C3#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1101")
                .setDock("top")
                .setDockOrder(10)
                .setLeft("14.476190476190476em")
                .setTop("14.476190476190476em")
                .setHeight("5.333333333333333em")
            );
            
            host.xui_ui_div1101.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameC")
                .setName("C組裝簽名")
                .setDataBinder("crdb")
                .setDataField("C組裝簽名")
                .setLeft("7.466666666666667em")
                .setTop("0.6857142857142857em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namec_onclick")
            );
            
            host.xui_ui_div1101.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderC")
                .setName("C組長覆核")
                .setDataBinder("crdb")
                .setDataField("C組長覆核")
                .setLeft("7.466666666666667em")
                .setTop("2.6666666666666665em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderc_onclick")
            );
            
            host.xui_ui_div1101.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateC")
                .setName("日期")
                .setDataBinder("crdb")
                .setDataField("C組裝日期")
                .setReadonly(true)
                .setLeft("26.133333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div1101.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderC")
                .setName("日期")
                .setDataBinder("crdb")
                .setDataField("C覆核日期")
                .setReadonly(true)
                .setLeft("26.133333333333333em")
                .setTop("2.9714285714285715em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout2")
                .setDock("top")
                .setDockOrder(6)
                .setDockMargin({
                    "left" : 0,
                    "top" : 0,
                    "right" : 20,
                    "bottom" : 0
                })
                .setLeft("9.142857142857142em")
                .setTop("8.304761904761905em")
                .setWidth("56.93333333333333em")
                .setHeight("17.066666666666666em")
                .setLayoutData({
                    "rows" : 7,
                    "cols" : 11,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 7,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 4,
                            "rowspan" : 7,
                            "colspan" : 4,
                            "removed" : false
                        }
                    ],
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
                        },
                        "6" : {
                            "manualHeight" : 30
                        },
                        "7" : {
                            "manualHeight" : 30
                        }
                    },
                    "colSetting" : {
                        "B" : {
                            "manualWidth" : 50
                        },
                        "C" : {
                            "manualWidth" : 50
                        },
                        "D" : {
                            "manualWidth" : 50
                        },
                        "F" : {
                            "manualWidth" : 50
                        },
                        "G" : {
                            "manualWidth" : 50
                        },
                        "H" : {
                            "manualWidth" : 50
                        }
                    },
                    "cells" : {
                        "I1" : {
                            "value" : "面板",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "J1" : {
                            "value" : "前",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "K1" : {
                            "value" : "後",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I2" : {
                            "value" : "鋼套 \n內徑",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I4" : {
                            "value" : "真圓度",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I6" : {
                            "value" : "同心圓",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div619")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("13.666666666666666em"),
                "A1"
            );
            
            host.xui_ui_div619.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input982")
                .setDataBinder("crdb")
                .setDataField("異常原因")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("異常原因")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div620")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.333333333333332em")
                .setHeight("13.666666666666666em"),
                "E1"
            );
            
            host.xui_ui_div620.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input983")
                .setDataBinder("crdb")
                .setDataField("維修處理")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("維修處理")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1098")
                .setName("J2")
                .setDataBinder("crdb")
                .setDataField("面板#1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J2"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1138")
                .setName("J4")
                .setDataBinder("crdb")
                .setDataField("面板#3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J4"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1139")
                .setName("K2")
                .setDataBinder("crdb")
                .setDataField("面板#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K2"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1140")
                .setName("K4")
                .setDataBinder("crdb")
                .setDataField("面板#4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K4"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1141")
                .setName("J6")
                .setDataBinder("crdb")
                .setDataField("面板#5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J6"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1142")
                .setName("K6")
                .setDataBinder("crdb")
                .setDataField("面板#6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K6"
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block758")
                .setDock("fill")
                .setLeft("12.666666666666666em")
                .setTop("4.666666666666667em"),
                "d"
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3491")
                .setDataBinder("crdb")
                .setDataField("Model")
                .setItems([
                    {
                        "id" : "OB-M350",
                        "caption" : "OB-M350",
                        "imageClass" : ""
                    },
                    {
                        "id" : "OB-M1020/50",
                        "caption" : "OB-M1020/50",
                        "imageClass" : ""
                    },
                    {
                        "id" : "OB-M350 3PH",
                        "caption" : "OB-M350 3PH",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CT-M350",
                        "caption" : "CT-M350"
                    },
                    {
                        "id" : "CT-M1020/50",
                        "caption" : "CT-M1020/50"
                    },
                    {
                        "id" : "IS-M600/M900",
                        "caption" : "IS-M600/M900"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
                .setLeft("2.2857142857142856em")
                .setTop("0.6666666666666666em")
                .setWidth("38.095238095238095em")
                .setHeight("4.571428571428571em")
                .setLabelSize("5em")
                .setLabelCaption("Model")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5913")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("Model#2")
                .setLeft("40.38095238095238em")
                .setTop("1em")
                .setWidth("9.142857142857142em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3492")
                .setDataBinder("crdb")
                .setDataField("維修方式")
                .setItems([
                    {
                        "id" : "Overhaul",
                        "caption" : "Overhaul",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔校正",
                        "caption" : "清潔校正",
                        "imageClass" : ""
                    }
                ])
                .setLeft("2.2857142857142856em")
                .setTop("5.266666666666667em")
                .setWidth("20.571428571428573em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("維修方式")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5914")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("S/N")
                .setLeft("22.095238095238095em")
                .setTop("5.533333333333333em")
                .setWidth("14.476190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead S/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5915")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("S/N#2")
                .setLeft("36.57142857142857em")
                .setTop("5.533333333333333em")
                .setWidth("8.380952380952381em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5919")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("Running Time")
                .setLeft("0.6095238095238096em")
                .setTop("10em")
                .setWidth("14.476190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Running Time")
                .setMaxlength("20")
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5920")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("Remark")
                .setLeft("16em")
                .setTop("10em")
                .setWidth("39.923809523809524em")
                .setLabelSize("4em")
                .setLabelCaption("Remark")
                .setMaxlength("20")
            );
            
            host.xui_ui_block758.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5921")
                .setName("登錄編號")
                .setDataBinder("crdb")
                .setDataField("Crosshead編號")
                .setLeft("2em")
                .setTop("8em")
                .setWidth("17.333333333333332em")
                .setLabelSize("10em")
                .setLabelCaption("Crosshead 編號：XH")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs2")
                .setItems([
                    {
                        "id" : "d",
                        "caption" : "基本資料登錄"
                    },
                    {
                        "id" : "a",
                        "caption" : "A.Motor",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "B. Driver Housing"
                    },
                    {
                        "id" : "c",
                        "caption" : "C.整體組裝"
                    }
                ])
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setValue("d")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block385")
                .setDock("fill")
                .setLeft("16.761904761904763em")
                .setTop("11.428571428571429em"),
                "a"
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1049")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("3.8095238095238093em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1049.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1590")
                .setDataBinder("crdb2")
                .setDataField("A1#1")
                .setDirtyMark(true)
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.057142857142857em")
                .setTop("8.380952380952381em")
                .setWidth("22.78095238095238em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("9em")
                .setLabelGap("0em")
                .setLabelCaption("1.軸心規格：原規格")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1049.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox435")
                .setDataBinder("crdb2")
                .setDataField("A1#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("25.676190476190477em")
                .setTop("8.761904761904763em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("更換軸心")
            );
            
            host.xui_ui_div1049.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1591")
                .setDataBinder("crdb2")
                .setDataField("A1#3")
                .setDirtyMark(true)
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("31.61904761904762em")
                .setTop("8.304761904761905em")
                .setWidth("22.78095238095238em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelGap("0em")
                .setLabelCaption("更換後規格")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1050")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("6.857142857142857em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2809")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A2#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("10.742857142857142em")
                .setWidth("12.952380952380953em")
                .setLabelSize("8em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2810")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A2#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("10.81904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2811")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A2#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.01904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2812")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A2#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("27.961904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("8.533333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Ω  ⏚")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox436")
                .setDataBinder("rdb")
                .setDataField("A2#5")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("37.333333333333336em")
                .setTop("10.971428571428572em")
                .setWidth("6.095238095238095em")
                .setIconPos("right")
                .setCaption("更換線圈")
            );
            
            host.xui_ui_div1050.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2813")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A2#6")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("43.50476190476191em")
                .setTop("10.81904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1051")
                .setDock("top")
                .setLeft("7.085714285714285em")
                .setTop("4.723809523809524em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1051.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2814")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A3#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.1333333333333333em")
                .setTop("12.952380952380953em")
                .setWidth("12.495238095238095em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("5em")
                .setLabelCaption("3.線圈編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1051.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1592")
                .setDataBinder("crdb2")
                .setDataField("A3#2")
                .setItems([
                    {
                        "id" : "SHI",
                        "caption" : "SHI",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CIC",
                        "caption" : "CIC",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("12.8em")
                .setWidth("11.047619047619047em")
                .setHeight("2.2095238095238097em")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1052")
                .setDock("top")
                .setLeft("6.095238095238095em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1052.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1593")
                .setDataBinder("crdb2")
                .setDataField("A5#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("22.17142857142857em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("9em")
                .setLabelGap("0em")
                .setLabelCaption("4.Motor Bearing：前")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1052.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1594")
                .setDataBinder("crdb2")
                .setDataField("A5#2")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.38095238095238em")
                .setTop("17.295238095238094em")
                .setWidth("13.028571428571428em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("2em")
                .setLabelGap("0em")
                .setLabelCaption("/ 後")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1053")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1053.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1595")
                .setDataBinder("crdb2")
                .setDataField("SA5#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("18em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("7em")
                .setLabelGap("0em")
                .setLabelCaption("5.Motor面板:  前")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1053.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox437")
                .setDataBinder("crdb2")
                .setDataField("SA5#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("26.438095238095237em")
                .setTop("9.523809523809524em")
                .setWidth("5em")
                .setIconPos("right")
                .setCaption("/ 剛套")
            );
            
            host.xui_ui_div1053.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2815")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("SA5#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("-0.0761904761904762em")
                .setWidth("22em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("16em")
                .setLabelCaption("/ Bearing座內徑(Spec-0+0.02mm)")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1053.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox438")
                .setDataBinder("crdb2")
                .setDataField("SA5#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1054")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1054.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1596")
                .setDataBinder("crdb2")
                .setDataField("SA5#5")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("18em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("7em")
                .setLabelGap("0em")
                .setLabelCaption("後")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1054.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox439")
                .setDataBinder("crdb2")
                .setDataField("SA5#6")
                .setDirtyMark(true)
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("26.438095238095237em")
                .setTop("9.523809523809524em")
                .setWidth("5em")
                .setIconPos("right")
                .setCaption("/ 剛套")
            );
            
            host.xui_ui_div1054.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2816")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("SA5#7")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("-0.0761904761904762em")
                .setWidth("22em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("16em")
                .setLabelCaption("/ Bearing座內徑(Spec-0+0.02mm)")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1054.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox440")
                .setDataBinder("crdb2")
                .setDataField("SA5#8")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1055")
                .setDock("top")
                .setLeft("9.371428571428572em")
                .setTop("18.438095238095237em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1055.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label513")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setHeight("1.7523809523809524em")
                .setCaption("6.電源接頭焊點接點確認")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1055.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox441")
                .setDataBinder("crdb2")
                .setDataField("SA6#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_div1055.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label514")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setHeight("1.7523809523809524em")
                .setCaption("/ 固定螺絲 30 in-lb鎖緊 ")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1055.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox442")
                .setDataBinder("crdb2")
                .setDataField("SA6#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("37.02857142857143em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1056")
                .setDock("top")
                .setLeft("16em")
                .setTop("7.619047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2817")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("10.742857142857142em")
                .setWidth("14em")
                .setLabelSize("9em")
                .setLabelCaption("7.軸心Washer 片數")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2818")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("15.238095238095237em")
                .setTop("10.81904761904762em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("順序")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2819")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.01904761904762em")
                .setTop("10.895238095238096em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2820")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.78095238095238em")
                .setTop("11.657142857142857em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2821")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#5")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("23.542857142857144em")
                .setTop("12.41904761904762em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2822")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A8#6")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.304761904761904em")
                .setTop("13.18095238095238em")
                .setWidth("6.095238095238095em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1057")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("19.2em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1057.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label515")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("7em")
                .setHeight("1.7523809523809524em")
                .setCaption("8.螺桿 30 in-lb")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1057.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox443")
                .setDataBinder("crdb2")
                .setDataField("A9#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_div1057.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2823")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A9#2")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("38.857142857142854em")
                .setTop("13.714285714285714em")
                .setWidth("6.095238095238095em")
                .setLabelCaption("2.線圈阻值：1-2")
                .setMaxlength("20")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1058")
                .setDock("top")
                .setLeft("9.904761904761905em")
                .setTop("9.904761904761905em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1058.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2824")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A10#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("14em")
                .setLabelCaption("9.軸心 Spring Push Test：1<sup>st</sup>   ")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1058.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2825")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A10#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("21.333333333333332em")
                .setTop("-0.0761904761904762em")
                .setWidth("13em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("5em")
                .setLabelCaption("mm / 2nd  ")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1058.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label516")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("1.7523809523809524em")
                .setCaption("mm")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1059")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("19.2em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1059.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox444")
                .setDataBinder("crdb2")
                .setDataField("A11#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setHeight("2.5904761904761906em")
                .setVAlign("middle")
                .setIconPos("right")
                .setCaption("10.充磁      ")
            );
            
            host.xui_ui_div1059.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label517")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setHeight("2.4380952380952383em")
                .setCaption(" RPM")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1059.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2826")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A11#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("22.857142857142858em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelCaption("內徑")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1059.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2827")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A11#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("23.61904761904762em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("4em")
                .setLabelCaption("V /扭力")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1059.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2828")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A11#4")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("24.38095238095238em")
                .setTop("-0.0761904761904762em")
                .setWidth("9.676190476190476em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelCaption(" in-lb / ")
                .setMaxlength("20")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1060")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1060.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2829")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("A12#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("9.066666666666666em")
                .setTop("-0.0761904761904762em")
                .setWidth("22em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("16em")
                .setLabelCaption("11.軸心偏心值(標準值範圍0.24mm)")
                .setLabelHAlign("left")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1060.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label518")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("1.7523809523809524em")
                .setCaption("mm")
            );
            
            host.xui_ui_block385.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1061")
                .setDock("top")
                .setLeft("10.895238095238096em")
                .setTop("19.961904761904762em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div1061.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label519")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setHeight("1.7523809523809524em")
                .setCaption("12.異音Test/聽診器確認")
                .setHAlign("left")
                .setVAlign("middle")
            );
            
            host.xui_ui_div1061.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox445")
                .setDataBinder("crdb2")
                .setDataField("A13#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block386")
                .setDock("fill")
                .setLeft("11.428571428571429em")
                .setTop("14.476190476190476em")
                .setConDockPadding({
                    "left" : 10,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                }),
                "b"
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1062")
                .setDock("top")
                .setLeft("9.904761904761905em")
                .setTop("9.904761904761905em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1597")
                .setDataBinder("crdb2")
                .setDataField("SB1#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("18.057142857142857em")
                .setWidth("19em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("1.Driver Bearing")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label520")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("32.76190476190476em")
                .setTop("0.45714285714285713em")
                .setWidth("5em")
                .setHeight("1.6761904761904762em")
                .setCaption("/  上膠固定")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox446")
                .setDataBinder("crdb2")
                .setDataField("SB1#2")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("37.02857142857143em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setHeight("2.1333333333333333em")
                .setVAlign("bottom")
                .setCaption("PASS")
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label521")
                .setDock("top")
                .setDockOrder(5)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("33.523809523809526em")
                .setTop("0.45714285714285713em")
                .setWidth("7em")
                .setHeight("1.6761904761904762em")
                .setCaption("/  高度間距確認")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox448")
                .setDataBinder("crdb2")
                .setDataField("SB1#3")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(6)
                .setDockStretch("fixed")
                .setLeft("37.79047619047619em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setHeight("2.1333333333333333em")
                .setVAlign("bottom")
                .setCaption("PASS")
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1063")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1063.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1598")
                .setDataBinder("crdb2")
                .setDataField("SB2#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("18.057142857142857em")
                .setWidth("20em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("2.Bushing")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1064")
                .setDock("top")
                .setLeft("6.857142857142857em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1064.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label522")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("32em")
                .setTop("0.45714285714285713em")
                .setWidth("14em")
                .setCaption("3.Top Cover 53 in-lbs")
                .setHAlign("left")
            );
            
            host.xui_ui_div1064.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox449")
                .setDataBinder("crdb2")
                .setDataField("SB3#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("5em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1065")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1065.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1599")
                .setDataBinder("crdb2")
                .setDataField("SB4#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.2857142857142856em")
                .setTop("17.295238095238094em")
                .setWidth("20em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("4.Rotary Valve")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1066")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1066.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1600")
                .setDataBinder("crdb2")
                .setDataField("SB5#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("18.057142857142857em")
                .setWidth("20em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("5.Valve Plate")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1067")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1067.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2830")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("SB5#2")
                .setDock("top")
                .setDockOrder(0)
                .setDockStretch("fixed")
                .setLeft("35.80952380952381em")
                .setTop("-0.0761904761904762em")
                .setWidth("20em")
                .setLabelSize("12em")
                .setLabelCaption("外徑尺寸(Bearing安裝處)")
                .setMaxlength("20")
            );
            
            host.xui_ui_div1067.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label523")
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("0em")
                .setWidth("17em")
                .setHeight("1.6761904761904762em")
                .setCaption("mm   (Spec：≧44.97mm、≦44.98mm)")
                .setVAlign("bottom")
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1068")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1068.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1601")
                .setDataBinder("crdb2")
                .setDataField("SB6#1")
                .setItems([
                    {
                        "id" : "更換",
                        "caption" : "更換",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔",
                        "caption" : "清潔",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("18.81904761904762em")
                .setWidth("20em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("6.Valve Bearing")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block386.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1069")
                .setDock("top")
                .setLeft("7.619047619047619em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1069.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label525")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("32em")
                .setTop("0.45714285714285713em")
                .setWidth("14em")
                .setCaption("7.Front Cover 53 in-lbs")
                .setHAlign("left")
            );
            
            host.xui_ui_div1069.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox450")
                .setDataBinder("crdb2")
                .setDataField("SB7#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("36.266666666666666em")
                .setTop("0em")
                .setWidth("5em")
                .setCaption("PASS")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block387")
                .setDock("fill")
                .setLeft("16em")
                .setTop("13.714285714285714em")
                .setConDockPadding({
                    "left" : 10,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                }),
                "c"
            );
            
            host.xui_ui_block387.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1070")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1070.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label526")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("14em")
                .setCaption("1.Housing & Motor 60 in-lbs")
                .setHAlign("left")
            );
            
            host.xui_ui_div1070.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox451")
                .setDataBinder("crdb2")
                .setDataField("C1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block387.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1071")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label527")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("6em")
                .setCaption("2.異音 Test")
                .setHAlign("left")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox452")
                .setDataBinder("crdb2")
                .setDataField("C2#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block387.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1072")
                .setDock("top")
                .setLeft("12.952380952380953em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div1072.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label528")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("31.238095238095237em")
                .setTop("0.45714285714285713em")
                .setWidth("6em")
                .setCaption("3.Leak Test")
                .setHAlign("left")
            );
            
            host.xui_ui_div1072.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox453")
                .setDataBinder("crdb2")
                .setDataField("C3#1")
                .setDirtyMark(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("35.50476190476191em")
                .setTop("0em")
                .setWidth("6.095238095238095em")
                .setCaption("PASS")
            );
            
            host.xui_ui_block387.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1073")
                .setDock("top")
                .setDockOrder(10)
                .setLeft("13.714285714285714em")
                .setTop("13.714285714285714em")
                .setHeight("5.333333333333333em")
            );
            
            host.xui_ui_div1073.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameC2")
                .setName("C組裝簽名")
                .setDataBinder("crdb2")
                .setDataField("C組裝簽名")
                .setLeft("7.466666666666667em")
                .setTop("0.6857142857142857em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namec2_onclick")
            );
            
            host.xui_ui_div1073.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderC2")
                .setName("C組長覆核")
                .setDataBinder("crdb2")
                .setDataField("C組長覆核")
                .setLeft("7.466666666666667em")
                .setTop("2.6666666666666665em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderc2_onclick")
            );
            
            host.xui_ui_div1073.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateC2")
                .setName("日期")
                .setDataBinder("crdb2")
                .setDataField("C組裝日期")
                .setReadonly(true)
                .setLeft("26.133333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div1073.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderC2")
                .setName("日期")
                .setDataBinder("crdb2")
                .setDataField("C覆核日期")
                .setReadonly(true)
                .setLeft("26.133333333333333em")
                .setTop("2.9714285714285715em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_block387.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout42")
                .setDock("top")
                .setDockOrder(6)
                .setDockMargin({
                    "left" : 0,
                    "top" : 0,
                    "right" : 20,
                    "bottom" : 0
                })
                .setLeft("9.142857142857142em")
                .setTop("8.304761904761905em")
                .setWidth("56.93333333333333em")
                .setHeight("17.066666666666666em")
                .setLayoutData({
                    "rows" : 7,
                    "cols" : 11,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 8,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 9,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 10,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 7,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 4,
                            "rowspan" : 7,
                            "colspan" : 4,
                            "removed" : false
                        }
                    ],
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
                        },
                        "6" : {
                            "manualHeight" : 30
                        },
                        "7" : {
                            "manualHeight" : 30
                        }
                    },
                    "colSetting" : {
                        "B" : {
                            "manualWidth" : 50
                        },
                        "C" : {
                            "manualWidth" : 50
                        },
                        "D" : {
                            "manualWidth" : 50
                        },
                        "F" : {
                            "manualWidth" : 50
                        },
                        "G" : {
                            "manualWidth" : 50
                        },
                        "H" : {
                            "manualWidth" : 50
                        }
                    },
                    "cells" : {
                        "I1" : {
                            "value" : "面板",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "J1" : {
                            "value" : "前",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "K1" : {
                            "value" : "後",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I2" : {
                            "value" : "鋼套 \n內徑",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I4" : {
                            "value" : "真圓度",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I6" : {
                            "value" : "同心圓",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H4" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H6" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I7" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1075")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("13.666666666666666em"),
                "A1"
            );
            
            host.xui_ui_div1075.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2833")
                .setDataBinder("crdb2")
                .setDataField("異常原因")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("異常原因")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1076")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.333333333333332em")
                .setHeight("13.666666666666666em"),
                "E1"
            );
            
            host.xui_ui_div1076.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2834")
                .setDataBinder("crdb2")
                .setDataField("維修處理")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("維修處理")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2835")
                .setName("J2")
                .setDataBinder("crdb2")
                .setDataField("面板#1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J2"
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2836")
                .setName("J4")
                .setDataBinder("crdb2")
                .setDataField("面板#3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J4"
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2837")
                .setName("K2")
                .setDataBinder("crdb2")
                .setDataField("面板#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K2"
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2838")
                .setName("K4")
                .setDataBinder("crdb2")
                .setDataField("面板#4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K4"
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2839")
                .setName("J6")
                .setDataBinder("crdb2")
                .setDataField("面板#5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.333333333333333em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "J6"
            );
            
            host.xui_ui_formlayout42.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2840")
                .setName("K6")
                .setDataBinder("crdb2")
                .setDataField("面板#6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.266666666666667em")
                .setHeight("3.8666666666666667em")
                .setLabelPos("none"),
                "K6"
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block764")
                .setDock("fill")
                .setLeft("13.40952380952381em")
                .setTop("5.40952380952381em"),
                "d"
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5934")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("Model#2")
                .setLeft("20em")
                .setTop("1em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3498")
                .setDataBinder("crdb2")
                .setDataField("維修方式")
                .setItems([
                    {
                        "id" : "Overhaul",
                        "caption" : "Overhaul",
                        "imageClass" : ""
                    },
                    {
                        "id" : "清潔校正",
                        "caption" : "清潔校正",
                        "imageClass" : ""
                    }
                ])
                .setLeft("2.2857142857142856em")
                .setTop("2.6666666666666665em")
                .setWidth("20.571428571428573em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("維修方式")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5935")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("S/N")
                .setLeft("22.095238095238095em")
                .setTop("2.933333333333333em")
                .setWidth("14.476190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead S/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5936")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("S/N#2")
                .setLeft("36.57142857142857em")
                .setTop("2.933333333333333em")
                .setWidth("8.380952380952381em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5937")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("Running Time")
                .setLeft("0.6095238095238096em")
                .setTop("7.4em")
                .setWidth("14.476190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Running Time")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5938")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("Remark")
                .setLeft("16em")
                .setTop("7.4em")
                .setWidth("39.923809523809524em")
                .setLabelSize("4em")
                .setLabelCaption("Remark")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5939")
                .setName("登錄編號")
                .setDataBinder("crdb2")
                .setDataField("Crosshead編號")
                .setLeft("2em")
                .setTop("5.4em")
                .setWidth("17.333333333333332em")
                .setLabelSize("10em")
                .setLabelCaption("Crosshead 編號：XH")
                .setMaxlength("20")
            );
            
            host.xui_ui_block764.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3553")
                .setDataBinder("crdb2")
                .setDataField("Model")
                .setItems([
                    {
                        "id" : "RD203-Z",
                        "caption" : "RD203-Z",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other",
                        "imageClass" : ""
                    }
                ])
                .setLeft("4.266666666666667em")
                .setTop("0.6666666666666666em")
                .setWidth("18.742857142857144em")
                .setHeight("1.980952380952381em")
                .setLabelSize("3em")
                .setLabelCaption("Model")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
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
            var db = ns.rdb, dbname = "crdb";
            if(ns.sheetType.getUIValue().includes("SHI"))
            {
                db = ns.crdb2;
                dbname = "crdb2";
            }
            ns.customer.setDataBinder(dbname);
            ns.date.setDataBinder(dbname);
            ns.sheetType.setDataBinder(dbname);
            ns.pump.setDataBinder(dbname);
            ns.repairNo.setDataBinder(dbname);
            utils.updateWorkSheetRepairState(ns.repairNo.getUIValue(), "開始維修");
            utils.saveForm(ns,"","",null, db);
       },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop = ns.properties;
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
            var data = ns.crdb.getData();
            ns.crdb2.setData(data);
            ns.crdb2.updateDataToUI();
            ns.updateSheetType(ns.sheetType.getUIValue());
            console.log(utils.createDDL(ns.dialog,"Crosshead維修工單", true));
            ns.tabs1.setValue("a");
            ns.tabs2.setValue("a");

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
                    utils.updateNewWorkSheetValue(ns.crdb, newValue);
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
                        utils.showLastWorkSheet(ns,"CrossheadEditForm", "Crosshead維修工單", 'S/N');
                    },
        updateSheetType: function(t){
                        var ns = this;
                        if(t.includes("SHI"))
                        {
                            ns.tabs1.hide();
                            ns.tabs2.show();
                            ns.tabs2.setDock("fill");
                        }
                        else
                        {
                            ns.tabs2.hide();
                            ns.tabs1.show();
                            ns.tabs1.setDock("fill");
                        }       
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
                        _sheettype_onvaluechange:function(profile, oldValue, newValue, force, tag){
                            var ns = this, uictrl = profile.boxing();
                                ns.updateSheetType(newValue);
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
                            _namec_onclick:function(profile, e, src, value, n){
                                var ns = this, uictrl = profile.boxing();
                                utils.signNameClick(ns.dateC, uictrl,"維修");
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
        _leaderc_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateLeaderC, uictrl,"組長,主管");
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
        _namec2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateC2, uictrl,"維修");
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
        _leaderc2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateLeaderC2, uictrl,"組長,主管");
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
                    /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
                    _nextbtn_onclick:function(profile, e, src, value){
                        var ns = this, uictrl = profile.boxing();
                        utils.nextStation(uictrl);
                    },
                        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
                        _changerepairbtn_onclick:function(profile, e, src, value){
                            var ns = this, uictrl = profile.boxing();
                            utils.showTableCombo(ns.repairNo,"更換登錄編號");
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