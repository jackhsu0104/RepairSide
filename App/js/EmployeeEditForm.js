/*************************************************************************************************
 程式代號：RepairSide
 程式名稱：App/js/EmployeeEditForm.js
 系統版本：企業版(for SQL Server)
*************************************************************************************************
 程式版本：1.0
 修改日期：2024/03/02
 修改人員：Jack Hsu
 修改說明：(1). 初始版本
*************************************************************************************************/
xui.Class('App.EmployeeEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "",
            "keyvalue" : "",
            "tableName" : "",
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
                .setHost(host,"db")
                .setName("db")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("16em")
                .setTop("1.5238095238095237em")
                .setWidth("29.561904761904763em")
                .setHeight("30.323809523809523em")
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
                    "right" : 50,
                    "bottom" : 0
                })
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input21")
                .setName("員工編號")
                .setDataBinder("db")
                .setDataField("員工編號")
                .setLeft("2em")
                .setTop("0em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("員工編號")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input22")
                .setName("員工姓名")
                .setDataBinder("db")
                .setDataField("員工姓名")
                .setLeft("2em")
                .setTop("2em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("員工姓名")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input23")
                .setName("English name")
                .setDataBinder("db")
                .setDataField("English name")
                .setLeft("2em")
                .setTop("4em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("English name")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput79")
                .setName("到職日")
                .setDataBinder("db")
                .setDataField("到職日")
                .setLeft("2em")
                .setTop("6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("到職日")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input24")
                .setName("中文職稱")
                .setDataBinder("db")
                .setDataField("中文職稱")
                .setLeft("2em")
                .setTop("8em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("中文職稱")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input25")
                .setName("英文職稱")
                .setDataBinder("db")
                .setDataField("英文職稱")
                .setLeft("2em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("英文職稱")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox11")
                .setName("Active")
                .setDataBinder("db")
                .setDataField("Active")
                .setLeft("2em")
                .setTop("12em")
                .setWidth("18em")
                .setCaption("Active")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox12")
                .setName("Bench")
                .setDataBinder("db")
                .setDataField("Bench")
                .setLeft("2em")
                .setTop("14em")
                .setWidth("18em")
                .setCaption("Bench")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox13")
                .setName("Bench組長")
                .setDataBinder("db")
                .setDataField("Bench組長")
                .setLeft("2em")
                .setTop("16em")
                .setWidth("18em")
                .setCaption("Bench組長")
            );
            
            host.form.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox14")
                .setName("Field")
                .setDataBinder("db")
                .setDataField("Field")
                .setLeft("2em")
                .setTop("18em")
                .setWidth("18em")
                .setCaption("Field")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input26")
                .setName("Remarks")
                .setDataBinder("db")
                .setDataField("Remarks")
                .setLeft("2em")
                .setTop("20em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Remarks")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput80")
                .setName("2003可休年假")
                .setDataBinder("db")
                .setDataField("2003可休年假")
                .setLeft("2em")
                .setTop("22em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("2003可休年假")
                .setType("spin")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput81")
                .setName("2004可休年假")
                .setDataBinder("db")
                .setDataField("2004可休年假")
                .setLeft("2em")
                .setTop("24em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("2004可休年假")
                .setType("spin")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput82")
                .setName("離職日")
                .setDataBinder("db")
                .setDataField("離職日")
                .setLeft("2em")
                .setTop("26em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("離職日")
                .setType("date")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input27")
                .setName("排序代號")
                .setDataBinder("db")
                .setDataField("排序代號")
                .setLeft("2em")
                .setTop("28em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("排序代號")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"test1")
                .setName("中文職稱")
                .setDataBinder("db")
                .setDataField("中文職稱")
                .setLeft("7.923809523809524em")
                .setTop("13.028571428571428em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("測試TableBox")
                .setType("cmdbox")
                .setPopCtrlProp({
                    "tableName" : "FA1010,測試狀況副資料庫",
                    "keyid" : "測試狀況代碼",
                    "displayFields" : "測試狀況代碼:測試狀況敘述"
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
            ns.db.updateDataFromUI();
            var datas = ns.db.getData();
            if(typeof datas.__row__id  != "undefined")
                delete datas.__row__id;
            utils.modifyTableItem(prop.tableName, prop.keyid, datas);
            ns.dialog.close();
        },

        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var ns = this, prop = ns.properties;
            ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
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