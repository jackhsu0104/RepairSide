// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.3phControlerEditForm', 'xui.Module',{
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
                .setLeft("10.666666666666666em")
                .setTop("1.5238095238095237em")
                .setWidth("62.32380952380952em")
                .setHeight("46.476190476190474em")
                .setCaption("  3ph Controller 維修工單 ")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("S/N")
                .setLeft("14.476190476190476em")
                .setTop("3.0476190476190474em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs6")
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
                .setValue("a")
            );
            
            host.xui_ui_tabs6.append(
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
                .setDataBinder("rdb")
                .setDataField("Pump")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("上次故障原因")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("2.1333333333333333em")
                .setTop("6.095238095238095em")
                .setWidth("18em")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
            
            host.xui_ui_tabs6.append(
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
            
            host.xui_ui_div328.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input863")
                .setDataBinder("rdb")
                .setDataField("檢測時間起#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("30.476190476190474em")
                .setTop("58.43809523809524em")
                .setWidth("13.714285714285714em")
                .setLabelSize("6.5em")
                .setLabelCaption("維修時間&ensp;起")
            );
            
            host.xui_ui_div328.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input864")
                .setDataBinder("rdb")
                .setDataField("訖#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("58.43809523809524em")
                .setWidth("7.314285714285714em")
                .setLabelSize("1.5em")
                .setLabelCaption("訖")
            );
            
            host.xui_ui_div328.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input865")
                .setDataBinder("rdb")
                .setDataField("計#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.857142857142854em")
                .setTop("58.43809523809524em")
                .setWidth("7.771428571428571em")
                .setLabelSize("1.5em")
                .setLabelCaption("計")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input870")
                .setDataBinder("rdb")
                .setDataField("簽名")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("60.49523809523809em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
            );
            
            host.xui_ui_div329.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input871")
                .setDataBinder("rdb")
                .setDataField("簽名日期")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
            
            host.xui_ui_tabs6.append(
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1171")
                .setDataBinder("rdb")
                .setDataField("簽名#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("35.352380952380955em")
                .setTop("60.49523809523809em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
            );
            
            host.xui_ui_div412.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input1172")
                .setDataBinder("rdb")
                .setDataField("簽名日期#2")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
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
                    utils.updateNewWorkSheetValue(ns.rdb, newValue);
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