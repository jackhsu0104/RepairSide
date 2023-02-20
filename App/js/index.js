// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"mainPage")
                .setItems([
                    {
                        "id" : "維修案件",
                        "caption" : "維修案件",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "換貨案件",
                        "caption" : "換貨案件",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "國內外銷售",
                        "caption" : "國內外銷售",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "CN管理系統",
                        "caption" : "CN管理系統",
                        "imageClass" : "xui-icon-number4"
                    },
                    {
                        "id" : "通用查詢",
                        "caption" : "通用查詢",
                        "imageClass" : "xui-icon-number5"
                    },
                    {
                        "id" : "一般查詢",
                        "caption" : "一般查詢",
                        "imageClass" : "xui-icon-number6"
                    },
                    {
                        "id" : "標籤列印",
                        "caption" : "標籤列印",
                        "imageClass" : "xui-icon-number7"
                    },
                    {
                        "id" : "員工資料管理",
                        "caption" : "員工資料管理",
                        "imageClass" : "xui-icon-number8"
                    },
                    {
                        "id" : "Test",
                        "caption" : "Test",
                        "imageClass" : "xui-icon-number1",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("12em")
                .setValue("Test")
                .onItemSelected("_mainpage_onitemselected")
            );
            
            host.mainPage.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"employeeGrid")
                .setProperties({
                    "tableName" : "H1011,群呈員工資料表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "員工編號",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "員工編號",
                    "openPageName" : "EmployeeEditForm",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "fields" : "",
                    "rowLength" : 100,
                    "conditions" : ""
                }),
                "員工資料管理"
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs6")
                .setItems([
                    {
                        "id" : "查詢管理",
                        "caption" : "查詢管理",
                        "imageClass" : ""
                    },
                    {
                        "id" : "顯示欄位管理",
                        "caption" : "顯示欄位管理"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("顯示欄位管理"),
                "通用查詢"
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel15")
                .setDock("top")
                .setLeft("15.39047619047619em")
                .setTop("13.104761904761904em")
                .setWidth("18em")
                .setHeight("20.34285714285714em")
                .setCaption("公用查詢")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true),
                "查詢管理"
            );
            
            host.xui_ui_panel15.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"module_datagrid8")
                .setProperties({
                    "tableName" : "",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "fields" : "",
                    "rowLength" : 20,
                    "conditions" : ""
                })
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel16")
                .setLeft("10.666666666666666em")
                .setTop("32.76190476190476em")
                .setWidth("18em")
                .setHeight("18em")
                .setCaption("自用查詢")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true),
                "查詢管理"
            );
            
            host.xui_ui_panel16.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"module_datagrid9")
                .setProperties({
                    "tableName" : "",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "fields" : "",
                    "rowLength" : 20,
                    "conditions" : ""
                })
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel24")
                .setDock("top")
                .setLeft("16.152380952380952em")
                .setTop("13.866666666666667em")
                .setWidth("18em")
                .setHeight("20.34285714285714em")
                .setCaption("公用欄位顯示")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true),
                "顯示欄位管理"
            );
            
            host.xui_ui_panel24.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"module_datagrid21")
                .setProperties({
                    "tableName" : "",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "fields" : "",
                    "rowLength" : 20,
                    "conditions" : "",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "toolbar" : {
                            "properties" : {
                                "items" : [
                                    {
                                        "id" : "grp1",
                                        "sub" : [
                                            {
                                                "id" : "new",
                                                "caption" : "新增",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-add"
                                            },
                                            {
                                                "id" : "open",
                                                "caption" : "編輯",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-popbox",
                                                "disabled" : true
                                            },
                                            {
                                                "id" : "delete",
                                                "caption" : "刪除",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-close",
                                                "disabled" : true
                                            },
                                            {
                                                "id" : "custom1",
                                                "caption" : "執行查詢",
                                                "hidden" : false
                                            }
                                        ],
                                        "caption" : "grp1"
                                    }
                                ]
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel25")
                .setLeft("11.428571428571429em")
                .setTop("33.523809523809526em")
                .setWidth("18em")
                .setHeight("18em")
                .setCaption("自用欄位顯示")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true),
                "顯示欄位管理"
            );
            
            host.xui_ui_panel25.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"module_datagrid22")
                .setProperties({
                    "tableName" : "",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "fields" : "",
                    "rowLength" : 20,
                    "conditions" : "",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "toolbar" : {
                            "properties" : {
                                "items" : [
                                    {
                                        "id" : "grp1",
                                        "sub" : [
                                            {
                                                "id" : "new",
                                                "caption" : "新增",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-add"
                                            },
                                            {
                                                "id" : "open",
                                                "caption" : "編輯",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-popbox",
                                                "disabled" : true
                                            },
                                            {
                                                "id" : "delete",
                                                "caption" : "刪除",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-close",
                                                "disabled" : true
                                            },
                                            {
                                                "id" : "custom1",
                                                "caption" : "執行查詢",
                                                "hidden" : false
                                            }
                                        ],
                                        "caption" : "grp1"
                                    }
                                ]
                            }
                        }
                    }
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"repairTopBlock")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("12.19047619047619em"),
                "維修案件"
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"repairBlock")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("25.904761904761905em"),
                "維修案件"
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"popmenu1")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item 2",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item 3",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item 4",
                        "imageClass" : "xui-icon-number9",
                        "disabled" : true
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _xui_ui_comboinput17_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
            xui.newModule("App.CustListBox", function(err,mod){
                mod.popUp(uictrl);
            });
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button107_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.modGrid1.loadGridData(0);
           // ns.datalist.loadGridData();
