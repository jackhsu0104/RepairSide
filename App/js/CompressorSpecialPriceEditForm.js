// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CompressorSpecialPriceEditForm', 'xui.Module',{
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
                .setLeft("6em")
                .setTop("2em")
                .setWidth("67.80952380952381em")
                .setHeight("42.666666666666664em")
                .setCaption("Compressor Heater Fail/ Motor Fail零件更換表(維修工單附件)")
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
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs25")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "8500/8510 Heater Fail"
                    },
                    {
                        "id" : "c",
                        "caption" : "9600 Heater Fail"
                    },
                    {
                        "id" : "d",
                        "caption" : "9600 Motor Fail",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs25.append(
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
                            "value" : "9600 Motor Fail (估價金額NT$264,500.-)"
                        },
                        "E1" : {
                            "value" : "9600 Motor Fail (估價金額NT$264,500.-)"
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
                        "E2" : {
                            "value" : "Bench及秘書簽名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6832490"
                        },
                        "D3" : {
                            "value" : "PUMP ASSY SC REPLACEMENT@87500"
                        },
                        "A4" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6721502-P3"
                        },
                        "D4" : {
                            "value" : "METER ELAPSED TIME 21.6-26.4V @5000"
                        },
                        "A5" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6AD9600"
                        },
                        "D5" : {
                            "value" : "KIT ADSORBER 9600 COMPRESSOR @ 16500"
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
                            "value" : "5",
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
                            "value" : "6",
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
                            "value" : "3",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C9" : {
                            "value" : "6PD0000"
                        },
                        "D9" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A10" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C10" : {
                            "value" : "6WCC001"
                        },
                        "D10" : {
                            "value" : "Cooling circulation major cleaning (8500,9600)@9000"
                        },
                        "A11" : {
                            "value" : "其他附註",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div935")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("10.666666666666666em")
                .setHeight("15.6em"),
                "E3"
            );
            
            host.xui_ui_div935.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button598")
                .setDataBinder("rdb")
                .setDataField("Bench簽名D")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 80,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("Bench簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_div935.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button599")
                .setDataBinder("rdb")
                .setDataField("秘書簽名D")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("秘書簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div936")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div936.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button561")
                .setDataBinder("rdb")
                .setDataField("D1")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div937")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div937.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button562")
                .setDataBinder("rdb")
                .setDataField("D2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div938")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div938.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button563")
                .setDataBinder("rdb")
                .setDataField("D3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div939")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div939.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button564")
                .setDataBinder("rdb")
                .setDataField("D4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div940")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div940.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button565")
                .setDataBinder("rdb")
                .setDataField("D5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div941")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div941.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button566")
                .setDataBinder("rdb")
                .setDataField("D6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div942")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B8"
            );
            
            host.xui_ui_div942.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button567")
                .setDataBinder("rdb")
                .setDataField("D7")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div943")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B9"
            );
            
            host.xui_ui_div943.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button568")
                .setDataBinder("rdb")
                .setDataField("D8")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div944")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B10"
            );
            
            host.xui_ui_div944.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button569")
                .setDataBinder("rdb")
                .setDataField("D9")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setName("B11")
                .setDataBinder("rdb")
                .setDataField("其他附註D")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("58em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B11"
            );
            
            host.xui_ui_tabs25.append(
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
                    "rows" : 8,
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
                            "row" : 7,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 5,
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
                            "value" : "9600 Heater Fail (僅更換heater exchanger估價金額NT$137,000.-)"
                        },
                        "A2" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C2" : {
                            "value" : "6HE0000"
                        },
                        "D2" : {
                            "value" : "HEATER EXCH KIT:9600 @30000"
                        },
                        "E2" : {
                            "value" : "Bench及秘書簽名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6LL0000"
                        },
                        "D3" : {
                            "value" : "Helium leak check / Job @3000"
                        },
                        "A4" : {
                            "value" : "4",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6MA1900"
                        },
                        "D4" : {
                            "value" : "Helium Tube major soldering/Job @6000"
                        },
                        "A5" : {
                            "value" : "4",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6OC0000"
                        },
                        "D5" : {
                            "value" : "Oil charge and lubrication system rework @9000"
                        },
                        "A6" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C6" : {
                            "value" : "\n"
                        },
                        "D6" : {
                            "value" : "Helium Tube 材料 @8000"
                        },
                        "A7" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C7" : {
                            "value" : "6PD0000"
                        },
                        "D7" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A8" : {
                            "value" : "其他附註",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div928")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div928.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button555")
                .setDataBinder("rdb")
                .setDataField("C1")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div929")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div929.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button556")
                .setDataBinder("rdb")
                .setDataField("C2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div930")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div930.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button557")
                .setDataBinder("rdb")
                .setDataField("C3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div931")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div931.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button558")
                .setDataBinder("rdb")
                .setDataField("C4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div932")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div932.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button559")
                .setDataBinder("rdb")
                .setDataField("C5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div933")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.6em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div933.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button560")
                .setDataBinder("rdb")
                .setDataField("C6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div934")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("10.933333333333334em")
                .setHeight("9.733333333333333em"),
                "E3"
            );
            
            host.xui_ui_div934.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button602")
                .setDataBinder("rdb")
                .setDataField("Bench簽名C")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 20,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("Bench簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_div934.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button603")
                .setDataBinder("rdb")
                .setDataField("秘書簽名C")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("秘書簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1261")
                .setName("B9")
                .setDataBinder("rdb")
                .setDataField("其他附註C")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("57.86666666666667em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B8"
            );
            
            host.xui_ui_tabs25.append(
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
                    "rows" : 8,
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
                            "row" : 7,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 5,
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
                            "value" : "8500/8510 Heater Fail (僅更換heater exchanger估價金額NT$175,800.-)"
                        },
                        "A2" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C2" : {
                            "value" : "6808009-KL"
                        },
                        "D2" : {
                            "value" : "KIT HEAT EXCH REPL:8500 @68800"
                        },
                        "E2" : {
                            "value" : "Bench及秘書簽名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "6LL0000"
                        },
                        "D3" : {
                            "value" : "Helium leak check / Job @3000"
                        },
                        "A4" : {
                            "value" : "4",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C4" : {
                            "value" : "6MA1900"
                        },
                        "D4" : {
                            "value" : "Helium Tube major soldering/Job @6000"
                        },
                        "A5" : {
                            "value" : "4",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C5" : {
                            "value" : "6OC0000"
                        },
                        "D5" : {
                            "value" : "Oil charge and lubrication system rework @9000"
                        },
                        "A6" : {
                            "value" : "1",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C6" : {
                            "value" : "\n"
                        },
                        "D6" : {
                            "value" : "Helium Tube 材料 @8000"
                        },
                        "A7" : {
                            "value" : "2",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C7" : {
                            "value" : "6PD0000"
                        },
                        "D7" : {
                            "value" : "Compressor purge and decontamination/ Job @18000"
                        },
                        "A8" : {
                            "value" : "其他附註",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div922")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div922.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button547")
                .setDataBinder("rdb")
                .setDataField("B1")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div923")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div923.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button550")
                .setDataBinder("rdb")
                .setDataField("B2")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div924")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div924.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button551")
                .setDataBinder("rdb")
                .setDataField("B3")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div925")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div925.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button552")
                .setDataBinder("rdb")
                .setDataField("B4")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div926")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B6"
            );
            
            host.xui_ui_div926.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button553")
                .setDataBinder("rdb")
                .setDataField("B5")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div927")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.4em")
                .setHeight("1.8666666666666667em"),
                "B7"
            );
            
            host.xui_ui_div927.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button554")
                .setDataBinder("rdb")
                .setDataField("B6")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
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
                .setHost(host,"xui_ui_div970")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("10.666666666666666em")
                .setHeight("9.733333333333333em"),
                "E3"
            );
            
            host.xui_ui_div970.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button600")
                .setDataBinder("rdb")
                .setDataField("Bench簽名")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 20,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("Bench簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_div970.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button601")
                .setDataBinder("rdb")
                .setDataField("秘書簽名")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setCaption("秘書簽名")
                .setCustomStyle({
                    "BACKGROUND" : {
                        "background-color" : "transparent"
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1175")
                .setName("B8")
                .setDataBinder("rdb")
                .setDataField("其他附註")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("58em")
                .setHeight("8.533333333333333em")
                .setLabelPos("none"),
                "B8"
            );
            
            host.xui_ui_tabs25.append(
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
                .setLeft("0.7619047619047619em")
                .setTop("6.780952380952381em")
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
                .setCaption("Remarks:<br>1)Bench檢測後, 若特殊零件項目報價, 請於B欄勾選, 並交給秘書報價<br>2)Heater fail/ Motor fail 報價為預估報價參考,需視compressor實際狀況再增減其項目 <br>3)若除下列報價項目外有其它額外零件需更換, 工程師請於附註欄填寫並說明,以利秘書報價給客戶")
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
            console.log(utils.createDDL(ns.dialog,"Compressor Heater Fail/ Motor Fail零件更換表"))
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