// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.TestForm', 'xui.Module',{
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
                .setLeft("13.266666666666667em")
                .setTop("-1.4em")
                .setWidth("43.46666666666667em")
                .setHeight("52.733333333333334em")
                .setCaption("Dialog")
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input32")
                .setName("客戶名稱")
                .setDataBinder("db")
                .setDataField("客戶名稱")
                .setLeft("2em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input33")
                .setName("Pump")
                .setDataBinder("db")
                .setDataField("Pump")
                .setLeft("22em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput216")
                .setName("日期")
                .setDataBinder("db")
                .setDataField("日期")
                .setLeft("2em")
                .setTop("4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input34")
                .setName("登錄編號")
                .setDataBinder("db")
                .setDataField("登錄編號")
                .setLeft("22em")
                .setTop("4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox6")
                .setName("Repair")
                .setDataBinder("db")
                .setDataField("Repair")
                .setLeft("2em")
                .setTop("6em")
                .setWidth("18em")
                .setCaption("Repair")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox7")
                .setName("CIC/W")
                .setDataBinder("db")
                .setDataField("CIC/W")
                .setLeft("22em")
                .setTop("6em")
                .setWidth("18em")
                .setCaption("CIC/W")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox8")
                .setName("OT")
                .setDataBinder("db")
                .setDataField("OT")
                .setLeft("2em")
                .setTop("8em")
                .setWidth("18em")
                .setCaption("OT")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox9")
                .setName("Exchange")
                .setDataBinder("db")
                .setDataField("Exchange")
                .setLeft("22em")
                .setTop("8em")
                .setWidth("18em")
                .setCaption("Exchange")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input35")
                .setName("上次登錄編號")
                .setDataBinder("db")
                .setDataField("上次登錄編號")
                .setLeft("2em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄編號")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput217")
                .setName("上次登錄時間")
                .setDataBinder("db")
                .setDataField("上次登錄時間")
                .setLeft("22em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次登錄時間")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput218")
                .setName("保固期")
                .setDataBinder("db")
                .setDataField("保固期")
                .setLeft("2em")
                .setTop("12em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("保固期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input36")
                .setName("上次故障原因")
                .setDataBinder("db")
                .setDataField("上次故障原因")
                .setLeft("22em")
                .setTop("12em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次故障原因")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input37")
                .setName("進廠原因")
                .setDataBinder("db")
                .setDataField("進廠原因")
                .setLeft("2em")
                .setTop("14em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("進廠原因")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input38")
                .setName("Pump P/N")
                .setDataBinder("db")
                .setDataField("Pump P/N")
                .setLeft("22em")
                .setTop("14em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump P/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input39")
                .setName("Pump S/N")
                .setDataBinder("db")
                .setDataField("Pump S/N")
                .setLeft("2em")
                .setTop("16em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input40")
                .setName("Module1 P/N")
                .setDataBinder("db")
                .setDataField("Module1 P/N")
                .setLeft("22em")
                .setTop("16em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 P/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input41")
                .setName("Module1 S/N")
                .setDataBinder("db")
                .setDataField("Module1 S/N")
                .setLeft("2em")
                .setTop("18em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input42")
                .setName("Module2 P/N")
                .setDataBinder("db")
                .setDataField("Module2 P/N")
                .setLeft("22em")
                .setTop("18em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module2 P/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setName("Module2 S/N")
                .setDataBinder("db")
                .setDataField("Module2 S/N")
                .setLeft("2em")
                .setTop("20em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module2 S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input44")
                .setName("Module1 Name")
                .setDataBinder("db")
                .setDataField("Module1 Name")
                .setLeft("22em")
                .setTop("20em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module1 Name")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input45")
                .setName("Module2 Name")
                .setDataBinder("db")
                .setDataField("Module2 Name")
                .setLeft("2em")
                .setTop("22em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Module2 Name")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input46")
                .setName("Pump/Module ETM")
                .setDataBinder("db")
                .setDataField("Pump/Module ETM")
                .setLeft("22em")
                .setTop("22em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump/Module ETM")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input47")
                .setName("Pump與Module是否相符")
                .setDataBinder("db")
                .setDataField("Pump與Module是否相符")
                .setLeft("2em")
                .setTop("24em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump與Module是否相符")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input48")
                .setName("配件是否齊全")
                .setDataBinder("db")
                .setDataField("配件是否齊全")
                .setLeft("22em")
                .setTop("24em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("配件是否齊全")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input49")
                .setName("特殊零件")
                .setDataBinder("db")
                .setDataField("特殊零件")
                .setLeft("2em")
                .setTop("26em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("特殊零件")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput219")
                .setName("上次Diode Line更換日期")
                .setDataBinder("db")
                .setDataField("上次Diode Line更換日期")
                .setLeft("22em")
                .setTop("26em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次Diode Line更換日期")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input50")
                .setName("上次維修有無更換Diode Lin")
                .setDataBinder("db")
                .setDataField("上次維修有無更換Diode Lin")
                .setLeft("2em")
                .setTop("28em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("上次維修有無更換Diode Lin")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput220")
                .setName("Diode 1st")
                .setDataBinder("db")
                .setDataField("Diode 1st")
                .setLeft("22em")
                .setTop("28em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput221")
                .setName("Diode 1st#1")
                .setDataBinder("db")
                .setDataField("Diode 1st#1")
                .setLeft("2em")
                .setTop("30em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 1st#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput222")
                .setName("Diode 1st#2")
                .setDataBinder("db")
                .setDataField("Diode 1st#2")
                .setLeft("22em")
                .setTop("30em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 1st#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input51")
                .setName("Diode 1st#3 Y/N")
                .setDataBinder("db")
                .setDataField("Diode 1st#3 Y/N")
                .setLeft("2em")
                .setTop("32em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 1st#3 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput223")
                .setName("Diode 2nd")
                .setDataBinder("db")
                .setDataField("Diode 2nd")
                .setLeft("22em")
                .setTop("32em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput224")
                .setName("Diode 2nd#1")
                .setDataBinder("db")
                .setDataField("Diode 2nd#1")
                .setLeft("2em")
                .setTop("34em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 2nd#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput225")
                .setName("Diode 2nd#2")
                .setDataBinder("db")
                .setDataField("Diode 2nd#2")
                .setLeft("22em")
                .setTop("34em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 2nd#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input52")
                .setName("Diode 2nd#3 Y/N")
                .setDataBinder("db")
                .setDataField("Diode 2nd#3 Y/N")
                .setLeft("2em")
                .setTop("36em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode 2nd#3 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input53")
                .setName("Heater & Cylinder S/N")
                .setDataBinder("db")
                .setDataField("Heater & Cylinder S/N")
                .setLeft("22em")
                .setTop("36em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater & Cylinder S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput226")
                .setName("Heater 1st")
                .setDataBinder("db")
                .setDataField("Heater 1st")
                .setLeft("2em")
                .setTop("38em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput227")
                .setName("Heater 2nd")
                .setDataBinder("db")
                .setDataField("Heater 2nd")
                .setLeft("22em")
                .setTop("38em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input54")
                .setName("Heater #3 Y/N")
                .setDataBinder("db")
                .setDataField("Heater #3 Y/N")
                .setLeft("2em")
                .setTop("40em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater #3 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput228")
                .setName("Heater交叉")
                .setDataBinder("db")
                .setDataField("Heater交叉")
                .setLeft("22em")
                .setTop("40em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater交叉")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput229")
                .setName("Heater接地")
                .setDataBinder("db")
                .setDataField("Heater接地")
                .setLeft("2em")
                .setTop("42em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater接地")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input55")
                .setName("Heater#4 Y/N")
                .setDataBinder("db")
                .setDataField("Heater#4 Y/N")
                .setLeft("22em")
                .setTop("42em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater#4 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput230")
                .setName("Motor#1")
                .setDataBinder("db")
                .setDataField("Motor#1")
                .setLeft("2em")
                .setTop("44em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput231")
                .setName("Motor#2")
                .setDataBinder("db")
                .setDataField("Motor#2")
                .setLeft("22em")
                .setTop("44em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput232")
                .setName("Motor#3")
                .setDataBinder("db")
                .setDataField("Motor#3")
                .setLeft("2em")
                .setTop("46em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#3")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput233")
                .setName("Motor#4")
                .setDataBinder("db")
                .setDataField("Motor#4")
                .setLeft("22em")
                .setTop("46em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#4")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input56")
                .setName("Motor#5 Y/N")
                .setDataBinder("db")
                .setDataField("Motor#5 Y/N")
                .setLeft("2em")
                .setTop("48em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor#5 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input57")
                .setName("Rough Valve")
                .setDataBinder("db")
                .setDataField("Rough Valve")
                .setLeft("22em")
                .setTop("48em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox10")
                .setName("Rough Valve#1清潔/更換")
                .setDataBinder("db")
                .setDataField("Rough Valve#1清潔/更換")
                .setLeft("2em")
                .setTop("50em")
                .setWidth("18em")
                .setCaption("Rough Valve#1清潔/更換")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input58")
                .setName("Rough Valve#2 Y/N")
                .setDataBinder("db")
                .setDataField("Rough Valve#2 Y/N")
                .setLeft("22em")
                .setTop("50em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve#2 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input59")
                .setName("Rough Valve 上座旋緊 / 鎖緊 確認 Y/N")
                .setDataBinder("db")
                .setDataField("Rough Valve 上座旋緊 / 鎖緊 確認 Y/N")
                .setLeft("2em")
                .setTop("52em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve 上座旋緊 / 鎖緊 確認 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input60")
                .setName("Purge Valve")
                .setDataBinder("db")
                .setDataField("Purge Valve")
                .setLeft("22em")
                .setTop("52em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Purge Valve")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox11")
                .setName("Purge Valve#1")
                .setDataBinder("db")
                .setDataField("Purge Valve#1")
                .setLeft("2em")
                .setTop("54em")
                .setWidth("18em")
                .setCaption("Purge Valve#1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input61")
                .setName("Purge Valve#2 Y/N")
                .setDataBinder("db")
                .setDataField("Purge Valve#2 Y/N")
                .setLeft("22em")
                .setTop("54em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Purge Valve#2 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input62")
                .setName("Exhaust Valve")
                .setDataBinder("db")
                .setDataField("Exhaust Valve")
                .setLeft("2em")
                .setTop("56em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Exhaust Valve")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox12")
                .setName("Exhaust Valve#1清潔/更換")
                .setDataBinder("db")
                .setDataField("Exhaust Valve#1清潔/更換")
                .setLeft("22em")
                .setTop("56em")
                .setWidth("18em")
                .setCaption("Exhaust Valve#1清潔/更換")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input63")
                .setName("Exhaust Valve#2 Y/N")
                .setDataBinder("db")
                .setDataField("Exhaust Valve#2 Y/N")
                .setLeft("2em")
                .setTop("58em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Exhaust Valve#2 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input64")
                .setName("更換Purge Valve O-ring Coil軸心鎖緊")
                .setDataBinder("db")
                .setDataField("更換Purge Valve O-ring Coil軸心鎖緊")
                .setLeft("22em")
                .setTop("58em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("更換Purge Valve O-ring Coil軸心鎖緊")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input65")
                .setName("Xhead原S/N")
                .setDataBinder("db")
                .setDataField("Xhead原S/N")
                .setLeft("2em")
                .setTop("60em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Xhead原S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox13")
                .setName("Xhead原S/N清潔更換")
                .setDataBinder("db")
                .setDataField("Xhead原S/N清潔更換")
                .setLeft("22em")
                .setTop("60em")
                .setWidth("18em")
                .setCaption("Xhead原S/N清潔更換")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input66")
                .setName("1st Displacer原S/N")
                .setDataBinder("db")
                .setDataField("1st Displacer原S/N")
                .setLeft("2em")
                .setTop("62em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox14")
                .setName("1st Displacer原S/N清潔更換")
                .setDataBinder("db")
                .setDataField("1st Displacer原S/N清潔更換")
                .setLeft("22em")
                .setTop("62em")
                .setWidth("18em")
                .setCaption("1st Displacer原S/N清潔更換")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input67")
                .setName("2nd Displacer原S/N")
                .setDataBinder("db")
                .setDataField("2nd Displacer原S/N")
                .setLeft("2em")
                .setTop("64em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("2nd Displacer原S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox15")
                .setName("2nd Displacer原S/N清潔更換")
                .setDataBinder("db")
                .setDataField("2nd Displacer原S/N清潔更換")
                .setLeft("22em")
                .setTop("64em")
                .setWidth("18em")
                .setCaption("2nd Displacer原S/N清潔更換")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input68")
                .setName("故障原因主要")
                .setDataBinder("db")
                .setDataField("故障原因主要")
                .setLeft("2em")
                .setTop("66em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因主要")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input69")
                .setName("故障原因次要")
                .setDataBinder("db")
                .setDataField("故障原因次要")
                .setLeft("22em")
                .setTop("66em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("故障原因次要")
                .setMaxlength("200")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input70")
                .setName("Pump清洗(非原廠貼紙清除) Y/N")
                .setDataBinder("db")
                .setDataField("Pump清洗(非原廠貼紙清除) Y/N")
                .setLeft("2em")
                .setTop("68em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump清洗(非原廠貼紙清除) Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input71")
                .setName("Pump清洗(非原廠貼紙清除) 送洗 Y/N")
                .setDataBinder("db")
                .setDataField("Pump清洗(非原廠貼紙清除) 送洗 Y/N")
                .setLeft("22em")
                .setTop("68em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump清洗(非原廠貼紙清除) 送洗 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input72")
                .setName("Pump配件掛牌(P/N：、S/N：)入烤箱 Y/N")
                .setDataBinder("db")
                .setDataField("Pump配件掛牌(P/N：、S/N：)入烤箱 Y/N")
                .setLeft("2em")
                .setTop("70em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump配件掛牌(P/N：、S/N：)入烤箱 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input73")
                .setName("A組裝簽名")
                .setDataBinder("db")
                .setDataField("A組裝簽名")
                .setLeft("22em")
                .setTop("70em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("A組裝簽名")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input74")
                .setName("A組長覆核")
                .setDataBinder("db")
                .setDataField("A組長覆核")
                .setLeft("2em")
                .setTop("72em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("A組長覆核")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input75")
                .setName("B. Vacuum Side 組裝")
                .setDataBinder("db")
                .setDataField("B. Vacuum Side 組裝")
                .setLeft("22em")
                .setTop("72em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("B. Vacuum Side 組裝")
                .setMaxlength("100")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input76")
                .setName("Check表單與Pump配件相符")
                .setDataBinder("db")
                .setDataField("Check表單與Pump配件相符")
                .setLeft("2em")
                .setTop("74em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Check表單與Pump配件相符")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input77")
                .setName("Heater & Cylinder New Y/N")
                .setDataBinder("db")
                .setDataField("Heater & Cylinder New Y/N")
                .setLeft("22em")
                .setTop("74em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Heater & Cylinder New Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput234")
                .setName("HeaterB 1st")
                .setDataBinder("db")
                .setDataField("HeaterB 1st")
                .setLeft("2em")
                .setTop("76em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("HeaterB 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput235")
                .setName("HeaterB 2nd")
                .setDataBinder("db")
                .setDataField("HeaterB 2nd")
                .setLeft("22em")
                .setTop("76em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("HeaterB 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input78")
                .setName("HeaterB  Y/N")
                .setDataBinder("db")
                .setDataField("HeaterB  Y/N")
                .setLeft("2em")
                .setTop("78em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("HeaterB  Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input79")
                .setName("交叉B")
                .setDataBinder("db")
                .setDataField("交叉B")
                .setLeft("22em")
                .setTop("78em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("交叉B")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input80")
                .setName("接地B")
                .setDataBinder("db")
                .setDataField("接地B")
                .setLeft("2em")
                .setTop("80em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("接地B")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input81")
                .setName("交叉B Y/N")
                .setDataBinder("db")
                .setDataField("交叉B Y/N")
                .setLeft("22em")
                .setTop("80em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("交叉B Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input82")
                .setName("Vacuum Side 組裝零件之連接面鋪設銦片")
                .setDataBinder("db")
                .setDataField("Vacuum Side 組裝零件之連接面鋪設銦片")
                .setLeft("2em")
                .setTop("82em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Vacuum Side 組裝零件之連接面鋪設銦片")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input83")
                .setName("Diode Connector Pin 接點阻值確認")
                .setDataBinder("db")
                .setDataField("Diode Connector Pin 接點阻值確認")
                .setLeft("22em")
                .setTop("82em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode Connector Pin 接點阻值確認")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input84")
                .setName("Diode Line正確固定並保持彈性")
                .setDataBinder("db")
                .setDataField("Diode Line正確固定並保持彈性")
                .setLeft("2em")
                .setTop("84em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode Line正確固定並保持彈性")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput236")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setDataBinder("db")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setLeft("22em")
                .setTop("84em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput237")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setDataBinder("db")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setLeft("2em")
                .setTop("86em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input85")
                .setName("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #3 Y/N")
                .setDataBinder("db")
                .setDataField("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #3 Y/N")
                .setLeft("22em")
                .setTop("86em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode室溫(標準值:300k ±10k，1st&2nd 相差2k) #3 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input86")
                .setName("New Diode 1st S/N")
                .setDataBinder("db")
                .setDataField("New Diode 1st S/N")
                .setLeft("2em")
                .setTop("88em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("New Diode 1st S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input87")
                .setName("New Diode 1st V")
                .setDataBinder("db")
                .setDataField("New Diode 1st V")
                .setLeft("22em")
                .setTop("88em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("New Diode 1st V")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input88")
                .setName("New Diode 2nd S/N")
                .setDataBinder("db")
                .setDataField("New Diode 2nd S/N")
                .setLeft("2em")
                .setTop("90em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("New Diode 2nd S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input89")
                .setName("New Diode 2nd V")
                .setDataBinder("db")
                .setDataField("New Diode 2nd V")
                .setLeft("22em")
                .setTop("90em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("New Diode 2nd V")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input90")
                .setName("更換Diode需與Module做校正")
                .setDataBinder("db")
                .setDataField("更換Diode需與Module做校正")
                .setLeft("2em")
                .setTop("92em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("更換Diode需與Module做校正")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input91")
                .setName("Rough Valve 上座旋緊 / 鎖緊 確認 ")
                .setDataBinder("db")
                .setDataField("Rough Valve 上座旋緊 / 鎖緊 確認 ")
                .setLeft("22em")
                .setTop("92em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rough Valve 上座旋緊 / 鎖緊 確認 ")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input92")
                .setName("Rough / Purge Valve Coil軸心鎖緊確認")
                .setDataBinder("db")
                .setDataField("Rough / Purge Valve Coil軸心鎖緊確認")
                .setLeft("2em")
                .setTop("94em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rough / Purge Valve Coil軸心鎖緊確認")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput238")
                .setName("TC Gauge")
                .setDataBinder("db")
                .setDataField("TC Gauge")
                .setLeft("22em")
                .setTop("94em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("TC Gauge")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input93")
                .setName("VCR Cable 接頭確認")
                .setDataBinder("db")
                .setDataField("VCR Cable 接頭確認")
                .setLeft("2em")
                .setTop("96em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("VCR Cable 接頭確認")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input94")
                .setName("Vacuum Side Leak Test：(5x10-9)")
                .setDataBinder("db")
                .setDataField("Vacuum Side Leak Test：(5x10-9)")
                .setLeft("22em")
                .setTop("96em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Vacuum Side Leak Test：(5x10-9)")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input95")
                .setName("Vacuum Side Leak Test：(5x10-9)Y/N")
                .setDataBinder("db")
                .setDataField("Vacuum Side Leak Test：(5x10-9)Y/N")
                .setLeft("2em")
                .setTop("98em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Vacuum Side Leak Test：(5x10-9)Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input96")
                .setName("80k Radiation Shield 安裝")
                .setDataBinder("db")
                .setDataField("80k Radiation Shield 安裝")
                .setLeft("22em")
                .setTop("98em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("80k Radiation Shield 安裝")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input97")
                .setName("B組裝簽名")
                .setDataBinder("db")
                .setDataField("B組裝簽名")
                .setLeft("2em")
                .setTop("100em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("B組裝簽名")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input98")
                .setName("B組長覆核")
                .setDataBinder("db")
                .setDataField("B組長覆核")
                .setLeft("22em")
                .setTop("100em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("B組長覆核")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input99")
                .setName("Check表單與Pump配件相符C")
                .setDataBinder("db")
                .setDataField("Check表單與Pump配件相符C")
                .setLeft("2em")
                .setTop("102em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Check表單與Pump配件相符C")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input100")
                .setName("”X” head Timing Valve 校正")
                .setDataBinder("db")
                .setDataField("”X” head Timing Valve 校正")
                .setLeft("22em")
                .setTop("102em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("”X” head Timing Valve 校正")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input101")
                .setName("”X” head S/N C")
                .setDataBinder("db")
                .setDataField("”X” head S/N C")
                .setLeft("2em")
                .setTop("104em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("”X” head S/N C")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input102")
                .setName("”X” head S/N C New Y/N")
                .setDataBinder("db")
                .setDataField("”X” head S/N C New Y/N")
                .setLeft("22em")
                .setTop("104em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("”X” head S/N C New Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput239")
                .setName("Motor：Ω#1")
                .setDataBinder("db")
                .setDataField("Motor：Ω#1")
                .setLeft("2em")
                .setTop("106em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor：Ω#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput240")
                .setName("Motor：Ω#2")
                .setDataBinder("db")
                .setDataField("Motor：Ω#2")
                .setLeft("22em")
                .setTop("106em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor：Ω#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput241")
                .setName("Motor：Ω#3")
                .setDataBinder("db")
                .setDataField("Motor：Ω#3")
                .setLeft("2em")
                .setTop("108em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor：Ω#3")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput242")
                .setName("Motor：Ω#4")
                .setDataBinder("db")
                .setDataField("Motor：Ω#4")
                .setLeft("22em")
                .setTop("108em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor：Ω#4")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input103")
                .setName("Motor：Ω# Y/N")
                .setDataBinder("db")
                .setDataField("Motor：Ω# Y/N")
                .setLeft("2em")
                .setTop("110em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Motor：Ω# Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput243")
                .setName("CABLE：Ω#1")
                .setDataBinder("db")
                .setDataField("CABLE：Ω#1")
                .setLeft("22em")
                .setTop("110em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE：Ω#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput244")
                .setName("CABLE：Ω#2")
                .setDataBinder("db")
                .setDataField("CABLE：Ω#2")
                .setLeft("2em")
                .setTop("112em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE：Ω#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput245")
                .setName("CABLE：Ω#3")
                .setDataBinder("db")
                .setDataField("CABLE：Ω#3")
                .setLeft("22em")
                .setTop("112em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE：Ω#3")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput246")
                .setName("CABLE：Ω#4")
                .setDataBinder("db")
                .setDataField("CABLE：Ω#4")
                .setLeft("2em")
                .setTop("114em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE：Ω#4")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input104")
                .setName("CABLE：Ω# Y/N")
                .setDataBinder("db")
                .setDataField("CABLE：Ω# Y/N")
                .setLeft("22em")
                .setTop("114em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("CABLE：Ω# Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input105")
                .setName("Displacer 1st S/N")
                .setDataBinder("db")
                .setDataField("Displacer 1st S/N")
                .setLeft("2em")
                .setTop("116em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 1st S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput247")
                .setName("Displacer 1st Flow")
                .setDataBinder("db")
                .setDataField("Displacer 1st Flow")
                .setLeft("22em")
                .setTop("116em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 1st Flow")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input106")
                .setName("Displacer 1st New")
                .setDataBinder("db")
                .setDataField("Displacer 1st New")
                .setLeft("2em")
                .setTop("118em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 1st New")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input107")
                .setName("Displacer 2nd S/N")
                .setDataBinder("db")
                .setDataField("Displacer 2nd S/N")
                .setLeft("22em")
                .setTop("118em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 2nd S/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput248")
                .setName("Displacer 2nd Flow")
                .setDataBinder("db")
                .setDataField("Displacer 2nd Flow")
                .setLeft("2em")
                .setTop("120em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 2nd Flow")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input108")
                .setName("Displacer 2nd New Y/N")
                .setDataBinder("db")
                .setDataField("Displacer 2nd New Y/N")
                .setLeft("22em")
                .setTop("120em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer 2nd New Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input109")
                .setName("Seal 1st")
                .setDataBinder("db")
                .setDataField("Seal 1st")
                .setLeft("2em")
                .setTop("122em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Seal 1st")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input110")
                .setName("Seal 2nd")
                .setDataBinder("db")
                .setDataField("Seal 2nd")
                .setLeft("22em")
                .setTop("122em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Seal 2nd")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input111")
                .setName("Seal 推")
                .setDataBinder("db")
                .setDataField("Seal 推")
                .setLeft("2em")
                .setTop("124em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Seal 推")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input112")
                .setName("Seal 拉")
                .setDataBinder("db")
                .setDataField("Seal 拉")
                .setLeft("22em")
                .setTop("124em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Seal 拉")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input113")
                .setName("Depth")
                .setDataBinder("db")
                .setDataField("Depth")
                .setLeft("2em")
                .setTop("126em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Depth")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input114")
                .setName("Setting")
                .setDataBinder("db")
                .setDataField("Setting")
                .setLeft("22em")
                .setTop("126em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Setting")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput249")
                .setName("Displacer-Collar間距校正值")
                .setDataBinder("db")
                .setDataField("Displacer-Collar間距校正值")
                .setLeft("2em")
                .setTop("128em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer-Collar間距校正值")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input115")
                .setName("Displacer-Collar間距校正值 Y/N")
                .setDataBinder("db")
                .setDataField("Displacer-Collar間距校正值 Y/N")
                .setLeft("22em")
                .setTop("128em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Displacer-Collar間距校正值 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input116")
                .setName("Purge Helium Side Y/N")
                .setDataBinder("db")
                .setDataField("Purge Helium Side Y/N")
                .setLeft("2em")
                .setTop("130em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Purge Helium Side Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox16")
                .setName("M350")
                .setDataBinder("db")
                .setDataField("M350")
                .setLeft("22em")
                .setTop("130em")
                .setWidth("18em")
                .setCaption("M350")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox17")
                .setName("M22")
                .setDataBinder("db")
                .setDataField("M22")
                .setLeft("2em")
                .setTop("132em")
                .setWidth("18em")
                .setCaption("M22")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox18")
                .setName("M1020")
                .setDataBinder("db")
                .setDataField("M1020")
                .setLeft("22em")
                .setTop("132em")
                .setWidth("18em")
                .setCaption("M1020")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox19")
                .setName("M1050")
                .setDataBinder("db")
                .setDataField("M1050")
                .setLeft("2em")
                .setTop("134em")
                .setWidth("18em")
                .setCaption("M1050")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox20")
                .setName("M600/M900")
                .setDataBinder("db")
                .setDataField("M600/M900")
                .setLeft("22em")
                .setTop("134em")
                .setWidth("18em")
                .setCaption("M600/M900")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox21")
                .setName("P300")
                .setDataBinder("db")
                .setDataField("P300")
                .setLeft("2em")
                .setTop("136em")
                .setWidth("18em")
                .setCaption("P300")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input117")
                .setName("Helium Side Leak Test：(5x10-6)")
                .setDataBinder("db")
                .setDataField("Helium Side Leak Test：(5x10-6)")
                .setLeft("22em")
                .setTop("136em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Helium Side Leak Test：(5x10-6)")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input118")
                .setName("Helium Side Leak Test：(5x10-6) Y/N")
                .setDataBinder("db")
                .setDataField("Helium Side Leak Test：(5x10-6) Y/N")
                .setLeft("2em")
                .setTop("138em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Helium Side Leak Test：(5x10-6) Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input119")
                .setName("Crosshead 螺絲安裝/畫線確認")
                .setDataBinder("db")
                .setDataField("Crosshead 螺絲安裝/畫線確認")
                .setLeft("22em")
                .setTop("138em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead 螺絲安裝/畫線確認")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input120")
                .setName("15k Array間距調整(不可接觸)")
                .setDataBinder("db")
                .setDataField("15k Array間距調整(不可接觸)")
                .setLeft("2em")
                .setTop("140em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("15k Array間距調整(不可接觸)")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input121")
                .setName("Pump各配件Cable確實接好固定")
                .setDataBinder("db")
                .setDataField("Pump各配件Cable確實接好固定")
                .setLeft("22em")
                .setTop("140em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump各配件Cable確實接好固定")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input122")
                .setName("C組裝簽名")
                .setDataBinder("db")
                .setDataField("C組裝簽名")
                .setLeft("2em")
                .setTop("142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("C組裝簽名")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input123")
                .setName("C組長覆核")
                .setDataBinder("db")
                .setDataField("C組長覆核")
                .setLeft("22em")
                .setTop("142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("C組長覆核")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input124")
                .setName("D.Test Data")
                .setDataBinder("db")
                .setDataField("D.Test Data")
                .setLeft("2em")
                .setTop("144em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("D.Test Data")
                .setMaxlength("20")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input125")
                .setName("管線配接符合Pump要求")
                .setDataBinder("db")
                .setDataField("管線配接符合Pump要求")
                .setLeft("22em")
                .setTop("144em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("管線配接符合Pump要求")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input126")
                .setName("依Test標準參數設定")
                .setDataBinder("db")
                .setDataField("依Test標準參數設定")
                .setLeft("2em")
                .setTop("146em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("依Test標準參數設定")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput250")
                .setName("Supply Pressure")
                .setDataBinder("db")
                .setDataField("Supply Pressure")
                .setLeft("22em")
                .setTop("146em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Supply Pressure")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput251")
                .setName("Return Pressure")
                .setDataBinder("db")
                .setDataField("Return Pressure")
                .setLeft("2em")
                .setTop("148em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Return Pressure")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input127")
                .setName("Ch")
                .setDataBinder("db")
                .setDataField("Ch")
                .setLeft("22em")
                .setTop("148em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Ch")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input128")
                .setName("Compressor Model")
                .setDataBinder("db")
                .setDataField("Compressor Model")
                .setLeft("2em")
                .setTop("150em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Compressor Model")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input129")
                .setName("Start Cooldown#1")
                .setDataBinder("db")
                .setDataField("Start Cooldown#1")
                .setLeft("22em")
                .setTop("150em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown#1")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input130")
                .setName("Start Cooldown#2")
                .setDataBinder("db")
                .setDataField("Start Cooldown#2")
                .setLeft("2em")
                .setTop("152em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown#2")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input131")
                .setName("Start Cooldown#3")
                .setDataBinder("db")
                .setDataField("Start Cooldown#3")
                .setLeft("22em")
                .setTop("152em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Cooldown#3")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input132")
                .setName("底溫#1")
                .setDataBinder("db")
                .setDataField("底溫#1")
                .setLeft("2em")
                .setTop("154em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("底溫#1")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input133")
                .setName("底溫#2")
                .setDataBinder("db")
                .setDataField("底溫#2")
                .setLeft("22em")
                .setTop("154em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("底溫#2")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input134")
                .setName("底溫#3")
                .setDataBinder("db")
                .setDataField("底溫#3")
                .setLeft("2em")
                .setTop("156em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("底溫#3")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input135")
                .setName("1st 設溫#1")
                .setDataBinder("db")
                .setDataField("1st 設溫#1")
                .setLeft("22em")
                .setTop("156em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st 設溫#1")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input136")
                .setName("1st 設溫#2")
                .setDataBinder("db")
                .setDataField("1st 設溫#2")
                .setLeft("2em")
                .setTop("158em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st 設溫#2")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input137")
                .setName("1st 設溫#3")
                .setDataBinder("db")
                .setDataField("1st 設溫#3")
                .setLeft("22em")
                .setTop("158em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st 設溫#3")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input138")
                .setName("Test完成後Runtime 歸零 Y/N")
                .setDataBinder("db")
                .setDataField("Test完成後Runtime 歸零 Y/N")
                .setLeft("2em")
                .setTop("160em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test完成後Runtime 歸零 Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input139")
                .setName("Test完成後,Helium Side Purge Pass")
                .setDataBinder("db")
                .setDataField("Test完成後,Helium Side Purge Pass")
                .setLeft("22em")
                .setTop("160em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test完成後,Helium Side Purge Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input140")
                .setName("1st Temp設溫 無 0k 65k 100k")
                .setDataBinder("db")
                .setDataField("1st Temp設溫 無 0k 65k 100k")
                .setLeft("2em")
                .setTop("162em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st Temp設溫 無 0k 65k 100k")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input141")
                .setName("15k Array間距調整檢查(不可接觸)Pass")
                .setDataBinder("db")
                .setDataField("15k Array間距調整檢查(不可接觸)Pass")
                .setLeft("22em")
                .setTop("162em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("15k Array間距調整檢查(不可接觸)Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input142")
                .setName("Test完成後，Vacuum Side Leak Test")
                .setDataBinder("db")
                .setDataField("Test完成後，Vacuum Side Leak Test")
                .setLeft("2em")
                .setTop("164em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test完成後，Vacuum Side Leak Test")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input143")
                .setName("Test完成後，Vacuum Side Leak Test Y/N")
                .setDataBinder("db")
                .setDataField("Test完成後，Vacuum Side Leak Test Y/N")
                .setLeft("22em")
                .setTop("164em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test完成後，Vacuum Side Leak Test Y/N")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input144")
                .setName("Pump入庫前外觀檢查 Pass")
                .setDataBinder("db")
                .setDataField("Pump入庫前外觀檢查 Pass")
                .setLeft("2em")
                .setTop("166em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Pump入庫前外觀檢查 Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input145")
                .setName("測試人員簽名")
                .setDataBinder("db")
                .setDataField("測試人員簽名")
                .setLeft("22em")
                .setTop("166em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試人員簽名")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input146")
                .setName("測試組長覆核")
                .setDataBinder("db")
                .setDataField("測試組長覆核")
                .setLeft("2em")
                .setTop("168em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試組長覆核")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input147")
                .setName("Test Data")
                .setDataBinder("db")
                .setDataField("Test Data")
                .setLeft("22em")
                .setTop("168em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Data")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input150")
                .setName("Test Plate：CT OB/IS/P300 SHI Other")
                .setDataBinder("db")
                .setDataField("Test Plate：CT OB/IS/P300 SHI Other")
                .setLeft("22em")
                .setTop("172em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Plate：CT OB/IS/P300 SHI Other")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input151")
                .setName("Assy OK")
                .setDataBinder("db")
                .setDataField("Assy OK")
                .setLeft("2em")
                .setTop("174em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Assy OK")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput253")
                .setName("Room Temp (Diode or Gauge) #1")
                .setDataBinder("db")
                .setDataField("Room Temp (Diode or Gauge) #1")
                .setLeft("22em")
                .setTop("174em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Room Temp (Diode or Gauge) #1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input152")
                .setName("Room Temp (Diode or Gauge) Pass")
                .setDataBinder("db")
                .setDataField("Room Temp (Diode or Gauge) Pass")
                .setLeft("2em")
                .setTop("176em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Room Temp (Diode or Gauge) Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput254")
                .setName("Start Time")
                .setDataBinder("db")
                .setDataField("Start Time")
                .setLeft("22em")
                .setTop("176em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Time")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput255")
                .setName("Minutes to 20k/Spec=#1")
                .setDataBinder("db")
                .setDataField("Minutes to 20k/Spec=#1")
                .setLeft("2em")
                .setTop("178em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 20k/Spec=#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput256")
                .setName("Minutes to 20k/Spec=#2")
                .setDataBinder("db")
                .setDataField("Minutes to 20k/Spec=#2")
                .setLeft("22em")
                .setTop("178em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 20k/Spec=#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input153")
                .setName("Minutes to 20k/Spec=Pass")
                .setDataBinder("db")
                .setDataField("Minutes to 20k/Spec=Pass")
                .setLeft("2em")
                .setTop("180em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 20k/Spec=Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput257")
                .setName("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#1")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#1")
                .setLeft("22em")
                .setTop("180em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput258")
                .setName("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#2")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#2")
                .setLeft("2em")
                .setTop("182em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input154")
                .setName("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins Pass")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins Pass")
                .setLeft("22em")
                .setTop("182em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput259")
                .setName("Spec≦ 10.9k or Gauge 0 psi 2nd Stage")
                .setDataBinder("db")
                .setDataField("Spec≦ 10.9k or Gauge 0 psi 2nd Stage")
                .setLeft("2em")
                .setTop("184em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec≦ 10.9k or Gauge 0 psi 2nd Stage")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input155")
                .setName("Spec≦ 10.9k or Gauge 0 psi 2nd Stage Pass")
                .setDataBinder("db")
                .setDataField("Spec≦ 10.9k or Gauge 0 psi 2nd Stage Pass")
                .setLeft("22em")
                .setTop("184em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec≦ 10.9k or Gauge 0 psi 2nd Stage Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput260")
                .setName("Diode Reading @Room Temp 1st")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp 1st")
                .setLeft("2em")
                .setTop("186em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode Reading @Room Temp 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput261")
                .setName("Diode Reading @Room Temp 2nd")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp 2nd")
                .setLeft("22em")
                .setTop("186em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode Reading @Room Temp 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input156")
                .setName("Diode Reading @Room Temp Pass")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp Pass")
                .setLeft("2em")
                .setTop("188em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Diode Reading @Room Temp Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput262")
                .setName("Start Time2")
                .setDataBinder("db")
                .setDataField("Start Time2")
                .setLeft("22em")
                .setTop("188em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Time2")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput263")
                .setName("Minutes to 17k/Spec=#1")
                .setDataBinder("db")
                .setDataField("Minutes to 17k/Spec=#1")
                .setLeft("2em")
                .setTop("190em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 17k/Spec=#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput264")
                .setName("Minutes to 17k/Spec=#2")
                .setDataBinder("db")
                .setDataField("Minutes to 17k/Spec=#2")
                .setLeft("22em")
                .setTop("190em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 17k/Spec=#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input157")
                .setName("Minutes to 17k/Spec=Pass")
                .setDataBinder("db")
                .setDataField("Minutes to 17k/Spec=Pass")
                .setLeft("2em")
                .setTop("192em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to 17k/Spec=Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput265")
                .setName("Minutes to Bottom Out#1")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom Out#1")
                .setLeft("22em")
                .setTop("192em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to Bottom Out#1")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput266")
                .setName("Minutes to Bottom Out#2")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom Out#2")
                .setLeft("2em")
                .setTop("194em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to Bottom Out#2")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input158")
                .setName("Minutes to Bottom OutPass")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom OutPass")
                .setLeft("22em")
                .setTop("194em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Minutes to Bottom OutPass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput267")
                .setName("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 1st")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 1st")
                .setLeft("2em")
                .setTop("196em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput268")
                .setName("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 2nd")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 2nd")
                .setLeft("22em")
                .setTop("196em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input159")
                .setName("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage Pass")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage Pass")
                .setLeft("2em")
                .setTop("198em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput269")
                .setName("Spec= 65k±2k，85k±2k #1 1st")
                .setDataBinder("db")
                .setDataField("Spec= 65k±2k，85k±2k #1 1st")
                .setLeft("22em")
                .setTop("198em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 65k±2k，85k±2k #1 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput270")
                .setName("Spec= 65k±2k，85k±2k #1 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 65k±2k，85k±2k #1 2nd")
                .setLeft("2em")
                .setTop("200em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 65k±2k，85k±2k #1 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput271")
                .setName("Spec= 65k±2k，85k±2k #2 1st")
                .setDataBinder("db")
                .setDataField("Spec= 65k±2k，85k±2k #2 1st")
                .setLeft("22em")
                .setTop("200em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 65k±2k，85k±2k #2 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput272")
                .setName("Spec= 65k±2k，85k±2k #2 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 65k±2k，85k±2k #2 2nd")
                .setLeft("2em")
                .setTop("202em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 65k±2k，85k±2k #2 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput273")
                .setName("Spec= 85K±2k #1 1st")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #1 1st")
                .setLeft("22em")
                .setTop("202em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 85K±2k #1 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput274")
                .setName("Spec= 85K±2k #1 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #1 2nd")
                .setLeft("2em")
                .setTop("204em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 85K±2k #1 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput275")
                .setName("Spec= 85K±2k #2 1st")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #2 1st")
                .setLeft("22em")
                .setTop("204em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 85K±2k #2 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput276")
                .setName("Spec= 85K±2k #2 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #2 2nd")
                .setLeft("2em")
                .setTop("206em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 85K±2k #2 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput277")
                .setName("Spec= 100K±1k #1 1st")
                .setDataBinder("db")
                .setDataField("Spec= 100K±1k #1 1st")
                .setLeft("22em")
                .setTop("206em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 100K±1k #1 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput278")
                .setName("Spec= 100K±1k #1 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 100K±1k #1 2nd")
                .setLeft("2em")
                .setTop("208em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 100K±1k #1 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput279")
                .setName("Spec= 100K±1k #2 1st")
                .setDataBinder("db")
                .setDataField("Spec= 100K±1k #2 1st")
                .setLeft("22em")
                .setTop("208em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 100K±1k #2 1st")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput280")
                .setName("Spec= 100K±1k #2 2nd")
                .setDataBinder("db")
                .setDataField("Spec= 100K±1k #2 2nd")
                .setLeft("2em")
                .setTop("210em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spec= 100K±1k #2 2nd")
                .setType("number")
                .setMaxlength("null")
                .setPrecision(1)
                .setIncrement(1)
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input160")
                .setName("1st Stage Temp Control Test Pass")
                .setDataBinder("db")
                .setDataField("1st Stage Temp Control Test Pass")
                .setLeft("22em")
                .setTop("210em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("1st Stage Temp Control Test Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input161")
                .setName("2nd Stage Heater Test")
                .setDataBinder("db")
                .setDataField("2nd Stage Heater Test")
                .setLeft("2em")
                .setTop("212em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("2nd Stage Heater Test")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input162")
                .setName("Reset Factory Regan Parameter Ext#1")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#1")
                .setLeft("22em")
                .setTop("212em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Reset Factory Regan Parameter Ext#1")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input163")
                .setName("Reset Factory Regan Parameter Ext#1 Time")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#1 Time")
                .setLeft("2em")
                .setTop("214em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Reset Factory Regan Parameter Ext#1 Time")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input164")
                .setName("Reset Factory Regan Parameter Ext#2")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#2")
                .setLeft("22em")
                .setTop("214em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Reset Factory Regan Parameter Ext#2")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input165")
                .setName("Reset Factory Regan Parameter Ext#2 Time")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#2 Time")
                .setLeft("2em")
                .setTop("216em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Reset Factory Regan Parameter Ext#2 Time")
                .setMaxlength("10")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input166")
                .setName("Test Data Pass")
                .setDataBinder("db")
                .setDataField("Test Data Pass")
                .setLeft("22em")
                .setTop("216em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Data Pass")
                .setMaxlength("1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input167")
                .setName("Test Data Fail原因")
                .setDataBinder("db")
                .setDataField("Test Data Fail原因")
                .setLeft("2em")
                .setTop("218em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Data Fail原因")
                .setMaxlength("1000")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input168")
                .setName("Test Data 處理情形")
                .setDataBinder("db")
                .setDataField("Test Data 處理情形")
                .setLeft("22em")
                .setTop("218em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Data 處理情形")
                .setMaxlength("1000")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2400")
                .setName("P/N")
                .setDataBinder("db")
                .setDataField("P/N")
                .setLeft("21.933333333333334em")
                .setTop("170.06666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2389")
                .setName("Test Date")
                .setDataBinder("db")
                .setDataField("Test Date")
                .setLeft("1.8666666666666667em")
                .setTop("170.06666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Test Date")
                .setType("date")
                .setMaxlength("null")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2401")
                .setName("S/N")
                .setDataBinder("db")
                .setDataField("S/N")
                .setLeft("1.8666666666666667em")
                .setTop("172.13333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog85")
                .setLeft("20.571428571428573em")
                .setTop("6.095238095238095em")
                .setWidth("59.27619047619048em")
                .setHeight("33em")
                .setCaption("Dialog")
            );
            
            host.xui_ui_dialog85.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout2")
                .setDock("fill")
                .setLeft("6.666666666666667em")
                .setTop("4.666666666666667em")
                .setWidth("58.43809523809524em")
                .setHeight("29.561904761904763em")
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 27,
                    "cols" : 4,
                    "merged" : [
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 4,
                            "removed" : false
                        },
                        {
                            "row" : 20,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 25,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        },
                        {
                            "row" : 26,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 3,
                            "removed" : false
                        },
                        {
                            "row" : 14,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 15,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 16,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 17,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 18,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 19,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 21,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 22,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 23,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 15,
                            "col" : 3,
                            "rowspan" : 5,
                            "colspan" : 1,
                            "removed" : false
                        },
                        {
                            "row" : 21,
                            "col" : 3,
                            "rowspan" : 3,
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
                            "manualHeight" : 50
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
                            "manualHeight" : 50
                        },
                        "15" : {
                            "manualHeight" : 30
                        },
                        "16" : {
                            "manualHeight" : 30
                        },
                        "17" : {
                            "manualHeight" : 30
                        },
                        "18" : {
                            "manualHeight" : 30
                        },
                        "19" : {
                            "manualHeight" : 30
                        },
                        "20" : {
                            "manualHeight" : 30
                        },
                        "21" : {
                            "manualHeight" : 30
                        },
                        "22" : {
                            "manualHeight" : 30
                        },
                        "23" : {
                            "manualHeight" : 30
                        },
                        "24" : {
                            "manualHeight" : 30
                        },
                        "25" : {
                            "manualHeight" : 30
                        },
                        "26" : {
                            "manualHeight" : 30
                        },
                        "27" : {
                            "manualHeight" : 250
                        }
                    },
                    "cells" : {
                        "A3" : {
                            "value" : "Cryotorr Test",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B3" : {
                            "value" : "Actual Reading          ",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C3" : {
                            "value" : "Reading Time",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D3" : {
                            "value" : "Pass/Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A4" : {
                            "value" : "Room Temp (Diode or Gauge)"
                        },
                        "C4" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A5" : {
                            "value" : "Start Time"
                        },
                        "C5" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D5" : {
                            "value" : "N/A",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A6" : {
                            "value" : "Minutes to 20k/Spec="
                        },
                        "A8" : {
                            "value" : "Spec≦ 10.9k or Gauge 0 psi 2nd Stage"
                        },
                        "A9" : {
                            "value" : "ON Board Test",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B9" : {
                            "value" : "Actual Reading",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C9" : {
                            "value" : "Reading Time",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D9" : {
                            "value" : "Pass/Fail",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A10" : {
                            "value" : "Diode Reading @Room Temp"
                        },
                        "C10" : {
                            "value" : "N/A"
                        },
                        "A11" : {
                            "value" : "Start Time"
                        },
                        "C11" : {
                            "value" : "N/A"
                        },
                        "A12" : {
                            "value" : "Minutes to 17k/spec="
                        },
                        "A13" : {
                            "value" : "Minutes to Bottom Out"
                        },
                        "C14" : {
                            "value" : "N/A"
                        },
                        "B15" : {
                            "value" : "65k ±2k"
                        },
                        "A16" : {
                            "value" : "Spec= 65k±2k，85k±2k"
                        },
                        "A17" : {
                            "value" : "#1 15mins；#2 15mins"
                        },
                        "B17" : {
                            "value" : "85k ±2k"
                        },
                        "A19" : {
                            "value" : "Spec= 100K±1k"
                        },
                        "B19" : {
                            "value" : "100k ±2k"
                        },
                        "A20" : {
                            "value" : "#1 15mins；#2 15mins"
                        },
                        "B21" : {
                            "value" : "Warm Up",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D21" : {
                            "value" : "P  /  F",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A22" : {
                            "value" : "Reset Factory Regan Parameter Ext."
                        },
                        "B22" : {
                            "value" : "真空值"
                        },
                        "A23" : {
                            "value" : "Purge=60 mins，Repurge=5 mins，ROR"
                        },
                        "A24" : {
                            "value" : "Cycles=20，Rough Pressure=50 micron"
                        },
                        "A25" : {
                            "value" : "，2nd Stage Temp=0k"
                        },
                        "B25" : {
                            "value" : "1234567889123456789012",
                            "style" : {
                                "color" : "#F0F8FF"
                            }
                        },
                        "C25" : {
                            "value" : "1234567889123456789012"
                        },
                        "C21" : {
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "A27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "B27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "C27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        },
                        "D27" : {
                            "style" : {
                                "verticalAlign" : "top"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div371")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.91428571428571em")
                .setHeight("2.2095238095238097em"),
                "A1"
            );
            
            host.xui_ui_div371.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput2871")
                .setLeft("-1.3333333333333333em")
                .setTop("0em")
                .setWidth("11.733333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("Date")
                .setType("date")
            );
            
            host.xui_ui_div371.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3408")
                .setName("P/N")
                .setDataBinder("db")
                .setDataField("P/N")
                .setLeft("13.533333333333333em")
                .setTop("0em")
                .setWidth("12.466666666666667em")
                .setLabelSize("4em")
                .setLabelCaption("P/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_div371.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3409")
                .setName("S/N")
                .setDataBinder("db")
                .setDataField("S/N")
                .setLeft("28.2em")
                .setTop("0em")
                .setWidth("13.133333333333333em")
                .setLabelSize("4em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div372")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("56.91428571428571em")
                .setHeight("2.1333333333333333em"),
                "A2"
            );
            
            host.xui_ui_div372.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label315")
                .setLeft("0.4em")
                .setTop("0.26666666666666666em")
                .setCaption("Test")
            );
            
            host.xui_ui_div372.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1239")
                .setDataBinder("db")
                .setDataField("Test Plate：CT OB/IS/P300 SHI Other")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "CT",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "OB/IS/P300",
                        "imageClass" : ""
                    },
                    {
                        "id" : "c",
                        "caption" : "SHI",
                        "imageClass" : ""
                    },
                    {
                        "id" : "d",
                        "caption" : "Other",
                        "imageClass" : ""
                    }
                ])
                .setLeft("8.666666666666666em")
                .setTop("-0.26666666666666666em")
                .setWidth("30.933333333333334em")
                .setHeight("1.9333333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("Test Plate：")
                .setLabelHAlign("left")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_div372.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox542")
                .setDataBinder("db")
                .setDataField("Assy OK")
                .setLeft("39.333333333333336em")
                .setTop("0.1523809523809524em")
                .setWidth("7.333333333333333em")
                .setIconPos("right")
                .setCaption("Assy OK")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div396")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D4"
            );
            
            host.xui_ui_div396.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1344")
                .setDataBinder("db")
                .setDataField("Room Temp (Diode or Gauge) Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("82.28571428571429em")
                .setTop("48.76190476190476em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div398")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D6"
            );
            
            host.xui_ui_div398.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1348")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div399")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("3.657142857142857em"),
                "D7"
            );
            
            host.xui_ui_div399.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1349")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div400")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D8"
            );
            
            host.xui_ui_div400.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1350")
                .setDataBinder("db")
                .setDataField("Spec≦ 10.9k or Gauge 0 psi 2nd Stage Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div401")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D10"
            );
            
            host.xui_ui_div401.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1351")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div402")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D11"
            );
            
            host.xui_ui_div402.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1352")
                .setDataBinder("db")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div403")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D12"
            );
            
            host.xui_ui_div403.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1353")
                .setDataBinder("db")
                .setDataField("Minutes to 17k/Spec=Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div404")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D13"
            );
            
            host.xui_ui_div404.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1354")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom OutPass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div405")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("3.657142857142857em"),
                "D14"
            );
            
            host.xui_ui_div405.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1355")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage Pass")
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
                .setDock("fill")
                .setDockMargin({
                    "left" : 4,
                    "top" : 2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("83.04761904761905em")
                .setTop("49.523809523809526em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div406")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D15"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div415")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D25"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div416")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("2.1333333333333333em"),
                "D26"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div449")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B6"
            );
            
            host.xui_ui_div449.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4106")
                .setDataBinder("db")
                .setDataField("Minutes to 20k/Spec=#1")
                .setDock("fill")
                .setLeft("3.0476190476190474em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div451")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("3.657142857142857em"),
                "B7"
            );
            
            host.xui_ui_div451.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4109")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#1")
                .setDock("width")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div452")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B8"
            );
            
            host.xui_ui_div452.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4110")
                .setDataBinder("db")
                .setDataField("Spec≦ 10.9k or Gauge 0 psi 2nd Stage")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div453")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B12"
            );
            
            host.xui_ui_div453.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4117")
                .setDataBinder("db")
                .setDataField("Minutes to 17k/Spec=#1")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div454")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B13"
            );
            
            host.xui_ui_div454.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4118")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom Out#1")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("9.219047619047618em")
                .setLabelSize("3em")
                .setLabelCaption("mins=")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div455")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("3.657142857142857em"),
                "B14"
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4123")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 1st")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("0.9904761904761905em")
                .setTop("0.1523809523809524em")
                .setWidth("6.552380952380952em")
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div455.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4124")
                .setDataBinder("db")
                .setDataField("Bottom Out Reading After 14k，Spec <=50k 1st Stage And<=10.9k 2nd Stage 2nd")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("0.6857142857142857em")
                .setTop("2.1333333333333333em")
                .setWidth("6.857142857142857em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div458")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B10"
            );
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4113")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp 1st")
                .setDock("left")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("5.79047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("1<sup>st</sup>")
            );
            
            host.xui_ui_div458.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4114")
                .setDataBinder("db")
                .setDataField("Diode Reading @Room Temp 2nd")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setWidth("16.761904761904763em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div459")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("29.561904761904763em")
                .setHeight("2.1333333333333333em"),
                "B16"
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4129")
                .setDataBinder("db")
                .setDataField("Spec= 65K±2k #1 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("7.314285714285714em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4130")
                .setDataBinder("db")
                .setDataField("Spec= 65K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.4em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4135")
                .setDataBinder("db")
                .setDataField("Spec= 65K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.723809523809523em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div459.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4136")
                .setDataBinder("db")
                .setDataField("Spec= 65K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.580952380952382em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div492")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("29.561904761904763em")
                .setHeight("2.1333333333333333em"),
                "B18"
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4301")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #1 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("7.314285714285714em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4302")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.628571428571429em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4303")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.952380952380953em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div492.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4304")
                .setDataBinder("db")
                .setDataField("Spec= 85K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.80952380952381em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div493")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("29.561904761904763em")
                .setHeight("2.1333333333333333em"),
                "B20"
            );
            
            host.xui_ui_div493.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4305")
                .setDataBinder("db")
                .setDataField("Spec= 100K±2k #1 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("7.314285714285714em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1: 1<sup>st</sup>")
            );
            
            host.xui_ui_div493.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4306")
                .setDataBinder("db")
                .setDataField("Spec= 100K±2k #1 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("6.628571428571429em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_div493.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4307")
                .setDataBinder("db")
                .setDataField("Spec= 100K±2k #2 1st")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("12.952380952380953em")
                .setTop("0.1523809523809524em")
                .setWidth("7.542857142857143em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2: 1<sup>st</sup>")
            );
            
            host.xui_ui_div493.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4308")
                .setDataBinder("db")
                .setDataField("Spec= 100K±2k #2 2nd")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("19.80952380952381em")
                .setTop("0.1523809523809524em")
                .setWidth("6.857142857142857em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("3em")
                .setLabelCaption("2<sup>nd</sup>")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div497")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("29.561904761904763em")
                .setHeight("2.1333333333333333em"),
                "B23"
            );
            
            host.xui_ui_div497.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4311")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#1")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("12.723809523809523em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#1:")
            );
            
            host.xui_ui_div497.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3823")
                .setName("B5")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#1 Time")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div498")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("29.561904761904763em")
                .setHeight("2.1333333333333333em"),
                "B24"
            );
            
            host.xui_ui_div498.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4314")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#2")
                .setDockMargin({
                    "left" : 0,
                    "top" : 10,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("0.5")
                .setLeft("-0.5333333333333333em")
                .setTop("0.1523809523809524em")
                .setWidth("12.723809523809523em")
                .setHeight("1.8285714285714285em")
                .setLabelSize("4em")
                .setLabelCaption("#2:")
            );
            
            host.xui_ui_div498.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3829")
                .setName("B5")
                .setDataBinder("db")
                .setDataField("Reset Factory Regan Parameter Ext#2 Time")
                .setLeft("12.876190476190477em")
                .setTop("0em")
                .setWidth("12.19047619047619em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("3em")
                .setLabelCaption("Time")
                .setType("time")
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div535")
                .setDataBinder("db")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("51.352380952380955em")
                .setHeight("2.1333333333333333em"),
                "A26"
            );
            
            host.xui_ui_div535.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1410")
                .setDataBinder("db")
                .setDataField("Test Data Pass")
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
                .setLeft("83.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("8.304761904761905em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div573")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("18.895238095238096em"),
                "A27"
            );
            
            host.xui_ui_div573.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4648")
                .setDataBinder("db")
                .setDataField("Test Data Fail原因")
                .setDock("fill")
                .setLeft("9.142857142857142em")
                .setTop("9.904761904761905em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("Fail原因：")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div574")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("35.12380952380953em")
                .setHeight("18.895238095238096em"),
                "B27"
            );
            
            host.xui_ui_div574.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4649")
                .setDataBinder("db")
                .setDataField("Test Data 處理情形")
                .setDock("fill")
                .setLeft("8.380952380952381em")
                .setTop("7.619047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("處理情形：")
                .setMultiLines(true)
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div615")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("11.123809523809523em"),
                "D16"
            );
            
            host.xui_ui_div615.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1456")
                .setDataBinder("db")
                .setDataField("1st Stage Temp Control Test Pass")
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
                .setLeft("83.80952380952381em")
                .setTop("50.285714285714285em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div649")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("5.485714285714286em")
                .setHeight("6.628571428571429em"),
                "D22"
            );
            
            host.xui_ui_div649.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1475")
                .setDataBinder("db")
                .setDataField("2nd Stage Heater Test")
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
                .setLeft("84.57142857142857em")
                .setTop("51.04761904761905em")
                .setWidth("5.485714285714286em")
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
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label305")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("3.657142857142857em")
                .setCaption("Bottom Out Reading After 14k，Spec<br> <=50k 1st Stage And<=10.9k 2nd Stage ")
                .setHAlign("left"),
                "A14"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label306")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("3.657142857142857em")
                .setCaption("Minutes to 11k after 20k/ Gauge <br>15k，must be ≦ 40 mins")
                .setHAlign("left"),
                "A7"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label307")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("2.1333333333333333em")
                .setCaption("1<sup>st</sup> Stage Temp Control Test")
                .setHAlign("left"),
                "A15"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label308")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("2.1333333333333333em")
                .setCaption("IS 1<sup>st</sup> Stage Temp Control Test")
                .setHAlign("left"),
                "A18"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label309")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.714285714285715em")
                .setHeight("2.1333333333333333em")
                .setCaption("2<sup>nd</sup> Stage Heater Test")
                .setHAlign("left"),
                "A21"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4093")
                .setName("B4")
                .setDataBinder("db")
                .setDataField("Room Temp (Diode or Gauge) #1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "B4"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3693")
                .setName("B5")
                .setDataBinder("db")
                .setDataField("Start Time")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none")
                .setType("time"),
                "B5"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4099")
                .setName("C6")
                .setDataBinder("db")
                .setDataField("Minutes to 20k/Spec=#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C6"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4100")
                .setName("C7")
                .setDataBinder("db")
                .setDataField("Minutes to 11k after 20k/ Gauge 15k，must be ≦ 40 mins#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("3.657142857142857em")
                .setLabelPos("none"),
                "C7"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4101")
                .setName("C8")
                .setDataBinder("db")
                .setDataField("Spec≦ 10.9k or Gauge 0 psi 2nd Stage#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C8"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3700")
                .setName("B11")
                .setDataBinder("db")
                .setDataField("Start Time2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none")
                .setType("time"),
                "B11"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block509")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "B25"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block510")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em"),
                "C25"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4818")
                .setName("C12")
                .setDataField("Minutes to 17k/Spec=#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C12"
            );
            
            host.xui_ui_formlayout2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4819")
                .setName("C13")
                .setDataBinder("db")
                .setDataField("Minutes to Bottom Out#2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.780952380952382em")
                .setHeight("2.1333333333333333em")
                .setLabelPos("none"),
                "C13"
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