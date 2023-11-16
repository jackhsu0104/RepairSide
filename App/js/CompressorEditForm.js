// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CompressorEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "Compressor維修工單",
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
                .setHost(host,"comdb")
                .setName("comdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("3.3333333333333335em")
                .setTop("3.0476190476190474em")
                .setWidth("66.66666666666667em")
                .setHeight("45.56190476190476em")
                .setCaption("Compressor維修工單")
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
                .setHost(host,"reportBtn")
                .setAutoTips(false)
                .setLeft("16.666666666666668em")
                .setTop("0.8666666666666667em")
                .setWidth("10.333333333333334em")
                .setCaption("產生測試報告")
                .onClick("_reportbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairStatus")
                .setDataBinder("comdb")
                .setDataField("維修狀態")
                .setAutoTips(false)
                .setLeft("27.933333333333334em")
                .setTop("1.0666666666666667em")
                .setWidth("12.866666666666667em")
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
                .setCustomStyle({
                    "FRAME" : {
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div571")
                .setDock("top")
                .setLeft("10.133333333333333em")
                .setTop("3.4285714285714284em")
                .setHeight("8.6em")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input463")
                .setName("客戶名稱")
                .setDataBinder("comdb")
                .setDataField("客戶名稱")
                .setLeft("0.6666666666666666em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input464")
                .setName("Model")
                .setDataBinder("comdb")
                .setDataField("Model")
                .setLeft("26em")
                .setTop("0.6em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("型號")
                .setMaxlength("20")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput513")
                .setName("日期")
                .setDataBinder("comdb")
                .setDataField("日期")
                .setLeft("13.333333333333334em")
                .setTop("0.7333333333333333em")
                .setWidth("11.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox117")
                .setDataBinder("comdb")
                .setDataField("Report")
                .setLeft("53.333333333333336em")
                .setTop("0.7619047619047619em")
                .setWidth("6.780952380952381em")
                .setCaption("Report")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Button")
                .setHost(host,"quotationBtn")
                .setLeft("1.3333333333333333em")
                .setTop("3.2666666666666666em")
                .setWidth("17.333333333333332em")
                .setHeight("2em")
                .setCaption("Compressor Repair Quotation Sheet")
                .onClick("_quotationbtn_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Button")
                .setHost(host,"lastWorkSheetBtn")
                .setLeft("54em")
                .setTop("3.3333333333333335em")
                .setWidth("10em")
                .setHeight("2em")
                .setCaption("上次維修工單")
                .onClick("_lastworksheetbtn_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Button")
                .setHost(host,"pickingBtn")
                .setAutoTips(false)
                .setLeft("20em")
                .setTop("3.2666666666666666em")
                .setWidth("8.666666666666666em")
                .setCaption("領料報工單")
                .setType("drop")
                .onClick("_pickingbtn_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput1757")
                .setName("登錄編號")
                .setDataBinder("comdb")
                .setDataField("上次登錄編號")
                .setReadonly(true)
                .setLeft("37.53333333333333em")
                .setTop("3.466666666666667em")
                .setWidth("15.066666666666666em")
                .setLabelSize("6.5em")
                .setLabelCaption("上次登錄編號")
                .setType("getter")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
                .onClick("_repairno_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Button")
                .setHost(host,"changeRepairBtn")
                .setTips("更換登錄編號")
                .setLeft("50.86666666666667em")
                .setTop("0.6em")
                .setCaption("▼")
                .onClick("_changerepairbtn_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3455")
                .setName("Compressor P/N")
                .setDataBinder("comdb")
                .setDataField("Compressor P/N")
                .setLeft("0.8em")
                .setTop("5.866666666666666em")
                .setWidth("14.533333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Compressor P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3458")
                .setName("Compressor P/N")
                .setDataBinder("comdb")
                .setDataField("Compressor P/N")
                .setLeft("16em")
                .setTop("5.933333333333334em")
                .setWidth("14.533333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Compressor S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.Button")
                .setHost(host,"repairBtn")
                .setLeft("29.333333333333332em")
                .setTop("3.2666666666666666em")
                .setWidth("7.333333333333333em")
                .setHeight("2em")
                .setCaption("維修委託單")
                .onClick("_repairbtn_onclick")
            );
            
            host.xui_ui_div571.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("comdb")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setLeft("37.2em")
                .setTop("0.7333333333333333em")
                .setWidth("12.8em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("input")
                .setMaxlength("20")
                .onValueChange("_repairno_onvaluechange")
                .onClick("_repairno_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料登錄",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "A.回廠初步檢測"
                    },
                    {
                        "id" : "c",
                        "caption" : "B.維修過程及紀錄"
                    },
                    {
                        "id" : "d",
                        "caption" : "C. Compressor Test Data"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("c")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block246")
                .setDock("fill")
                .setLeft("11.428571428571429em")
                .setTop("14.095238095238095em"),
                "a"
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input495")
                .setDataBinder("comdb")
                .setDataField("上次登錄編號")
                .setLeft("1.3333333333333333em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput534")
                .setName("上次登錄時間")
                .setDataBinder("comdb")
                .setDataField("上次登錄時間")
                .setLeft("21.333333333333332em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次維修時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input497")
                .setName("上次故障原因")
                .setDataBinder("comdb")
                .setDataField("上次故障原因")
                .setLeft("1.3333333333333333em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input498")
                .setName("進廠原因")
                .setDataBinder("comdb")
                .setDataField("進廠原因")
                .setLeft("1.2em")
                .setTop("14.733333333333333em")
                .setWidth("38em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input499")
                .setName("Compressor P/N")
                .setDataBinder("comdb")
                .setDataField("Compressor P/N")
                .setLeft("-2.8em")
                .setTop("7.542857142857143em")
                .setWidth("22.133333333333333em")
                .setLabelSize("12em")
                .setLabelCaption("Compressor P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input500")
                .setName("Compressor S/N")
                .setDataBinder("comdb")
                .setDataField("Compressor S/N")
                .setLeft("1.3333333333333333em")
                .setTop("9.933333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Compressor S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input508")
                .setName("Pump/Module ETM")
                .setDataBinder("comdb")
                .setDataField("Compressor ETM")
                .setLeft("-2.8190476190476192em")
                .setTop("12.6em")
                .setWidth("22.323809523809523em")
                .setLabelSize("12em")
                .setLabelCaption("Compressor ETM")
                .setMaxlength("200")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox270")
                .setDataBinder("comdb")
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
                .setLeft("1.9333333333333333em")
                .setTop("0.6em")
                .setWidth("30.2em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setValue("a")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2415")
                .setLeft("19.8em")
                .setTop("12.8em")
                .setCaption("hrs")
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input511")
                .setName("Pump S/N")
                .setDataBinder("comdb")
                .setDataField("附屬配件")
                .setLeft("21.333333333333332em")
                .setTop("7.533333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("附屬配件")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    }
                ])
            );
            
            host.xui_ui_block246.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input509")
                .setName("特殊零件")
                .setDataBinder("comdb")
                .setDataField("特殊零件")
                .setLeft("21.333333333333332em")
                .setTop("9.866666666666667em")
                .setWidth("17.98095238095238em")
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
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("14.476190476190476em")
                .setTop("10.666666666666666em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input545")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A1#1")
                .setLeft("3.8095238095238093em")
                .setTop("1.0666666666666667em")
                .setWidth("16.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("1.靜態壓")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox144")
                .setDataBinder("comdb")
                .setDataField("A1#2")
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
                .setLeft("22.857142857142858em")
                .setTop("0.6857142857142857em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label105")
                .setLeft("21.333333333333332em")
                .setTop("1.3714285714285714em")
                .setCaption("psi")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input571")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A2#1")
                .setLeft("3.8095238095238093em")
                .setTop("3.3523809523809525em")
                .setWidth("22.2em")
                .setLabelSize("10em")
                .setLabelCaption("2.Helium Leak Check")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox147")
                .setDataBinder("comdb")
                .setDataField("A2#2")
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
                .setTop("3.123809523809524em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input572")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A3#1")
                .setLeft("3.8095238095238093em")
                .setTop("5.485714285714286em")
                .setWidth("12.866666666666667em")
                .setLabelSize("10em")
                .setLabelCaption("3.Pump 線圈接點檢查")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox148")
                .setDataBinder("comdb")
                .setDataField("A3#2")
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
                .setLeft("25.333333333333332em")
                .setTop("5.257142857142857em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input573")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A4#1")
                .setLeft("0.6666666666666666em")
                .setTop("7.771428571428571em")
                .setWidth("20em")
                .setLabelSize("13em")
                .setLabelCaption("4.油面高度(1/2~3/4)及油質")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox149")
                .setDataBinder("comdb")
                .setDataField("A4#2")
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
                .setLeft("22.857142857142858em")
                .setTop("7.542857142857143em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input574")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A5#1")
                .setLeft("1.8285714285714285em")
                .setTop("10.057142857142857em")
                .setWidth("18.666666666666668em")
                .setLabelSize("12em")
                .setLabelCaption("5.啟動正常")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox151")
                .setDataBinder("comdb")
                .setDataField("A5#2")
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
                .setLeft("22.857142857142858em")
                .setTop("9.82857142857143em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input575")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A6#1")
                .setLeft("1.8285714285714285em")
                .setTop("12.342857142857143em")
                .setWidth("8.685714285714285em")
                .setLabelSize("5em")
                .setLabelCaption("6.運轉電流")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox152")
                .setDataBinder("comdb")
                .setDataField("A6#4")
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
                .setLeft("22.857142857142858em")
                .setTop("12.114285714285714em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input576")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A6#2")
                .setLeft("10.742857142857142em")
                .setTop("12.342857142857143em")
                .setWidth("4.647619047619048em")
                .setLabelSize("1em")
                .setLabelCaption("A")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input577")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A6#3")
                .setLeft("15.695238095238095em")
                .setTop("12.342857142857143em")
                .setWidth("4.8em")
                .setLabelSize("1em")
                .setLabelCaption("A")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input579")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A7#1")
                .setLeft("3.0476190476190474em")
                .setTop("15.161904761904761em")
                .setWidth("17.523809523809526em")
                .setLabelSize("11em")
                .setLabelCaption("7.冷卻水流量(風扇確認)")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox153")
                .setDataBinder("comdb")
                .setDataField("A7#2")
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
                .setLeft("22.857142857142858em")
                .setTop("14.780952380952382em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label106")
                .setLeft("20.8em")
                .setTop("15.466666666666667em")
                .setCaption("l/min")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input580")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A8#1")
                .setLeft("3.8095238095238093em")
                .setTop("17.82857142857143em")
                .setWidth("16.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("8.Helium Flow Check")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox154")
                .setDataBinder("comdb")
                .setDataField("A8#2")
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
                .setLeft("22.857142857142858em")
                .setTop("17.447619047619046em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label108")
                .setLeft("20.571428571428573em")
                .setTop("18.133333333333333em")
                .setCaption("SCFM")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input581")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A9#1")
                .setLeft("1.8285714285714285em")
                .setTop("20.495238095238093em")
                .setWidth("18.742857142857144em")
                .setLabelSize("12em")
                .setLabelCaption("9.油霧分離器 Pressure")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox155")
                .setDataBinder("comdb")
                .setDataField("A9#2")
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
                .setLeft("22.857142857142858em")
                .setTop("20.34285714285714em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label109")
                .setLeft("21.333333333333332em")
                .setTop("20.8em")
                .setCaption("psi")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input604")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A9#3")
                .setLeft("3.8095238095238093em")
                .setTop("22.78095238095238em")
                .setWidth("16.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("Supply Pressure")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label114")
                .setLeft("28.952380952380953em")
                .setTop("23.00952380952381em")
                .setWidth("2.2857142857142856em")
                .setCaption("psi")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input605")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A9#4")
                .setLeft("20.419047619047618em")
                .setTop("22.78095238095238em")
                .setWidth("8.380952380952381em")
                .setLabelSize("4em")
                .setLabelCaption("psi△-P")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"c1")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A10#1")
                .setLeft("1.7523809523809524em")
                .setTop("25.066666666666666em")
                .setWidth("15.238095238095237em")
                .setLabelSize("12em")
                .setLabelCaption("10.Discharge Temp(TS1)")
                .setMaxlength("32")
                .afterUIValueSet("_c1_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"f1")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A10#2")
                .setLeft("16.761904761904763em")
                .setTop("25.066666666666666em")
                .setWidth("5.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("°C")
                .setMaxlength("32")
                .afterUIValueSet("_f1_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label115")
                .setLeft("21.18095238095238em")
                .setTop("25.447619047619046em")
                .setWidth("2.2857142857142856em")
                .setCaption("°F")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox165")
                .setDataBinder("comdb")
                .setDataField("A10#3")
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
                .setLeft("22.857142857142858em")
                .setTop("24.83809523809524em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"c2")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A11#1")
                .setLeft("3.8095238095238093em")
                .setTop("27.35238095238095em")
                .setWidth("13.104761904761904em")
                .setLabelSize("10em")
                .setLabelCaption("11.Water Temp    (TS2)")
                .setMaxlength("32")
                .afterUIValueSet("_c2_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"f2")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A11#2")
                .setLeft("16.761904761904763em")
                .setTop("27.35238095238095em")
                .setWidth("5.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("°C")
                .setMaxlength("32")
                .afterUIValueSet("_f2_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label116")
                .setLeft("21.18095238095238em")
                .setTop("27.733333333333334em")
                .setWidth("2.2857142857142856em")
                .setCaption("°F")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox166")
                .setDataBinder("comdb")
                .setDataField("A11#3")
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
                .setLeft("22.857142857142858em")
                .setTop("27.123809523809523em")
                .setHeight("2.4em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"c3")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A12#1")
                .setLeft("34.285714285714285em")
                .setTop("0.9142857142857143em")
                .setWidth("13.104761904761904em")
                .setLabelSize("10em")
                .setLabelCaption("12.Water In Temp")
                .setMaxlength("32")
                .afterUIValueSet("_c3_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"f3")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A12#2")
                .setLeft("47.23809523809524em")
                .setTop("0.9142857142857143em")
                .setWidth("5.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("°C")
                .setMaxlength("32")
                .afterUIValueSet("_f3_afteruivalueset")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label117")
                .setLeft("51.65714285714286em")
                .setTop("1.2952380952380953em")
                .setWidth("2.2857142857142856em")
                .setCaption("°F")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input612")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A13#1")
                .setLeft("34.285714285714285em")
                .setTop("2.9714285714285715em")
                .setWidth("16.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("13.Crosshead Voltage")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox168")
                .setDataBinder("comdb")
                .setDataField("A13#2")
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
                .setLeft("53.333333333333336em")
                .setTop("2.742857142857143em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label80")
                .setLeft("38.095238095238095em")
                .setTop("5.257142857142857em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("1-2")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input629")
                .setDataBinder("comdb")
                .setDataField("A13#3")
                .setLeft("35.80952380952381em")
                .setTop("6.780952380952381em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input630")
                .setDataBinder("comdb")
                .setDataField("A13#4")
                .setLeft("42.666666666666664em")
                .setTop("6.780952380952381em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input631")
                .setDataBinder("comdb")
                .setDataField("A13#5")
                .setLeft("49.523809523809526em")
                .setTop("6.780952380952381em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input633")
                .setDataBinder("comdb")
                .setDataField("A14#1")
                .setLeft("33.523809523809526em")
                .setTop("9.523809523809524em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("14.OB&ensp;Heater&ensp;電壓")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label96")
                .setLeft("51.04761904761905em")
                .setTop("9.6em")
                .setWidth("2em")
                .setHeight("1.5em")
                .setCaption("V")
                .setVAlign("bottom")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox141")
                .setDataBinder("comdb")
                .setDataField("A14#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("53.333333333333336em")
                .setTop("9.295238095238096em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input634")
                .setDataBinder("comdb")
                .setDataField("A15#1")
                .setLeft("33.523809523809526em")
                .setTop("11.504761904761905em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("15.Module&ensp;電壓")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label97")
                .setLeft("51.04761904761905em")
                .setTop("11.504761904761905em")
                .setWidth("2em")
                .setHeight("1.5em")
                .setCaption("V")
                .setVAlign("bottom")
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox142")
                .setDataBinder("comdb")
                .setDataField("A15#2")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("53.333333333333336em")
                .setTop("11.276190476190477em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label98")
                .setLeft("57.142857142857146em")
                .setTop("7.085714285714285em")
                .setCaption("V (無載)")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label99")
                .setLeft("44.95238095238095em")
                .setTop("5.257142857142857em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("2-3")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label100")
                .setLeft("51.80952380952381em")
                .setTop("5.257142857142857em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("3-1")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input635")
                .setDataBinder("comdb")
                .setDataField("A15#3")
                .setLeft("35.50476190476191em")
                .setTop("13.485714285714286em")
                .setWidth("25.447619047619046em")
                .setHeight("4.723809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因")
                .setMultiLines(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameA")
                .setDataBinder("comdb")
                .setDataField("A簽名")
                .setLeft("30.2em")
                .setTop("32.076190476190476em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_namea_onclick")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderA")
                .setDataBinder("comdb")
                .setDataField("檢測日期A")
                .setLeft("52em")
                .setTop("32.076190476190476em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leaderA")
                .setDataBinder("comdb")
                .setDataField("A組長覆核")
                .setLeft("39.333333333333336em")
                .setTop("32.06666666666667em")
                .setWidth("12em")
                .setLabelSize("5em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .onClick("_leadera_onclick")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9133")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A6#2")
                .setLeft("16.8em")
                .setTop("5.533333333333333em")
                .setWidth("3.7333333333333334em")
                .setLabelSize("1em")
                .setLabelCaption("Ω")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9134")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("A6#3")
                .setLeft("20.733333333333334em")
                .setTop("5.533333333333333em")
                .setWidth("3.7333333333333334em")
                .setLabelSize("1em")
                .setLabelCaption("Ω")
                .setMaxlength("32")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2863")
                .setLeft("24.666666666666668em")
                .setTop("5.933333333333334em")
                .setCaption("Ω")
            );
            
            host.block2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3604")
                .setLeft("20.933333333333334em")
                .setTop("12.6em")
                .setCaption("A")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("17.523809523809526em")
                .setTop("15.238095238095237em"),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label224")
                .setLeft("8.533333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("5.333333333333333em")
                .setHeight("1.5em")
                .setCaption("1.報價確認")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox227")
                .setDataBinder("comdb")
                .setDataField("B1#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.247619047619047em")
                .setTop("0.38095238095238093em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input784")
                .setDataBinder("comdb")
                .setDataField("B1#2")
                .setLeft("22.247619047619047em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label225")
                .setLeft("4.571428571428571em")
                .setTop("2.9714285714285715em")
                .setWidth("9.371428571428572em")
                .setHeight("1.5em")
                .setCaption("2.高低壓閥片更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox228")
                .setDataBinder("comdb")
                .setDataField("B2#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.323809523809524em")
                .setTop("2.6666666666666665em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input785")
                .setDataBinder("comdb")
                .setDataField("B2#2")
                .setLeft("22.857142857142858em")
                .setTop("2.9714285714285715em")
                .setWidth("10.133333333333333em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label226")
                .setLeft("-3.3523809523809525em")
                .setTop("5.257142857142857em")
                .setWidth("17.333333333333332em")
                .setHeight("1.5em")
                .setCaption("3.250psi Relief Valve 更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox229")
                .setDataBinder("comdb")
                .setDataField("B3#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.323809523809524em")
                .setTop("5.0285714285714285em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input786")
                .setDataBinder("comdb")
                .setDataField("B3#2")
                .setLeft("22.857142857142858em")
                .setTop("5.180952380952381em")
                .setWidth("9.980952380952381em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label227")
                .setLeft("-0.1523809523809524em")
                .setTop("7.542857142857143em")
                .setWidth("14em")
                .setHeight("1.5em")
                .setCaption("4.0~400psi Gauge 更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox230")
                .setDataBinder("comdb")
                .setDataField("B4#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.4em")
                .setTop("7.314285714285714em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input787")
                .setDataBinder("comdb")
                .setDataField("B4#2")
                .setLeft("22.857142857142858em")
                .setTop("7.542857142857143em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label228")
                .setLeft("4.571428571428571em")
                .setTop("9.82857142857143em")
                .setWidth("9.333333333333334em")
                .setHeight("1.5em")
                .setCaption("5.Oil Change")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox231")
                .setDataBinder("comdb")
                .setDataField("B5#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("9.676190476190476em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input788")
                .setDataBinder("comdb")
                .setDataField("B5#2")
                .setLeft("22.857142857142858em")
                .setTop("9.82857142857143em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label229")
                .setLeft("0.7619047619047619em")
                .setTop("12.114285714285714em")
                .setWidth("13.333333333333334em")
                .setHeight("1.5em")
                .setCaption("6.Check Oil Levels")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox232")
                .setDataBinder("comdb")
                .setDataField("B6#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("11.80952380952381em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input789")
                .setDataBinder("comdb")
                .setDataField("B6#2")
                .setLeft("22.857142857142858em")
                .setTop("12.114285714285714em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label230")
                .setLeft("4.114285714285714em")
                .setTop("16.266666666666666em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("7.Pump 線圈接點檢查")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox233")
                .setDataBinder("comdb")
                .setDataField("B7#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("15.866666666666667em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input790")
                .setDataBinder("comdb")
                .setDataField("B7#2")
                .setLeft("22.857142857142858em")
                .setTop("16.2em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label231")
                .setLeft("0.7619047619047619em")
                .setTop("18.4em")
                .setWidth("14em")
                .setHeight("1.5em")
                .setCaption("8.高壓線組更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox234")
                .setDataBinder("comdb")
                .setDataField("B8#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("18.066666666666666em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input791")
                .setDataBinder("comdb")
                .setDataField("B8#2")
                .setLeft("22.857142857142858em")
                .setTop("18.4em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label232")
                .setLeft("5.333333333333333em")
                .setTop("20.733333333333334em")
                .setWidth("9.333333333333334em")
                .setHeight("1.5em")
                .setCaption("9.Leak Check")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox235")
                .setDataBinder("comdb")
                .setDataField("B9#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("20.466666666666665em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input792")
                .setDataBinder("comdb")
                .setDataField("B9#2")
                .setLeft("22.8em")
                .setTop("20.733333333333334em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label233")
                .setLeft("-2.2857142857142856em")
                .setTop("22.933333333333334em")
                .setWidth("17.333333333333332em")
                .setHeight("1.5em")
                .setCaption("10.Heat Exchanger 清洗(風扇)")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox236")
                .setDataBinder("comdb")
                .setDataField("B10#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("22.733333333333334em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input793")
                .setDataBinder("comdb")
                .setDataField("B10#2")
                .setLeft("22.866666666666667em")
                .setTop("23.066666666666666em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label234")
                .setLeft("6.095238095238095em")
                .setTop("25.133333333333333em")
                .setWidth("8.685714285714285em")
                .setHeight("1.5em")
                .setCaption("11.油霧分離器清理")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox237")
                .setDataBinder("comdb")
                .setDataField("B11#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("24.8em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input794")
                .setDataBinder("comdb")
                .setDataField("B11#2")
                .setLeft("22.857142857142858em")
                .setTop("25.266666666666666em")
                .setWidth("9.980952380952381em")
                .setLabelSize("3em")
                .setLabelCaption("△-P")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label235")
                .setLeft("32.22857142857143em")
                .setTop("25.266666666666666em")
                .setWidth("2.361904761904762em")
                .setHeight("1.5em")
                .setCaption("psi")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label236")
                .setLeft("5.333333333333333em")
                .setTop("27.2em")
                .setWidth("9.333333333333334em")
                .setHeight("1.5em")
                .setCaption("12.△-P Setup")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox238")
                .setDataBinder("comdb")
                .setDataField("B12#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("27em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input796")
                .setDataBinder("comdb")
                .setDataField("B12#2")
                .setLeft("22.857142857142858em")
                .setTop("27.4em")
                .setWidth("3.8em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label237")
                .setLeft("34.8em")
                .setTop("27.4em")
                .setWidth("3.3333333333333335em")
                .setHeight("1.5em")
                .setCaption("psi")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label238")
                .setLeft("6.095238095238095em")
                .setTop("29.533333333333335em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("SC/8200/8300:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label241")
                .setLeft("0.7619047619047619em")
                .setTop("34.86666666666667em")
                .setWidth("14em")
                .setHeight("1.5em")
                .setCaption("13.Helium Flow Test")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox239")
                .setDataBinder("comdb")
                .setDataField("B13#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.552380952380952em")
                .setTop("34.6em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input797")
                .setDataBinder("comdb")
                .setLeft("23.085714285714285em")
                .setTop("34.06666666666667em")
                .setWidth("0em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input798")
                .setDataBinder("comdb")
                .setDataField("B13#2")
                .setLeft("23.085714285714285em")
                .setTop("34.733333333333334em")
                .setWidth("9.752380952380953em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label242")
                .setLeft("32em")
                .setTop("34.666666666666664em")
                .setWidth("4em")
                .setHeight("1.5em")
                .setCaption("SCFM")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label247")
                .setLeft("-2.4380952380952383em")
                .setTop("42.333333333333336em")
                .setWidth("17.333333333333332em")
                .setHeight("1.5em")
                .setCaption("14.Decontaminate He Side")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox240")
                .setDataBinder("comdb")
                .setDataField("B14#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("41.86666666666667em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input799")
                .setDataBinder("comdb")
                .setDataField("B14#2")
                .setLeft("23.085714285714285em")
                .setTop("42.2em")
                .setWidth("9.752380952380953em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label248")
                .setLeft("4.190476190476191em")
                .setTop("45.06666666666667em")
                .setWidth("10.666666666666666em")
                .setHeight("1.5em")
                .setCaption("15.Adsorber 更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox241")
                .setDataBinder("comdb")
                .setDataField("B15#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("44.8em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input800")
                .setDataBinder("comdb")
                .setDataField("B15#2")
                .setLeft("22.552380952380954em")
                .setTop("44.93333333333333em")
                .setWidth("10.285714285714286em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label249")
                .setLeft("16em")
                .setTop("29.533333333333335em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("190 ~ 195 psi")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label250")
                .setLeft("6.095238095238095em")
                .setTop("31em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("1020/8500/8510/9600:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label251")
                .setLeft("16em")
                .setTop("31em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption(" 238 ± 2 psi")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label252")
                .setLeft("6.095238095238095em")
                .setTop("32.53333333333333em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("9700:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label253")
                .setLeft("16em")
                .setTop("32.53333333333333em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("                220 ~ 230 psi")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label296")
                .setLeft("6.095238095238095em")
                .setTop("37.13333333333333em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("SC/8200/8300:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label297")
                .setLeft("22.095238095238095em")
                .setTop("37.13333333333333em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("12.5 SCFM (265/90psi)")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label298")
                .setLeft("6.095238095238095em")
                .setTop("38.666666666666664em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("9600:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label299")
                .setLeft("18.895238095238096em")
                .setTop("38.666666666666664em")
                .setWidth("14.4em")
                .setHeight("1.5em")
                .setCaption(" 43.7 SCFM (300/100±5psi)")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label300")
                .setLeft("6.095238095238095em")
                .setTop("40.2em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("9700:")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label301")
                .setLeft("22.095238095238095em")
                .setTop("40.2em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("55   SCFM")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2274")
                .setName("Rough Valve")
                .setDataBinder("comdb")
                .setDataField("B16#1")
                .setLeft("5.333333333333333em")
                .setTop("47.4em")
                .setWidth("16.666666666666668em")
                .setLabelSize("10em")
                .setLabelCaption("16.Crosshead Voltage")
                .setMaxlength("32")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1022")
                .setDataBinder("comdb")
                .setDataField("B16#2")
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
                .setLeft("22.095238095238095em")
                .setTop("47.13333333333333em")
                .setHeight("2.5904761904761906em")
                .setLabelPos("top")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1575")
                .setLeft("9.142857142857142em")
                .setTop("49.666666666666664em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("1-2")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2275")
                .setDataBinder("comdb")
                .setDataField("B16#3")
                .setLeft("6.857142857142857em")
                .setTop("51.2em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2276")
                .setDataBinder("comdb")
                .setDataField("B16#4")
                .setLeft("13.714285714285714em")
                .setTop("51.2em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2277")
                .setDataBinder("comdb")
                .setDataField("B16#5")
                .setLeft("20.571428571428573em")
                .setTop("51.2em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1576")
                .setLeft("28.19047619047619em")
                .setTop("51.46666666666667em")
                .setCaption("V (無載)")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1577")
                .setLeft("16em")
                .setTop("49.666666666666664em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("2-3")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1578")
                .setLeft("22.857142857142858em")
                .setTop("49.666666666666664em")
                .setWidth("2.742857142857143em")
                .setHeight("1.3714285714285714em")
                .setCaption("3-1")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2278")
                .setDataBinder("comdb")
                .setDataField("B16#6")
                .setLeft("6.857142857142857em")
                .setTop("53.733333333333334em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2279")
                .setDataBinder("comdb")
                .setDataField("B16#7")
                .setLeft("13.714285714285714em")
                .setTop("53.733333333333334em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2280")
                .setDataBinder("comdb")
                .setDataField("B16#8")
                .setLeft("20.571428571428573em")
                .setTop("53.733333333333334em")
                .setWidth("6.857142857142857em")
                .setLabelSize("1.5em")
                .setLabelCaption("V")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1579")
                .setLeft("28.19047619047619em")
                .setTop("54em")
                .setCaption("V (Cooling Test)")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"nameB")
                .setDataBinder("comdb")
                .setDataField("簽名B")
                .setLeft("32em")
                .setTop("68.8em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_nameb_onclick")
            );
            
            host.block3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeaderB")
                .setDataBinder("comdb")
                .setDataField("日期B")
                .setLeft("41em")
                .setTop("68.8em")
                .setWidth("10.4em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10220")
                .setDataBinder("comdb")
                .setDataField("A16#1")
                .setLeft("6em")
                .setTop("58.13333333333333em")
                .setWidth("25.37142857142857em")
                .setHeight("3.276190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("17.其它零件更換")
                .setMultiLines(true)
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox7108")
                .setDataBinder("comdb")
                .setDataField("A17#3")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("23.733333333333334em")
                .setTop("65.93333333333334em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10222")
                .setDataBinder("comdb")
                .setDataField("A17#1")
                .setLeft("6.266666666666667em")
                .setTop("62.13333333333333em")
                .setWidth("25.37142857142857em")
                .setHeight("3.276190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("18.其它維修工作")
                .setMultiLines(true)
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3830")
                .setLeft("0em")
                .setTop("14em")
                .setWidth("13.333333333333334em")
                .setHeight("1.5em")
                .setCaption("N/O電磁閥更換")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox7193")
                .setDataBinder("comdb")
                .setDataField("B6#ˇ")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("14.466666666666667em")
                .setTop("13.733333333333333em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10410")
                .setDataBinder("comdb")
                .setDataField("B6#4")
                .setLeft("22.866666666666667em")
                .setTop("14.133333333333333em")
                .setWidth("9.904761904761905em")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10504")
                .setDataBinder("comdb")
                .setDataField("B12#3")
                .setLeft("26.666666666666668em")
                .setTop("27.466666666666665em")
                .setWidth("4.666666666666667em")
                .setLabelSize("1em")
                .setLabelCaption("-")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input10505")
                .setDataBinder("comdb")
                .setDataField("B12#4")
                .setLeft("31.666666666666668em")
                .setTop("27.466666666666665em")
                .setWidth("4.466666666666667em")
                .setLabelSize("1em")
                .setLabelCaption("=")
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1072")
                .setLeft("13.333333333333334em")
                .setTop("68.53333333333333em")
                .setWidth("10.666666666666666em")
                .setHeight("1.5em")
                .setCaption("20.隔音棉檢查")
                .setVAlign("bottom")
            );
            
            host.block3.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1646")
                .setDataBinder("comdb")
                .setDataField("B20")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("23.666666666666668em")
                .setTop("68.2em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block3.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label382")
                .setLeft("13.333333333333334em")
                .setTop("66.33333333333333em")
                .setWidth("10.666666666666666em")
                .setHeight("1.5em")
                .setCaption("19.外觀清潔")
                .setVAlign("bottom")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block4")
                .setDock("fill")
                .setLeft("21.333333333333332em")
                .setTop("13.714285714285714em"),
                "d"
            );
            
            host.block4.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout3")
                .setLeft("4.038095238095238em")
                .setTop("34.285714285714285em")
                .setWidth("46.53333333333333em")
                .setHeight("28.066666666666666em")
                .setLayoutData({
                    "rows" : 7,
                    "cols" : 4,
                    "merged" : [
                        {
                            "row" : 5,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 6,
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
                            "manualHeight" : 50
                        },
                        "7" : {
                            "manualHeight" : 150
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "Room Temp:308k/290k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "Start Time",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "Start Time",
                            "style" : {
                                "textAlign" : "center",
                                "color" : "transparent"
                            }
                        },
                        "D1" : {
                            "value" : "Pass / Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A2" : {
                            "value" : "20k/17k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A3" : {
                            "value" : "11k/14k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A4" : {
                            "value" : "底溫",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A5" : {
                            "value" : "設溫65k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div219")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.8em")
                .setHeight("1.8666666666666667em"),
                "D2"
            );
            
            host.xui_ui_div219.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox698")
                .setDataBinder("comdb")
                .setDataField("C6#2")
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
                .setLeft("-0.22857142857142856em")
                .setTop("50.285714285714285em")
                .setWidth("6.857142857142857em")
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
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div220")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.8em")
                .setHeight("1.8666666666666667em"),
                "D3"
            );
            
            host.xui_ui_div220.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox701")
                .setDataBinder("comdb")
                .setDataField("C6#4")
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
                .setLeft("-0.22857142857142856em")
                .setTop("51.04761904761905em")
                .setWidth("6.857142857142857em")
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
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div221")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.8em")
                .setHeight("1.8666666666666667em"),
                "D4"
            );
            
            host.xui_ui_div221.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox702")
                .setDataBinder("comdb")
                .setDataField("C6#7")
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
                .setLeft("-0.22857142857142856em")
                .setTop("51.04761904761905em")
                .setWidth("6.857142857142857em")
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
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div222")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("8.8em")
                .setHeight("1.8666666666666667em"),
                "D5"
            );
            
            host.xui_ui_div222.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox703")
                .setDataBinder("comdb")
                .setDataField("C6#10")
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
                .setLeft("-0.22857142857142856em")
                .setTop("51.04761904761905em")
                .setWidth("6.857142857142857em")
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
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div223")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("46.333333333333336em")
                .setHeight("3.2em"),
                "A6"
            );
            
            host.xui_ui_div223.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox695")
                .setDataBinder("comdb")
                .setDataField("C6#11")
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
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("10.895238095238096em")
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
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div224")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("46.333333333333336em")
                .setHeight("9.866666666666667em"),
                "A7"
            );
            
            host.xui_ui_div224.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1569")
                .setDataBinder("comdb")
                .setDataField("C6#12")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("1.5238095238095237em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Fail原因(註明處理方法)")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div233")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "B2"
            );
            
            host.xui_ui_div233.append(
                xui.create("xui.UI.Input")
                .setHost(host,"t17k")
                .setDataBinder("comdb")
                .setDataField("C6#1")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelPos("right")
                .setLabelCaption("min")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div234")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "B3"
            );
            
            host.xui_ui_div234.append(
                xui.create("xui.UI.Input")
                .setHost(host,"t14k")
                .setDataBinder("comdb")
                .setDataField("C6#3")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelPos("right")
                .setLabelCaption("min")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div235")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "B4"
            );
            
            host.xui_ui_div235.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1817")
                .setDataBinder("comdb")
                .setDataField("C6#5")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelCaption("1<sup>st</sup>")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div236")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "B5"
            );
            
            host.xui_ui_div236.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1818")
                .setDataBinder("comdb")
                .setDataField("C6#8")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelCaption("1st")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div275")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "C4"
            );
            
            host.xui_ui_div275.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1903")
                .setDataBinder("comdb")
                .setDataField("C6#6")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelCaption("2<sup>nd</sup>")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div276")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em"),
                "C5"
            );
            
            host.xui_ui_div276.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1904")
                .setDataBinder("comdb")
                .setDataField("C6#9")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("2em")
                .setLabelCaption("2<sup>nd</sup>")
                .setLabelVAlign("bottom")
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ct1")
                .setName("C1")
                .setDataBinder("comdb")
                .setDataField("C6#13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.9333333333333333em")
                .setLabelPos("none")
                .setType("time")
                .onValueChange("_ct1_onvaluechange"),
                "C1"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ct2")
                .setName("C2")
                .setDataBinder("comdb")
                .setDataField("C6#14")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time")
                .onValueChange("_ct2_onvaluechange"),
                "C2"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"ct3")
                .setName("C3")
                .setDataBinder("comdb")
                .setDataField("C6#15")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("9.133333333333333em")
                .setHeight("1.8666666666666667em")
                .setLabelPos("none")
                .setType("time")
                .onValueChange("_ct3_onvaluechange"),
                "C3"
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input884")
                .setDataBinder("comdb")
                .setDataField("日期C")
                .setLeft("4.647619047619048em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label471")
                .setLeft("45.180952380952384em")
                .setTop("3.2em")
                .setWidth("2.742857142857143em")
                .setHeight("1.5em")
                .setCaption("psi")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label472")
                .setLeft("20.8em")
                .setTop("5.257142857142857em")
                .setWidth("3.3333333333333335em")
                .setHeight("1.5em")
                .setCaption("psi")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"e")
                .setDataBinder("comdb")
                .setDataField("C1#5")
                .setLeft("10.133333333333333em")
                .setTop("7.542857142857143em")
                .setWidth("10.209523809523809em")
                .setLabelSize("3em")
                .setLabelCaption("△-P")
                .setHAlign("right")
                .setType("input")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label473")
                .setLeft("20.8em")
                .setTop("7.466666666666667em")
                .setWidth("3.3333333333333335em")
                .setHeight("1.5em")
                .setCaption("psi")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label539")
                .setLeft("2.5142857142857142em")
                .setTop("9.82857142857143em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("SC/8200/8300:")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label540")
                .setLeft("12.41904761904762em")
                .setTop("9.82857142857143em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("190 ~ 195 psi")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label541")
                .setLeft("2.5142857142857142em")
                .setTop("11.352380952380953em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("1020/8500/8510/9600:")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label542")
                .setLeft("12.41904761904762em")
                .setTop("11.352380952380953em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("230~245 psi")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label543")
                .setLeft("2.5142857142857142em")
                .setTop("12.876190476190477em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("9700:")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label544")
                .setLeft("12.41904761904762em")
                .setTop("12.876190476190477em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("                220 ~ 230 psi")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1163")
                .setDataBinder("comdb")
                .setDataField("C2#1")
                .setLeft("6.095238095238095em")
                .setTop("15.161904761904761em")
                .setWidth("14em")
                .setLabelSize("7em")
                .setLabelCaption("2.循環水Flow")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label710")
                .setLeft("20.571428571428573em")
                .setTop("15.161904761904761em")
                .setWidth("4.666666666666667em")
                .setHeight("1.5em")
                .setCaption("l/min")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cc1")
                .setDataBinder("comdb")
                .setDataField("C2#2")
                .setLeft("9.904761904761905em")
                .setTop("17.21904761904762em")
                .setWidth("8.666666666666666em")
                .setLabelSize("3.3333333333333335em")
                .setLabelCaption("3.TS1")
                .afterUIValueSet("_cc1_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cf1")
                .setDataBinder("comdb")
                .setDataField("C2#3")
                .setLeft("19.2em")
                .setTop("17.21904761904762em")
                .setWidth("5.333333333333333em")
                .setLabelSize("1.5em")
                .setLabelCaption("°C")
                .afterUIValueSet("_cf1_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cc2")
                .setDataBinder("comdb")
                .setDataField("C2#4")
                .setLeft("24.533333333333335em")
                .setTop("17.21904761904762em")
                .setLabelSize("4.666666666666667em")
                .setLabelCaption("°F&ensp;&ensp;TS2")
                .afterUIValueSet("_cc2_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cf2")
                .setDataBinder("comdb")
                .setDataField("C2#5")
                .setLeft("34.89523809523809em")
                .setTop("17.21904761904762em")
                .setWidth("6em")
                .setLabelSize("1.5em")
                .setLabelCaption("°C")
                .afterUIValueSet("_cf2_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label711")
                .setLeft("41.371428571428574em")
                .setTop("17.21904761904762em")
                .setWidth("2.6666666666666665em")
                .setHeight("1.5em")
                .setCaption("°F")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox511")
                .setDataBinder("comdb")
                .setDataField("C2#")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("42.89523809523809em")
                .setTop("16.99047619047619em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cc3")
                .setDataBinder("comdb")
                .setDataField("C2#7")
                .setLeft("4.571428571428571em")
                .setTop("19.2em")
                .setWidth("14em")
                .setLabelSize("8.666666666666666em")
                .setLabelCaption("Water&ensp;In&ensp;Temp")
                .afterUIValueSet("_cc3_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"cf3")
                .setDataBinder("comdb")
                .setDataField("C2#8")
                .setLeft("19.276190476190475em")
                .setTop("19.2em")
                .setWidth("5.333333333333333em")
                .setLabelSize("1.5em")
                .setLabelCaption("°C")
                .afterUIValueSet("_cf3_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label712")
                .setLeft("25.066666666666666em")
                .setTop("19.2em")
                .setWidth("2.6666666666666665em")
                .setHeight("1.5em")
                .setCaption("°F")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1252")
                .setDataBinder("comdb")
                .setDataField("C4#1")
                .setLeft("0em")
                .setTop("22.01904761904762em")
                .setWidth("20.666666666666668em")
                .setLabelSize("13.333333333333334em")
                .setLabelCaption("4.Running&ensp;Current&ensp;電流")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1253")
                .setDataBinder("comdb")
                .setDataField("C4#2")
                .setLeft("20.64761904761905em")
                .setTop("22.01904761904762em")
                .setWidth("7.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("A&ensp;/")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1254")
                .setDataBinder("comdb")
                .setDataField("C4#3")
                .setLeft("28.64761904761905em")
                .setTop("22.01904761904762em")
                .setWidth("7.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("A&ensp;/")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label775")
                .setLeft("36.34285714285714em")
                .setTop("22.095238095238095em")
                .setWidth("2em")
                .setHeight("1.5em")
                .setCaption("A")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox545")
                .setDataBinder("comdb")
                .setDataField("C4#4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("37.333333333333336em")
                .setTop("21.79047619047619em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label845")
                .setLeft("3.0476190476190474em")
                .setTop("24.304761904761904em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("9600/8500/8510:")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label846")
                .setLeft("12.952380952380953em")
                .setTop("24.304761904761904em")
                .setWidth("22.857142857142858em")
                .setHeight("1.5em")
                .setCaption("max.19A min. 13.5A (Low Voltage)")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label848")
                .setLeft("12.952380952380953em")
                .setTop("25.82857142857143em")
                .setWidth("22.857142857142858em")
                .setHeight("1.5em")
                .setCaption("max.8.5A min. 6.0A (High Voltage)")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label849")
                .setLeft("3.0476190476190474em")
                .setTop("27.35238095238095em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("8200/8300")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label850")
                .setLeft("12.952380952380953em")
                .setTop("27.35238095238095em")
                .setWidth("22.78095238095238em")
                .setHeight("1.5em")
                .setCaption(" max.8.8A min.7.0A")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1405")
                .setDataBinder("comdb")
                .setDataField("C5#1")
                .setLeft("0.7619047619047619em")
                .setTop("29.104761904761904em")
                .setWidth("20em")
                .setLabelSize("12.666666666666666em")
                .setLabelCaption("5.Crosshaed&ensp;Voltage")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1406")
                .setDataBinder("comdb")
                .setDataField("C5#2")
                .setLeft("21.02857142857143em")
                .setTop("29.104761904761904em")
                .setWidth("7.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("V&ensp;/")
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1407")
                .setDataBinder("comdb")
                .setDataField("C5#3")
                .setLeft("28.34285714285714em")
                .setTop("29.104761904761904em")
                .setWidth("7.333333333333333em")
                .setLabelSize("2em")
                .setLabelCaption("V&ensp;/")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label915")
                .setLeft("35.80952380952381em")
                .setTop("29.104761904761904em")
                .setWidth("2em")
                .setHeight("1.5em")
                .setCaption("V")
                .setHAlign("left")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox615")
                .setDataBinder("comdb")
                .setDataField("C5#4")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("37.333333333333336em")
                .setTop("28.876190476190477em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label979")
                .setLeft("2.2857142857142856em")
                .setTop("31.923809523809524em")
                .setWidth("11.123809523809523em")
                .setHeight("1.5em")
                .setCaption("6.Cooling Down Test:")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1499")
                .setLeft("4.114285714285714em")
                .setTop("61.63809523809524em")
                .setWidth("6em")
                .setHeight("1.5em")
                .setCaption("7.ETM歸零")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox977")
                .setDataBinder("comdb")
                .setDataField("C7#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("10.666666666666666em")
                .setTop("61.40952380952381em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2176")
                .setDataBinder("comdb")
                .setDataField("C7#2")
                .setLeft("18.285714285714285em")
                .setTop("61.56190476190476em")
                .setWidth("10.742857142857142em")
                .setLabelSize("1.5em")
            );
            
            host.block4.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1500")
                .setLeft("2.2857142857142856em")
                .setTop("63.84761904761905em")
                .setWidth("7.847619047619047em")
                .setHeight("1.5em")
                .setCaption("8.外觀清潔包裝")
                .setVAlign("bottom")
            );
            
            host.block4.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox978")
                .setDataBinder("comdb")
                .setDataField("C8#1")
                .setItems([
                    {
                        "id" : "1",
                        "caption" : "Y"
                    },
                    {
                        "id" : "0",
                        "caption" : "N"
                    }
                ])
                .setLeft("10.666666666666666em")
                .setTop("63.61904761904762em")
                .setWidth("8.5em")
                .setHeight("1.8em")
                .setCheckBox(true)
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2177")
                .setDataBinder("comdb")
                .setDataField("C8#2")
                .setLeft("18.285714285714285em")
                .setTop("63.84761904761905em")
                .setWidth("10.742857142857142em")
                .setLabelSize("1.5em")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"name")
                .setDataBinder("comdb")
                .setDataField("C簽名")
                .setLeft("2.1333333333333333em")
                .setTop("67.58095238095238em")
                .setWidth("9.333333333333334em")
                .setLabelSize("3em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_name_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"dateLeader")
                .setDataBinder("comdb")
                .setDataField("日期C#2")
                .setLeft("24.666666666666668em")
                .setTop("67.58095238095238em")
                .setWidth("10.666666666666666em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"leader")
                .setDataBinder("comdb")
                .setDataField("C組長覆核")
                .setLeft("12em")
                .setTop("67.6em")
                .setWidth("12em")
                .setLabelSize("5em")
                .setLabelCaption("組長覆核")
                .setType("getter")
                .onClick("_leader_onclick")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"a")
                .setDataBinder("comdb")
                .setDataField("C1#1")
                .setLeft("1.7523809523809524em")
                .setTop("2.9714285714285715em")
                .setWidth("18.666666666666668em")
                .setLabelSize("11.333333333333334em")
                .setLabelCaption("1.Supply&ensp;Pressure")
                .setHAlign("right")
                .setType("input")
                .afterUIValueSet("_a_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"b")
                .setDataBinder("comdb")
                .setDataField("C1#2")
                .setLeft("20.266666666666666em")
                .setTop("3.0476190476190474em")
                .setWidth("17.333333333333332em")
                .setLabelSize("11.333333333333334em")
                .setLabelCaption("psi/油霧分離器Pressure")
                .setHAlign("right")
                .setType("input")
                .afterUIValueSet("_b_afteruivalueset")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"c")
                .setDataBinder("comdb")
                .setDataField("C1#3")
                .setLeft("37.40952380952381em")
                .setTop("3.123809523809524em")
                .setWidth("7.333333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("psi△-P")
                .setHAlign("right")
                .setType("input")
            );
            
            host.block4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"d")
                .setDataBinder("comdb")
                .setDataField("C1#4")
                .setLeft("3.276190476190476em")
                .setTop("5.257142857142857em")
                .setWidth("17.066666666666666em")
                .setLabelSize("10em")
                .setLabelCaption("Return&ensp;Pressure")
                .setHAlign("right")
                .setType("input")
                .afterUIValueSet("_d_afteruivalueset")
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
            console.log(utils.createDDL(ns.dialog,"Compressor維修工單"));
            ns.tabs.setValue("a");
//            utils.readRepairStatus(ns);
//            utils.updateFinishOutBtnCaption(ns);
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
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
                _overhaulbtn_onclick:function(profile, e, src, value){
                    var ns = this, uictrl = profile.boxing();
                    ns.comdb.updateDataFromUI();
                    var data = ns.comdb.getData();
                    var id = data["登錄編號"];
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Compressor Standard Overhaul","登錄編號",id,"*");
                    if(item == "")
                      utils.showDataPage("CompressorOverhaulEditForm",{"登錄編號":id, "Model":data["Model"], "S/N":data["Compressor S/N"],"客戶名稱":data["客戶名稱"],"ETM":data["Compressor ETM"],"故障問題簡述":data["進廠原因"]}, "new");        
                    else
                      utils.showDataPage("CompressorOverhaulEditForm", item, "edit")  ;      
                },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _failbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
                    ns.comdb.updateDataFromUI();
                    var data = ns.comdb.getData();
                    var id = data["登錄編號"];
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Compressor Heater Fail/ Motor Fail零件更換表","登錄編號",id,"*");
                    if(item == "")
                      utils.showDataPage("CompressorSpecialPriceEditForm",{"登錄編號":id,"Model":data["Model"],"S/N":data["Compressor S/N"],"客戶名稱":data["客戶名稱"],"ETM":data["Compressor ETM"],"故障問題簡述":data["進廠原因"], "保養內容":"[]"}, "new");        
                    else
                      utils.showDataPage("CompressorSpecialPriceEditForm", item, "edit")  ;      
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _quotationbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
                    ns.comdb.updateDataFromUI();
                    var data = ns.comdb.getData();
                    var id = data["登錄編號"];
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Compressor零件更換表","登錄編號",id,"*");
                    if(item == "")
                      utils.showDataPage("CompressorSpecialPriceEditForm",{"登錄編號":id,"Compressor Model":data["Model"],"P/N":data["Compressor P/N"], "S/N":data["Compressor S/N"],"客戶名稱":data["客戶名稱"],"ETM":data["Compressor ETM"],"故障問題簡述":data["進廠原因"]}, "new");        
                    else
                      utils.showDataPage("CompressorSpecialPriceEditForm", item, "edit")  ;      
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
                var data = {"登錄編號":newValue};
                utils.modifyTableItem2("Compressor維修工單","登錄編號", oldValue, data);
                utils.alert("登錄編號已更換!");
             // utils.updateNewWorkSheetValue(ns.comdb, newValue);
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
                    utils.showLastWorkSheet(ns,"CompressorEditForm", "Compressor維修工單", 'Compressor S/N');
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
        _name_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(null, uictrl, "維修");
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
        _leader_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(ns.dateLeader, uictrl, "組長,主管");
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
        setTempF: function(uictrl, value){
            value - Number(value);
            value = Math.floor(value * 9 / 5 + 32);
            uictrl.setValue(value);
        },
        setTempC: function(uictrl, value){
            value - Number(value);
            value = Math.floor((value-32) * 5 / 9);
            uictrl.setValue(value);
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
        _c1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempF(ns.f1, newValue);
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
        _c2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
             ns.setTempF(ns.f2, newValue);
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
        _f1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.c1, newValue);
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
        _f2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.c2, newValue);
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
        _f3_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.c3, newValue);
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
        _cc1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempF(ns.cf1, newValue);
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
        _cc2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempF(ns.cf2, newValue);
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
        _cc3_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
             ns.setTempF(ns.cf3, newValue);
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
        _cf1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.cc1, newValue);
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
        _cf2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.cc2, newValue);
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
        _cf3_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempC(ns.cc3, newValue);
        },
        updateMinutes: function(){
            var ns = this;
            utils.calcMinute(ns.ct2, ns.ct1, ns.t17k);
            utils.calcMinute(ns.ct3, ns.ct2, ns.t14k);
            
        },
        updateNumbers: function(){
            var ns = this;
            var a = ns.a.getUIValue(),b = ns.b.getUIValue(), d = ns.d.getUIValue();
            if(a != "" && d != "")
                ns.e.setUIValue(Number(a)-Number(d));
            if(a != "" && b != "")
                ns.c.setUIValue(Number(a)-Number(b));
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
        _ct2_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinutes();
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
        _ct3_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
             ns.updateMinutes();
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
        _ct1_onvaluechange:function(profile, oldValue, newValue, force, tag){
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
        _namea_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(null, uictrl, "維修");
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
            utils.signNameClick(ns.dateLeaderA, uictrl, "組長,主管");
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
            utils.signNameClick(ns.dateLeaderB, uictrl, "維修");
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
            _reportbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                utils.createCompressorTestReport(ns.repairNo.getUIValue());
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
        _c3_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.setTempF(ns.f3, newValue);
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
         * Fired after setUIValue is called
         * @method afterUIValueSet [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _a_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateNumbers();
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
        _d_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateNumbers();
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
        _b_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateNumbers();
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