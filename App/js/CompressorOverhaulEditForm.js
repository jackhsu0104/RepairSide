// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CompressorOverhaulEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "Compressor Standard Overhaul",
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
                .setLeft("4.6em")
                .setTop("1.9333333333333333em")
                .setWidth("67.80952380952381em")
                .setHeight("42.666666666666664em")
                .setCaption("Compressor Standard Overhaul零件更換表(維修工單附件)")
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
                .setDataBinder("rdb")
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
                .setDataBinder("rdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("11.352380952380953em")
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
                .setLeft("23.542857142857144em")
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
                        "caption" : "8500/8510 標準保養"
                    },
                    {
                        "id" : "c",
                        "caption" : "9600 標準保養"
                    },
                    {
                        "id" : "d",
                        "caption" : "IS-1000 標準保養",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setDock("fill")
                .setLeft("22.095238095238095em")
                .setTop("17.523809523809526em"),
                "d"
            );
            
            host.block4.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout33")
                .setDock("top")
                .setLeft("19.80952380952381em")
                .setTop("11.428571428571429em")
                .setWidth("65.4em")
                .setHeight("31.066666666666666em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 11,
                    "cols" : 5,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 3,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 10,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 8,
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
                            "manualHeight" : 130
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "A:建議更換",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "B:工程師確認",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "IS-1000 標準保養 (估價金額NT$93,000.-)"
                        },
                        "A2" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C2" : {
                            "value" : "6722303-P3"
                        },
                        "D2" : {
                            "value" : "COIL SOLENOID 24V VALVE @5500"
                        },
                        "A3" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6831285-G6"
                        },
                        "D3" : {
                            "value" : "KIT BYPASS VLV SHAFT & SEAL @8000"
                        },
                        "A4" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6AD1000-IS"
                        },
                        "D4" : {
                            "value" : "KIT ADSORBER IS-1000 COMPRESSOR @ 22000"
                        },
                        "A5" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6CM606524"
                        },
                        "D5" : {
                            "value" : "IS-1000 24V/65W Power supply @3500"
                        },
                        "A6" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C6" : {
                            "value" : "6LL0000"
                        },
                        "D6" : {
                            "value" : "Helium leak check / Job @3000"
                        },
                        "A7" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C7" : {
                            "value" : "6MA1900"
                        },
                        "D7" : {
                            "value" : "Helium Tube major soldering / Job @6000"
                        },
                        "A8" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C8" : {
                            "value" : "6OC0000"
                        },
                        "D8" : {
                            "value" : "Oil charge and lubrication system rework @9000"
                        },
                        "A9" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C9" : {
                            "value" : "6LT0000"
                        },
                        "D9" : {
                            "value" : "Compressor loading test IS-1000/Job @9000"
                        },
                        "A10" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C10" : {
                            "value" : "6PD0000"
                        },
                        "D10" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A11" : {
                            "value" : "其他附註",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div509")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.733333333333333em")
                .setHeight("15.6em"),
                "E3"
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div514")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div514.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button169")
                .setDataBinder("rdb")
                .setDataField("D1")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div515")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div515.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button172")
                .setDataBinder("rdb")
                .setDataField("D2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div516")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div516.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button173")
                .setDataBinder("rdb")
                .setDataField("D3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div517")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div517.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button174")
                .setDataBinder("rdb")
                .setDataField("D4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div518")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div518.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button175")
                .setDataBinder("rdb")
                .setDataField("D5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div519")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div519.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button176")
                .setDataBinder("rdb")
                .setDataField("D6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div520")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div520.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button177")
                .setDataBinder("rdb")
                .setDataField("D7")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div521")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B9"
            );
            
            host.xui_ui_div521.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button178")
                .setDataBinder("rdb")
                .setDataField("D8")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div522")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div522.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button179")
                .setDataBinder("rdb")
                .setDataField("D9")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1297")
                .setName("其他附註D")
                .setDataBinder("rdb")
                .setDataField("其他附註D")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("57.333333333333336em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B11"
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("21.333333333333332em")
                .setTop("14.476190476190476em"),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout28")
                .setDock("top")
                .setLeft("19.80952380952381em")
                .setTop("11.428571428571429em")
                .setWidth("65.4em")
                .setHeight("31.066666666666666em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 9,
                    "cols" : 5,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 3,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 8,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 6,
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
                            "manualHeight" : 130
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "A:建議更換",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "B:工程師確認",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "9600 標準保養 (估價金額NT$75,000.-)"
                        },
                        "A2" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C2" : {
                            "value" : "6722303-P3"
                        },
                        "D2" : {
                            "value" : "COIL SOLENOID 24V VALVE @5500"
                        },
                        "A3" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6831285-G6"
                        },
                        "D3" : {
                            "value" : "KIT BYPASS VLV SHAFT & SEAL @8000"
                        },
                        "A4" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6AD9600"
                        },
                        "D4" : {
                            "value" : "KIT ADSORBER 9600 COMPRESSOR @ 16500"
                        },
                        "A5" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6LL0000"
                        },
                        "D5" : {
                            "value" : "Helium leak check / Job @3000"
                        },
                        "A6" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C6" : {
                            "value" : "6MA1900"
                        },
                        "D6" : {
                            "value" : "Helium Tube major soldering / Job @6000"
                        },
                        "A7" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C7" : {
                            "value" : "6OC0000"
                        },
                        "D7" : {
                            "value" : "Oil charge and lubrication system rework @9000"
                        },
                        "A8" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C8" : {
                            "value" : "6PD0000"
                        },
                        "D8" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A9" : {
                            "value" : "其他附註",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div501")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div501.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button121")
                .setDataBinder("rdb")
                .setDataField("C1")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div502")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div502.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button124")
                .setDataBinder("rdb")
                .setDataField("C2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div503")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div503.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button125")
                .setDataBinder("rdb")
                .setDataField("C3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div504")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div504.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button126")
                .setDataBinder("rdb")
                .setDataField("C4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div505")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div505.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button127")
                .setDataBinder("rdb")
                .setDataField("C5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div506")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div506.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button128")
                .setDataBinder("rdb")
                .setDataField("C6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div507")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.266666666666667em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div507.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button129")
                .setDataBinder("rdb")
                .setDataField("C7")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div508")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.733333333333333em")
                .setHeight("11.666666666666666em"),
                "E3"
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1261")
                .setName("其他附註C")
                .setDataBinder("rdb")
                .setDataField("其他附註C")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("57.333333333333336em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B9"
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("17.523809523809526em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout24")
                .setDock("top")
                .setLeft("19.047619047619047em")
                .setTop("10.666666666666666em")
                .setWidth("65.4em")
                .setHeight("31.066666666666666em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 13,
                    "cols" : 5,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 3,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 12,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 10,
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
                            "manualHeight" : 130
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "A:建議更換",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "B:工程師確認",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "P/N",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "8500/8510 標準保養(估價金額NT$95,200.-)"
                        },
                        "A2" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C2" : {
                            "value" : "6721112-P1*"
                        },
                        "D2" : {
                            "value" : "CKT BRKR 250V 3A SP PNL MT-PB @400"
                        },
                        "A3" : {
                            "value" : "4",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6721112-P2*"
                        },
                        "D3" : {
                            "value" : "CKT BRKR 250V 5A SP PNL MT-PB @400"
                        },
                        "A4" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6808009-KN"
                        },
                        "D4" : {
                            "value" : "KIT COPELAND PUMP VLV REPAIR N @15000"
                        },
                        "A5" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6808009-KU"
                        },
                        "D5" : {
                            "value" : "KIT COPELAND REL/VLV (250PSI) @6800"
                        },
                        "A6" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C6" : {
                            "value" : "6AD8500"
                        },
                        "D6" : {
                            "value" : "KIT ADSORBER 8500/8510 COMPRESSOR @16500"
                        },
                        "A7" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C7" : {
                            "value" : "6LL0000"
                        },
                        "D7" : {
                            "value" : "Helium leak check / Job @3000"
                        },
                        "A8" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C8" : {
                            "value" : "6OC0000"
                        },
                        "D8" : {
                            "value" : "Oil charge and lubrication system rework @9000"
                        },
                        "A9" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C9" : {
                            "value" : "6PB2300"
                        },
                        "D9" : {
                            "value" : "Power Box retrofit / replacement @6000"
                        },
                        "A10" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C10" : {
                            "value" : "6PD0000"
                        },
                        "D10" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A11" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C11" : {
                            "value" : "6721101-P1"
                        },
                        "D11" : {
                            "value" : "CONTACTOR 8500 @6500"
                        },
                        "A12" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C12" : {
                            "value" : "6PB2310"
                        },
                        "D12" : {
                            "value" : "Power wire / connector replacement @3000"
                        },
                        "A13" : {
                            "value" : "其他附註"
                        },
                        "E2" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div453")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div453.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button60")
                .setDataBinder("rdb")
                .setDataField("B2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div454")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div454.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button61")
                .setDataBinder("rdb")
                .setDataField("B3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div455")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button62")
                .setDataBinder("rdb")
                .setDataField("B4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div456")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div456.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button63")
                .setDataBinder("rdb")
                .setDataField("B5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div457")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div457.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button64")
                .setDataBinder("rdb")
                .setDataField("B6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div458")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button65")
                .setDataBinder("rdb")
                .setDataField("B7")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div459")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B9"
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button66")
                .setDataBinder("rdb")
                .setDataField("B8")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div460")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div460.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button67")
                .setDataBinder("rdb")
                .setDataField("B9")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div461")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B11"
            );
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button68")
                .setDataBinder("rdb")
                .setDataField("B10")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div462")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em"),
                "B12"
            );
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_button69")
                .setDataBinder("rdb")
                .setDataField("B11")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setType("getter")
                .setCaption("")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div465")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.533333333333333em")
                .setHeight("19.466666666666665em"),
                "E3"
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1257")
                .setName("其他附註")
                .setDataBinder("rdb")
                .setDataField("其他附註")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.333333333333336em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B13"
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"b1")
                .setName("B2")
                .setDataBinder("rdb")
                .setDataField("B1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.066666666666666em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("getter")
                .setCaption("")
                .onClick("_b1_onclick")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                        "background-color" : "#D2E3EF"
                    }
                }),
                "B2"
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("24.38095238095238em")
                .setTop("11.428571428571429em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1228")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("客戶名稱")
                .setLeft("3.7333333333333334em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1229")
                .setName("登錄編號")
                .setDataBinder("rdb")
                .setDataField("登錄編號")
                .setRequired(true)
                .setLeft("32.76190476190476em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1230")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("ATTN")
                .setLeft("18.285714285714285em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("ATTN")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1231")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("Model")
                .setRequired(true)
                .setLeft("3.7333333333333334em")
                .setTop("3.7333333333333334em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("Model")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1232")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("S/N")
                .setRequired(true)
                .setLeft("18.285714285714285em")
                .setTop("3.7333333333333334em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1233")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("ETM")
                .setLeft("32.76190476190476em")
                .setTop("3.7333333333333334em")
                .setWidth("14.476190476190476em")
                .setLabelSize("5em")
                .setLabelCaption("ETM")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1234")
                .setDataBinder("rdb")
                .setDataField("故障問題簡述")
                .setLeft("0.7333333333333333em")
                .setTop("6.8em")
                .setWidth("30.4em")
                .setHeight("4.876190476190477em")
                .setLabelSize("8em")
                .setLabelCaption("故障問題簡述")
                .setMultiLines(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1235")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("預估金額")
                .setLeft("32.76190476190476em")
                .setTop("6.780952380952381em")
                .setWidth("14.476190476190476em")
                .setLabelSize("5em")
                .setLabelCaption("預估金額")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label186")
                .setLeft("3.0476190476190474em")
                .setTop("13.638095238095238em")
                .setCaption("Remarks:<br>1)Bench檢測後若為標準保養, 請於B欄勾選, 若不是標準保養,則填寫Repair Quotation Sheet<br>2)標準保養A欄為預估報價參考,需視Compressor實際狀況再增減其項目,若與建議更換不符時(A與B數量不同),<br>則請在其他附註欄說明原因.Thanks.<br>3)若標準保養外有其他額外少數零件需更換,工程師請於其他附註欄位填寫並說明,以利秘書報價給客戶")
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
            console.log(utils.createDDL(ns.tabs,"Compressor Standard Overhaul"));
            utils.installConfirmNameButtonOnClick(ns);
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
            ns.tabs.setValue('a');
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
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _b1_onclick:function(profile, e, src, value){
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