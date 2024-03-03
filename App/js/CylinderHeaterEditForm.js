/*************************************************************************************************
 程式代號：RepairSide
 程式名稱：App/js/CylinderHeaterEditForm.js
 系統版本：企業版(for SQL Server)
*************************************************************************************************
 程式版本：1.0
 修改日期：2024/03/02
 修改人員：Jack Hsu
 修改說明：(1). 初始版本
*************************************************************************************************/
xui.Class('App.CylinderHeaterEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "CylinderHeater維修工單",
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
                .setHost(host,"chdb")
                .setName("chdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("10.666666666666666em")
                .setTop("1.5238095238095237em")
                .setWidth("62.32380952380952em")
                .setHeight("46.476190476190474em")
                .setCaption("Cylinder / Heater 維修工單")
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
                .setHost(host,"repairStatus")
                .setDataBinder("chdb")
                .setDataField("維修狀態")
                .setAutoTips(false)
                .setLeft("16.076190476190476em")
                .setTop("1.2em")
                .setWidth("12.733333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("維修狀態")
                .setType("popbox")
                .setMaxlength("32")
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
                .setHost(host,"xui_ui_div165")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("3.4285714285714284em")
                .setHeight("8.6em")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input462")
                .setName("客戶名稱")
                .setDataBinder("chdb")
                .setDataField("客戶名稱")
                .setLeft("2.4em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput290")
                .setName("日期")
                .setDataBinder("chdb")
                .setDataField("日期")
                .setLeft("16.2em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox61")
                .setDataBinder("chdb")
                .setDataField("Report")
                .setLeft("54em")
                .setTop("3em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input465")
                .setName("Pump")
                .setDataBinder("chdb")
                .setDataField("Cylinder S/N")
                .setLeft("28em")
                .setTop("3.066666666666667em")
                .setWidth("14.666666666666666em")
                .setLabelSize("6em")
                .setLabelCaption("Cylinder S/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox170")
                .setDataBinder("chdb")
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
                .setLeft("4.333333333333333em")
                .setTop("2.7333333333333334em")
                .setWidth("26em")
                .setHeight("2.6666666666666665em")
                .setSelMode("multi")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("a")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox171")
                .setDataBinder("chdb")
                .setDataField("Model")
                .setItems([
                    {
                        "id" : "M350",
                        "caption" : "M350",
                        "imageClass" : ""
                    },
                    {
                        "id" : "M1020",
                        "caption" : "M1020",
                        "imageClass" : "",
                        "disabled" : false
                    },
                    {
                        "id" : "M1050",
                        "caption" : "M1050",
                        "imageClass" : ""
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    },
                    {
                        "id" : "M600",
                        "caption" : "M600"
                    },
                    {
                        "id" : "M900",
                        "caption" : "M900"
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("1.3333333333333333em")
                .setTop("5.266666666666667em")
                .setWidth("40em")
                .setHeight("2em")
                .setLabelSize("3em")
                .setLabelCaption("Model")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setValue("a")
                .setCustomStyle({
                    "KEY" : {
                    },
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setLeft("44em")
                .setTop("2.8666666666666667em")
                .setWidth("9.266666666666667em")
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("51.333333333333336em")
                .setTop("5.266666666666667em")
                .setWidth("8.666666666666666em")
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"lastRepairNo")
                .setDataBinder("comdb")
                .setDataField("上次登錄編號")
                .setReadonly(true)
                .setLeft("45.333333333333336em")
                .setTop("0.8em")
                .setWidth("14.666666666666666em")
                .setLabelSize("6.5em")
                .setLabelCaption("上次登錄編號")
                .setType("getter")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
                .onClick("_repairno_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("chdb")
                .setDataField("登錄編號")
                .setLeft("29.133333333333333em")
                .setTop("0.7333333333333333em")
                .setWidth("13.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("getter")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
                .onClick("_repairno_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"changeRepairBtn")
                .setTips("更換登錄編號")
                .setLeft("43em")
                .setTop("0.6em")
                .setCaption("▼")
                .onClick("_changerepairbtn_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setAutoTips(false)
                .setTips("Warranty原因分析表")
                .setLeft("51.333333333333336em")
                .setTop("7.933333333333334em")
                .setWidth("8.666666666666666em")
                .setHeight("1.9333333333333333em")
                .setTabindex(14)
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "進廠檢測",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "清洗送修"
                    },
                    {
                        "id" : "c",
                        "caption" : "送修回廠檢測"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("16.761904761904763em")
                .setTop("14.476190476190476em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div174")
                .setDock("top")
                .setLeft("12.952380952380953em")
                .setTop("11.428571428571429em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div174.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox200")
                .setDataBinder("chdb")
                .setDataField("A1#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("17em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("1.配件是否齊全")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div174.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input690")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("A1#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("2.895238095238095em")
                .setTop("6.857142857142857em")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div468")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div468.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox187")
                .setDataBinder("chdb")
                .setDataField("A2")
                .setItems([
                    {
                        "id" : "無",
                        "caption" : "無",
                        "imageClass" : ""
                    },
                    {
                        "id" : "長後",
                        "caption" : "長後",
                        "imageClass" : ""
                    },
                    {
                        "id" : "短前",
                        "caption" : "短前"
                    },
                    {
                        "id" : "短後",
                        "caption" : "短後"
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("37em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("2.螺桿")
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
                .setHost(host,"xui_ui_div469")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div469.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox188")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("17em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("3.外觀檢查")
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
                .setHost(host,"xui_ui_div470")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div470.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"radio8")
                .setDataBinder("chdb")
                .setDataField("A3#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("Flange")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div470.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input679")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("A3#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("3.657142857142857em")
                .setTop("7.619047619047619em")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div472")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("13.714285714285714em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div472.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox191")
                .setDataBinder("chdb")
                .setDataField("A3#3")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("Cylinder")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div472.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input680")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("A3#4")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("3.657142857142857em")
                .setTop("7.619047619047619em")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div489")
                .setDock("top")
                .setLeft("16em")
                .setTop("14.476190476190476em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div489.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox202")
                .setDataBinder("chdb")
                .setDataField("A4#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("20em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("4.Cylinder 測漏")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div489.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input735")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("A4#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("3.657142857142857em")
                .setTop("7.619047619047619em")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div490")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("15.238095238095237em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div490.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox207")
                .setDataBinder("chdb")
                .setDataField("A5#5")
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
                .setDock("top")
                .setDockOrder(5)
                .setDockMargin({
                    "left" : 0,
                    "top" : -3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("13em")
                .setHeight("1.7523809523809524em")
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
            
            host.xui_ui_div490.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput378")
                .setName("Heater 1st")
                .setDataBinder("chdb")
                .setDataField("A5#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.5047619047619047em")
                .setTop("8.761904761904763em")
                .setWidth("13em")
                .setLabelSize("8em")
                .setLabelCaption("5.Heater阻值:1<sup>st</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_div490.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput379")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("A5#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("20.8em")
                .setTop("8.838095238095239em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("Ω 2<sup>nd</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_div490.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput382")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("A5#3")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("21.561904761904763em")
                .setTop("9.6em")
                .setWidth("9em")
                .setLabelSize("3.5em")
                .setLabelCaption("Ω 交叉")
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
            
            host.xui_ui_div490.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput383")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("A5#4")
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("22.323809523809523em")
                .setTop("10.361904761904762em")
                .setWidth("8.5em")
                .setLabelSize("3.5em")
                .setLabelCaption("Ω 接地")
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
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div510")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div510.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameA")
                .setDataBinder("chdb")
                .setDataField("簽名A")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("34.59047619047619em")
                .setTop("32.838095238095235em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_namea_onclick")
            );
            
            host.xui_ui_div510.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateA")
                .setDataBinder("chdb")
                .setDataField("日期A")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("43.58095238095238em")
                .setTop("32.838095238095235em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.xui_ui_div510.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input783")
                .setDataBinder("chdb")
                .setDataField("RemarkA")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("33.6em")
                .setWidth("30em")
                .setLabelSize("5em")
                .setLabelCaption("Remark")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("12.19047619047619em")
                .setTop("16em"),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div411")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("8.380952380952381em")
                .setTop("16.761904761904763em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div411.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox332")
                .setDataBinder("chdb")
                .setDataField("C1#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("24em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("1.外觀及內部檢查")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div411.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1087")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("C1#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("5.180952380952381em")
                .setTop("9.142857142857142em")
                .setMaxlength("200")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div412")
                .setDock("top")
                .setDockOrder(6)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div412.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameC")
                .setDataBinder("chdb")
                .setDataField("簽名C")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("60.49523809523809em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_namec_onclick")
            );
            
            host.xui_ui_div412.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateC")
                .setDataBinder("chdb")
                .setDataField("日期C")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.34285714285714em")
                .setTop("60.49523809523809em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div639")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div639.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox333")
                .setDataBinder("chdb")
                .setDataField("C2#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("24em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("2.清洗後外觀及內部檢查")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div639.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1088")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("C2#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("5.180952380952381em")
                .setTop("9.142857142857142em")
                .setMaxlength("200")
            );
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div655")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.904761904761905em")
                .setTop("18.285714285714285em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div655.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox349")
                .setDataBinder("chdb")
                .setDataField("C3#5")
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
                .setDock("top")
                .setDockOrder(5)
                .setDockMargin({
                    "left" : 0,
                    "top" : -3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("19.733333333333334em")
                .setWidth("13em")
                .setHeight("1.7523809523809524em")
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
            
            host.xui_ui_div655.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput556")
                .setName("Heater 1st")
                .setDataBinder("chdb")
                .setDataField("C3#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.266666666666667em")
                .setTop("9.523809523809524em")
                .setWidth("13em")
                .setLabelSize("8em")
                .setLabelCaption("3.Heater阻值:1<sup>st</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_div655.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput557")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("C3#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("21.561904761904763em")
                .setTop("9.6em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("Ω 2<sup>nd</sup>")
                .setType("input")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.xui_ui_div655.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput558")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("C3#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.323809523809523em")
                .setTop("10.361904761904762em")
                .setWidth("8.5em")
                .setLabelSize("3.5em")
                .setLabelCaption("Ω 交叉")
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
            
            host.xui_ui_div655.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput559")
                .setName("Heater 2nd")
                .setDataBinder("chdb")
                .setDataField("C3#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("23.085714285714285em")
                .setTop("11.123809523809523em")
                .setWidth("8.5em")
                .setLabelSize("3.5em")
                .setLabelCaption("Ω 接地")
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
            
            host.block3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div656")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div656.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox350")
                .setDataBinder("chdb")
                .setDataField("C4")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("26em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("14em")
                .setLabelGap("0em")
                .setLabelCaption("4.Heater 角度/螺絲孔位比對")
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
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div657")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("5.2em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div657.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1103")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("C5")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("5.180952380952381em")
                .setTop("9.142857142857142em")
                .setWidth("50em")
                .setHeight("4em")
                .setLabelSize("4em")
                .setLabelCaption("5.備註")
                .setMaxlength("200")
                .setMultiLines(true)
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block227")
                .setDock("fill")
                .setLeft("12.952380952380953em")
                .setTop("16.761904761904763em"),
                "b"
            );
            
            host.xui_ui_block227.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div819")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("8.380952380952381em")
                .setTop("16.761904761904763em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div819.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox456")
                .setDataBinder("chdb")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("24em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("1.Cylinder 送洗")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_block227.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div820")
                .setDock("top")
                .setDockOrder(6)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameB")
                .setDataBinder("chdb")
                .setDataField("簽名B")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("60.49523809523809em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_xui_ui_input1209_onclick")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateB")
                .setDataBinder("chdb")
                .setDataField("日期B")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.34285714285714em")
                .setTop("60.49523809523809em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.xui_ui_block227.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div821")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div821.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox457")
                .setDataBinder("chdb")
                .setDataField("B2#1")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("24em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("2.清洗後外觀及內部檢查")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div821.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1210")
                .setName("上次故障原因")
                .setDataBinder("chdb")
                .setDataField("B2#2")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("5.180952380952381em")
                .setTop("9.142857142857142em")
                .setMaxlength("200")
            );
            
            host.xui_ui_block227.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div825")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("9.142857142857142em")
                .setTop("17.523809523809526em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.xui_ui_div825.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox460")
                .setDataBinder("chdb")
                .setDataField("B3")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.97142857142857em")
                .setWidth("24em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("3.送修")
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
            utils.updateWorkSheetRepairState(ns.repairNo.getUIValue(), "開始維修");
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
            var cmd = utils.createDDL(ns.dialog, "CylinderHeater維修工單");
            console.log(cmd);
            ns.tabs.setValue("a");
            ns.prevRepairStatus = ns.repairStatus.getUIValue();
            /*
            utils.blockConfirmName(ns.nameA);
            utils.blockConfirmName(ns.nameB);
            utils.blockConfirmName(ns.nameC);
*/
            //utils.updateFinishOutBtnCaption(ns);
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
                    utils.updateNewWorkSheetValue(ns.chdb, newValue);
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
                        utils.showLastWorkSheet(ns,"CylinderHeaterEditForm", "CylinderHeater維修工單", 'Cylinder S/N');
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
            utils.signNameClick(ns.dateA, uictrl, "維修");
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
        _xui_ui_input1209_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateB, uictrl, "維修");
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
            utils.signNameClick(ns.dateC, uictrl, "維修");
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
        _changerepairbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showTableCombo(ns.repairNo,"更換登錄編號");
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