xui.Class('App.CodeConverter', 'xui.Module',{
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
                xui.create("xui.UI.Input")
                .setHost(host,"text")
                .setLeft("1.5238095238095237em")
                .setTop("6.095238095238095em")
                .setWidth("46.17142857142857em")
                .setHeight("33.6em")
                .setLabelSize("3em")
                .setLabelCaption("Text\n")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"code")
                .setLeft("51.04761904761905em")
                .setTop("6.095238095238095em")
                .setWidth("46.17142857142857em")
                .setHeight("33.6em")
                .setLabelSize("3em")
                .setLabelCaption("Code")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"convertBtn")
                .setLeft("48em")
                .setTop("19.80952380952381em")
                .setWidth("5.866666666666666em")
                .setCaption("Convert")
                .onClick("_convertbtn_onclick")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label42")
                .setLeft("9.904761904761905em")
                .setTop("42.666666666666664em")
                .setCaption("Label")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"target")
                .setLeft("6.095238095238095em")
                .setTop("3.8095238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("target")
                .setValue("form")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button83")
                .setLeft("47.923809523809524em")
                .setTop("22.857142857142858em")
                .setWidth("5.866666666666666em")
                .setCaption("Show")
                .onClick("_xui_ui_button83_onclick")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label112")
                .setLeft("19.80952380952381em")
                .setTop("47.23809523809524em")
                .setCaption("Label")
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
        },
        hostString: function(s){
            var ns = this;
            return "host." + ns.target.getValue() + ".append(" + s + ")\n";
        },
        createInput: function(caption, len){
            if(len > 12)
                len = 12;
            var ns = this, name = caption.trim(),labelSize = 12;
            var width = len + name.length;
            ns.currentx += caption.length - name.length;
            var s = 'xui.create("xui.UI.Input")';
            if(caption == "")
                labelSize = 0;
            else 
            {
                labelSize = name.length/1.5;
                if(labelSize < 1.5)
                  labelSize = 1.5;  
            }
            caption = name.replaceAll(" ","&ensp;");
            s += `.setDock("none").setLeft("${ns.currentx/1.5}em").setTop("${ns.currenty}em").setWidth("${width/1.5}em").setLabelCaption('${caption}').setLabelSize("${labelSize}em").setDataBinder("db").setDataField('${name}')`;
            ns.currentx += width;
            return ns.hostString(s);  
        },
        createCheckbox: function(caption){
            var ns = this, name = caption.trim();
            var width = name.length + 6;
            ns.currentx += caption.length - name.length;
            var s = `xui.create("xui.UI.CheckBox").setCaption('${name}').setIconPos("left")`; 
            s += `.setDock("none").setLeft("${ns.currentx/2}em").setTop("${ns.currenty}em").setWidth("${width/2}em").setDataBinder("db").setDataField('${name}')`;
            ns.currentx += width;
            return ns.hostString(s);  
        },
        createYN: function(){
            var ns = this, name = "Y/N";
            var s = `xui.create("xui.UI.RadioBox").setItems([{"id":"Y","caption":"Y"},{"id":"N","caption":"N"}]).setHeight("1.8em").setCheckBox(true).setCustomStyle({"ITEMS" : {"overflow" : "hidden"}})`; 
            s += `.setDock("none").setLeft("${ns.currentx/1.5}em").setTop("${ns.currenty}em").setWidth("8.5em").setDataBinder("db").setDataField('${name}')`;
            ns.currentx += 17;
            return ns.hostString(s);  
        },
        createLabel: function(caption){
            var ns = this, name = caption.trim();
            var width = name.length + 2;
            ns.currentx += caption.length - name.length;
            var s = `xui.create("xui.UI.Label").setCaption('${name}').setVAlign("bottom").setHAlign("left").setHeight("1.5em")`; 
            s += `.setDock("none").setLeft("${ns.currentx/1.5}em").setTop("${ns.currenty}em").setWidth("${width/1.5}em")`;
            ns.currentx += width;
            return ns.hostString(s);  
        },
        convertCodes: function(t){
            var ns = this;
            var lines = t.split('\n');
            var R = "";
            var type = "label";
            var value = "";
            var caption = "";
            ns.currentx = 2;
            ns.currenty = 2;
            
            for(var i=0; i<lines.length; i++)
            {
              t = lines[i];
              var state = 0;  
              for(var j=0; j<t.length; j++)
              {
                var c = t[j];
                if(state == 0)
                {
                    if(c == ":")
                    {
                        caption = value;
                        type = "input";
                        value = "";
                        state = 1; //search spaces
                    }
                    else if(c == "_")
                    {
                      caption = value;
                      type = "input";
                      state = 2; //search underline
                      value = "_";  
                    }
                    else if(c == "□")
                    {
                      type = "checkbox";
                      state = 3; //search for none space
                      caption = "";  
                    }
                    else if(c == "Y" && (j+4) <= t.length && t[j+2] == "/" && t[j+4] == "N")
                    {
                      if(value != "")  
                        R += ns.createLabel(value);  
                      R += ns.createYN();
                      value = "";
                      j += 4;  
                    }
                    else 
                      value += c;  
                    if(j == t.length-1 && value != "")
                    {
                        R += ns.createLabel(value);
                        value = "";
                    }
                }
                else if(state == 1 || state == 2) //search spaces to end
                {
                  var endflag = false;  
                  if((state == 1 && c == " ") || (state == 2 && c == "_"))
                      value += c;
                  else
                      endflag = true;
                  if(endflag || j == t.length-1)    
                  {
                      if(type == "input")
                      {
                        R += ns.createInput(caption, value.length);
                        value = "";
                        if(endflag)
                        {
                          type = "label";  
                          j--;
                        }
                      }
                      state = 0;
                  }  
                }
                else if(state == 3) //checkbox caption
                {
                  if(c == " " || j == t.length-1)
                  {
                      R += ns.createCheckbox(caption);
                      value = "";
                      state = 0;
                  }
                  else
                      caption += c;
                }
              }
              ns.currenty += 2;
              ns.currentx = 2;
              value = "";
              type = "label";  
            }
            return R;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _convertbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var t = ns.text.getValue();
            ns.code.setValue(ns.convertCodes(t));
            var host = this;
            ns.form = xui.create("xui.UI.Dialog")
                .setHost(host,"form")
                .setLeft("18.285714285714285em")
                .setTop("28.952380952380953em")
                .setWidth("51.80952380952381em")
                .setCaption("Dialog");
            
            eval(ns.code.getValue());
            ns.form.show();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _closebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.form.hide();
        },
        events:{
            "onReady" : "_page_onready",
            "beforeShow" : "_page_beforeshow",
            "afterShow" : "_page_aftershow"
        },
        _page_onready:function(e,i){

        },
        _page_beforeshow:function(e,i){

        },
        _page_aftershow:function(e,i){
            var ns = this;
            //ns.form.hide();

        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button83_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var host = this;
            ns.form = xui.create("xui.UI.Dialog")
                .setHost(host,"form")
                .setLeft("18.285714285714285em")
                .setTop("28.952380952380953em")
                .setWidth("51.80952380952381em")
                .setCaption("Dialog");
            eval(ns.code.getValue());
            ns.form.show();
        }
    }
});