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
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button36")
                .setLeft("6.666666666666667em")
                .setTop("2.6666666666666665em")
                .setWidth("8.733333333333333em")
                .setCaption("Button")
                .onClick("_xui_ui_button36_onclick")
            );
            
            host.form.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox3198")
                .setDataBinder("rdb")
                .setDataField("E4")
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
                .setDock("top")
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
                .setSelMode("multi")
                .setTagCmdsAlign("left")
                .setLabelPos("none")
                .setLabelGap("0em")
                .setLabelHAlign("left")
                .setLabelVAlign("")
                .setCheckBox(true)
                .setValue("")
                .onItemSelected("_xui_ui_radiobox3198_onitemselected")
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
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7025")
                .setLeft("40em")
                .setTop("3.3333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("t1")
                .setType("time")
                .setExcelCellId("D1")
                .setValue("00:15")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7026")
                .setLeft("40.333333333333336em")
                .setTop("6.266666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("t2")
                .setType("time")
                .setExcelCellId("E1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7028")
                .setLeft("39.666666666666664em")
                .setTop("10.266666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("t")
                .setType("input")
                .setExcelCellFormula("=D1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7750")
                .setLeft("18.666666666666668em")
                .setTop("10em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
                .setExcelCellId("A1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7751")
                .setLeft("18.6em")
                .setTop("14em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
                .setExcelCellId("B1")
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7752")
                .setLeft("18.6em")
                .setTop("18.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
                .setExcelCellFormula("=D1-E1")
            );
            
            host.form.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7800")
                .setName("Pump S/N")
                .setDataBinder("comdb")
                .setDataField("附屬配件")
                .setLeft("18.6em")
                .setTop("6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("附屬配件")
                .setMaxlength("32")
                .setItems([
                    {
                        "id" : "N/A",
                        "caption" : "N/A"
                    }
                ])
            );
            
            host.form.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14498")
                .setLeft("20em")
                .setTop("28em")
                .setWidth("18em")
                .setHeight("10em")
                .setResizer(true)
                .setLabelSize("8em")
                .setLabelCaption("Text Area")
                .setMultiLines(true)
            );
            
            host.form.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "12",
                        "caption" : "CH12",
                        "imageClass" : "",
                        "closeBtn" : true
                    }
                ])
                .setDock("none")
                .setLeft("7em")
                .setTop("22.933333333333334em")
                .setHeight("2.6666666666666665em")
                .setNoPanel(true)
                .setWidth("41em")
                .setValue("1")
                .beforeUIValueSet("_tabs_beforeuivalueset")
                .beforePageClose("_tabs_beforepageclose")
                .onItemSelected("_tabs_onitemselected")
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
            ns.tabs.setItems([{"id":1, "caption":"CH1", "closeBtn":true}]);
            ns.tabs.setValue("1");
            
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