// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CryopumpEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "Cryopump維修工單",
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
                xui.create("xui.DataBinder")
                .setHost(host,"rdb2")
                .setName("rdb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("2.6em")
                .setTop("0.6em")
                .setWidth("65.21904761904761em")
                .setHeight("45.13333333333333em")
                .setCaption("CryoPump維修工單")
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
                .setHeight("5.266666666666667em")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"customer")
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
                .setHost(host,"pump")
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
                .setHost(host,"date")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("rdb")
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
                .setHost(host,"report")
                .setDataBinder("rdb")
                .setDataField("Report")
                .setLeft("53.333333333333336em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"optionBtn")
                .setLeft("41.333333333333336em")
                .setTop("2.6em")
                .setWidth("11.333333333333334em")
                .setCaption("Option零件更換表")
                .onClick("_optionbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setLeft("53.333333333333336em")
                .setTop("2.6em")
                .setWidth("9.266666666666667em")
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sheetType")
                .setDataBinder("rdb")
                .setDataField("工單類別")
                .setLeft("0.6666666666666666em")
                .setTop("2.6em")
                .setWidth("15.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("工單類別")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "Cryo Pump",
                        "caption" : "Cryo Pump"
                    },
                    {
                        "id" : "SHI Cryo Pump",
                        "caption" : "SHI Cryo Pump"
                    }
                ])
                .setValue("SHI Cryo Pump")
                .onValueChange("_sheettype_onvaluechange")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs1")
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
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setValue("f")
            );
            
            host.tabs1.append(
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("Module1 S/N")
                .setLeft("41.93333333333333em")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("Module2 S/N")
                .setLeft("39.06666666666667em")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("特殊零件")
                .setLeft("39.06666666666667em")
                .setTop("15.333333333333334em")
                .setWidth("18.933333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput317")
                .setName("上次Diode Line更換日期")
                .setDataBinder("rdb")
                .setDataField("上次Diode Line更換日期")
                .setLeft("17em")
                .setTop("19.266666666666666em")
                .setWidth("23.266666666666666em")
                .setLabelSize("12em")
                .setLabelCaption("上次Diode Line更換日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2482")
                .setDataBinder("rdb")
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
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2749")
                .setDataBinder("rdb")
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
                .setLeft("17.666666666666668em")
                .setTop("23.333333333333332em")
                .setWidth("19.733333333333334em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("11em")
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
                .setHost(host,"xui_ui_radiobox2750")
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
                .setLeft("20.666666666666668em")
                .setTop("17.066666666666666em")
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2751")
                .setDataBinder("rdb")
                .setDataField("上次維修有無更換Diode Lin")
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
                .setLeft("16.666666666666668em")
                .setTop("21.333333333333332em")
                .setWidth("24.133333333333333em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("上次維修有無更換Diode Lin")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.tabs1.append(
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
                .setDataField("A1#1")
                .setLeft("2.6666666666666665em")
                .setTop("0.6666666666666666em")
                .setWidth("13.466666666666667em")
                .setLabelSize("8em")
                .setLabelCaption("1.  Diode 1<sup>st</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput480")
                .setName("Diode 1st#1")
                .setDataBinder("rdb")
                .setDataField("A1#2")
                .setLeft("16em")
                .setTop("0.6666666666666666em")
                .setWidth("8.133333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("/V")
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
                .setDataField("A1#3")
                .setLeft("24em")
                .setTop("0.6666666666666666em")
                .setWidth("7.466666666666667em")
                .setLabelSize("3em")
                .setLabelCaption("室溫")
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
                .setDataField("A1#5")
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
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
                .setHost(host,"xui_ui_comboinput483")
                .setName("Diode 2nd#1")
                .setDataBinder("rdb")
                .setDataField("A1#6")
                .setLeft("16em")
                .setTop("2.6666666666666665em")
                .setWidth("8em")
                .setLabelSize("2em")
                .setLabelCaption("/V")
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
                .setDataField("A1#7")
                .setLeft("24em")
                .setTop("2.6666666666666665em")
                .setWidth("7.333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("室溫")
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
                .setDataField("A2")
                .setLeft("-1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("20.666666666666668em")
                .setLabelSize("12em")
                .setLabelCaption("Heater & Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput485")
                .setName("Heater 1st")
                .setDataBinder("rdb")
                .setDataField("A3#1")
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
                .setDataBinder("rdb")
                .setDataField("A3#2")
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
                .setDataBinder("rdb")
                .setDataField("A3#4")
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
                .setDataBinder("rdb")
                .setDataField("A3#5")
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
                .setDataBinder("rdb")
                .setDataField("A4#1")
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
                .setDataBinder("rdb")
                .setDataField("A4#2")
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
                .setDataBinder("rdb")
                .setDataField("A4#3")
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
                .setDataBinder("rdb")
                .setDataField("A4#4")
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
                .setDataBinder("rdb")
                .setDataField("A5#1")
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
                .setDataBinder("rdb")
                .setDataField("A6#1")
                .setLeft("2.6666666666666665em")
                .setTop("20.733333333333334em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Purge Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input515")
                .setName("Exhaust Valve")
                .setDataBinder("rdb")
                .setDataField("A7#1")
                .setLeft("2.742857142857143em")
                .setTop("23.4em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("Exhaust Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input518")
                .setName("Xhead原S/N")
                .setDataBinder("rdb")
                .setDataField("A9#1")
                .setLeft("2.742857142857143em")
                .setTop("28.733333333333334em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input519")
                .setName("1st Displacer原S/N")
                .setDataBinder("rdb")
                .setDataField("A10#1")
                .setLeft("0.6666666666666666em")
                .setTop("31.4em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("1<sup>st</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input520")
                .setName("2nd Displacer原S/N")
                .setDataBinder("rdb")
                .setDataField("A11#1")
                .setLeft("0.6666666666666666em")
                .setTop("34.06666666666667em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input521")
                .setName("故障原因主要")
                .setDataBinder("rdb")
                .setDataField("A12")
                .setLeft("2.742857142857143em")
                .setTop("36.733333333333334em")
                .setWidth("38.6em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因主要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input522")
                .setName("故障原因次要")
                .setDataBinder("rdb")
                .setDataField("A13")
                .setLeft("2.6666666666666665em")
                .setTop("38.6em")
                .setWidth("38.666666666666664em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input526")
                .setName("A組裝簽名")
                .setDataBinder("rdb")
                .setDataField("A組裝簽名")
                .setLeft("21.333333333333332em")
                .setTop("47.266666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input527")
                .setName("A組長覆核")
                .setDataBinder("rdb")
                .setDataField("A組長覆核")
                .setLeft("38em")
                .setTop("47.13333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox4")
                .setDataBinder("rdb")
                .setDataField("A1#4")
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
                .setTop("0.4em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox5")
                .setDataBinder("rdb")
                .setDataField("A1#8")
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
                .setTop("2.2666666666666666em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox8")
                .setDataBinder("rdb")
                .setDataField("A3#3")
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
                .setDataBinder("rdb")
                .setDataField("A3#6")
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
                .setDataBinder("rdb")
                .setDataField("A4#5")
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
                .setHost(host,"xui_ui_radiobox20")
                .setDataBinder("rdb")
                .setDataField("A5#2")
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
                .setTop("16.466666666666665em")
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
                .setDataField("A5#3")
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
                .setTop("16.266666666666666em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox29")
                .setDataBinder("rdb")
                .setDataField("A5#4")
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
                .setTop("18.266666666666666em")
                .setWidth("8.2em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox30")
                .setDataBinder("rdb")
                .setDataField("A6#2")
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
                .setTop("20.466666666666665em")
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
                .setDataField("A6#3")
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
                .setTop("20.666666666666668em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox32")
                .setDataBinder("rdb")
                .setDataField("A7#2")
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
                .setTop("23.066666666666666em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox33")
                .setDataBinder("rdb")
                .setDataField("A7#3")
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
                .setTop("22.866666666666667em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox34")
                .setDataBinder("rdb")
                .setDataField("A8")
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
                .setTop("25.4em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setLeft("17.466666666666665em")
                .setTop("18.933333333333334em")
                .setCaption("Rough Valve 上座旋緊 / 鎖緊 確認")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label24")
                .setLeft("16.666666666666668em")
                .setTop("26em")
                .setCaption("更換Purge Valve O-ring Coil軸心鎖緊")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox35")
                .setDataBinder("rdb")
                .setDataField("A9#2")
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
                .setTop("28.4em")
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
                .setDataField("A10#2")
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
                .setTop("31em")
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
                .setDataField("A11#2")
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
                .setTop("33.733333333333334em")
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
                .setTop("40.8em")
                .setCaption("Pump清洗(非原廠貼紙清除)")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox38")
                .setDataBinder("rdb")
                .setDataField("A14#1")
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
                .setLeft("16.666666666666668em")
                .setTop("40.2em")
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
                .setDataField("A14#2")
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
                .setLeft("28.666666666666668em")
                .setTop("40.06666666666667em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label26")
                .setLeft("27.133333333333333em")
                .setTop("40.666666666666664em")
                .setCaption("送洗")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("0.6666666666666666em")
                .setTop("42.666666666666664em")
                .setCaption("Pump配件掛牌(P/N：、S/N：)入烤箱")
            );
            
            host.xui_ui_block178.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox40")
                .setDataBinder("rdb")
                .setDataField("A15")
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
                .setLeft("16.666666666666668em")
                .setTop("42.06666666666667em")
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
                .setLeft("24.333333333333332em")
                .setTop("45.06666666666667em")
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
                .setLeft("40.93333333333333em")
                .setTop("45.13333333333333em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.tabs1.append(
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
                .setDataBinder("rdb")
                .setDataField("B3#1")
                .setLeft("6.666666666666667em")
                .setTop("4.666666666666667em")
                .setWidth("16em")
                .setLabelSize("8em")
                .setLabelCaption("HeaterB 1<sup>st</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput940")
                .setName("HeaterB 2nd")
                .setDataBinder("rdb")
                .setDataField("B3#2")
                .setLeft("23.333333333333332em")
                .setTop("4.666666666666667em")
                .setWidth("7.333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Ω  2<sup>nd</sup>")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input940")
                .setName("交叉B")
                .setDataBinder("rdb")
                .setDataField("B3#4")
                .setLeft("6.666666666666667em")
                .setTop("7.333333333333333em")
                .setWidth("16em")
                .setLabelSize("8em")
                .setLabelCaption("交叉")
                .setMaxlength("20")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input941")
                .setName("接地B")
                .setDataBinder("rdb")
                .setDataField("B3#5")
                .setLeft("18.266666666666666em")
                .setTop("7.333333333333333em")
                .setWidth("12.4em")
                .setLabelSize("8em")
                .setLabelCaption("接地")
                .setMaxlength("20")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput941")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("rdb")
                .setDataField("B7#1")
                .setLeft("12.666666666666666em")
                .setTop("17.333333333333332em")
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
                .setDataField("B7#2")
                .setLeft("22.666666666666668em")
                .setTop("17.333333333333332em")
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
                .setDataField("B8#1")
                .setLeft("4.666666666666667em")
                .setTop("20em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("New Diode 1<sup>st</sup>  S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input948")
                .setName("New Diode 1st V")
                .setDataBinder("rdb")
                .setDataField("B8#2")
                .setLeft("23.533333333333335em")
                .setTop("20em")
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
                .setDataField("B9#1")
                .setLeft("4.666666666666667em")
                .setTop("22em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("New Diode 2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input950")
                .setName("New Diode 2nd V")
                .setDataBinder("rdb")
                .setDataField("B9#2")
                .setLeft("23.466666666666665em")
                .setTop("22em")
                .setWidth("9.2em")
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput943")
                .setName("TC Gauge")
                .setDataBinder("rdb")
                .setDataField("B13#1")
                .setLeft("6.171428571428572em")
                .setTop("30.2em")
                .setWidth("15.066666666666666em")
                .setLabelSize("8em")
                .setLabelCaption("TC Gauge")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input955")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("rdb")
                .setDataField("B14#1")
                .setLeft("7.333333333333333em")
                .setTop("32.666666666666664em")
                .setWidth("24.666666666666668em")
                .setLabelSize("16em")
                .setLabelCaption("Vacuum Side Leak Test：(5x10<Sup>-9</sup>)")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input957")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("rdb")
                .setDataField("B15")
                .setLeft("5.333333333333333em")
                .setTop("35.333333333333336em")
                .setWidth("26.666666666666668em")
                .setLabelSize("18em")
                .setLabelCaption("80k Radiation Shield 安裝")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input958")
                .setName("B組裝簽名")
                .setDataBinder("rdb")
                .setDataField("B組裝簽名")
                .setLeft("13.333333333333334em")
                .setTop("40em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input959")
                .setName("B組長覆核")
                .setDataBinder("rdb")
                .setDataField("B組長覆核")
                .setLeft("13.333333333333334em")
                .setTop("42.666666666666664em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox182")
                .setDataBinder("rdb")
                .setDataField("B1")
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
                .setHeight("1.9047619047619047em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Check表單與Pump配件相符")
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
                .setDataField("B2#1")
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
                .setWidth("19.885714285714286em")
                .setLabelSize("12em")
                .setLabelCaption("Heater & Cylinder S/N")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox204")
                .setDataBinder("rdb")
                .setDataField("B2#2")
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
                .setHost(host,"xui_ui_radiobox249")
                .setDataBinder("rdb")
                .setDataField("B3#3")
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
                .setTop("4.4em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelCaption("Ω")
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
                .setHost(host,"xui_ui_radiobox319")
                .setDataBinder("rdb")
                .setDataField("B3#6")
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
                .setTop("6.933333333333334em")
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
                .setHost(host,"xui_ui_radiobox320")
                .setDataBinder("rdb")
                .setDataField("B4")
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
                .setTop("9.266666666666667em")
                .setWidth("28.952380952380953em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("20em")
                .setLabelGap("0em")
                .setLabelCaption("Vacuum Side 組裝零件之連接面鋪設銦片")
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
                .setDataField("B5")
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
                .setTop("11.333333333333334em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("Diode Connector Pin 接點阻值確認")
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
                .setDataField("B6")
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
                .setTop("13.266666666666667em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("Diode Line正確固定並保持彈性")
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
                .setTop("15.6em")
                .setWidth("21.933333333333334em")
                .setHeight("0em")
                .setCaption("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k)")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox323")
                .setDataBinder("rdb")
                .setDataField("B7#3")
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
                .setTop("16.933333333333334em")
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
                .setHost(host,"xui_ui_radiobox380")
                .setDataBinder("rdb")
                .setDataField("B10")
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
                .setTop("24em")
                .setWidth("26.666666666666668em")
                .setHeight("1.9047619047619047em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("更換Diode需與Module做校正")
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
                .setHost(host,"xui_ui_radiobox381")
                .setDataBinder("rdb")
                .setDataField("B11")
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
                .setLeft("13.666666666666666em")
                .setTop("26em")
                .setWidth("26.666666666666668em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("Rough Valve 上座旋緊 / 鎖緊 確認")
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
                .setHost(host,"xui_ui_radiobox382")
                .setDataBinder("rdb")
                .setDataField("B12")
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
                .setTop("27.933333333333334em")
                .setWidth("26.666666666666668em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("Rough / Purge Valve Coil軸心鎖緊確認")
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
                .setHost(host,"xui_ui_radiobox383")
                .setDataBinder("rdb")
                .setDataField("B13#2")
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
                .setLeft("21.561904761904763em")
                .setTop("29.933333333333334em")
                .setWidth("18.666666666666668em")
                .setHeight("1.8em")
                .setLabelSize("10.1em")
                .setLabelGap("0em")
                .setLabelCaption("μ VCR Cable 接頭確認")
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
                .setDataField("B14#2")
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
                .setTop("32.266666666666666em")
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
                .setTop("42.666666666666664em")
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
                .setTop("40em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setDock("fill")
                .setLeft("22.666666666666668em")
                .setTop("19.333333333333332em"),
                "d"
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1648")
                .setName("”X” head Timing Valve 校正")
                .setDataBinder("rdb")
                .setDataField("C2")
                .setLeft("14em")
                .setTop("2.6666666666666665em")
                .setWidth("20em")
                .setLabelSize("12em")
                .setLabelCaption("”X” head Timing Valve 校正")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1649")
                .setName("”X” head S/N C")
                .setDataBinder("rdb")
                .setDataField("C3#1")
                .setLeft("7.333333333333333em")
                .setTop("4.666666666666667em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("”X” head S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1509")
                .setName("Motor：Ω#1")
                .setDataBinder("rdb")
                .setDataField("C4#1")
                .setLeft("1.3333333333333333em")
                .setTop("6.666666666666667em")
                .setWidth("11.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("Motor")
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
                .setDataField("C4#2")
                .setLeft("12.666666666666666em")
                .setTop("6.666666666666667em")
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
                .setDataField("C4#3")
                .setLeft("16.666666666666668em")
                .setTop("6.666666666666667em")
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
                .setDataField("C4#4")
                .setLeft("21.8em")
                .setTop("6.666666666666667em")
                .setWidth("4.866666666666666em")
                .setLabelSize("1em")
                .setLabelCaption("⏚")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1513")
                .setName("CABLE：Ω#1")
                .setDataBinder("rdb")
                .setDataField("C5#1")
                .setLeft("1.3333333333333333em")
                .setTop("8.666666666666666em")
                .setWidth("11.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1514")
                .setName("CABLE：Ω#2")
                .setDataBinder("rdb")
                .setDataField("C5#2")
                .setLeft("12.666666666666666em")
                .setTop("8.666666666666666em")
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
                .setHost(host,"xui_ui_comboinput1515")
                .setName("CABLE：Ω#3")
                .setDataBinder("rdb")
                .setDataField("C5#3")
                .setLeft("16.666666666666668em")
                .setTop("8.666666666666666em")
                .setWidth("4.533333333333333em")
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1516")
                .setName("CABLE：Ω#4")
                .setDataBinder("rdb")
                .setDataField("C5#4")
                .setLeft("21.8em")
                .setTop("8.666666666666666em")
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
                .setDataField("C6#1")
                .setLeft("1.3333333333333333em")
                .setTop("13.333333333333334em")
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
                .setDataField("C6#2")
                .setLeft("14.533333333333333em")
                .setTop("13.333333333333334em")
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
                .setDataField("C8#1")
                .setLeft("1.3333333333333333em")
                .setTop("18em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("Seal 1st")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1658")
                .setName("Seal 2nd")
                .setDataBinder("rdb")
                .setDataField("C8#2")
                .setLeft("14.466666666666667em")
                .setTop("18em")
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
                .setDataField("C8#3")
                .setLeft("22em")
                .setTop("18em")
                .setWidth("7.4em")
                .setLabelSize("3em")
                .setLabelCaption("/推")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1660")
                .setName("Seal 拉")
                .setDataBinder("rdb")
                .setDataField("C8#4")
                .setLeft("28.666666666666668em")
                .setTop("18em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("拉")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1661")
                .setName("Depth")
                .setDataBinder("rdb")
                .setDataField("C9#1")
                .setLeft("1.3333333333333333em")
                .setTop("20.666666666666668em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("Depth")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1662")
                .setName("Setting")
                .setDataBinder("rdb")
                .setDataField("C9#2")
                .setLeft("16.666666666666668em")
                .setTop("20.666666666666668em")
                .setWidth("18.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Setting")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1519")
                .setName("Displacer-Collar間距校正值")
                .setDataBinder("rdb")
                .setDataField("C10#1")
                .setLeft("2em")
                .setTop("23.333333333333332em")
                .setWidth("24em")
                .setLabelSize("13em")
                .setLabelCaption("Displacer-Collar間距校正值")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox247")
                .setName("M350")
                .setDataBinder("rdb")
                .setDataField("C12#1")
                .setLeft("2.6666666666666665em")
                .setTop("27.933333333333334em")
                .setWidth("8.8em")
                .setCaption("M350")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox248")
                .setName("M22")
                .setDataBinder("rdb")
                .setDataField("C12#2")
                .setLeft("12.666666666666666em")
                .setTop("27.933333333333334em")
                .setWidth("6.133333333333334em")
                .setCaption("M22")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox249")
                .setName("M1020")
                .setDataBinder("rdb")
                .setDataField("C12#3")
                .setLeft("2.6666666666666665em")
                .setTop("29.933333333333334em")
                .setWidth("5.866666666666666em")
                .setCaption("M1020")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox250")
                .setName("M1050")
                .setDataBinder("rdb")
                .setDataField("C12#4")
                .setLeft("12.666666666666666em")
                .setTop("29.933333333333334em")
                .setWidth("7.4em")
                .setCaption("M1050")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox251")
                .setName("M600/M900")
                .setDataBinder("rdb")
                .setDataField("C12#5")
                .setLeft("2.6666666666666665em")
                .setTop("31.933333333333334em")
                .setWidth("7.866666666666666em")
                .setCaption("M600/M900")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox252")
                .setName("P300")
                .setDataBinder("rdb")
                .setDataField("C12#6")
                .setLeft("12.666666666666666em")
                .setTop("31.866666666666667em")
                .setWidth("5.266666666666667em")
                .setCaption("P300")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1665")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("rdb")
                .setDataField("C13#1")
                .setLeft("0em")
                .setTop("34.6em")
                .setWidth("26em")
                .setLabelSize("15em")
                .setLabelCaption("Helium Side Leak Test：(5x10<sup>-6</sup>)")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1670")
                .setName("C組裝簽名")
                .setDataBinder("rdb")
                .setDataField("C組裝簽名")
                .setLeft("6.666666666666667em")
                .setTop("43.266666666666666em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1671")
                .setName("C組長覆核")
                .setDataBinder("rdb")
                .setDataField("C組長覆核")
                .setLeft("6.666666666666667em")
                .setTop("45.266666666666666em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox552")
                .setDataBinder("rdb")
                .setDataField("C1")
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
                .setLabelCaption("Check表單與Pump配件相符")
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
                .setDataField("C3#2")
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
                .setLeft("22.733333333333334em")
                .setTop("4.4em")
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
                .setDataField("C4#5")
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
                .setLeft("25.733333333333334em")
                .setTop("6.466666666666667em")
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
                .setHost(host,"xui_ui_radiobox626")
                .setDataBinder("rdb")
                .setDataField("C5#5")
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
                .setLeft("25.6em")
                .setTop("8.4em")
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
                .setLeft("5.8em")
                .setTop("11.333333333333334em")
                .setWidth("4.466666666666667em")
                .setCaption("Displacer:")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox627")
                .setDataBinder("rdb")
                .setDataField("C6#3")
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
                .setLeft("22.666666666666668em")
                .setTop("13.2em")
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
                .setDataField("C7#1")
                .setLeft("1.3333333333333333em")
                .setTop("15.466666666666667em")
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
                .setDataField("C7#2")
                .setLeft("14.533333333333333em")
                .setTop("15.466666666666667em")
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
                .setDataField("C7#3")
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
                .setLeft("22.666666666666668em")
                .setTop("15.133333333333333em")
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
                .setHost(host,"xui_ui_radiobox629")
                .setDataBinder("rdb")
                .setDataField("C10#2")
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
                .setLeft("26em")
                .setTop("23.066666666666666em")
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
                .setHost(host,"xui_ui_radiobox630")
                .setDataBinder("rdb")
                .setDataField("C11")
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
                .setLeft("15em")
                .setTop("25.333333333333332em")
                .setWidth("20.466666666666665em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("Purge Helium Side Y/N")
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
                .setHost(host,"xui_ui_label151")
                .setLeft("19.533333333333335em")
                .setTop("28.266666666666666em")
                .setWidth("13.4em")
                .setHeight("1.3333333333333333em")
                .setCaption("-------------------->250 ±5 Psi")
                .setHAlign("left")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label152")
                .setLeft("19.6em")
                .setTop("29.933333333333334em")
                .setWidth("13.4em")
                .setHeight("1.3333333333333333em")
                .setCaption("-------------------->250 ±5 Psi")
                .setHAlign("left")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label153")
                .setLeft("19.533333333333335em")
                .setTop("31.866666666666667em")
                .setWidth("13.4em")
                .setHeight("1.3333333333333333em")
                .setCaption("-------------------->300 ±5 Psi")
                .setHAlign("left")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox631")
                .setDataBinder("rdb")
                .setDataField("C13#2")
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
                .setLeft("25.8em")
                .setTop("34.2em")
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
                .setDataField("C14")
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
                .setLeft("12.8em")
                .setTop("36.6em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("14em")
                .setLabelGap("0em")
                .setLabelCaption("Crosshead 螺絲安裝/畫線確認")
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
                .setDataField("C15")
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
                .setLeft("12.733333333333333em")
                .setTop("38.6em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("14em")
                .setLabelGap("0em")
                .setLabelCaption("15k Array間距調整(不可接觸)")
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
                .setDataField("C16")
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
                .setLeft("11.80952380952381em")
                .setTop("40.6em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("Pump各配件Cable確實接好固定")
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
                .setTop("43.266666666666666em")
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
            
            host.tabs1.append(
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
                .setDataField("D2#1")
                .setLeft("2em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Supply Pressure")
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
                .setDataField("D2#2")
                .setLeft("22.666666666666668em")
                .setTop("2em")
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
                .setDataField("D2#3")
                .setLeft("43.333333333333336em")
                .setTop("2em")
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
                .setDataField("D3#1")
                .setLeft("0em")
                .setTop("4em")
                .setWidth("20em")
                .setLabelSize("10em")
                .setLabelCaption("Compressor Model")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2095")
                .setName("Start Cooldown#1")
                .setDataBinder("rdb")
                .setDataField("D3#2")
                .setLeft("20.666666666666668em")
                .setTop("4em")
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
                .setDataField("D3#3")
                .setLeft("33.333333333333336em")
                .setTop("4em")
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
                .setDataField("D3#4")
                .setLeft("39.333333333333336em")
                .setTop("4em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2098")
                .setName("底溫#1")
                .setDataBinder("rdb")
                .setDataField("D4#1")
                .setLeft("-0.13333333333333333em")
                .setTop("6em")
                .setWidth("8.666666666666666em")
                .setLabelSize("4em")
                .setLabelCaption("底溫")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2099")
                .setName("底溫#2")
                .setDataBinder("rdb")
                .setDataField("D4#2")
                .setLeft("8em")
                .setTop("6em")
                .setWidth("5.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2100")
                .setName("底溫#3")
                .setDataBinder("rdb")
                .setDataField("D4#3")
                .setLeft("14em")
                .setTop("6em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2101")
                .setName("1st 設溫#1")
                .setDataBinder("rdb")
                .setDataField("D4#4")
                .setLeft("24.666666666666668em")
                .setTop("6em")
                .setWidth("8.666666666666666em")
                .setLabelSize("4em")
                .setLabelCaption("1<sup>st </sup>設溫")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2102")
                .setName("1st 設溫#2")
                .setDataBinder("rdb")
                .setDataField("D4#5")
                .setLeft("33.333333333333336em")
                .setTop("6em")
                .setWidth("5.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2103")
                .setName("1st 設溫#3")
                .setDataBinder("rdb")
                .setDataField("D4#6")
                .setLeft("39.333333333333336em")
                .setTop("6em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2111")
                .setName("測試人員簽名")
                .setDataBinder("rdb")
                .setDataField("D測試人員簽名")
                .setLeft("0em")
                .setTop("15.333333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2112")
                .setName("測試組長覆核")
                .setDataBinder("rdb")
                .setDataField("D測試組長覆核")
                .setLeft("0em")
                .setTop("17.333333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox333")
                .setDataBinder("rdb")
                .setDataField("D1#1")
                .setLeft("2.6666666666666665em")
                .setTop("0.26666666666666666em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("管線配接符合Pump要求  Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox334")
                .setDataBinder("rdb")
                .setDataField("D1#2")
                .setLeft("32em")
                .setTop("0.26666666666666666em")
                .setWidth("17.4em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("依Test標準參數設定    Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label216")
                .setLeft("20.4em")
                .setTop("2.066666666666667em")
                .setHeight("1.3333333333333333em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label217")
                .setLeft("40.333333333333336em")
                .setTop("2.2em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox952")
                .setDataBinder("rdb")
                .setDataField("D5#1")
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
                .setLeft("-0.6666666666666666em")
                .setTop("8em")
                .setWidth("21.733333333333334em")
                .setHeight("1.6666666666666667em")
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("Test完成後Runtime 歸零")
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
                .setDataField("D5#2")
                .setLeft("30em")
                .setTop("8.666666666666666em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("Test完成後,Helium Side Purge    Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox349")
                .setDataBinder("rdb")
                .setDataField("D6#2")
                .setLeft("30em")
                .setTop("10.533333333333333em")
                .setWidth("20.533333333333335em")
                .setHeight("1.2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("15k Array間距調整檢查(不可接觸)Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1003")
                .setDataBinder("rdb")
                .setDataField("D6#1")
                .setItems([
                    {
                        "id" : "無",
                        "caption" : "無",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0k",
                        "caption" : "0k",
                        "imageClass" : ""
                    },
                    {
                        "id" : "65k",
                        "caption" : "65k"
                    },
                    {
                        "id" : "100k",
                        "caption" : "100k"
                    }
                ])
                .setLeft("-0.6666666666666666em")
                .setTop("10.266666666666667em")
                .setWidth("28.933333333333334em")
                .setHeight("2.066666666666667em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("1<sup>st</sup> Temp設溫")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "KEY" : {
                    },
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox364")
                .setDataBinder("rdb")
                .setDataField("D7#1")
                .setLeft("2em")
                .setTop("12.666666666666666em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("Test完成後，Vacuum Side Leak Test  Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox365")
                .setDataBinder("rdb")
                .setDataField("D7#2")
                .setLeft("30em")
                .setTop("12.466666666666667em")
                .setWidth("20.533333333333335em")
                .setHeight("2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("Pump入庫前外觀檢查 Pass")
            );
            
            host.tabs1.append(
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
                .setWidth("62.8em")
                .setHeight("15.333333333333334em")
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
                            "value" : "Minutes to 11k after 20k/ Gauge \n15k，must be ≦ 40 mins"
                        },
                        "A8" : {
                            "value" : "Spec≦ 10.9k or Gauge 0 psi 2nd Stage"
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
                            "value" : "Bottom Out Reading After 14k，Spec\n<=50k 1st Stage And<=10.9k 2nd Stage"
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
                            "value" : "IS 1st Stage Temp Control Test"
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
                            "value" : "2nd Stage Heater Test"
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
                .setWidth("61.46666666666667em")
                .setHeight("1.9333333333333333em"),
                "A1"
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4318")
                .setDataBinder("rdb")
                .setDataField("TestDate")
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
                .setWidth("61.46666666666667em")
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
                .setDataBinder("rdb")
                .setDataField("E1")
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
                .setDataBinder("rdb")
                .setDataField("E2")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D4"
            );
            
            host.xui_ui_div749.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1516")
                .setDataBinder("rdb")
                .setDataField("E4")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D6"
            );
            
            host.xui_ui_div750.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1517")
                .setDataBinder("rdb")
                .setDataField("E8")
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
                .setWidth("5.666666666666667em")
                .setHeight("3.2em"),
                "D7"
            );
            
            host.xui_ui_div751.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1518")
                .setDataBinder("rdb")
                .setDataField("E11")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D8"
            );
            
            host.xui_ui_div752.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1519")
                .setDataBinder("rdb")
                .setDataField("E14")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D10"
            );
            
            host.xui_ui_div753.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1520")
                .setDataBinder("rdb")
                .setDataField("E17")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D11"
            );
            
            host.xui_ui_div754.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1521")
                .setDataBinder("rdb")
                .setDataField("E19")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D12"
            );
            
            host.xui_ui_div755.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1522")
                .setDataBinder("rdb")
                .setDataField("E22")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D13"
            );
            
            host.xui_ui_div756.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1523")
                .setDataBinder("rdb")
                .setDataField("E25")
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
                .setWidth("5.666666666666667em")
                .setHeight("3.2em"),
                "D14"
            );
            
            host.xui_ui_div757.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1524")
                .setDataBinder("rdb")
                .setDataField("E28")
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
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D15"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div759")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div760")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.666666666666667em")
                .setHeight("1.8666666666666667em"),
                "D26"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div761")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div761.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5228")
                .setDataBinder("rdb")
                .setDataField("E6")
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
                .setWidth("16em")
                .setHeight("3.2em"),
                "B7"
            );
            
            host.xui_ui_div762.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5229")
                .setDataBinder("rdb")
                .setDataField("E9")
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
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div763.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5230")
                .setDataBinder("rdb")
                .setDataField("E12")
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
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B12"
            );
            
            host.xui_ui_div764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5231")
                .setDataBinder("rdb")
                .setDataField("E20")
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
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B13"
            );
            
            host.xui_ui_div765.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5232")
                .setDataBinder("rdb")
                .setDataField("E23")
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
                .setWidth("16em")
                .setHeight("3.2em"),
                "B14"
            );
            
            host.xui_ui_div766.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5233")
                .setDataBinder("rdb")
                .setDataField("E26")
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
                .setDataBinder("rdb")
                .setDataField("E27")
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
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div767.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5235")
                .setDataBinder("rdb")
                .setDataField("E15")
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
                .setDataBinder("rdb")
                .setDataField("E16")
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
                .setWidth("32em")
                .setHeight("1.8666666666666667em"),
                "B16"
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5237")
                .setDataBinder("rdb")
                .setDataField("E29")
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
                .setDataField("E30")
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
                .setDataField("E31")
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
                .setDataField("E32")
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
                .setWidth("32em")
                .setHeight("1.8666666666666667em"),
                "B18"
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5241")
                .setDataBinder("rdb")
                .setDataField("E33")
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
                .setDataBinder("rdb")
                .setDataField("E34")
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
                .setDataBinder("rdb")
                .setDataField("E35")
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
                .setDataBinder("rdb")
                .setDataField("E36")
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
                .setWidth("32em")
                .setHeight("1.8666666666666667em"),
                "B20"
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5245")
                .setDataBinder("rdb")
                .setDataField("E37")
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
                .setDataBinder("rdb")
                .setDataField("E38")
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
                .setDataBinder("rdb")
                .setDataField("E39")
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
                .setDataBinder("rdb")
                .setDataField("E40")
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
                .setWidth("32em")
                .setHeight("1.8666666666666667em"),
                "B23"
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5249")
                .setDataBinder("rdb")
                .setDataField("E42")
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
                .setDataField("E43")
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
                .setWidth("32em")
                .setHeight("1.8666666666666667em"),
                "B24"
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5250")
                .setDataBinder("rdb")
                .setDataField("E44")
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
                .setDataField("E45")
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
                .setWidth("55.733333333333334em")
                .setHeight("1.8666666666666667em"),
                "A26"
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
                .setHost(host,"xui_ui_div776")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.666666666666667em")
                .setHeight("9.733333333333333em"),
                "D16"
            );
            
            host.xui_ui_div776.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1526")
                .setDataBinder("rdb")
                .setDataField("E41")
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
                .setWidth("5.666666666666667em")
                .setHeight("5.8em"),
                "D22"
            );
            
            host.xui_ui_div777.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1527")
                .setDataBinder("rdb")
                .setDataField("E46")
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
                .setWidth("61.46666666666667em")
                .setHeight("16.533333333333335em"),
                "A27"
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5253")
                .setName("B4")
                .setDataBinder("rdb")
                .setDataField("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4321")
                .setName("B5")
                .setDataBinder("rdb")
                .setDataField("E5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5254")
                .setName("C6")
                .setDataBinder("rdb")
                .setDataField("E7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5255")
                .setName("C7")
                .setDataBinder("rdb")
                .setDataField("E10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("3.2em")
                .setLabelPos("none"),
                "C7"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5256")
                .setName("C8")
                .setDataBinder("rdb")
                .setDataField("E13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C8"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4322")
                .setName("B11")
                .setDataBinder("rdb")
                .setDataField("E18")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
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
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "B25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block544")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em"),
                "C25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5257")
                .setName("C12")
                .setDataField("E21")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C12"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5258")
                .setName("C13")
                .setDataBinder("rdb")
                .setDataField("E24")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C13"
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs2")
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
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setValue("f")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block213")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("13.333333333333334em"),
                "a"
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1373")
                .setName("上次登錄編號")
                .setDataBinder("rdb2")
                .setDataField("上次登錄編號")
                .setLeft("1.3333333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput882")
                .setName("上次登錄時間")
                .setDataBinder("rdb2")
                .setDataField("上次登錄時間")
                .setLeft("21.333333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput883")
                .setName("保固期")
                .setDataBinder("rdb2")
                .setDataField("保固期")
                .setLeft("38.666666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("19.276190476190475em")
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1374")
                .setName("上次故障原因")
                .setDataBinder("rdb2")
                .setDataField("上次故障原因")
                .setLeft("1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1375")
                .setName("進廠原因")
                .setDataBinder("rdb2")
                .setDataField("進廠原因")
                .setLeft("21.333333333333332em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1376")
                .setName("Pump P/N")
                .setDataBinder("rdb2")
                .setDataField("Pump P/N")
                .setLeft("-2.8em")
                .setTop("8em")
                .setWidth("22.133333333333333em")
                .setLabelSize("12em")
                .setLabelCaption("Pump P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1377")
                .setName("Pump S/N")
                .setDataBinder("rdb2")
                .setDataField("Pump S/N")
                .setLeft("21.333333333333332em")
                .setTop("8em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1378")
                .setName("Module1 P/N")
                .setDataBinder("rdb2")
                .setDataField("Module1 P/N")
                .setLeft("17.333333333333332em")
                .setTop("10.514285714285714em")
                .setWidth("22em")
                .setLabelSize("12em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1379")
                .setName("Module1 S/N")
                .setDataBinder("rdb2")
                .setDataField("Module1 S/N")
                .setLeft("41.93333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("16em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1380")
                .setName("Module1 Name")
                .setDataBinder("rdb2")
                .setDataField("Module1 Name")
                .setLeft("1.3333333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1381")
                .setName("Pump/Module ETM")
                .setDataBinder("rdb2")
                .setDataField("Pump/Module ETM")
                .setLeft("-2.6666666666666665em")
                .setTop("13.638095238095238em")
                .setWidth("21.714285714285715em")
                .setLabelSize("12em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1382")
                .setName("特殊零件")
                .setDataBinder("rdb2")
                .setDataField("特殊零件")
                .setLeft("21.333333333333332em")
                .setTop("13.638095238095238em")
                .setWidth("18.20952380952381em")
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox719")
                .setDataBinder("rdb2")
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
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1383")
                .setName("Module1 S/N")
                .setDataBinder("rdb2")
                .setDataField("配件是否齊全#2")
                .setLeft("16.914285714285715em")
                .setTop("16.99047619047619em")
                .setWidth("22.704761904761906em")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox720")
                .setDataBinder("rdb2")
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
                        "id" : "OT",
                        "caption" : "OT",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("2em")
                .setTop("0.6em")
                .setWidth("19.666666666666668em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block214")
                .setDock("fill")
                .setLeft("11.333333333333334em")
                .setTop("16.666666666666668em"),
                "b"
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput884")
                .setName("Diode 1st")
                .setDataBinder("rdb2")
                .setDataField("SA1#1")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput885")
                .setName("Diode 1st#2")
                .setDataBinder("rdb2")
                .setDataField("SA1#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput886")
                .setName("Diode 2nd")
                .setDataBinder("rdb2")
                .setDataField("SA1#4")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput887")
                .setName("Diode 2nd#2")
                .setDataBinder("rdb2")
                .setDataField("SA1#5")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1384")
                .setName("Heater & Cylinder S/N")
                .setDataBinder("rdb2")
                .setDataField("SA2")
                .setLeft("-1.3333333333333333em")
                .setTop("7.542857142857143em")
                .setWidth("20.666666666666668em")
                .setLabelSize("12em")
                .setLabelCaption("2.Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput888")
                .setName("Motor#1")
                .setDataBinder("rdb2")
                .setDataField("A4#1")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput889")
                .setName("Motor#2")
                .setDataBinder("rdb2")
                .setDataField("A4#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput890")
                .setName("Motor#3")
                .setDataBinder("rdb2")
                .setDataField("A4#3")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput891")
                .setName("Motor#4")
                .setDataBinder("rdb2")
                .setDataField("A4#4")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1385")
                .setName("Rough Valve")
                .setDataBinder("rdb2")
                .setDataField("A5#1")
                .setLeft("2.6666666666666665em")
                .setTop("12.571428571428571em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("4.Rough Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1386")
                .setName("Purge Valve")
                .setDataBinder("rdb2")
                .setDataField("A6#1")
                .setLeft("2.6666666666666665em")
                .setTop("17.066666666666666em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("6.Purge Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1387")
                .setName("Xhead原S/N")
                .setDataBinder("rdb2")
                .setDataField("A9#1")
                .setLeft("2.742857142857143em")
                .setTop("19.276190476190475em")
                .setWidth("16.6em")
                .setLabelSize("8em")
                .setLabelCaption("7.Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1388")
                .setName("1st Displacer原S/N")
                .setDataBinder("rdb2")
                .setDataField("A10#1")
                .setLeft("0.6666666666666666em")
                .setTop("21.63809523809524em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("8.  1<sup>st</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1389")
                .setName("2nd Displacer原S/N")
                .setDataBinder("rdb2")
                .setDataField("A11#1")
                .setLeft("0.6666666666666666em")
                .setTop("23.847619047619048em")
                .setWidth("18.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("9.  2<sup>nd</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1390")
                .setName("故障原因主要")
                .setDataBinder("rdb2")
                .setDataField("A12")
                .setLeft("2.742857142857143em")
                .setTop("26.285714285714285em")
                .setWidth("38.6em")
                .setLabelSize("8em")
                .setLabelCaption("10.故障原因主要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1391")
                .setName("故障原因次要")
                .setDataBinder("rdb2")
                .setDataField("A13")
                .setLeft("2.6666666666666665em")
                .setTop("28.876190476190477em")
                .setWidth("38.666666666666664em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1392")
                .setName("A組裝簽名")
                .setDataBinder("rdb2")
                .setDataField("A組裝簽名")
                .setLeft("20.666666666666668em")
                .setTop("39.8em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1393")
                .setName("A組長覆核")
                .setDataBinder("rdb2")
                .setDataField("A組長覆核")
                .setLeft("37.333333333333336em")
                .setTop("39.93333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox721")
                .setDataBinder("rdb2")
                .setDataField("SA1#3")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox722")
                .setDataBinder("rdb2")
                .setDataField("A4#5")
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
                .setLeft("32.6em")
                .setTop("9.82857142857143em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox723")
                .setDataBinder("rdb2")
                .setDataField("A5#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox724")
                .setDataBinder("rdb2")
                .setDataField("A5#3")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox725")
                .setDataBinder("rdb2")
                .setDataField("A6#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox726")
                .setDataBinder("rdb2")
                .setDataField("A6#3")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox727")
                .setDataBinder("rdb2")
                .setDataField("A9#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox728")
                .setDataBinder("rdb2")
                .setDataField("A10#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox729")
                .setDataBinder("rdb2")
                .setDataField("A11#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label206")
                .setLeft("4.666666666666667em")
                .setTop("31.085714285714285em")
                .setCaption("11.Pump清洗(非原廠貼紙清除)")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox730")
                .setDataBinder("rdb2")
                .setDataField("A14#1")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox731")
                .setDataBinder("rdb2")
                .setDataField("A14#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label207")
                .setLeft("29.714285714285715em")
                .setTop("31.16190476190476em")
                .setCaption("送洗")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label208")
                .setLeft("3.0476190476190474em")
                .setTop("33.2952380952381em")
                .setCaption("12.Pump配件掛牌(P/N：、S/N：)入烤箱")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox732")
                .setDataBinder("rdb2")
                .setDataField("A15")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput892")
                .setName("日期")
                .setDataBinder("rdb2")
                .setDataField("A組裝日期")
                .setLeft("23.61904761904762em")
                .setTop("37.25714285714286em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput893")
                .setName("日期")
                .setDataBinder("rdb2")
                .setDataField("A覆核日期")
                .setLeft("40.22857142857143em")
                .setTop("37.333333333333336em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label209")
                .setLeft("28.952380952380953em")
                .setTop("3.0476190476190474em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput894")
                .setName("Diode 2nd")
                .setDataBinder("rdb2")
                .setDataField("SA1#6")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput895")
                .setName("Diode 2nd#2")
                .setDataBinder("rdb2")
                .setDataField("SA1#7")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label210")
                .setLeft("28.952380952380953em")
                .setTop("5.40952380952381em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1394")
                .setName("Vent Valve")
                .setDataBinder("rdb2")
                .setDataField("SA5#1")
                .setLeft("2.6666666666666665em")
                .setTop("14.780952380952382em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("5.Vent Valve")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox733")
                .setDataBinder("rdb2")
                .setDataField("SA5#2")
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
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox734")
                .setDataBinder("rdb2")
                .setDataField("SA5#3")
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
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block215")
                .setDock("fill")
                .setLeft("12.666666666666666em")
                .setTop("20em"),
                "c"
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput896")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("rdb2")
                .setDataField("B7#1")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput897")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setDataBinder("rdb2")
                .setDataField("B7#2")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1395")
                .setName("New Diode 1st S/N")
                .setDataBinder("rdb2")
                .setDataField("B8#1")
                .setLeft("4.666666666666667em")
                .setTop("15.923809523809524em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("7.New RTD 1<sup>st</sup>  S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1396")
                .setName("New Diode 1st V")
                .setDataBinder("rdb2")
                .setDataField("B8#2")
                .setLeft("23.39047619047619em")
                .setTop("15.923809523809524em")
                .setWidth("9.133333333333333em")
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1397")
                .setName("New Diode 2nd S/N")
                .setDataBinder("rdb2")
                .setDataField("B9#1")
                .setLeft("4.666666666666667em")
                .setTop("17.904761904761905em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1398")
                .setName("New Diode 2nd V")
                .setDataBinder("rdb2")
                .setDataField("B9#2")
                .setLeft("23.39047619047619em")
                .setTop("17.904761904761905em")
                .setWidth("9.2em")
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1399")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("rdb2")
                .setDataField("B14#1")
                .setLeft("7.333333333333333em")
                .setTop("22.323809523809523em")
                .setWidth("24.685714285714287em")
                .setLabelSize("16em")
                .setLabelCaption("9.Vacuum Side Leak Test：(5x10<Sup>-9</sup>)")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1400")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("rdb2")
                .setDataField("B15")
                .setLeft("5.333333333333333em")
                .setTop("20.19047619047619em")
                .setWidth("26.666666666666668em")
                .setLabelSize("18em")
                .setLabelCaption("8.  80k Radiation Shield 安裝")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1401")
                .setName("B組裝簽名")
                .setDataBinder("rdb2")
                .setDataField("B組裝簽名")
                .setLeft("13.333333333333334em")
                .setTop("25.82857142857143em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1402")
                .setName("B組長覆核")
                .setDataBinder("rdb2")
                .setDataField("B組長覆核")
                .setLeft("13.333333333333334em")
                .setTop("28.495238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox735")
                .setDataBinder("rdb2")
                .setDataField("B1")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput898")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("rdb2")
                .setDataField("B2#1")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox736")
                .setDataBinder("rdb2")
                .setDataField("B2#2")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox737")
                .setDataBinder("rdb2")
                .setDataField("B4")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox738")
                .setDataBinder("rdb2")
                .setDataField("B5")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox739")
                .setDataBinder("rdb2")
                .setDataField("B6")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label211")
                .setLeft("11.533333333333333em")
                .setTop("11.733333333333333em")
                .setWidth("23.6em")
                .setHeight("1.6761904761904762em")
                .setCaption("6.RTD 室溫(標準值:300k ±10k，1st&2nd 相差2k)")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox740")
                .setDataBinder("rdb2")
                .setDataField("B7#3")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox741")
                .setDataBinder("rdb2")
                .setDataField("B14#2")
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
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput899")
                .setName("日期")
                .setDataBinder("rdb2")
                .setDataField("B覆核日期")
                .setLeft("32.666666666666664em")
                .setTop("28.495238095238093em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput900")
                .setName("日期")
                .setDataBinder("rdb2")
                .setDataField("B組裝日期")
                .setLeft("32.666666666666664em")
                .setTop("25.82857142857143em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block216")
                .setDock("fill")
                .setLeft("22.666666666666668em")
                .setTop("19.333333333333332em"),
                "d"
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1403")
                .setName("”X” head S/N C")
                .setDataBinder("rdb2")
                .setDataField("C3#1")
                .setLeft("9.6em")
                .setTop("2.4380952380952383em")
                .setWidth("16.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("2.”X” head S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput901")
                .setName("Motor：Ω#1")
                .setDataBinder("rdb2")
                .setDataField("C4#1")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput902")
                .setName("Motor：Ω#2")
                .setDataBinder("rdb2")
                .setDataField("C4#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput903")
                .setName("Motor：Ω#3")
                .setDataBinder("rdb2")
                .setDataField("C4#3")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput904")
                .setName("Motor：Ω#4")
                .setDataBinder("rdb2")
                .setDataField("C4#4")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1404")
                .setName("Displacer 1st S/N")
                .setDataBinder("rdb2")
                .setDataField("C6#1")
                .setLeft("3.657142857142857em")
                .setTop("8.838095238095239em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput905")
                .setName("Displacer 1st Flow")
                .setDataBinder("rdb2")
                .setDataField("C6#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1405")
                .setName("Seal 1st")
                .setDataBinder("rdb2")
                .setDataField("SC5#1")
                .setLeft("3.657142857142857em")
                .setTop("13.485714285714286em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("5.Seal 1st")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1406")
                .setName("Seal 2nd")
                .setDataBinder("rdb2")
                .setDataField("SC5#4")
                .setLeft("8.380952380952381em")
                .setTop("16em")
                .setWidth("8.866666666666667em")
                .setLabelSize("3em")
                .setLabelCaption("2nd")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1407")
                .setName("Seal 推")
                .setDataBinder("rdb2")
                .setDataField("SC5#2")
                .setLeft("17.82857142857143em")
                .setTop("13.485714285714286em")
                .setWidth("7.4em")
                .setLabelSize("2em")
                .setLabelCaption("/推")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1408")
                .setName("Seal 拉")
                .setDataBinder("rdb2")
                .setDataField("SC5#3")
                .setLeft("25.904761904761905em")
                .setTop("13.485714285714286em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("拉")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1409")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("rdb2")
                .setDataField("C13#1")
                .setLeft("2.2857142857142856em")
                .setTop("23.771428571428572em")
                .setWidth("26em")
                .setLabelSize("17em")
                .setLabelCaption("7.Helium Side Leak Test：(5x10<sup>-6</sup>)")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1410")
                .setName("C組裝簽名")
                .setDataBinder("rdb2")
                .setDataField("C組裝簽名")
                .setLeft("6.666666666666667em")
                .setTop("38.78095238095238em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1411")
                .setName("C組長覆核")
                .setDataBinder("rdb2")
                .setDataField("C組長覆核")
                .setLeft("6.666666666666667em")
                .setTop("40.76190476190476em")
                .setWidth("17.333333333333332em")
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox742")
                .setDataBinder("rdb2")
                .setDataField("C1")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox743")
                .setDataBinder("rdb2")
                .setDataField("C3#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox744")
                .setDataBinder("rdb2")
                .setDataField("C4#5")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label212")
                .setLeft("7.619047619047619em")
                .setTop("6.857142857142857em")
                .setWidth("4.466666666666667em")
                .setCaption("4.Displacer:")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox745")
                .setDataBinder("rdb2")
                .setDataField("C6#3")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1412")
                .setName("Displacer 1st S/N")
                .setDataBinder("rdb2")
                .setDataField("C7#1")
                .setLeft("3.657142857142857em")
                .setTop("10.971428571428572em")
                .setWidth("13.333333333333334em")
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput906")
                .setName("Displacer 1st Flow")
                .setDataBinder("rdb2")
                .setDataField("C7#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox746")
                .setDataBinder("rdb2")
                .setDataField("C7#3")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox747")
                .setDataBinder("rdb2")
                .setDataField("SC6#1")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox748")
                .setDataBinder("rdb2")
                .setDataField("C13#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox749")
                .setDataBinder("rdb2")
                .setDataField("C14")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox750")
                .setDataBinder("rdb2")
                .setDataField("C15")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox751")
                .setDataBinder("rdb2")
                .setDataField("C16")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput907")
                .setName("日期")
                .setDataBinder("rdb2")
                .setDataField("C組裝日期")
                .setLeft("25.333333333333332em")
                .setTop("38.78095238095238em")
                .setWidth("15em")
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput908")
                .setName("日期")
                .setDataBinder("rdb2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1413")
                .setName("Seal 推")
                .setDataBinder("rdb2")
                .setDataField("SC5#5")
                .setLeft("17.82857142857143em")
                .setTop("16em")
                .setWidth("7.4em")
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1414")
                .setName("Seal 拉")
                .setDataBinder("rdb2")
                .setDataField("SC5#6")
                .setLeft("25.904761904761905em")
                .setTop("16em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox752")
                .setDataBinder("rdb2")
                .setDataField("SC6#2")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox753")
                .setDataBinder("rdb2")
                .setDataField("SC6#3")
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
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1415")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("rdb2")
                .setDataField("SC9")
                .setLeft("2.2857142857142856em")
                .setTop("27.80952380952381em")
                .setWidth("34.36190476190476em")
                .setLabelSize("17em")
                .setLabelCaption("9. I/O Module安裝")
                .setMaxlength("32")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block217")
                .setDock("fill")
                .setLeft("13.333333333333334em")
                .setTop("18.666666666666668em")
                .setHeight("20em"),
                "e"
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput909")
                .setName("Supply Pressure")
                .setDataBinder("rdb2")
                .setDataField("D2#1")
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
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput910")
                .setName("Return Pressure")
                .setDataBinder("rdb2")
                .setDataField("D2#2")
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
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1416")
                .setName("Ch")
                .setDataBinder("rdb2")
                .setDataField("D2#3")
                .setLeft("20.571428571428573em")
                .setTop("6.552380952380952em")
                .setWidth("6.666666666666667em")
                .setLabelSize("2em")
                .setLabelCaption("Ch")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1417")
                .setName("Compressor Model")
                .setDataBinder("rdb2")
                .setDataField("D3#1")
                .setLeft("0.1523809523809524em")
                .setTop("6.552380952380952em")
                .setWidth("20em")
                .setLabelSize("10em")
                .setLabelCaption("4. Compressor Model")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1418")
                .setName("Start Cooldown#1")
                .setDataBinder("rdb2")
                .setDataField("D3#2")
                .setLeft("2.2857142857142856em")
                .setTop("8.533333333333333em")
                .setWidth("12.8em")
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown")
                .setMaxlength("10")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1419")
                .setName("Start Cooldown#2")
                .setDataBinder("rdb2")
                .setDataField("D3#3")
                .setLeft("15.00952380952381em")
                .setTop("8.533333333333333em")
                .setWidth("5.4em")
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1420")
                .setName("Start Cooldown#3")
                .setDataBinder("rdb2")
                .setDataField("D3#4")
                .setLeft("20.952380952380953em")
                .setTop("8.533333333333333em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1421")
                .setName("測試人員簽名")
                .setDataBinder("rdb2")
                .setDataField("D測試人員簽名")
                .setLeft("0em")
                .setTop("20.64761904761905em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1422")
                .setName("測試組長覆核")
                .setDataBinder("rdb2")
                .setDataField("D測試組長覆核")
                .setLeft("0em")
                .setTop("22.704761904761906em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox154")
                .setDataBinder("rdb2")
                .setDataField("D1#1")
                .setLeft("-0.3047619047619048em")
                .setTop("0.26666666666666666em")
                .setWidth("16.685714285714287em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("1. 管線配接符合Pump要求  Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox155")
                .setDataBinder("rdb2")
                .setDataField("D1#2")
                .setLeft("-0.5333333333333333em")
                .setTop("2.2857142857142856em")
                .setWidth("15.161904761904761em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("2. 依Test標準參數設定    Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label213")
                .setLeft("18.666666666666668em")
                .setTop("4.571428571428571em")
                .setHeight("1.3333333333333333em")
                .setCaption("psi")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label214")
                .setLeft("40.333333333333336em")
                .setTop("4.723809523809524em")
                .setCaption("psi")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox754")
                .setDataBinder("rdb2")
                .setDataField("D5#1")
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
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox156")
                .setDataBinder("rdb2")
                .setDataField("D5#2")
                .setLeft("-1.2952380952380953em")
                .setTop("10.438095238095238em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("5. Test完成後,Helium Side Purge    Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox157")
                .setDataBinder("rdb2")
                .setDataField("D6#2")
                .setLeft("0em")
                .setTop("13.866666666666667em")
                .setWidth("20.533333333333335em")
                .setHeight("1.2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("7. 15k Array間距調整檢查(不可接觸)Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox158")
                .setDataBinder("rdb2")
                .setDataField("D7#1")
                .setLeft("0.38095238095238093em")
                .setTop("15.847619047619048em")
                .setWidth("21.866666666666667em")
                .setHeight("1.1333333333333333em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("8. Test完成後，Vacuum Side Leak Test  Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox159")
                .setDataBinder("rdb2")
                .setDataField("D7#2")
                .setLeft("0.1523809523809524em")
                .setTop("17.676190476190477em")
                .setWidth("15.466666666666667em")
                .setHeight("2em")
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("9. Pump入庫前外觀檢查 Pass")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block218")
                .setDock("fill")
                .setLeft("17.523809523809526em")
                .setTop("27.428571428571427em"),
                "f"
            );
            
            host.xui_ui_block218.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout17")
                .setDock("fill")
                .setLeft("7.466666666666667em")
                .setTop("5.40952380952381em")
                .setWidth("62.8em")
                .setHeight("15.333333333333334em")
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
                        "B11" : {
                            "value" : "真空值"
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
                        "D10" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D11" : {
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div468")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.53333333333333em")
                .setHeight("1.9333333333333333em"),
                "A1"
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput911")
                .setDataBinder("rdb2")
                .setDataField("TestDate")
                .setLeft("-1.3333333333333333em")
                .setTop("0em")
                .setWidth("11.733333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1423")
                .setName("P/N")
                .setDataBinder("rdb2")
                .setDataField("P/N")
                .setLeft("13.533333333333333em")
                .setTop("0em")
                .setWidth("12.466666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1424")
                .setName("S/N")
                .setDataBinder("rdb2")
                .setDataField("S/N")
                .setLeft("28.2em")
                .setTop("0em")
                .setWidth("13.133333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div469")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.53333333333333em")
                .setHeight("1.8666666666666667em"),
                "A2"
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label215")
                .setLeft("0.4em")
                .setTop("0.26666666666666666em")
                .setCaption("Test")
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox160")
                .setDataBinder("rdb2")
                .setDataField("Assy OK")
                .setLeft("39.333333333333336em")
                .setTop("0.1523809523809524em")
                .setWidth("7.333333333333333em")
                .setIconPos("right")
                .setCaption("Assy OK")
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label218")
                .setLeft("22.095238095238095em")
                .setTop("0.5333333333333333em")
                .setCaption("Test Plate：SHI Sicera")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div470")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("1.8666666666666667em"),
                "D4"
            );
            
            host.xui_ui_div470.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox755")
                .setDataBinder("rdb2")
                .setDataField("E4")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div471")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("1.8666666666666667em"),
                "D6"
            );
            
            host.xui_ui_div471.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox756")
                .setDataBinder("rdb2")
                .setDataField("E8")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div472")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("1.8666666666666667em"),
                "D15"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div473")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div473.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1425")
                .setDataBinder("rdb2")
                .setDataField("E6")
                .setDock("fill")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div474")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("36.46666666666667em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1426")
                .setDataBinder("rdb2")
                .setDataField("E9")
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
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1427")
                .setDataBinder("rdb2")
                .setDataField("E10")
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
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1428")
                .setDataBinder("rdb2")
                .setDataField("E11")
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
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1429")
                .setDataBinder("rdb2")
                .setDataField("E12")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div475")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("36.46666666666667em")
                .setHeight("1.8666666666666667em"),
                "B12"
            );
            
            host.xui_ui_div475.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1430")
                .setDataBinder("rdb2")
                .setDataField("E16")
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
            
            host.xui_ui_div475.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput912")
                .setName("B5")
                .setDataBinder("rdb2")
                .setDataField("E17")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div476")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("36.46666666666667em")
                .setHeight("1.8666666666666667em"),
                "B13"
            );
            
            host.xui_ui_div476.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1431")
                .setDataBinder("rdb2")
                .setDataField("E19")
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
            
            host.xui_ui_div476.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput913")
                .setName("B5")
                .setDataBinder("rdb2")
                .setDataField("E20")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div477")
                .setDataBinder("rdb2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("55.06666666666667em")
                .setHeight("1.8666666666666667em"),
                "A15"
            );
            
            host.xui_ui_div477.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox757")
                .setDataBinder("rdb2")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div478")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("61.53333333333333em")
                .setHeight("16.533333333333335em"),
                "A16"
            );
            
            host.xui_ui_div478.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1432")
                .setDataBinder("rdb2")
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
            
            host.xui_ui_div478.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1433")
                .setDataBinder("rdb2")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div479")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("5.8em"),
                "D7"
            );
            
            host.xui_ui_div479.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox758")
                .setDataBinder("rdb2")
                .setDataField("E13")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div480")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("36.46666666666667em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div480.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1434")
                .setName("B4")
                .setDataBinder("rdb2")
                .setDataField("E14")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("15.847619047619048em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Time:")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div481")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("1.8666666666666667em"),
                "D10"
            );
            
            host.xui_ui_div481.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox759")
                .setDataBinder("rdb2")
                .setDataField("E15")
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
                .setLeft("-0.6666666666666666em")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div482")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.4em")
                .setHeight("5.8em"),
                "D11"
            );
            
            host.xui_ui_div482.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox760")
                .setDataBinder("rdb2")
                .setDataField("E18")
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
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label219")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.533333333333335em")
                .setHeight("1.8666666666666667em")
                .setCaption("1<sup>st</sup> Stage Temp Control Test")
                .setHAlign("left"),
                "A7"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label220")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.533333333333335em")
                .setHeight("1.8666666666666667em")
                .setCaption("2<sup>nd</sup> Stage Warm Up Test")
                .setHAlign("left"),
                "A10"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1435")
                .setName("B4")
                .setDataBinder("rdb2")
                .setDataField("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput914")
                .setName("B5")
                .setDataBinder("rdb2")
                .setDataField("E5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1436")
                .setName("C6")
                .setDataBinder("rdb2")
                .setDataField("E7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label221")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.533333333333335em")
                .setHeight("14.4em")
                .setCaption("RESET FACTORY REGEN PARAMETER   <br>                                       1st cooling control temp. = 100K,  2nd cooling target temp. = 17K,  Extended purge time for FULL regeneration = 0 mins,  Repurge cycle upper limit = 3,  Repurge time = 60sec,  ROR base pressure = 75mm/tr,  ROR threshold value = 38m/m,  ROR cycle upper limit = 10, ")
                .setHAlign("left"),
                "A11"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block219")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("8.533333333333333em")
                .setBorderType("none"),
                "B14"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block220")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("18.2em")
                .setHeight("8.533333333333333em")
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
            var db = ns.rdb, dbname = "rdb";
            if(ns.sheetType.getUIValue().includes("SHI"))
            {
                db = ns.rdb2;
                dbname = "rdb2";
            }
            ns.customer.setDataBinder(dbname);
            ns.date.setDataBinder(dbname);
            ns.report.setDataBinder(dbname);
            ns.sheetType.setDataBinder(dbname);
            ns.pump.setDataBinder(dbname);
            ns.repairNo.setDataBinder(dbname);
            utils.saveForm(ns,"","",null, db);
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop = ns.properties;
            ns.updateSheetType(ns.sheetType.getUIValue());
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
            console.log(utils.createDDL(ns.dialog,"Cryopump維修工單", true));
                            
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
                _optionbtn_onclick:function(profile, e, src, value){
                    var ns = this, uictrl = profile.boxing();
                    utils.showRepairOptionForm(ns.rdb);
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
        _repairno_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
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
            utils.updateNewWorkSheetValue(ns.rdb, newValue);
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
                 utils.showLastWorkSheet(ns,"CryopumpEditForm", "Cryopump維修工單", 'Pump S/N');
            },
            autoDestroy:true,
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
                        //console.log(utils.createDDL(ns.dialog,"Cryopump維修工單", true));
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