// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.test2', 'xui.Module',{
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
                xui.create("xui.DataBinder")
                .setHost(host,"db1")
                .setName("db1")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"form")
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setWidth("77.56190476190476em")
                .setHeight("48.68571428571428em")
                .setCaption("Dialog")
            );
            
            host.form.append(
                xui.create("xui.UI.MoudluePlaceHolder")
                .setHost(host,"module_cryopumptestlayout1")
            );
            
            host.form.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"module_datagrid13")
                .setProperties({
                    "tableName" : "BU3員工資料表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "員工代號",
                    "openPageName" : "",
                    "mode" : "normal",
                    "enableCopyButton" : false,
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : ""
                })
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"xui_ui_popmenu430")
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
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    }
                ])
                .onMenuSelected("_xui_ui_popmenu430_onmenuselected")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        confirm:function(title, caption, onYes, onNo, btnCapYes, btnCapNo, left, top, parent, subId, noCache){
            var me=arguments.callee, dialog;

            if(noCache || !(dialog=me.dialog) || !dialog.get(0) || (!dialog.get(0).renderId)){
                dialog = new xui.UI.Dialog({
                    overflow:'hidden',
                    minBtn:false,
                    maxBtn:false,
                    pinBtn:false,
                    resizer:false
                },{
                    beforeClose:function(){
                        if(!dialog._$_clicked)
                            xui.tryF(dialog._$onNo,['close']);
                        else
                            delete dialog._$_clicked;
                        dialog._$onYes=dialog._$onNo=null;
                        if(!noCache){
                            dialog.hide();
                            return false;
                        }
                    },
                    onHotKeydown:function(p,k){
                        if(k.key=='esc')
                            dialog.close();
                    }
                });

                var cmd = dialog.$cmd=new xui.UI.Div({
                    height:'2.5em',
                    dock:'bottom',
                    zIndex:10
                },null,null,null,{KEY:"text-align:center;padding-top:.5em"}),
                btn = dialog.$btn1 = new xui.UI.SButton({
                    tabindex:1,
                    position:'relative'
                },
                {
                    onClick:function(){
                        xui.tryF(dialog._$onYes,['yes']);
                        dialog._$_clicked=1;
                        dialog.close();
                    }
                },null,null,{KEY:'margin:0 .5em'});
                cmd.append(btn);

                btn = dialog.$btn2=new xui.UI.SButton({
                    tabindex:1,
                    position:'relative'
                },
                {
                    onClick:function(){
                        xui.tryF(dialog._$onNo,['no']);
                        dialog._$_clicked=1;
                        dialog.close();
                    }
                },null,null,{KEY:'margin:0 .5em'});
                cmd.append(btn);

                var div = dialog.$div=new xui.UI.Div({
                    left:10,
                    top:10
                });
                dialog.append(cmd).append(div).render();

                if(!noCache)
                    me.dialog = dialog;
            }
            dialog._$onYes=onYes;
            dialog._$onNo=onNo;
            delete dialog._$_clicked;
            dialog.$btn1.setCaption("&nbsp;&nbsp;"+(btnCapYes || xui.wrapRes('$inline.yes'))+"&nbsp;&nbsp;");
            dialog.$btn2.setCaption("&nbsp;&nbsp;"+(btnCapNo || xui.wrapRes('$inline.no'))+"&nbsp;&nbsp;");
            var size=xui.UI.Dialog._adjust(dialog, title, caption, "Confirm");

            if(parent && parent["xui.UI"])parent=parent.getContainer(subId);
            if(!xui.isSet(parent))parent=xui('body');

            dialog.showModal(parent, true, left, top);
            /*
            xui.resetRun("dlg_focus:"+dialog.get(0).$xid,function(){
                dialog.$btn2.activate();
            });
            */
            return dialog;
        },        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button36_onclick:function(profile, e, src, value){
            var ns = this;
           // ns.tabs.setItems([{"id":1, "caption":"CH1", "closeBtn":true}]);
           // ns.tabs.setValue("1");
            console.log(ns.a.getUIValue());
            //xui.alert("456");
            /*
            var ns = this, uictrl = profile.boxing();
            var menu = xui.create("xui.UI.PopMenu").setHost(ns,"pickingMenu").setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item 2",
                        "imageClass" : "xui-icon-number2"
                    }
                ]);
            ns.AddComponents(menu);
            ns.pickingMenu.popUp(uictrl);
            */
/*
            var mod = uictrl.getModule();
            var db = xui.DataBinder.getFromName("db21");
            console.log(ns);
            console.log(mod);
            console.log(db);
*/            
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.RadioBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _xui_ui_radiobox3198_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            if(type == 1)
            {
              if(item.id == "Pass")
                  uictrl.setValue("Pass");
              else 
                  uictrl.setValue("Fail");
                  
                
            }
        },
            /**
         * Fired when a menu item is selected
         * @method onMenuSelected [xui.UI.PopMenu event]
         * @param {xui} profile .UIProfile
         * @param {} item  Object
         * @param {Element.xui} src  id or Dom Element
        */
            _xui_ui_popmenu430_onmenuselected:function(profile, item, src){
                var ns = this, uictrl = profile.boxing();
            },
        /**
         * Fired when a list item was clicked
         * @method onClick [xui.UI.RadioBox event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {list} item  item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
        */
        _xui_ui_radiobox3198_onclick:function(profile, item, e, src){
            var ns = this, uictrl = profile.boxing();
            if(uictrl.getUIValue() == item.id)
                item.id = null;
        },
            events:{
                "onReady" : "_page_onready"
            },
        _page_onready:function(e,i){
            DebugMode = true;
            ShowDataCommand = true;

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