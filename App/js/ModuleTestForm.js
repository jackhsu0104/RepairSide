// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ModuleTestForm', 'xui.Module',{
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
                .setHost(host,"mdb")
                .setName("mdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setWidth("55.61904761904762em")
                .setHeight("48em")
                .setCaption("Module功能測試表")
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
                .setCustomStyle({
                    "FRAME" : {
                    },
                    "KEY" : {
                    }
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div779")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("13.714285714285714em")
                .setTop("22.857142857142858em")
                .setHeight("2.057142857142857em")
            );
            
            host.xui_ui_div779.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1506")
                .setDataBinder("mdb")
                .setDataField("維修狀況")
                .setDock("top")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("5em")
                .setLabelCaption("維修狀況")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div780")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("23.61904761904762em")
                .setHeight("2.057142857142857em")
            );
            
            host.xui_ui_div780.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1507")
                .setDataBinder("mdb")
                .setDataField("Cpu PCB S/N")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("8em")
                .setLabelCaption("Cpu PCB S/N")
            );
            
            host.xui_ui_div780.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1508")
                .setDataBinder("mdb")
                .setDataField("Rev#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("Rev.")
            );
            
            host.xui_ui_div780.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1557")
                .setDataBinder("mdb")
                .setDataField("Rev#2")
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("Rev.")
            );
            
            host.xui_ui_div780.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1558")
                .setDataBinder("mdb")
                .setDataField("Relay PCB S/N")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("8em")
                .setLabelCaption("/  Relay PCB S/N")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div793")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("24.38095238095238em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div793.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1595")
                .setDataBinder("mdb")
                .setDataField("Pump S/N")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("8em")
                .setLabelCaption("Pump S/N")
            );
            
            host.xui_ui_div793.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox557")
                .setDataBinder("rdb")
                .setDataField("Pump S/N#2")
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
                .setLeft("23.466666666666665em")
                .setTop("0em")
                .setWidth("23em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("12em")
                .setLabelGap("0em")
                .setLabelCaption("與Module S/N：是否相符")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div793.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1601")
                .setDataBinder("mdb")
                .setDataField("Pump S/N#3")
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div800")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("24.38095238095238em")
                .setHeight("2.057142857142857em")
            );
            
            host.xui_ui_div800.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1642")
                .setDataBinder("mdb")
                .setDataField("Software")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("15em")
                .setLabelSize("8em")
                .setLabelCaption("Software")
            );
            
            host.xui_ui_div800.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1643")
                .setDataBinder("mdb")
                .setDataField("Software#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.xui_ui_div800.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1644")
                .setDataBinder("mdb")
                .setDataField("Run Time")
                .setDock("top")
                .setDockOrder(5)
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("5em")
                .setLabelCaption("Run Time")
            );
            
            host.xui_ui_div800.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1645")
                .setDataBinder("mdb")
                .setDataField("Software#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.xui_ui_div800.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label269")
                .setDock("top")
                .setDockOrder(7)
                .setDockStretch("fixed")
                .setLeft("52.57142857142857em")
                .setTop("0em")
                .setWidth("2em")
                .setHeight("1.5em")
                .setCaption("hrs")
                .setVAlign("bottom")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div820")
                .setDock("top")
                .setLeft("16em")
                .setTop("25.142857142857142em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox356")
                .setDataBinder("mdb")
                .setDataField("Relay")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.19047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Relay")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox357")
                .setDataBinder("mdb")
                .setDataField("USER I/O ")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.95238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("USER I/O ")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label276")
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("53.333333333333336em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("/ Purge")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div820.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox363")
                .setDataBinder("mdb")
                .setDataField("Purge Pass")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("44.95238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div831")
                .setDock("top")
                .setLeft("16em")
                .setTop("25.142857142857142em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div831.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1805")
                .setDataBinder("mdb")
                .setDataField("Heater1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("Heater 加溫讀值1<sup>st</sup>")
            );
            
            host.xui_ui_div831.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label283")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("(>190)/ Purge")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div831.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox372")
                .setDataBinder("mdb")
                .setDataField("Heater1 Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("0.7619047619047619em")
                .setWidth("5em")
                .setCaption("Pass")
            );
            
            host.xui_ui_div831.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label288")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.857142857142854em")
                .setTop("0em")
                .setWidth("3em")
                .setHeight("1.5em")
                .setCaption("/ 控溫")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div831.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox379")
                .setDataBinder("mdb")
                .setDataField("Heater1 Pass#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("46.476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div856")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("25.904761904761905em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div856.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1907")
                .setDataBinder("mdb")
                .setDataField("Heater2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div856.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label301")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("(>190)/ Purge")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div856.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox398")
                .setDataBinder("mdb")
                .setDataField("Heater2 Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("0.7619047619047619em")
                .setWidth("5em")
                .setCaption("Pass")
            );
            
            host.xui_ui_div856.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label302")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.857142857142854em")
                .setTop("0em")
                .setWidth("3em")
                .setHeight("1.5em")
                .setCaption("/ 控溫")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div856.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox399")
                .setDataBinder("mdb")
                .setDataField("Heater2 Pass#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("46.476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div857")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("25.904761904761905em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label303")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("53.333333333333336em")
                .setTop("0em")
                .setWidth("5em")
                .setHeight("1.5em")
                .setCaption("Rough")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox400")
                .setDataBinder("mdb")
                .setDataField("Rough Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.19047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label305")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("/ TC Gauge")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox401")
                .setDataBinder("mdb")
                .setDataField("TcGauge Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("44.95238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox402")
                .setDataBinder("mdb")
                .setDataField("Cooling Pass")
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("44.95238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.xui_ui_div857.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label306")
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("/ Cooling")
                .setVAlign("bottom")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div890")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("25.904761904761905em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div890.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2012")
                .setDataBinder("mdb")
                .setDataField("PhaseA")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("Phase 輸出讀值 A")
            );
            
            host.xui_ui_div890.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label343")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("(125 ~ 175)")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div890.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox447")
                .setDataBinder("mdb")
                .setDataField("PhaseA Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("0.7619047619047619em")
                .setWidth("5em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div891")
                .setDock("top")
                .setLeft("17.523809523809526em")
                .setTop("26.666666666666668em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div891.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2013")
                .setDataBinder("mdb")
                .setDataField("PhaseB")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("10em")
                .setLabelCaption("B")
            );
            
            host.xui_ui_div891.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label345")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("54.095238095238095em")
                .setTop("0em")
                .setWidth("10em")
                .setHeight("1.5em")
                .setCaption("(125 ~ 175)")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div891.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox449")
                .setDataBinder("mdb")
                .setDataField("PhaseB Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("0.7619047619047619em")
                .setWidth("5em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div892")
                .setDock("top")
                .setLeft("18.285714285714285em")
                .setTop("27.428571428571427em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div892.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox595")
                .setDataBinder("rdb")
                .setDataField("PLY1")
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
                .setLeft("24.228571428571428em")
                .setTop("0em")
                .setWidth("19em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("10em")
                .setLabelGap("0em")
                .setLabelCaption("RLY 1 MANUAL OFF")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div892.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2017")
                .setDataBinder("mdb")
                .setDataField("PLY1#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("32em")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div904")
                .setDock("top")
                .setLeft("19.047619047619047em")
                .setTop("28.19047619047619em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div904.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox599")
                .setDataBinder("rdb")
                .setDataField("PLY2")
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
                .setLeft("24.228571428571428em")
                .setTop("0em")
                .setWidth("19em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("10em")
                .setLabelGap("0em")
                .setLabelCaption("RLY 2 MANUAL OFF")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div904.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2047")
                .setDataBinder("mdb")
                .setDataField("PLY2#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("32em")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div906")
                .setDock("top")
                .setLeft("17.523809523809526em")
                .setTop("26.666666666666668em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div906.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2049")
                .setDataBinder("mdb")
                .setDataField("Heater1st#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("22em")
                .setLabelSize("15em")
                .setLabelCaption("Heater 1st 設溫65k ： 50k讀值")
            );
            
            host.xui_ui_div906.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2050")
                .setDataBinder("mdb")
                .setDataField("Heater1st#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("6em")
                .setLabelCaption("Power")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div907")
                .setDock("top")
                .setLeft("18.285714285714285em")
                .setTop("27.428571428571427em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div907.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2051")
                .setDataBinder("mdb")
                .setDataField("Heater1st#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("22em")
                .setLabelSize("15em")
                .setLabelCaption("60k讀值")
            );
            
            host.xui_ui_div907.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2052")
                .setDataBinder("mdb")
                .setDataField("Heater1st#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("6em")
                .setLabelCaption("Power")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div908")
                .setDock("top")
                .setLeft("19.047619047619047em")
                .setTop("28.19047619047619em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div908.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2053")
                .setDataBinder("mdb")
                .setDataField("Heater1st#5")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("22em")
                .setLabelSize("15em")
                .setLabelCaption("65k讀值")
            );
            
            host.xui_ui_div908.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2054")
                .setDataBinder("mdb")
                .setDataField("Heater1st#6")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("6em")
                .setLabelCaption("Power")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div909")
                .setDock("top")
                .setLeft("19.80952380952381em")
                .setTop("28.952380952380953em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2055")
                .setDataBinder("mdb")
                .setDataField("Heater1st#7")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("22em")
                .setLabelSize("15em")
                .setLabelCaption("70k讀值")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2056")
                .setDataBinder("mdb")
                .setDataField("Heater1st#8")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("6em")
                .setLabelCaption("Power")
            );
            
            host.xui_ui_div909.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox467")
                .setDataBinder("mdb")
                .setDataField("Heater1st#1 Pass")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("47.23809523809524em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div926")
                .setDock("top")
                .setDockOrder(90)
                .setLeft("18.285714285714285em")
                .setTop("27.428571428571427em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div926.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2106")
                .setDataBinder("mdb")
                .setDataField("1st Diode S/N")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("32em")
                .setLabelSize("10em")
                .setLabelCaption("1<sup>st</sup> Diode S/N：")
            );
            
            host.xui_ui_div926.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2107")
                .setDataBinder("mdb")
                .setDataField("1st Diode S/N#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("20em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div961")
                .setDock("top")
                .setDockOrder(92)
                .setLeft("19.047619047619047em")
                .setTop("28.19047619047619em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div961.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2210")
                .setDataBinder("mdb")
                .setDataField("2nd Diode S/N")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("32em")
                .setLabelSize("10em")
                .setLabelCaption("2<sup>nd</sup>  Diode S/N：")
            );
            
            host.xui_ui_div961.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2211")
                .setDataBinder("mdb")
                .setDataField("2nd Diode S/N#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("20em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div980")
                .setDock("top")
                .setDockOrder("100")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("14.476190476190476em")
                .setTop("23.61904761904762em")
                .setHeight("2.057142857142857em")
            );
            
            host.xui_ui_div980.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2314")
                .setDataBinder("mdb")
                .setDataField("Remark#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("52em")
                .setLabelSize("5em")
                .setLabelCaption("Remark")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1102")
                .setDock("top")
                .setDockOrder("200")
                .setLeft("16.761904761904763em")
                .setTop("25.904761904761905em")
                .setHeight("2.057142857142857em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div1102.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox660")
                .setDataBinder("rdb")
                .setDataField("Program")
                .setItems([
                    {
                        "id" : "Pump",
                        "caption" : "Pump",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Module",
                        "caption" : "Module",
                        "imageClass" : ""
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("24.99047619047619em")
                .setTop("0em")
                .setWidth("19em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("6em")
                .setLabelGap("0em")
                .setLabelCaption("Program")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div1102.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label509")
                .setDock("top")
                .setDockOrder(1)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("54.857142857142854em")
                .setTop("0em")
                .setWidth("1em")
                .setHeight("1.5em")
                .setCaption("/")
                .setVAlign("bottom")
            );
            
            host.xui_ui_div1102.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox668")
                .setDataBinder("mdb")
                .setDataField("Prgram Pass")
                .setDock("top")
                .setDockOrder(3)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("45.714285714285715em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Pass")
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1185")
                .setDock("top")
                .setDockOrder(91)
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("15.238095238095237em")
                .setTop("24.38095238095238em")
                .setHeight("7.695238095238095em")
            );
            
            host.xui_ui_div1185.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout77")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("18.285714285714285em")
                .setWidth("52.03809523809524em")
                .setHeight("7.238095238095238em")
                .setLayoutData({
                    "rows" : 3,
                    "cols" : 10,
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
                            "value" : "Curve Type"
                        },
                        "B1" : {
                            "value" : "1-11k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "1-15k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "1-17k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E1" : {
                            "value" : "1-19k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "value" : "1-21k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "value" : "1-25k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H1" : {
                            "value" : "1-45k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I1" : {
                            "value" : "1-77k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "J1" : {
                            "value" : "1-296k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3249")
                .setName("A2")
                .setDataBinder("mdb")
                .setDataField("#1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.466666666666667em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "A2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3250")
                .setName("B2")
                .setDataBinder("mdb")
                .setDataField("#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3251")
                .setName("C2")
                .setDataBinder("mdb")
                .setDataField("#3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3252")
                .setName("D2")
                .setDataBinder("mdb")
                .setDataField("#4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "D2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3253")
                .setName("E2")
                .setDataBinder("mdb")
                .setDataField("#5")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "E2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3254")
                .setName("F2")
                .setDataBinder("mdb")
                .setDataField("#6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "F2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3255")
                .setName("G2")
                .setDataBinder("mdb")
                .setDataField("#7")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "G2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3256")
                .setName("H2")
                .setDataBinder("mdb")
                .setDataField("#8")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "H2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3257")
                .setName("I2")
                .setDataBinder("mdb")
                .setDataField("#9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "I2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3258")
                .setName("J2")
                .setDataBinder("mdb")
                .setDataField("#10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.723809523809524em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "J2"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3259")
                .setName("A3")
                .setDataBinder("mdb")
                .setDataField("#11")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.466666666666667em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "A3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3260")
                .setName("B3")
                .setDataBinder("mdb")
                .setDataField("#12")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3261")
                .setName("C3")
                .setDataBinder("mdb")
                .setDataField("#13")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3262")
                .setName("D3")
                .setDataBinder("mdb")
                .setDataField("#14")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "D3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3263")
                .setName("E3")
                .setDataBinder("mdb")
                .setDataField("#15")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "E3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3264")
                .setName("F3")
                .setDataBinder("mdb")
                .setDataField("#16")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "F3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3265")
                .setName("G3")
                .setDataBinder("mdb")
                .setDataField("#17")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "G3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3266")
                .setName("H3")
                .setDataBinder("mdb")
                .setDataField("#8")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "H3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3267")
                .setName("I3")
                .setDataBinder("mdb")
                .setDataField("#9")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "I3"
            );
            
            host.xui_ui_formlayout77.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3268")
                .setName("J3")
                .setDataBinder("mdb")
                .setDataField("#20")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.723809523809524em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "J3"
            );
            
            host.form.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div1186")
                .setDock("top")
                .setDockOrder(93)
                .setLeft("17.523809523809526em")
                .setTop("26.666666666666668em")
                .setHeight("8.685714285714285em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div1186.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout78")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("18.285714285714285em")
                .setWidth("52.03809523809524em")
                .setHeight("7.238095238095238em")
                .setLayoutData({
                    "rows" : 3,
                    "cols" : 10,
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
                            "value" : "Curve Type"
                        },
                        "B1" : {
                            "value" : "1-11k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "1-15k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "1-17k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "E1" : {
                            "value" : "1-19k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "F1" : {
                            "value" : "1-21k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "G1" : {
                            "value" : "1-25k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "H1" : {
                            "value" : "1-45k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "I1" : {
                            "value" : "1-77k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "J1" : {
                            "value" : "1-296k",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3269")
                .setName("A2")
                .setDataBinder("mdb")
                .setDataField("#21")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.466666666666667em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "A2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3270")
                .setName("B2")
                .setDataBinder("mdb")
                .setDataField("#22")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3271")
                .setName("C2")
                .setDataBinder("mdb")
                .setDataField("#23")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3272")
                .setName("D2")
                .setDataBinder("mdb")
                .setDataField("#24")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "D2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3273")
                .setName("E2")
                .setDataBinder("mdb")
                .setDataField("#25")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "E2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3274")
                .setName("F2")
                .setDataBinder("mdb")
                .setDataField("#26")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "F2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3275")
                .setName("G2")
                .setDataBinder("mdb")
                .setDataField("#27")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "G2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3276")
                .setName("H2")
                .setDataBinder("mdb")
                .setDataField("#28")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "H2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3277")
                .setName("I2")
                .setDataBinder("mdb")
                .setDataField("#29")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "I2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3278")
                .setName("J2")
                .setDataBinder("mdb")
                .setDataField("#30")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.723809523809524em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "J2"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3279")
                .setName("A3")
                .setDataBinder("mdb")
                .setDataField("#31")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.466666666666667em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "A3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3280")
                .setName("B3")
                .setDataBinder("mdb")
                .setDataField("#32")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3281")
                .setName("C3")
                .setDataBinder("mdb")
                .setDataField("#33")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3282")
                .setName("D3")
                .setDataBinder("mdb")
                .setDataField("#34")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "D3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3283")
                .setName("E3")
                .setDataBinder("mdb")
                .setDataField("#35")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "E3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3284")
                .setName("F3")
                .setDataBinder("mdb")
                .setDataField("#36")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "F3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3285")
                .setName("G3")
                .setDataBinder("mdb")
                .setDataField("#37")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "G3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3286")
                .setName("H3")
                .setDataBinder("mdb")
                .setDataField("#38")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "H3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3287")
                .setName("I3")
                .setDataBinder("mdb")
                .setDataField("#39")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.876190476190477em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "I3"
            );
            
            host.xui_ui_formlayout78.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3288")
                .setName("J3")
                .setDataBinder("mdb")
                .setDataField("#40")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("4.723809523809524em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "J3"
            );
            
            host.form.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block305")
                .setDock("top")
                .setDockOrder(-1)
                .setLeft("28.952380952380953em")
                .setTop("4.571428571428571em")
                .setHeight("15.238095238095237em")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1475")
                .setDataBinder("mdb")
                .setDataField("客戶")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("客戶")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput991")
                .setDataBinder("mdb")
                .setDataField("日期")
                .setLeft("13.714285714285714em")
                .setTop("0.7619047619047619em")
                .setWidth("11.428571428571429em")
                .setLabelSize("3em")
                .setLabelCaption("日期")
                .setType("date")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1476")
                .setDataBinder("mdb")
                .setDataField("登錄編號")
                .setLeft("25.752380952380953em")
                .setTop("0.7619047619047619em")
                .setWidth("13.333333333333334em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox339")
                .setDataBinder("mdb")
                .setDataField("Report")
                .setLeft("43.42857142857143em")
                .setTop("0.7619047619047619em")
                .setWidth("7.466666666666667em")
                .setCaption("Report")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1477")
                .setDataBinder("mdb")
                .setDataField("Pump")
                .setLeft("0.7619047619047619em")
                .setTop("3.0476190476190474em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1478")
                .setDataBinder("mdb")
                .setDataField("P/N")
                .setLeft("13.714285714285714em")
                .setTop("3.0476190476190474em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1479")
                .setDataBinder("mdb")
                .setDataField("S/N")
                .setLeft("27.80952380952381em")
                .setTop("3.0476190476190474em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1480")
                .setDataBinder("mdb")
                .setDataField("Module#1")
                .setLeft("-0.22857142857142856em")
                .setTop("5.333333333333333em")
                .setWidth("12.266666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("Module")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1481")
                .setDataBinder("mdb")
                .setDataField("P/N#1")
                .setLeft("13.714285714285714em")
                .setTop("5.333333333333333em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1482")
                .setDataBinder("mdb")
                .setDataField("S/N#1")
                .setLeft("27.80952380952381em")
                .setTop("5.333333333333333em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1483")
                .setDataBinder("mdb")
                .setDataField("Module#2")
                .setLeft("-0.22857142857142856em")
                .setTop("7.619047619047619em")
                .setWidth("12.266666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("Module")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1484")
                .setDataBinder("mdb")
                .setDataField("P/N#2")
                .setLeft("13.714285714285714em")
                .setTop("7.619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1485")
                .setDataBinder("mdb")
                .setDataField("S/N#2")
                .setLeft("27.80952380952381em")
                .setTop("7.619047619047619em")
                .setWidth("11.352380952380953em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1486")
                .setDataBinder("mdb")
                .setDataField("Remark")
                .setLeft("15.238095238095237em")
                .setTop("12.19047619047619em")
                .setWidth("34.285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("Remark")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1487")
                .setDataBinder("mdb")
                .setDataField("Pump Unit ID")
                .setLeft("-0.22857142857142856em")
                .setTop("12.19047619047619em")
                .setWidth("14.704761904761904em")
                .setLabelSize("7em")
                .setLabelCaption("Pump Unit ID")
            );
            
            host.xui_ui_block305.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox546")
                .setDataBinder("mdb")
                .setDataField("維修方式")
                .setItems([
                    {
                        "id" : "Repair",
                        "caption" : "Repair",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Exchange",
                        "caption" : "Exchange",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CIC/W",
                        "caption" : "CIC/W"
                    },
                    {
                        "id" : "Test",
                        "caption" : "Test"
                    }
                ])
                .setLeft("0.7619047619047619em")
                .setTop("9.904761904761905em")
                .setWidth("33.44761904761905em")
                .setHeight("1.7333333333333334em")
                .setSelMode("multi")
                .setLabelSize("4em")
                .setLabelGap("0em")
                .setLabelCaption("維修方式")
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