// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ShiCryopumpEditForm', 'xui.Module',{
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
                .setHost(host,"rdb")
                .setName("rdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("3.2666666666666666em")
                .setTop("1.5238095238095237em")
                .setWidth("65.21904761904761em")
                .setHeight("59em")
                .setCaption("SHI CryoPump維修工單")
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
                .setHost(host,"xui_ui_div262")
                .setDock("top")
                .setLeft("9.333333333333334em")
                .setTop("2.6666666666666665em")
                .setHeight("3.933333333333333em")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input175")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("客戶名稱")
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input176")
                .setName("Pump")
                .setDataBinder("rdb")
                .setDataField("Pump")
                .setLeft("26em")
                .setTop("0.6em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("20")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput285")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("日期")
                .setLeft("13.333333333333334em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input177")
                .setName("登錄編號")
                .setDataBinder("rdb")
                .setDataField("登錄編號")
                .setLeft("37.2em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox767")
                .setDataBinder("rdb")
                .setDataField("Report")
                .setLeft("53.333333333333336em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs18")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料登錄",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "A.拆解清洗"
                    },
                    {
                        "id" : "c",
                        "caption" : "B. Vacuum Side 組裝"
                    },
                    {
                        "id" : "d",
                        "caption" : "C. Helium Side 組裝",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    },
                    {
                        "id" : "e",
                        "caption" : "D.Test Data"
                    },
                    {
                        "id" : "f",
                        "caption" : "Test Data"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("13.333333333333334em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox30")
                .setName("Repair")
                .setDataBinder("rdb")
                .setDataField("Repair")
                .setLeft("0.6666666666666666em")
                .setTop("0.6666666666666666em")
                .setWidth("5em")
                .setCaption("Repair")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox31")
                .setName("CIC/W")
                .setDataBinder("rdb")
                .setDataField("CIC/W")
                .setLeft("6em")
                .setTop("0.6666666666666666em")
                .setWidth("5em")
                .setCaption("CIC/W")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox32")
                .setName("OT")
                .setDataBinder("rdb")
                .setDataField("OT")
                .setLeft("12em")
                .setTop("0.7333333333333333em")
                .setWidth("5em")
                .setCaption("OT")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input185")
                .setName("上次登錄編號")
                .setDataBinder("rdb")
                .setDataField("上次登錄編號")
                .setLeft("1.3333333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput311")
                .setName("上次登錄時間")
                .setDataBinder("rdb")
                .setDataField("上次登錄時間")
                .setLeft("21.333333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput312")
                .setName("保固期")
                .setDataBinder("rdb")
                .setDataField("保固期")
                .setLeft("38.666666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("19.276190476190475em")
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input186")
                .setName("上次故障原因")
                .setDataBinder("rdb")
                .setDataField("上次故障原因")
                .setLeft("1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input215")
                .setName("進廠原因")
                .setDataBinder("rdb")
                .setDataField("進廠原因")
                .setLeft("21.333333333333332em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input216")
                .setName("Pump P/N")
                .setDataBinder("rdb")
                .setDataField("Pump P/N")
                .setLeft("-2.8em")
                .setTop("8em")
                .setWidth("22.133333333333333em")
                .setLabelSize("12em")
                .setLabelCaption("Pump P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input217")
                .setName("Pump S/N")
                .setDataBinder("rdb")
                .setDataField("Pump S/N")
                .setLeft("21.333333333333332em")
                .setTop("8em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input218")
                .setName("Module1 P/N")
                .setDataBinder("rdb")
                .setDataField("Module1 P/N")
                .setLeft("17.333333333333332em")
                .setTop("10.514285714285714em")
                .setWidth("22em")
                .setLabelSize("12em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input219")
                .setName("Module1 S/N")
                .setDataBinder("rdb")
                .setDataField("Module1 S/N")
                .setLeft("41.93333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("16em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input222")
                .setName("Module1 Name")
                .setDataBinder("rdb")
                .setDataField("Module1 Name")
                .setLeft("1.3333333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input224")
                .setName("Pump/Module ETM")
                .setDataBinder("rdb")
                .setDataField("Pump/Module ETM")
                .setLeft("-2.6666666666666665em")
                .setTop("13.638095238095238em")
                .setWidth("21.714285714285715em")
                .setLabelSize("12em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input227")
                .setName("特殊零件")
                .setDataBinder("rdb")
                .setDataField("特殊零件")
                .setLeft("21.333333333333332em")
                .setTop("13.638095238095238em")
                .setWidth("18.20952380952381em")
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1569")
                .setDataBinder("rdb")
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
                .setLeft("0.5333333333333333em")
                .setTop("16.685714285714287em")
                .setWidth("17.98095238095238em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
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
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3562")
                .setName("Module1 S/N")
                .setDataBinder("rdb")
                .setDataField("配件是否齊全#2")
                .setLeft("16.914285714285715em")
                .setTop("16.99047619047619em")
                .setWidth("22.704761904761906em")
                .setMaxlength("32")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block178")
                .setDock("fill")
                .setLeft("11.333333333333334em")
                .setTop("16.666666666666668em"),
                "b"
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput479")
                .setName("Diode 1st")
                .setDataBinder("rdb")
                .setDataField("Diode 1st")
                .setLeft("2.6666666666666665em")
                .setTop("0.6666666666666666em")
                .setWidth("13.466666666666667em")
                .setLabelSize("8em")
                .setLabelCaption("1.RTD 1<sup>st</sup>室溫")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput481")
                .setName("Diode 1st#2")
                .setDataBinder("rdb")
                .setDataField("Diode 1st#2")
                .setLeft("16.761904761904763em")
                .setTop("0.6666666666666666em")
                .setWidth("11.428571428571429em")
                .setHeight("1.5238095238095237em")
                .setLabelSize("5em")
                .setLabelCaption("/ 2<sup>nd</sup>室溫")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput482")
                .setName("Diode 2nd")
                .setDataBinder("rdb")
                .setDataField("Diode 2nd")
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
                .setWidth("16em")
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput484")
                .setName("Diode 2nd#2")
                .setDataBinder("rdb")
                .setDataField("Diode 2nd#2")
                .setLeft("19.047619047619047em")
                .setTop("2.6666666666666665em")
                .setWidth("9.142857142857142em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input506")
                .setName("Heater & Cylinder S/N")
                .setDataBinder("rdb")
                .setDataField("Heater & Cylinder S/N")
                .setLeft("-1.3333333333333333em")
                .setTop("7.542857142857143em")
                .setWidth("20.666666666666668em")
                .setLabelSize("12em")
                .setLabelCaption("2.Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput489")
                .setName("Motor#1")
                .setDataBinder("rdb")
                .setDataField("Motor#1")
                .setLeft("2.742857142857143em")
                .setTop("10.209523809523809em")
                .setWidth("11.933333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("3.Motor")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput490")
                .setName("Motor#2")
                .setDataBinder("rdb")
                .setDataField("Motor#2")
                .setLeft("14.666666666666666em")
                .setTop("10.209523809523809em")
                .setWidth("4.8em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput491")
                .setName("Motor#3")
                .setDataBinder("rdb")
                .setDataField("Motor#3")
                .setLeft("20em")
                .setTop("10.209523809523809em")
                .setWidth("4.733333333333333em")
                .setLabelSize("1em")
                .setLabelCaption("/ ")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput492")
                .setName("Motor#4")
                .setDataBinder("rdb")
                .setDataField("Motor#4")
                .setLeft("24.666666666666668em")
                .setTop("10.209523809523809em")
                .setWidth("7.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("⏚")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input510")
                .setName("Rough Valve")
                .setDataBinder("rdb")
                .setDataField("Rough Valve")
                .setLeft("2.6666666666666665em")
                .setTop("12.571428571428571em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("4.Rough Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input513")
                .setName("Purge Valve")
                .setDataBinder("rdb")
                .setDataField("Purge Valve")
                .setLeft("2.6666666666666665em")
                .setTop("17.066666666666666em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("6.Purge Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input518")
                .setName("Xhead原S/N")
                .setDataBinder("rdb")
                .setDataField("Xhead原S/N")
                .setLeft("2.742857142857143em")
                .setTop("19.276190476190475em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("7.Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input519")
                .setName("1st Displacer原S/N")
                .setDataBinder("rdb")
                .setDataField("1st Displacer原S/N")
                .setLeft("0.6666666666666666em")
                .setTop("21.63809523809524em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("8.1<sup>st</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input520")
                .setName("2nd Displacer原S/N")
                .setDataBinder("rdb")
                .setDataField("2nd Displacer原S/N")
                .setLeft("0.6666666666666666em")
                .setTop("23.847619047619048em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("9.2<sup>nd</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input521")
                .setName("故障原因主要")
                .setDataBinder("rdb")
                .setDataField("故障原因主要")
                .setLeft("2.742857142857143em")
                .setTop("26.285714285714285em")
                .setWidth("38.6em")
                .setLabelSize("8em")
                .setLabelCaption("10.故障原因主要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input522")
                .setName("故障原因次要")
                .setDataBinder("rdb")
                .setDataField("故障原因次要")
                .setLeft("2.6666666666666665em")
                .setTop("28.876190476190477em")
                .setWidth("38.666666666666664em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input526")
                .setName("A組裝簽名")
                .setDataBinder("rdb")
                .setDataField("A組裝簽名")
                .setLeft("21.333333333333332em")
                .setTop("44.733333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input527")
                .setName("A組長覆核")
                .setDataBinder("rdb")
                .setDataField("A組長覆核")
                .setLeft("38em")
                .setTop("44.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox4")
                .setDataBinder("rdb")
                .setDataField("Diode 1st#3 Y/N")
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
                .setLeft("28.19047619047619em")
                .setTop("0.4em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox14")
                .setDataBinder("rdb")
                .setDataField("Motor#5 Y/N")
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
                .setLeft("32.457142857142856em")
                .setTop("9.82857142857143em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox20")
                .setDataBinder("rdb")
                .setDataField("Rough Valve#1清潔/更換")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.866666666666667em")
                .setTop("12.342857142857143em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox21")
                .setDataBinder("rdb")
                .setDataField("Rough Valve#2 Y/N")
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
                .setLeft("32.53333333333333em")
                .setTop("12.19047619047619em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox30")
                .setDataBinder("rdb")
                .setDataField("Purge Valve#1")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.8em")
                .setTop("16.83809523809524em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox31")
                .setDataBinder("rdb")
                .setDataField("Purge Valve#2 Y/N")
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
                .setLeft("32.53333333333333em")
                .setTop("16.99047619047619em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox35")
                .setDataBinder("rdb")
                .setDataField("Xhead原S/N清潔更換")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.8em")
                .setTop("18.97142857142857em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox36")
                .setDataBinder("rdb")
                .setDataField("1st Displacer原S/N清潔更換")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.8em")
                .setTop("21.257142857142856em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox37")
                .setDataBinder("rdb")
                .setDataField("2nd Displacer原S/N清潔更換")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.733333333333334em")
                .setTop("23.542857142857144em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label25")
                .setLeft("4.666666666666667em")
                .setTop("31.085714285714285em")
                .setCaption("11.Pump清洗(非原廠貼紙清除)")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox38")
                .setDataBinder("rdb")
                .setDataField("Pump清洗(非原廠貼紙清除) Y/N")
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
                .setLeft("19.047619047619047em")
                .setTop("30.476190476190474em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox39")
                .setDataBinder("rdb")
                .setDataField("Pump清洗(非原廠貼紙清除) 送洗 Y/N")
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
                .setLeft("31.238095238095237em")
                .setTop("30.552380952380954em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label26")
                .setLeft("29.714285714285715em")
                .setTop("31.16190476190476em")
                .setCaption("送洗")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("3.0476190476190474em")
                .setTop("33.2952380952381em")
                .setCaption("12.Pump配件掛牌(P/N：、S/N：)入烤箱")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox40")
                .setDataBinder("rdb")
                .setDataField("Pump配件掛牌(P/N：、S/N：)入烤箱 Y/N")
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
                .setLeft("21.333333333333332em")
                .setTop("32.68571428571428em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput735")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("A組裝日期")
                .setLeft("23.61904761904762em")
                .setTop("37.25714285714286em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput809")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("A覆核日期")
                .setLeft("40.22857142857143em")
                .setTop("37.333333333333336em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label155")
                .setLeft("28.952380952380953em")
                .setTop("3.0476190476190474em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput194")
                .setName("Diode 2nd")
                .setDataBinder("rdb")
                .setDataField("Diode 2nd")
                .setLeft("2.6666666666666665em")
                .setTop("5.0285714285714285em")
                .setWidth("16em")
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput195")
                .setName("Diode 2nd#2")
                .setDataBinder("rdb")
                .setDataField("Diode 2nd#2")
                .setLeft("19.047619047619047em")
                .setTop("5.0285714285714285em")
                .setWidth("9.142857142857142em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label175")
                .setLeft("28.952380952380953em")
                .setTop("5.40952380952381em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input570")
                .setName("Rough Valve")
                .setDataBinder("rdb")
                .setDataField("Rough Valve")
                .setLeft("2.6666666666666665em")
                .setTop("14.780952380952382em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("5.Vent Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox279")
                .setDataBinder("rdb")
                .setDataField("Rough Valve#1清潔/更換")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "清潔",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "更換",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.885714285714286em")
                .setTop("14.552380952380952em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox280")
                .setDataBinder("rdb")
                .setDataField("Rough Valve#2 Y/N")
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
                .setLeft("32.53333333333333em")
                .setTop("14.4em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("12.666666666666666em")
                .setTop("20em"),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput941")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("rdb")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setLeft("12.666666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("8.666666666666666em")
                .setLabelSize("2em")
                .setLabelCaption("1<sup>st</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput942")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setDataBinder("rdb")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setLeft("22.666666666666668em")
                .setTop("13.333333333333334em")
                .setWidth("8.666666666666666em")
                .setLabelSize("2em")
                .setLabelCaption("2<sup>nd</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input947")
                .setName("New Diode 1st S/N")
                .setDataBinder("rdb")
                .setDataField("New Diode 1st S/N")
                .setLeft("4.666666666666667em")
                .setTop("15.923809523809524em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("7.New RTD 1<sup>st</sup>  S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input948")
                .setName("New Diode 1st V")
                .setDataBinder("rdb")
                .setDataField("New Diode 1st V")
                .setLeft("23.39047619047619em")
                .setTop("15.923809523809524em")
                .setWidth("9.133333333333333em")
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input949")
                .setName("New Diode 2nd S/N")
                .setDataBinder("rdb")
                .setDataField("New Diode 2nd S/N")
                .setLeft("4.666666666666667em")
                .setTop("17.904761904761905em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input950")
                .setName("New Diode 2nd V")
                .setDataBinder("rdb")
                .setDataField("New Diode 2nd V")
                .setLeft("23.39047619047619em")
                .setTop("17.904761904761905em")
                .setWidth("9.2em")
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input955")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("rdb")
                .setDataField("Vacuum Side Leak Test：(5x10-9)")
                .setLeft("7.333333333333333em")
                .setTop("22.323809523809523em")
                .setWidth("24.685714285714287em")
                .setLabelSize("16em")
                .setLabelCaption("9.Vacuum Side Leak Test：(5x10<Sup>-9</sup>)")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input957")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("rdb")
                .setDataField("80k Radiation Shield 安裝")
                .setLeft("5.333333333333333em")
                .setTop("20.19047619047619em")
                .setWidth("26.666666666666668em")
                .setLabelSize("18em")
                .setLabelCaption("8.80k Radiation Shield 安裝")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input958")
                .setName("B組裝簽名")
                .setDataBinder("rdb")
                .setDataField("B組裝簽名")
                .setLeft("13.333333333333334em")
                .setTop("25.82857142857143em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input959")
                .setName("B組長覆核")
                .setDataBinder("rdb")
                .setDataField("B組長覆核")
                .setLeft("13.333333333333334em")
                .setTop("28.495238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox182")
                .setDataBinder("rdb")
                .setDataField("Check表單與Pump配件相符")
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
                .setLeft("3.3333333333333335em")
                .setTop("0.3333333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("1.Check表單與Pump配件相符")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput978")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("rdb")
                .setDataField("Heater & Cylinder S/N2")
                .setLeft("4.666666666666667em")
                .setTop("2.6666666666666665em")
                .setWidth("24em")
                .setLabelSize("10em")
                .setLabelCaption("2.Cylinder S/N")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox204")
                .setDataBinder("rdb")
                .setDataField("Heater & Cylinder New Y/N")
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
                .setLeft("28.733333333333334em")
                .setTop("2.3333333333333335em")
                .setWidth("11.866666666666667em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("3em")
                .setLabelGap("0em")
                .setLabelCaption("New")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox320")
                .setDataBinder("rdb")
                .setDataField("Vacuum Side 組裝零件之連接面鋪設銦片")
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
                .setLeft("11.657142857142857em")
                .setTop("4.571428571428571em")
                .setWidth("31.238095238095237em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("20em")
                .setLabelGap("0em")
                .setLabelCaption("3.Vacuum Side 組裝零件之連接面鋪設銦片")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox321")
                .setDataBinder("rdb")
                .setDataField("Diode Connector Pin 接點阻值確認")
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
                .setLeft("13.733333333333333em")
                .setTop("6.780952380952381em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("4.RTD Connector Pin 接點阻值確認")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox322")
                .setDataBinder("rdb")
                .setDataField("Diode Line正確固定並保持彈性")
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
                .setLeft("13.8em")
                .setTop("9.066666666666666em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("5.RTD Line正確固定並保持彈性")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label93")
                .setLeft("17.2em")
                .setTop("11.352380952380953em")
                .setWidth("21.933333333333334em")
                .setHeight("1.6761904761904762em")
                .setCaption("6.RTD 室溫(標準值:300k ±10k，1st&2nd 相差2k)")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox323")
                .setDataBinder("rdb")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #3 Y/N")
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
                .setLeft("30.733333333333334em")
                .setTop("12.876190476190477em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox384")
                .setDataBinder("rdb")
                .setDataField("Vacuum Side Leak Test：(5x10-9)Y/N")
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
                .setLeft("30.666666666666668em")
                .setTop("22.01904761904762em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1310")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("B覆核日期")
                .setLeft("32.666666666666664em")
                .setTop("28.495238095238093em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1311")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("B組裝日期")
                .setLeft("32.666666666666664em")
                .setTop("25.82857142857143em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setDock("fill")
                .setLeft("22.666666666666668em")
                .setTop("19.333333333333332em"),
                "d"
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1649")
                .setName("”X” head S/N C")
                .setDataBinder("rdb")
                .setDataField("”X” head S/N C")
                .setLeft("9.6em")
                .setTop("2.4380952380952383em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("2.”X” head S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1509")
                .setName("Motor：Ω#1")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω#1")
                .setLeft("3.657142857142857em")
                .setTop("4.495238095238095em")
                .setWidth("11.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("3.Motor:Ω")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1510")
                .setName("Motor：Ω#2")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω#2")
                .setLeft("14.933333333333334em")
                .setTop("4.495238095238095em")
                .setWidth("4.133333333333334em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1511")
                .setName("Motor：Ω#3")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω#3")
                .setLeft("18.97142857142857em")
                .setTop("4.495238095238095em")
                .setWidth("4.666666666666667em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1512")
                .setName("Motor：Ω#4")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω#4")
                .setLeft("24.076190476190476em")
                .setTop("4.495238095238095em")
                .setWidth("4.866666666666666em")
                .setLabelSize("1em")
                .setLabelCaption("⏚")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1653")
                .setName("Displacer 1st S/N")
                .setDataBinder("rdb")
                .setDataField("Displacer 1st S/N")
                .setLeft("3.657142857142857em")
                .setTop("8.838095238095239em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1517")
                .setName("Displacer 1st Flow")
                .setDataBinder("rdb")
                .setDataField("Displacer 1st Flow")
                .setLeft("16.83809523809524em")
                .setTop("8.838095238095239em")
                .setWidth("8.8em")
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1657")
                .setName("Seal 1st")
                .setDataBinder("rdb")
                .setDataField("Seal 1st")
                .setLeft("3.657142857142857em")
                .setTop("13.485714285714286em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("5.Seal 1st")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1658")
                .setName("Seal 2nd")
                .setDataBinder("rdb")
                .setDataField("Seal 2nd")
                .setLeft("8.380952380952381em")
                .setTop("16em")
                .setWidth("8.866666666666667em")
                .setLabelSize("3em")
                .setLabelCaption("2nd")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1659")
                .setName("Seal 推")
                .setDataBinder("rdb")
                .setDataField("Seal 推")
                .setLeft("17.82857142857143em")
                .setTop("13.485714285714286em")
                .setWidth("7.4em")
                .setLabelSize("2em")
                .setLabelCaption("/推")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1660")
                .setName("Seal 拉")
                .setDataBinder("rdb")
                .setDataField("Seal 拉")
                .setLeft("25.904761904761905em")
                .setTop("13.485714285714286em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("拉")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1665")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("rdb")
                .setDataField("Helium Side Leak Test：(5x10-6)")
                .setLeft("2.2857142857142856em")
                .setTop("23.771428571428572em")
                .setWidth("26em")
                .setLabelSize("17em")
                .setLabelCaption("7.Helium Side Leak Test：(5x10<sup>-6</sup>)")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1670")
                .setName("C組裝簽名")
                .setDataBinder("rdb")
                .setDataField("C組裝簽名")
                .setLeft("6.666666666666667em")
                .setTop("38.78095238095238em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1671")
                .setName("C組長覆核")
                .setDataBinder("rdb")
                .setDataField("C組長覆核")
                .setLeft("6.666666666666667em")
                .setTop("40.76190476190476em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox552")
                .setDataBinder("rdb")
                .setDataField("Check表單與Pump配件相符C")
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
                .setLeft("13.6em")
                .setTop("0.3333333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("1.Check表單與Pump配件相符")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox553")
                .setDataBinder("rdb")
                .setDataField("Check表單與Pump配件相符C")
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
                .setLeft("24.99047619047619em")
                .setTop("2.2095238095238097em")
                .setWidth("13.638095238095238em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("4em")
                .setLabelGap("0em")
                .setLabelCaption("New")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox589")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω# Y/N")
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
                .setLeft("28.038095238095238em")
                .setTop("4.266666666666667em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label150")
                .setLeft("7.619047619047619em")
                .setTop("6.857142857142857em")
                .setWidth("4.466666666666667em")
                .setCaption("4.Displacer:")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox627")
                .setDataBinder("rdb")
                .setDataField("Displacer 1st New")
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
                .setLeft("24.99047619047619em")
                .setTop("8.685714285714285em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("4em")
                .setLabelGap("0em")
                .setLabelCaption("New")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1791")
                .setName("Displacer 1st S/N")
                .setDataBinder("rdb")
                .setDataField("Displacer 2nd S/N")
                .setLeft("3.657142857142857em")
                .setTop("10.971428571428572em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1641")
                .setName("Displacer 1st Flow")
                .setDataBinder("rdb")
                .setDataField("Displacer 2nd Flow")
                .setLeft("16.83809523809524em")
                .setTop("10.971428571428572em")
                .setWidth("8.8em")
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox628")
                .setDataBinder("rdb")
                .setDataField("Displacer 2nd New Y/N")
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
                .setLeft("24.99047619047619em")
                .setTop("10.666666666666666em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("4em")
                .setLabelGap("0em")
                .setLabelCaption("New")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox630")
                .setDataBinder("rdb")
                .setDataField("Purge Helium Side Y/N")
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
                .setLeft("8.99047619047619em")
                .setTop("18.285714285714285em")
                .setWidth("29.866666666666667em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("20em")
                .setLabelGap("0em")
                .setLabelCaption("6.Purge Helium Side 1.3 Mpa / 190 ±5 Psi")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox631")
                .setDataBinder("rdb")
                .setDataField("Helium Side Leak Test：(5x10-6) Y/N")
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
                .setLeft("28.114285714285714em")
                .setTop("23.466666666666665em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox632")
                .setDataBinder("rdb")
                .setDataField("Crosshead 螺絲安裝/畫線確認")
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
                .setLeft("14.095238095238095em")
                .setTop("25.447619047619046em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("8.Crosshead 螺絲安裝/畫線確認")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox633")
                .setDataBinder("rdb")
                .setDataField("15k Array間距調整(不可接觸)")
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
                .setLeft("14.095238095238095em")
                .setTop("31.61904761904762em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("11. 15k Array間距調整(不可接觸)")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox634")
                .setDataBinder("rdb")
                .setDataField("Pump各配件Cable確實接好固定")
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
                .setLeft("12.038095238095238em")
                .setTop("29.333333333333332em")
                .setWidth("27.580952380952382em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("17em")
                .setLabelGap("0em")
                .setLabelCaption("10. Pump各配件Cable確實接好固定")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1769")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("C組裝日期")
                .setLeft("25.333333333333332em")
                .setTop("38.78095238095238em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1770")
                .setName("日期")
                .setDataBinder("rdb")
                .setDataField("C覆核日期")
                .setLeft("25.333333333333332em")
                .setTop("40.99047619047619em")
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
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1000")
                .setName("Seal 推")
                .setDataBinder("rdb")
                .setDataField("Seal 推")
                .setLeft("17.82857142857143em")
                .setTop("16em")
                .setWidth("7.4em")
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1001")
                .setName("Seal 拉")
                .setDataBinder("rdb")
                .setDataField("Seal 拉")
                .setLeft("25.904761904761905em")
                .setTop("16em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox541")
                .setDataBinder("rdb")
                .setDataField("Check表單與Pump配件相符C")
                .setItems([
                    {
                        "id" : "-08",
                        "caption" : "-08",
                        "imageClass" : ""
                    },
                    {
                        "id" : "-10",
                        "caption" : "-10",
                        "imageClass" : ""
                    },
                    {
                        "id" : "-12",
                        "caption" : "-12"
                    }
                ])
                .setLeft("11.428571428571429em")
                .setTop("20.19047619047619em")
                .setWidth("23.542857142857144em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("6em")
                .setLabelGap("0em")
                .setLabelCaption("KZ Series")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox542")
                .setDataBinder("rdb")
                .setDataField("Check表單與Pump配件相符C")
                .setItems([
                    {
                        "id" : "-08",
                        "caption" : "-08",
                        "imageClass" : ""
                    },
                    {
                        "id" : "-10",
                        "caption" : "-10",
                        "imageClass" : ""
                    },
                    {
                        "id" : "-12",
                        "caption" : "-12"
                    }
                ])
                .setLeft("11.428571428571429em")
                .setTop("21.714285714285715em")
                .setWidth("23.542857142857144em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("6em")
                .setLabelGap("0em")
                .setLabelCaption("KV Series")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1191")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("rdb")
                .setDataField("Helium Side Leak Test：(5x10-6)")
                .setLeft("2.2857142857142856em")
                .setTop("27.80952380952381em")
                .setWidth("34.36190476190476em")
                .setLabelSize("17em")
                .setLabelCaption("9. I/O Module安裝")
                .setMaxlength("32")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block5")
                .setDock("fill")
                .setLeft("13.333333333333334em")
                .setTop("18.666666666666668em")
                .setHeight("20em"),
                "e"
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2015")
                .setName("Supply Pressure")
                .setDataBinder("rdb")
                .setDataField("Supply Pressure")
                .setLeft("0em")
                .setTop("4.495238095238095em")
                .setWidth("18em")
                .setLabelSize("9em")
                .setLabelCaption("3. Supply Pressure")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2016")
                .setName("Return Pressure")
                .setDataBinder("rdb")
                .setDataField("Return Pressure")
                .setLeft("22.666666666666668em")
                .setTop("4.495238095238095em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Return Pressure")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2093")
                .setName("Ch")
                .setDataBinder("rdb")
                .setDataField("Ch")
                .setLeft("20.571428571428573em")
                .setTop("6.552380952380952em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("Ch")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2094")
                .setName("Compressor Model")
                .setDataBinder("rdb")
                .setDataField("Compressor Model")
                .setLeft("0.1523809523809524em")
                .setTop("6.552380952380952em")
                .setWidth("20em")
                .setLabelSize("10em")
                .setLabelCaption("4. Compressor Model")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2095")
                .setName("Start Cooldown#1")
                .setDataBinder("rdb")
                .setDataField("Start Cooldown#1")
                .setLeft("2.2857142857142856em")
                .setTop("8.533333333333333em")
                .setWidth("12.8em")
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2096")
                .setName("Start Cooldown#2")
                .setDataBinder("rdb")
                .setDataField("Start Cooldown#2")
                .setLeft("15.00952380952381em")
                .setTop("8.533333333333333em")
                .setWidth("5.4em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2097")
                .setName("Start Cooldown#3")
                .setDataBinder("rdb")
                .setDataField("Start Cooldown#3")
                .setLeft("20.952380952380953em")
                .setTop("8.533333333333333em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2111")
                .setName("測試人員簽名")
                .setDataBinder("rdb")
                .setDataField("測試人員簽名")
                .setLeft("0em")
                .setTop("20.64761904761905em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2112")
                .setName("測試組長覆核")
                .setDataBinder("rdb")
                .setDataField("測試組長覆核")
                .setLeft("0em")
                .setTop("22.704761904761906em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox333")
                .setDataBinder("rdb")
                .setDataField("管線配接符合Pump要求")
                .setLeft("-0.3047619047619048em")
                .setTop("0.26666666666666666em")
                .setWidth("16.685714285714287em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("1. 管線配接符合Pump要求  Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox334")
                .setDataBinder("rdb")
                .setDataField("依Test標準參數設定")
                .setLeft("-0.5333333333333333em")
                .setTop("2.2857142857142856em")
                .setWidth("15.161904761904761em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("2. 依Test標準參數設定    Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label216")
                .setLeft("20.4em")
                .setTop("4.571428571428571em")
                .setHeight("1.3333333333333333em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label217")
                .setLeft("40.333333333333336em")
                .setTop("4.723809523809524em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox952")
                .setDataBinder("rdb")
                .setDataField("Test完成後Runtime 歸零 Y/N")
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
                .setLeft("-0.8380952380952381em")
                .setTop("11.733333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("6. Test完成後Runtime 歸零")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox348")
                .setDataBinder("rdb")
                .setDataField("Test完成後,Helium Side Purge Pass")
                .setLeft("-1.2952380952380953em")
                .setTop("10.438095238095238em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("5. Test完成後,Helium Side Purge    Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox349")
                .setDataBinder("rdb")
                .setDataField("15k Array間距調整檢查(不可接觸)Pass")
                .setLeft("0em")
                .setTop("13.866666666666667em")
                .setWidth("20.533333333333335em")
                .setHeight("1.2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("7. 15k Array間距調整檢查(不可接觸)Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox364")
                .setDataBinder("rdb")
                .setDataField("Test完成後，Vacuum Side Leak Test")
                .setLeft("0.38095238095238093em")
                .setTop("15.847619047619048em")
                .setWidth("21.866666666666667em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("8. Test完成後，Vacuum Side Leak Test  Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox365")
                .setDataBinder("rdb")
                .setDataField("Pump入庫前外觀檢查 Pass")
                .setLeft("0.1523809523809524em")
                .setTop("17.676190476190477em")
                .setWidth("15.466666666666667em")
                .setHeight("2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("9. Pump入庫前外觀檢查 Pass")
            );
            
            host.xui_ui_tabs18.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block6")
                .setDock("fill")
                .setLeft("17.523809523809526em")
                .setTop("27.428571428571427em"),
                "f"
            );
            
            host.block6.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout39")
                .setDock("fill")
                .setLeft("7.466666666666667em")
                .setTop("5.40952380952381em")
                .setWidth("62.55238095238095em")
                .setHeight("44.57142857142857em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 16,
                    "cols" : 4,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 9,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 14,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        },
                        {
                            "row" : 6,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 7,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 8,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 10,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 11,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 12,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 10,
                            "col" : 3,
                            "rowspan" : 3,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 15,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 6,
                            "col" : 3,
                            "rowspan" : 3,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 10,
                            "col" : 0,
                            "rowspan" : 4,
                            "colspan" : 1,
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
                        },
                        "8" : {
                            "manualHeight" : 30
                        },
                        "9" : {
                            "manualHeight" : 30
                        },
                        "10" : {
                            "manualHeight" : 30
                        },
                        "11" : {
                            "manualHeight" : 30
                        },
                        "12" : {
                            "manualHeight" : 30
                        },
                        "13" : {
                            "manualHeight" : 30
                        },
                        "14" : {
                            "manualHeight" : 130
                        },
                        "15" : {
                            "manualHeight" : 30
                        },
                        "16" : {
                            "manualHeight" : 250
                        }
                    },
                    "cells" : {
                        "A3" : {
                            "value" : "SHITest",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B3" : {
                            "value" : "Actual Reading          ",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "Reading Time",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D3" : {
                            "value" : "Pass/Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A4" : {
                            "value" : "RTD Reading @Room Temp"
                        },
                        "C4" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A5" : {
                            "value" : "Start Time"
                        },
                        "C5" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D5" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A6" : {
                            "value" : "Minutes to 17k/Spec="
                        },
                        "B7" : {
                            "value" : "100k ±1k"
                        },
                        "A8" : {
                            "value" : "Spec= 100k±1k"
                        },
                        "A9" : {
                            "value" : "#1 15mins；#2 15mins"
                        },
                        "D10" : {
                            "value" : "P  /  F",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B11" : {
                            "value" : "真空值"
                        },
                        "D11" : {
                            "value" : "OK",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B14" : {
                            "value" : "1234567889123456789012",
                            "style" : {
                                "color" : "#E6E6FA",
                                "borderRight" : "solid 1px transparent"
                            }
                        },
                        "C14" : {
                            "value" : "1234567889123456789012",
                            "style" : {
                                "color" : "#transparent"
                            }
                        },
                        "B10" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C10" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D12" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D13" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A16" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "B16" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "C16" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "D16" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div747")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.10476190476191em")
                .setHeight("2.2095238095238097em"),
                "A1"
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4318")
                .setLeft("-1.3333333333333333em")
                .setTop("0em")
                .setWidth("11.733333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5226")
                .setName("P/N")
                .setDataBinder("rdb")
                .setDataField("P/N")
                .setLeft("13.533333333333333em")
                .setTop("0em")
                .setWidth("12.466666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5227")
                .setName("S/N")
                .setDataBinder("rdb")
                .setDataField("S/N")
                .setLeft("28.2em")
                .setTop("0em")
                .setWidth("13.133333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div748")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.10476190476191em")
                .setHeight("2.1333333333333333em"),
                "A2"
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label413")
                .setLeft("0.4em")
                .setTop("0.26666666666666666em")
                .setCaption("Test")
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox732")
                .setDataBinder("rdb")
                .setDataField("Assy OK")
                .setLeft("39.333333333333336em")
                .setTop("0.1523809523809524em")
                .setWidth("7.333333333333333em")
                .setIconPos("right")
                .setCaption("Assy OK")
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label390")
                .setLeft("22.095238095238095em")
                .setTop("0.5333333333333333em")
                .setCaption("Test Plate：SHI Sicera")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div749")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.628571428571429em")
                .setHeight("2.1333333333333333em"),
                "D4"
            );
            
            host.xui_ui_div749.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1516")
                .setDataBinder("rdb")
                .setDataField("Room Temp (Diode or Gauge) Pass")
                .setIsFormField(false)
                .setItems([
                    {
                        "id" : "Pass",
                        "caption" : "P",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Fail",
                        "caption" : "F",
                        "imageClass" : ""
                    }
                ])
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("82.28571428571429em")
                .setTop("48.76190476190476em")
                .setWidth("5.485714285714286em")
                .setHeight("2.057142857142857em")
                .setTagCmdsAlign("left")
                .setLabelPos("none")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "margin" : "4px 0px 0px 8px",
                        "overflow" : "hidden"
                    },
                    "ITEM" : {
                        "padding" : "0px 0px 0px 4px",
                        "margin" : "0px 0px 0px -7px"
                    },
                    "CAPTION" : {
                        "margin" : "0px 0px 0px -7px"
                    }
                })
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div750")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.628571428571429em")
                .setHeight("2.1333333333333333em"),
                "D6"
            );
            
            host.xui_ui_div750.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1517")
                .setIsFormField(false)
                .setItems([
                    {
                        "id" : "Pass",
                        "caption" : "P",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Fail",
                        "caption" : "F",
                        "imageClass" : ""
                    }
                ])
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
                .setHeight("2.057142857142857em")
                .setTagCmdsAlign("left")
                .setLabelPos("none")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "margin" : "4px 0px 0px 8px",
                        "overflow" : "hidden"
                    },
                    "ITEM" : {
                        "padding" : "0px 0px 0px 4px",
                        "margin" : "0px 0px 0px -7px"
                    },
                    "CAPTION" : {
                        "margin" : "0px 0px 0px -7px"
                    }
                })
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div760")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.628571428571429em")
                .setHeight("2.1333333333333333em"),
                "D15"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div761")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("2.1333333333333333em"),
                "B6"
            );
            
            host.xui_ui_div761.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5228")
                .setDataBinder("rdb")
                .setDataField("Minutes to 20k/Spec=#1")
                .setDock("fill")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div768")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("35.885714285714286em")
                .setHeight("2.1333333333333333em"),
                "B8"
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5237")
                .setDataBinder("rdb")
                .setDataField("Spec= 65K±2k #1 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("7.314285714285714em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5238")
                .setDataBinder("rdb")
                .setDataField("Spec= 65K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.4em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5239")
                .setDataBinder("rdb")
                .setDataField("Spec= 65K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.723809523809523em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5240")
                .setDataBinder("rdb")
                .setDataField("Spec= 65K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.580952380952382em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div771")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("35.885714285714286em")
                .setHeight("2.1333333333333333em"),
                "B12"
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5249")
                .setDataBinder("rdb")
                .setDataField("Reset Factory Regan Parameter Ext#1")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("12.723809523809523em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1:")
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4319")
                .setName("B5")
                .setDataBinder("rdb")
                .setDataField("Reset Factory Regan Parameter Ext#1 Time")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div772")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("35.885714285714286em")
                .setHeight("2.1333333333333333em"),
                "B13"
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5250")
                .setDataBinder("rdb")
                .setDataField("Reset Factory Regan Parameter Ext#2")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("12.723809523809523em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2:")
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4320")
                .setName("B5")
                .setDataBinder("rdb")
                .setDataField("Reset Factory Regan Parameter Ext#2 Time")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div773")
                .setDataBinder("rdb")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("54.4em")
                .setHeight("2.1333333333333333em"),
                "A15"
            );
            
            host.xui_ui_div773.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1525")
                .setDataBinder("rdb")
                .setDataField("Test Data Pass")
                .setIsFormField(false)
                .setItems([
                    {
                        "id" : "Pass",
                        "caption" : "Pass",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Fail",
                        "caption" : "Fail",
                        "imageClass" : ""
                    }
                ])
                .setDock("origin")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("8.304761904761905em")
                .setHeight("2.057142857142857em")
                .setTagCmdsAlign("left")
                .setLabelPos("none")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "margin" : "4px 0px 0px 8px",
                        "overflow" : "hidden"
                    },
                    "ITEM" : {
                        "padding" : "0px 0px 0px 4px",
                        "margin" : "0px 0px 0px -7px"
                    },
                    "CAPTION" : {
                        "margin" : "0px 0px 0px -7px"
                    }
                })
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div817")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.10476190476191em")
                .setHeight("18.895238095238096em"),
                "A16"
            );
            
            host.xui_ui_div817.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1236")
                .setDataBinder("rdb")
                .setDataField("Test Data 處理情形")
                .setDock("left")
                .setDockOrder(1)
                .setDockStretch("stretch")
                .setLeft("9.904761904761905em")
                .setTop("10.666666666666666em")
                .setWidth("30.01904761904762em")
                .setHeight("10em")
                .setLabelSize("6em")
                .setLabelCaption("處理情形：")
                .setMultiLines(true)
            );
            
            host.xui_ui_div817.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1237")
                .setDataBinder("rdb")
                .setDataField("Test Data Fail原因")
                .setDock("left")
                .setDockOrder(0)
                .setDockStretch("stretch")
                .setLeft("10.666666666666666em")
                .setTop("11.428571428571429em")
                .setWidth("28.114285714285714em")
                .setHeight("10em")
                .setLabelSize("6em")
                .setLabelCaption("Fail原因：")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div973")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.628571428571429em")
                .setHeight("6.628571428571429em"),
                "D7"
            );
            
            host.xui_ui_div973.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1297")
                .setIsFormField(false)
                .setItems([
                    {
                        "id" : "Pass",
                        "caption" : "P",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Fail",
                        "caption" : "F",
                        "imageClass" : ""
                    }
                ])
                .setDock("origin")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("5.485714285714286em")
                .setHeight("2.057142857142857em")
                .setTagCmdsAlign("left")
                .setLabelPos("none")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "margin" : "4px 0px 0px 8px",
                        "overflow" : "hidden"
                    },
                    "ITEM" : {
                        "padding" : "0px 0px 0px 4px",
                        "margin" : "0px 0px 0px -7px"
                    },
                    "CAPTION" : {
                        "margin" : "0px 0px 0px -7px"
                    }
                })
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div992")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("35.885714285714286em")
                .setHeight("2.1333333333333333em"),
                "B10"
            );
            
            host.xui_ui_div992.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2577")
                .setName("B4")
                .setDataBinder("rdb")
                .setDataField("Room Temp (Diode or Gauge) #1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("15.847619047619048em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Time:")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label416")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.438095238095237em")
                .setHeight("2.1333333333333333em")
                .setCaption("1<sup>st</sup> Stage Temp Control Test")
                .setHAlign("left"),
                "A7"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label418")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.438095238095237em")
                .setHeight("2.1333333333333333em")
                .setCaption("2<sup>nd</sup> Stage Warm Up Test")
                .setHAlign("left"),
                "A10"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5253")
                .setName("B4")
                .setDataBinder("rdb")
                .setDataField("Room Temp (Diode or Gauge) #1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4321")
                .setName("B5")
                .setDataBinder("rdb")
                .setDataField("Start Time")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5254")
                .setName("C6")
                .setDataBinder("rdb")
                .setDataField("Minutes to 20k/Spec=#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label585")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.438095238095237em")
                .setHeight("16.457142857142856em")
                .setCaption("RESET FACTORY REGEN PARAMETER   <br>                                       1st cooling control temp. = 100K,  2nd cooling target temp. = 17K,  Extended purge time for FULL regeneration = 0 mins,  Repurge cycle upper limit = 3,  Repurge time = 60sec,  ROR base pressure = 75mm/tr,  ROR threshold value = 38m/m,  ROR cycle upper limit = 10, ")
                .setHAlign("left"),
                "A11"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block369")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("9.752380952380953em")
                .setBorderType("none"),
                "B14"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block370")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.904761904761905em")
                .setHeight("9.752380952380953em")
                .setBorderType("none"),
                "C14"
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