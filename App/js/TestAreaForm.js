// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.TestAreaForm', 'xui.Module',{
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
                .setHost(host,"tdb")
                .setName("tdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setDock("cover")
                .setLeft("7.266666666666667em")
                .setTop("2.6em")
                .setWidth("66.73333333333333em")
                .setHeight("36.333333333333336em")
                .setInitPos("auto")
                .setCaption("測試區")
                .setMovable(false)
                .setMaxBtn(false)
                .setCloseBtn(false)
                .setStatus("max")
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
                .setHost(host,"saveBtn")
                .setDock("right")
                .setLeft("23.923809523809524em")
                .setTop("0.6857142857142857em")
                .setWidth("6.733333333333333em")
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block36")
                .setDock("top")
                .setLeft("36em")
                .setTop("3.3333333333333335em")
                .setHeight("6.666666666666667em")
            );
            
            host.xui_ui_block36.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setDataField("測試區登錄編號")
                .setLeft("6em")
                .setTop("4.133333333333334em")
                .setWidth("13.733333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
            );
            
            host.xui_ui_block36.append(
                xui.create("xui.UI.Button")
                .setHost(host,"newBtn")
                .setLeft("20.666666666666668em")
                .setTop("4em")
                .setWidth("10em")
                .setHeight("2em")
                .setCaption("新增Test Form")
                .onClick("_newbtn_onclick")
            );
            
            host.xui_ui_block36.append(
                xui.create("xui.UI.Button")
                .setHost(host,"loadBtn")
                .setLeft("31.333333333333332em")
                .setTop("4.133333333333334em")
                .setWidth("12.666666666666666em")
                .setHeight("2em")
                .setCaption("載入最新一筆Test Form")
                .onClick("_loadbtn_onclick")
            );
            
            host.xui_ui_block36.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"areaTabs")
                .setItems([
                    {
                        "id" : "A",
                        "caption" : "測試區A",
                        "imageClass" : ""
                    },
                    {
                        "id" : "B",
                        "caption" : "測試區B"
                    }
                ])
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setHeight("3.2em")
                .setNoPanel(true)
                .setValue("A")
                .afterValueSet("_areatabs_aftervalueset")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "0",
                        "caption" : "CH1",
                        "closeBtn" : true
                    },
                    {
                        "id" : "1",
                        "caption" : "CH2",
                        "closeBtn" : true
                    }
                ])
                .setDock("top")
                .setLeft("0em")
                .setTop("0em")
                .setHeight("2.6666666666666665em")
                .setItemWidth(null)
                .setNoPanel(true)
                .setValue("1")
                .afterValueSet("_tabs_aftervalueset")
                .beforePageClose("_tabs_beforepageclose")
            );
            
            host.form.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block62")
                .setDock("fill")
                .setLeft("13.714285714285714em")
                .setTop("11.428571428571429em")
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
            
            host.xui_ui_block62.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"testLayout")
                .setDock("fill")
                .setDockOrder(1)
                .setLeft("13.714285714285714em")
                .setTop("6.095238095238095em")
                .setWidth("88.66666666666667em")
                .setHeight("34.4em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 14,
                    "cols" : 2,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 1,
                            "rowspan" : 6,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 8,
                            "col" : 1,
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
                            "manualHeight" : 30
                        },
                        "14" : {
                            "manualHeight" : 30
                        }
                    }
                })
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div307")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("88.46666666666667em")
                .setHeight("1.9333333333333333em"),
                "A1"
            );
            
            host.xui_ui_div307.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input279")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.xui_ui_div307.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input280")
                .setDataBinder("tdb")
                .setDataField("P/N")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_div307.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input281")
                .setDataBinder("tdb")
                .setDataField("S/N")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_div307.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input282")
                .setDataBinder("tdb")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_div307.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input283")
                .setDataBinder("tdb")
                .setDataField("Type")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setLabelSize("1em")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div308")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("88.46666666666667em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A2"
            );
            
            host.xui_ui_div308.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput157")
                .setDataBinder("tdb")
                .setDataField("Test")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("Test")
                .setType("getter")
                .onClick("_xui_ui_input632_onclick")
            );
            
            host.xui_ui_div308.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox91")
                .setDataBinder("tdb")
                .setDataField("Test Plate")
                .setItems([
                    {
                        "id" : "OB/IS/P300",
                        "caption" : "OB/IS/P300",
                        "imageClass" : ""
                    },
                    {
                        "id" : "CT",
                        "caption" : "CT",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Other",
                        "caption" : "Other"
                    }
                ])
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("14.4em")
                .setTop("-0.0761904761904762em")
                .setWidth("26em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("6em")
                .setLabelGap("0em")
                .setLabelCaption("Test Plate")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div308.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput158")
                .setDataBinder("tdb")
                .setDataField("AssyOK")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("AssyOK")
                .setType("getter")
                .onClick("_xui_ui_input634_onclick")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div309")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A3"
            );
            
            host.xui_ui_div309.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput159")
                .setDataBinder("tdb")
                .setDataField("TestDate")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div309.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input284")
                .setDataBinder("tdb")
                .setDataField("Supply")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setLabelSize("3.5em")
                .setLabelCaption("Supply")
            );
            
            host.xui_ui_div309.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input286")
                .setDataBinder("tdb")
                .setDataField("Return")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setLabelSize("4em")
                .setLabelCaption("/Return")
            );
            
            host.xui_ui_div309.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input287")
                .setDataBinder("tdb")
                .setDataField("Ch")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("4em")
                .setLabelSize("2em")
                .setLabelCaption("Ch")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div310")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A4"
            );
            
            host.xui_ui_div310.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input288")
                .setDataBinder("tdb")
                .setDataField("Comp")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("Comp")
            );
            
            host.xui_ui_div310.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input289")
                .setDataBinder("tdb")
                .setDataField("Comp#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("4em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.xui_ui_div310.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input290")
                .setDataBinder("tdb")
                .setDataField("Comp#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("of")
            );
            
            host.xui_ui_div310.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input291")
                .setDataBinder("tdb")
                .setDataField("Pump#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div311")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A5"
            );
            
            host.xui_ui_div311.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput160")
                .setDataBinder("tdb")
                .setDataField("Start Time")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("Start Time")
                .setType("time")
            );
            
            host.xui_ui_div311.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input292")
                .setDataBinder("tdb")
                .setDataField("Start Time#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setWidth("4em")
                .setLabelSize("1em")
                .setLabelCaption("/")
            );
            
            host.xui_ui_div311.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input293")
                .setDataBinder("tdb")
                .setDataField("Start Time#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("of")
            );
            
            host.xui_ui_div311.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input294")
                .setDataBinder("tdb")
                .setDataField("Pump#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div313")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A6"
            );
            
            host.xui_ui_div313.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input295")
                .setDataBinder("tdb")
                .setDataField("20k/17k")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div313.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput161")
                .setDataBinder("tdb")
                .setDataField("20k/17k#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div314")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A7"
            );
            
            host.xui_ui_div314.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input296")
                .setDataBinder("tdb")
                .setDataField("20k/17k#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div314.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput162")
                .setDataBinder("tdb")
                .setDataField("20k/17k#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div315")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A8"
            );
            
            host.xui_ui_div315.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input297")
                .setDataBinder("tdb")
                .setDataField("底溫1st")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("底溫  1<sup>st</sup>")
            );
            
            host.xui_ui_div315.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input298")
                .setDataBinder("tdb")
                .setDataField("底溫2nd")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("  2<sup>nd</sup>")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div316")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A12"
            );
            
            host.xui_ui_div316.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input299")
                .setDataBinder("tdb")
                .setDataField("100k #1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("7em")
                .setLabelCaption("1<sup>st</sup>100k #1 1<sup>st</sup>")
            );
            
            host.xui_ui_div316.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input300")
                .setDataBinder("tdb")
                .setDataField("100k #2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div317")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A13"
            );
            
            host.xui_ui_div317.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input301")
                .setDataBinder("tdb")
                .setDataField("100k #3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("7em")
                .setLabelCaption("15mins #2 1<sup>st</sup>")
            );
            
            host.xui_ui_div317.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input302")
                .setDataBinder("tdb")
                .setDataField("100k #4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div318")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A9"
            );
            
            host.xui_ui_div318.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label46")
                .setDock("top")
                .setLeft("8.380952380952381em")
                .setTop("1.5238095238095237em")
                .setHeight("1.8285714285714285em")
                .setCaption("1<sup>st</sup>65k#1  15mins,#2 15mins / 1<sup>st</sup>85k#1  15mins,#2 15mins")
                .setHAlign("left")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div319")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A10"
            );
            
            host.xui_ui_div319.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input303")
                .setDataBinder("tdb")
                .setDataField("65k#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("7em")
                .setLabelSize("3em")
                .setLabelCaption("#1 1<sup>st</sup>")
            );
            
            host.xui_ui_div319.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input304")
                .setDataBinder("tdb")
                .setDataField("65k#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div319.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input305")
                .setDataBinder("tdb")
                .setDataField("85k#1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("9em")
                .setLabelSize("4em")
                .setLabelCaption("/ #1 1<sup>st</sup>")
            );
            
            host.xui_ui_div319.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input308")
                .setDataBinder("tdb")
                .setDataField("85k#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div320")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em"),
                "A11"
            );
            
            host.xui_ui_div320.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input309")
                .setDataBinder("tdb")
                .setDataField("65k#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("7em")
                .setLabelSize("3em")
                .setLabelCaption("#2 1<sup>st</sup>")
            );
            
            host.xui_ui_div320.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input310")
                .setDataBinder("tdb")
                .setDataField("65k#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div320.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input311")
                .setDataBinder("tdb")
                .setDataField("85k#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("9em")
                .setLabelSize("4em")
                .setLabelCaption("/ #2 1<sup>st</sup>")
            );
            
            host.xui_ui_div320.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input312")
                .setDataBinder("tdb")
                .setDataField("85k#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div321")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.2em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A14"
            );
            
            host.xui_ui_div321.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input313")
                .setDataBinder("tdb")
                .setDataField("Warm Up")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("5em")
                .setLabelCaption("Warm Up")
            );
            
            host.xui_ui_div321.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox92")
                .setDataBinder("tdb")
                .setDataField("Warm Up Pass")
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
                .setLeft("26.514285714285716em")
                .setTop("7.238095238095238em")
                .setWidth("15em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("1em")
                .setLabelGap("0em")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div322")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.266666666666666em")
                .setHeight("11.666666666666666em"),
                "B3"
            );
            
            host.xui_ui_div322.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input314")
                .setDataBinder("tdb")
                .setDataField("Fail 原因")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Fail 原因")
                .setMultiLines(true)
            );
            
            host.testLayout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div323")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("44.266666666666666em")
                .setHeight("11.666666666666666em"),
                "B9"
            );
            
            host.xui_ui_div323.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input315")
                .setDataBinder("tdb")
                .setDataField("處理情形")
                .setDock("fill")
                .setLeft("11.428571428571429em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("處理情形")
                .setMultiLines(true)
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
            "onReady" : "_page_onready",
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
            ns.saveChamber();
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
           // ns.tabs.setValue(0);
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
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
        _xui_ui_input632_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(null,uictrl,"維修");
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
        _xui_ui_input634_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.signNameClick(null,uictrl,"維修");
        },
        /**
         * Fired before user clicked the close button on a tab. If returns false, the tab won't be closed
         * @method beforePageClose [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , the current item
         * @param {} value  Object
        */
        _tabs_beforepageclose:function(profile, item, value){
            var ns = this, uictrl = profile.boxing();
            xui.confirm("詢問","是否要清除"+item.caption+"?",function(){
                var id = item.id;
                ns.saveChamber();
                ns.rowidList[id] = -1;
                ns.tabs.setValue(item.id, true);
                ns.saveTestArea();
            });
            return false;
        },
        updateTabs:function(){
            var ns = this;
            var items = [];
            var keys = Object.keys(ns.testDatas);
            for(var i=0; i<keys.length;i++){
                 var k = keys[i];
                 var e = ns.testDatas[k];
                 items.push({"id":e.rowid, "caption": k});             
            }            
            ns.tabs.setItems(items);
        },
        loadTestArea: function(area){
            var ns = this;
            ns.rowidList = Array(ns.chamberCount).fill(-1);
            var datas = utils.getItemValue("測試區總資料表","Area", area, "*", true);
            if(datas != "")
            {
              for(var i=0; i<datas.length; i++)
              {
                var data= datas[i];
                var id = data.CH;
                ns.rowidList[id] = data.TestFormRowid;  
              }
            }
            ns.dialog.setCaption("測試區"+area);
        },
        saveTestArea: function(){
          var ns= this;
          var area= ns.currentArea;
          utils.removeTableItem("測試區總資料表","Area", area);  
            var items = ns.tabs.getItems();
          for(var i=0; i<items.length; i++)
          {
            var item = items[i];  
            var rowid = ns.rowidList[i];   
            if(rowid >= 0)
            {
              var rno = utils.getItemValue("CryopumpTestForm","rowid", rowid, "登錄編號");   
              var data = {"Area":area, "CH": item.id, "TestFormRowid": rowid,"登錄編號":rno};
            }
            else 
              var data = {"Area":area, "CH": item.id, "TestFormRowid": -1,"登錄編號": ""};  
            utils.insertTableItem("測試區總資料表", data);  
          }
        },
        loadChamber: function(){
          var ns = this;    
          var id = ns.tabs.getValue();  
          var rowid = ns.rowidList[id];  
          if(rowid < 0)
          {
              ns.testLayout.hide();
              return;
          }
          ns.testLayout.show();
          var data = utils.getItemValue("CryopumpTestForm","rowid", rowid);
          ns.tdb.setData(data);
          ns.tdb.updateDataToUI();  
        },
        saveChamber: function(){
          var ns = this;
          ns.tdb.updateDataFromUI();  
          var data = ns.tdb.getData();  
          if(typeof data.rowid != "undefined" && data.rowid >= 0)  
              utils.modifyTableItem("CryopumpTestForm","rowid", data);
        },
        checkItemExists: function(rno){
            var data = utils.getItemValue("測試區總資料表","登錄編號", rno);
            return data != "";
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _newbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var rno = ns.repairNo.getUIValue();
            if(rno == "")
            {
              utils.alert("請先輸入登錄編號");
              return;  
            }
            if(ns.checkItemExists(rno))
            {
              utils.alert(rno + " 已經在架上!");
              return;  
            }    
            ns.saveChamber();  
            var data = utils.newCryoPumpTestForm(rno);
            var id = ns.tabs.getValue();
            ns.rowidList[id] = data.rowid;
            ns.loadChamber();
            ns.saveTestArea();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _loadbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var rno = ns.repairNo.getUIValue();
            if(rno == "")
            {
              utils.alert("請先輸入登錄編號");
              return;  
            }
            if(ns.checkItemExists(rno))
            {
              utils.alert(rno + " 已經在架上!");
              return;  
            }    
            var rdata = utils.getItemValue("CTI Control Number總資料庫","登錄編號", rno);
            if(rdata == "")
            {
                utils.alert("查無此登錄編號!");
                return;
            }
            var data = utils.getItemValue("CryopumpTestForm", "登錄編號", rno,"*", true);
            if(data == "")
                data = utils.newCryoPumpTestForm(rno);
            else
            {
                data.sort(function(a,b){
                  return b.rowid - a.rowid; //DESC      
                });
                data = data[0];
            }
            ns.saveChamber();  
             var id = ns.tabs.getValue();
            ns.rowidList[id] = data.rowid;
            ns.loadChamber();
            ns.saveTestArea();
        },
        _page_onready:function(e,i){
            var ns = this;
            ns.chamberCount = 15;
            var items = [];
            ns.rowidList = Array(ns.chamberCount).fill(-1);
            for(var i=0; i<ns.chamberCount; i++)
              items.push({"id": i,"caption":"CH"+(i+1),"closeBtn":true});      
            ns.tabs.setItems(items);
            ns.currentArea = "A";
            ns.loadTestArea("A");
            ns.tabs.setValue(0);
        },

        /**
         * Fired after setValue is called
         * @method afterValueSet [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _tabs_aftervalueset:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            if(newValue == null)
                return;
            if(oldValue != null)
                ns.saveChamber();
            if(newValue != null)
                ns.loadChamber();
        },
        /**
         * Fired after setValue is called
         * @method afterValueSet [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _areatabs_aftervalueset:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
                 if(ns.currentArea)
                 {
                    ns.saveChamber();
                    ns.saveTestArea();
                 }
                var area = newValue;
                ns.currentArea = area;
                ns.loadTestArea(area);
                ns.tabs.setValue(0,true);
        },
        _page_aftershow:function(e,i){
            var ns = this, uictrl = profile.boxing();

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