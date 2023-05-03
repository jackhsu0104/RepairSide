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
                .onChange("_xui_ui_checkbox6_onchange")
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
            
            host.form.append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn1")
                .setLeft("11.333333333333334em")
                .setTop("6.666666666666667em")
                .setWidth("7.266666666666667em")
                .setCaption("Button")
                .onClick("_btn1_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"combo5")
                .setDataBinder("db")
                .setDataField("combo5")
                .setLeft("9.533333333333333em")
                .setTop("17em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("test")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item4"
                    }
                ])
                .onValueChange("_combo5_onvaluechange")
                .afterUIValueSet("_combo5_afteruivalueset")
                .onChange("_combo5_onchange")
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
 /*           var check = xui.create("xui.UI.CheckBox")
                .setHost(ns)
                .setName("A1")
                .setHAlign("center")
                .setVAlign("middle")
                .onChange("_xui_ui_checkbox371_onchange")
                .setCaption("");
            ns.layout.append(check, "A1");
            */
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
                _btn1_onclick:function(profile, e, src, value){
                    var ns = this, uictrl = profile.boxing();
                   // ns.db.setData("combo5", "item1");
                   ns.db.updateDataFromUI();
                   // ns.combo5.setValue("item6");
                    var newitem = {"登錄編號2": "1234567", "Test100": "100"}; 
                    ns.db.setData("登錄編號2", "1234567");
                    ns.db.setData("Test100", "100");
                    //ns.db.setData(newitem);
                    console.log(ns.db.getData());
                },
                    /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.CheckBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
                    _xui_ui_checkbox6_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
                        var ns = this, uictrl = profile.boxing();
                        console.log("changed");
                    },
        /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.CheckBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _xui_ui_checkbox371_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            console.log("!")
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
            _combo5_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
                var ns = this, uictrl = profile.boxing();
                console.log("UI Value Set");
            },
        /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _combo5_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            console.log("OnChange");
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
        _combo5_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
              console.log("OnValueChange");
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