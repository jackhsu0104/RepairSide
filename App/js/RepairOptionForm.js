// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.RepairOptionForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "登錄編號",
            "tableName" : "Option零件更換表",
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
                .setHost(host,"opdb")
                .setName("opdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("52.666666666666664em")
                .setHeight("36.57142857142857em")
                .setCaption(" 額外Option零件更換表")
                .setConLayoutColumns(null)
                .onShow("_dialog_onshow")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block103")
                .setDock("bottom")
                .setLeft("13.333333333333334em")
                .setTop("20.723809523809525em")
                .setHeight("6.171428571428572em")
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
                .setLeft("45.333333333333336em")
                .setTop("2em")
                .setWidth("5.561904761904762em")
                .setCaption("取消")
                .onClick("_cancelbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"saveBtn")
                .setLeft("38.666666666666664em")
                .setTop("2em")
                .setWidth("5.561904761904762em")
                .setCaption("儲存")
                .onClick("_savebtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Input")
                .setHost(host,"benchName")
                .setDataBinder("opdb")
                .setDataField("BenchName")
                .setReadonly(true)
                .setLeft("0.7619047619047619em")
                .setTop("3.3333333333333335em")
                .setWidth("9.933333333333334em")
                .setLabelSize("4em")
                .setLabelCaption("填寫人")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"confirmBtn")
                .setDataBinder("opdb")
                .setDataField("秘書確認")
                .setLeft("1.5238095238095237em")
                .setTop("0.6666666666666666em")
                .setWidth("9.142857142857142em")
                .setCaption("通知組長確認")
                .onClick("_confirmbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm1")
                .setDataBinder("opdb")
                .setDataField("組長確認")
                .setReadonly(true)
                .setLeft("10.666666666666666em")
                .setTop("3.3333333333333335em")
                .setWidth("12.066666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("組長確認")
                .setType("getter")
                .onClick("_confirm1_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm2")
                .setDataBinder("opdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("22.666666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("13.333333333333334em")
                .setLabelSize("5em")
                .setLabelCaption("秘書確認")
                .setType("getter")
                .onClick("_confirm2_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairStatus")
                .setDataBinder("opdb")
                .setDataField("維修狀態")
                .setAutoTips(false)
                .setLeft("22.666666666666668em")
                .setTop("0.6666666666666666em")
                .setWidth("13.333333333333334em")
                .setLabelSize("5em")
                .setLabelCaption("維修狀態")
                .setType("listbox")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "",
                        "caption" : ""
                    },
                    {
                        "id" : "確認維修",
                        "caption" : "確認維修"
                    },
                    {
                        "id" : "確認不修",
                        "caption" : "確認不修"
                    }
                ])
                .beforeComboPop("_repairstatus_beforecombopop")
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
                .setHost(host,"xui_ui_div733")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("5.333333333333333em")
                .setHeight("3.2em")
            );
            
            host.xui_ui_div733.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1391")
                .setDataBinder("opdb")
                .setDataField("Model")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setLabelSize("4em")
                .setLabelCaption("Model")
            );
            
            host.xui_ui_div733.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1392")
                .setDataBinder("opdb")
                .setDataField("S/N")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("4.571428571428571em")
                .setTop("0.7619047619047619em")
                .setLabelSize("3em")
                .setLabelCaption("S/N")
            );
            
            host.xui_ui_div733.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repairNo")
                .setDataBinder("opdb")
                .setDataField("登錄編號")
                .setDock("top")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setDockStretch("fixed")
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setWidth("14em")
                .setLabelSize("6em")
                .setLabelCaption("登錄編號")
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs19")
                .setDataBinder("opdb")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Cryopump Basic Repair",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "Motor Basic Repair"
                    },
                    {
                        "id" : "c",
                        "caption" : "Other"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs19.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("8.380952380952381em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox260")
                .setDataBinder("opdb")
                .setDataField("無")
                .setLeft("1.5238095238095237em")
                .setTop("1.4476190476190476em")
                .setWidth("12em")
                .setCaption("無")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox262")
                .setDataBinder("opdb")
                .setDataField("15K Cryopanel (15K Array)")
                .setLeft("1.5238095238095237em")
                .setTop("2.9714285714285715em")
                .setWidth("20.64761904761905em")
                .setHeight("1.5238095238095237em")
                .setCaption("15K Cryopanel (15K Array)")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox263")
                .setDataBinder("opdb")
                .setDataField("80K Baffle (80K Array)")
                .setLeft("1.5238095238095237em")
                .setTop("4.495238095238095em")
                .setWidth("20.64761904761905em")
                .setCaption("80K Baffle (80K Array)")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox264")
                .setDataBinder("opdb")
                .setDataField("80K Radiation Shield")
                .setLeft("1.5238095238095237em")
                .setTop("6.019047619047619em")
                .setWidth("22.17142857142857em")
                .setCaption("80K Radiation Shield")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox265")
                .setDataBinder("opdb")
                .setDataField("1st Displacer")
                .setLeft("1.5238095238095237em")
                .setTop("7.542857142857143em")
                .setWidth("12em")
                .setCaption("1st Displacer")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox266")
                .setDataBinder("opdb")
                .setDataField("2nd Displacer")
                .setLeft("1.5238095238095237em")
                .setTop("9.066666666666666em")
                .setWidth("12em")
                .setCaption("2nd Displacer")
            );
            
            host.block1.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox267")
                .setDataBinder("opdb")
                .setDataField("Motor Fail, 需更換")
                .setLeft("1.5238095238095237em")
                .setTop("10.59047619047619em")
                .setWidth("12em")
                .setCaption("Motor Fail, 需更換")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1418")
                .setDataBinder("opdb")
                .setDataField("其他附註1")
                .setLeft("-1.5238095238095237em")
                .setTop("12.876190476190477em")
                .setWidth("36.57142857142857em")
                .setHeight("6.095238095238095em")
                .setLabelSize("8em")
                .setLabelCaption("其他附註")
                .setMultiLines(true)
            );
            
            host.xui_ui_tabs19.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("8.380952380952381em")
                .setTop("12.19047619047619em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox282")
                .setDataBinder("opdb")
                .setDataField("無#2")
                .setLeft("2.2857142857142856em")
                .setTop("0.6857142857142857em")
                .setWidth("12em")
                .setCaption("無")
            );
            
            host.block2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox283")
                .setDataBinder("opdb")
                .setDataField("Motor軸心斷裂(Motor Shaft Broken)")
                .setLeft("2.2857142857142856em")
                .setTop("2.2095238095238097em")
                .setWidth("20.64761904761905em")
                .setHeight("1.9047619047619047em")
                .setCaption("Motor軸心斷裂(Motor Shaft Broken)")
            );
            
            host.block2.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox286")
                .setDataBinder("opdb")
                .setDataField("Motor線圈斷裂(Motor Wiring Broken)")
                .setLeft("2.2857142857142856em")
                .setTop("6.780952380952381em")
                .setWidth("21.409523809523808em")
                .setHeight("1.6761904761904762em")
                .setCaption("Motor線圈斷裂(Motor Wiring Broken)")
            );
            
            host.block2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1421")
                .setDataBinder("opdb")
                .setDataField("其他附註#2")
                .setLeft("-0.7619047619047619em")
                .setTop("12.114285714285714em")
                .setWidth("36.57142857142857em")
                .setHeight("6.095238095238095em")
                .setLabelSize("8em")
                .setLabelCaption("其他附註")
                .setMultiLines(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox534")
                .setDataBinder("rdb")
                .setDataField("Displacer 1st New")
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setLeft("1.9047619047619047em")
                .setTop("3.4285714285714284em")
                .setWidth("25.904761904761905em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("更換前軸心規格:")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.block2.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox535")
                .setDataBinder("rdb")
                .setDataField("Displacer 1st New")
                .setItems([
                    {
                        "id" : "12.6mm",
                        "caption" : "12.6mm",
                        "imageClass" : ""
                    },
                    {
                        "id" : "9.5mm",
                        "caption" : "9.5mm",
                        "imageClass" : ""
                    }
                ])
                .setLeft("1.9047619047619047em")
                .setTop("4.876190476190477em")
                .setWidth("25.904761904761905em")
                .setHeight("1.7333333333333334em")
                .setLabelSize("8em")
                .setLabelGap("0em")
                .setLabelCaption("更換後軸心規格:")
                .setLabelVAlign("middle")
                .setCheckBox(true)
                .setValue("")
                .setCustomStyle({
                    "ITEMS" : {
                        "overflow" : "hidden"
                    }
                })
            );
            
            host.xui_ui_tabs19.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block3")
                .setDock("fill")
                .setLeft("12.19047619047619em")
                .setTop("12.19047619047619em"),
                "c"
            );
            
            host.block3.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox292")
                .setDataBinder("opdb")
                .setDataField("無#3")
                .setLeft("5.333333333333333em")
                .setTop("0.6857142857142857em")
                .setWidth("12em")
                .setCaption("無")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1422")
                .setDataBinder("opdb")
                .setDataField("#1")
                .setLeft("3.8095238095238093em")
                .setTop("2.9714285714285715em")
                .setWidth("18.20952380952381em")
                .setLabelSize("2em")
                .setLabelCaption("#1")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1423")
                .setDataBinder("opdb")
                .setDataField("#2")
                .setLeft("3.8095238095238093em")
                .setTop("5.257142857142857em")
                .setWidth("18.20952380952381em")
                .setLabelSize("2em")
                .setLabelCaption("#2")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1424")
                .setDataBinder("opdb")
                .setDataField("#3")
                .setLeft("3.8095238095238093em")
                .setTop("7.542857142857143em")
                .setWidth("18.20952380952381em")
                .setLabelSize("2em")
                .setLabelCaption("#3")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1425")
                .setDataBinder("opdb")
                .setDataField("#4")
                .setLeft("3.8095238095238093em")
                .setTop("9.82857142857143em")
                .setWidth("18.20952380952381em")
                .setLabelSize("2em")
                .setLabelCaption("#4")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1426")
                .setDataBinder("opdb")
                .setDataField("#5")
                .setLeft("3.8095238095238093em")
                .setTop("12.114285714285714em")
                .setWidth("18.20952380952381em")
                .setLabelSize("2em")
                .setLabelCaption("#5")
            );
            
            host.block3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1441")
                .setDataBinder("opdb")
                .setDataField("其他附註#3")
                .setLeft("-2.2857142857142856em")
                .setTop("14.4em")
                .setWidth("36.57142857142857em")
                .setHeight("5.333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("其他附註")
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
            if(AppName == "RepairSide")
            {
              var data = ns.opdb.getData();
              if(data["確認狀態"]=="秘書已確認,通知Bench")
                ns.opdb.setData("確認狀態","秘書已確認");
            }
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
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
            // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
              if(AppName == "RepairSide")
              {
                ns.repairStatus.setReadonly(true);        
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
        _confirmbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var rno = ns.repairNo.getUIValue();
            if(uictrl.getCaption() == "通知秘書確認")
                utils.modifyTableItem("Option零件更換表","登錄編號",rno, {"登錄編號":rno, "維修狀態":"報價待確認"});
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
        _confirm1_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            utils.confirmNameClick(ns, uictrl, "組長,主管","待秘書確認");
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
        _confirm2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            var rno = ns.repairNo.getUIValue();
            var status = ns.repairStatus.getUIValue();
            if(status == "")
            {
              utils.alert("請先選擇維修狀態,再確認!");
              return;  
            }
            utils.confirmNameClick(ns, uictrl, "秘書","秘書已確認,通知Bench");
            if(uictrl.getValue() != "")
                utils.modifyTableItem("Option零件更換表","登錄編號",{"登錄編號":rno, "維修狀態": status});
                
        },
        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _repairstatus_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
            if(!LoginUser.Privilege.includes("秘書"))
            {
                utils.alert("秘書才能選擇!");
                return false;
            }
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