xui.Class('App.test1', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"databinder_6")
                .setName("databinder_6")
            );
            
            append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar54")
                .setItems([
                    {
                        "id" : "grp1",
                        "sub" : [
                            {
                                "id" : "a1",
                                "caption" : "button"
                            },
                            {
                                "id" : "a2",
                                "type" : "split"
                            },
                            {
                                "id" : "a3",
                                "caption" : "drop button",
                                "type" : "dropButton"
                            },
                            {
                                "id" : "a4",
                                "caption" : "status button",
                                "type" : "statusButton"
                            }
                        ],
                        "caption" : "grp1"
                    },
                    {
                        "id" : "grp2",
                        "sub" : [
                            {
                                "id" : "b1",
                                "imageClass" : "xui-icon-xui",
                                "caption" : ""
                            },
                            {
                                "id" : "b2",
                                "caption" : "image button",
                                "label" : "label:",
                                "imageClass" : "xui-icon-xui"
                            }
                        ],
                        "caption" : "grp2"
                    }
                ])
                .setTop("28.19047619047619em")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"combo")
                .setLeft("14.476190476190476em")
                .setTop("24.38095238095238em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Combo Input")
                .setType("cmdbox")
                .beforeComboPop("_combo_beforecombopop")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setLeft("30.476190476190474em")
                .setTop("30.476190476190474em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput71")
                .setLeft("32em")
                .setTop("36.57142857142857em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Number Input")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput74")
                .setLeft("15.238095238095237em")
                .setTop("32em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Spinner")
                .setType("spin")
                .setPrecision(0)
                .setIncrement(1)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button37_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            console.log(ns.datagrid3.valueColumn);
        },
        autoDestroy:true,
        /**
         * Fired when keyboard is pressed
         * @method onHotKeypress [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} keyboard , keyboard object
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _xui_ui_input9_onhotkeypress:function(profile, keyboard, e, src){
            var ns = this, uictrl = profile.boxing();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _loadgridbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.modGrid.loadGridData(0);
        },

        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _combo_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
            console.log(ns.getProfile().boxing());
        }
    }
});