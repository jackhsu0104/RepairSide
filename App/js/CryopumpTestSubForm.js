// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CryopumpTestSubForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "rowid",
            "tableName" : "CryopumpTestForm",
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
                .setLeft("3.2666666666666666em")
                .setTop("1.9333333333333333em")
                .setWidth("70.06666666666666em")
                .setHeight("43.4em")
                .setCaption("Cryopump Test Form子表")
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
                .setHost(host,"newBtn")
                .setDock("left")
                .setLeft("24.685714285714287em")
                .setTop("0.6857142857142857em")
                .setWidth("7em")
                .setCaption("新增測試單")
                .onClick("_newbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"reportBtn")
                .setAutoTips(false)
                .setLeft("15.466666666666667em")
                .setTop("0.8666666666666667em")
                .setWidth("8em")
                .setCaption("產生測試報告")
                .onClick("_reportbtn_onclick")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"form")
                .setDock("fill")
                .setLeft("12.952380952380953em")
                .setTop("10.666666666666666em")
                .setHeight("13em")
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
                xui.create("xui.UI.FormLayout")
                .setHost(host,"layout")
                .setDock("top")
                .setDockOrder(1)
                .setLeft("13.714285714285714em")
                .setTop("6.095238095238095em")
                .setWidth("67.8em")
                .setHeight("29.133333333333333em")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div414")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("67.66666666666667em")
                .setHeight("1.9333333333333333em"),
                "A1"
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input621")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setReadonly(true)
                .setDock("top")
                .setDockOrder(1)
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input622")
                .setDataBinder("tdb")
                .setDataField("P/N")
                .setReadonly(true)
                .setDock("top")
                .setDockOrder(2)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input623")
                .setDataBinder("tdb")
                .setDataField("S/N")
                .setReadonly(true)
                .setDock("top")
                .setDockOrder(3)
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repairNo")
                .setDataBinder("tdb")
                .setDataField("登錄編號")
                .setReadonly(true)
                .setDock("top")
                .setDockOrder(4)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4327")
                .setDataBinder("tdb")
                .setDataField("item")
                .setReadonly(true)
                .setDock("top")
                .setDockOrder(0)
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("3em")
                .setLabelSize("1em")
                .setLabelCaption("#")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox1162")
                .setDataBinder("tdb")
                .setDataField("維修前測試")
                .setLeft("54em")
                .setTop("0.06666666666666667em")
                .setWidth("8.8em")
                .setCaption("維修前測試")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div415")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("67.66666666666667em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A2"
            );
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"test")
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
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox326")
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
                .setDockMargin({
                    "left" : 0,
                    "top" : -5,
                    "right" : 0,
                    "bottom" : 0
                })
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
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"assyOk")
                .setDataBinder("tdb")
                .setDataField("AssyOK")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("4em")
                .setLabelCaption("AssyOK")
                .setType("getter")
                .onClick("_xui_ui_input634_onclick")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div423")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A3"
            );
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testDate")
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
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input637")
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
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input638")
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
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input639")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div424")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A4"
            );
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input642")
                .setDataBinder("tdb")
                .setDataField("Comp")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("Comp")
                .setItems([
                    {
                        "id" : "9600",
                        "caption" : "9600"
                    },
                    {
                        "id" : "9600S",
                        "caption" : "9600S"
                    },
                    {
                        "id" : "HC70",
                        "caption" : "HC70"
                    },
                    {
                        "id" : "8500",
                        "caption" : "8500"
                    }
                ])
            );
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input643")
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
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input644")
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
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input645")
                .setDataBinder("tdb")
                .setDataField("Pump#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    },
                    {
                        "id" : "OB-8系列",
                        "caption" : "OB-8系列"
                    },
                    {
                        "id" : "OB-250F系列",
                        "caption" : "OB-250F系列"
                    },
                    {
                        "id" : "OB-10系列",
                        "caption" : "OB-10系列"
                    },
                    {
                        "id" : "IS-8系列",
                        "caption" : "IS-8系列"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div425")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A5"
            );
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"st")
                .setDataBinder("tdb")
                .setDataField("Start Time")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("Start Time")
                .setType("time")
                .afterUIValueSet("_st_afteruivalueset")
            );
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input679")
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
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input680")
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
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input681")
                .setDataBinder("tdb")
                .setDataField("Pump#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("3em")
                .setLabelCaption("Pump")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    },
                    {
                        "id" : "OB-8系列",
                        "caption" : "OB-8系列"
                    },
                    {
                        "id" : "OB-250F系列",
                        "caption" : "OB-250F系列"
                    },
                    {
                        "id" : "OB-10系列",
                        "caption" : "OB-10系列"
                    },
                    {
                        "id" : "IS-8系列",
                        "caption" : "IS-8系列"
                    },
                    {
                        "id" : "P300",
                        "caption" : "P300"
                    }
                ])
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div455")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A6"
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.Input")
                .setHost(host,"min1")
                .setDataBinder("tdb")
                .setDataField("20k/17k")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"t1")
                .setDataBinder("tdb")
                .setDataField("20k/17k#2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
                .afterUIValueSet("_t1_afteruivalueset")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div456")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A7"
            );
            
            host.xui_ui_div456.append(
                xui.create("xui.UI.Input")
                .setHost(host,"min2")
                .setDataBinder("tdb")
                .setDataField("20k/17k#3")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div456.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"t2")
                .setDataBinder("tdb")
                .setDataField("20k/17k#4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
                .afterUIValueSet("_t2_afteruivalueset")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div457")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A8"
            );
            
            host.xui_ui_div457.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input736")
                .setDataBinder("tdb")
                .setDataField("底溫1st")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("底溫  1<sup>st</sup>")
            );
            
            host.xui_ui_div457.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input737")
                .setDataBinder("tdb")
                .setDataField("底溫2nd")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("  2<sup>nd</sup>")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div458")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A12"
            );
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input852")
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
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input853")
                .setDataBinder("tdb")
                .setDataField("100k #2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div459")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A13"
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input951")
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
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input952")
                .setDataBinder("tdb")
                .setDataField("100k #4")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div460")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A9"
            );
            
            host.xui_ui_div460.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label201")
                .setDock("top")
                .setLeft("8.380952380952381em")
                .setTop("1.5238095238095237em")
                .setHeight("1.8285714285714285em")
                .setCaption("1<sup>st</sup>65k#1  15mins,#2 15mins / 1<sup>st</sup>85k#1  15mins,#2 15mins")
                .setHAlign("left")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div461")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A10"
            );
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input740")
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
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input741")
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
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input742")
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
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input743")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div462")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em"),
                "A11"
            );
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input844")
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
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input845")
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
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input846")
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
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input847")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div463")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A14"
            );
            
            host.xui_ui_div463.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input956")
                .setDataBinder("tdb")
                .setDataField("Warm Up")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("5em")
                .setLabelCaption("Warm Up")
                .setType("time")
            );
            
            host.xui_ui_div463.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox342")
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
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div592")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("11.666666666666666em"),
                "B3"
            );
            
            host.xui_ui_div592.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2162")
                .setDock("bottom")
                .setLeft("8em")
                .setTop("8.666666666666666em")
                .setHeight("1.9333333333333333em")
            );
            
            host.xui_ui_div2162.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sign1")
                .setDataBinder("tdb")
                .setDataField("TestName1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_sign1_onclick")
            );
            
            host.xui_ui_div2162.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testDate1")
                .setDataBinder("tdb")
                .setDataField("TestDate1")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div592.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1025")
                .setDataBinder("tdb")
                .setDataField("Fail 原因")
                .setDock("fill")
                .setLeft("5.6em")
                .setTop("0.26666666666666666em")
                .setWidth("18em")
                .setHeight("6em")
                .setLabelSize("8em")
                .setLabelCaption("Fail 原因")
                .setMultiLines(true)
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div593")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.8em")
                .setHeight("11.666666666666666em"),
                "B9"
            );
            
            host.xui_ui_div593.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div2167")
                .setDock("bottom")
                .setLeft("8.761904761904763em")
                .setTop("9.447619047619048em")
                .setHeight("1.9333333333333333em")
            );
            
            host.xui_ui_div2167.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sign2")
                .setDataBinder("tdb")
                .setDataField("TestName2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("12em")
                .setLabelSize("4em")
                .setLabelCaption("簽名")
                .setType("getter")
                .onClick("_sign2_onclick")
            );
            
            host.xui_ui_div2167.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"testDate2")
                .setDataBinder("tdb")
                .setDataField("TestDate2")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setWidth("11em")
                .setLabelSize("3em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div593.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1028")
                .setDataBinder("tdb")
                .setDataField("處理情形")
                .setDock("fill")
                .setLeft("11.6em")
                .setTop("1.8666666666666667em")
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
        updateMinute: function(){
            var ns = this;
            utils.calcMinute(ns.t1, ns.st, ns.min1);
            utils.calcMinute(ns.t2, ns.t1, ns.min2);
        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var ns = this, prop = ns.properties;
            console.log(utils.createDDL(ns.dialog,"CryopumpTestForm"));
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
                    utils.signNameClick(ns.testDate, uictrl, "維修");
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
            utils.signNameClick(null, uictrl, "維修");
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
        _st_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinute();
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
        _t1_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinute();
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
        _t2_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.updateMinute();
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
        _sign1_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
                    utils.signNameClick(ns.testDate1, uictrl, "維修");
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
        _sign2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
                    utils.signNameClick(ns.testDate2, uictrl, "維修");
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
            var ns = this, uictrl = profile.boxing(), prop = ns.properties;
            if(prop.mode == "new")
                return;
            var data = utils.newCryopumpTestForm(ns.repairNo.getUIValue());
            if(data != "")
            {    
              ns.tdb.setData(data);
              ns.tdb.updateDataToUI();  
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
            _reportbtn_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.tdb.updateDataFromUI();
                var data = ns.tdb.getData();
                data = utils.testForm2ReportData(data);
                utils.createCryopumpTestReport(data["登錄編號"],data);
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