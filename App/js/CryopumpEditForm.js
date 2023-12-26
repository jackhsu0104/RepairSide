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
                .setHost(host,"crydb1")
                .setName("crydb1")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"crydb2")
                .setName("crydb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("2.6em")
                .setTop("0.6em")
                .setWidth("69.2em")
                .setHeight("50.43809523809524em")
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
                .setHost(host,"reportBtn")
                .setAutoTips(false)
                .setLeft("14.666666666666666em")
                .setTop("0.8666666666666667em")
                .setWidth("8em")
                .setTabindex(426)
                .setCaption("產生測試報告")
                .onClick("_reportbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairStatus")
                .setDataBinder("crydb1")
                .setDataField("維修狀態")
                .setAutoTips(false)
                .setLeft("22.666666666666668em")
                .setTop("1.0666666666666667em")
                .setWidth("15.533333333333333em")
                .setTabindex(427)
                .setLabelSize("5em")
                .setLabelCaption("維修狀態")
                .setType("popbox")
                .setMaxlength("32")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"nextBtn")
                .setAutoTips(false)
                .setLeft("43.333333333333336em")
                .setTop("0.8666666666666667em")
                .setWidth("10.333333333333334em")
                .setTabindex(428)
                .setCaption("工單到下一站")
                .setType("drop")
                .onClick("_nextbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"saveBtn")
                .setLeft("55.666666666666664em")
                .setTop("0.8666666666666667em")
                .setWidth("6.333333333333333em")
                .setTabindex(429)
                .setCaption("儲存")
                .onClick("_savebtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"cancelBtn")
                .setLeft("63.333333333333336em")
                .setTop("0.8666666666666667em")
                .setWidth("4em")
                .setTabindex(430)
                .setCaption("取消")
                .onClick("_cancelbtn_onclick")
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
                .setHeight("7.333333333333333em")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"customer")
                .setName("客戶名稱")
                .setDataBinder("crydb1")
                .setDataField("客戶名稱")
                .setAutoTips(false)
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"date")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("日期")
                .setAutoTips(false)
                .setLeft("13.333333333333334em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setTabindex(2)
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"pump")
                .setName("Pump")
                .setDataBinder("crydb1")
                .setDataField("Pump")
                .setAutoTips(false)
                .setLeft("26em")
                .setTop("0.6em")
                .setWidth("10.666666666666666em")
                .setTabindex(3)
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("20")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("crydb1")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setAutoTips(false)
                .setLeft("37.94285714285714em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setTabindex(4)
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("input")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
                .onClick("_repairno_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"report")
                .setDataBinder("crydb1")
                .setDataField("Report")
                .setAutoTips(false)
                .setLeft("53.333333333333336em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setTabindex(5)
                .setCaption("Report")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sheetType")
                .setDataBinder("crydb1")
                .setDataField("工單類別")
                .setRequired(true)
                .setAutoTips(false)
                .setLeft("0.6666666666666666em")
                .setTop("2.8666666666666667em")
                .setWidth("15.533333333333333em")
                .setTabindex(6)
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
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"warrantyBtn")
                .setAutoTips(false)
                .setTips("Warranty原因分析表")
                .setLeft("16.666666666666668em")
                .setTop("2.6666666666666665em")
                .setWidth("8.6em")
                .setTabindex(7)
                .setCaption("Warranty分析表")
                .onClick("_warrantybtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("26em")
                .setTop("2.6666666666666665em")
                .setWidth("8.666666666666666em")
                .setTabindex(8)
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button125")
                .setAutoTips(false)
                .setLeft("35.333333333333336em")
                .setTop("2.6666666666666665em")
                .setWidth("8.666666666666666em")
                .setTabindex(9)
                .setCaption("Test Form")
                .setType("drop")
                .onClick("_xui_ui_button125_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"optionBtn")
                .setAutoTips(false)
                .setLeft("44.666666666666664em")
                .setTop("2.6em")
                .setWidth("11.333333333333334em")
                .setTabindex(10)
                .setCaption("Option零件更換表")
                .onClick("_optionbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setAutoTips(false)
                .setLeft("56.666666666666664em")
                .setTop("2.6em")
                .setWidth("9.266666666666667em")
                .setTabindex(11)
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3227")
                .setName("Pump P/N")
                .setDataBinder("crydb1")
                .setDataField("Pump P/N")
                .setAutoTips(false)
                .setLeft("0.5333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("13.666666666666666em")
                .setTabindex(12)
                .setLabelSize("5em")
                .setLabelCaption("Pump P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3228")
                .setName("Pump P/N")
                .setDataBinder("crydb1")
                .setDataField("Pump S/N")
                .setAutoTips(false)
                .setLeft("13.6em")
                .setTop("5.333333333333333em")
                .setWidth("11.733333333333333em")
                .setTabindex(13)
                .setLabelSize("3em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setAutoTips(false)
                .setTips("Warranty原因分析表")
                .setLeft("26em")
                .setTop("5em")
                .setWidth("8.666666666666666em")
                .setHeight("1.9333333333333333em")
                .setTabindex(14)
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"crossheadBtn")
                .setAutoTips(false)
                .setTips("Warranty原因分析表")
                .setLeft("35.4em")
                .setTop("5em")
                .setWidth("8.666666666666666em")
                .setHeight("1.9333333333333333em")
                .setTabindex(15)
                .setCaption("Crosshead工單")
                .onClick("_crossheadbtn_onclick")
            );
            
            host.xui_ui_div262.append(
                xui.create("xui.UI.Button")
                .setHost(host,"moduleBtn")
                .setAutoTips(false)
                .setTips("Warranty原因分析表")
                .setLeft("44.666666666666664em")
                .setTop("5em")
                .setWidth("11.066666666666666em")
                .setHeight("1.9333333333333333em")
                .setTabindex(16)
                .setCaption("Module功能測試表")
                .onClick("_modulebtn_onclick")
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
                .setHeight("19.35238095238095em")
                .setValue("d")
            );
            
            host.tabs1.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setDock("fill")
                .setLeft("22.666666666666668em")
                .setTop("19.333333333333332em")
                .setTabindex(-1),
                "d"
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
                .setHost(host,"xui_ui_radiobox552")
                .setDataBinder("crydb1")
                .setDataField("C1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.6em")
                .setTop("0.3333333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setTabindex(215)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1648")
                .setName("”X” head Timing Valve 校正")
                .setDataBinder("crydb1")
                .setDataField("C2")
                .setLeft("14em")
                .setTop("2.6666666666666665em")
                .setWidth("20em")
                .setTabindex(216)
                .setLabelSize("12em")
                .setLabelCaption("”X” head Timing Valve 校正")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xmodel1")
                .setDataBinder("crydb1")
                .setDataField("Crosshead Model")
                .setLeft("37.333333333333336em")
                .setTop("2.6666666666666665em")
                .setWidth("18.666666666666668em")
                .setTabindex(217)
                .setLabelSize("8em")
                .setLabelCaption("\"X\" head Model")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "OB-M350",
                        "caption" : "OB-M350"
                    },
                    {
                        "id" : "CT-M350",
                        "caption" : "CT-M350"
                    },
                    {
                        "id" : "OB-M1020/50",
                        "caption" : "OB-M1020/50"
                    },
                    {
                        "id" : "CT-M1020/50",
                        "caption" : "CT-M1020/50"
                    },
                    {
                        "id" : "OB-M350 3PH",
                        "caption" : "OB-M350 3PH"
                    },
                    {
                        "id" : "IS-M600/M900",
                        "caption" : "IS-M600/M900"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other"
                    }
                ])
                .onValueChange("_xh1_onvaluechange")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xheadSN1")
                .setName("”X” head S/N C")
                .setDataBinder("crydb1")
                .setDataField("C3#1")
                .setLeft("7.333333333333333em")
                .setTop("4.666666666666667em")
                .setWidth("16.666666666666668em")
                .setTabindex(218)
                .setLabelSize("8em")
                .setLabelCaption("”X” head S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox553")
                .setDataBinder("crydb1")
                .setDataField("C3#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("22.733333333333334em")
                .setTop("4.4em")
                .setWidth("13.638095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(219)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xh1")
                .setDataBinder("crydb1")
                .setDataField("Crosshead編號")
                .setLeft("37.333333333333336em")
                .setTop("4.8em")
                .setWidth("18.666666666666668em")
                .setTabindex(220)
                .setLabelSize("8em")
                .setLabelCaption("\"X\" head編號 XH")
                .setType("popbox")
                .setMaxlength("32")
                .onValueChange("_xh1_onvaluechange")
                .beforeComboPop("_xh1_beforecombopop")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1509")
                .setName("Motor：Ω#1")
                .setDataBinder("crydb1")
                .setDataField("C4#1")
                .setLeft("1.3333333333333333em")
                .setTop("6.666666666666667em")
                .setWidth("11.333333333333334em")
                .setTabindex(221)
                .setLabelSize("8em")
                .setLabelCaption("Motor:Ω")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1510")
                .setName("Motor：Ω#2")
                .setDataBinder("crydb1")
                .setDataField("C4#2")
                .setLeft("12.666666666666666em")
                .setTop("6.666666666666667em")
                .setWidth("4.133333333333334em")
                .setTabindex(222)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1511")
                .setName("Motor：Ω#3")
                .setDataBinder("crydb1")
                .setDataField("C4#3")
                .setLeft("16.666666666666668em")
                .setTop("6.666666666666667em")
                .setWidth("4.666666666666667em")
                .setTabindex(223)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1512")
                .setName("Motor：Ω#4")
                .setDataBinder("crydb1")
                .setDataField("C4#4")
                .setLeft("21.8em")
                .setTop("6.666666666666667em")
                .setWidth("4.866666666666666em")
                .setTabindex(224)
                .setLabelSize("1em")
                .setLabelCaption("⏚")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox589")
                .setDataBinder("crydb1")
                .setDataField("C4#5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("25.733333333333334em")
                .setTop("6.466666666666667em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(225)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1513")
                .setName("CABLE：Ω#1")
                .setDataBinder("crydb1")
                .setDataField("C5#1")
                .setLeft("1.3333333333333333em")
                .setTop("8.666666666666666em")
                .setWidth("11.333333333333334em")
                .setTabindex(226)
                .setLabelSize("8em")
                .setLabelCaption("CABLE:Ω")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1514")
                .setName("CABLE：Ω#2")
                .setDataBinder("crydb1")
                .setDataField("C5#2")
                .setLeft("12.666666666666666em")
                .setTop("8.666666666666666em")
                .setWidth("4.133333333333334em")
                .setTabindex(227)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1515")
                .setName("CABLE：Ω#3")
                .setDataBinder("crydb1")
                .setDataField("C5#3")
                .setLeft("16.666666666666668em")
                .setTop("8.666666666666666em")
                .setWidth("4.533333333333333em")
                .setTabindex(228)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1516")
                .setName("CABLE：Ω#4")
                .setDataBinder("crydb1")
                .setDataField("C5#4")
                .setLeft("21.8em")
                .setTop("8.666666666666666em")
                .setWidth("4.866666666666666em")
                .setTabindex(229)
                .setLabelSize("1em")
                .setLabelCaption("⏚")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox626")
                .setDataBinder("crydb1")
                .setDataField("C5#5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("25.6em")
                .setTop("8.4em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(230)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1653")
                .setName("Displacer 1st S/N")
                .setDataBinder("crydb1")
                .setDataField("C6#1")
                .setLeft("1.3333333333333333em")
                .setTop("13.333333333333334em")
                .setWidth("13.333333333333334em")
                .setTabindex(231)
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1517")
                .setName("Displacer 1st Flow")
                .setDataBinder("crydb1")
                .setDataField("C6#2")
                .setLeft("14.533333333333333em")
                .setTop("13.333333333333334em")
                .setWidth("8.8em")
                .setTabindex(232)
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox627")
                .setDataBinder("crydb1")
                .setDataField("C6#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("22.666666666666668em")
                .setTop("13.066666666666666em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(233)
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
                .setDataBinder("crydb1")
                .setDataField("C7#1")
                .setLeft("1.3333333333333333em")
                .setTop("15.466666666666667em")
                .setWidth("13.333333333333334em")
                .setTabindex(234)
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1641")
                .setName("Displacer 1st Flow")
                .setDataBinder("crydb1")
                .setDataField("C7#2")
                .setLeft("14.533333333333333em")
                .setTop("15.466666666666667em")
                .setWidth("8.8em")
                .setTabindex(235)
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox628")
                .setDataBinder("crydb1")
                .setDataField("C7#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("22.666666666666668em")
                .setTop("15.133333333333333em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(236)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1657")
                .setName("Seal 1st")
                .setDataBinder("crydb1")
                .setDataField("C8#1")
                .setLeft("1.3333333333333333em")
                .setTop("18em")
                .setWidth("13.333333333333334em")
                .setTabindex(237)
                .setLabelSize("8em")
                .setLabelCaption("Seal 1st")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "D3",
                        "caption" : "D3"
                    },
                    {
                        "id" : "D5",
                        "caption" : "D5"
                    }
                ])
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1658")
                .setName("Seal 2nd")
                .setDataBinder("crydb1")
                .setDataField("C8#2")
                .setLeft("14.466666666666667em")
                .setTop("18em")
                .setWidth("12.866666666666667em")
                .setTabindex(238)
                .setLabelSize("3em")
                .setLabelCaption("2nd")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "CE",
                        "caption" : "CE"
                    }
                ])
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1659")
                .setName("Seal 推")
                .setDataBinder("crydb1")
                .setDataField("C8#3")
                .setLeft("28em")
                .setTop("18em")
                .setWidth("6.2em")
                .setTabindex(239)
                .setLabelSize("2em")
                .setLabelCaption("/推")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1660")
                .setName("Seal 拉")
                .setDataBinder("crydb1")
                .setDataField("C8#4")
                .setLeft("34em")
                .setTop("18em")
                .setWidth("6.666666666666667em")
                .setTabindex(240)
                .setLabelSize("2em")
                .setLabelCaption("拉")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"depth")
                .setName("Depth")
                .setDataBinder("crydb1")
                .setDataField("C9#1")
                .setLeft("1.3333333333333333em")
                .setTop("20.666666666666668em")
                .setWidth("17.333333333333332em")
                .setTabindex(241)
                .setLabelSize("8em")
                .setLabelCaption("Depth")
                .setMaxlength("32")
                .afterUIValueSet("_depth_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"setting")
                .setName("Setting")
                .setDataBinder("crydb1")
                .setDataField("C9#2")
                .setLeft("19.333333333333332em")
                .setTop("20.666666666666668em")
                .setTabindex(242)
                .setLabelSize("4em")
                .setLabelCaption("Setting")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2818")
                .setName("Setting")
                .setDataBinder("crydb1")
                .setDataField("C9#3")
                .setLeft("29.8em")
                .setTop("20.666666666666668em")
                .setWidth("7.333333333333333em")
                .setTabindex(243)
                .setLabelSize("1em")
                .setLabelCaption("~")
                .setType("input")
                .setMaxlength("32")
                .setPrecision(3)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1519")
                .setName("Displacer-Collar間距校正值")
                .setDataBinder("crydb1")
                .setDataField("C10#1")
                .setLeft("2em")
                .setTop("23.333333333333332em")
                .setWidth("24em")
                .setTabindex(244)
                .setLabelSize("13em")
                .setLabelCaption("Displacer-Collar間距校正值")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox629")
                .setDataBinder("crydb1")
                .setDataField("C10#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("26em")
                .setTop("23.066666666666666em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(245)
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
                .setDataBinder("crydb1")
                .setDataField("C11")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("15em")
                .setTop("25.333333333333332em")
                .setWidth("20.466666666666665em")
                .setHeight("1.7333333333333334em")
                .setTabindex(246)
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("Purge Helium Side")
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
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox247")
                .setName("M350")
                .setDataBinder("crydb1")
                .setDataField("C12#1")
                .setLeft("2.6666666666666665em")
                .setTop("27.933333333333334em")
                .setWidth("8.8em")
                .setTabindex(247)
                .setCaption("M350")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox248")
                .setName("M22")
                .setDataBinder("crydb1")
                .setDataField("C12#2")
                .setLeft("12.666666666666666em")
                .setTop("27.933333333333334em")
                .setWidth("6.133333333333334em")
                .setTabindex(248)
                .setCaption("M22")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox249")
                .setName("M1020")
                .setDataBinder("crydb1")
                .setDataField("C12#3")
                .setLeft("2.6666666666666665em")
                .setTop("29.933333333333334em")
                .setWidth("5.866666666666666em")
                .setTabindex(249)
                .setCaption("M1020")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox250")
                .setName("M1050")
                .setDataBinder("crydb1")
                .setDataField("C12#4")
                .setLeft("12.666666666666666em")
                .setTop("29.933333333333334em")
                .setWidth("7.4em")
                .setTabindex(250)
                .setCaption("M1050")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox251")
                .setName("M600/M900")
                .setDataBinder("crydb1")
                .setDataField("C12#5")
                .setLeft("2.6666666666666665em")
                .setTop("31.933333333333334em")
                .setWidth("7.866666666666666em")
                .setTabindex(251)
                .setCaption("M600/M900")
            );
            
            host.block4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox252")
                .setName("P300")
                .setDataBinder("crydb1")
                .setDataField("C12#6")
                .setLeft("12.666666666666666em")
                .setTop("31.866666666666667em")
                .setWidth("5.266666666666667em")
                .setTabindex(252)
                .setCaption("P300")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1665")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("crydb1")
                .setDataField("C13#1")
                .setLeft("0em")
                .setTop("34.6em")
                .setWidth("20em")
                .setTabindex(253)
                .setLabelSize("15em")
                .setLabelCaption("Helium Side Leak Test：(5x10<sup>-6</sup>)")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2819")
                .setName("Setting")
                .setDataBinder("crydb1")
                .setDataField("C13#3")
                .setLeft("19.533333333333335em")
                .setTop("34.6em")
                .setWidth("5.333333333333333em")
                .setTabindex(254)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox631")
                .setDataBinder("crydb1")
                .setDataField("C13#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("25.8em")
                .setTop("34.2em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(255)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c14")
                .setDataBinder("crydb1")
                .setDataField("C14")
                .setLeft("12.8em")
                .setTop("36.6em")
                .setWidth("23.333333333333332em")
                .setHeight("1.7333333333333334em")
                .setTabindex(256)
                .setLabelSize("14em")
                .setLabelGap("0em")
                .setLabelCaption("Crosshead 螺絲安裝/畫線確認")
                .setType("getter")
                .onClick("_c14_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c15")
                .setDataBinder("crydb1")
                .setDataField("C15")
                .setLeft("12.733333333333333em")
                .setTop("38.6em")
                .setWidth("23.4em")
                .setHeight("1.7333333333333334em")
                .setTabindex(257)
                .setLabelSize("14em")
                .setLabelGap("0em")
                .setLabelCaption("15k Array間距調整(不可接觸)")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_c15_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2820")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("crydb1")
                .setDataField("C17#1")
                .setLeft("8em")
                .setTop("41.06666666666667em")
                .setWidth("26em")
                .setTabindex(258)
                .setLabelSize("15em")
                .setLabelCaption("15k Array版本")
                .setMaxlength("32")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c16")
                .setDataBinder("crydb1")
                .setDataField("C16")
                .setLeft("11.80952380952381em")
                .setTop("43.06666666666667em")
                .setWidth("24.2em")
                .setHeight("1.7333333333333334em")
                .setTabindex(259)
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("Pump各配件Cable確實接好固定")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_c16_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2236")
                .setDataBinder("crydb1")
                .setDataField("備註C")
                .setAutoTips(false)
                .setLeft("40em")
                .setTop("32.91428571428571em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(260)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameC")
                .setName("C組裝簽名")
                .setDataBinder("crydb1")
                .setDataField("C組裝簽名")
                .setReadonly(true)
                .setLeft("6.666666666666667em")
                .setTop("45.733333333333334em")
                .setWidth("17.333333333333332em")
                .setTabindex(261)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namec_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateC")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("C組裝日期")
                .setReadonly(true)
                .setLeft("25.333333333333332em")
                .setTop("45.733333333333334em")
                .setWidth("15em")
                .setTabindex(262)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderC")
                .setName("C組長覆核")
                .setDataBinder("crydb1")
                .setDataField("C組長覆核")
                .setReadonly(true)
                .setLeft("6.666666666666667em")
                .setTop("47.733333333333334em")
                .setWidth("17.333333333333332em")
                .setTabindex(263)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderc_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderC")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("C覆核日期")
                .setReadonly(true)
                .setLeft("25.333333333333332em")
                .setTop("47.93333333333333em")
                .setWidth("15em")
                .setTabindex(264)
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
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("13.333333333333334em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2482")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setDockStretch("fixed")
                .setLeft("2.6666666666666665em")
                .setTop("0.6em")
                .setWidth("30.2em")
                .setHeight("2.6666666666666665em")
                .setTabindex(17)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4321")
                .setName("上次登錄編號")
                .setDataBinder("crydb1")
                .setDataField("上次維修廠商")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("2.7333333333333334em")
                .setWidth("18em")
                .setTabindex(18)
                .setLabelSize("8em")
                .setLabelCaption("上次維修廠商")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "Challentech",
                        "caption" : "Challentech"
                    },
                    {
                        "id" : "首次維修",
                        "caption" : "首次維修"
                    },
                    {
                        "id" : "Edwards",
                        "caption" : "Edwards"
                    },
                    {
                        "id" : "超淨",
                        "caption" : "超淨"
                    },
                    {
                        "id" : "翔名",
                        "caption" : "翔名"
                    },
                    {
                        "id" : "日揚",
                        "caption" : "日揚"
                    },
                    {
                        "id" : "無從判斷廠商",
                        "caption" : "無從判斷廠商"
                    }
                ])
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input185")
                .setName("上次登錄編號")
                .setDataBinder("crydb1")
                .setDataField("上次登錄編號")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("4.733333333333333em")
                .setWidth("18em")
                .setTabindex(19)
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput311")
                .setName("上次登錄時間")
                .setDataBinder("crydb1")
                .setDataField("上次登錄時間")
                .setAutoTips(false)
                .setLeft("21.333333333333332em")
                .setTop("4.733333333333333em")
                .setWidth("18em")
                .setTabindex(20)
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput312")
                .setName("保固期")
                .setDataBinder("crydb1")
                .setDataField("保固期")
                .setAutoTips(false)
                .setLeft("38.666666666666664em")
                .setTop("4.733333333333333em")
                .setWidth("18.666666666666668em")
                .setTabindex(21)
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input186")
                .setName("上次故障原因")
                .setDataBinder("crydb1")
                .setDataField("上次故障原因")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("6.733333333333333em")
                .setWidth("56em")
                .setTabindex(22)
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input215")
                .setName("進廠原因")
                .setDataBinder("crydb1")
                .setDataField("進廠原因")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("8.666666666666666em")
                .setWidth("56em")
                .setTabindex(23)
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input222")
                .setName("Module1 Name")
                .setDataBinder("crydb1")
                .setDataField("Module1 Name")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("11.066666666666666em")
                .setWidth("18em")
                .setTabindex(24)
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input218")
                .setName("Module1 P/N")
                .setDataBinder("crydb1")
                .setDataField("Module1 P/N")
                .setAutoTips(false)
                .setLeft("17.333333333333332em")
                .setTop("11em")
                .setWidth("22em")
                .setTabindex(25)
                .setLabelSize("12em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input219")
                .setName("Module1 S/N")
                .setDataBinder("crydb1")
                .setDataField("Module1 S/N")
                .setAutoTips(false)
                .setLeft("41.93333333333333em")
                .setTop("11.066666666666666em")
                .setWidth("16em")
                .setTabindex(26)
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input223")
                .setName("Module2 Name")
                .setDataBinder("crydb1")
                .setDataField("Module2 Name")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("13.066666666666666em")
                .setWidth("18em")
                .setTabindex(27)
                .setLabelSize("8em")
                .setLabelCaption("Module2 Name")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input220")
                .setName("Module2 P/N")
                .setDataBinder("crydb1")
                .setDataField("Module2 P/N")
                .setAutoTips(false)
                .setLeft("21.333333333333332em")
                .setTop("13em")
                .setWidth("18em")
                .setTabindex(28)
                .setLabelSize("8em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input221")
                .setName("Module2 S/N")
                .setDataBinder("crydb1")
                .setDataField("Module2 S/N")
                .setAutoTips(false)
                .setLeft("39.06666666666667em")
                .setTop("13.133333333333333em")
                .setWidth("18.933333333333334em")
                .setTabindex(29)
                .setLabelSize("8em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"etm1")
                .setName("Pump/Module ETM")
                .setDataBinder("crydb1")
                .setDataField("Pump/Module ETM")
                .setAutoTips(false)
                .setLeft("17.333333333333332em")
                .setTop("16.4em")
                .setWidth("21.866666666666667em")
                .setTabindex(30)
                .setLabelSize("12em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input227")
                .setName("特殊零件")
                .setDataBinder("crydb1")
                .setDataField("特殊零件")
                .setAutoTips(false)
                .setLeft("39.06666666666667em")
                .setTop("16.4em")
                .setWidth("18.933333333333334em")
                .setTabindex(31)
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    }
                ])
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4592")
                .setName("Pump/Module ETM")
                .setDataBinder("crydb1")
                .setDataField("Module對應Pump S/N")
                .setAutoTips(false)
                .setLeft("17.4em")
                .setTop("18.666666666666668em")
                .setWidth("25.933333333333334em")
                .setTabindex(32)
                .setLabelSize("12em")
                .setLabelCaption("Module對應Pump S/N")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2749")
                .setDataBinder("crydb1")
                .setDataField("Pump與Module是否相符")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("17.666666666666668em")
                .setTop("20.533333333333335em")
                .setWidth("19.733333333333334em")
                .setHeight("1.7523809523809524em")
                .setTabindex(33)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4593")
                .setName("Pump/Module ETM")
                .setDataBinder("crydb1")
                .setDataField("Module Software")
                .setAutoTips(false)
                .setLeft("17.333333333333332em")
                .setTop("23.2em")
                .setWidth("21.933333333333334em")
                .setTabindex(34)
                .setLabelSize("12em")
                .setLabelCaption("Module Software")
                .setMaxlength("200")
                .setItems([
                    {
                        "id" : "PG 02.23",
                        "caption" : "PG 02.23"
                    },
                    {
                        "id" : "PG 03.06",
                        "caption" : "PG 03.06"
                    },
                    {
                        "id" : "PK 02.23",
                        "caption" : "PK 02.23"
                    },
                    {
                        "id" : "PK 02.33",
                        "caption" : "PK 02.33"
                    },
                    {
                        "id" : "PK 02.27",
                        "caption" : "PK 02.27"
                    },
                    {
                        "id" : "PK 03.05",
                        "caption" : "PK 03.05"
                    },
                    {
                        "id" : "PC 02.23",
                        "caption" : "PC 02.23"
                    },
                    {
                        "id" : "PC 03.06",
                        "caption" : "PC 03.06"
                    }
                ])
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6386")
                .setDataBinder("crydb1")
                .setDataField("Module Software#2")
                .setLeft("39.93333333333333em")
                .setTop("23.266666666666666em")
                .setWidth("10.533333333333333em")
                .setTabindex(35)
                .setHAlign("left")
                .setMaxlength("10")
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4594")
                .setName("Pump/Module ETM")
                .setDataBinder("crydb1")
                .setDataField("Module Full Regen")
                .setAutoTips(false)
                .setLeft("17.333333333333332em")
                .setTop("25.2em")
                .setWidth("21.933333333333334em")
                .setTabindex(36)
                .setLabelSize("12em")
                .setLabelCaption("Module Full Regen")
                .setType("input")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2750")
                .setDataBinder("crydb1")
                .setDataField("配件是否齊全")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("20.666666666666668em")
                .setTop("26.8em")
                .setWidth("17.98095238095238em")
                .setHeight("1.7523809523809524em")
                .setTabindex(37)
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
                .setHost(host,"xui_ui_input5003")
                .setDataBinder("crydb1")
                .setDataField("配件是否齊全#3")
                .setAutoTips(false)
                .setLeft("37.333333333333336em")
                .setTop("27.133333333333333em")
                .setWidth("11.8em")
                .setTabindex(38)
                .setLabelCaption("Module對應Pump S/N")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3322")
                .setDataBinder("crydb1")
                .setDataField("角度")
                .setItems([
                    {
                        "id" : "90°",
                        "caption" : "90°"
                    },
                    {
                        "id" : "180°",
                        "caption" : "180°",
                        "imageClass" : ""
                    },
                    {
                        "id" : "270°",
                        "caption" : "270°",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("20.666666666666668em")
                .setTop("29.133333333333333em")
                .setWidth("31.466666666666665em")
                .setHeight("1.7523809523809524em")
                .setTabindex(39)
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("角度")
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
                .setHost(host,"xui_ui_comboinput317")
                .setName("上次Diode Line更換日期")
                .setDataBinder("crydb1")
                .setDataField("上次Diode Line更換日期")
                .setAutoTips(false)
                .setLeft("17em")
                .setTop("31.733333333333334em")
                .setWidth("23.266666666666666em")
                .setTabindex(40)
                .setLabelSize("12em")
                .setLabelCaption("上次Diode Line更換日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2751")
                .setDataBinder("crydb1")
                .setDataField("上次維修有無更換Diode Lin")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("16.666666666666668em")
                .setTop("33.53333333333333em")
                .setWidth("24.133333333333333em")
                .setHeight("1.7523809523809524em")
                .setTabindex(41)
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
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("11.333333333333334em")
                .setTop("16.666666666666668em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setLeft("17.466666666666665em")
                .setTop("18.933333333333334em")
                .setCaption("Rough Valve 上座旋緊 / 鎖緊 確認")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label24")
                .setAutoTips(false)
                .setLeft("16.666666666666668em")
                .setTop("26em")
                .setCaption("更換Purge Valve O-ring Coil軸心鎖緊")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label25")
                .setAutoTips(false)
                .setLeft("4.666666666666667em")
                .setTop("40.8em")
                .setCaption("Pump清洗(非原廠貼紙清除)")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label26")
                .setAutoTips(false)
                .setLeft("27.133333333333333em")
                .setTop("40.666666666666664em")
                .setCaption("送洗")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label27")
                .setLeft("0.6666666666666666em")
                .setTop("42.666666666666664em")
                .setCaption("Pump配件掛牌(P/N：、S/N：)入烤箱")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label71")
                .setLeft("31.8em")
                .setTop("1em")
                .setCaption("K")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label72")
                .setLeft("31.8em")
                .setTop("2.933333333333333em")
                .setCaption("K")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label73")
                .setLeft("19.6em")
                .setTop("8.333333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label74")
                .setLeft("19.6em")
                .setTop("10.866666666666667em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label75")
                .setLeft("32.13333333333333em")
                .setTop("8.333333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label76")
                .setLeft("32.2em")
                .setTop("10.933333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label77")
                .setLeft("19.466666666666665em")
                .setTop("16.933333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label78")
                .setLeft("19.533333333333335em")
                .setTop("21.066666666666666em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label79")
                .setLeft("19.533333333333335em")
                .setTop("23.733333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label185")
                .setLeft("34em")
                .setTop("14.4em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput479")
                .setName("Diode 1st")
                .setDataBinder("crydb1")
                .setDataField("A1#1")
                .setAutoTips(false)
                .setLeft("2.6666666666666665em")
                .setTop("0.6666666666666666em")
                .setWidth("13.466666666666667em")
                .setTabindex(56)
                .setLabelSize("8em")
                .setLabelCaption("1.  Diode 1<sup>st</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput480")
                .setName("Diode 1st#1")
                .setDataBinder("crydb1")
                .setDataField("A1#2")
                .setAutoTips(false)
                .setLeft("16em")
                .setTop("0.6666666666666666em")
                .setWidth("8.133333333333333em")
                .setTabindex(57)
                .setLabelSize("2em")
                .setLabelCaption("/V")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput481")
                .setName("Diode 1st#2")
                .setDataBinder("crydb1")
                .setDataField("A1#3")
                .setAutoTips(false)
                .setLeft("24em")
                .setTop("0.6666666666666666em")
                .setWidth("7.466666666666667em")
                .setTabindex(58)
                .setLabelSize("3em")
                .setLabelCaption("室溫")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox4")
                .setDataBinder("crydb1")
                .setDataField("A1#4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.666666666666664em")
                .setTop("0.4em")
                .setHeight("2.4em")
                .setTabindex(59)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setLabelVAlign("bottom")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput482")
                .setName("Diode 2nd")
                .setDataBinder("crydb1")
                .setDataField("A1#5")
                .setAutoTips(false)
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
                .setWidth("13.333333333333334em")
                .setTabindex(60)
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput483")
                .setName("Diode 2nd#1")
                .setDataBinder("crydb1")
                .setDataField("A1#6")
                .setAutoTips(false)
                .setLeft("16em")
                .setTop("2.6666666666666665em")
                .setWidth("8em")
                .setTabindex(61)
                .setLabelSize("2em")
                .setLabelCaption("/V")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput484")
                .setName("Diode 2nd#2")
                .setDataBinder("crydb1")
                .setDataField("A1#7")
                .setAutoTips(false)
                .setLeft("24em")
                .setTop("2.6666666666666665em")
                .setWidth("7.333333333333333em")
                .setTabindex(62)
                .setLabelSize("3em")
                .setLabelCaption("室溫")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox5")
                .setDataBinder("crydb1")
                .setDataField("A1#8")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.666666666666664em")
                .setTop("2.2666666666666666em")
                .setHeight("2.4em")
                .setTabindex(63)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input506")
                .setName("Heater & Cylinder S/N")
                .setDataBinder("crydb1")
                .setDataField("A2")
                .setAutoTips(false)
                .setLeft("-1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("20.666666666666668em")
                .setTabindex(64)
                .setLabelSize("12em")
                .setLabelCaption("Heater & Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput485")
                .setName("Heater 1st")
                .setDataBinder("crydb1")
                .setDataField("A3#1")
                .setAutoTips(false)
                .setLeft("2.742857142857143em")
                .setTop("8em")
                .setWidth("16.6em")
                .setTabindex(65)
                .setLabelSize("8em")
                .setLabelCaption("Heater 1<sup>st</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput486")
                .setName("Heater 2nd")
                .setDataBinder("crydb1")
                .setDataField("A3#2")
                .setAutoTips(false)
                .setLeft("20em")
                .setTop("8.066666666666666em")
                .setWidth("12em")
                .setTabindex(66)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox8")
                .setDataBinder("crydb1")
                .setDataField("A3#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.666666666666664em")
                .setTop("7.8em")
                .setHeight("2.4em")
                .setTabindex(67)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput487")
                .setName("Heater交叉")
                .setDataBinder("crydb1")
                .setDataField("A3#4")
                .setAutoTips(false)
                .setLeft("2.6666666666666665em")
                .setTop("10.666666666666666em")
                .setWidth("16.666666666666668em")
                .setTabindex(68)
                .setLabelSize("8em")
                .setLabelCaption("交叉")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput488")
                .setName("Heater接地")
                .setDataBinder("crydb1")
                .setDataField("A3#5")
                .setAutoTips(false)
                .setLeft("20.133333333333333em")
                .setTop("10.666666666666666em")
                .setWidth("11.866666666666667em")
                .setTabindex(69)
                .setLabelSize("3em")
                .setLabelCaption("接地")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox9")
                .setDataBinder("crydb1")
                .setDataField("A3#6")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.666666666666664em")
                .setTop("10.266666666666667em")
                .setHeight("2.4em")
                .setTabindex(70)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput489")
                .setName("Motor#1")
                .setDataBinder("crydb1")
                .setDataField("A4#1")
                .setAutoTips(false)
                .setLeft("2.742857142857143em")
                .setTop("14em")
                .setWidth("11.933333333333334em")
                .setTabindex(71)
                .setLabelSize("8em")
                .setLabelCaption("Motor#1")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput490")
                .setName("Motor#2")
                .setDataBinder("crydb1")
                .setDataField("A4#2")
                .setAutoTips(false)
                .setLeft("14.666666666666666em")
                .setTop("14em")
                .setWidth("5.5em")
                .setTabindex(72)
                .setLabelSize("1.5em")
                .setLabelCaption("Ω/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput491")
                .setName("Motor#3")
                .setDataBinder("crydb1")
                .setDataField("A4#3")
                .setAutoTips(false)
                .setLeft("20em")
                .setTop("14em")
                .setWidth("5.5em")
                .setTabindex(73)
                .setLabelSize("1.5em")
                .setLabelCaption("Ω/ ")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput492")
                .setName("Motor#4")
                .setDataBinder("crydb1")
                .setDataField("A4#4")
                .setAutoTips(false)
                .setLeft("26em")
                .setTop("14em")
                .setWidth("7.333333333333333em")
                .setTabindex(74)
                .setLabelSize("2em")
                .setLabelCaption("Ω⏚")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox14")
                .setDataBinder("crydb1")
                .setDataField("A4#5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("34.666666666666664em")
                .setTop("13.6em")
                .setHeight("2.4em")
                .setTabindex(75)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input510")
                .setName("Rough Valve")
                .setDataBinder("crydb1")
                .setDataField("A5#1")
                .setLeft("2.6666666666666665em")
                .setTop("16.666666666666668em")
                .setWidth("16.666666666666668em")
                .setTabindex(76)
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox20")
                .setDataBinder("crydb1")
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
                .setLeft("20.666666666666668em")
                .setTop("16.466666666666665em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(77)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox21")
                .setDataBinder("crydb1")
                .setDataField("A5#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.53333333333333em")
                .setTop("16.266666666666666em")
                .setHeight("2.4em")
                .setTabindex(78)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox29")
                .setDataBinder("crydb1")
                .setDataField("A5#4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.53333333333333em")
                .setTop("18.266666666666666em")
                .setWidth("8.2em")
                .setHeight("2.6666666666666665em")
                .setTabindex(79)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input513")
                .setName("Purge Valve")
                .setDataBinder("crydb1")
                .setDataField("A6#1")
                .setAutoTips(false)
                .setLeft("2.6666666666666665em")
                .setTop("20.733333333333334em")
                .setWidth("16.666666666666668em")
                .setTabindex(80)
                .setLabelSize("8em")
                .setLabelCaption("Purge Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox30")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setLeft("20.666666666666668em")
                .setTop("20.466666666666665em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(81)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox31")
                .setDataBinder("crydb1")
                .setDataField("A6#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.53333333333333em")
                .setTop("20.666666666666668em")
                .setHeight("2.4em")
                .setTabindex(82)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input515")
                .setName("Exhaust Valve")
                .setDataBinder("crydb1")
                .setDataField("A7#1")
                .setAutoTips(false)
                .setLeft("2.742857142857143em")
                .setTop("23.4em")
                .setWidth("16.6em")
                .setTabindex(83)
                .setLabelSize("8em")
                .setLabelCaption("Exhaust Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox32")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setLeft("20.666666666666668em")
                .setTop("23.066666666666666em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(84)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox33")
                .setDataBinder("crydb1")
                .setDataField("A7#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.53333333333333em")
                .setTop("22.866666666666667em")
                .setHeight("2.4em")
                .setTabindex(85)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox34")
                .setDataBinder("crydb1")
                .setDataField("A8")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("32.53333333333333em")
                .setTop("25.4em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(86)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input518")
                .setName("Xhead原S/N")
                .setDataBinder("crydb1")
                .setDataField("A9#1")
                .setAutoTips(false)
                .setLeft("2.742857142857143em")
                .setTop("28.733333333333334em")
                .setWidth("16.6em")
                .setTabindex(87)
                .setLabelSize("8em")
                .setLabelCaption("Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox35")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setLeft("19.8em")
                .setTop("28.4em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(88)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input519")
                .setName("1st Displacer原S/N")
                .setDataBinder("crydb1")
                .setDataField("A10#1")
                .setAutoTips(false)
                .setLeft("0.6666666666666666em")
                .setTop("31.4em")
                .setWidth("18.666666666666668em")
                .setTabindex(89)
                .setLabelSize("10em")
                .setLabelCaption("1<sup>st</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox36")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setLeft("19.8em")
                .setTop("31em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(90)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input520")
                .setName("2nd Displacer原S/N")
                .setDataBinder("crydb1")
                .setDataField("A11#1")
                .setAutoTips(false)
                .setLeft("0.6666666666666666em")
                .setTop("34.06666666666667em")
                .setWidth("18.666666666666668em")
                .setTabindex(91)
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox37")
                .setDataBinder("crydb1")
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
                .setAutoTips(false)
                .setLeft("19.733333333333334em")
                .setTop("33.733333333333334em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(92)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input521")
                .setName("故障原因主要")
                .setDataBinder("crydb1")
                .setDataField("A12")
                .setAutoTips(false)
                .setLeft("2.742857142857143em")
                .setTop("36.733333333333334em")
                .setWidth("38.6em")
                .setTabindex(93)
                .setLabelSize("8em")
                .setLabelCaption("故障原因主要")
                .setMaxlength("200")
                .setItems([
                    {
                        "id" : "He Side粉塵汙染",
                        "caption" : "He Side粉塵汙染"
                    },
                    {
                        "id" : "He Side鉛粉汙染",
                        "caption" : "He Side鉛粉汙染"
                    },
                    {
                        "id" : "He Side輕微醛汙染",
                        "caption" : "He Side輕微醛汙染"
                    },
                    {
                        "id" : "He Side嚴重醛汙染",
                        "caption" : "He Side嚴重醛汙染"
                    },
                    {
                        "id" : "Vac製程汙染",
                        "caption" : "Vac製程汙染"
                    },
                    {
                        "id" : "He Side油汙染",
                        "caption" : "He Side油汙染"
                    },
                    {
                        "id" : "He Side鉛粒溢出",
                        "caption" : "He Side鉛粒溢出"
                    },
                    {
                        "id" : "MotoR軸心斷裂",
                        "caption" : "MotoR軸心斷裂"
                    }
                ])
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input522")
                .setName("故障原因次要")
                .setDataBinder("crydb1")
                .setDataField("A13")
                .setAutoTips(false)
                .setLeft("2.6666666666666665em")
                .setTop("38.6em")
                .setWidth("38.666666666666664em")
                .setTabindex(94)
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
                .setItems([
                    {
                        "id" : "Heater Short",
                        "caption" : "Heater Short"
                    },
                    {
                        "id" : "Displacr Pin磨損",
                        "caption" : "Displacr Pin磨損"
                    }
                ])
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox38")
                .setDataBinder("crydb1")
                .setDataField("A14#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("16.666666666666668em")
                .setTop("40.2em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(95)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox39")
                .setDataBinder("crydb1")
                .setDataField("A14#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setLeft("28.666666666666668em")
                .setTop("40.06666666666667em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(96)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox40")
                .setDataBinder("crydb1")
                .setDataField("A15")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("16.666666666666668em")
                .setTop("42.06666666666667em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(97)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2231")
                .setDataBinder("crydb1")
                .setDataField("備註A")
                .setAutoTips(false)
                .setLeft("42em")
                .setTop("32.13333333333333em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(98)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3970")
                .setName("A組裝簽名")
                .setDataBinder("crydb1")
                .setDataField("A組裝簽名")
                .setReadonly(true)
                .setLeft("21.333333333333332em")
                .setTop("45.13333333333333em")
                .setWidth("18em")
                .setTabindex(99)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namea_onclick")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateA")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("A組裝日期")
                .setReadonly(true)
                .setLeft("40em")
                .setTop("45.06666666666667em")
                .setWidth("15em")
                .setTabindex(100)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderA")
                .setName("A組長覆核")
                .setDataBinder("crydb1")
                .setDataField("A組長覆核")
                .setReadonly(true)
                .setLeft("21.333333333333332em")
                .setTop("47.93333333333333em")
                .setWidth("18em")
                .setTabindex(147)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leadera_onclick")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderA")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("A覆核日期")
                .setReadonly(true)
                .setLeft("40em")
                .setTop("47.93333333333333em")
                .setWidth("15em")
                .setTabindex(148)
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label93")
                .setLeft("17.2em")
                .setTop("22.095238095238095em")
                .setWidth("21.933333333333334em")
                .setHeight("0em")
                .setCaption("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k)")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label501")
                .setLeft("30.266666666666666em")
                .setTop("24.076190476190476em")
                .setCaption("K")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput10350")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb1")
                .setDataField("B0#1")
                .setLeft("2.2857142857142856em")
                .setTop("0.7619047619047619em")
                .setWidth("38.095238095238095em")
                .setTabindex(151)
                .setLabelSize("12em")
                .setLabelCaption("Pump清洗回廠狀況")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox182")
                .setDataBinder("crydb1")
                .setDataField("B1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.3333333333333335em")
                .setTop("2.1333333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setTabindex(152)
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
                .setDataBinder("crydb1")
                .setDataField("B2#1")
                .setLeft("2.6666666666666665em")
                .setTop("4.495238095238095em")
                .setWidth("19.885714285714286em")
                .setTabindex(153)
                .setLabelSize("12em")
                .setLabelCaption("Heater & Cylinder S/N")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox204")
                .setDataBinder("crydb1")
                .setDataField("B2#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("28.733333333333334em")
                .setTop("4.190476190476191em")
                .setWidth("11.866666666666667em")
                .setHeight("1.7523809523809524em")
                .setTabindex(154)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput939")
                .setName("HeaterB 1st")
                .setDataBinder("crydb1")
                .setDataField("B3#1")
                .setLeft("6.666666666666667em")
                .setTop("6.476190476190476em")
                .setWidth("16em")
                .setTabindex(155)
                .setLabelSize("8em")
                .setLabelCaption("Heater 1<sup>st</sup>")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput940")
                .setName("HeaterB 2nd")
                .setDataBinder("crydb1")
                .setDataField("B3#2")
                .setLeft("23.333333333333332em")
                .setTop("6.476190476190476em")
                .setWidth("7.333333333333333em")
                .setTabindex(156)
                .setLabelSize("3em")
                .setLabelCaption("Ω  2<sup>nd</sup>")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox249")
                .setDataBinder("crydb1")
                .setDataField("B3#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.666666666666668em")
                .setTop("6.247619047619048em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(157)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input940")
                .setName("交叉B")
                .setDataBinder("crydb1")
                .setDataField("B3#4")
                .setLeft("6.666666666666667em")
                .setTop("9.142857142857142em")
                .setWidth("14.666666666666666em")
                .setTabindex(158)
                .setLabelSize("8em")
                .setLabelCaption("交叉")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input941")
                .setName("接地B")
                .setDataBinder("crydb1")
                .setDataField("B3#5")
                .setLeft("22em")
                .setTop("9.142857142857142em")
                .setWidth("9.333333333333334em")
                .setTabindex(159)
                .setLabelSize("3em")
                .setLabelCaption("接地")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox319")
                .setDataBinder("crydb1")
                .setDataField("B3#6")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.666666666666668em")
                .setTop("8.761904761904763em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(160)
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
                .setHost(host,"xui_ui_comboinput11100")
                .setName("HeaterB 1st")
                .setDataBinder("crydb1")
                .setDataField("B0#2")
                .setLeft("6.704761904761905em")
                .setTop("11.428571428571429em")
                .setWidth("16em")
                .setTabindex(161)
                .setLabelSize("8em")
                .setLabelCaption("1st內徑")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11101")
                .setName("HeaterB 2nd")
                .setDataBinder("crydb1")
                .setDataField("B0#3")
                .setLeft("23.314285714285713em")
                .setTop("11.428571428571429em")
                .setWidth("14.4em")
                .setTabindex(162)
                .setLabelSize("5em")
                .setLabelCaption("2nd內徑")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox320")
                .setDataBinder("crydb1")
                .setDataField("B4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("11.657142857142857em")
                .setTop("13.333333333333334em")
                .setWidth("28.952380952380953em")
                .setHeight("1.8285714285714285em")
                .setTabindex(163)
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
                .setDataBinder("crydb1")
                .setDataField("B5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.733333333333333em")
                .setTop("15.39047619047619em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setTabindex(164)
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
                .setDataBinder("crydb1")
                .setDataField("B6")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.8em")
                .setTop("17.295238095238094em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setTabindex(165)
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1112")
                .setDataBinder("crydb1")
                .setDataField("B6#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.8em")
                .setTop("19.35238095238095em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setTabindex(166)
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("更換Diode Line線")
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
                .setHost(host,"xui_ui_comboinput941")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb1")
                .setDataField("B7#1")
                .setLeft("12.666666666666666em")
                .setTop("23.847619047619048em")
                .setWidth("8.666666666666666em")
                .setTabindex(167)
                .setLabelSize("2em")
                .setLabelCaption("1<sup>st</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput942")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setDataBinder("crydb1")
                .setDataField("B7#2")
                .setLeft("21.333333333333332em")
                .setTop("23.847619047619048em")
                .setWidth("8.666666666666666em")
                .setTabindex(168)
                .setLabelSize("3em")
                .setLabelCaption("K 2<sup>nd</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox323")
                .setDataBinder("crydb1")
                .setDataField("B7#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.733333333333334em")
                .setTop("23.466666666666665em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(169)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input947")
                .setName("New Diode 1st S/N")
                .setDataBinder("crydb1")
                .setDataField("B8#1")
                .setLeft("4.666666666666667em")
                .setTop("26.514285714285716em")
                .setWidth("18em")
                .setTabindex(170)
                .setLabelSize("10em")
                .setLabelCaption("New Diode 1<sup>st</sup>  S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input948")
                .setName("New Diode 1st V")
                .setDataBinder("crydb1")
                .setDataField("B8#2")
                .setLeft("23.533333333333335em")
                .setTop("26.514285714285716em")
                .setWidth("9.133333333333333em")
                .setTabindex(171)
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input949")
                .setName("New Diode 2nd S/N")
                .setDataBinder("crydb1")
                .setDataField("B9#1")
                .setLeft("4.666666666666667em")
                .setTop("28.495238095238093em")
                .setWidth("18em")
                .setTabindex(172)
                .setLabelSize("10em")
                .setLabelCaption("New Diode 2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input950")
                .setName("New Diode 2nd V")
                .setDataBinder("crydb1")
                .setDataField("B9#2")
                .setLeft("23.466666666666665em")
                .setTop("28.495238095238093em")
                .setWidth("9.2em")
                .setTabindex(173)
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox380")
                .setDataBinder("crydb1")
                .setDataField("B10")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.6em")
                .setTop("30.476190476190474em")
                .setWidth("26.666666666666668em")
                .setHeight("1.9047619047619047em")
                .setTabindex(174)
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
                .setDataBinder("crydb1")
                .setDataField("B11")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.666666666666666em")
                .setTop("32.53333333333333em")
                .setWidth("26.666666666666668em")
                .setHeight("1.7523809523809524em")
                .setTabindex(175)
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
                .setDataBinder("crydb1")
                .setDataField("B12")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.733333333333333em")
                .setTop("34.43809523809524em")
                .setWidth("26.666666666666668em")
                .setHeight("1.7523809523809524em")
                .setTabindex(176)
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
                .setHost(host,"xui_ui_radiobox1113")
                .setDataBinder("crydb1")
                .setDataField("B12#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.733333333333333em")
                .setTop("36.114285714285714em")
                .setWidth("26.666666666666668em")
                .setHeight("1.7523809523809524em")
                .setTabindex(177)
                .setLabelSize("18em")
                .setLabelGap("0em")
                .setLabelCaption("更換Purge Valva塞心")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1973")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("crydb1")
                .setDataField("B12#3")
                .setLeft("7.466666666666667em")
                .setTop("38.17142857142857em")
                .setWidth("20em")
                .setTabindex(178)
                .setLabelSize("16em")
                .setLabelCaption("Purge Valve漏率")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1675")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb1")
                .setDataField("B12#4")
                .setLeft("26.8em")
                .setTop("38.17142857142857em")
                .setWidth("5.6em")
                .setTabindex(179)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1974")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("crydb1")
                .setDataField("B12#5")
                .setLeft("7.466666666666667em")
                .setTop("40.304761904761904em")
                .setWidth("20em")
                .setTabindex(180)
                .setLabelSize("16em")
                .setLabelCaption("Relief Valve漏率")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1676")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb1")
                .setDataField("B12#6")
                .setLeft("26.866666666666667em")
                .setTop("40.304761904761904em")
                .setWidth("5.6em")
                .setTabindex(181)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput943")
                .setName("TC Gauge")
                .setDataBinder("crydb1")
                .setDataField("B13#1")
                .setLeft("6.171428571428572em")
                .setTop("42.43809523809524em")
                .setWidth("15.066666666666666em")
                .setTabindex(182)
                .setLabelSize("8em")
                .setLabelCaption("TC Gauge")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(0)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox383")
                .setDataBinder("crydb1")
                .setDataField("B13#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("21.561904761904763em")
                .setTop("42.20952380952381em")
                .setWidth("18.666666666666668em")
                .setHeight("1.8em")
                .setTabindex(183)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input955")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("crydb1")
                .setDataField("B14#1")
                .setLeft("7.333333333333333em")
                .setTop("44.95238095238095em")
                .setWidth("20em")
                .setTabindex(184)
                .setLabelSize("16em")
                .setLabelCaption("Vacuum Side Leak Test：(5x10<Sup>-9</sup>)")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1674")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb1")
                .setDataField("B14#3")
                .setLeft("26.666666666666668em")
                .setTop("44.95238095238095em")
                .setWidth("5.6em")
                .setTabindex(185)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox384")
                .setDataBinder("crydb1")
                .setDataField("B14#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.666666666666668em")
                .setTop("44.49523809523809em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(186)
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
                .setHost(host,"installB")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("crydb1")
                .setDataField("B15")
                .setLeft("5.333333333333333em")
                .setTop("47.61904761904762em")
                .setWidth("26.666666666666668em")
                .setTabindex(187)
                .setLabelSize("18em")
                .setLabelCaption("80k Radiation Shield 安裝")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_installb_onclick")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2234")
                .setDataBinder("crydb1")
                .setDataField("備註B")
                .setAutoTips(false)
                .setLeft("42.74285714285714em")
                .setTop("38.55238095238095em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(188)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameB")
                .setName("B組裝簽名")
                .setDataBinder("crydb1")
                .setDataField("B組裝簽名")
                .setReadonly(true)
                .setLeft("13.333333333333334em")
                .setTop("52.266666666666666em")
                .setWidth("18em")
                .setTabindex(189)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_nameb_onclick")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateB")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("B組裝日期")
                .setReadonly(true)
                .setLeft("32.666666666666664em")
                .setTop("52.266666666666666em")
                .setWidth("15em")
                .setTabindex(190)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderB")
                .setName("B組長覆核")
                .setDataBinder("crydb1")
                .setDataField("B組長覆核")
                .setReadonly(true)
                .setLeft("13.333333333333334em")
                .setTop("54.93333333333333em")
                .setWidth("18em")
                .setTabindex(191)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderb_onclick")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderB")
                .setName("日期")
                .setDataBinder("crydb1")
                .setDataField("B覆核日期")
                .setReadonly(true)
                .setLeft("32.666666666666664em")
                .setTop("54.93333333333333em")
                .setWidth("15em")
                .setTabindex(192)
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label216")
                .setLeft("19.2em")
                .setTop("6.2em")
                .setHeight("1.3333333333333333em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label217")
                .setLeft("19.2em")
                .setTop("8.2em")
                .setCaption("psi")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label463")
                .setLeft("1.3333333333333333em")
                .setTop("2.6666666666666665em")
                .setCaption("2.管線配接符合Pump要求  ")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label464")
                .setLeft("1.3333333333333333em")
                .setTop("4.333333333333333em")
                .setCaption("3.依Test標準參數設定")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label465")
                .setLeft("1.3333333333333333em")
                .setTop("20.466666666666665em")
                .setCaption("7.Test完成後,Helium Side Purge")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label466")
                .setLeft("1.1333333333333333em")
                .setTop("24.266666666666666em")
                .setCaption("9.15k Array間距調整檢查(不可接觸)")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label467")
                .setLeft("0.5333333333333333em")
                .setTop("28em")
                .setCaption("11.Pump入庫前外觀檢查")
            );
            
            host.block5.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label672")
                .setLeft("20.133333333333333em")
                .setTop("26.266666666666666em")
                .setCaption("Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2093")
                .setName("Ch")
                .setDataBinder("crydb1")
                .setDataField("D2#3")
                .setLeft("0.6666666666666666em")
                .setTop("0.6666666666666666em")
                .setWidth("8.666666666666666em")
                .setTabindex(303)
                .setLabelSize("5em")
                .setLabelCaption("1.測試Ch")
                .setMaxlength("32")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox333")
                .setDataBinder("crydb1")
                .setDataField("D1#1")
                .setLeft("12.533333333333333em")
                .setTop("2.6em")
                .setWidth("4.866666666666666em")
                .setHeight("1.2em")
                .setTabindex(304)
                .setHAlign("right")
                .setCaption("Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox334")
                .setDataBinder("crydb1")
                .setDataField("D1#2")
                .setLeft("11.066666666666666em")
                .setTop("4.066666666666666em")
                .setWidth("4.6em")
                .setTabindex(305)
                .setHAlign("right")
                .setCaption("Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2015")
                .setName("Supply Pressure")
                .setDataBinder("crydb1")
                .setDataField("D2#1")
                .setLeft("0.5333333333333333em")
                .setTop("6em")
                .setWidth("18em")
                .setTabindex(306)
                .setLabelSize("9em")
                .setLabelCaption("4.Supply Pressure")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(0)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2016")
                .setName("Return Pressure")
                .setDataBinder("crydb1")
                .setDataField("D2#2")
                .setLeft("1.2666666666666666em")
                .setTop("8em")
                .setWidth("17.333333333333332em")
                .setTabindex(307)
                .setLabelSize("8em")
                .setLabelCaption("Return Pressure")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(0)
                .setIncrement(1)
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2094")
                .setDataBinder("crydb1")
                .setDataField("D3#1")
                .setLeft("0.6666666666666666em")
                .setTop("10.2em")
                .setWidth("18em")
                .setTabindex(308)
                .setLabelSize("10em")
                .setLabelCaption("5.Compressor Model")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "9600",
                        "caption" : "9600"
                    },
                    {
                        "id" : "9600S",
                        "caption" : "9600S"
                    },
                    {
                        "id" : "HC-70",
                        "caption" : "HC-70"
                    },
                    {
                        "id" : "8500",
                        "caption" : "8500"
                    }
                ])
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2095")
                .setDataBinder("crydb1")
                .setDataField("D3#2")
                .setLeft("2.6666666666666665em")
                .setTop("12.2em")
                .setWidth("12.8em")
                .setTabindex(309)
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2096")
                .setDataBinder("crydb1")
                .setDataField("D3#3")
                .setLeft("15.333333333333334em")
                .setTop("12.2em")
                .setWidth("5.4em")
                .setTabindex(310)
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2097")
                .setName("Start Cooldown#3")
                .setDataBinder("crydb1")
                .setDataField("D3#4")
                .setLeft("21.333333333333332em")
                .setTop("12.2em")
                .setWidth("10.666666666666666em")
                .setTabindex(311)
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "NA",
                        "caption" : "NA"
                    },
                    {
                        "id" : "OB-8系列",
                        "caption" : "OB-8系列"
                    },
                    {
                        "id" : "OB-250F系列",
                        "caption" : "OB-250F系列"
                    },
                    {
                        "id" : "OB-10系列",
                        "caption" : "OB-10系列"
                    },
                    {
                        "id" : "IS-8系列",
                        "caption" : "IS-8系列"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2098")
                .setName("底溫#1")
                .setDataBinder("crydb1")
                .setDataField("D4#1")
                .setLeft("6.666666666666667em")
                .setTop("14.2em")
                .setWidth("8.666666666666666em")
                .setTabindex(312)
                .setLabelSize("4em")
                .setLabelCaption("底溫")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2099")
                .setName("底溫#2")
                .setDataBinder("crydb1")
                .setDataField("D4#2")
                .setLeft("15.333333333333334em")
                .setTop("14.2em")
                .setWidth("5.333333333333333em")
                .setTabindex(313)
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2100")
                .setName("底溫#3")
                .setDataBinder("crydb1")
                .setDataField("D4#3")
                .setLeft("21.333333333333332em")
                .setTop("14.2em")
                .setWidth("10.533333333333333em")
                .setTabindex(314)
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "NA",
                        "caption" : "NA"
                    },
                    {
                        "id" : "OB-8系列",
                        "caption" : "OB-8系列"
                    },
                    {
                        "id" : "OB-250F系列",
                        "caption" : "OB-250F系列"
                    },
                    {
                        "id" : "OB-10系列",
                        "caption" : "OB-10系列"
                    },
                    {
                        "id" : "IS-8系列",
                        "caption" : "IS-8系列"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2101")
                .setName("1st 設溫#1")
                .setDataBinder("crydb1")
                .setDataField("D4#4")
                .setLeft("6.666666666666667em")
                .setTop("16.2em")
                .setWidth("8.666666666666666em")
                .setTabindex(315)
                .setLabelSize("4em")
                .setLabelCaption("1<sup>st </sup>設溫")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2102")
                .setName("1st 設溫#2")
                .setDataBinder("crydb1")
                .setDataField("D4#5")
                .setLeft("15.333333333333334em")
                .setTop("16.2em")
                .setWidth("5.333333333333333em")
                .setTabindex(316)
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input2103")
                .setName("1st 設溫#3")
                .setDataBinder("crydb1")
                .setDataField("D4#6")
                .setLeft("21.333333333333332em")
                .setTop("16.2em")
                .setWidth("10.666666666666666em")
                .setTabindex(317)
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "NA",
                        "caption" : "NA"
                    },
                    {
                        "id" : "OB-8系列",
                        "caption" : "OB-8系列"
                    },
                    {
                        "id" : "OB-250F系列",
                        "caption" : "OB-250F系列"
                    },
                    {
                        "id" : "OB-10系列",
                        "caption" : "OB-10系列"
                    },
                    {
                        "id" : "IS-8系列",
                        "caption" : "IS-8系列"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox952")
                .setDataBinder("crydb1")
                .setDataField("D5#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    },
                    {
                        "id" : "12hrs",
                        "caption" : "12hrs"
                    },
                    {
                        "id" : " ",
                        "caption" : " "
                    }
                ])
                .setLeft("0em")
                .setTop("18.2em")
                .setWidth("30.666666666666668em")
                .setHeight("1.8em")
                .setTabindex(318)
                .setLabelSize("13em")
                .setLabelGap("0em")
                .setLabelCaption("6.Test完成後Runtime 歸零")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1805")
                .setDataBinder("crydb1")
                .setDataField("D5#3")
                .setLeft("30.333333333333332em")
                .setTop("18.666666666666668em")
                .setWidth("10.533333333333333em")
                .setTabindex(319)
                .setHAlign("left")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox348")
                .setDataBinder("crydb1")
                .setDataField("D5#2")
                .setLeft("14.8em")
                .setTop("20.2em")
                .setWidth("4.866666666666666em")
                .setHeight("1.1333333333333333em")
                .setTabindex(320)
                .setHAlign("right")
                .setCaption("Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1003")
                .setDataBinder("crydb1")
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
                .setLeft("-0.3333333333333333em")
                .setTop("21.533333333333335em")
                .setWidth("28.933333333333334em")
                .setHeight("2.066666666666667em")
                .setTabindex(321)
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("8.1<sup>st</sup> Temp設溫")
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
                .setHost(host,"xui_ui_checkbox349")
                .setDataBinder("crydb1")
                .setDataField("D6#2")
                .setLeft("16.866666666666667em")
                .setTop("24.133333333333333em")
                .setWidth("4.733333333333333em")
                .setHeight("1.2em")
                .setTabindex(322)
                .setHAlign("right")
                .setCaption("Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox364")
                .setDataBinder("crydb1")
                .setDataField("D7#1")
                .setLeft("-0.13333333333333333em")
                .setTop("25.933333333333334em")
                .setWidth("20.2em")
                .setHeight("1.1333333333333333em")
                .setTabindex(323)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("10.Test完成後，Vacuum Side Leak Test ")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4182")
                .setName("底溫#1")
                .setDataBinder("crydb1")
                .setDataField("D7#3")
                .setLeft("22.666666666666668em")
                .setTop("25.866666666666667em")
                .setWidth("5.466666666666667em")
                .setTabindex(324)
                .setHAlign("right")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4183")
                .setName("底溫#2")
                .setDataBinder("crydb1")
                .setDataField("D7#4")
                .setLeft("27.6em")
                .setTop("25.933333333333334em")
                .setWidth("5.333333333333333em")
                .setTabindex(325)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setMaxlength("10")
            );
            
            host.block5.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox365")
                .setDataBinder("crydb1")
                .setDataField("D7#2")
                .setLeft("12em")
                .setTop("27.733333333333334em")
                .setWidth("4.666666666666667em")
                .setHeight("2em")
                .setTabindex(326)
                .setHAlign("right")
                .setCaption(" Pass")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameD")
                .setName("測試人員簽名")
                .setDataBinder("crydb1")
                .setDataField("D測試人員簽名")
                .setReadonly(true)
                .setLeft("-1.3333333333333333em")
                .setTop("31.266666666666666em")
                .setWidth("18em")
                .setTabindex(327)
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_named_onclick")
            );
            
            host.block5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderD")
                .setName("測試組長覆核")
                .setDataBinder("crydb1")
                .setDataField("D測試組長覆核")
                .setReadonly(true)
                .setLeft("-1.3333333333333333em")
                .setTop("33.266666666666666em")
                .setWidth("18em")
                .setTabindex(328)
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderd_onclick")
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
                .setWidth("66.51428571428572em")
                .setHeight("16.304761904761904em")
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
                        "B21" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C21" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D21" : {
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
                .setWidth("65.06666666666666em")
                .setHeight("2.2095238095238097em"),
                "A1"
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testName")
                .setDataBinder("crydb1")
                .setDataField("Test")
                .setLeft("1em")
                .setTop("0.13333333333333333em")
                .setWidth("11em")
                .setTabindex(345)
                .setLabelSize("3em")
                .setLabelCaption("Test")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_testname_onclick")
            );
            
            host.xui_ui_div747.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"assyOkName")
                .setDataBinder("crydb1")
                .setDataField("Assy OK")
                .setLeft("43.42857142857143em")
                .setTop("0.13333333333333333em")
                .setWidth("13.133333333333333em")
                .setTabindex(347)
                .setLabelSize("5em")
                .setLabelCaption("Assy OK")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_assyokname_onclick")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div748")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("65.06666666666666em")
                .setHeight("2.2095238095238097em"),
                "A2"
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testDate")
                .setDataBinder("crydb1")
                .setDataField("TestDate")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("12em")
                .setTabindex(346)
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"assyOkDate")
                .setDataBinder("crydb1")
                .setDataField("Assy OK Date")
                .setLeft("44.4em")
                .setTop("0em")
                .setWidth("12em")
                .setTabindex(348)
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div748.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1515")
                .setDataBinder("crydb1")
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
                        "id" : "d",
                        "caption" : "Other",
                        "imageClass" : ""
                    }
                ])
                .setLeft("12em")
                .setTop("-0.26666666666666666em")
                .setWidth("29.733333333333334em")
                .setHeight("1.9333333333333333em")
                .setTabindex(349)
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
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div749")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D4"
            );
            
            host.xui_ui_div749.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1516")
                .setDataBinder("crydb1")
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
                .setTabindex(351)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D6"
            );
            
            host.xui_ui_div750.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1517")
                .setDataBinder("crydb1")
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
                .setTabindex(355)
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
                .setWidth("6.247619047619048em")
                .setHeight("3.7333333333333334em"),
                "D7"
            );
            
            host.xui_ui_div751.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1518")
                .setDataBinder("crydb1")
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
                .setTabindex(358)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D8"
            );
            
            host.xui_ui_div752.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1519")
                .setDataBinder("crydb1")
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
                .setTabindex(361)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D10"
            );
            
            host.xui_ui_div753.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1520")
                .setDataBinder("crydb1")
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
                .setTabindex(364)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D11"
            );
            
            host.xui_ui_div754.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1521")
                .setDataBinder("crydb1")
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
                .setTabindex(366)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D12"
            );
            
            host.xui_ui_div755.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1522")
                .setDataBinder("crydb1")
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
                .setTabindex(369)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D13"
            );
            
            host.xui_ui_div756.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1523")
                .setDataBinder("crydb1")
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
                .setTabindex(372)
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
                .setWidth("6.247619047619048em")
                .setHeight("3.7333333333333334em"),
                "D14"
            );
            
            host.xui_ui_div757.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1524")
                .setDataBinder("crydb1")
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
                .setTabindex(375)
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
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D15"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div759")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div760")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D26"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div761")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B6"
            );
            
            host.xui_ui_div761.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ed1")
                .setDataBinder("crydb1")
                .setDataField("E6")
                .setDock("fill")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setTabindex(353)
                .setLabelSize("3em")
                .setLabelCaption("mins=")
                .setExcelCellFormula("=E-D")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div763")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B8"
            );
            
            host.xui_ui_div763.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5230")
                .setDataBinder("crydb1")
                .setDataField("E12")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setTabindex(359)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div764")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B12"
            );
            
            host.xui_ui_div764.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ba1")
                .setDataBinder("crydb1")
                .setDataField("E20")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setTabindex(367)
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div765")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B13"
            );
            
            host.xui_ui_div765.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cb1")
                .setDataBinder("crydb1")
                .setDataField("E23")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setTabindex(370)
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div766")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("3.7333333333333334em"),
                "B14"
            );
            
            host.xui_ui_div766.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5233")
                .setDataBinder("crydb1")
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
                .setTabindex(373)
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div766.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5234")
                .setDataBinder("crydb1")
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
                .setTabindex(374)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div767")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B10"
            );
            
            host.xui_ui_div767.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5235")
                .setDataBinder("crydb1")
                .setDataField("E15")
                .setDock("top")
                .setDockStretch("0.5")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("5.79047619047619em")
                .setTabindex(362)
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div767.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5236")
                .setDataBinder("crydb1")
                .setDataField("E16")
                .setDock("top")
                .setDockStretch("0.5")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setTabindex(363)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div768")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B16"
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5237")
                .setDataBinder("crydb1")
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
                .setTabindex(376)
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5238")
                .setDataBinder("crydb1")
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
                .setTabindex(377)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5239")
                .setDataBinder("crydb1")
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
                .setTabindex(378)
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div768.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5240")
                .setDataBinder("crydb1")
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
                .setTabindex(379)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div769")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B18"
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5241")
                .setDataBinder("crydb1")
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
                .setTabindex(380)
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5242")
                .setDataBinder("crydb1")
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
                .setTabindex(381)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5243")
                .setDataBinder("crydb1")
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
                .setTabindex(382)
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div769.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5244")
                .setDataBinder("crydb1")
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
                .setTabindex(383)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div770")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B20"
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5245")
                .setDataBinder("crydb1")
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
                .setTabindex(385)
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5246")
                .setDataBinder("crydb1")
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
                .setTabindex(386)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5247")
                .setDataBinder("crydb1")
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
                .setTabindex(387)
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div770.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5248")
                .setDataBinder("crydb1")
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
                .setTabindex(388)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div771")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B23"
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5249")
                .setDataBinder("crydb1")
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
                .setTabindex(391)
                .setLabelSize("4em")
                .setLabelCaption("#1:")
            );
            
            host.xui_ui_div771.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4319")
                .setName("B5")
                .setDataBinder("crydb1")
                .setDataField("E43")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setTabindex(392)
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div772")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B24"
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5250")
                .setDataBinder("crydb1")
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
                .setTabindex(394)
                .setLabelSize("4em")
                .setLabelCaption("#2:")
            );
            
            host.xui_ui_div772.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4320")
                .setName("B5")
                .setDataBinder("crydb1")
                .setDataField("E45")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setTabindex(395)
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div773")
                .setDataBinder("crydb1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("58.74285714285714em")
                .setHeight("2.2095238095238097em"),
                "A26"
            );
            
            host.xui_ui_div773.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox5419")
                .setDataBinder("crydb1")
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
                .setLeft("25.6em")
                .setTop("51.04761904761905em")
                .setWidth("8.304761904761905em")
                .setHeight("2.057142857142857em")
                .setTabindex(396)
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
            
            host.xui_ui_div773.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput6446")
                .setName("B5")
                .setDataBinder("crydb1")
                .setDataField("Fail主因歸屬")
                .setDock("right")
                .setDockStretch("fixed")
                .setLeft("13.638095238095238em")
                .setTop("0em")
                .setWidth("18em")
                .setHeight("2.1333333333333333em")
                .setTabindex(397)
                .setLabelSize("7em")
                .setLabelCaption("Fail主因歸屬")
                .setItems([
                    {
                        "id" : "X-head",
                        "caption" : "X-head"
                    },
                    {
                        "id" : "1st Seal",
                        "caption" : "1st Seal"
                    },
                    {
                        "id" : "2nd Seal",
                        "caption" : "2nd Seal"
                    },
                    {
                        "id" : "1st Displacer",
                        "caption" : "1st Displacer"
                    },
                    {
                        "id" : "2nd Displacer",
                        "caption" : "2nd Displacer"
                    },
                    {
                        "id" : "Helium Clean",
                        "caption" : "Helium Clean"
                    },
                    {
                        "id" : "1st Diode",
                        "caption" : "1st Diode"
                    },
                    {
                        "id" : "2nd Diode",
                        "caption" : "2nd Diode"
                    }
                ])
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div776")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.247619047619048em")
                .setHeight("11.352380952380953em"),
                "D16"
            );
            
            host.xui_ui_div776.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1526")
                .setDataBinder("crydb1")
                .setDataField("E41#3")
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
                .setTabindex(384)
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
                .setWidth("6.247619047619048em")
                .setHeight("6.780952380952381em"),
                "D22"
            );
            
            host.xui_ui_div777.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1527")
                .setDataBinder("crydb1")
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
                .setTabindex(393)
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
                .setWidth("65.06666666666666em")
                .setHeight("18.97142857142857em"),
                "A27"
            );
            
            host.xui_ui_div817.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1237")
                .setDataBinder("crydb1")
                .setDataField("Test Data Fail原因")
                .setDock("left")
                .setDockOrder(0)
                .setDockStretch("stretch")
                .setLeft("10.666666666666666em")
                .setTop("11.428571428571429em")
                .setWidth("28.114285714285714em")
                .setHeight("10em")
                .setTabindex(398)
                .setLabelSize("6em")
                .setLabelCaption("Fail原因：")
                .setMultiLines(true)
            );
            
            host.xui_ui_div817.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1236")
                .setDataBinder("crydb1")
                .setDataField("Test Data 處理情形")
                .setDock("left")
                .setDockOrder(1)
                .setDockStretch("stretch")
                .setLeft("9.904761904761905em")
                .setTop("10.666666666666666em")
                .setWidth("30.01904761904762em")
                .setHeight("10em")
                .setTabindex(399)
                .setLabelSize("6em")
                .setLabelCaption("處理情形：")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2260")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("3.7333333333333334em"),
                "C7"
            );
            
            host.xui_ui_div2260.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"f1")
                .setName("C7")
                .setDataBinder("crydb1")
                .setDataField("E10")
                .setDock("width")
                .setLeft("0.6em")
                .setTop("0.6em")
                .setWidth("9em")
                .setHeight("2em")
                .setTabindex(357)
                .setLabelPos("none")
                .setType("time")
                .setExcelCellId("F")
                .afterUIValueSet("_f1_afteruivalueset")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2404")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "C6"
            );
            
            host.xui_ui_div2404.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"e1")
                .setName("C6")
                .setDataBinder("crydb1")
                .setDataField("E7")
                .setDock("top")
                .setLeft("-0.06666666666666667em")
                .setTop("0.6666666666666666em")
                .setWidth("8.866666666666667em")
                .setHeight("1.8666666666666667em")
                .setTabindex(354)
                .setLabelPos("none")
                .setType("time")
                .setExcelCellId("E")
                .afterUIValueSet("_e1_afteruivalueset")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2597")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "B21"
            );
            
            host.xui_ui_div2597.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput6180")
                .setDataBinder("crydb1")
                .setDataField("E41")
                .setDock("origin")
                .setLeft("12.666666666666666em")
                .setTop("0em")
                .setWidth("13.8em")
                .setHeight("2.1333333333333333em")
                .setTabindex(389)
                .setLabelSize("5em")
                .setLabelCaption("Warmup")
                .setType("time")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2649")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.247619047619048em")
                .setHeight("2.2095238095238097em"),
                "D21"
            );
            
            host.xui_ui_div2649.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox5310")
                .setDataBinder("crydb1")
                .setDataField("E41#2")
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
                .setLeft("1.3714285714285714em")
                .setTop("51.80952380952381em")
                .setWidth("5.866666666666666em")
                .setHeight("2.057142857142857em")
                .setTabindex(390)
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block543")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "B25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block544")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em"),
                "C25"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5253")
                .setName("B4")
                .setDataBinder("crydb1")
                .setDataField("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(350)
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"d1")
                .setName("B5")
                .setDataBinder("crydb1")
                .setDataField("E5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(352)
                .setLabelPos("none")
                .setType("time")
                .setExcelCellId("D")
                .afterUIValueSet("_d1_afteruivalueset"),
                "B5"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div762")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("3.7333333333333334em")
                .setTabindex(356),
                "B7"
            );
            
            host.xui_ui_div762.append(
                xui.create("xui.UI.Input")
                .setHost(host,"fe1")
                .setDataBinder("crydb1")
                .setDataField("E9")
                .setDock("width")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setTabindex(356)
                .setLabelSize("3em")
                .setLabelCaption("mins=")
                .setExcelCellFormula("=F-E")
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5256")
                .setName("C8")
                .setDataBinder("crydb1")
                .setDataField("E13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(360)
                .setLabelPos("none"),
                "C8"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"a1")
                .setName("B11")
                .setDataBinder("crydb1")
                .setDataField("E18")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(365)
                .setLabelPos("none")
                .setType("time")
                .afterUIValueSet("_a1_afteruivalueset"),
                "B11"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"b1")
                .setName("C12")
                .setDataBinder("crydb1")
                .setDataField("E21")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(368)
                .setLabelPos("none")
                .setType("time")
                .afterUIValueSet("_b1_afteruivalueset"),
                "C12"
            );
            
            host.xui_ui_formlayout39.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c1")
                .setName("C13")
                .setDataBinder("crydb1")
                .setDataField("E24")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("16.914285714285715em")
                .setHeight("2.2095238095238097em")
                .setTabindex(371)
                .setLabelPos("none")
                .setType("time")
                .afterUIValueSet("_c1_afteruivalueset"),
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
                .setValue("d")
            );
            
            host.tabs2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block216")
                .setDock("fill")
                .setLeft("22.666666666666668em")
                .setTop("19.333333333333332em")
                .setTabindex(-1),
                "d"
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
                .setHost(host,"xui_ui_radiobox742")
                .setDataBinder("crydb2")
                .setDataField("C1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("16em")
                .setTop("0.06666666666666667em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setTabindex(265)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xmodel2")
                .setDataBinder("crydb2")
                .setDataField("Crosshead Model")
                .setLeft("38em")
                .setTop("0.6666666666666666em")
                .setWidth("18.666666666666668em")
                .setTabindex(266)
                .setLabelSize("8em")
                .setLabelCaption("\"X\" head Model")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "RD203-Z",
                        "caption" : "RD203-Z"
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other"
                    }
                ])
                .onValueChange("_xh1_onvaluechange")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xheadSN2")
                .setName("”X” head S/N C")
                .setDataBinder("crydb2")
                .setDataField("C3#1")
                .setLeft("9.6em")
                .setTop("2.4380952380952383em")
                .setWidth("16.666666666666668em")
                .setTabindex(267)
                .setLabelSize("8em")
                .setLabelCaption("2.”X” head S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox743")
                .setDataBinder("crydb2")
                .setDataField("C3#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("24.99047619047619em")
                .setTop("2.2095238095238097em")
                .setWidth("13.638095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(268)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xh2")
                .setDataBinder("crydb2")
                .setDataField("Crosshead編號")
                .setLeft("38.095238095238095em")
                .setTop("2.6666666666666665em")
                .setWidth("18.6em")
                .setTabindex(269)
                .setLabelSize("8em")
                .setLabelCaption("\"X\" head編號 XH")
                .setType("popbox")
                .setMaxlength("32")
                .onValueChange("_xh2_onvaluechange")
                .beforeComboPop("_xh2_beforecombopop")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput901")
                .setName("Motor：Ω#1")
                .setDataBinder("crydb2")
                .setDataField("C4#1")
                .setLeft("3.657142857142857em")
                .setTop("4.495238095238095em")
                .setWidth("11.333333333333334em")
                .setTabindex(270)
                .setLabelSize("8em")
                .setLabelCaption("3.Motor:Ω")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput902")
                .setName("Motor：Ω#2")
                .setDataBinder("crydb2")
                .setDataField("C4#2")
                .setLeft("14.933333333333334em")
                .setTop("4.495238095238095em")
                .setWidth("4.4em")
                .setTabindex(271)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput903")
                .setName("Motor：Ω#3")
                .setDataBinder("crydb2")
                .setDataField("C4#3")
                .setLeft("19.333333333333332em")
                .setTop("4.495238095238095em")
                .setWidth("4.666666666666667em")
                .setTabindex(272)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput904")
                .setName("Motor：Ω#4")
                .setDataBinder("crydb2")
                .setDataField("C4#4")
                .setLeft("24.4em")
                .setTop("4.495238095238095em")
                .setWidth("4.866666666666666em")
                .setTabindex(273)
                .setLabelSize("1em")
                .setLabelCaption("⏚")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox744")
                .setDataBinder("crydb2")
                .setDataField("C4#5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("28.038095238095238em")
                .setTop("4.266666666666667em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(274)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1404")
                .setName("Displacer 1st S/N")
                .setDataBinder("crydb2")
                .setDataField("C6#1")
                .setLeft("3.657142857142857em")
                .setTop("8.838095238095239em")
                .setWidth("13.333333333333334em")
                .setTabindex(275)
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput905")
                .setName("Displacer 1st Flow")
                .setDataBinder("crydb2")
                .setDataField("C6#2")
                .setLeft("16.83809523809524em")
                .setTop("8.838095238095239em")
                .setWidth("8.8em")
                .setTabindex(276)
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox745")
                .setDataBinder("crydb2")
                .setDataField("C6#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("24.99047619047619em")
                .setTop("8.685714285714285em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(277)
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
                .setDataBinder("crydb2")
                .setDataField("C7#1")
                .setLeft("3.657142857142857em")
                .setTop("10.971428571428572em")
                .setWidth("13.333333333333334em")
                .setTabindex(278)
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput906")
                .setName("Displacer 1st Flow")
                .setDataBinder("crydb2")
                .setDataField("C7#2")
                .setLeft("16.83809523809524em")
                .setTop("10.971428571428572em")
                .setWidth("8.8em")
                .setTabindex(279)
                .setLabelSize("3em")
                .setLabelCaption("Flow")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox746")
                .setDataBinder("crydb2")
                .setDataField("C7#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("24.99047619047619em")
                .setTop("10.666666666666666em")
                .setWidth("13.18095238095238em")
                .setHeight("1.7333333333333334em")
                .setTabindex(280)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1405")
                .setName("Seal 1st")
                .setDataBinder("crydb2")
                .setDataField("SC5#1")
                .setLeft("3.657142857142857em")
                .setTop("13.485714285714286em")
                .setWidth("13.333333333333334em")
                .setTabindex(281)
                .setLabelSize("8em")
                .setLabelCaption("5.Seal 1st")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "ID01",
                        "caption" : "ID01"
                    }
                ])
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1407")
                .setName("Seal 推")
                .setDataBinder("crydb2")
                .setDataField("SC5#2")
                .setLeft("17.82857142857143em")
                .setTop("13.485714285714286em")
                .setWidth("7.4em")
                .setTabindex(282)
                .setLabelSize("2em")
                .setLabelCaption("/推")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1408")
                .setName("Seal 拉")
                .setDataBinder("crydb2")
                .setDataField("SC5#3")
                .setLeft("25.904761904761905em")
                .setTop("13.485714285714286em")
                .setWidth("6.666666666666667em")
                .setTabindex(283)
                .setLabelSize("2em")
                .setLabelCaption("拉")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1406")
                .setName("Seal 2nd")
                .setDataBinder("crydb2")
                .setDataField("SC5#4")
                .setLeft("8.533333333333333em")
                .setTop("16em")
                .setWidth("8.466666666666667em")
                .setTabindex(284)
                .setLabelSize("3em")
                .setLabelCaption("2nd")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "CE",
                        "caption" : "CE"
                    }
                ])
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1413")
                .setName("Seal 推")
                .setDataBinder("crydb2")
                .setDataField("SC5#5")
                .setLeft("17.82857142857143em")
                .setTop("16em")
                .setWidth("7.4em")
                .setTabindex(285)
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1414")
                .setName("Seal 拉")
                .setDataBinder("crydb2")
                .setDataField("SC5#6")
                .setLeft("25.904761904761905em")
                .setTop("16em")
                .setWidth("6.666666666666667em")
                .setTabindex(286)
                .setLabelSize("2em")
                .setLabelCaption("/")
                .setLabelHAlign("left")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox747")
                .setDataBinder("crydb2")
                .setDataField("SC6#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("8.99047619047619em")
                .setTop("18.285714285714285em")
                .setWidth("29.866666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(287)
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
                .setHost(host,"xui_ui_radiobox752")
                .setDataBinder("crydb2")
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
                .setTabindex(288)
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
                .setDataBinder("crydb2")
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
                .setTabindex(289)
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
                .setHost(host,"xui_ui_input1409")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("crydb2")
                .setDataField("C13#1")
                .setLeft("2.2857142857142856em")
                .setTop("23.771428571428572em")
                .setWidth("22.4em")
                .setTabindex(290)
                .setLabelSize("17em")
                .setLabelCaption("7.Helium Side Leak Test：(5x10<sup>-6</sup>)")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2826")
                .setName("Setting")
                .setDataBinder("crydb2")
                .setDataField("C13#3")
                .setLeft("24.066666666666666em")
                .setTop("23.733333333333334em")
                .setWidth("5.333333333333333em")
                .setTabindex(291)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox748")
                .setDataBinder("crydb2")
                .setDataField("C13#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("28.114285714285714em")
                .setTop("23.466666666666665em")
                .setWidth("9.466666666666667em")
                .setHeight("1.7333333333333334em")
                .setTabindex(292)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c142")
                .setDataBinder("crydb2")
                .setDataField("C14")
                .setLeft("14.095238095238095em")
                .setTop("25.447619047619046em")
                .setWidth("23.933333333333334em")
                .setHeight("1.7333333333333334em")
                .setTabindex(293)
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("8.Crosshead 螺絲安裝/畫線確認")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_c142_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1415")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("crydb2")
                .setDataField("SC9")
                .setLeft("2.2857142857142856em")
                .setTop("27.80952380952381em")
                .setWidth("25.066666666666666em")
                .setTabindex(294)
                .setLabelSize("17em")
                .setLabelCaption("9. I/O Module安裝")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_xui_ui_input1415_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c162")
                .setDataBinder("crydb2")
                .setDataField("C16")
                .setLeft("12.038095238095238em")
                .setTop("29.333333333333332em")
                .setWidth("26em")
                .setHeight("1.7333333333333334em")
                .setTabindex(295)
                .setLabelSize("17em")
                .setLabelGap("0em")
                .setLabelCaption("10. Pump各配件Cable確實接好固定")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_c162_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c152")
                .setDataBinder("crydb2")
                .setDataField("C15")
                .setLeft("14.095238095238095em")
                .setTop("31.61904761904762em")
                .setWidth("23.933333333333334em")
                .setHeight("1.7333333333333334em")
                .setTabindex(296)
                .setLabelSize("15em")
                .setLabelGap("0em")
                .setLabelCaption("11. 15k Array間距調整(不可接觸)")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_c152_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2823")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("crydb2")
                .setDataField("C17#1")
                .setLeft("10em")
                .setTop("33.93333333333333em")
                .setWidth("26.666666666666668em")
                .setTabindex(297)
                .setLabelSize("15em")
                .setLabelCaption("15k Array版本")
                .setMaxlength("32")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2239")
                .setDataBinder("crydb2")
                .setDataField("備註C")
                .setAutoTips(false)
                .setLeft("40em")
                .setTop("24em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(298)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameC2")
                .setName("C組裝簽名")
                .setDataBinder("crydb2")
                .setDataField("C組裝簽名")
                .setReadonly(true)
                .setLeft("6.666666666666667em")
                .setTop("38.78095238095238em")
                .setWidth("17.333333333333332em")
                .setTabindex(299)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namec2_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateC2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("C組裝日期")
                .setReadonly(true)
                .setLeft("25.333333333333332em")
                .setTop("38.78095238095238em")
                .setWidth("15em")
                .setTabindex(300)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderC2")
                .setName("C組長覆核")
                .setDataBinder("crydb2")
                .setDataField("C組長覆核")
                .setReadonly(true)
                .setLeft("6.666666666666667em")
                .setTop("40.76190476190476em")
                .setWidth("17.333333333333332em")
                .setTabindex(301)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderc2_onclick")
            );
            
            host.xui_ui_block216.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderC2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("C覆核日期")
                .setReadonly(true)
                .setLeft("25.333333333333332em")
                .setTop("40.99047619047619em")
                .setWidth("15em")
                .setTabindex(302)
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
                .onClick("_dateleaderc2_onclick")
                .setCustomStyle({
                    "KEY" : {
                    }
                })
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
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox720")
                .setDataBinder("crydb2")
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
                        "caption" : "Exchange"
                    },
                    {
                        "id" : "OT",
                        "caption" : "OT",
                        "imageClass" : ""
                    }
                ])
                .setAutoTips(false)
                .setDockStretch("fixed")
                .setLeft("2em")
                .setTop("0.6em")
                .setWidth("26.666666666666668em")
                .setHeight("2.6666666666666665em")
                .setTabindex(42)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4509")
                .setName("上次登錄編號")
                .setDataBinder("crydb2")
                .setDataField("上次維修廠商")
                .setAutoTips(false)
                .setLeft("38.666666666666664em")
                .setTop("1.3333333333333333em")
                .setWidth("19.333333333333332em")
                .setTabindex(43)
                .setLabelSize("8em")
                .setLabelCaption("上次維修廠商")
                .setMaxlength("20")
                .setItems([
                    {
                        "id" : "Challentech",
                        "caption" : "Challentech"
                    },
                    {
                        "id" : "首次維修",
                        "caption" : "首次維修"
                    },
                    {
                        "id" : "Edwards",
                        "caption" : "Edwards"
                    },
                    {
                        "id" : "超淨",
                        "caption" : "超淨"
                    },
                    {
                        "id" : "翔名",
                        "caption" : "翔名"
                    },
                    {
                        "id" : "日揚",
                        "caption" : "日揚"
                    },
                    {
                        "id" : "無從判斷廠商",
                        "caption" : "無從判斷廠商"
                    }
                ])
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1373")
                .setName("上次登錄編號")
                .setDataBinder("crydb2")
                .setDataField("上次登錄編號")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setTabindex(44)
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput882")
                .setName("上次登錄時間")
                .setDataBinder("crydb2")
                .setDataField("上次登錄時間")
                .setAutoTips(false)
                .setLeft("21.333333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setTabindex(45)
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput883")
                .setName("保固期")
                .setDataBinder("crydb2")
                .setDataField("保固期")
                .setAutoTips(false)
                .setLeft("38.666666666666664em")
                .setTop("3.3333333333333335em")
                .setWidth("19.276190476190475em")
                .setTabindex(46)
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1374")
                .setName("上次故障原因")
                .setDataBinder("crydb2")
                .setDataField("上次故障原因")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setTabindex(47)
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1375")
                .setName("進廠原因")
                .setDataBinder("crydb2")
                .setDataField("進廠原因")
                .setAutoTips(false)
                .setLeft("21.333333333333332em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setTabindex(48)
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1380")
                .setName("Module1 Name")
                .setDataBinder("crydb2")
                .setDataField("Module1 Name")
                .setAutoTips(false)
                .setLeft("1.3333333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("18em")
                .setTabindex(49)
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1378")
                .setName("Module1 P/N")
                .setDataBinder("crydb2")
                .setDataField("Module1 P/N")
                .setAutoTips(false)
                .setLeft("17.333333333333332em")
                .setTop("10.514285714285714em")
                .setWidth("22em")
                .setTabindex(50)
                .setLabelSize("12em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1379")
                .setName("Module1 S/N")
                .setDataBinder("crydb2")
                .setDataField("Module1 S/N")
                .setAutoTips(false)
                .setLeft("41.93333333333333em")
                .setTop("10.59047619047619em")
                .setWidth("16em")
                .setTabindex(51)
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.Input")
                .setHost(host,"etm2")
                .setName("Pump/Module ETM")
                .setDataBinder("crydb2")
                .setDataField("Pump/Module ETM")
                .setAutoTips(false)
                .setLeft("-2.6666666666666665em")
                .setTop("13.638095238095238em")
                .setWidth("21.714285714285715em")
                .setTabindex(52)
                .setLabelSize("12em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4506")
                .setName("特殊零件")
                .setDataBinder("crydb2")
                .setDataField("特殊零件")
                .setAutoTips(false)
                .setLeft("21.133333333333333em")
                .setTop("13.666666666666666em")
                .setWidth("18.2em")
                .setTabindex(53)
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    }
                ])
            );
            
            host.xui_ui_block213.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox719")
                .setDataBinder("crydb2")
                .setDataField("配件是否齊全")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("0.5333333333333333em")
                .setTop("16.685714285714287em")
                .setWidth("17.98095238095238em")
                .setHeight("1.7523809523809524em")
                .setTabindex(54)
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
                .setDataBinder("crydb2")
                .setDataField("配件是否齊全#2")
                .setLeft("16.914285714285715em")
                .setTop("16.99047619047619em")
                .setWidth("22.704761904761906em")
                .setTabindex(55)
                .setMaxlength("32")
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label206")
                .setLeft("4.666666666666667em")
                .setTop("31.085714285714285em")
                .setCaption("11.Pump清洗(非原廠貼紙清除)")
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label209")
                .setLeft("28.733333333333334em")
                .setTop("2.933333333333333em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label210")
                .setLeft("28.733333333333334em")
                .setTop("5.266666666666667em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label182")
                .setLeft("19.466666666666665em")
                .setTop("13em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label183")
                .setLeft("19.466666666666665em")
                .setTop("15.066666666666666em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label184")
                .setLeft("19.466666666666665em")
                .setTop("17.333333333333332em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label186")
                .setLeft("32.666666666666664em")
                .setTop("10.466666666666667em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput884")
                .setName("Diode 1st")
                .setDataBinder("crydb2")
                .setDataField("SA1#1")
                .setLeft("2.6666666666666665em")
                .setTop("0.6666666666666666em")
                .setWidth("13.466666666666667em")
                .setTabindex(101)
                .setLabelSize("8em")
                .setLabelCaption("1.RTD 1<sup>st</sup>室溫")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput885")
                .setName("Diode 1st#2")
                .setDataBinder("crydb2")
                .setDataField("SA1#2")
                .setLeft("16.761904761904763em")
                .setTop("0.6666666666666666em")
                .setWidth("11.428571428571429em")
                .setHeight("1.5238095238095237em")
                .setTabindex(102)
                .setLabelSize("5em")
                .setLabelCaption("/ 2<sup>nd</sup>室溫")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox721")
                .setDataBinder("crydb2")
                .setDataField("SA1#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("28.19047619047619em")
                .setTop("0.4em")
                .setHeight("2.4em")
                .setTabindex(103)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput886")
                .setName("Diode 2nd")
                .setDataBinder("crydb2")
                .setDataField("SA1#4")
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
                .setWidth("16em")
                .setTabindex(104)
                .setLabelSize("8em")
                .setLabelCaption("1<sup>st</sup> S/N")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput887")
                .setName("Diode 2nd#2")
                .setDataBinder("crydb2")
                .setDataField("SA1#5")
                .setLeft("19.047619047619047em")
                .setTop("2.6666666666666665em")
                .setWidth("9.142857142857142em")
                .setTabindex(105)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput894")
                .setName("Diode 2nd")
                .setDataBinder("crydb2")
                .setDataField("SA1#6")
                .setLeft("2.6666666666666665em")
                .setTop("5.0285714285714285em")
                .setWidth("16em")
                .setTabindex(106)
                .setLabelSize("8em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput895")
                .setName("Diode 2nd#2")
                .setDataBinder("crydb2")
                .setDataField("SA1#7")
                .setLeft("19.047619047619047em")
                .setTop("5.0285714285714285em")
                .setWidth("9.142857142857142em")
                .setTabindex(107)
                .setLabelSize("1em")
                .setLabelCaption("/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1384")
                .setName("Heater & Cylinder S/N")
                .setDataBinder("crydb2")
                .setDataField("SA2")
                .setLeft("-1.3333333333333333em")
                .setTop("7.542857142857143em")
                .setWidth("20.666666666666668em")
                .setTabindex(108)
                .setLabelSize("12em")
                .setLabelCaption("2.Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput888")
                .setName("Motor#1")
                .setDataBinder("crydb2")
                .setDataField("A4#1")
                .setLeft("2.742857142857143em")
                .setTop("10.209523809523809em")
                .setWidth("11.933333333333334em")
                .setTabindex(109)
                .setLabelSize("8em")
                .setLabelCaption("3.Motor")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput889")
                .setName("Motor#2")
                .setDataBinder("crydb2")
                .setDataField("A4#2")
                .setLeft("14.666666666666666em")
                .setTop("10.209523809523809em")
                .setWidth("5.5em")
                .setTabindex(120)
                .setLabelSize("1.5em")
                .setLabelCaption("Ω/")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput890")
                .setName("Motor#3")
                .setDataBinder("crydb2")
                .setDataField("A4#3")
                .setLeft("20.133333333333333em")
                .setTop("10.209523809523809em")
                .setWidth("5.5em")
                .setTabindex(121)
                .setLabelSize("1.5em")
                .setLabelCaption("Ω/ ")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput891")
                .setName("Motor#4")
                .setDataBinder("crydb2")
                .setDataField("A4#4")
                .setLeft("26em")
                .setTop("10.209523809523809em")
                .setWidth("6.666666666666667em")
                .setTabindex(122)
                .setLabelSize("2em")
                .setLabelCaption("Ω⏚")
                .setMaxlength("null")
                .setItems([
                    {
                        "id" : "O.L",
                        "caption" : "O.L"
                    }
                ])
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox722")
                .setDataBinder("crydb2")
                .setDataField("A4#5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.6em")
                .setTop("9.82857142857143em")
                .setHeight("2.4em")
                .setTabindex(123)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1385")
                .setName("Rough Valve")
                .setDataBinder("crydb2")
                .setDataField("A5#1")
                .setLeft("2.6666666666666665em")
                .setTop("12.571428571428571em")
                .setWidth("16.666666666666668em")
                .setTabindex(124)
                .setLabelSize("8em")
                .setLabelCaption("4.Rough Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox723")
                .setDataBinder("crydb2")
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
                .setLeft("20.8em")
                .setTop("12.342857142857143em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(125)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox724")
                .setDataBinder("crydb2")
                .setDataField("A5#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.53333333333333em")
                .setTop("12.19047619047619em")
                .setHeight("2.4em")
                .setTabindex(126)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1394")
                .setName("Vent Valve")
                .setDataBinder("crydb2")
                .setDataField("SA5#1")
                .setLeft("2.6666666666666665em")
                .setTop("14.780952380952382em")
                .setWidth("16.666666666666668em")
                .setTabindex(127)
                .setLabelSize("8em")
                .setLabelCaption("5.Vent Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox733")
                .setDataBinder("crydb2")
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
                .setLeft("20.8em")
                .setTop("14.552380952380952em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(128)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox734")
                .setDataBinder("crydb2")
                .setDataField("SA5#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.53333333333333em")
                .setTop("14.4em")
                .setHeight("2.4em")
                .setTabindex(129)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1386")
                .setName("Purge Valve")
                .setDataBinder("crydb2")
                .setDataField("A6#1")
                .setLeft("2.6666666666666665em")
                .setTop("17.066666666666666em")
                .setWidth("16.666666666666668em")
                .setTabindex(130)
                .setLabelSize("8em")
                .setLabelCaption("6.Purge Valve")
                .setHAlign("right")
                .setMaxlength("32")
                .setValue("M")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox725")
                .setDataBinder("crydb2")
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
                .setLeft("20.733333333333334em")
                .setTop("16.83809523809524em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(131)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox726")
                .setDataBinder("crydb2")
                .setDataField("A6#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("32.53333333333333em")
                .setTop("16.99047619047619em")
                .setHeight("2.4em")
                .setTabindex(132)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1387")
                .setName("Xhead原S/N")
                .setDataBinder("crydb2")
                .setDataField("A9#1")
                .setLeft("2.742857142857143em")
                .setTop("19.276190476190475em")
                .setWidth("16.6em")
                .setTabindex(133)
                .setLabelSize("8em")
                .setLabelCaption("7.Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox727")
                .setDataBinder("crydb2")
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
                .setLeft("20.733333333333334em")
                .setTop("18.97142857142857em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(134)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1388")
                .setName("1st Displacer原S/N")
                .setDataBinder("crydb2")
                .setDataField("A10#1")
                .setLeft("0.6666666666666666em")
                .setTop("21.63809523809524em")
                .setWidth("18.666666666666668em")
                .setTabindex(135)
                .setLabelSize("10em")
                .setLabelCaption("8.  1<sup>st</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox728")
                .setDataBinder("crydb2")
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
                .setLeft("20.733333333333334em")
                .setTop("21.257142857142856em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(136)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1389")
                .setName("2nd Displacer原S/N")
                .setDataBinder("crydb2")
                .setDataField("A11#1")
                .setLeft("0.6666666666666666em")
                .setTop("23.847619047619048em")
                .setWidth("18.666666666666668em")
                .setTabindex(137)
                .setLabelSize("10em")
                .setLabelCaption("9.  2<sup>nd</sup> Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox729")
                .setDataBinder("crydb2")
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
                .setLeft("20.666666666666668em")
                .setTop("23.542857142857144em")
                .setWidth("12em")
                .setHeight("2.4em")
                .setTabindex(138)
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1390")
                .setName("故障原因主要")
                .setDataBinder("crydb2")
                .setDataField("A12")
                .setLeft("2.742857142857143em")
                .setTop("26.285714285714285em")
                .setWidth("38.6em")
                .setTabindex(139)
                .setLabelSize("8em")
                .setLabelCaption("10.故障原因主要")
                .setMaxlength("200")
                .setItems([
                    {
                        "id" : "He Side粉塵汙染",
                        "caption" : "He Side粉塵汙染"
                    },
                    {
                        "id" : "He Side鉛粉汙染",
                        "caption" : "He Side鉛粉汙染"
                    },
                    {
                        "id" : "He Side輕微醛汙染",
                        "caption" : "He Side輕微醛汙染"
                    },
                    {
                        "id" : "He Side嚴重醛汙染",
                        "caption" : "He Side嚴重醛汙染"
                    },
                    {
                        "id" : "Vac製程汙染",
                        "caption" : "Vac製程汙染"
                    },
                    {
                        "id" : "He Side油汙染",
                        "caption" : "He Side油汙染"
                    },
                    {
                        "id" : "He Side鉛粒溢出",
                        "caption" : "He Side鉛粒溢出"
                    },
                    {
                        "id" : "MotoR軸心斷裂",
                        "caption" : "MotoR軸心斷裂"
                    }
                ])
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1391")
                .setName("故障原因次要")
                .setDataBinder("crydb2")
                .setDataField("A13")
                .setLeft("2.6666666666666665em")
                .setTop("28.876190476190477em")
                .setWidth("38.666666666666664em")
                .setTabindex(140)
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
                .setItems([
                    {
                        "id" : "Heater Short",
                        "caption" : "Heater Short"
                    },
                    {
                        "id" : "Displacr Pin磨損",
                        "caption" : "Displacr Pin磨損"
                    }
                ])
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2237")
                .setDataBinder("crydb2")
                .setDataField("備註A")
                .setAutoTips(false)
                .setLeft("42.74285714285714em")
                .setTop("19.6em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(141)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox730")
                .setDataBinder("crydb2")
                .setDataField("A14#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("19.047619047619047em")
                .setTop("30.476190476190474em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(142)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox731")
                .setDataBinder("crydb2")
                .setDataField("A14#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("31.238095238095237em")
                .setTop("30.552380952380954em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(143)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox732")
                .setDataBinder("crydb2")
                .setDataField("A15")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("21.333333333333332em")
                .setTop("32.68571428571428em")
                .setWidth("8.066666666666666em")
                .setHeight("2.6666666666666665em")
                .setTabindex(144)
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameA2")
                .setName("A組裝簽名")
                .setDataBinder("crydb2")
                .setDataField("A組裝簽名")
                .setReadonly(true)
                .setLeft("20.666666666666668em")
                .setTop("37.333333333333336em")
                .setWidth("18em")
                .setTabindex(145)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_namea2_onclick")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateA2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("A組裝日期")
                .setReadonly(true)
                .setLeft("40.666666666666664em")
                .setTop("37.25714285714286em")
                .setWidth("15em")
                .setTabindex(146)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderA2")
                .setName("A組長覆核")
                .setDataBinder("crydb2")
                .setDataField("A組長覆核")
                .setReadonly(true)
                .setLeft("20.666666666666668em")
                .setTop("40.53333333333333em")
                .setWidth("18em")
                .setTabindex(149)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leadera2_onclick")
            );
            
            host.xui_ui_block214.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderA2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("A覆核日期")
                .setReadonly(true)
                .setLeft("40.666666666666664em")
                .setTop("40.53333333333333em")
                .setWidth("15em")
                .setTabindex(150)
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label211")
                .setLeft("11.533333333333333em")
                .setTop("11.733333333333333em")
                .setWidth("23.6em")
                .setHeight("1.6761904761904762em")
                .setCaption("6.RTD 室溫(標準值:300k ±10k，1st&2nd 相差2k)")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label498")
                .setLeft("30.2em")
                .setTop("13.6em")
                .setCaption("K")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label932")
                .setLeft("33em")
                .setTop("16.2em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label933")
                .setLeft("33.06666666666667em")
                .setTop("18.2em")
                .setCaption("Ω")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox735")
                .setDataBinder("crydb2")
                .setDataField("B1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.3333333333333335em")
                .setTop("0.3333333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.6666666666666667em")
                .setTabindex(193)
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
                .setDataBinder("crydb2")
                .setDataField("B2#1")
                .setLeft("4.666666666666667em")
                .setTop("2.6666666666666665em")
                .setWidth("24em")
                .setTabindex(194)
                .setLabelSize("10em")
                .setLabelCaption("2.Cylinder S/N")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox736")
                .setDataBinder("crydb2")
                .setDataField("B2#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("28.733333333333334em")
                .setTop("2.3333333333333335em")
                .setWidth("11.866666666666667em")
                .setHeight("1.7523809523809524em")
                .setTabindex(195)
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
                .setDataBinder("crydb2")
                .setDataField("B4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("11.657142857142857em")
                .setTop("4.571428571428571em")
                .setWidth("31.238095238095237em")
                .setHeight("1.8285714285714285em")
                .setTabindex(196)
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
                .setDataBinder("crydb2")
                .setDataField("B5")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.733333333333333em")
                .setTop("6.780952380952381em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setTabindex(197)
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
                .setDataBinder("crydb2")
                .setDataField("B6")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("13.8em")
                .setTop("9.066666666666666em")
                .setWidth("26.666666666666668em")
                .setHeight("1.8666666666666667em")
                .setTabindex(198)
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput896")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb2")
                .setDataField("B7#1")
                .setLeft("12.666666666666666em")
                .setTop("13.333333333333334em")
                .setWidth("8.666666666666666em")
                .setTabindex(199)
                .setLabelSize("2em")
                .setLabelCaption("1<sup>st</sup>")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput897")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setDataBinder("crydb2")
                .setDataField("B7#2")
                .setLeft("21.333333333333332em")
                .setTop("13.333333333333334em")
                .setWidth("8.666666666666666em")
                .setTabindex(200)
                .setLabelSize("3em")
                .setLabelCaption("K 2<sup>nd</sup>")
                .setHAlign("right")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox740")
                .setDataBinder("crydb2")
                .setDataField("B7#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.733333333333334em")
                .setTop("12.876190476190477em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(201)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1395")
                .setName("New Diode 1st S/N")
                .setDataBinder("crydb2")
                .setDataField("B8#1")
                .setLeft("4.666666666666667em")
                .setTop("15.923809523809524em")
                .setWidth("18em")
                .setTabindex(202)
                .setLabelSize("10em")
                .setLabelCaption("7.New RTD 1<sup>st</sup>  S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1396")
                .setName("New Diode 1st V")
                .setDataBinder("crydb2")
                .setDataField("B8#2")
                .setLeft("23.39047619047619em")
                .setTop("15.923809523809524em")
                .setWidth("9.133333333333333em")
                .setTabindex(203)
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1397")
                .setName("New Diode 2nd S/N")
                .setDataBinder("crydb2")
                .setDataField("B9#1")
                .setLeft("4.666666666666667em")
                .setTop("17.904761904761905em")
                .setWidth("18em")
                .setTabindex(204)
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup> S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1398")
                .setName("New Diode 2nd V")
                .setDataBinder("crydb2")
                .setDataField("B9#2")
                .setLeft("23.39047619047619em")
                .setTop("17.904761904761905em")
                .setWidth("9.2em")
                .setTabindex(205)
                .setLabelSize("1em")
                .setLabelCaption("V")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"installB2")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("crydb2")
                .setDataField("B15")
                .setLeft("5.333333333333333em")
                .setTop("20.19047619047619em")
                .setWidth("26.666666666666668em")
                .setTabindex(206)
                .setLabelSize("18em")
                .setLabelCaption("8.  80k Radiation Shield 安裝")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_installb2_onclick")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1399")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("crydb2")
                .setDataField("B14#1")
                .setLeft("7.333333333333333em")
                .setTop("22.323809523809523em")
                .setWidth("20em")
                .setTabindex(207)
                .setLabelSize("16em")
                .setLabelCaption("9.Vacuum Side Leak Test：(5x10<Sup>-9</sup>)")
                .setHAlign("right")
                .setMaxlength("32")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1679")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("crydb2")
                .setDataField("B14#3")
                .setLeft("26.8em")
                .setTop("22.333333333333332em")
                .setWidth("5.6em")
                .setTabindex(208)
                .setLabelSize("2em")
                .setLabelCaption("E-")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox741")
                .setDataBinder("crydb2")
                .setDataField("B14#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("30.666666666666668em")
                .setTop("22.01904761904762em")
                .setWidth("11.866666666666667em")
                .setHeight("1.8em")
                .setTabindex(209)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2238")
                .setDataBinder("crydb2")
                .setDataField("備註B")
                .setAutoTips(false)
                .setLeft("42em")
                .setTop("12.8em")
                .setWidth("20.066666666666666em")
                .setHeight("11.333333333333334em")
                .setTabindex(210)
                .setLabelSize("3em")
                .setLabelCaption("備註")
                .setMaxlength("32")
                .setMultiLines(true)
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameB2")
                .setName("B組裝簽名")
                .setDataBinder("crydb2")
                .setDataField("B組裝簽名")
                .setReadonly(true)
                .setLeft("13.333333333333334em")
                .setTop("25.82857142857143em")
                .setWidth("18em")
                .setTabindex(211)
                .setLabelSize("8em")
                .setLabelCaption("組裝簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_nameb2_onclick")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateB2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("B組裝日期")
                .setReadonly(true)
                .setLeft("32.666666666666664em")
                .setTop("25.82857142857143em")
                .setWidth("15em")
                .setTabindex(212)
                .setLabelSize("5em")
                .setLabelCaption("組裝日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderB2")
                .setName("B組長覆核")
                .setDataBinder("crydb2")
                .setDataField("B組長覆核")
                .setReadonly(true)
                .setLeft("13.333333333333334em")
                .setTop("28.495238095238093em")
                .setWidth("18em")
                .setTabindex(213)
                .setLabelSize("8em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderb2_onclick")
            );
            
            host.xui_ui_block215.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderB2")
                .setName("日期")
                .setDataBinder("crydb2")
                .setDataField("B覆核日期")
                .setReadonly(true)
                .setLeft("32.666666666666664em")
                .setTop("28.495238095238093em")
                .setWidth("15em")
                .setTabindex(214)
                .setLabelSize("5em")
                .setLabelCaption("覆核日期")
                .setType("date")
                .setMaxlength("null")
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
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label213")
                .setLeft("18.666666666666668em")
                .setTop("4.571428571428571em")
                .setHeight("1.3333333333333333em")
                .setCaption("MPa")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label214")
                .setLeft("40.333333333333336em")
                .setTop("4.723809523809524em")
                .setCaption("MPa")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox154")
                .setDataBinder("crydb2")
                .setDataField("D1#1")
                .setLeft("-0.3047619047619048em")
                .setTop("0.26666666666666666em")
                .setWidth("16.685714285714287em")
                .setHeight("1.1333333333333333em")
                .setTabindex(329)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("1. 管線配接符合Pump要求  Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox155")
                .setDataBinder("crydb2")
                .setDataField("D1#2")
                .setLeft("-0.5333333333333333em")
                .setTop("2.2857142857142856em")
                .setWidth("15.161904761904761em")
                .setTabindex(330)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("2. 依Test標準參數設定    Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput909")
                .setName("Supply Pressure")
                .setDataBinder("crydb2")
                .setDataField("D2#1")
                .setLeft("0em")
                .setTop("4.495238095238095em")
                .setWidth("18em")
                .setTabindex(331)
                .setLabelSize("9em")
                .setLabelCaption("3. Supply Pressure")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput910")
                .setName("Return Pressure")
                .setDataBinder("crydb2")
                .setDataField("D2#2")
                .setLeft("22.666666666666668em")
                .setTop("4.495238095238095em")
                .setWidth("17.333333333333332em")
                .setTabindex(332)
                .setLabelSize("8em")
                .setLabelCaption("Return Pressure")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1417")
                .setName("Compressor Model")
                .setDataBinder("crydb2")
                .setDataField("D3#1")
                .setLeft("0.1523809523809524em")
                .setTop("6.552380952380952em")
                .setWidth("20em")
                .setTabindex(333)
                .setLabelSize("10em")
                .setLabelCaption("4. Compressor Model")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "CSW61C",
                        "caption" : "CSW61C"
                    },
                    {
                        "id" : "CSW61C2",
                        "caption" : "CSW61C2"
                    },
                    {
                        "id" : "CSW61CN2",
                        "caption" : "CSW61CN2"
                    },
                    {
                        "id" : "CSW61D",
                        "caption" : "CSW61D"
                    }
                ])
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1416")
                .setName("Ch")
                .setDataBinder("crydb2")
                .setDataField("D2#3")
                .setLeft("20.571428571428573em")
                .setTop("6.552380952380952em")
                .setWidth("6.666666666666667em")
                .setTabindex(334)
                .setLabelSize("2em")
                .setLabelCaption("Ch")
                .setMaxlength("32")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1418")
                .setName("Start Cooldown#1")
                .setDataBinder("crydb2")
                .setDataField("D3#2")
                .setLeft("2.2857142857142856em")
                .setTop("8.533333333333333em")
                .setWidth("12.8em")
                .setTabindex(335)
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown")
                .setMaxlength("10")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1419")
                .setName("Start Cooldown#2")
                .setDataBinder("crydb2")
                .setDataField("D3#3")
                .setLeft("15.00952380952381em")
                .setTop("8.533333333333333em")
                .setWidth("5.4em")
                .setTabindex(336)
                .setLabelSize("2em")
                .setLabelCaption("of")
                .setMaxlength("10")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1420")
                .setName("Start Cooldown#3")
                .setDataBinder("crydb2")
                .setDataField("D3#4")
                .setLeft("20.952380952380953em")
                .setTop("8.533333333333333em")
                .setWidth("10.666666666666666em")
                .setTabindex(337)
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "KZ-8L3C",
                        "caption" : "KZ-8L3C"
                    },
                    {
                        "id" : "KZ-8L3C3",
                        "caption" : "KZ-8L3C3"
                    },
                    {
                        "id" : "KZ-8L3CL",
                        "caption" : "KZ-8L3CL"
                    },
                    {
                        "id" : "KZ-8L3CS",
                        "caption" : "KZ-8L3CS"
                    }
                ])
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox156")
                .setDataBinder("crydb2")
                .setDataField("D5#2")
                .setLeft("-1.2952380952380953em")
                .setTop("10.438095238095238em")
                .setWidth("20.533333333333335em")
                .setHeight("1.1333333333333333em")
                .setTabindex(338)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("5. Test完成後,Helium Side Purge    Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox754")
                .setDataBinder("crydb2")
                .setDataField("D5#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y",
                        "imageClass" : ""
                    },
                    {
                        "id" : "0",
                        "caption" : "N",
                        "imageClass" : ""
                    }
                ])
                .setLeft("-0.8380952380952381em")
                .setTop("11.733333333333333em")
                .setWidth("21.733333333333334em")
                .setHeight("1.9047619047619047em")
                .setTabindex(339)
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
                .setHost(host,"xui_ui_checkbox157")
                .setDataBinder("crydb2")
                .setDataField("D6#2")
                .setLeft("0em")
                .setTop("13.866666666666667em")
                .setWidth("20.533333333333335em")
                .setHeight("1.2em")
                .setTabindex(340)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("7. 15k Array間距調整檢查(不可接觸)Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox158")
                .setDataBinder("crydb2")
                .setDataField("D7#1")
                .setLeft("0.38095238095238093em")
                .setTop("15.847619047619048em")
                .setWidth("21.866666666666667em")
                .setHeight("1.1333333333333333em")
                .setTabindex(341)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("8. Test完成後，Vacuum Side Leak Test  Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox159")
                .setDataBinder("crydb2")
                .setDataField("D7#2")
                .setLeft("0.1523809523809524em")
                .setTop("17.676190476190477em")
                .setWidth("15.466666666666667em")
                .setHeight("2em")
                .setTabindex(342)
                .setHAlign("right")
                .setIconPos("right")
                .setCaption("9. Pump入庫前外觀檢查 Pass")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameD2")
                .setName("測試人員簽名")
                .setDataBinder("crydb2")
                .setDataField("D測試人員簽名")
                .setReadonly(true)
                .setLeft("0em")
                .setTop("20.64761904761905em")
                .setWidth("18em")
                .setTabindex(343)
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_named2_onclick")
            );
            
            host.xui_ui_block217.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderD2")
                .setName("測試組長覆核")
                .setDataBinder("crydb2")
                .setDataField("D測試組長覆核")
                .setReadonly(true)
                .setLeft("0em")
                .setTop("22.704761904761906em")
                .setWidth("18em")
                .setTabindex(344)
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_leaderd2_onclick")
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
                .setWidth("66.51428571428572em")
                .setHeight("14.933333333333334em")
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
                        "A7" : {
                            "value" : "1st Stage Temp Control Test"
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
                        "A10" : {
                            "value" : "2nd Stage Warm Up Test"
                        },
                        "A11" : {
                            "value" : "RESET FACTORY REGEN PARAMETER\n1st cooling control temp. = 100K,\n2nd cooling target temp. = 17K, \nExtended purge time for FULL regeneration = 0 mins,\nRepurge cycle upper limit = 3,  Repurge time = 60sec,  ROR base pressure = 75mm/tr,  ROR threshold value = 38m/m,  ROR cycle upper limit = 10,"
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
                .setWidth("65.06666666666666em")
                .setHeight("2.2095238095238097em"),
                "A1"
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testName2")
                .setDataBinder("crydb2")
                .setDataField("Test")
                .setLeft("0.45714285714285713em")
                .setTop("0.13333333333333333em")
                .setWidth("10.59047619047619em")
                .setTabindex(400)
                .setLabelSize("3em")
                .setLabelCaption("Test")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_testname2_onclick")
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2297")
                .setDataBinder("crydb2")
                .setDataField("Assy OK")
                .setLeft("45.94285714285714em")
                .setTop("0.13333333333333333em")
                .setWidth("12.19047619047619em")
                .setTabindex(402)
                .setLabelSize("4.5em")
                .setLabelCaption("Assy OK")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_assyokname2_onclick")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div469")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("65.06666666666666em")
                .setHeight("2.2095238095238097em"),
                "A2"
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label218")
                .setLeft("22.095238095238095em")
                .setTop("0.5333333333333333em")
                .setCaption("Test Plate：SHI Sicera")
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testDate2")
                .setDataBinder("crydb2")
                .setDataField("TestDate")
                .setLeft("-0.6666666666666666em")
                .setTop("0em")
                .setWidth("11.733333333333333em")
                .setTabindex(401)
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"assyOkDate2")
                .setDataBinder("crydb2")
                .setDataField("Assy OK Date")
                .setLeft("46.476190476190474em")
                .setTop("0.1523809523809524em")
                .setWidth("11.733333333333333em")
                .setTabindex(403)
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div470")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.085714285714285em")
                .setHeight("2.2095238095238097em"),
                "D4"
            );
            
            host.xui_ui_div470.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox755")
                .setDataBinder("crydb2")
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
                .setTabindex(406)
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
                .setWidth("7.085714285714285em")
                .setHeight("2.2095238095238097em"),
                "D6"
            );
            
            host.xui_ui_div471.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox756")
                .setDataBinder("crydb2")
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
                .setTabindex(410)
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
                .setWidth("7.085714285714285em")
                .setHeight("2.2095238095238097em"),
                "D15"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div473")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("2.2095238095238097em"),
                "B6"
            );
            
            host.xui_ui_div473.append(
                xui.create("xui.UI.Input")
                .setHost(host,"ba2")
                .setDataBinder("crydb2")
                .setDataField("E6")
                .setDock("fill")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setTabindex(408)
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div474")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("38.17142857142857em")
                .setHeight("2.2095238095238097em"),
                "B8"
            );
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1426")
                .setDataBinder("crydb2")
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
                .setTabindex(411)
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1427")
                .setDataBinder("crydb2")
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
                .setTabindex(412)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1428")
                .setDataBinder("crydb2")
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
                .setTabindex(413)
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div474.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1429")
                .setDataBinder("crydb2")
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
                .setTabindex(414)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div475")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("38.17142857142857em")
                .setHeight("2.2095238095238097em"),
                "B12"
            );
            
            host.xui_ui_div475.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1430")
                .setDataBinder("crydb2")
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
                .setTabindex(418)
                .setLabelSize("4em")
                .setLabelCaption("#1:")
            );
            
            host.xui_ui_div475.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput912")
                .setName("B5")
                .setDataBinder("crydb2")
                .setDataField("E17")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setTabindex(419)
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div476")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("38.17142857142857em")
                .setHeight("2.2095238095238097em"),
                "B13"
            );
            
            host.xui_ui_div476.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1431")
                .setDataBinder("crydb2")
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
                .setTabindex(421)
                .setLabelSize("4em")
                .setLabelCaption("#2:")
            );
            
            host.xui_ui_div476.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput913")
                .setName("B5")
                .setDataBinder("crydb2")
                .setDataField("E20")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setTabindex(422)
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div477")
                .setDataBinder("crydb2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("57.904761904761905em")
                .setHeight("2.2095238095238097em"),
                "A15"
            );
            
            host.xui_ui_div477.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox757")
                .setDataBinder("crydb2")
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
                .setTabindex(423)
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
                .setWidth("65.06666666666666em")
                .setHeight("18.97142857142857em"),
                "A16"
            );
            
            host.xui_ui_div478.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1433")
                .setDataBinder("crydb2")
                .setDataField("Test Data Fail原因")
                .setDock("left")
                .setDockOrder(0)
                .setDockStretch("stretch")
                .setLeft("10.666666666666666em")
                .setTop("11.428571428571429em")
                .setWidth("28.114285714285714em")
                .setHeight("10em")
                .setTabindex(424)
                .setLabelSize("6em")
                .setLabelCaption("Fail原因：")
                .setMultiLines(true)
            );
            
            host.xui_ui_div478.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1432")
                .setDataBinder("crydb2")
                .setDataField("Test Data 處理情形")
                .setDock("left")
                .setDockOrder(1)
                .setDockStretch("stretch")
                .setLeft("9.904761904761905em")
                .setTop("10.666666666666666em")
                .setWidth("30.01904761904762em")
                .setHeight("10em")
                .setTabindex(425)
                .setLabelSize("6em")
                .setLabelCaption("處理情形：")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div479")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.085714285714285em")
                .setHeight("6.780952380952381em"),
                "D7"
            );
            
            host.xui_ui_div479.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox758")
                .setDataBinder("crydb2")
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
                .setTabindex(415)
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
                .setWidth("38.17142857142857em")
                .setHeight("2.2095238095238097em"),
                "B10"
            );
            
            host.xui_ui_div480.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1434")
                .setName("B4")
                .setDataBinder("crydb2")
                .setDataField("E14")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("15.847619047619048em")
                .setHeight("2.1333333333333333em")
                .setTabindex(416)
                .setLabelSize("4em")
                .setLabelCaption("Time:")
                .setType("time")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div481")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.085714285714285em")
                .setHeight("2.2095238095238097em"),
                "D10"
            );
            
            host.xui_ui_div481.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox759")
                .setDataBinder("crydb2")
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
                .setTabindex(417)
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
                .setWidth("7.085714285714285em")
                .setHeight("6.780952380952381em"),
                "D11"
            );
            
            host.xui_ui_div482.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox760")
                .setDataBinder("crydb2")
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
                .setTabindex(420)
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
                .setHost(host,"xui_ui_div6056")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("2.2095238095238097em"),
                "B4"
            );
            
            host.xui_ui_div6056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input16591")
                .setDataBinder("crydb2")
                .setDataField("E3")
                .setDock("top")
                .setDockStretch("0.5")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("5.79047619047619em")
                .setTabindex(404)
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div6056.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input16592")
                .setDataBinder("crydb2")
                .setDataField("E33")
                .setDock("top")
                .setDockStretch("0.5")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setTabindex(405)
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block219")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("9.82857142857143em")
                .setBorderType("none"),
                "B14"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block220")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("9.82857142857143em")
                .setBorderType("none"),
                "C14"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"a2")
                .setName("B5")
                .setDataBinder("crydb2")
                .setDataField("E5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("2.2095238095238097em")
                .setTabindex(407)
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout17.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"b2")
                .setName("C6")
                .setDataBinder("crydb2")
                .setDataField("E7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.047619047619047em")
                .setHeight("2.2095238095238097em")
                .setTabindex(409)
                .setLabelPos("none")
                .setType("time")
                .afterUIValueSet("_b2_afteruivalueset"),
                "C6"
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
        checkFinishState: function(db){
            var ns = this, rno = ns.repairNo.getUIValue();
            db.updateDataFromUI();
            var data = db.getData();
            if(ns.checkSubSheetFinish() == false)
                return false;
            var xmodel=data["Crosshead Model"], xsn = data["C3#1"], xh = data["Crosshead編號"];
            if(xmodel==""|| xsn==""||xh=="")
            {
              utils.alert("Crosshead Model,S/N, XH編號必填!");
              return false;  
            }
            var notConfirmList = "";
            if(data["A組長覆核"] == "")
                notConfirmList += "A.拆解清洗 <br>";
            if(data["B組長覆核"] == "")
                notConfirmList += "B.Vacuum Side 組裝 <br>";
            if(data["C組長覆核"] == "")
                notConfirmList += "C. Helium Side 組裝 <br>";
            if(data["測試組長覆核"] == "")
                notConfirmList += "D.Test Data <br>";
            if(notConfirmList != "")
            {
                utils.alert(notConfirmList + "組長尚未覆核!");
                return false;
            }
            return true;
        },
        writeBack:function(db){
            var ns = this;
            db.updateDataFromUI();
            var d = db.getData();
            var witem = {"Module#1":d["Module1 Name"], "P/N#1":d["Module1 P/N"], "S/N#1":d["Module1 S/N"],
                         "Module#2":d["Module2 Name"], "P/N#2":d["Module2 P/N"], "S/N#2":d["Module2 S/N"],
                         "登錄編號":d["登錄編號"]};
            utils.modifyTableItem("Module功能測試表","登錄編號", witem);
            var citem = {"登錄編號":d["登錄編號"], "Running Time":d["Pump/Module ETM"],"S/N":d["A9#1"]};
            utils.modifyTableItem("Crosshead維修工單","登錄編號", citem);
            if(d["Crosshead編號"] != "")
            {
                var rno = ns.repairNo.getUIValue();
                //first empty any Crosshead with RepairNo
                utils.modifyTableItem2("Crosshead維修工單","已安裝Pump登錄編號", rno, {"已安裝Pump登錄編號": ""});
                //2nd, write correct 
                utils.modifyTableItem("Crosshead維修工單","Crosshead編號",{"Crosshead編號": d["Crosshead編號"], "已安裝Pump登錄編號": rno});
            }
            else
            {
                var rno = ns.repairNo.getUIValue();
                //first empty any Crosshead with RepairNo
                utils.modifyTableItem2("Crosshead維修工單","已安裝Pump登錄編號", rno, {"已安裝Pump登錄編號": ""});
            }

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
            var db = ns.crydb1, dbname = "crydb1",finishState = ns.repairStatus.getUIValue();

            if(ns.sheetType.getUIValue().includes("SHI"))
            {
                db = ns.crydb2;
                dbname = "crydb2";
            }
            ns.customer.setDataBinder(dbname);
            ns.date.setDataBinder(dbname);
            ns.report.setDataBinder(dbname);
            ns.sheetType.setDataBinder(dbname);
            ns.pump.setDataBinder(dbname);
            ns.repairNo.setDataBinder(dbname);
            ns.repairStatus.setDataBinder(dbname);
           // utils.updateWorkSheetRepairState(ns.repairNo.getUIValue(), "開始維修");
            if(finishState == "完工" && ns.checkFinishState(db)==false)
                return;
            utils.writeRepairStatus(ns);
            ns.writeBack(db);
            utils.saveForm(ns,"","",null, db);
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop = ns.properties;
            var data = ns.crydb1.getData();
            ns.crydb2.setData(data);
            ns.crydb2.updateDataToUI();
            ns.updateSheetType(ns.sheetType.getUIValue());
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
            console.log(utils.createDDL(ns.dialog,"Cryopump維修工單", true));
            ns.tabs1.setValue("a");
            ns.tabs2.setValue("a");
 //           utils.readRepairStatus(ns);
//            utils.updateFinishOutBtnCaption(ns);
            ns.prevRepairStatus = ns.repairStatus.getUIValue();
            /*
            utils.blockConfirmName(ns.leaderA);
            utils.blockConfirmName(ns.leaderB);
            utils.blockConfirmName(ns.leaderC);
            utils.blockConfirmName(ns.leaderD);
            utils.blockConfirmName(ns.leaderA2);
            utils.blockConfirmName(ns.leaderB2);
            utils.blockConfirmName(ns.leaderC2);
            utils.blockConfirmName(ns.leaderD2);
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
                _optionbtn_onclick:function(profile, e, src, value){
                    var ns = this, uictrl = profile.boxing();
                    utils.showRepairOptionForm(ns.crydb1);
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
            //utils.updateNewWorkSheetValue(ns.rdb, newValue);
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
                            ns.db = "crydb2";
                        }
                        else
                        {
                            ns.tabs2.hide();
                            ns.tabs1.show();
                            ns.tabs1.setDock("fill");
                            ns.db = "crydb1";
                        }       
            var dbname = ns.db;
            ns.customer.setDataBinder(dbname);
            ns.date.setDataBinder(dbname);
            ns.report.setDataBinder(dbname);
            ns.sheetType.setDataBinder(dbname);
            ns.pump.setDataBinder(dbname);
            ns.repairNo.setDataBinder(dbname);
            ns.repairStatus.setDataBinder(dbname);
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
        /**
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
        _namea_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateA, uictrl,"維修");
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
        _leadera_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateLeaderA,uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        _namea2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateA2, uictrl,"維修");
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
        _leadera2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateLeaderA2,uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        _nameb_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateB, uictrl,"維修");
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
        _leaderb_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateLeaderB, uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        _nameb2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateB2, uictrl,"維修");
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
        _leaderb2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateLeaderB2, uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
             utils.signNameClick(ns.dateLeaderC, uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        _dateleaderc2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.dateLeaderC2, uictrl,"組長");
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
        _named_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _leaderd_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        _named2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _leaderd2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"組長");
            utils.blockConfirmName(uictrl);
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
        
    updateMinutes: function(){
            var ns = this;
        utils.calcMinute(ns.e1, ns.d1, ns.ed1);
        utils.calcMinute(ns.f1, ns.e1, ns.fe1);
        utils.calcMinute(ns.b1, ns.a1, ns.ba1);
        utils.calcMinute(ns.c1, ns.b1, ns.cb1);
        
        utils.calcMinute(ns.b2, ns.a2, ns.ba2);
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
    _d1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
        var ns = this, uictrl = profile.boxing();
        ns.updateMinutes();
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
        _e1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinutes();
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
        _f1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinutes();
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
        _b1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
        ns.updateMinutes();
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
        _c1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinutes();
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
        _a1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
         ns.updateMinutes();
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
        _b2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinutes();
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
        _testname_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.testDate, uictrl,"維修");
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
        _assyokname_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.assyOkDate, uictrl,"維修");
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
        _testname2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(ns.testDate2, uictrl,"維修");
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
        _assyokname2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.assyOkDate2, uictrl,"維修");
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
        _xui_ui_button125_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
                utils.showTestFormMenu(uictrl, ns.repairNo.getUIValue());
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
            if(ns.saveBtn.getDisabled() == true)
                return;
            utils.nextStation(uictrl,["拆解站","Vacuum side","Helium side","測試站"]);
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
        _repairno_onclick:function(profile, e, src, value, n){
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
        _warrantybtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showWarrantyEditForm(ns.repairNo.getUIValue());
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _reportbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                utils.createCryopumpTestReport(ns.repairNo.getUIValue());
            },

        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _crossheadbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var xh = ns.xh1.getUIValue();
            var sheetType = ns.sheetType.getUIValue();
            if(sheetType.includes("SHI"))
                xh = ns.xh2.getUIValue();
            if(xh == "")
            {
              utils.alert("請輸入Crosshead XH代碼");
              return;  
            }
            var cb = function(){
                var etm = utils.getItemValue("Cryopump維修工單","登錄編號", ns.repairNo.getUIValue(),"Pump/Module ETM");
                ns.etm1.setValue(etm);
                ns.etm2.setValue(etm);
            }
            utils.showCrossheadEditFormXH(xh,null, cb);
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
        _installb_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _installb2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
        },
        getCrossheadSN:function(xcode, uictrl){
            var ns = this;
            var sn = utils.getItemValue("未領用Crosshead編號查詢","Crosshead編號",xcode);
            if(sn != "")
            {
              if(sn["S/N#2"] !== "")
                  sn = sn["S/N#2"];
              else  
                  sn = sn["S/N"];  
              uictrl.setValue(sn);  
            }
            var rtime = utils.getItemValue("Crosshead維修工單","Crosshead編號",xcode,"Running Time");
            ns.etm1.setValue(rtime);
            ns.etm2.setValue(rtime);
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
        _xh1_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            ns.getCrossheadSN(newValue, ns.xheadSN1);
            utils.modifyTableItem("Crosshead維修工單","Crosshead編號",{"Crosshead編號":newValue, "已安裝Pump登錄編號":ns.repairNo.getUIValue()});
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
        _xh2_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            ns.getCrossheadSN(newValue, ns.xheadSN2);
        },
        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _xh1_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
                 var ns = this, uictrl = profile.boxing();
                if(ns.xmodel1.getUIValue() == "")
                {
                  utils.alert("請先選取 Crosshead Model...");  
                  return false;      
                }
                else
                  return true;
        },
        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _xh2_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
                 var ns = this, uictrl = profile.boxing();
                if(ns.xmodel2.getUIValue() == "")
                {
                  utils.alert("請先選取 Crosshead Model...");  
                  return false;      
                }
                else
                  return true;
        },
        checkSubSheetFinish:function(){
            var ns = this;
            var rno = ns.repairNo.getUIValue();
            var item = utils.getItemValue("Module功能測試表","登錄編號",rno);
            if(item != "" && !["完工","不修","簡修完工"].includes(item["維修狀態"]) )
            {
                utils.alert("Module功能測試表,未完工!");
                return false;
            }
            /*
            item = utils.getItemValue("Crosshead維修工單","登錄編號",rno);
            if(item != "" && item["維修狀態"] != "完工")
            {
                utils.alert("Crosshead維修工單,未完工!");
                return false;
            }
            */
            return true;
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _finishbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                utils.finishBtnClick(ns);
            },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _outbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.outBtnClick(ns);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _modulebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showModuleTestForm(ns.repairNo.getUIValue());
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
        _xui_ui_input1415_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
              utils.signNameClick(null, uictrl,"維修");
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
             utils.signNameClick(ns.dateLeaderC2, uictrl,"組長");
        },
        /**
         * Fired after setUIValue is called
         * @method afterUIValueSet [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _depth_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            var v = (Number(newValue) - 0.265).toFixed(3);
            ns.setting.setValue(v);
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
        _c14_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _c15_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _c16_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
             utils.signNameClick(null, uictrl,"維修");
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
        _c162_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
              utils.signNameClick(null, uictrl,"維修");
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
        _c152_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
              utils.signNameClick(null, uictrl,"維修");
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
        _c142_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
              utils.signNameClick(null, uictrl,"維修");
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