// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.RepairEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "rowid",
            "keyvalue" : null,
            "tableName" : "CTI Control Number總資料庫",
            "datas" : null
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
                .setData({
                    "工號" : "",
                    "客戶名稱" : "",
                    "Out S/N" : "",
                    "In S/N" : "1234",
                    "登錄編號" : "",
                    "上次Pump出廠CN" : "",
                    "上次沒有保固標籤" : false,
                    "上次CN保固截止日期" : null,
                    "Sponser" : "",
                    "上次登錄編號" : "",
                    "Date Received" : null,
                    "SL是否需維修報告" : false,
                    "SL入廠原因附註" : "",
                    "SL維修注意事項" : "",
                    "SL是否要測試" : "a",
                    "Extno" : "",
                    "委外單號" : "",
                    "型號(EX form)" : "",
                    "Out P/N" : "",
                    "In P/N" : "1234",
                    "In Model" : "1234",
                    "Process" : "",
                    "EX/F分類" : "",
                    "SL入廠原因" : ""
                })
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("56.38095238095238em")
                .setHeight("51.04761904761905em")
                .setCaption("CIC WorkBench維修委託單 ")
                .setConLayoutColumns(null)
                .onShow("_dialog_onshow")
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
                xui.create("xui.UI.Input")
                .setHost(host,"repairNo")
                .setName("登錄編號")
                .setDataBinder("rdb")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setLeft("0.5em")
                .setTop("0.5em")
                .setWidth("13em")
                .setPlaceholder("儲存後產生")
                .setLabelSize("6em")
                .setLabelCaption("登錄編號")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px",
                        "font-weight" : "bold"
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Label")
                .setHost(host,"errorContent")
                .setLeft("19.80952380952381em")
                .setTop("27.428571428571427em")
                .setWidth("25.447619047619046em")
                .setCaption("Label")
                .setHAlign("left")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairExtno")
                .setDataBinder("rdb")
                .setDataField("Extno")
                .setLeft("13.3em")
                .setTop("0.5em")
                .setWidth("8.7em")
                .setTabindex(2)
                .setLabelSize("1em")
                .setLabelCaption("-")
                .setType("listbox")
                .setItems([
                    {
                        "id" : " ",
                        "caption" : " "
                    },
                    {
                        "id" : "S",
                        "caption" : "S (委外)",
                        "tips" : "委外維修"
                    },
                    {
                        "id" : "M",
                        "caption" : "M  (內部修理)",
                        "tips" : "內部維修"
                    }
                ])
                .beforeUIValueSet("_repairextno_beforeuivalueset")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px",
                        "font-weight" : "bold"
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"incidentBtn")
                .setLeft("32.857142857142854em")
                .setTop("0.7619047619047619em")
                .setWidth("12.857142857142858em")
                .setHeight("1.7523809523809524em")
                .setTabindex(3)
                .setLabelSize("5em")
                .setLabelCaption("CRM案件")
                .setType("getter")
                .onClick("_incidentbtn_onclick")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px"
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"serviceBtn")
                .setLeft("35.04761904761905em")
                .setTop("3.0476190476190474em")
                .setWidth("13.790476190476191em")
                .setTabindex(4)
                .setCaption("CRM 服務紀錄")
                .setType("drop")
                .onClick("_servicebtn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"lastRepairNo")
                .setName("上次登錄編號")
                .setDataBinder("rdb")
                .setDataField("上次登錄編號")
                .setLeft("1.0666666666666667em")
                .setTop("3.8095238095238093em")
                .setWidth("16.99047619047619em")
                .setTabindex(5)
                .setLabelSize("9em")
                .setLabelCaption("上次入廠登錄編號")
                .setType("getter")
                .onClick("_lastrepairno_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"workid")
                .setName("工號")
                .setDataBinder("rdb")
                .setDataField("工號")
                .setReadonly(true)
                .setLeft("2em")
                .setTop("6.095238095238095em")
                .setWidth("16.228571428571428em")
                .setTabindex(6)
                .setLabelSize("8em")
                .setLabelCaption("工號")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"companyName")
                .setName("客戶名稱")
                .setDataBinder("rdb")
                .setDataField("客戶名稱")
                .setReadonly(true)
                .setLeft("18.285714285714285em")
                .setTop("6.171428571428572em")
                .setWidth("15.314285714285715em")
                .setTabindex(7)
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input586")
                .setName("Sponser")
                .setDataBinder("rdb")
                .setDataField("Sponser")
                .setLeft("34.285714285714285em")
                .setTop("6.171428571428572em")
                .setWidth("15.238095238095237em")
                .setTabindex(8)
                .setLabelSize("8em")
                .setLabelCaption("Field負責工程師")
                .setType("cmdbox")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"lastcn")
                .setName("上次Pump出廠CN")
                .setDataBinder("rdb")
                .setDataField("上次Pump出廠CN")
                .setLeft("2em")
                .setTop("8.380952380952381em")
                .setWidth("16.228571428571428em")
                .setTabindex(9)
                .setLabelSize("8em")
                .setLabelCaption("上次出廠CN")
                .setType("getter")
                .onClick("_lastcn_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox141")
                .setName("上次沒有保固標籤")
                .setDataBinder("rdb")
                .setDataField("上次沒有保固標籤")
                .setLeft("19.047619047619047em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setTabindex(10)
                .setCaption("上次沒有保固標籤")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"lastWarrantyDate")
                .setName("上次CN保固截止日期")
                .setDataBinder("rdb")
                .setDataField("上次CN保固截止日期")
                .setLeft("3.8095238095238093em")
                .setTop("10.666666666666666em")
                .setWidth("21.333333333333332em")
                .setTabindex(11)
                .setLabelSize("12em")
                .setLabelCaption("上次出廠CN保固截止日期")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"outmodel")
                .setName("型號(EX form)")
                .setDataBinder("rdb")
                .setDataField("型號(EX form)")
                .setReadonly(true)
                .setAutoTips(false)
                .setTips("請選取Floating ID#")
                .setLeft("2em")
                .setTop("12.952380952380953em")
                .setWidth("16.228571428571428em")
                .setTabindex(12)
                .setLabelSize("8em")
                .setLabelCaption("Exg Out型號")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"outpn")
                .setName("Out P/N")
                .setDataBinder("rdb")
                .setDataField("Out P/N")
                .setReadonly(true)
                .setTips("請選取Floating ID#")
                .setLeft("17.676190476190477em")
                .setTop("13.028571428571428em")
                .setWidth("19.65714285714286em")
                .setTabindex(13)
                .setLabelSize("8em")
                .setLabelCaption("Exg Out P/N")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"outsn")
                .setName("Out S/N")
                .setDataBinder("rdb")
                .setDataField("Out S/N")
                .setLeft("37.333333333333336em")
                .setTop("13.028571428571428em")
                .setWidth("17.523809523809526em")
                .setTabindex(14)
                .setLabelSize("8em")
                .setLabelCaption("Exg Out S/N")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"inmodel")
                .setName("In Model")
                .setDataBinder("rdb")
                .setDataField("In Model")
                .setRequired(true)
                .setLeft("1.980952380952381em")
                .setTop("15.314285714285715em")
                .setWidth("16.304761904761904em")
                .setTabindex(15)
                .setLabelSize("8em")
                .setLabelCaption("入廠型號")
                .setType("popbox")
                .setCaption("inmodel")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"plusBtn1")
                .setLeft("18.590476190476192em")
                .setTop("15.238095238095237em")
                .setHeight("1.9047619047619047em")
                .setTabindex(16)
                .setCaption("+")
                .onClick("_plusbtn1_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"inpn")
                .setDataBinder("rdb")
                .setDataField("In P/N")
                .setRequired(true)
                .setLeft("20.571428571428573em")
                .setTop("15.238095238095237em")
                .setWidth("16.761904761904763em")
                .setTabindex(17)
                .setLabelSize("5em")
                .setLabelCaption("入廠P/N")
                .setType("popbox")
                .setCaption("")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"plusBtn2")
                .setLeft("37.63809523809524em")
                .setTop("15.161904761904761em")
                .setHeight("1.9047619047619047em")
                .setTabindex(18)
                .setCaption("+")
                .onClick("_plusbtn2_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"insn")
                .setName("In S/N")
                .setDataBinder("rdb")
                .setDataField("In S/N")
                .setRequired(true)
                .setTips("輸入S/N")
                .setLeft("40.22857142857143em")
                .setTop("15.238095238095237em")
                .setWidth("14.628571428571428em")
                .setTabindex(19)
                .setLabelSize("5em")
                .setLabelCaption("入廠S/N")
                .afterUIValueSet("_insn_afteruivalueset")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"changedModel")
                .setName("In Model")
                .setDataBinder("rdb")
                .setDataField("變更後型號")
                .setLeft("1.980952380952381em")
                .setTop("17.6em")
                .setWidth("16.304761904761904em")
                .setTabindex(20)
                .setLabelSize("8em")
                .setLabelCaption("變更後型號")
                .setType("popbox")
                .setCaption("inmodel")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"plusBtn3")
                .setLeft("18.590476190476192em")
                .setTop("17.6em")
                .setHeight("1.9047619047619047em")
                .setTabindex(21)
                .setCaption("+")
                .onClick("_plusbtn3_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"changedPn")
                .setName("In P/N")
                .setDataBinder("rdb")
                .setDataField("變更後P/N")
                .setLeft("20.571428571428573em")
                .setTop("17.523809523809526em")
                .setWidth("16.761904761904763em")
                .setTabindex(22)
                .setLabelSize("5em")
                .setLabelCaption("變更後P/N")
                .setType("popbox")
                .setCaption("")
            );
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"plusBtn4")
                .setLeft("37.63809523809524em")
                .setTop("17.523809523809526em")
                .setHeight("1.9047619047619047em")
                .setTabindex(23)
                .setCaption("+")
                .onClick("_plusbtn4_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"changedSn")
                .setDataBinder("rdb")
                .setDataField("變更後S/N")
                .setTips("輸入S/N")
                .setLeft("40.22857142857143em")
                .setTop("17.752380952380953em")
                .setWidth("14.628571428571428em")
                .setTabindex(24)
                .setLabelSize("5em")
                .setLabelCaption("變更後S/N")
                .onChange("_changedsn_onchange")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"process")
                .setName("Process")
                .setDataBinder("rdb")
                .setDataField("Process")
                .setLeft("2em")
                .setTop("19.80952380952381em")
                .setWidth("16.228571428571428em")
                .setTabindex(25)
                .setLabelSize("8em")
                .setLabelCaption("Process")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"cnCode")
                .setName("CN分類碼")
                .setDataBinder("rdb")
                .setDataField("CN分類碼")
                .setLeft("17.523809523809526em")
                .setTop("19.80952380952381em")
                .setWidth("17.523809523809526em")
                .setTabindex(26)
                .setLabelSize("8em")
                .setLabelCaption("CN分類碼")
                .setType("popbox")
                .setMaxlength("5")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput420")
                .setName("Date Received")
                .setDataBinder("rdb")
                .setDataField("Date Received")
                .setLeft("2em")
                .setTop("22.095238095238095em")
                .setWidth("16.228571428571428em")
                .setTabindex(27)
                .setLabelSize("8em")
                .setLabelCaption("入廠登錄日期")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"unitId")
                .setName("Unit ID")
                .setDataBinder("rdb")
                .setDataField("Unit ID")
                .setLeft("17.523809523809526em")
                .setTop("22.095238095238095em")
                .setWidth("17.523809523809526em")
                .setTabindex(28)
                .setLabelSize("8em")
                .setLabelCaption("Floating ID#")
                .setType("popbox")
                .onValueChange("_unitid_onvaluechange")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"exf")
                .setName("EX/F分類")
                .setDataBinder("rdb")
                .setDataField("EX/F分類")
                .setLeft("1.980952380952381em")
                .setTop("24.38095238095238em")
                .setWidth("16.228571428571428em")
                .setTabindex(29)
                .setLabelSize("8em")
                .setLabelCaption("維修分類歸屬")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"errorCode")
                .setName("SL入廠原因")
                .setDataBinder("rdb")
                .setDataField("SL入廠原因")
                .setAutoTips(false)
                .setLeft("2em")
                .setTop("26.97142857142857em")
                .setWidth("16.228571428571428em")
                .setTabindex(30)
                .setLabelSize("8em")
                .setLabelCaption("入廠原因代碼")
                .setType("popbox")
            );
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"testFirst")
                .setName("SL是否要測試")
                .setDataBinder("rdb")
                .setDataField("SL是否要測試")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "直接維修",
                        "imageClass" : ""
                    },
                    {
                        "id" : "1",
                        "caption" : "先測試，不直接維修",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.8095238095238093em")
                .setTop("28.952380952380953em")
                .setWidth("15.619047619047619em")
                .setHeight("6.704761904761905em")
                .setTabindex(31)
                .setBorderType("flat")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("直接維修或先行測試")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("")
                .onChange("_testfirst_onchange")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input593")
                .setName("SL入廠原因附註")
                .setDataBinder("rdb")
                .setDataField("SL入廠原因附註")
                .setLeft("19.047619047619047em")
                .setTop("29.714285714285715em")
                .setWidth("29.714285714285715em")
                .setHeight("6.095238095238095em")
                .setTabindex(32)
                .setLabelSize("8em")
                .setLabelCaption("入廠原因附註")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input595")
                .setName("SL維修注意事項")
                .setDataBinder("rdb")
                .setDataField("SL維修注意事項")
                .setLeft("1.980952380952381em")
                .setTop("36.57142857142857em")
                .setWidth("46.78095238095238em")
                .setHeight("4.114285714285714em")
                .setTabindex(33)
                .setLabelSize("8em")
                .setLabelCaption("維修注意事項")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox145")
                .setName("SL是否需維修報告")
                .setDataBinder("rdb")
                .setDataField("SL是否需維修報告")
                .setLeft("2em")
                .setTop("40.99047619047619em")
                .setWidth("18em")
                .setTabindex(34)
                .setCaption("客戶需要維修報告")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairOutsideBtn")
                .setName("上次登錄編號")
                .setDataBinder("rdb")
                .setDataField("委外單號")
                .setLeft("18.285714285714285em")
                .setTop("3.8095238095238093em")
                .setWidth("15.314285714285715em")
                .setTabindex(42)
                .setLabelSize("5em")
                .setLabelCaption("委外單號")
                .setType("getter")
                .onClick("_repairoutsidebtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block103")
                .setDock("bottom")
                .setLeft("13.333333333333334em")
                .setTop("20.723809523809525em")
                .setHeight("3.8857142857142857em")
                .setTabindex(2)
                .setConDockPadding({
                    "left" : 0,
                    "top" : 10,
                    "right" : 20,
                    "bottom" : 10
                })
                .setConDockSpacing({
                    "width" : 10,
                    "height" : 0
                })
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"printBtn")
                .setDock("left")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("24.685714285714287em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setTabindex(35)
                .setCaption("列印")
                .onClick("_printbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"messageBtn")
                .setDock("left")
                .setDockMargin({
                    "left" : 10,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("25.447619047619046em")
                .setTop("0.6857142857142857em")
                .setWidth("7.390476190476191em")
                .setTabindex(36)
                .setCaption("進Bench維修")
                .onClick("_messagebtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"testMessageBtn")
                .setDock("left")
                .setLeft("26.20952380952381em")
                .setTop("0.6857142857142857em")
                .setWidth("7.619047619047619em")
                .setTabindex(37)
                .setCaption("進Bench測試")
                .onClick("_testmessagebtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"confirmBtn")
                .setDock("left")
                .setLeft("26.97142857142857em")
                .setTop("0.6857142857142857em")
                .setWidth("7.619047619047619em")
                .setTabindex(38)
                .setCaption("通知秘書確認")
                .onClick("_confirmbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirmName")
                .setName("上次Pump出廠CN")
                .setDataBinder("rdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setDock("left")
                .setLeft("25.904761904761905em")
                .setTop("0.7619047619047619em")
                .setWidth("11.428571428571429em")
                .setHeight("2em")
                .setTabindex(39)
                .setLabelSize("4.5em")
                .setLabelCaption("秘書確認")
                .setLabelVAlign("middle")
                .setType("getter")
                .onClick("_confirmname_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"cancelBtn")
                .setDock("right")
                .setLeft("23.16190476190476em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setTabindex(40)
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
                .setTabindex(41)
                .setCaption("儲存")
                .onClick("_savebtn_onclick")
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"serviceMenu")
                .setNoIcon(true)
                .onMenuSelected("_servicemenu_onmenuselected")
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
            "afterShow" : "_page_aftershow"
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
            var rno = ns.repairNo.getUIValue();
            if(ns.changedSn.getUIValue() != "")
            {
                ns.repairExtno.show();
                ns.repairExtno.setValue("M");
            }
            if(prop.mode == "new" || prop.mode == "edit" || prop.mode.includes("Repair") || rno.includes("R"))
            {
                ns.outmodel.setValue(ns.inmodel.getUIValue());
                ns.outpn.setValue(ns.inpn.getUIValue());
                ns.outsn.setValue(ns.insn.getUIValue());
            }
            if(prop.mode == "new" || prop.mode == "newRepair" || prop.mode == "newOutsideRepair" )
            {
                var extno = ns.repairExtno.getValue();
                if( extno == "M" || extno == "")
                    ns.repairOutsideBtn.setValue("");
              ns.rdb.setData("type","R");  //let insertTableItem produce correct ID
            }
            else if(prop.mode  ==  "newExchange") //exchange
              ns.rdb.setData("type","E");  
            ns.writeBackWorkSheets();
    
            var ignoreFields =  ["維修報告"]; //binary, need convert
            utils.saveForm(ns, ignoreFields);
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var prop = ns.properties;
            if(prop.mode == "newExchange" || ns.repairNo.getValue().includes("E")) //Exchange
            {
                ns.dialog.setCaption("CIC WorkBench維修委託單 (Exchange)");
                if(ns.changedSn.getUIValue() == "")
                {
                  ns.repairExtno.hide();
                  ns.repairExtno.setValue(''); 
                }
                else 
                   ns.repairExtno.setValue('M'); 
                ns.repairOutsideBtn.hide();
                ns.outmodel.setRequired(true);
                ns.outpn.setRequired(true);
                ns.outsn.setRequired(true);
            }
            else 
            {
               ns.outmodel.setLabelCaption("維修後型號");
               ns.outpn.setLabelCaption("維修後P/N");
               ns.outsn.setLabelCaption("維修後S/N");
               ns.outmodel.hide(); 
                ns.outpn.hide();
                ns.outsn.hide();
                ns.unitId.hide();
            }
            if(prop.mode.includes("new"))
            {
               ns.rdb.setData("Log date",utils.today());
               if(ns.insn.getUIValue() != "")  
                 ns.updateLastCnRepairNo();     
            }
            if(prop.mode.includes("edit"))
            {
              var item = utils.getItemValue("維修站總資料表","登錄編號", ns.repairNo.getValue());
              if(item != "")
              {
                var site = item["維修站名"];
                if(site == "已入庫")
                    ns.messageBtn.setCaption("已入庫");
                else 
                    ns.messageBtn.setCaption("已開始維修");
                ns.testMessageBtn.hide();
              }
            }
            if(LoginUser.Privilege.includes("客服"))
            {
                ns.messageBtn.hide();
                ns.testMessageBtn.hide();
                ns.confirmName.hide();
            }
            if(LoginUser.Privilege.includes("秘書"))
            {
                ns.confirmBtn.hide();
            }
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
            var cid = utils.getItemValue("工號登錄總資料表","工號",ns.workid.getUIValue(), "CompanyID");
            ns.rdb.setData("CompanyID", cid);
            
            var err = ns.errorCode.getUIValue();
            if(err != "")
            {
                err = utils.getItemValue("FA1040,入廠原因代碼","代碼",err, "內容");
                ns.errorCode.setTips(err);
                ns.errorContent.setCaption(err);
            }
            if(AppName == "BU3")
                ns.errorContent.hide();
            ns.showMessageBtns();
            //ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
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

        updateIncidentBtn : function(){
            var ns = this;
            var repairNo = ns.repairNo.getValue();
            if(repairNo == "")
                return;
            var ns = this, items = [{"id" : "new", "caption" : "新增CRM服務紀錄"}];
            var condition = `[FixOrderNo] = '${repairNo}'`; 
            var cb = function(datas){
               var rows = datas.rows;   
               if(rows.length > 0) 
               {
                   ns.incidentBtn.setValue(rows[0]);              
               }
            };
            utils.getTableItems({"tableName":"crm.Incident","condition":condition, "fields":"IncidentID"}, cb);            
        },         
        updateServiceList : function(){
            var ns = this;
            var repairNo = ns.repairNo.getValue();
            if(repairNo == "")
                return;

            if(utils.checkItemExists("GDCRM.dbo.Incident","FixOrderNo",repairNo) == false)
            {
              if(repairNo.indexOf("E") == -1)  //repair oder
              {
                xui.alert("訊息","請先新增CRM案件!");
                return;
              }
            }
                            
            var ns = this, items = [{"id" : "new", "caption" : "新增CRM服務紀錄"}];
            var condition = `[FixOrderNo] = '${repairNo}'`; 
            var cb = function(datas){
               var rows = datas.rows;   
               for(var i=0; i<rows.length; i++)
               {
                 var row = rows[i];  
                 var id = row[0];
                 var caption = "";
                 for(var j=0;j<row.length; j++)
                 {
                     caption += row[j] + "  ";
                 }
                 items.push({"id" : id, "caption" : caption});        
               }
               ns.serviceMenu.setItems(items);
            };
            utils.getTableItems({"tableName":"crm.ServiceRecord","condition":condition, "fields":"ServiceRecordID"}, cb);            
        }, 
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _servicebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var repairNo = ns.repairNo.getValue();
            if(repairNo == "")
            {
              xui.alert("訊息","請先儲存，取得單號!");
              return;  
            }           
            ns.updateServiceList();
            ns.serviceMenu.popUp(uictrl);    
        },
        newIncidentAndServiceRecord: function(){
          var ns = this;
           
          ns.rdb.updateDataFromUI();  
          var data = ns.rdb.getData();
          var work = utils.getItemValue("工號登錄總資料表","工號", data["工號"], "*");
          var today = utils.dateTimeToString(utils.addHours(new Date(), -8));
          var loadcb = function(mod){
            var item1 = {"WorkOrder":data["工號"],"FixOrderNo": data["登錄編號"], "CompanyID":work["CompanyID"], "DeptID":LoginUser["DeptID"], "ServiceEmplID":LoginUser["EmplID"],
                         "CreateDeptID":LoginUser["DeptID"], "CreatorID":LoginUser["EmplID"], "CreateDate":today, "OwnerDeptID":LoginUser["DeptID"], "OwnerID":LoginUser["EmplID"],
                         "ContactID":work["ContactID"], "ContactName": work["連絡人"], "CompanyName": work["客戶資料"], "ProductNo": data["In S/N"], "ProductID":data["In P/N"],
                         "Description":work["狀況簡述"]};
            mod.idb.setData(item1);
            mod.idb.updateDataToUI();
              
            var item2 = {"WorkOrder":data["工號"],"FixOrderNo": data["登錄編號"], "CompanyID":work["CompanyID"], "DeptID":LoginUser["DeptID"], "ServiceEmplID":LoginUser["EmplID"],
                         "CreateDeptID":LoginUser["DeptID"], "CreatorID":LoginUser["EmplID"], "CreateDate":today, "OwnerDeptID":LoginUser["DeptID"], "OwnerID":LoginUser["EmplID"],
                         "ContactID":work["ContactID"], "ContactName": work["連絡人"], "StartTime":utils.now(), "BU3_ProductNo":data["Out S/N"], "BU3_ProductID":data["Out P/N"],
                         "ProductNo": data["In S/N"], "ProductID":data["In P/N"], "BU3_ID":data["Unit ID"]};
            mod.sdb.setData(item2);
            mod.sdb.updateDataToUI();
              
          }; 
          var destroycb = function(mod){
                ns.updateIncidentBtn();      
                ns.updateServiceList();
          };  
          utils.showDataPage("CrmEditForm",null, "newIncidentService", loadcb, destroycb);  
        },
        /**
         * Fired when a menu item is selected
         * @method onMenuSelected [xui.UI.PopMenu event]
         * @param {xui} profile .UIProfile
         * @param {} item  Object
         * @param {Element.xui} src  id or Dom Element
        */
        _servicemenu_onmenuselected:function(profile, item, src){
            var ns = this, uictrl = profile.boxing();
            var today = utils.dateTimeToString(utils.addHours(new Date(), -8));
            
            var repairNo = ns.repairNo.getValue();
            if( repairNo == "")
            {
              xui.alert("訊息","請先儲存維修委託單,取得單號!");
              return;  
            }            
            var value = item.id;
            if(value == "new")
            {
              var incidentId = ns.incidentBtn.getValue();
              var idata = utils.getItemValue("crm.Incident","IncidentID", incidentId);  
                
              if(idata["ErpType"] == "1")
              {
                utils.alert("CRM案件已拋轉!");
                return;  
              }
              if(idata["Status"] == "4")
              {
                utils.alert("CRM案件已結案!");
                return;  
              }
              if(incidentId == "" && repairNo.includes("E"))
              {
                ns.newIncidentAndServiceRecord();  
                return;        
              }
              ns.rdb.updateDataFromUI();  
              var rdata = ns.rdb.getData();  
              var data = utils.getItemValue("crm.Incident","IncidentID", incidentId);
              if(data != "")
              {
                  var item = {"IncidentID": incidentId,"CreateDeptID":LoginUser["DeptID"], "CreatorID":LoginUser["EmplID"], "CreateDate": today, "OwnerDeptID":LoginUser["DeptID"],
                             "DeptID":LoginUser["DeptID"], "ServiceEmplID":LoginUser["EmplID"], "ProductNo": data["ProductNo"], "ProductID":data["ProductID"],
                             "ProblemDescription":data["Description"], "Subject":data["IncidentName"], "StartTime":utils.now(), "OwnerID":LoginUser["EmplID"]};  
                  item.FixOrderNo = data.FixOrderNo;
                  item.CompanyID = data.CompanyID;
                  item.ContactID = data.ContactID;
                  item.ContactName = data.ContactName; 
                  item.WorkOrder = data.WorkOrder;
                  item.Process = rdata["Process"];
                  if(repairNo.includes("E"))
                  {
                      item["BU3_ProductNo"] = rdata["Out S/N"];
                      item["BU3_ProductID"] = rdata["Out P/N"];
                      item["BU3_ID"] = rdata["Unit ID"];
                  }

                  var loadcb = function(mod){
                      mod.sdb.setData(item);
                      mod.sdb.updateDataToUI();
                  }
                  utils.showDataPage("CrmEditForm",null, "newService", loadcb);  
                  
              }            
            }
            else
            {
                  var condition = `ServiceRecordID='${value}'`;  
                  utils.getTableItems({"tableName":"crm.ServiceRecord","condition":condition}, function(data){
                      var rows = utils.getRowMap(data);
                      if(rows.length  > 0)
                      {
                          var item = rows[0];
                          var loadcb2 = function(mod){
                              mod.sdb.setData(item);
                              mod.sdb.updateDataToUI();
                          }
                          utils.showDataPage("CrmEditForm",null, "editService", loadcb2);  
                      }
                      
                  });                        
            }
        },
        updateOutsideBtn: function(){
            var ns = this;
            var  data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",ns.repairNo.getValue()); 
            var outno = data["委外單號"];
            ns.repairOutsideBtn.setValue(outno);
            if(outno != "")
            {
                ns.incidentBtn.hide();
                ns.serviceBtn.hide();
            }    
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
            _repairoutsidebtn_onclick:function(profile, e, src, value, n){
                var ns = this, uictrl = profile.boxing();
            var repairNo = ns.repairNo.getValue();
            if( repairNo == "")
            {
              xui.alert("訊息","請先儲存維修委託單,取得單號!");
              return;  
            }            
                var value = ns.repairOutsideBtn.getValue();
                if(value == "")
                {
                  var item = {"委外送出日": utils.today()};
                  var item = utils.insertTableItem("UU100_委外總資料庫",item);  
                  var value = item["委外單號"];
                  ns.repairOutsideBtn.setValue(value);  
                  utils.modifyTableItem("CTI Control Number總資料庫","登錄編號",{"登錄編號":ns.repairNo.getValue(), "委外單號":value });
                  utils.showDataPage("RepairOutsideEditForm", item, "edit");
                }
                else
                {
                   var condition = `委外單號='${value}'`;  
                  utils.getTableItems({"tableName":"UU100_委外總資料庫","condition":condition}, function(data){
                      var rows = utils.getRowMap(data);
                      if(rows.length  > 0)
                      {
                          var item = rows[0];
                          utils.showDataPage("RepairOutsideEditForm", item, "edit");
                      }
                      
                  });                        
                   
                }
            },
        _page_aftershow:function(e,i){
            var ns  = this, prop = ns.properties;
            ns.updateIncidentBtn();
            if( ns.repairExtno.getValue() == "S" || ns.repairOutsideBtn.getValue() != "" )
            {
                ns.repairOutsideBtn.setCaption(ns.repairOutsideBtn.getValue());
                ns.repairOutsideBtn.setTips(ns.repairOutsideBtn.getValue());
                ns.repairOutsideBtn.show();
                ns.incidentBtn.hide();
                ns.serviceBtn.hide();
            }
            else 
                ns.repairOutsideBtn.hide();

            if(ns.repairOutsideBtn.getValue() != "") //委外不須入CRM
            {
                ns.incidentBtn.hide();
                ns.serviceBtn.hide();
            }
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
        _incidentbtn_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            var today = utils.dateTimeToString(utils.addHours(new Date(), -8));
            var repairNo = ns.repairNo.getValue();
            if(repairNo == "")
            {
              xui.alert("訊息","請先儲存，取得單號!");
              return;  
            }
            var value = uictrl.getValue();   
            if(value == "")  //new Incident
            {
               if(value == "" && repairNo.includes("E"))
               {
                 ns.newIncidentAndServiceRecord();  
                 return;        
               }              
              //repair sheet  
                
               var workid = ns.workid.getValue();
               var work = utils.getItemValue("工號登錄總資料表","工號",workid);
/*               
               var prodoctNo = ns.outsn.getValue();
               var productid = ns.outpn.getValue(); 
                if(prodoctNo == "")
                {
                   prodoctNo = ns.insn.getValue(); 
                   productid = ns.inpn.getValue(); 
                }
*/                
               prodoctNo = ns.insn.getValue(); 
               productid = ns.inpn.getValue(); 
               var item = {"FixOrderNo":repairNo,"ServiceEmplID":LoginUser.EmplID, "DeptID":LoginUser["DeptID"],"CreateDeptID":LoginUser["DeptID"], "CreatorID":LoginUser["EmplID"],
                           "CreateDate": today, "OwnerDeptID":LoginUser["DeptID"],"OwnerID":LoginUser["EmplID"],
                           "ProductNo": prodoctNo, "ProductID": productid, "Description":work["狀況簡述"]};
               var condition = `工號='${workid}'`; 
/*
               var inmodel = ns.inmodel.getUIValue();
               if(inmodel != "")
               {
                 var pdata = utils.getItemValue("crm.Product","ProductNameCHT", inmodel);
                 if(pdata != "")
                 {
                   item["ProductID"] = pdata["ProductID"];  
                   item["ProductNameCHT"] = pdata["ProductNameCHT"];  
                 }
               }
*/               
               var data = utils.getItemValue("工號登錄總資料表","工號",workid);
               item.WorkOrder = workid;  
               if(data != "")
               {    
                 item.CompanyID = data["CompanyID"];
                 item.ContactID = data["ContactID"];
                 item.ContactName = data["連絡人"];
               }
               var loadcb = function(mod){
                   mod.idb.setData(item);
                   mod.idb.updateDataToUI();
               } 
               var destroycb = function(mod){
                       ns.updateIncidentBtn();
               }
               utils.showDataPage("CrmEditForm", null , "newIncident",  loadcb, destroycb);  
            }
            else
            {
                   var condition = `IncidentID='${value}'`;  
                  utils.getTableItems({"tableName":"crm.Incident","condition":condition}, function(data){
                      var rows = utils.getRowMap(data);
                      if(rows.length  > 0)
                      {
                          var item = rows[0];
                          var loadcb2 = function(mod){
                               mod.idb.setData(item);
                               mod.idb.updateDataToUI();
                          } 
                          utils.showDataPage("CrmEditForm", null, "editIncident", loadcb2);
                      }
                      
                  });                        
                   
            }
            
        },

        /**
         * Fired before setUIValue is called. If returns false, setUIValue function will be ignored
         * @method beforeUIValueSet [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _repairextno_beforeuivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            if(ns.repairOutsideBtn.getValue() != "")
                return false;
            if(newValue == "S")
            {
                ns.repairOutsideBtn.show();
                ns.incidentBtn.hide();
                ns.serviceBtn.hide();
            }
            else
            {
                ns.repairOutsideBtn.hide();
                ns.incidentBtn.show();
                ns.serviceBtn.show();
            }
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
        _printbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            if(ns.rdb.updateDataFromUI() == false)
                return;
            var item = ns.rdb.getData();
            item.barcode = `<img src="${utils.textToBase64Barcode(item["登錄編號"])}"></img>`;
            if(item["SL是否需維修報告"])
                item["SL是否需維修報告"] = "&#x2611";
            else 
                item["SL是否需維修報告"] = "&#x2610";

            item["SL是否要測試0"] = "&#x26110";
            item["SL是否要測試1"] = "&#x2610";
            if(item["SL是否要測試"])
                item["SL是否要測試0"] = "&#x2611";
            else 
                item["SL是否要測試1"] = "&#x2611";
            if(item["登錄編號"].includes("R"))
            {
                
              LabelData.printPage(null, item, "維修委託單","print/repair/style.css");
            }
            else 
            {
              item.barcode2 = `<img src="${utils.textToBase64Barcode(item["Unit ID"])}"></img>`;
              LabelData.printPage(null, item, "維修委託單(Exchange)","print/exchange/style.css");
            }
},
        newRepairSheetOne: function(table, datas){
            var ns = this;
            var data = Object.assign(datas);
            var rid =  data["登錄編號"];
            var item = utils.getItemValue(table, "登錄編號", rid);
            if(item == "")
            {
                item = utils.insertTableItem(table, data);
                xui.message(`${table} ${rid} 已新增!`);
            }
            else
                xui.message(`${table} ${rid} 已經存在!`);
            return item;
        },
        writeBackWorkSheets:function(){
             var ns = this;
            var item = utils.getDataFromUI(ns.rdb, false); //no check
            var model = item["In Model"], pn = item["In P/N"], sn = item["In S/N"];
            if(item["變更後型號"] != "")
            {
                model = item["變更後型號"];
                pn = item["變更後P/N"];
                sn = item["變更後S/N"];
            }
            
            var data = {"登錄編號":item["登錄編號"], "Model": model, "P/N": pn, "S/N": sn, "Compressor P/N":pn, "Compressor S/N":sn,
                        "Pump": model, "Pump P/N": pn,  "Pump S/N": sn, "Pump Unit ID": item["Unit ID"], "Report":item["SL是否需維修報告"],"進廠原因":item["SL入廠原因附註"],
                        "保固期":item["上次CN保固截止日期"]};
            utils.modifyTableItem("Cryopump維修工單","登錄編號",data);
            utils.modifyTableItem("Compressor維修工單","登錄編號",data);
            utils.modifyTableItem("Module功能測試表","登錄編號",data);
            utils.modifyTableItem("3phControler維修工單","登錄編號",data);
            utils.modifyTableItem("CylinderHeater維修工單","登錄編號",data);
            //utils.modifyTableItem("Crosshead維修工單","登錄編號",data);
            
        },
        newRepairWorkSheets: function(doTest){
            var ns = this;
            var now = utils.now();
            var cncode = ns.cnCode.getUIValue();
            ns.rdb.updateDataFromUI();
            var item = ns.rdb.getData();
            var model = item["In Model"], pn = item["In P/N"], sn = item["In S/N"];
            if(item["變更後型號"] != "")
            {
                model = item["變更後型號"];
                pn = item["變更後P/N"];
                sn = item["變更後S/N"];
            }
            
            var data = {"登錄編號":item["登錄編號"], "Model": model, "P/N": pn, "S/N": sn,"客戶名稱": item["客戶名稱"], "日期":utils.today(),
                           "保固期":item["上次CN保固截止日期"],"上次登錄編號":item["上次登錄編號"], 
                          "Pump": model, "Pump P/N": pn,  "Pump S/N": sn, "入站時間": now, "Pump Unit ID": item["Unit ID"], "Report":item["SL是否需維修報告"],
                           "Compressor P/N":pn, "Compressor S/N":sn, "進廠原因":item["SL入廠原因附註"]};
            var lastRno = data["上次登錄編號"];
            if( lastRno != "" && lastRno != "N/A")  //帶入上次工單
            {
                var lastItem = utils.getItemValue("CTI Control Number總資料庫","登錄編號", lastRno);
                if(lastItem != "")
                {
                  data["上次登錄時間"] = lastItem["Date Received"];
                  data["上次故障原因"] = lastItem["SL入廠原因附註"]; 
                }
            }
            var sheet = utils.getItemValue("CN分類碼副資料庫","CN分類碼",cncode, "工單");
            if(sheet.includes("Crosshead"))
            {
                data["工單類別"] = "Crosshead";
                if(!sheet.includes("Cryopump")) //主單
                    data["維修站名"] = "Crosshead";
                else    
                    data["維修站名"] = "拆解站";
                data["維修狀態"] = "通知維修";
                var bak = data["S/N"];
                var bak2 = data["Modedl"];
                data["S/N"] = "";
                data["Model"] = "";
                var xdata  = ns.newRepairSheetOne("Crosshead維修工單", data);
                data["S/N"] = bak;
                data["Model"] = bak2;
            }
            if(sheet.includes("Cryopump"))
            {
                //if(sheet.includes("Crosshead") && xdata) //write xhcode
                //    data["Crosshead編號"] = xdata["Crosshead編號"];
                data["工單類別"] = "Cryo Pump";
                if(doTest)
                {
                  data["維修站名"] = "拆解站";
                  data["維修狀態"] = "通知測試";
                }
                else 
                {
                  data["維修站名"] = "拆解站";
                  data["維修狀態"] = "通知維修";
                }
                ns.newRepairSheetOne("Cryopump維修工單", data);
            }
            if(sheet.includes("Compressor"))
            {
                data["維修站名"] = "Compressor";
                data["維修狀態"] = "通知維修";
                ns.newRepairSheetOne("Compressor維修工單", data);
            }
            if(sheet.includes("Module"))
            {
                if(!sheet.includes("Cryopump")) //主單
                    data["維修站名"] = "Module";
                else    
                    data["維修站名"] = "拆解站";
                data["維修狀態"] = "通知維修";
                var bak1 = data["Pump S/N"];
                data["Pump S/N"] = "";
                ns.newRepairSheetOne("Module功能測試表", data);
                data["Pump S/N"] = bak1;
            }
            if(sheet.includes("Cylinder/Heater"))
            {
                data["維修站名"] = "Heater";
                data["維修狀態"] = "通知維修";
                ns.newRepairSheetOne("CylinderHeater維修工單", data);
            }
            if(sheet.includes("Controller"))
            {
                data["維修站名"] = "Controller";
                data["維修狀態"] = "通知維修";
                ns.newRepairSheetOne("3phControler維修工單", data);
            }
            if(sheet.includes("Cryopump") && doTest)
            {
              data["Type"] = "維修前測試";  
              data["維修站名"] = "測試站";
              data["維修狀態"] = "通知測試";  
              var exf = ns.exf.getUIValue();
              if(exf.startsWith("S"))
                 ns.newRepairSheetOne("CryopumpWarranty原因分析表", data);    
              ns.newRepairSheetOne("CryopumpTestForm", data);    
            }
        },
        updateRepairState : function(doTest = false){
            var ns = this;  
            var cncode = ns.cnCode.getUIValue();
            var sheet = utils.getItemValue("CN分類碼副資料庫","CN分類碼",cncode, "工單");
            var state = "";
            if(doTest)
            {
                state = "測試中";
            }
            else if(sheet.includes("Cryopump"))
                state = "待維修";
            else if(sheet.includes("Crosshead"))
                state = "待維修";
            else if(sheet.includes("Compressor"))
                state = "待維修";
            else if(sheet.includes("Module"))
                state = "待維修";
            else if(sheet.includes("Cylinder/Heater"))
                state = "待維修";
            var rno = ns.repairNo.getUIValue();
            var data = {"登錄編號":rno,"維修狀況":state};
            utils.modifyTableItem("CTI Control Number總資料庫", "登錄編號", data);
        },
    /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
    _messagebtn_onclick:function(profile, e, src, value){
        var ns = this, uictrl = profile.boxing();
        var prop = ns.properties;
        if(prop.mode.includes("new"))
        {
            utils.alert("請先按新增");
            return;
        }    
        var cncode = ns.cnCode.getUIValue();
        if(cncode == "")
        {
           utils.alert("請輸入CN分類碼!");
           return; 
        }
        if(ns.exf.getUIValue() == "")
        {
           utils.alert("請輸入維修分類歸屬!");
           return; 
        }        
            var ignoreFields =  ["維修報告"]; //binary, need convert
            utils.saveFormSilent(ns, ignoreFields);
        if(uictrl.getCaption() == "進Bench維修")
        {
            if(ns.rdb.updateDataFromUI() == false)  //check In P/N, S/N, Model
                return;
            var data = ns.rdb.getData();
            var item = utils.getItemValue("Cryopump維修工單","登錄編號", ns.repairNo.getValue());
            if(item != "")
            {
                if(item["維修站名"] == "已入庫")
                    utils.alert("已入庫");
                else 
                    utils.alert("維修中!");
            }
            else 
            {
              //utils.insertTableItem("維修站總資料表",{"登錄編號": data["登錄編號"],"維修站名":"拆解站", "客戶名稱":data["客戶名稱"], "Model":data["Model"], "P/N":data["In P/N"], "S/N":data["In S/N"],
              //                                "維修狀態":"待維修","入站時間":utils.now()});
              ns.newRepairWorkSheets(false);  //no test form
              ns.updateRepairState();
              utils.alert("已通知Bench開始維修!");
            }
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
        _testmessagebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var prop = ns.properties;
            if(prop.mode.includes("new"))
            {
                utils.alert("請先按新增");
                return;
            }    
            var cncode = ns.cnCode.getUIValue();
            if(cncode == "")
            {
               utils.alert("請輸入CN分類碼!");
               return; 
            }
            if(ns.exf.getUIValue() == "")
            {
                utils.alert("請先填寫維修分類歸屬!");
                return;
            }
            var ignoreFields =  ["維修報告"]; //binary, need convert
            utils.saveFormSilent(ns, ignoreFields);

            if(ns.testFirst.getValue() == "1")
            {
                if(ns.rdb.updateDataFromUI() == false)
                    return;
                var data = ns.rdb.getData();
                var item = utils.getItemValue("站內物件查詢","登錄編號", ns.repairNo.getValue());
                if(item != "")
                {
                    utils.alert("已經在維修站了!");
                    return;
                }
//                else 
//                  utils.insertTableItem("維修站總資料表",{"登錄編號": data["登錄編號"],"維修站名":"拆解站", "客戶名稱":data["客戶名稱"], "Model":data["Model"], "P/N":data["In P/N"], "S/N":data["In S/N"],
//                                                  "維修狀態":"待測試","入站時間":utils.now()});        
                
                ns.newRepairWorkSheets(true);  //create test form
                ns.updateRepairState(true);  //do test
                xui.alert("訊息","已通知Bench開始測試!");
            }
            else
                xui.alert("請選先測試，不直接維修!");
        },
        updateLastCnRepairNo: function(){
              var ns = this, prop = ns.properties;
              var insn = ns.insn.getUIValue();
              var data = ns.rdb.getData();
              var logdate = data["Log date"];
              if(insn == "")
              {
                  xui.alert("訊息","請先輸入 [入廠S/N]");
                  return;
              }
              else     
              {
                if(insn == "NA" || insn == "N/A")
                {
                    ns.lastRepairNo.setValue("NA");
                    ns.lastcn.setValue("NA");
                    return;      
                }
/*                  
                var condition = `[Out S/N] = '${insn}' AND [登錄編號] LIKE '%E%' AND [Log date] < '${logdate}' ORDER BY [Log date] DESC`;  
                var item1 = utils.getItemValueByCondition("CTI Control Number總資料庫",condition);
                var condition2 = `[In S/N] = '${insn}' AND [登錄編號] LIKE '%R%' AND [Log date] < '${logdate}' ORDER BY [Log date] DESC`;  
                var item2 = utils.getItemValueByCondition("CTI Control Number總資料庫",condition2);
                var item = "";
                if(item1 == "")
                  item = item2;
                else if(item2 == "")
                  item = item1;
                else  //item1 and item2 both exist
                {
                    if(item1["Log date"] > item2["Log date"])
                        item = item1;
                    else 
                        item = item2;
                }
                */
                var condition = `[In S/N] = '${insn}' AND [Log date] < '${logdate}' ORDER BY [Log date] DESC`;  
                var item = utils.getItemValueByCondition("CTI Control Number總資料庫",condition);
                if(item == "")
                    ns.lastRepairNo.setValue("NA");
                else
                {
                //    ns.inpn.setValue(item["In P/N"]);
                //    ns.inmodel.setValue(item["In Model"]);
                    ns.lastRepairNo.setValue(item["登錄編號"]);
                }
                var condition = `[Out S/N] = '${insn}' AND [Log date] < '${logdate}' ORDER BY [Log date] DESC`;  
                var item = utils.getItemValueByCondition("CTI Control Number總資料庫",condition);
                if(item == "")
                {
                    ns.lastcn.setValue("NA");
                    ns.lastWarrantyDate.setValue(null);
                }
                else 
                {
                    ns.lastcn.setValue(item["CN#"]);
                    ns.lastWarrantyDate.setValue(item["保固期限"]);
                }    
              }
            
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
        _lastrepairno_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            if(n == "")
                ns.updateLastCnRepairNo();
            else if(n != "N/A")
            {
                var loadcb = function(mod){
                    var dialog = mod.dialog;
                    dialog.setSandboxTheme("Army");
                };
                utils.changeDbName(ns.rdb);  //要開一樣的視窗,先換 db name
                utils.showItemPage("CTI Control Number總資料庫", "登錄編號", n, "RepairEditForm","edit", loadcb);
            }
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
        _lastcn_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            
            //if(n == "")
            //    ns.updateLastCnRepairNo();
            if(n != "N/A")
            {
                var loadcb = function(mod){
                    var dialog = mod.dialog;
                    dialog.setSandboxTheme("Army");
                };

                utils.showItemPage("CTI Control Number總資料庫", "CN#", n, "CnEditForm","edit", loadcb);
            }
        },
        /**
         * Fired before input value is changed!
         * @method onChange [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} value , the value
         * @param {}  
         * @param {}  
         * @param {}  
         * @param {}  
        */
        _changedsn_onchange:function(profile, value, o, t, a, r){
            var ns = this, uictrl = profile.boxing();
                if(uictrl.getUIValue() != "")
                {
                    ns.repairExtno.show();
                    ns.repairExtno.setValue('M');
                }
                else
                {
                    ns.repairExtno.setValue('');
                    ns.repairExtno.hide();
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
  
            utils.confirmBtnClick(ns, uictrl);
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
        _confirmname_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing(), prop = ns.properties;
            if(prop.mode.includes("new"))
            {
                utils.alert("請先按新增");
                return;
            }    
            if(ns.rdb.updateDataFromUI() == false)  //check In P/N, S/N, Model
                return;
            var cncode = ns.cnCode.getUIValue();
            if(cncode == "")
            {
               utils.alert("請輸入CN分類碼!");
               return; 
            }
            if(ns.exf.getUIValue() == "")
            {
               utils.alert("請輸入維修分類歸屬!");
               return; 
            }      
            utils.confirmNameClick(ns,uictrl,"秘書");
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
            _unitid_onvaluechange:function(profile, oldValue, newValue, force, tag){
                var ns = this, uictrl = profile.boxing();
                uictrl.setValue(newValue.trim());
                var id = newValue;
                var data = utils.getItemValue("erp.BU3_ID_最新異動日期","ID", id);
                if(data != "")
                {
                  ns.outmodel.setValue(data["換出產品名稱"]);      
                  ns.outpn.setValue(data["換出產品代號"]);      
                  ns.outsn.setValue(data["產品序號"]);      
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
        _plusbtn1_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showTableCombo(ns.inmodel, "Model#2");
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _plusbtn2_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showTableCombo(ns.inpn, "P/N#2");
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _plusbtn3_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showTableCombo(ns.changedModel, "Model#2");
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _plusbtn4_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            utils.showTableCombo(ns.changedPn, "變更後P/N#2");
        },

        showMessageBtns: function(){
            var ns = this;
            var value = ns.testFirst.getUIValue();
            ns.messageBtn.hide();
            ns.testMessageBtn.hide();
            
            if(!LoginUser.Privilege.includes("秘書") && !LoginUser.Privilege.includes("主管"))
                return;
            if(value == "0")
                ns.messageBtn.show();
            else if(value == "1")
                ns.testMessageBtn.show();
        },
        /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.RadioBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _testfirst_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.showMessageBtns();
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
            _insn_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
                var ns = this, uictrl = profile.boxing();
                 var sn= ns.insn.getUIValue();
                if(sn == "" || sn == "NA")
                {
                    sn = "NA";
                    ns.lastRepairNo.setValue(sn);
                    ns.lastcn.setValue(sn);
                    return;
                }
                else
                  ns.updateLastCnRepairNo();
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