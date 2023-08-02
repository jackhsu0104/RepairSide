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
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button36_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var mod = uictrl.getModule();
            var db = xui.DataBinder.getFromName("db21");
            console.log(ns);
            console.log(mod);
            console.log(db);
            
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