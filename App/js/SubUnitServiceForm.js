// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.SubUnitServiceForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "子表單號",
            "tableName" : "UnitServiceForm子表",
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
                .setHost(host,"udb2")
                .setName("udb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("55.333333333333336em")
                .setHeight("36.4em")
                .setCaption("Unit Server Form項目")
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
                .setHost(host,"confirmBtn")
                .setDataBinder("opdb")
                .setDataField("秘書確認")
                .setLeft("0.7619047619047619em")
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
                .setHost(host,"xui_ui_div1114")
                .setLeft("8.666666666666666em")
                .setTop("57.44761904761905em")
                .setHeight("2.3333333333333335em")
            );
            
            host.form.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"layout")
                .setLeft("4em")
                .setTop("14.6em")
                .setWidth("41.2952380952381em")
                .setHeight("37.02857142857143em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 7,
                    "cols" : 3,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 2,
                            "rowspan" : 3,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 5,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        },
                        {
                            "row" : 6,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        }
                    ],
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 35
                        },
                        "2" : {
                            "manualHeight" : 35
                        },
                        "3" : {
                            "manualHeight" : 35
                        },
                        "4" : {
                            "manualHeight" : 35
                        },
                        "5" : {
                            "manualHeight" : 35
                        },
                        "6" : {
                            "manualHeight" : 200
                        },
                        "7" : {
                            "manualHeight" : 80
                        }
                    },
                    "colSetting" : {
                        "A" : {
                            "manualWidth" : 50
                        },
                        "B" : {
                            "manualWidth" : 150
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "OUT",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "服務內容勾選",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A2" : {
                            "value" : "Mfr.",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "Model",
                            "style" : {
                                "textAlign" : "center",
                                "color" : "red"
                            }
                        },
                        "A4" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center",
                                "color" : "red"
                            }
                        },
                        "A5" : {
                            "value" : "S/N",
                            "style" : {
                                "textAlign" : "center",
                                "color" : "red"
                            }
                        }
                    }
                })
                .setOverflow("hidden")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1048")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.352380952380953em")
                .setHeight("2.5904761904761906em"),
                "B1"
            );
            
            host.xui_ui_div1048.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2747")
                .setDataBinder("udb2")
                .setDataField("日期")
                .setDock("fill")
                .setLeft("2.6666666666666665em")
                .setTop("0.6666666666666666em")
                .setWidth("18em")
                .setLabelSize("3em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1049")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("25.98095238095238em")
                .setHeight("2.5904761904761906em")
                .setOverflow("hidden"),
                "C5"
            );
            
            host.xui_ui_div1049.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1246")
                .setDataBinder("udb2")
                .setDataField("自修/委外")
                .setItems([
                    {
                        "id" : "自修",
                        "caption" : "自修",
                        "imageClass" : ""
                    },
                    {
                        "id" : "委外",
                        "caption" : "委外廠商:",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.761904761904763em")
                .setTop("10.666666666666666em")
                .setWidth("13.5em")
                .setHeight("1.980952380952381em")
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
            
            host.xui_ui_div1049.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2812")
                .setDataBinder("udb2")
                .setDataField("委外廠商")
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("13.333333333333334em")
                .setTop("-0.06666666666666667em")
                .setWidth("8em")
                .setType("popbox")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1062")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("25.98095238095238em")
                .setHeight("7.847619047619047em"),
                "C2"
            );
            
            host.xui_ui_div1062.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1264")
                .setDataBinder("db")
                .setDataField("服務內容")
                .setItems([
                    {
                        "id" : "Cryo",
                        "caption" : "Cryo",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Robot",
                        "caption" : "Robot",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Controler",
                        "caption" : "Controler"
                    },
                    {
                        "id" : "Aligner",
                        "caption" : "Aligner"
                    },
                    {
                        "id" : "Chiller",
                        "caption" : "Chiller"
                    },
                    {
                        "id" : "Gauge",
                        "caption" : "Gauge"
                    },
                    {
                        "id" : "Gate Valve",
                        "caption" : "Gate Valve"
                    },
                    {
                        "id" : "Dry Pump",
                        "caption" : "Dry Pump"
                    },
                    {
                        "id" : "Others",
                        "caption" : "Others"
                    }
                ])
                .setDock("fill")
                .setLeft("8.761904761904763em")
                .setTop("12.723809523809523em")
                .setWidth("34.666666666666664em")
                .setHeight("1.980952380952381em")
                .setSelMode("multi")
                .setLabelPos("top")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1071")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("41.142857142857146em")
                .setHeight("15.085714285714285em"),
                "A6"
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4779")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("ID#")
                .setLeft("0em")
                .setTop("0.6em")
                .setWidth("9.82857142857143em")
                .setLabelSize("4em")
                .setLabelCaption("ID#C")
                .setMaxlength("32")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4780")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("Robot#")
                .setLeft("9.333333333333334em")
                .setTop("0.6em")
                .setLabelSize("5em")
                .setLabelCaption("Robot#R")
                .setMaxlength("32")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox553")
                .setDataBinder("udb2")
                .setDataField("CIC Warranty")
                .setLeft("20em")
                .setTop("0.6666666666666666em")
                .setWidth("14.666666666666666em")
                .setHeight("1.2666666666666666em")
                .setCaption("CIC Warranty,更換前之S/N:")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4797")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("之前S/N")
                .setLeft("34.666666666666664em")
                .setTop("0.6em")
                .setWidth("6em")
                .setLabelCaption("Robot#R")
                .setMaxlength("32")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setDataBinder("udb2")
                .setDataField("登錄編號")
                .setLeft("-0.9904761904761905em")
                .setTop("2.6em")
                .setWidth("15.466666666666667em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_repairno_onclick")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1295")
                .setDataBinder("udb2")
                .setDataField("客戶付費")
                .setItems([
                    {
                        "id" : "客戶付費",
                        "caption" : "客戶付費",
                        "imageClass" : ""
                    },
                    {
                        "id" : "客戶免付費",
                        "caption" : "客戶免付費",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("15.923809523809524em")
                .setTop("2.466666666666667em")
                .setWidth("16.866666666666667em")
                .setHeight("1.980952380952381em")
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
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1296")
                .setDataBinder("udb2")
                .setDataField("保固期")
                .setItems([
                    {
                        "id" : "一年",
                        "caption" : "一年",
                        "imageClass" : ""
                    },
                    {
                        "id" : "其他",
                        "caption" : "其他",
                        "imageClass" : ""
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("0em")
                .setTop("4.6em")
                .setWidth("15.6em")
                .setHeight("1.980952380952381em")
                .setLabelSize("4em")
                .setLabelCaption("保固期")
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
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4799")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("保固期其他")
                .setLeft("14.666666666666666em")
                .setTop("4.933333333333334em")
                .setWidth("7.333333333333333em")
                .setLabelCaption("Robot#R")
                .setMaxlength("32")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1304")
                .setDataBinder("udb2")
                .setDataField("Process")
                .setItems([
                    {
                        "id" : "PVD",
                        "caption" : "PVD",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Implanter",
                        "caption" : "Implanter",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other"
                    }
                ])
                .setDockStretch("fixed")
                .setLeft("0em")
                .setTop("6.6em")
                .setWidth("23em")
                .setHeight("1.980952380952381em")
                .setLabelSize("4em")
                .setLabelCaption("Process")
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
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4811")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("System ID")
                .setLeft("-0.8em")
                .setTop("9.266666666666667em")
                .setWidth("12.866666666666667em")
                .setLabelSize("7em")
                .setLabelCaption("System ID")
                .setMaxlength("32")
            );
            
            host.xui_ui_div1071.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4824")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("Chamber ID")
                .setLeft("12.666666666666666em")
                .setTop("9.266666666666667em")
                .setWidth("12.866666666666667em")
                .setLabelSize("7em")
                .setLabelCaption("Chamber ID")
                .setMaxlength("32")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1072")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("41.142857142857146em")
                .setHeight("5.942857142857143em"),
                "A7"
            );
            
            host.xui_ui_div1072.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4758")
                .setDataBinder("udb2")
                .setDataField("Remark")
                .setDock("fill")
                .setLeft("2.6666666666666665em")
                .setTop("1.3333333333333333em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Remark")
                .setMultiLines(true)
            );
            
            host.layout.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4721")
                .setName("B2")
                .setDataBinder("udb2")
                .setDataField("Mfr")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.352380952380953em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.layout.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"model")
                .setName("B3")
                .setDataBinder("udb2")
                .setDataField("Model")
                .setRequired(true)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.352380952380953em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("none")
                .setType("popbox"),
                "B3"
            );
            
            host.layout.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"pn")
                .setName("B4")
                .setDataBinder("udb2")
                .setDataField("P/N")
                .setRequired(true)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.352380952380953em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("none")
                .setType("popbox"),
                "B4"
            );
            
            host.layout.append(
                xui.create("xui.UI.Input")
                .setHost(host,"sn")
                .setName("B5")
                .setDataBinder("udb2")
                .setDataField("S/N")
                .setRequired(true)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("11.352380952380953em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("none"),
                "B5"
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"id")
                .setName("子表單號")
                .setDataBinder("udb2")
                .setDataField("子表單號")
                .setReadonly(true)
                .setLeft("4em")
                .setTop("2em")
                .setWidth("18em")
                .setPlaceholder("儲存後產生")
                .setLabelSize("8em")
                .setLabelCaption("子表單號")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input76")
                .setName("總表單號")
                .setDataBinder("udb2")
                .setDataField("總表單號")
                .setLeft("2em")
                .setTop("9.142857142857142em")
                .setWidth("18em")
                .setVisibility("hidden")
                .setLabelSize("8em")
                .setLabelCaption("總表單號")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"companyID")
                .setName("公司編號")
                .setDataBinder("udb2")
                .setDataField("公司編號")
                .setRequired(true)
                .setLeft("4em")
                .setTop("4.114285714285714em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("公司編號")
                .setType("popbox")
                .setMaxlength("32")
                .onValueChange("_companyid_onvaluechange")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2710")
                .setName("Model")
                .setDataBinder("udb2")
                .setDataField("End User")
                .setLeft("22.78095238095238em")
                .setTop("2.066666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("End User")
                .setType("popbox")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2711")
                .setName("P/N")
                .setDataBinder("udb2")
                .setDataField("Tel")
                .setLeft("22.857142857142858em")
                .setTop("8.152380952380952em")
                .setWidth("18em")
                .setHeight("1.7523809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("Tel/Ext")
                .setType("popbox")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1242")
                .setDataBinder("udb2")
                .setDataField("單別")
                .setItems([
                    {
                        "id" : "901",
                        "caption" : "901",
                        "imageClass" : ""
                    },
                    {
                        "id" : "903",
                        "caption" : "903",
                        "imageClass" : ""
                    }
                ])
                .setLeft("8em")
                .setTop("9.933333333333334em")
                .setWidth("14.2em")
                .setHeight("1.980952380952381em")
                .setLabelSize("3em")
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
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1243")
                .setDataBinder("udb2")
                .setDataField("Type")
                .setItems([
                    {
                        "id" : "Exchange",
                        "caption" : "Exchange",
                        "imageClass" : ""
                    },
                    {
                        "id" : "暫借",
                        "caption" : "暫借",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Demo",
                        "caption" : "Demo"
                    },
                    {
                        "id" : "Repair",
                        "caption" : "Repair"
                    },
                    {
                        "id" : "Test",
                        "caption" : "Test"
                    },
                    {
                        "id" : "Upgrade",
                        "caption" : "Upgrade"
                    }
                ])
                .setLeft("8em")
                .setTop("11.933333333333334em")
                .setWidth("34.666666666666664em")
                .setHeight("1.980952380952381em")
                .setLabelSize("3em")
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
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4825")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("出貨單號")
                .setLeft("0em")
                .setTop("53.333333333333336em")
                .setWidth("13.333333333333334em")
                .setLabelSize("6em")
                .setLabelCaption("出貨單NO")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3013")
                .setDataBinder("udb2")
                .setDataField("發票日期")
                .setLeft("13.333333333333334em")
                .setTop("53.48571428571429em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("發票日")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4826")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("No")
                .setLeft("27.333333333333332em")
                .setTop("53.48571428571429em")
                .setWidth("8.266666666666667em")
                .setLabelSize("1.5em")
                .setLabelCaption("No")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3020")
                .setDataBinder("udb2")
                .setDataField("金額")
                .setLeft("36em")
                .setTop("53.48571428571429em")
                .setLabelSize("3em")
                .setLabelCaption("金額")
                .setType("currency")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox558")
                .setDataBinder("udb2")
                .setDataField("直接出貨")
                .setLeft("1.3333333333333333em")
                .setTop("55.46666666666667em")
                .setWidth("17.466666666666665em")
                .setCaption("未經庫房，維修部直接出貨")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4842")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("Request By")
                .setLeft("0em")
                .setTop("57.44761904761905em")
                .setWidth("12.666666666666666em")
                .setLabelSize("6em")
                .setLabelCaption("Request By")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4843")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("Prepare By")
                .setLeft("12.666666666666666em")
                .setTop("57.44761904761905em")
                .setWidth("12em")
                .setLabelSize("6em")
                .setLabelCaption("Prepare By")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm2")
                .setDataBinder("udb2")
                .setDataField("秘書確認")
                .setLeft("25.333333333333332em")
                .setTop("57.44761904761905em")
                .setWidth("12em")
                .setLabelSize("6em")
                .setLabelCaption("Confirm By")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_confirm2_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input4845")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("Invoiced By")
                .setLeft("37.333333333333336em")
                .setTop("57.44761904761905em")
                .setWidth("11.333333333333334em")
                .setLabelSize("6em")
                .setLabelCaption("Invoiced By")
                .setType("getter")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"cn")
                .setName("S/N")
                .setDataBinder("udb2")
                .setDataField("CN#")
                .setLeft("4em")
                .setTop("8.2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CN#")
                .setType("getter")
                .setMaxlength("32")
                .onClick("_cn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"workid")
                .setName("工號")
                .setDataBinder("udb2")
                .setDataField("工號")
                .setIsFormField(false)
                .setShowDirtyMark(false)
                .setTips("按右側按鈕產生新工號及登錄編號")
                .setLeft("22.933333333333334em")
                .setTop("10.133333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("工號")
                .setType("getter")
                .setMaxlength("20")
                .onClick("_workid_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"contactID")
                .setName("連絡人代號")
                .setDataBinder("udb2")
                .setDataField("連絡人代號")
                .setRequired(true)
                .setLeft("22.857142857142858em")
                .setTop("4.114285714285714em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("連絡人代號")
                .setType("popbox")
                .setMaxlength("32")
                .onValueChange("_contract_onvaluechange")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"companyName")
                .setName("公司名稱")
                .setDataBinder("udb2")
                .setDataField("公司名稱")
                .setLeft("2em")
                .setTop("6.095238095238095em")
                .setWidth("20em")
                .setLabelSize("10em")
                .setLabelCaption("Customer")
                .setType("input")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"userName")
                .setName("User Name")
                .setDataBinder("udb2")
                .setDataField("User Name")
                .setLeft("22.857142857142858em")
                .setTop("6.095238095238095em")
                .setWidth("18.057142857142857em")
                .setLabelSize("8em")
                .setLabelCaption("User Name")
                .setType("input")
                .setMaxlength("32")
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
            if(prop.mode.includes("new"))
                ns.newWorkRepair();
        },
        newWorkRepair: function(){
            var ns = this;
            var item = {"客戶名稱":ns.companyName.getValue(),"CompanyID":ns.companyID.getValue(), "產品機型": ns.model.getValue(),"P/N":ns.pn.getValue(), "S/N":ns.sn.getValue(),
                                   "登錄人":LoginUser.DisplayName, "工號日期":utils.today(), "ContactID":ns.contactID.getUIValue(), "連絡人":ns.userName.getUIValue()};
                       //utils.showDataPage("WorkEditForm",item,"newExchange",null, onclose);
            item = utils.insertTableItem("工號登錄總資料表",item);
            item = item.item;
            ns.workid.setValue(item["工號"]);
            
            
            var ritem = {"In Model": ns.model.getValue(),"In P/N":ns.pn.getValue(), "In S/N":ns.sn.getValue(), "工號":item["工號"], "type":"E",
                         "客戶名稱":item["客戶名稱"]};
            var lastR = utils.getItemValue("CTI Control Number總資料庫","Out S/N", ns.sn.getValue(), "*", true);
            if(lastR != "")
            {
              lastR = lastR[lastR.length-1];  //the last one
              ritem["上次登錄編號"] = lastR["登錄編號"];
              ritem["上次Pump出廠CN"] = lastR["CN#"];
              ritem["上次CN保固截止日期"] = lastR["保固期限"];
            }
            
            
            ritem = utils.insertTableItem("CTI Control Number總資料庫",ritem);
            ritem = ritem.item;
            ns.repairNo.setValue(ritem["登錄編號"]);
            utils.modifyTableItem("UnitServiceForm子表","子表單號",{"子表單號":ns.id.getValue(),"工號":item["工號"], "登錄編號":ritem["登錄編號"]});
        },
        newRepairNo: function(){
            var ns = this;
            
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
            ns.workid.setCaption(ns.workid.getValue());
            console.log(utils.createDDL(ns.dialog, "UnitServiceForm子表"));
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
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
                _workid_onclick:function(profile, e, src, value, n){
                    var ns = this, uictrl = profile.boxing();
                    if(ns.id.getValue() == "")
                    {
                        xui.alert("請先儲存取得單號!")
                        return;        
                    }
                    var workid = ns.workid.getValue();
                    if(workid != "")
                    {
                       var item = utils.getItemValue("工號登錄總資料表","工號",workid);
                       utils.showDataPage("WorkEditForm",item,"editExchange");
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
        _companyid_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            utils.setFieldValue(uictrl, ns.companyName);
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
        _cn_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
                    if(ns.cn.getUIValue() == "")
                    {
                      var cb = function(data){
                        ns.cn.setValue(data["CN#"]);
                      }  
                      var repairNo = ns.repairNo.getUIValue();
                        
                      if(repairNo != "")
                      {    
                        utils.newCnNumber(repairNo, cb);
                      }
                      else 
                        xui.alert("請輸入登錄編號!")  
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
        _confirmbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.confirmBtnClick(ns,uictrl);
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
         * Fired when control's inner value is changed!
         * @method onValueChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue ,  old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _contract_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            utils.setFieldValue(uictrl, ns.userName);            
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
                    if(ns.id.getValue() == "")
                    {
                        xui.alert("請先儲存取得單號!")
                        return;        
                    }
                    var id = ns.repairNo.getValue();
                    if(id != "")
                    {
                       var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號",id);
                       if(item != "") 
                         utils.showDataPage("RepairEditForm",item,"editExchange");
                       else 
                       xui.alert("登錄編號不存在！");     
                    }
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