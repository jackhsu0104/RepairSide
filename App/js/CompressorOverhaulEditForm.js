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
                .setHost(host,"db")
                .setName("db")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("9.904761904761905em")
                .setTop("4.571428571428571em")
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
                .setValue("d")
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
                .setWidth("65.14285714285714em")
                .setHeight("31.085714285714285em")
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
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout33.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1297")
                .setName("B11")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.68571428571428em")
                .setHeight("9.752380952380953em")
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
                .setWidth("63.61904761904762em")
                .setHeight("31.085714285714285em")
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
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout28.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1261")
                .setName("B9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.53333333333333em")
                .setHeight("9.752380952380953em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B9"
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
                .setWidth("63.61904761904762em")
                .setHeight("31.085714285714285em")
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
                        "E2" : {
                            "value" : "Bench及秘書簽名",
                            "style" : {
                                "textAlign" : "center"
                            }
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
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout24.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1257")
                .setName("B13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("55.31428571428572em")
                .setHeight("9.752380952380953em")
                .setLabelPos("none")
                .setMultiLines(true),
                "B13"
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
                .setDataField("客戶名稱")
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
                .setDataField("客戶名稱")
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
                .setDataField("客戶名稱")
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
                .setDataField("客戶名稱")
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
                .setDataField("客戶名稱")
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