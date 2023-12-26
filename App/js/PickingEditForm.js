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
                xui.create("xui.Timer")
                .setHost(host,"timer1")
                .setAutoStart(false)
                .setInterval(3000)
                .onTime("_timer1_ontime")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"pdb2")
                .setName("pdb2")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setDataBinder("pdb2")
                .setLeft("9.266666666666667em")
                .setTop("1.9333333333333333em")
                .setWidth("62.06666666666667em")
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
                .setHost(host,"mainTabs")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "領料表",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "其他"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setLazyAppend(false)
                .setValue("a")
            );
            
            host.mainTabs.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"grid2")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id" : "領用庫別",
                        "caption" : "領用庫別",
                        "type" : "label",
                        "width" : "5.0285714285714285em"
                    },
                    {
                        "id" : "品號",
                        "caption" : "品號",
                        "type" : "label",
                        "width" : "8em"
                    },
                    {
                        "id" : "品名",
                        "caption" : "品名",
                        "type" : "label",
                        "width" : "16em"
                    },
                    {
                        "id" : "批號",
                        "caption" : "批號",
                        "type" : "popbox",
                        "width" : "8em"
                    },
                    {
                        "id" : "庫存數量",
                        "caption" : "庫存數量",
                        "type" : "input",
                        "width" : "8em",
                        "cellStyle" : "text-align: center;",
                        "readonly" : true
                    },
                    {
                        "id" : "領料數量",
                        "caption" : "領料數量",
                        "type" : "counter",
                        "width" : "8em",
                        "min" : 0
                    }
                ])
                .setTagCmds([
                    {
                        "id" : "clear",
                        "type" : "button",
                        "caption" : "清除",
                        "itemStyle" : "margin-left: 2em;"
                    }
                ])
                .onCmd("_grid2_oncmd"),
                "b"
            );
            
            host.mainTabs.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"grid1")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id" : "領用庫別",
                        "caption" : "領用庫別",
                        "type" : "label",
                        "width" : "5.0285714285714285em"
                    },
                    {
                        "id" : "品號",
                        "caption" : "品號",
                        "type" : "label",
                        "width" : "8em"
                    },
                    {
                        "id" : "品名",
                        "caption" : "品名",
                        "type" : "label",
                        "width" : "16em"
                    },
                    {
                        "id" : "批號",
                        "caption" : "批號",
                        "type" : "popbox",
                        "width" : "8em"
                    },
                    {
                        "id" : "庫存數量",
                        "caption" : "庫存數量",
                        "type" : "input",
                        "width" : "8em",
                        "cellStyle" : "text-align: center;",
                        "readonly" : true
                    },
                    {
                        "id" : "領料數量",
                        "caption" : "領料數量",
                        "type" : "counter",
                        "width" : "8em",
                        "min" : 0
                    }
                ])
                .setTagCmds([
                    {
                        "id" : "clear",
                        "type" : "button",
                        "caption" : "清除",
                        "itemStyle" : "margin-left: 2em;"
                    }
                ])
                .onCmd("_grid1_oncmd"),
                "a"
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
        _resetbtn_onclick: function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing(), prop = ns.properties;
            var input = uictrl.linkControl;
            input.setValue(0);
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
            var datas = ns.getGridData();  //will do updateDataFromUI
            //console.log(data);
            var pd = ns.pdb2.getData();                
            utils.removeTableItem("領料報工單子表","領料報工單號", pd["領料報工單號"]); //remove all subrecords
            for(var i=0; i<datas.length;i++)
            {
                var d = datas[i];
                utils.insertTableItem("領料報工單子表",d);
            }
            ns.destroy();
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
                 .setDataBinder("pdb2")
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
        getPnName: function(pn){
          var ns = this;
          if(typeof ns.pnNameMap == "undefined")
          {
              var items = utils.getItemValue("Bench領用料副資料表查詢");
              ns.pnNameMap = {};
              for(var i=0; i<items.length; i++)
              {
                var item = items[i];
                ns.pnNameMap[item["品號"]] = item["品名"];  
              }
          }
          return ns.pnNameMap[pn];  
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
        getPickingItemCount: function(model,pn, defValue = -1){
            var ns = this;
            if(typeof ns.pickingCountList == "undefined")
            {
              var data = ns.pdb2.getData();  
              var id = data["領料報工單號"];  
              ns.pickingCountList = utils.getItemValue("領料報工單子表","領料報工單號",id, "*", true);
                
              if(ns.pickingCountList == "")
                  ns.pickingCountList = [];
            }
            for(var i=0; i<ns.pickingCountList.length; i++)
            {
              var item = ns.pickingCountList[i];   
              if(pn == item["品號"] && model == item["型號"])
                  return Number(item["領料數量"]);
            }
            if(ns.pickingCountList.length == 0 && defValue != -1)
                return Number(defValue);
            else
                return 0;
        },
        getPickingItemNo: function(model,pn){
            var ns = this;
            if(typeof ns.pickingCountList == "undefined")
            {
              var data = ns.pdb2.getData();  
              var id = data["領料報工單號"];  
              ns.pickingCountList = utils.getItemValue("領料報工單子表","領料報工單號",id, "*", true);
                
              if(ns.pickingCountList == "")
                  ns.pickingCountList = [];
            }
            for(var i=0; i<ns.pickingCountList.length; i++)
            {
              var item = ns.pickingCountList[i];   
              if(pn == item["品號"] && model == item["型號"])
                  return item["批號"];
            }
            return "";
        },        
        getStoreItemCount: function(pn){
            var ns = this;
            if(typeof ns.storeCountList == "undefined")
            {
              ns.storeCountList = utils.getItemValue("ERP領料庫存查詢","庫別", ns.storeName,"*", true);    
              if(ns.storeCountList == "")
                  ns.storeCountList = [];
              for(var i=0; i<ns.storeCountList.length; i++)
                 ns.storeCountList[i]["品號"] = ns.storeCountList[i]["品號"].trim();     
            }
            for(var i=0; i<ns.storeCountList.length; i++)
            {
              var item = ns.storeCountList[i];   
              if(pn == item["品號"])
              {
                  if(item["庫存數量"] == "N/A")
                      return "N/A";
                  else
                      return Number(item["庫存數量"]);
              }
            }
            return 0;
        },
        setLayout: function(layout,rows){
            var ns = this;
            if(rows.length > 0)
                var model = rows[0]["型號"];
            var cells = {   
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
                        },
                        "E1" : {
                            "value" : "清除",
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
                data["庫存"] = ns.getStoreItemCount(data["品號"]);
                cells["C"+(i+2)] = {"value": data["庫存"], "style":{"textAlign":"left"}};  //品名
            }
            var layoutdata = {
                    "rows" : rows.length+1,
                    "cols" : 5,
                    "colSetting":{
                        "A":{"manualWidth":150},
                        "B":{"manualWidth":250},
                        "E":{"manualWidth":50}
                    },
                    "cells" : cells
            };    
            layout.setLayoutData(layoutdata);
            for(var i=0; i<rows.length;i++)
            {
                var data = rows[i];
                var input = xui.create("xui.UI.ComboInput").setHost(ns).setType("spin").setIncrement(1).setPrecision(0);
                 input.setName(model + "." + data["品號"])
                 .setDataBinder("pdb2")
                 .setDataField(model + "." + data["品號"])
                 .setValue(data["數量"]);
                if(data["庫存"] == 0)
                {    
                    input.setValue(0);
                    input.setDisabled(true);
                }
                else {
                    input.setMin(0);
                    if(data["庫存"] == "N/A")
                      input.setMax(999999);
                    else
                      input.setMax(data["庫存"]);
                }
                layout.append(input,"D"+(i+2));
                var btn = xui.create("xui.UI.Button").setHost(ns).onClick("_resetbtn_onclick").setCaption("").setImageClass("xui-uicmd-close");
                btn.linkControl = input;
                layout.append(btn,"E"+(i+2));
            }
        },
        updateGridStoreCount: function(grid){
            var ns = this;
//            grid.render();
            var rows = grid.getRows();
            for(var i=0; i<rows.length;i++)
            {
              var r = rows[i];
              var scount = ns.getStoreItemCount(r["品號"]); 
              var pcount =  r["領料數量"];
              if(pcount >scount)
                  pcount = scount;
              grid.updateCellByRowCol(r.id, "庫存數量", {"value":scount});  
              grid.updateCellByRowCol(r.id, "領料數量", {"max":scount, "value": pcount }); 
            }
            
        },
        loadControls: function(){
            var ns=this, prop=ns.properties;
            var data = ns.pdb2.getData();
            var model = data["型號"];
            var condition = `站別 = '${data["維修站別"]}' AND 型號 = '${model}'`;
            var mode = prop.mode;

            if(model && model != "")
            {    
              var cb = function(datas){
                let items = utils.getRowMap(datas); 
                ns.mainTabs.updateItem('a',{"caption": model});
                
                for(var i=0; i<items.length; i++)
                {
                  let item = items[i];
                  //item["庫存數量"] = ns.getStoreItemCount(item["品號"]);  
                  item["領用庫別"] = ns.storeName;
                  var value =  ns.getPickingItemCount(model, item["品號"], item["領料數量"]);  //default = item["領料數量"] 
                  if(ns.pickingCountList.length == 0 && value > item["庫存數量"])  //no previous records
                      value = item["庫存數量"];
                  if(item["庫存數量"] != "N/A") 
                  {
                      item["領料數量"] = {"value": value, "max":Number(item["庫存數量"])};
                      item["庫存數量"] = Math.round(item["庫存數量"]).toString();
                  }
                  else
                      item["領料數量"] = {"value": value, "max": 9999999999};      
                  value =  ns.getPickingItemNo(model, item["品號"]);  
                  item["批號"] = value;
                }
                ns.grid1.setRows(items);
                //ns.updateGridStoreCount(ns.grid1);
              };
              let datas = utils.getTableItems({"tableName":"Bench領用料副資料表查詢", "condition":condition, "orderby":"型號,品號"});
              cb(datas);
            }
            else 
            {
                ns.mainTabs.updateItem('a',{"hidden": true});
                ns.mainTabs.setValue('b');
            }
            
            var condition2 = `庫別 = '${ns.storeName}'`;
            var cb2 = function(data){
              let items = utils.getRowMap(data); 
              
              for(var i=0; i<items.length; i++)
              {
                let it = items[i];
                it["品號"] = it["品號"].trim();
                it["數量"] = 1;
                //it["品名"] = ns.getPnName(it["品號"]);  
                //it["庫存數量"] = ns.getStoreItemCount(it["品號"]);  
                it["型號"] = "其他";
                var value =  ns.getPickingItemCount("其他", it["品號"]); 
                if(it["庫存數量"] != "N/A") 
                {    
                  it["領料數量"] = {"value": value, "max":Number(it["庫存數量"])};
                  it["庫存數量"] = Math.round(it["庫存數量"]).toString();
                }
                else
                  it["領料數量"] = {"value": value, "max": 9999999999};
                    
                it["領用庫別"] = ns.storeName;
                value =  ns.getPickingItemNo("其他", it["品號"]);  
                it["批號"] = value;
              }
              ns.grid2.setRows(items);  
              //ns.updateGridStoreCount(ns.grid2);
            }
            let datas2 = utils.getTableItems({"tableName":"ERP領料庫存查詢", "condition":condition2, "orderby":"品號"});
            cb2(datas2);
            
        },
        updateControls: function(){
            /*
          var ns = this;
          var data = ns.pdb2.getData();  
          var id = data["領料報工單號"];  
          var pdata = utils.getItemValue("領料報工單子表","領料報工單號",id,"*",true); 
          for(var i=0; i<pdata.length; i++)
          {
            var key = pdata[i]["型號"]+ "." + pdata[i]["品號"];
            var value = pdata[i]["領料數量"];  
            ns.pdb2.setData(key, value);  
          }
          ns.timer1.start(); //start once
          */
        },
        updateGrid: function(){
          var ns = this;
          //ns.grid1.render();
          //ns.grid2.render();  
          var data = ns.pdb2.getData();  
          var id = data["領料報工單號"];  
          var pdata = utils.getItemValue("領料報工單子表","領料報工單號",id, "*", true);
          if(pdata.length > 0)
          {
            for(var i=0; i<pdata.length; i++)
            {
              var item = pdata[i];
              var pn = item["品號"];  
              var n = item["領料數量"];
              var n2 = item["批號"];  
              var model = item["型號"]  
              if(model == "其他")
                var grid = ns.grid2;
              else
              {
                var grid = ns.grid1;
                ns.mainTabs.updateItem("a",{"caption": model});
              }
              var rows = grid.getRows();
                
              for(var j=0; j<rows.length; j++)
              {
                var r = rows[j];  
                if(r["品號"] == pn)
                {
                  var cellid = r._cells["領料數量"];
                  grid.updateCell(cellid, {"value":n});
                  cellid = r._cells["批號"];
                  grid.updateCell(cellid, {"value":n2});
                }
                
              }
            }
          }
        },
        getGridData:function(){
          var ns = this;  
          var data = ns.pdb2.getData();
          var grids = [ns.grid1, ns.grid2];
          var models = [data["型號"], "其他"];  
            
          var items = []; 
          for(var g=0; g<2; g++)
          {
            var grid = grids[g];
            var model = models[g];  
            var rows = grid.getRows("value");
            for(var i=0; i<rows.length; i++)
            {
              var r = rows[i];
                var pcount = r[5];
              if(pcount > 0)
              {    
                let item = {"型號":model, "品號": r[1], "品名":r[2],"批號":r[3],"領料數量": pcount, "領料報工單號":data["領料報工單號"], "維修站別":data["維修站別"],"領用庫別":ns.storeName};
                if(r[4] == "N/A")
                  item["不扣料"] = 1;
                else  
                  item["不扣料"] = 0;
                 
                items.push(item);
              }
            }
          }
          return items;              
        },
        getControlData:function(){
          var rows = [];  
          var ns = this;  
          ns.pdb2.updateDataFromUI();
          var data = ns.pdb2.getData();
          var models = [data["型號"],"其他"];  
          for(var i=0; i<models.length;i++)
          {
            var model = models[i];
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
                let item = {"型號":model, "品號":pn.trim(), "領料數量":value, "領料報工單號":data["領料報工單號"], "維修站別":data["維修站別"],"領用庫別":ns.storeName};
                rows.push(item);  
              }
            }
          }
          return rows;  
        },
        loadPickingData: function(site){
          var ns = this;
          ns.pickingData = utils.getItemValue("Bench領用料副資料表查詢","站別",site,"*",true);  
            
        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, prop=ns.properties;
            ns.saveBtn.setCaption("儲存");
            var data = ns.pdb2.getData();
            var pno = data["領料報工單號"];
            ns.storeName = StoreName;
            var item = utils.getItemValue("領料報工單子表","領料報工單號", pno);
            if(item != "")
                ns.storeName = item["領用庫別"];
            var pitem = utils.getItemValue("領料報工單","領料報工單號", pno);
            ns.pdb2.setData("型號", pitem["型號"]);  
            ns.loadControls();
            //ns.updateGrid();
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
                ns.destroy();
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

        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button1447_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            console.log(ns.pdb2.getData());
            ns.pdb2.updateDataToUI();
        },
        /**
         * When the timer is triggered regularly. If returns [false], the timer will end
         * @method onTime [xui.Timer event]
         * @param {xui} profile .Profile
         * @param {} threadId  String
        */
        _timer1_ontime:function(profile, threadId){
            var ns = this, uictrl = profile.boxing();
            //ns.pdb2.updateDataToUI();
            ns.updateGrid();
            ns.timer1.suspend();
        },
        onClearCmd: function(item, uictrl){
              if(item)  
                uictrl.updateCell(item._cells["領料數量"], {"value":0});
              else //clear all
              {
                var rows = uictrl.getRows();
                for(var i=0; i<rows.length; i++)
                {
                    var r = rows[i];        
                    uictrl.updateCell(r._cells["領料數量"], {"value":0});
                }
              }
            
        },
        /**
         * Fired when an inner command is clicked
         * @method onCmd [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {String} cmdKey , the command key
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
        */
        _grid1_oncmd:function(profile, item, cmdKey, e, src){
            var ns = this, uictrl = profile.boxing();
            if(cmdKey == "clear")
                ns.onClearCmd(item,uictrl);
        },
        /**
         * Fired when an inner command is clicked
         * @method onCmd [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {String} cmdKey , the command key
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
        */
        _grid2_oncmd:function(profile, item, cmdKey, e, src){
            var ns = this, uictrl = profile.boxing();
            if(cmdKey == "clear")
                ns.onClearCmd(item,uictrl);
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