// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CryopumpTestForm', 'xui.Module',{
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
                .setLeft("11.428571428571429em")
                .setTop("3.8095238095238093em")
                .setWidth("63.23809523809524em")
                .setHeight("41.142857142857146em")
                .setCaption("Cryopump Test Form")
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
                xui.create("xui.UI.FormLayout")
                .setHost(host,"layout")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("6.095238095238095em")
                .setWidth("61em")
                .setHeight("33.53333333333333em")
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
                .setWidth("60.86666666666667em")
                .setHeight("1.9333333333333333em"),
                "A1"
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input621")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input622")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("16em")
                .setLabelSize("6em")
                .setLabelCaption("P/N")
            );
            
            host.xui_ui_div414.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input623")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("S/N")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div415")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("60.86666666666667em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A2"
            );
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input632")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("4em")
                .setLabelCaption("Test")
            );
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox326")
                .setDataBinder("rdb")
                .setDataField("更換Diode需與Module做校正")
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
            
            host.xui_ui_div415.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input634")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("4em")
                .setLabelCaption("AssyOK")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div423")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A3"
            );
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput533")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input637")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setLabelSize("4em")
                .setLabelCaption("Supply")
            );
            
            host.xui_ui_div423.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input638")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A4"
            );
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input642")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("Comp")
            );
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input643")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("of")
            );
            
            host.xui_ui_div424.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input645")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div425")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A5"
            );
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input678")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("Start Time")
                .setType("time")
            );
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input679")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("6em")
                .setLabelSize("2em")
                .setLabelCaption("of")
            );
            
            host.xui_ui_div425.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input681")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("8.380952380952381em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Pump")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div455")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A6"
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input730")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.095238095238095em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput565")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div456")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A7"
            );
            
            host.xui_ui_div456.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input733")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("6.857142857142857em")
                .setTop("0.7619047619047619em")
                .setLabelSize("5em")
                .setLabelCaption("20k/17k")
            );
            
            host.xui_ui_div456.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput571")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("7.619047619047619em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3.5em")
                .setLabelCaption("mins / ")
                .setType("time")
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div457")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A8"
            );
            
            host.xui_ui_div457.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input736")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A12"
            );
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input852")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A13"
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input951")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A10"
            );
            
            host.xui_ui_div461.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input740")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em"),
                "A11"
            );
            
            host.xui_ui_div462.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input844")
                .setDataBinder("tdb")
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setDataField("Pump")
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
                .setWidth("30.4em")
                .setHeight("1.8666666666666667em")
                .setOverflow("hidden"),
                "A14"
            );
            
            host.xui_ui_div463.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input956")
                .setDataBinder("tdb")
                .setDataField("Pump")
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("5em")
                .setLabelCaption("Warm Up")
            );
            
            host.xui_ui_div463.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox342")
                .setDataBinder("rdb")
                .setDataField("Motor：Ω# Y/N")
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
                .setWidth("30.4em")
                .setHeight("11.666666666666666em"),
                "B3"
            );
            
            host.xui_ui_div592.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1025")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Fail 原因")
                .setMultiLines(true)
            );
            
            host.layout.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div593")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("30.4em")
                .setHeight("11.666666666666666em"),
                "B9"
            );
            
            host.xui_ui_div593.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1028")
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