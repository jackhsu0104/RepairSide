/*************************************************************************************************
 程式代號：RepairSide
 程式名稱：App/js/3phControlerEditForm.js
 系統版本：企業版(for SQL Server)
*************************************************************************************************
 程式版本：1.0
 修改日期：2024/03/02
 修改人員：Jack Hsu
 修改說明：(1). 初始版本
*************************************************************************************************/
xui.Class('App.3phControlerEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "3phControler維修工單",
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
                .setHost(host,"condb")
                .setName("condb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("10.666666666666666em")
                .setTop("1.5238095238095237em")
                .setWidth("62.32380952380952em")
                .setHeight("46.476190476190474em")
                .setCaption("Controller 維修工單 ")
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
                .setDataBinder("condb")
                .setDataField("維修狀態")
                .setAutoTips(false)
                .setLeft("22.8em")
                .setTop("1.0666666666666667em")
                .setWidth("14.133333333333333em")
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
                .setHeight("5.333333333333333em")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input462")
                .setName("客戶名稱")
                .setDataBinder("condb")
                .setDataField("客戶名稱")
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input463")
                .setName("Pump")
                .setDataBinder("condb")
                .setDataField("P/N")
                .setLeft("2.8190476190476192em")
                .setTop("3.0476190476190474em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput290")
                .setName("日期")
                .setDataBinder("condb")
                .setDataField("日期")
                .setLeft("14.476190476190476em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("condb")
                .setDataField("登錄編號")
                .setLeft("27.428571428571427em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox61")
                .setDataBinder("condb")
                .setDataField("Report")
                .setLeft("43.42857142857143em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input465")
                .setName("Pump")
                .setDataBinder("condb")
                .setDataField("S/N")
                .setLeft("14.476190476190476em")
                .setTop("3.0476190476190474em")
                .setWidth("12.866666666666667em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
                .setMaxlength("20")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setLeft("30em")
                .setTop("2.8666666666666667em")
                .setWidth("8.666666666666666em")
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("40.06666666666667em")
                .setTop("2.7333333333333334em")
                .setWidth("8.666666666666666em")
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.xui_ui_div165.append(
                xui.create("xui.UI.Button")
                .setHost(host,"optionBtn")
                .setAutoTips(false)
                .setLeft("49.4em")
                .setTop("2.8666666666666667em")
                .setWidth("9.333333333333334em")
                .setCaption("Option零件更換表")
                .onClick("_optionbtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "檢測數據"
                    },
                    {
                        "id" : "c",
                        "caption" : "Test Data"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("c")
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
                .setHost(host,"xui_ui_div168")
                .setDock("top")
                .setLeft("10.666666666666666em")
                .setTop("9.142857142857142em")
                .setHeight("2.5142857142857142em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div168.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox104")
                .setDataBinder("condb")
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
                        "caption" : "OT",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("26em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.xui_ui_div168.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input476")
                .setName("Remark")
                .setDataBinder("condb")
                .setDataField("Remark")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 3,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("3.580952380952381em")
                .setTop("3.8095238095238093em")
                .setWidth("20em")
                .setHeight("1.980952380952381em")
                .setLabelSize("5em")
                .setLabelCaption("Remark")
                .setLabelVAlign("middle")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div169")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("9.904761904761905em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div169.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input684")
                .setName("上次登錄編號")
                .setDataBinder("condb")
                .setDataField("上次登錄編號")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.1333333333333333em")
                .setTop("4.114285714285714em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div169.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput425")
                .setName("上次登錄時間")
                .setDataBinder("condb")
                .setDataField("上次登錄時間")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("4.114285714285714em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div169.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput426")
                .setName("保固期")
                .setDataBinder("condb")
                .setDataField("保固期")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("39.46666666666667em")
                .setTop("4.114285714285714em")
                .setWidth("19.276190476190475em")
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div173")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("10.666666666666666em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div173.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input687")
                .setName("上次故障原因")
                .setDataBinder("condb")
                .setDataField("上次故障原因")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.1333333333333333em")
                .setTop("6.095238095238095em")
                .setWidth("55em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
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
                .setDataBinder("condb")
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
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.5333333333333333em")
                .setTop("18.20952380952381em")
                .setWidth("17em")
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
            
            host.xui_ui_div174.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input690")
                .setName("上次故障原因")
                .setDataBinder("condb")
                .setDataField("配件是否齊全#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.895238095238095em")
                .setTop("6.857142857142857em")
                .setMaxlength("200")
            );
            
            host.xui_ui_div174.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input691")
                .setName("上次故障原因")
                .setDataBinder("condb")
                .setDataField("Software")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.657142857142857em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setLabelSize("6em")
                .setLabelCaption("Software")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div175")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("12.19047619047619em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div175.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input712")
                .setName("進廠原因")
                .setDataBinder("condb")
                .setDataField("進廠原因")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("6.095238095238095em")
                .setWidth("45em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.block1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div296")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("12.952380952380953em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div296.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input713")
                .setName("進廠原因")
                .setDataBinder("condb")
                .setDataField("故障原因")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("22.095238095238095em")
                .setTop("6.095238095238095em")
                .setWidth("45em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因")
                .setMaxlength("200")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("20.571428571428573em")
                .setTop("9.904761904761905em")
                .setHeight("11.733333333333333em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div328")
                .setDock("top")
                .setDockOrder(5)
                .setLeft("7.619047619047619em")
                .setTop("16em")
                .setHeight("2.5142857142857142em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 6,
                    "right" : 0,
                    "bottom" : 0
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div329")
                .setDock("top")
                .setDockOrder(6)
                .setLeft("8.380952380952381em")
                .setTop("16.761904761904763em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div329.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameB")
                .setDataBinder("condb")
                .setDataField("簽名")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("60.49523809523809em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_nameb_onclick")
            );
            
            host.xui_ui_div329.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateB")
                .setDataBinder("condb")
                .setDataField("簽名日期")
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
            
            host.block2.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout7")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("4.571428571428571em")
                .setWidth("59.93333333333333em")
                .setHeight("8.066666666666666em")
                .setLayoutData({
                    "rows" : 3,
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
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "檢測數據",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "R-S",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "S-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "R-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E1" : {
                            "value" : "220V",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "value" : "24V",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "value" : "Pass/Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A2" : {
                            "value" : "Inverter Power Out",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "Controller Power Out",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div299")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.733333333333333em")
                .setHeight("1.8666666666666667em"),
                "G2"
            );
            
            host.xui_ui_div299.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox208")
                .setDataBinder("condb")
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
                .setLeft("84.57142857142857em")
                .setTop("51.04761904761905em")
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
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div300")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.733333333333333em")
                .setHeight("1.8666666666666667em"),
                "G3"
            );
            
            host.xui_ui_div300.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox209")
                .setDataBinder("condb")
                .setDataField("Test Data Pass#2")
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
                .setLeft("84.57142857142857em")
                .setTop("51.04761904761905em")
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
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input714")
                .setName("B2")
                .setDataBinder("condb")
                .setDataField("B1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input715")
                .setName("C2")
                .setDataBinder("condb")
                .setDataField("B2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C2"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input716")
                .setName("D2")
                .setDataBinder("condb")
                .setDataField("B3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D2"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input717")
                .setName("E2")
                .setDataBinder("condb")
                .setDataField("B4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E2"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input719")
                .setName("F2")
                .setDataBinder("condb")
                .setDataField("B5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "F2"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input720")
                .setName("B3")
                .setDataBinder("condb")
                .setDataField("B6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "B3"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input721")
                .setName("C3")
                .setDataBinder("condb")
                .setDataField("B7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C3"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input722")
                .setName("D3")
                .setDataBinder("condb")
                .setDataField("B8")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D3"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input723")
                .setName("E3")
                .setDataBinder("condb")
                .setDataField("B9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E3"
            );
            
            host.xui_ui_formlayout7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input724")
                .setName("F3")
                .setDataBinder("condb")
                .setDataField("B10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("6.333333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "F3"
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input746")
                .setDataBinder("condb")
                .setDataField("處理方法")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("12.952380952380953em")
                .setWidth("18em")
                .setHeight("5.561904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("處理方法")
                .setMultiLines(true)
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1161")
                .setDataBinder("condb")
                .setDataField("檢測時間起#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("30.476190476190474em")
                .setTop("58.43809523809524em")
                .setWidth("13.714285714285714em")
                .setLabelSize("6.5em")
                .setLabelCaption("測試時間&ensp;起")
            );
            
            host.xui_ui_div411.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1162")
                .setDataBinder("condb")
                .setDataField("訖#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("58.43809523809524em")
                .setWidth("7.314285714285714em")
                .setLabelSize("1.5em")
                .setLabelCaption("訖")
            );
            
            host.xui_ui_div411.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1170")
                .setDataBinder("condb")
                .setDataField("計#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.857142857142854em")
                .setTop("58.43809523809524em")
                .setWidth("7.771428571428571em")
                .setLabelSize("1.5em")
                .setLabelCaption("計")
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
                .setDataBinder("condb")
                .setDataField("簽名#2")
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
                .setDataBinder("condb")
                .setDataField("簽名日期#2")
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
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout13")
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("5.333333333333333em")
                .setWidth("59.93333333333333em")
                .setHeight("29.666666666666668em")
                .setLayoutData({
                    "rows" : 8,
                    "cols" : 7,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 0,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 5,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 5,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 5,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 0,
                            "rowspan" : 2,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 7,
                            "removed" : false
                        },
                        {
                            "row" : 7,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 7,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 4,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 2,
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
                            "manualHeight" : 100
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
                            "manualHeight" : 100
                        }
                    },
                    "cells" : {
                        "C1" : {
                            "value" : "R-S",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "S-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E1" : {
                            "value" : "R-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A2" : {
                            "value" : "Inverter",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B2" : {
                            "value" : "Power In",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B3" : {
                            "value" : "Power Out",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "R-S",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D5" : {
                            "value" : "S-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E5" : {
                            "value" : "R-T",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F5" : {
                            "value" : "220V",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G5" : {
                            "value" : "24V",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A6" : {
                            "value" : "Inverter",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B6" : {
                            "value" : "Power In",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B7" : {
                            "value" : "Power Out",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A1" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
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
                        "A3" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B5" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div349")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("59.8em")
                .setHeight("6.533333333333333em"),
                "A4"
            );
            
            host.xui_ui_div349.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input953")
                .setDataBinder("condb")
                .setDataField("Remark")
                .setDock("fill")
                .setLeft("6.857142857142857em")
                .setTop("2.2857142857142856em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Remark")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div350")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("59.8em")
                .setHeight("6.533333333333333em"),
                "A8"
            );
            
            host.xui_ui_div350.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input960")
                .setDataBinder("condb")
                .setDataField("Remark#2")
                .setDock("fill")
                .setLeft("7.619047619047619em")
                .setTop("3.0476190476190474em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Remark")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input927")
                .setName("C2")
                .setDataBinder("condb")
                .setDataField("C1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C2"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input928")
                .setName("D2")
                .setDataBinder("condb")
                .setDataField("C2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D2"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input929")
                .setName("E2")
                .setDataBinder("condb")
                .setDataField("C3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E2"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input932")
                .setName("C3")
                .setDataBinder("condb")
                .setDataField("C4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C3"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input933")
                .setName("D3")
                .setDataBinder("condb")
                .setDataField("C5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D3"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input934")
                .setName("E3")
                .setDataBinder("condb")
                .setDataField("C6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E3"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input936")
                .setName("C6")
                .setDataBinder("condb")
                .setDataField("C7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input937")
                .setName("C7")
                .setDataBinder("condb")
                .setDataField("C12")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "C7"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input938")
                .setName("D6")
                .setDataBinder("condb")
                .setDataField("C8")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D6"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input939")
                .setName("D7")
                .setDataBinder("condb")
                .setDataField("C13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "D7"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input942")
                .setName("E6")
                .setDataBinder("condb")
                .setDataField("C9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E6"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input943")
                .setName("E7")
                .setDataBinder("condb")
                .setDataField("C14")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "E7"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input944")
                .setName("F6")
                .setDataBinder("condb")
                .setDataField("C10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "F6"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input945")
                .setName("F7")
                .setDataBinder("condb")
                .setDataField("C15")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.8em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "F7"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input946")
                .setName("G6")
                .setDataBinder("condb")
                .setDataField("C11")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.933333333333334em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "G6"
            );
            
            host.xui_ui_formlayout13.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input951")
                .setName("G7")
                .setDataBinder("condb")
                .setDataField("C16")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.933333333333334em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none"),
                "G7"
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
            utils.updateRepairFinishDate(ns,ns.condb);
            utils.writeRepairStatus(ns);
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
            var cmd = utils.createDDL(ns.dialog, "3phControler維修工單");
            console.log(cmd);
            ns.tabs.setValue("a");
           // utils.updateFinishOutBtnCaption(ns);
            ns.prevRepairStatus = ns.repairStatus.getUIValue();
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
                    utils.updateNewWorkSheetValue(ns.condb, newValue);
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
                        utils.signNameClick(ns.dateB, uictrl, "維修");
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
        _optionbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showRepairOptionForm(ns.condb);
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