/*            
            xui.showModule("App.DataInputDialog",function(mod){
                mod.setEvents("onDestroy",function(){
                    xui.alert("Destroyed...");
                });
                
            });
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
        _xui_ui_button8_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.modDataList.loadGridData();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button50_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
//            if(ns.modDatalist1.grid.getHeader().length == 0)
        },

        /**
         * Fired when a tab is selected
         * @method onItemSelected [xui.UI.ButtonViews event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
        */
        _mainpage_onitemselected:function(profile, item, e, src, n){
            var ns = this, uictrl = profile.boxing();
            //console.log(item);
            if(item.id == "員工資料管理")
                ns.employeeGrid.loadGridData(0);
        },
/**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
_xui_ui_comboinput531_beforecombopop:function(profile, pos, e, src){
    var ns = this, uictrl = profile.boxing();
//    ns.popmenu1.popUp(uictrl);
    ns.popmenu1.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-INPUT"]);
    //var subnodes = uictrl.getSubNodes();
},
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button169_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.testCombo1.setValue("!234");
            ns.testCombo1.setCaption("!234  5678");
            console.log("children:",ns.modList1.getComponents());
            console.log("items:", ns.testCombo1.getItems());
            console.log("listkey:", ns.testCombo1.getListKey());
            console.log("prop:", ns.testCombo1.getPopCtrlProp());
            
        },
        /**
         * Fired when a cell's editor command button is clicked. Cell type must in 'date,time,datetime,listbox,combobox,helpinput,color,getter,popbox,cmdbox'
         * @method onCommand [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {} cell  Object
         * @param {xui.UIProfile} proEditor , the editor profile Object, if the editor exists
         * @param {String} src , command button's xid
         * @param {}  
         * @param {}  
         * @param {}  
        */
        _xui_ui_treegrid212_oncommand:function(profile, cell, proEditor, src, n, r, a){
            var ns = this, uictrl = profile.boxing();
            console.log("command");
        },
        /**
         * Fired when a cell(type is 'label/button' or not editable) is clicked
         * @method onClickCell [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {} cell  Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
         * @param {}  
        */
        _xui_ui_treegrid212_onclickcell:function(profile, cell, e, src, n, r){
            var ns = this, uictrl = profile.boxing();
            console.log("click");
            console.log(cell);
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _xui_ui_button62_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.popmenu1.popUp(uictrl);
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