// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.PickingEditForm', 'xui.Module',{
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
                .setHost(host,"pdb")
                .setName("pdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("9.266666666666667em")
                .setTop("1.9333333333333333em")
                .setWidth("56.06666666666667em")
                .setHeight("44.19047619047619em")
                .setCaption("維修用料明細表")
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
                xui.create("xui.UI.Div")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("6.857142857142857em")
                .setTop("2.2857142857142856em")
                .setHeight("2.8em")
            );
            
            host.block1.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"modelTabs")
                .setItems([
                    {
                        "id" : "Model1",
                        "caption" : "Model1"
                    },
                    {
                        "id" : "Model2",
                        "caption" : "Model2"
                    },
                    {
                        "id" : "Model3",
                        "caption" : "Model3"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setHeight("3em")
                .setSandboxTheme("classic")
                .setValue("Model1")
                .onItemSelected("_sitetabs_onitemselected")
            );
            
            host.modelTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block")
                .setDock("fill")
                .setLeft("8.666666666666666em")
                .setTop("18.666666666666668em"),
                "Model1"
            );
            
            host.block.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout214")
                .setDock("fill")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("14.476190476190476em")
                .setTop("21.333333333333332em")
                .setWidth("52.333333333333336em")
                .setHeight("34em")
                .setDefaultColumnSize(2)
                .setDefaultRowHeight(30)
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 4,
                    "cells" : {
                        "A1" : {
                            "value" : "品號",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "品名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "庫存",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "領用數量",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
                    }
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
           // utils.saveForm(ns);
            var data = ns.getControlData();  //will do updateDataFromUI
            console.log(data);
            var pdata = ns.pdb.getData();
            var id = pdata["領料報工單號"];
            utils.removeTableItem("領料報工單子表","領料報工單號", id); //remove all subrecords
            for(var i=0; i<data.length;i++)
            {
                utils.insertTableItem("領料報工單子表",data[i]);
            }
        },
        addLayout: function(block,rows){
            var ns = this;
            if(rows.length > 0)
                var model = rows[0]["型號"];
            var cells = {   
                        "A1" : {
                            "value" : "型號",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "B1" : {
                            "value" : "品名",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "C1" : {
                            "value" : "庫存",
                            "style" : {
                                "textAlign" : "center"
                            }
                        },
                        "D1" : {
                            "value" : "領用數量",
                            "style" : {
                                "textAlign" : "center"
                            }
                        }
            };
            for(var i=0; i<rows.length; i++)
            {
                var data = rows[i];
                cells["A"+(i+2)] = {"value": data["品號"], "style":{"textAlign":"left"}}; //品號
                cells["B"+(i+2)] = {"value": data["品名"], "style":{"textAlign":"left"}};  //品名
            }
            var layoutdata = {
                    "rows" : rows.length+1,
                    "cols" : 4,
                    "colSetting":{
                        "A":{"manualWidth":150},
                        "B":{"manualWidth":250}
                    },
                    "cells" : cells
            };    
            var layout = xui.create("xui.UI.FormLayout")
                .setHost(ns)
                .setDock("fill")
                .setDefaultRowHeight(30);
            layout.setLayoutData(layoutdata);
            for(var i=0; i<rows.length;i++)
            {
                var data = rows[i];
                var input = xui.create("xui.UI.ComboInput").setHost(ns).setType("spin").setIncrement(1).setPrecision(0);
                 input.setName(model + "." + data["品號"])
                 .setDataBinder("pdb")
                 .setDataField(model + "." + data["品號"]);
                layout.append(input,"D"+(i+2));
            }
            block.append(layout);
        },
        getModels: function(items){
            var models = [];
            var current = "";
            for(var i=0; i<items.length;i++)
            {
              if(items[i]["型號"] != current)
              {
                current = items[i]["型號"];
                models.push(current);  
              }      
                
            }
            return models;
        },
        getModelItems: function(model, items){
          var rows = [];
          for(var i=0; i<items.length; i++)
          {
            if(items[i]["型號"] == model)
                rows.push(items[i]);
          }
          return rows;  
        },
        loadControls: function(){
            var ns=this, prop=ns.properties;
            var data = ns.pdb.getData();
            var condition = `站別 = '${SiteName}'`;
            var cb = function(data){
              var items = utils.getRowMap(data); 
              var models = ns.getModels(items);
              var hdata = [];
              for(var i=0; i<models.length; i++)
              {
                  var o = {"id":models[i], "caption":models[i]};
                  hdata.push(o);
              }
              ns.modelTabs.setItems(hdata);
                
              for(var i=0; i<models.length; i++)
              {
                var block = xui.create("xui.UI.Block")
                .setHost(ns)
                .setDock("fill")
                ns.modelTabs.append(block, models[i]);
                ns.addLayout(block, ns.getModelItems(models[i],items));
              }
              if(models.length > 0)
                  ns.modelTabs.setValue(models[0]);

            }
            utils.getTableItems({"tableName":"Bench領用料副資料表", "condition":condition, "orderby":"型號,品號"}, cb);
        },
        updateControls: function(){
          var ns = this;
          var data = ns.pdb.getData();  
          var id = data["領料報工單號"];  
          var pdata = utils.getItemValue("領料報工單子表","領料報工單號",id,"*",true); 
          for(var i=0; i<pdata.length; i++)
          {
            var key = pdata[i]["型號"]+ "." + pdata[i]["品號"];
            var value = pdata[i]["領料數量"];  
            ns.pdb.setData(key, value);  
          }
          ns.pdb.updateDataToUI();  
        },
        getControlData:function(){
          var rows = [];  
          var ns = this;  
          ns.pdb.updateDataFromUI();
          var data = ns.pdb.getData();
          var models = ns.modelTabs.getItems();  
          for(var i=0; i<models.length;i++)
          {
            var model = models[i].id;
            var values = data[model];
            //console.log(model, values);
            if(typeof values == "undefined")
                continue;
            var keys = Object.keys(values); 
            for(var j=0; j<keys.length; j++)  
            {
              var pn = keys[j];
              var value = values[pn];
              if(value != null && value != 0)
              {
                let item = {"型號":model, "品號":pn, "領料數量":value};
                rows.push(item);  
              }
            }
          }
          return rows;  
        },
        loadPickingData: function(site){
          var ns = this;
          ns.pickingData = utils.getItemValue("Bench領用料副資料表","站別",site,"*",true);  
            
        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop=ns.properties;
            ns.block.destroy();
            ns.loadControls();
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
            },
        /**
         * Fired when a tab is selected
         * @method onItemSelected [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
        */
        _sitetabs_onitemselected:function(profile, item, e, src, n){
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