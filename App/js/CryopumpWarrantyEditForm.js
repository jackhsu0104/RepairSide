// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CryopumpWarrantyEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "CryopumpWarranty原因分析表",
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
                .setHost(host,"cwdb")
                .setName("cwdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("2.6em")
                .setTop("0.6em")
                .setWidth("69.86666666666666em")
                .setHeight("42.6em")
                .setCaption("CryoPump Warranty 原因分析表")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("12.666666666666666em")
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
                .setLeft("26.590476190476192em")
                .setTop("0.6857142857142857em")
                .setWidth("9.142857142857142em")
                .setCaption("通知秘書確認")
                .onClick("_confirmbtn_onclick")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("cwdb")
                .setDataField("登錄編號")
                .setLeft("37.2em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox767")
                .setDataBinder("cwdb")
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
                        "caption" : "基本資料",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "A.基本檢查"
                    },
                    {
                        "id" : "d",
                        "caption" : "B. Helium Side檢查",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    },
                    {
                        "id" : "c",
                        "caption" : "C.Crosshead檢查",
                        "renderer" : ""
                    },
                    {
                        "id" : "e",
                        "caption" : "D.Vaccum Side檢查"
                    },
                    {
                        "id" : "f",
                        "caption" : "E.Test Data"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("f")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input185")
                .setName("上次登錄編號")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
                .setDataField("保固期")
                .setLeft("37.25714285714286em")
                .setTop("3.3333333333333335em")
                .setWidth("18.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input186")
                .setName("上次故障原因")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
                .setDataField("進廠原因")
                .setLeft("21.333333333333332em")
                .setTop("5.333333333333333em")
                .setWidth("34.74285714285714em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input216")
                .setName("Pump P/N")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
                .setDataField("Pump S/N")
                .setLeft("21.333333333333332em")
                .setTop("7.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input218")
                .setName("Module1 P/N")
                .setDataBinder("cwdb")
                .setDataField("Module1 P/N")
                .setLeft("17.333333333333332em")
                .setTop("9.933333333333334em")
                .setWidth("22em")
                .setLabelSize("12em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input219")
                .setName("Module1 S/N")
                .setDataBinder("cwdb")
                .setDataField("Module1 S/N")
                .setLeft("40.457142857142856em")
                .setTop("10em")
                .setWidth("16em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input220")
                .setName("Module2 P/N")
                .setDataBinder("cwdb")
                .setDataField("Module2 P/N")
                .setLeft("21.333333333333332em")
                .setTop("11.933333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input221")
                .setName("Module2 S/N")
                .setDataBinder("cwdb")
                .setDataField("Module2 S/N")
                .setLeft("37.63809523809524em")
                .setTop("12.066666666666666em")
                .setWidth("18.933333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input222")
                .setName("Module1 Name")
                .setDataBinder("cwdb")
                .setDataField("Module1 Name")
                .setLeft("1.3333333333333333em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input223")
                .setName("Module2 Name")
                .setDataBinder("cwdb")
                .setDataField("Module2 Name")
                .setLeft("1.3333333333333333em")
                .setTop("12em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module2 Name")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input224")
                .setName("Pump/Module ETM")
                .setDataBinder("cwdb")
                .setDataField("Pump/Module ETM")
                .setLeft("17em")
                .setTop("15.333333333333334em")
                .setWidth("23.266666666666666em")
                .setLabelSize("12em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input227")
                .setName("特殊零件")
                .setDataBinder("cwdb")
                .setDataField("Other")
                .setLeft("45.79047619047619em")
                .setTop("19.885714285714286em")
                .setWidth("10.59047619047619em")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input226")
                .setName("Compressor Model")
                .setDataBinder("cwdb")
                .setDataField("Compressor Model")
                .setLeft("17em")
                .setTop("17.266666666666666em")
                .setWidth("23.266666666666666em")
                .setLabelSize("12em")
                .setLabelCaption("Compressor Model")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox262")
                .setDataBinder("cwdb")
                .setDataField("Pump與Module是否相符")
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
                .setLeft("15.923809523809524em")
                .setTop("22.01904761904762em")
                .setWidth("22.857142857142858em")
                .setHeight("2.361904761904762em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Pump與Module是否相符")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox328")
                .setDataBinder("cwdb")
                .setDataField("製程")
                .setItems([
                    {
                        "id" : "PVD",
                        "caption" : "PVD",
                        "imageClass" : ""
                    },
                    {
                        "id" : "IMP",
                        "caption" : "IMP",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other"
                    }
                ])
                .setLeft("25.904761904761905em")
                .setTop("19.733333333333334em")
                .setWidth("19.504761904761907em")
                .setHeight("2.057142857142857em")
                .setLabelSize("3em")
                .setLabelGap("0em")
                .setLabelCaption("製程")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput654")
                .setName("Motor#2")
                .setDataBinder("cwdb")
                .setDataField("Compressor Model#2")
                .setLeft("40.38095238095238em")
                .setTop("17.447619047619046em")
                .setWidth("4.8em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput655")
                .setName("Motor#3")
                .setDataBinder("cwdb")
                .setDataField("Compressor Model#3")
                .setLeft("44.95238095238095em")
                .setTop("17.447619047619046em")
                .setWidth("4.733333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox317")
                .setDataBinder("cwdb")
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
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("30.2em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
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
                .setDataBinder("cwdb")
                .setDataField("Diode 1st")
                .setLeft("2.6666666666666665em")
                .setTop("3.7333333333333334em")
                .setWidth("13.466666666666667em")
                .setLabelSize("8em")
                .setLabelCaption("  Diode 室溫1<sup>st</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput482")
                .setName("Diode 2nd")
                .setDataBinder("cwdb")
                .setDataField("Diode 2nd")
                .setLeft("2.6666666666666665em")
                .setTop("5.714285714285714em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput485")
                .setName("Heater 1st")
                .setDataBinder("cwdb")
                .setDataField("Heater 1st")
                .setLeft("2.742857142857143em")
                .setTop("8em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("Heater 1<sup>st</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput486")
                .setName("Heater 2nd")
                .setDataBinder("cwdb")
                .setDataField("Heater 2nd")
                .setLeft("20em")
                .setTop("8.066666666666666em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput487")
                .setName("Heater交叉")
                .setDataBinder("cwdb")
                .setDataField("Heater交叉")
                .setLeft("2.6666666666666665em")
                .setTop("10.666666666666666em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("交叉")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput488")
                .setName("Heater接地")
                .setDataBinder("cwdb")
                .setDataField("Heater接地")
                .setLeft("15.066666666666666em")
                .setTop("10.666666666666666em")
                .setWidth("16.933333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("接地")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput489")
                .setName("Motor#1")
                .setDataBinder("cwdb")
                .setDataField("Motor#1")
                .setLeft("2.742857142857143em")
                .setTop("14em")
                .setWidth("11.933333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput490")
                .setName("Motor#2")
                .setDataBinder("cwdb")
                .setDataField("Motor#2")
                .setLeft("14.666666666666666em")
                .setTop("14em")
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
                .setDataBinder("cwdb")
                .setDataField("Motor#3")
                .setLeft("20em")
                .setTop("14em")
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
                .setDataBinder("cwdb")
                .setDataField("Motor#4")
                .setLeft("24.666666666666668em")
                .setTop("14em")
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
                .setDataBinder("cwdb")
                .setDataField("Rough Valve")
                .setLeft("2.6666666666666665em")
                .setTop("16.666666666666668em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input513")
                .setName("Purge Valve")
                .setDataBinder("cwdb")
                .setDataField("Purge Valve")
                .setLeft("2.6666666666666665em")
                .setTop("18.97142857142857em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Purge Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input515")
                .setName("Exhaust Valve")
                .setDataBinder("cwdb")
                .setDataField("Exhaust Valve")
                .setLeft("2.742857142857143em")
                .setTop("21.257142857142856em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("Exhaust Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input521")
                .setName("故障原因主要")
                .setDataBinder("cwdb")
                .setDataField("其他異常狀況")
                .setLeft("2.742857142857143em")
                .setTop("28.495238095238093em")
                .setWidth("38.6em")
                .setLabelSize("8em")
                .setLabelCaption("其他異常狀況")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input526")
                .setName("A組裝簽名")
                .setDataBinder("cwdb")
                .setDataField("A測試簽名")
                .setLeft("21.333333333333332em")
                .setTop("44.733333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試簽名")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox8")
                .setDataBinder("cwdb")
                .setDataField("Heater#3 Y/N")
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
                .setLeft("32.666666666666664em")
                .setTop("7.8em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox9")
                .setDataBinder("cwdb")
                .setDataField("Heater#4 Y/N")
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
                .setLeft("32.666666666666664em")
                .setTop("10.266666666666667em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox14")
                .setDataBinder("cwdb")
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
                .setLeft("32.666666666666664em")
                .setTop("13.6em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox21")
                .setDataBinder("cwdb")
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
                .setLeft("20.571428571428573em")
                .setTop("16.266666666666666em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox31")
                .setDataBinder("cwdb")
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
                .setLeft("20.571428571428573em")
                .setTop("18.590476190476192em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox33")
                .setDataBinder("cwdb")
                .setDataField("Exhaust Valve#2 Y/N")
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
                .setLeft("20.571428571428573em")
                .setTop("20.952380952380953em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox34")
                .setDataBinder("cwdb")
                .setDataField("Crosshead運作是否正常 Y/N")
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
                .setLeft("20.571428571428573em")
                .setTop("24.228571428571428em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label24")
                .setLeft("9.142857142857142em")
                .setTop("24.685714285714287em")
                .setCaption("Crosshead運作是否正常")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1213")
                .setName("故障原因主要")
                .setDataBinder("cwdb")
                .setDataField("Crosshead運作是否正常#2")
                .setLeft("2.742857142857143em")
                .setTop("26.20952380952381em")
                .setWidth("38.4em")
                .setLabelSize("8em")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1216")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("cwdb")
                .setDataField("Helium Side Leak Test")
                .setLeft("0em")
                .setTop("31.16190476190476em")
                .setWidth("26em")
                .setLabelSize("15em")
                .setLabelCaption("Helium Side Leak Test：")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox535")
                .setDataBinder("cwdb")
                .setDataField("Helium Side Leak Test Y/N")
                .setItems([
                    {
                        "id" : "PASS",
                        "caption" : "PASS"
                    },
                    {
                        "id" : "FAIL",
                        "caption" : "FAIL"
                    }
                ])
                .setLeft("26.590476190476192em")
                .setTop("31.00952380952381em")
                .setWidth("13.333333333333334em")
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
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input197")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("cwdb")
                .setDataField("Vaccum Side Leak Test")
                .setLeft("0em")
                .setTop("33.44761904761905em")
                .setWidth("26em")
                .setLabelSize("15em")
                .setLabelCaption("Vaccum Side Leak Test：")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox117")
                .setDataBinder("cwdb")
                .setDataField("Vaccum Side Leak Test Y/N")
                .setItems([
                    {
                        "id" : "PASS",
                        "caption" : "PASS"
                    },
                    {
                        "id" : "FAIL",
                        "caption" : "FAIL"
                    }
                ])
                .setLeft("26.666666666666668em")
                .setTop("33.06666666666667em")
                .setWidth("13.333333333333334em")
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
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input198")
                .setName("Purge Valve")
                .setDataBinder("cwdb")
                .setDataField("上架測試")
                .setLeft("2.2857142857142856em")
                .setTop("38.01904761904762em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("上架測試")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox118")
                .setDataBinder("cwdb")
                .setDataField("上架測試 Y/N")
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
                .setLeft("20.19047619047619em")
                .setTop("37.63809523809524em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input306")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("cwdb")
                .setDataField("TC Gauge")
                .setLeft("0em")
                .setTop("35.80952380952381em")
                .setWidth("19.047619047619047em")
                .setLabelSize("15em")
                .setLabelCaption("TC Gauge")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox171")
                .setDataBinder("cwdb")
                .setDataField("TC Gauge#3")
                .setItems([
                    {
                        "id" : "PASS",
                        "caption" : "PASS"
                    },
                    {
                        "id" : "FAIL",
                        "caption" : "FAIL"
                    }
                ])
                .setLeft("26.666666666666668em")
                .setTop("35.58095238095238em")
                .setWidth("13.333333333333334em")
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
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input307")
                .setName("故障原因主要")
                .setDataBinder("cwdb")
                .setDataField("故障主因")
                .setLeft("2.2857142857142856em")
                .setTop("40.304761904761904em")
                .setWidth("38.6em")
                .setLabelSize("8em")
                .setLabelCaption("故障主因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput151")
                .setName("Motor#3")
                .setDataBinder("cwdb")
                .setDataField("TC Gauge#2")
                .setLeft("19.276190476190475em")
                .setTop("35.733333333333334em")
                .setWidth("6.628571428571429em")
                .setLabelSize("1em")
                .setLabelCaption("μ")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input547")
                .setName("Failed Reason")
                .setDataBinder("cwdb")
                .setDataField("Failed Reason")
                .setLeft("2.2857142857142856em")
                .setTop("42.666666666666664em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Failed Reason")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox409")
                .setDataBinder("cwdb")
                .setDataField("外觀配件是否完整")
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
                .setLeft("22.857142857142858em")
                .setTop("1.4476190476190476em")
                .setWidth("23.847619047619048em")
                .setHeight("2.2857142857142856em")
                .setLabelSize("10em")
                .setLabelGap("0em")
                .setLabelCaption("外觀配件是否完整")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput210")
                .setName("日期")
                .setDataBinder("cwdb")
                .setDataField("A測試日期")
                .setLeft("41.142857142857146em")
                .setTop("44.49523809523809em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("測試日期")
                .setType("date")
                .setMaxlength("null")
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
                .setHost(host,"xui_ui_comboinput939")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Valve Bearing#2")
                .setLeft("27.428571428571427em")
                .setTop("4.8em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input958")
                .setName("B組裝簽名")
                .setDataBinder("cwdb")
                .setDataField("C測試簽名")
                .setLeft("6.095238095238095em")
                .setTop("38.4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試簽名")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox182")
                .setDataBinder("cwdb")
                .setDataField("Valve Bearing")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3333333333333335em")
                .setTop("4.495238095238095em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Valve Bearing")
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
                .setDataBinder("cwdb")
                .setDataField("Crosshead S/N")
                .setLeft("6.857142857142857em")
                .setTop("2.2095238095238097em")
                .setWidth("20.571428571428573em")
                .setLabelSize("10em")
                .setLabelCaption("Crosshead S/N")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1311")
                .setName("日期")
                .setDataBinder("cwdb")
                .setDataField("C測試日期")
                .setLeft("25.447619047619046em")
                .setTop("38.4em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("測試日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox681")
                .setDataBinder("cwdb")
                .setDataField("Driver Bearing")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("6.780952380952381em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Driver Bearing")
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
                .setHost(host,"xui_ui_radiobox682")
                .setDataBinder("cwdb")
                .setDataField("偏心軸")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("9.066666666666666em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("偏心軸")
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
                .setHost(host,"xui_ui_radiobox683")
                .setDataBinder("cwdb")
                .setDataField("Timing Valve")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("11.352380952380953em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Timing Valve")
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
                .setHost(host,"xui_ui_comboinput672")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Driver Bearing#2")
                .setLeft("27.428571428571427em")
                .setTop("7.0095238095238095em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput673")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("偏心軸#2")
                .setLeft("27.428571428571427em")
                .setTop("9.295238095238096em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput674")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Timing Valve#2")
                .setLeft("27.428571428571427em")
                .setTop("11.504761904761905em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox684")
                .setDataBinder("cwdb")
                .setDataField("Bushing")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("13.638095238095238em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Bushing")
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
                .setHost(host,"xui_ui_comboinput675")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Bushing#2")
                .setLeft("27.428571428571427em")
                .setTop("13.790476190476191em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput676")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Teflon Seal#2")
                .setLeft("27.428571428571427em")
                .setTop("16.228571428571428em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox685")
                .setDataBinder("cwdb")
                .setDataField("Teflon Seal")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("15.923809523809524em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Teflon Seal")
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
                .setHost(host,"xui_ui_radiobox686")
                .setDataBinder("cwdb")
                .setDataField("O-ring Seal")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("18.20952380952381em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("O-ring Seal")
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
                .setHost(host,"xui_ui_radiobox687")
                .setDataBinder("cwdb")
                .setDataField("Yoke")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("20.495238095238093em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Yoke")
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
                .setHost(host,"xui_ui_radiobox688")
                .setDataBinder("cwdb")
                .setDataField("Motor Bearing")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("22.78095238095238em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Motor Bearing")
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
                .setHost(host,"xui_ui_comboinput677")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("O-ring Seal#2")
                .setLeft("27.428571428571427em")
                .setTop("18.438095238095237em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput678")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Yoke#2")
                .setLeft("27.428571428571427em")
                .setTop("20.723809523809525em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput679")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Motor Bearing#2")
                .setLeft("27.428571428571427em")
                .setTop("22.933333333333334em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox689")
                .setDataBinder("cwdb")
                .setDataField("Motor 軸心")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("3.3523809523809525em")
                .setTop("25.066666666666666em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Motor 軸心")
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
                .setHost(host,"xui_ui_comboinput680")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Motor 軸心#2")
                .setLeft("27.428571428571427em")
                .setTop("25.21904761904762em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput720")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("cwdb")
                .setDataField("軸心彈力#1")
                .setLeft("7.619047619047619em")
                .setTop("28.114285714285714em")
                .setWidth("19.80952380952381em")
                .setLabelSize("10em")
                .setLabelCaption("軸心彈力  原")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput721")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("cwdb")
                .setDataField("軸心彈力#2")
                .setLeft("26.666666666666668em")
                .setTop("28.114285714285714em")
                .setWidth("13.714285714285714em")
                .setLabelSize("3em")
                .setLabelCaption("現")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input957")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("cwdb")
                .setDataField("其他狀況描述C")
                .setLeft("-0.45714285714285713em")
                .setTop("31.16190476190476em")
                .setWidth("40.838095238095235em")
                .setHeight("6.095238095238095em")
                .setLabelSize("18em")
                .setLabelCaption("其他狀況描述")
                .setMaxlength("32")
                .setMultiLines(true)
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
                .setHost(host,"xui_ui_input1653")
                .setName("Displacer 1st S/N")
                .setDataBinder("cwdb")
                .setDataField("Displacer S/N")
                .setLeft("1.3333333333333333em")
                .setTop("1.4476190476190476em")
                .setWidth("17.752380952380953em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1657")
                .setName("Seal 1st")
                .setDataBinder("cwdb")
                .setDataField("原Flow")
                .setLeft("1.3333333333333333em")
                .setTop("3.7333333333333334em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("原Flow")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1658")
                .setName("Seal 2nd")
                .setDataBinder("cwdb")
                .setDataField("現Flow")
                .setLeft("14.476190476190476em")
                .setTop("3.7333333333333334em")
                .setWidth("8.866666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("現Flow")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1659")
                .setName("Seal 推")
                .setDataBinder("cwdb")
                .setDataField("Seal")
                .setLeft("24.38095238095238em")
                .setTop("3.7333333333333334em")
                .setWidth("7.4em")
                .setLabelSize("3em")
                .setLabelCaption("/Seal")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1660")
                .setName("Seal 拉")
                .setDataBinder("cwdb")
                .setDataField("其他#2")
                .setLeft("8.380952380952381em")
                .setTop("9.066666666666666em")
                .setWidth("19.123809523809523em")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1670")
                .setName("C組裝簽名")
                .setDataBinder("cwdb")
                .setDataField("B測試簽名")
                .setLeft("0.0761904761904762em")
                .setTop("13.638095238095238em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("測試簽名")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1671")
                .setName("C組長覆核")
                .setDataBinder("cwdb")
                .setDataField("C組長覆核")
                .setLeft("6.666666666666667em")
                .setTop("45.266666666666666em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1770")
                .setName("日期")
                .setDataBinder("cwdb")
                .setDataField("C覆核日期")
                .setLeft("25.333333333333332em")
                .setTop("45.46666666666667em")
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
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox181")
                .setDataBinder("cwdb")
                .setDataField("正常")
                .setLeft("3.0476190476190474em")
                .setTop("6.857142857142857em")
                .setWidth("6.704761904761905em")
                .setCaption("正常")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox182")
                .setDataBinder("cwdb")
                .setDataField("粉塵汙染")
                .setLeft("8.380952380952381em")
                .setTop("6.780952380952381em")
                .setWidth("6.704761904761905em")
                .setCaption("粉塵汙染")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox183")
                .setDataBinder("cwdb")
                .setDataField("醛汙染")
                .setLeft("15.238095238095237em")
                .setTop("6.780952380952381em")
                .setWidth("6.704761904761905em")
                .setCaption("醛汙染")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox184")
                .setDataBinder("cwdb")
                .setDataField("Seal不良")
                .setLeft("21.333333333333332em")
                .setTop("6.780952380952381em")
                .setWidth("6.704761904761905em")
                .setCaption("Seal不良")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox185")
                .setDataBinder("cwdb")
                .setDataField("其他")
                .setLeft("3.0476190476190474em")
                .setTop("9.066666666666666em")
                .setWidth("6.704761904761905em")
                .setCaption("其他")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1769")
                .setName("日期")
                .setDataBinder("cwdb")
                .setDataField("B測試日期")
                .setLeft("18.285714285714285em")
                .setTop("13.638095238095238em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("測試日期")
                .setType("date")
                .setMaxlength("null")
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
                .setHost(host,"xui_ui_comboinput842")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("80K Array#2")
                .setLeft("24.076190476190476em")
                .setTop("0.9904761904761905em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1450")
                .setName("B組裝簽名")
                .setDataBinder("cwdb")
                .setDataField("D測試簽名")
                .setLeft("2.742857142857143em")
                .setTop("34.59047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試簽名")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox792")
                .setDataBinder("cwdb")
                .setDataField("80K Array")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("0.6857142857142857em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("80K Array")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput844")
                .setName("日期")
                .setDataBinder("cwdb")
                .setDataField("D測試日期")
                .setLeft("22.095238095238095em")
                .setTop("34.59047619047619em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("測試日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox793")
                .setDataBinder("cwdb")
                .setDataField("80K Rad Shield")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("2.9714285714285715em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("80K Rad. Shield")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox794")
                .setDataBinder("cwdb")
                .setDataField("15K Array")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("5.257142857142857em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("15K Array")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox795")
                .setDataBinder("cwdb")
                .setDataField("1st Diode")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("7.542857142857143em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("1<sup>st</sup>   Diode")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput845")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("80K Rad Shield#2")
                .setLeft("24.076190476190476em")
                .setTop("3.2em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput846")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("15K Array#2")
                .setLeft("24.076190476190476em")
                .setTop("5.485714285714286em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput847")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("1st Diode#2")
                .setLeft("24.076190476190476em")
                .setTop("7.695238095238095em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox796")
                .setDataBinder("cwdb")
                .setDataField("2nd Diode")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("9.82857142857143em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("2<sup>nd</sup>   Diode")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput848")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("2nd Diode#2")
                .setLeft("24.076190476190476em")
                .setTop("9.980952380952381em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput849")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Diode Line#2")
                .setLeft("24.076190476190476em")
                .setTop("12.41904761904762em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox797")
                .setDataBinder("cwdb")
                .setDataField("Diode Line")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("12.114285714285714em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Diode Line")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox798")
                .setDataBinder("cwdb")
                .setDataField("Diode Connector")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("14.4em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Diode Connector")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox799")
                .setDataBinder("cwdb")
                .setDataField("D Rough Valve")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("16.685714285714287em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Rough Valve")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox800")
                .setDataBinder("cwdb")
                .setDataField("D Purge Valve")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("18.97142857142857em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Purge Valve")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput850")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("Diode Connector#2")
                .setLeft("24.076190476190476em")
                .setTop("14.628571428571428em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput851")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("D Rough Valve#2")
                .setLeft("24.076190476190476em")
                .setTop("16.914285714285715em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput852")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("D Purge Valve#2")
                .setLeft("24.076190476190476em")
                .setTop("19.123809523809523em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox801")
                .setDataBinder("cwdb")
                .setDataField("D Relif Valve")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("21.257142857142856em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Relif Valve")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput853")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("D Relif Valve#2")
                .setLeft("24.076190476190476em")
                .setTop("21.409523809523808em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1451")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("cwdb")
                .setDataField("其他狀況描述D")
                .setLeft("-4.571428571428571em")
                .setTop("27.35238095238095em")
                .setWidth("40.838095238095235em")
                .setHeight("6.095238095238095em")
                .setLabelSize("18em")
                .setLabelCaption("其他狀況描述")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput906")
                .setName("HeaterB 1st")
                .setDataBinder("cwdb")
                .setDataField("D Module#2")
                .setLeft("24.076190476190476em")
                .setTop("23.695238095238096em")
                .setWidth("12.952380952380953em")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox849")
                .setDataBinder("cwdb")
                .setDataField("D Module")
                .setItems([
                    {
                        "id" : "正常",
                        "caption" : "正常"
                    },
                    {
                        "id" : "異常",
                        "caption" : "異常"
                    }
                ])
                .setLeft("0em")
                .setTop("23.542857142857144em")
                .setWidth("26.742857142857144em")
                .setHeight("2.057142857142857em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Module")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
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
                .setWidth("67.46666666666667em")
                .setHeight("28.6em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 27,
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
                            "row" : 20,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 25,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        },
                        {
                            "row" : 14,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 15,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 16,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 17,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 18,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 19,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 21,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 22,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 23,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 15,
                            "col" : 3,
                            "rowspan" : 5,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 21,
                            "col" : 3,
                            "rowspan" : 3,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 26,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        }
                    ],
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 160
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
                            "manualHeight" : 50
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
                            "manualHeight" : 50
                        },
                        "15" : {
                            "manualHeight" : 30
                        },
                        "16" : {
                            "manualHeight" : 30
                        },
                        "17" : {
                            "manualHeight" : 30
                        },
                        "18" : {
                            "manualHeight" : 30
                        },
                        "19" : {
                            "manualHeight" : 30
                        },
                        "20" : {
                            "manualHeight" : 30
                        },
                        "21" : {
                            "manualHeight" : 30
                        },
                        "22" : {
                            "manualHeight" : 30
                        },
                        "23" : {
                            "manualHeight" : 30
                        },
                        "24" : {
                            "manualHeight" : 30
                        },
                        "25" : {
                            "manualHeight" : 30
                        },
                        "26" : {
                            "manualHeight" : 30
                        },
                        "27" : {
                            "manualHeight" : 250
                        }
                    },
                    "cells" : {
                        "A3" : {
                            "value" : "Cryotorr Test",
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
                            "value" : "Room Temp (Diode or Gauge)"
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
                            "value" : "Minutes to 20k/Spec="
                        },
                        "A7" : {
                            "value" : "Minutes to 11k after 20k/ Gauge\n15k，must be ≦ 40 mins"
                        },
                        "A8" : {
                            "value" : "Spec≦ 10.9k or Gauge 0 psi 2ᶮᵈ Stage"
                        },
                        "A9" : {
                            "value" : "ON Board Test",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B9" : {
                            "value" : "Actual Reading",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C9" : {
                            "value" : "Reading Time",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D9" : {
                            "value" : "Pass/Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A10" : {
                            "value" : "Diode Reading @Room Temp"
                        },
                        "C10" : {
                            "value" : "N/A"
                        },
                        "A11" : {
                            "value" : "Start Time"
                        },
                        "C11" : {
                            "value" : "N/A"
                        },
                        "A12" : {
                            "value" : "Minutes to 17k/spec="
                        },
                        "A13" : {
                            "value" : "Minutes to Bottom Out"
                        },
                        "A14" : {
                            "value" : "Bottom Out Reading After 14k，Spec\n<=50k 1st Stage And<=10.9k 2ᶮᵈ Stage"
                        },
                        "C14" : {
                            "value" : "N/A"
                        },
                        "A15" : {
                            "value" : "1st Stage Temp Control Test"
                        },
                        "B15" : {
                            "value" : "65k ±2k"
                        },
                        "A16" : {
                            "value" : "Spec= 65k±2k，85k±2k"
                        },
                        "A17" : {
                            "value" : "#1 15mins；#2 15mins"
                        },
                        "B17" : {
                            "value" : "85k ±2k"
                        },
                        "A18" : {
                            "value" : "IS 1ˢᵗ Stage Temp Control Test"
                        },
                        "A19" : {
                            "value" : "Spec= 100K±1k"
                        },
                        "B19" : {
                            "value" : "100k ±2k"
                        },
                        "A20" : {
                            "value" : "#1 15mins；#2 15mins"
                        },
                        "A21" : {
                            "value" : "2ᶮᵈ Stage Heater Test"
                        },
                        "B21" : {
                            "value" : "Warm Up",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D21" : {
                            "value" : "P  /  F",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A22" : {
                            "value" : "Reset Factory Regan Parameter Ext."
                        },
                        "B22" : {
                            "value" : "真空值"
                        },
                        "A23" : {
                            "value" : "Purge=60 mins，Repurge=5 mins，ROR"
                        },
                        "A24" : {
                            "value" : "Cycles=20，Rough Pressure=50 micron"
                        },
                        "A25" : {
                            "value" : "，2nd Stage Temp=0k"
                        },
                        "B25" : {
                            "value" : "1234567889123456789012",
                            "style" : {
                                "color" : "#F0F8FF"
                            }
                        },
                        "C25" : {
                            "value" : "1234567889123456789012"
                        },
                        "C21" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "B27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "C27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "D27" : {
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
                .setWidth("66.2em")
                .setHeight("10.6em"),
                "A1"
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_div781")
                .setDock("bottom")
                .setLeft("12.876190476190477em")
                .setTop("6.095238095238095em")
                .setHeight("2.361904761904762em")
            );
            
            host.xui_ui_div781.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1199")
                .setDataBinder("cwdb")
                .setDataField("Test Date")
                .setLeft("-0.5333333333333333em")
                .setTop("0.3047619047619048em")
                .setWidth("11.733333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div781.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1930")
                .setName("P/N")
                .setDataBinder("cwdb")
                .setDataField("P/N")
                .setLeft("14.323809523809524em")
                .setTop("0.3047619047619048em")
                .setWidth("12.466666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div781.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1931")
                .setName("S/N")
                .setDataBinder("cwdb")
                .setDataField("S/N")
                .setLeft("28.952380952380953em")
                .setTop("0.3047619047619048em")
                .setWidth("13.133333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block238")
                .setDock("fill")
                .setLeft("12.952380952380953em")
                .setTop("3.0476190476190474em")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2009")
                .setName("New Diode 1st S/N")
                .setDataBinder("cwdb")
                .setDataField("Supply Pressure")
                .setLeft("0.6857142857142857em")
                .setTop("1.4476190476190476em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("1.Supply Pressure")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2010")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("Return Pressure")
                .setLeft("18.97142857142857em")
                .setTop("1.4476190476190476em")
                .setWidth("16.83809523809524em")
                .setLabelSize("10em")
                .setLabelCaption("psi / Return Pressure")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2011")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("Ch")
                .setLeft("35.885714285714286em")
                .setTop("1.4476190476190476em")
                .setWidth("16.685714285714287em")
                .setLabelSize("6em")
                .setLabelCaption("psi /  &emsp;&emsp;Ch")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2012")
                .setName("New Diode 1st S/N")
                .setDataBinder("cwdb")
                .setDataField("E Compressor Model")
                .setLeft("0.6857142857142857em")
                .setTop("3.7333333333333334em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("2.Compressor Model")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2013")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("Start Cooldown#1")
                .setLeft("18.97142857142857em")
                .setTop("3.7333333333333334em")
                .setWidth("12.647619047619047em")
                .setLabelSize("9em")
                .setLabelCaption("/ Start Cool Down")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2014")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("Start Cooldown#2")
                .setLeft("31.16190476190476em")
                .setTop("3.7333333333333334em")
                .setWidth("5.79047619047619em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2015")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("Start Cooldown#3")
                .setLeft("36.49523809523809em")
                .setTop("3.7333333333333334em")
                .setWidth("16em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2016")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("底溫#1")
                .setLeft("1.4476190476190476em")
                .setTop("6.019047619047619em")
                .setWidth("7.619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("底溫")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2017")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("底溫#2")
                .setLeft("9.066666666666666em")
                .setTop("6.019047619047619em")
                .setWidth("5.79047619047619em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2018")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("底溫#3")
                .setLeft("14.4em")
                .setTop("6.019047619047619em")
                .setWidth("12.19047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2115")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("設溫#3")
                .setLeft("40.304761904761904em")
                .setTop("6.019047619047619em")
                .setWidth("12.19047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2116")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("設溫#2")
                .setLeft("34.97142857142857em")
                .setTop("6.019047619047619em")
                .setWidth("5.79047619047619em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("32")
            );
            
            host.xui_ui_block238.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2117")
                .setName("New Diode 1st V")
                .setDataBinder("cwdb")
                .setDataField("設溫#1")
                .setLeft("27.35238095238095em")
                .setTop("6.019047619047619em")
                .setWidth("7.619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("/ 設溫")
                .setMaxlength("32")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div748")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("66.2em")
                .setHeight("1.8666666666666667em"),
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1515")
                .setDataBinder("cwdb")
                .setDataField("Test Plate：CT OB/IS/P300 SHI Other")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "CT",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "OB/IS/P300",
                        "imageClass" : ""
                    },
                    {
                        "id" : "c",
                        "caption" : "SHI",
                        "imageClass" : ""
                    },
                    {
                        "id" : "d",
                        "caption" : "Other",
                        "imageClass" : ""
                    }
                ])
                .setLeft("8.666666666666666em")
                .setTop("-0.26666666666666666em")
                .setWidth("30.933333333333334em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("Test Plate：")
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
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox732")
                .setDataBinder("cwdb")
                .setDataField("Assy OK")
                .setLeft("39.333333333333336em")
                .setTop("0.1523809523809524em")
                .setWidth("7.333333333333333em")
                .setIconPos("right")
                .setCaption("Assy OK")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div749")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D4"
            );
            
            host.xui_ui_div749.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1516")
                .setDataBinder("cwdb")
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
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D6"
            );
            
            host.xui_ui_div750.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1517")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 20k/Spec=Pass")
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
                .setHost(host,"xui_ui_div751")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("3.2em"),
                "D7"
            );
            
            host.xui_ui_div751.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1518")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins Pass")
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
                .setHost(host,"xui_ui_div752")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D8"
            );
            
            host.xui_ui_div752.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1519")
                .setDataBinder("cwdb")
                .setDataField("Spec≦ 10 9k or Gauge 0 psi 2nd Stage Pass")
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
                .setHost(host,"xui_ui_div753")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D10"
            );
            
            host.xui_ui_div753.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1520")
                .setDataBinder("cwdb")
                .setDataField("Diode Reading @Room Temp Pass")
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
                .setHost(host,"xui_ui_div754")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D11"
            );
            
            host.xui_ui_div754.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1521")
                .setDataBinder("cwdb")
                .setDataField("StartTimePass")
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
                .setHost(host,"xui_ui_div755")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D12"
            );
            
            host.xui_ui_div755.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1522")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 17k/Spec=Pass")
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
                .setHost(host,"xui_ui_div756")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D13"
            );
            
            host.xui_ui_div756.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1523")
                .setDataBinder("cwdb")
                .setDataField("Minutes to Bottom OutPass")
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
                .setHost(host,"xui_ui_div757")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("3.2em"),
                "D14"
            );
            
            host.xui_ui_div757.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1524")
                .setDataBinder("cwdb")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10 9k 2nd Stage Pass")
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
                .setHost(host,"xui_ui_div758")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D15"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div759")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div760")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("1.8666666666666667em"),
                "D26"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div761")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div761.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5228")
                .setDataBinder("cwdb")
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
                .setHost(host,"xui_ui_div762")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("3.2em"),
                "B7"
            );
            
            host.xui_ui_div762.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5229")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#1")
                .setDock("width")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div763")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div763.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5230")
                .setDataBinder("cwdb")
                .setDataField("Spec≦ 10 9k or Gauge 0 psi 2nd Stage")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div764")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B12"
            );
            
            host.xui_ui_div764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5231")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 17k/Spec=#1")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div765")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B13"
            );
            
            host.xui_ui_div765.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5232")
                .setDataBinder("cwdb")
                .setDataField("Minutes to Bottom Out#1")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div766")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("3.2em"),
                "B14"
            );
            
            host.xui_ui_div766.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5233")
                .setDataBinder("cwdb")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10 9k 2nd Stage 1st")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("0.9904761904761905em")
                .setTop("0.1523809523809524em")
                .setWidth("6.552380952380952em")
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div766.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5234")
                .setDataBinder("cwdb")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10 9k 2nd Stage 2nd")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("0.6857142857142857em")
                .setTop("2.1333333333333333em")
                .setWidth("6.857142857142857em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div767")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div767.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5235")
                .setDataBinder("cwdb")
                .setDataField("Diode Reading @Room Temp 1st")
                .setDock("left")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("5.79047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div767.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5236")
                .setDataBinder("cwdb")
                .setDataField("Diode Reading @Room Temp 2nd")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div768")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("34.6em")
                .setHeight("1.8666666666666667em"),
                "B16"
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5237")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setHost(host,"xui_ui_div769")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("34.6em")
                .setHeight("1.8666666666666667em"),
                "B18"
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5241")
                .setDataBinder("cwdb")
                .setDataField("Spec= 85K±2k #1 1st")
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
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5242")
                .setDataBinder("cwdb")
                .setDataField("Spec= 85K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.628571428571429em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5243")
                .setDataBinder("cwdb")
                .setDataField("Spec= 85K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.952380952380953em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5244")
                .setDataBinder("cwdb")
                .setDataField("Spec= 85K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.80952380952381em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div770")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("34.6em")
                .setHeight("1.8666666666666667em"),
                "B20"
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5245")
                .setDataBinder("cwdb")
                .setDataField("Spec= 100K±2k #1 1st")
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
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5246")
                .setDataBinder("cwdb")
                .setDataField("Spec= 100K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.628571428571429em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5247")
                .setDataBinder("cwdb")
                .setDataField("Spec= 100K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.952380952380953em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5248")
                .setDataBinder("cwdb")
                .setDataField("Spec= 100K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.80952380952381em")
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
                .setWidth("34.6em")
                .setHeight("1.8666666666666667em"),
                "B23"
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5249")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setWidth("34.6em")
                .setHeight("1.8666666666666667em"),
                "B24"
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5250")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("60em")
                .setHeight("1.8666666666666667em"),
                "A26"
            );
            
            host.xui_ui_div773.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1525")
                .setDataBinder("cwdb")
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
                .setHost(host,"xui_ui_div776")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("9.733333333333333em"),
                "D16"
            );
            
            host.xui_ui_div776.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1526")
                .setDataBinder("cwdb")
                .setDataField("1st Stage Temp Control Test Pass")
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
                .setHost(host,"xui_ui_div777")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.133333333333334em")
                .setHeight("5.8em"),
                "D22"
            );
            
            host.xui_ui_div777.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1527")
                .setDataBinder("cwdb")
                .setDataField("2nd Stage Heater Test")
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
                .setLeft("84.57142857142857em")
                .setTop("51.04761904761905em")
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
                .setHost(host,"xui_ui_div817")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("66.2em")
                .setHeight("16.533333333333335em"),
                "A27"
            );
            
            host.xui_ui_div817.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1236")
                .setDataBinder("cwdb")
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
                .setDataBinder("cwdb")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5253")
                .setName("B4")
                .setDataBinder("cwdb")
                .setDataField("Room Temp (Diode or Gauge) #1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4321")
                .setName("B5")
                .setDataBinder("cwdb")
                .setDataField("Start Time")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5254")
                .setName("C6")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 20k/Spec=#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5255")
                .setName("C7")
                .setDataBinder("cwdb")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("3.2em")
                .setLabelPos("none"),
                "C7"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5256")
                .setName("C8")
                .setDataBinder("cwdb")
                .setDataField("Spec≦ 10 9k or Gauge 0 psi 2nd Stage#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C8"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4322")
                .setName("B11")
                .setDataBinder("cwdb")
                .setDataField("Start Time2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time"),
                "B11"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block543")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "B25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block544")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em"),
                "C25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5257")
                .setName("C12")
                .setDataField("Minutes to 17k/Spec=#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C12"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5258")
                .setName("C13")
                .setDataBinder("cwdb")
                .setDataField("Minutes to Bottom Out#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("17.266666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C13"
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
            console.log(utils.createDDL(ns.dialog,"CryopumpWarranty原因分析表"));
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
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
                    utils.updateNewWorkSheetValue(ns.cwdb, newValue);
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
                         utils.confirmNameClick(ns, uictrl, "組長,主管");
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