/*20230404*/
xui.Class('Module.DataGrid', 'xui.Module',{
    Instance:{
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"grid")
                .setShowDirtyMark(false)
                .setValueSeparator(":")
                .setSelMode("multibycheckbox")
                .setRowHandlerWidth("2.3333333333333335em")
                .setColHidable(true)
                .setColMovable(true)
                .setTreeMode(false)
                .setValue("")
                .afterUIValueSet("_grid_afteruivalueset")
                .onHotKeypress("_grid_onhotkeypress")
                .beforeHotRowAdded("_grid_beforehotrowadded")
                .onCmd("_grid_oncmd")
                .afterRowActive("_grid_afterrowactive")
                .beforeCellUpdated("_grid_beforecellupdated")
                .onClickRow("_grid_onclickrow")
                .onDblclickRow("_grid_ondblclickrow")
                .onClickCell("_grid_onclickcell")
                .beforeComboPop("_grid_beforecombopop")
                .afterApplyFormulas("_grid_afterapplyformulas")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"topBlock")
                .setDock("top")
                .setLeft("18.285714285714285em")
                .setTop("0em")
                .setHeight("2.2857142857142856em")
                .setConDockPadding({
                    "left" : 0,
                    "top" : 2,
                    "right" : 5,
                    "bottom" : 0
                })
                .setConDockSpacing({
                    "width" : 2,
                    "height" : 0
                })
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Icon")
                .setHost(host,"ctl_sbutton1")
                .setDock("right")
                .setTips("Refresh")
                .setTop("0.5833333333333334em")
                .setWidth("1.6666666666666667em")
                .setRight("0.8333333333333334em")
                .setZIndex(1002)
                .setImageClass("xuicon xui-refresh")
                .onClick("_ctl_sbutton1_onclick")
                .setCustomStyle({
                    "KEY" : {
                        "cursor" : "pointer"
                    }
                })
            );
            
            host.topBlock.append(
                xui.create("xui.UI.PageBar")
                .setHost(host,"pagebar")
                .setDock("right")
                .setTop("0.22857142857142856em")
                .setRight("3em")
                .setCaption("")
                .onPageSet("_pagebar_onpageset")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"newBtn")
                .setTag("new")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("5em")
                .setHeight("2em")
                .setCaption("新增")
                .setImageClass("xui-uicmd-add")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"openBtn")
                .setTag("open")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("5em")
                .setHeight("2em")
                .setCaption("編輯")
                .setImageClass("xui-uicmd-helpinput")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"deleteBtn")
                .setTag("delete")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("5em")
                .setHeight("2em")
                .setCaption("刪除")
                .setImageClass("xui-icon-trash")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"selectAllBtn")
                .setTag("selectAll")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("5em")
                .setHeight("2em")
                .setCaption("全選")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"excelBtn")
                .setTag("excel")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("6em")
                .setHeight("2em")
                .setCaption("Excel")
                .setImageClass("fa fa-lg fa-file-excel-o")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"pageLength")
                .setDock("left")
                .setDockOrder(10)
                .setDockStretch("fixed")
                .setLeft("33.523809523809526em")
                .setTop("0.1523809523809524em")
                .setWidth("8.838095238095239em")
                .setHeight("2em")
                .setLabelSize("5em")
                .setLabelCaption("每頁列數")
                .setType("number")
                .setPrecision(0)
                .onChange("_pagelength_onchange")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"custom1Btn")
                .setTag("custom1")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("6.019047619047619em")
                .setHeight("2em")
                .setDisplay("none")
                .setCaption("Custom1")
                .onClick("_newbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Input")
                .setHost(host,"filter")
                .setShowDirtyMark(false)
                .setDock("left")
                .setLeft("48em")
                .setTop("0.7619047619047619em")
                .setDisplay("none")
                .setLabelSize("4em")
                .setLabelCaption("搜尋")
                .afterUIValueSet("_filter_afteruivalueset")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"copyBtn")
                .setTag("copy")
                .setDock("left")
                .setDockStretch("fixed")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("6em")
                .setHeight("2em")
                .setCaption("複製")
                .setImageClass("fa fa-lg fa-copy")
                .onClick("_newbtn_onclick")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        propSetAction:function(prop){
            var module=this;
            if(module._innerModulesCreated && module.xui_msgs1){
                if('inMsgType' in prop) module.xui_msgs1.setRecipientType(prop.inMsgType);
            }
        },
        prepareFilter: function(cond){
          var ns = this, s = "";
          if(typeof cond == "undefined")
              cond = "";
          var filter = ns.filter.getUIValue();  
          if(filter == "")
            return cond;  
          var header = ns.grid.getHeader("value");
          if(header.length == 0) 
              return "";
          for(var i=0; i<header.length; i++)
              s += `[${header[i]}] LIKE '%${filter}%' OR `;
          s = s.slice(0, -3);  //skip or   
          s = `(${s})`;  
          if(cond == "")
              return s;
          else 
              return cond + " AND " + s;
        },
        prepareCondition: function(){
            var ns = this, prop = ns.properties;
            var cond2 = ns.properties["condition2"];
            if(typeof cond2 == "undefined")
                cond2 = "";
            var cond = ns.fireEvent("onPrepareCondition",[]);        
            if(typeof cond != "undefined")
              return ns.prepareFilter(cond);  
            cond = prop["condition"];    
            var dbs = ns.host.getDataBinders();
            if(dbs.length == 0)
                return ns.prepareFilter(cond);
            var db = dbs[0].boxing();
            if(prop.binder != "")
            {
                for(var i=0; i<dbs.length; i++)
                {
                    var db1 = dbs[i].boxing();
                    if(db1.getName() == prop.binder)
                    {
                        db = db1;
                        break;
                    }
                }    
            }
            if(typeof db == 'undefined')
                return ns.prepareFilter(cond);
            var data = utils.getDataFromUI(db, false); //no check
            
  
            cond = ns.properties["condition"];
            if(typeof cond == "undefined")
                cond = "";

            if(cond == "")
                cond = cond2;
            else if(cond2 != "")
                cond = cond + " AND " + cond2;
                
            cond = utils.formatString(cond, data);
            return ns.prepareFilter(cond);
        },
        loadFromCache: function(prop){
            if(typeof GridDataCache == "undefined")
                GridDataCache = {};
            var title = `${prop.tableName}:${prop.condition}:${prop.displayFields}`;
            if(typeof GridDataCache[title] == "undefined")
                return null;
            return GridDataCache[title];
        },
        writeToCache: function(prop, data){
            if(typeof GridDataCache == "undefined")
                GridDataCache = {};
            var title = `${prop.tableName}:${prop.condition}:${prop.displayFields}`;
            GridDataCache[title] = data;
        },
        
        loadGridData:function(page, waitFlag = false){
            var ns=this, grid=ns.grid, prop = ns.properties;  
            var cb=function(data){
				if(typeof data == "string")
				{
					utils.alert("讀取錯誤!");
					return;
				}
                    if(typeof prop.useCache != "undefined" && prop.useCache)
                        ns.writeToCache(prop, data);
                    var tableName = prop.tableName;
                    var fieldWidths = [], fieldCaptions=[];
                    if(prop["fieldWidths"])
                        fieldWidths =  prop["fieldWidths"].split(",");
                    if(prop["fieldCaptions"])
                        fieldCaptions =  prop["fieldCaptions"].split(",");
                    if(grid.getHeader().length == 0)
                    {
                      var header = [];
                      for(var i=0; i<data.columns.length; i++)
                      {
                        var col = data.columns[i];  
                        var caption = col;
                        var fw  = 8;
                        if(fieldCaptions[i])
                            caption = fieldCaptions[i];
                        if(fieldWidths[i])
                            fw = fieldWidths[i];
                        caption = caption.replace("群呈","");
                        let item = {"id": col, "caption":caption, "width":fw+"em"};
                        if(col == "DelFlag" || col == "rowid")  //hide it
                            item.hidden = true;   

                        let config = utils.getTableFieldConfig(tableName, col);
                        if(config)
                        {    
                              let type = config.DATA_TYPE;  
                              if(type.includes("datetime"))
                                type = "date";
                              else if(type == "bit")
                                type = "checkbox";
                              else if(type == "int" && caption != "Year")
                                type = "number";
							  else if(type == "money")
							  {
								type = "currency";  
								item.precision = 3;
							  }								
                              else 
                                type = "input";
                              item.type = type;
                        }

                        if(prop.mode == "editor")
                        {    
                          let combo = utils.getTableFieldComboConfig(tableName, col);  
                          if(combo)
                            item.type = "popbox";    
                        }
                        header.push(item);        
                      }
                      grid.setHeader(header);  
                      ns.fireEvent("onGridHeaderLoaded");
                    }
                    utils.setGridData(data, ns.grid);
                    var pagelen = 100;
                    if(prop.pageLength)
                        pagelen = prop.pageLength;
                    ns.pagebar.setPageCount(pagelen);
                    ns.pagebar.setTotalCount(data.totalRowCount);
                    xui.Dom.free();
                    ns.fireEvent("onGridDataLoaded");
                    if(prop.mode == "editor" && data.totalRowCount == 0) //fixed (*) disappear issue
                    {
                        ns.grid.setHotRowMode("");
                        ns.grid.setHotRowMode("after");
                    }
                    //var rows = ns.grid.getRows();  
                    //console.log("rows:",rows);
                
                };
            xui.Dom.busy(null, "讀取資料中...");
            if(prop.tableName === "")
            {
                xui.Dom.free();
                //xui.alert("請先設定tableName!");
                return;
            }    
            if(prop.orderby === "" && (typeof prop.pageLength != "undefined" && prop.pageLength != 0))
            {
                prop.orderby = prop.keyid;  
                if(prop.orderby.indexOf("[") == -1)
                  prop.orderby = "[" + prop.orderby +"]";
            }    
            var condition = ns.prepareCondition();
            var fields = prop.displayFields;
            if(fields ==  "")
                fields = "*";
            if(typeof page != "undefined" &&  prop.pageLength !=  0)
            {
              if(prop.tableName.startsWith('SELECT '))
              {
                var sql = prop.tableName;
                if(condition != "")
                {
                    if(sql.indexOf(" WHERE ") != -1)
                      sql =  sql +  " AND " + condition;
                    else 
                      sql =  sql + " WHERE " + condition;  
                }
				if(waitFlag)
				  cb(utils.getPageQueryItems(sql,prop.orderby, page, prop.pageLength));	
				else 	
                  utils.getPageQueryItems(sql,prop.orderby, page, prop.pageLength, cb);
              }
              else
			  {
				if(waitFlag)
                  cb(utils.getPageTableItems({"tableName":prop.tableName, "orderby":prop.orderby, "pageno":page, "pagelen":prop.pageLength,"fields":fields,"condition":condition}));
				else	
                  utils.getPageTableItems({"tableName":prop.tableName, "orderby":prop.orderby, "pageno":page, "pagelen":prop.pageLength,"fields":fields,"condition":condition}, cb);
			  }
            }
            else 
            {
              var cachedata = null;  
              if(prop.useCache)
                cachedata = ns.loadFromCache(prop);
              if(cachedata == null)
              {
                if(prop.tableName.startsWith('SELECT '))
                  utils.getQueryItems(prop.tableName,cb);
                else  
				{
				  if(prop.orderby != "")
				  {
					if(waitFlag)  
						cb(utils.getTableItems({"tableName":prop.tableName, "condition":condition, "orderby":prop.orderby, "fields": fields}));
					else
						utils.getTableItems({"tableName":prop.tableName, "condition":condition, "orderby":prop.orderby, "fields": fields},cb);
				  }
				  else 	
				  {	
					if(waitFlag)
						cb(utils.getTableItems({"tableName":prop.tableName, "condition":condition, "fields": fields}));
					else
						utils.getTableItems({"tableName":prop.tableName, "condition":condition, "fields": fields},cb);
				  }
				}
              }
              else 
                cb(cachedata);  
            }   
           // ns.fireEvent("onListRecords", [page, size, cb]);
           // ns.xui_msgs1.broadcast(ns.properties.outMsgType, "list",  page, size, cb);
        },
        _grid_ondblclickrow:function (profile, row, e, src){
            var ns = this, 
                grid=profile.boxing(),
                rowId=row.id;
            if(ns.properties.mode=="selection" || ns.properties.mode=="readonly" || ns.properties.mode=="editor")return;
            
            ns._openForm(rowId, ns.getRowMap(row));
        },
        _grid_onclickrow:function (profile, row, e, src){
            var ns = this, grid = profile.boxing(), prop=ns.properties;
            if(prop.mode != "selection")return;
            
            var map=grid.getRowMap(row);
            
            ns.fireEvent("onSelectRecord", [map[prop.valueColumn] || row.id, (prop.captionExpression||"").replace(/[\w]+/g,function(a){
                return map[a]||"";
            }) , map]);
            
        },
        setTableName: function(tbl){
            var ns = this, prop = ns.properties;
            prop.tableName = tbl;
        },
        setCondition: function(value){
            var ns  = this, prop = ns.properties;
            prop.condition = value;
        },
        setPageLength: function(len){
            var ns  = this, prop = ns.properties;
            prop.pageLength = len;
        },
        setDisabled: function(v){
          var ns = this;
          var nodes = ns.topBlock.getChildren(true,true).get();
          for(var i=0; i< nodes.length; i++)
          {
              let n = nodes[i].boxing();
              n.setDisabled(v);
          }
          ns.grid.setDisabled(v);  
        },
        setFilter: function(filter){
          var ns=this, prop=ns.properties;
          prop.filter = filter;
            var rows = ns.grid.getRows();  
            for(var i=0; i<rows.length; i++)
            {
              var row = rows[i], j = 0;
              for(j=0; j<row.cells.length; j++)
              {
                var value = cells[j].value;  
                if(value.indexOf(filter) != -1)
                  break;
              }
              if(j >= row.cells.length)  
                ns.grid.updateRow(row.id, {"hidden":true});  
              else 
                ns.grid.updateRow(row.id, {"hidden":false});  
                  
            }
        }, 
        setMode:function(mode){
            var ns=this,  prop=ns.properties;
            ns.grid.setEditable(false);
            if(mode=="readonly"){
                ns.grid.setSelMode("multi").setRowHandler(true);
                ns.newBtn.hide();
                ns.deleteBtn.hide();
				ns.openBtn.hide();
            }else if(mode=="selection"){
                ns.grid.setSelMode("none").setRowHandler(false);
                ns.openBtn.hide();
                ns.deleteBtn.hide();
            }else if(mode=="editor"){
                ns.grid.setEditable(true);
                ns.grid.setHotRowMode("hidden");
                ns.grid.setHotRowMode("after");
                //ns.grid.setHotRowRequired(prop.keyid);
 //               ns.grid.setSelMode("none").setRowHandler(false);
                ns.grid.setSelMode("multi").setRowHandler(true);             
                ns.newBtn.hide();
                ns.openBtn.hide();
                ns.deleteBtn.show();
            }else if(mode == "normal") {
                ns.grid.setHotRowMode("hidden");
                ns.grid.setSelMode("multi").setRowHandler(true);             
                ns.newBtn.show();
                ns.openBtn.show();
                ns.deleteBtn.show();
            }
        },
        // output
        addRow:function(recordId, fields){
            var ns=this;
            delete fields.__row__id;
            //console.log(recordId, fields);
            ns.grid.insertRows(fields,null,null,true);
        },
        updateRow:function(recordId, fields){
            var ns=this;
            delete fields.__row__id;
            //console.log(recordId, fields);
            xui.each(fields,function(v, k){
                ns.grid.updateCellByRowCol(recordId, k, v, false, false);
            });
        },
        deleteRows:function(ids){
            var ns=this;
            ns.grid.removeRows(ids);
            ns.deleteBtn.hide();
            ns.openBtn.hide();
            xui.message(ids.length+" 紀錄已刪除!");
            xui.Dom.free();
        },
		getUpdateTableName: function(){
			var ns = this, prop = ns.properties;
			if(prop.insertTableName != "")
				return prop.insertTableName;
			else 
				return prop.tableName;
		},
        _openForm:function(recordId, fields){
            var ns = this, mode="";
			if(ns.openFormShowing === true)
				return;
			ns.openFormShowing = true;
			
            var prop=ns.properties,updateRow=function(){
                ns.updateRow.apply(ns,arguments);
            },addRow=function(){
                ns.addRow.apply(ns,arguments);
            };
            if(xui.isSet(recordId)){
                mode = "edit"; 
				fields = utils.getItemValue(ns.getUpdateTableName(), prop.keyid, fields[prop.keyid]);
                var r = ns.fireEvent("onOpenRecord",[recordId,fields,updateRow]);
                if(r)
                {
                  if(r == "noop")
                    return;
                  if(r && r != "")
                    mode = r;
                }
            }
            else{
                mode = "new";
                var r = ns.fireEvent("onCreateRecords",[addRow, updateRow]);
                if(r === "noop")
				{
					ns.openFormShowing = false;
                    return;
				}
                if(r && r != "")
                    mode = r;
                fields = ns.prepareNewDatas();
            }
            var pagename = prop.openPageName; 
            if(pagename == "")
                pagename = "DataInputDialog";
            DataPageTheme = DataPageThemeNames[DataPageThemeIndex++];
            xui.showModule("App."+ pagename,function(mod){
            if(DataPageTheme != "")
                mod.dialog.setSandboxTheme(DataPageTheme);
                mod.dialog.setModal(true);
				
                utils.disableAutoTips(mod);
               var db = mod.getDataBinders();
                if(db.length > 0)
                    db =  db[0].boxing();
                else
                    db = null;
                if(db)
                    utils.installDataBinderHooks(mod);
                    
                if(pagename == "DataInputDialog")
                {
                    utils.createTableControls(prop.tableName, prop.keyid, mod);
                    mod.dialog.setCaption(prop.tableName);
                }
                mod.setProperties("mode",mode);
                mod.setProperties("datas",fields);
                mod.setProperties("keyid",prop.keyid);
                mod.setProperties("tableName", ns.getUpdateTableName());
                if(prop.formCaption && prop.formCaption != "")
                    mod.dialog.setCaption(prop.formCaption);
				utils.fixDate1900(fields);
                db.setData(fields);
                db.updateDataToUI();
                if(mode && mode.includes("edit"))
                  utils.updateModuleTableBoxCaption(mod);
                else  
                  mod.saveBtn.setCaption("新增");  
                utils.installModuleTableBoxHooks(mod);
                //mod.setProperties("keyvalue",fields[prop.keyid]);
                mod.setEvents("onDestroy",function(){
                    DataPageThemeIndex--;
                    if(DataPageThemeIndex < 0)
                        DataPageThemeIndex = 0;
                    ns.refreshGrid();
					ns.openFormShowing = false;
                });
                
            },null, null, false);  //not cached            
            
        },
        getRowMap: function(row)
        {
          var ns = this;
          var fieldNames = ns.grid.fieldNames;
          var rowmap = {};
          for(var i=0; i<fieldNames.length; i++)
          {
              var key =  fieldNames[i];
              rowmap[key] = row[key];
          }
          return rowmap;    
        
        },
        _delRecords:function(ids){
            var ns=this, grid=ns.grid,prop = ns.properties; 
            var cb=function(){
                ns.deleteRows(ids);
            };
            xui.Dom.busy(null, "刪除資料中 ...");
            console.log(ns.grid.getRowMap(ids[0]));
            var r = ns.fireEvent("onDeleteRecords", [ ids, cb]);
            if(typeof r != "undefined" && r == true)  //已經處理完畢
            {
                xui.Dom.free();
                ns.refreshGrid();
                return;
            }
			var tableName = ns.getUpdateTableName();
            for(var i=0; i<ids.length; i++)
            {
              var row = ns.grid.getRowMap(ids[i]); 
              utils.removeTableItem(tableName, prop.keyid, row[prop.keyid]);  
            }
            xui.Dom.free();
            ns.refreshGrid();

            //ns.xui_msgs1.broadcast(ns.properties.outMsgType, "delete",  ids, '', cb);
        },
        _copyRecords:function(ids, count=1){
            var ns=this, grid=ns.grid,prop = ns.properties; 
            var cb=function(){
                ns.deleteRows(ids);
            };
            xui.Dom.busy(null, "複製資料中 ...");
            console.log(ns.grid.getRowMap(ids[0]));
/*
            var r = ns.fireEvent("onCreateRecords", [ ids, cb]);
            if(typeof r != "undefined" && r == true)  //已經處理完畢
            {
                xui.Dom.free();
                ns.refreshGrid();
                return;
            }
*/            
			var tableName = ns.getUpdateTableName();
            for(var i=0; i<ids.length; i++)
            {
              var row = ns.grid.getRowMap(ids[i]); 
			  var keys = Object.keys(row);
			  for(var j=0; j<keys.length; j++)
			  {
				  var k = keys[j];
				  var v = row[k];
				  if(typeof v == "object" && v != null && "getDate" in v) //date time
					  row[k] = utils.dateTimeToString(v);
			  }
			  for(cnt=0; cnt<count; cnt++)
                utils.insertTableItem(tableName, row);  
            }
            xui.Dom.free();
            ns.refreshGrid();

            //ns.xui_msgs1.broadcast(ns.properties.outMsgType, "delete",  ids, '', cb);
        },
        refreshGrid : function(waitFalg = false){
            var ns=this, pb=ns.pagebar;
            ns.loadGridData(pb.getPage()-1, waitFalg);
        },
        downloadxlsx: function(filename, sheetname, data) {
            //儲存xlsx檔

            //參數
            //filename為要下載儲存之xlsx檔名，，sheetname為資料表名，data為要下載之資料，需為二維陣列。以下為使用範例：
            //var filename = 'download.xlsx';
            //var sheetname = 'test';
            //var data = [
            //    ['name', 'number', 'date'],
            //    ['abc', 1, new Date().toLocaleString()],
            //    ['def', 123.456, new Date('2015-03-25T13:30:12Z')],
            //];
            //downloadxlsx(filename, sheetname, data);

            //說明
            //所使用函式可參考js-xlsx的GitHub文件[https://github.com/SheetJS/js-xlsx]


            //datenum
            function datenum(v, date1904) {
                if (date1904) v += 1462;
                var epoch = Date.parse(v);
                return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
            }


            //sheet_from_array_of_arrays
            function sheet_from_array_of_arrays(data, opts) {
                var ws = {};
                var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
                for (var R = 0; R != data.length; ++R) {
                    for (var C = 0; C != data[R].length; ++C) {
                        if (range.s.r > R) range.s.r = R;
                        if (range.s.c > C) range.s.c = C;
                        if (range.e.r < R) range.e.r = R;
                        if (range.e.c < C) range.e.c = C;
                        var cell = { v: data[R][C] };
                        if (cell.v == null) continue;
                        var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

                        if (typeof cell.v === 'number') cell.t = 'n';
                        else if (typeof cell.v === 'boolean') cell.t = 'b';
                        else if (cell.v instanceof Date) {
                            cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                            cell.v = datenum(cell.v);
                        }
                        else cell.t = 's';

                        ws[cell_ref] = cell;
                    }
                }
                if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
                return ws;
            }


            //s2ab
            function s2ab(s) {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }


            //Workbook
            function Workbook() {
                if (!(this instanceof Workbook)) return new Workbook();
                this.SheetNames = [];
                this.Sheets = {};
            }


            //write
            var wb = new Workbook();
            var ws = sheet_from_array_of_arrays(data);
            wb.SheetNames.push(sheetname);
            wb.Sheets[sheetname] = ws;
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });


            //saveAs
            saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), filename)


        },        
		loadAllData:function(pagelen=1000){
			var ns = this, prop=ns.properties;
            var condition = ns.prepareCondition();
            var fields = prop.displayFields;
			var datas = null;
            if(fields ==  "")
                fields = "*";
            if(prop.tableName.startsWith('SELECT '))
			{
                if(condition != "")
                {
                    if(sql.indexOf(" WHERE ") != -1)
                      sql =  sql +  " AND " + condition;
                    else 
                      sql =  sql + " WHERE " + condition;  
                }				
                datas = utils.getPageQueryItems(prop.tableName, 0, prop.orderby, pagelen);
			}
            else  
			{
				if(prop.orderby != "")
				{
					datas = utils.getPageTableItems({"tableName":prop.tableName, "condition":condition, "orderby":prop.orderby, "pageno": 0, "pagelen": pagelen, "fields": fields});
				}
				else 	
				{	
					datas = utils.getPageTableItems({"tableName":prop.tableName, "condition":condition, "fields": fields});
				}
			}
			if(datas == null)
				return [];
			else
			    return utils.getRowMap(datas);
		},
        downloadExcel: function(){
                    var ns = this, prop=ns.properties;
                    var ids=ns.grid.getUIValue(true);
					var rowDatas = ns.grid.getRows();
					var tableName = prop.tableName;
                    if(ids&&ids.length){
                        var rows =[];
                        var r = ns.grid.getRowMap(ids[0]);
                        if(r == null)
                            return;
                        delete r.__row__id;
                        var keys = Object.keys(r);
                        rows.push(keys);
						if(ns.selectAllClickCount % 2 == 1 && (ids.length == rowDatas.length || ids.length == rowDatas.length-1))  //select all
						{
							var pagelen = 5000;
							var datas = ns.loadAllData(pagelen);
                            for(var i=0; i<datas.length && i<pagelen;i++)
                            {
                              var a = [];
                              r = datas[i];
                              for(var j=0;j<keys.length;j++)
							  {
								var type = "string";  
							    var config = utils.getTableFieldConfig(tableName, keys[j]);
								if(config)
								  type = config.DATA_TYPE;  
  
								let it = r[keys[j]];
								if(type == "int" || type == "money")
								  it = Number(it);		
                                a.push(it);
							  }
                              rows.push(a);
                            }
						}
						else
						{
                          for(var i=0; i<ids.length;i++)
                          {
                            var a = [];
                            r = ns.grid.getRowMap(ids[i]);
                            for(var j=0;j<keys.length;j++)
							{
							  let it = r[keys[j]];
							  if(it instanceof Date)
							    it = utils.dateToString(it);
							  if(it == false)
								  it = 0;
							  if(it == true)
								  it = 1;
                              a.push(it);
							}
                            rows.push(a);
                          }
						}
                        var filename = "試算表.xlsx";
                        if(prop["excelFileName"] != "")
                                filename = prop["excelFileName"] + ".xlsx";
                        ns.downloadxlsx(filename, "工作表",rows,);                        
                        
/*                        
                        var workbook = new ExcelJs.Workbook(); // 創建試算表檔案
                        var sheet = workbook.addWorksheet("工作表範例1"); //在檔案中新增工作表 參數放自訂名稱

                        sheet.addTable({
    // 在工作表裡面指定位置、格式並用columsn與rows屬性填寫內容
                            name: "table1", // 表格內看不到的，算是key值，讓你之後想要針對這個table去做額外設定的時候，可以指定到這個table
                            ref: "A1", // 從A1開始
                            columns: cols,
                            rows: rows
                        });

                        workbook.xlsx.writeBuffer().then(function(content) {
                            const link = document.createElement("a");
                            const blobData = new Blob([content], {
                              type: "application/vnd.ms-excel;charset=utf-8;"
                            });
                            if(prop["excelFileName"] != "")
                                link.download = prop["excelFileName"] + ".xlsx";
                            else
                                link.download = "試算表.xlsx";
                            link.href = URL.createObjectURL(blobData);
                            link.click();
                        });
*/                        
                    }
                    else
                        xui.message("請先選擇資料!");
        },
        buttonClick:function (profile, item, group, e, src){

        },
        _grid_afterrowactive:function (profile, row){
            var ns = this;
			/*
            if(row)
              ns.openBtn.show();
            else 
              ns.openBtn.hide();               
			*/
		},
        _grid_afteruivalueset:function (profile, oldValue, newValue){
            var ns = this;
		/*	
            if(newValue)
              ns.deleteBtn.show();
            else 
              ns.deleteBtn.hide(); 
*/		  
        },
        _ctl_sbutton1_onclick:function (){
            var ns=this;
            ns.refreshGrid();
        },
        _pagebar_onpageset:function (profile, page, start, size, eventType, opage, ostart){
            console.log("onpageset");
            this.loadGridData(page-1); 
        },
        _xui_msgs1_onmessagereceived:function (profile, msg1, msg2, msg3, msg4, msg5, callback){
            var ns = this, uictrl = profile.boxing();
            ns.fireEvent("onMessageServiceReceived", [msg1, msg2, msg3, msg4, msg5, callback]);
        },
        properties:{
            "tableName" : "",
            "insertTableName" : "",
            "displayFields" : "",
            "condition" : "",
            "condition2" : "",
            "orderby" : "",
            "fieldWidths" : null,
            "fieldCaptions" : null,
            "pageLength" : 100,
            "keyid" : "",
            "openPageName" : "",
            "mode" : "normal",
            "enableCopyButton" : false,
            "formCaption" : "",
            "newDatas" : null,
            "binder" : "",
            "useCache" : false,
            "autoDestroy" : true,
            "saveIgnoreFields" : "",
            "excelFileName" : ""
        },
        events:{
            "onReady" : "_page_onready",
            "beforeShow" : "_page_beforeshow"
        },
        _page_onready:function(e,i){
            var ns = this, prop = ns.properties;
        },
        _page_beforeshow:function(e,i){
            var ns=this, prop=ns.properties;
            ns.setMode(prop.mode);
            if(prop.enableCopyButton)
                ns.copyBtn.show();
            else
                ns.copyBtn.hide();
        },
        
        prepareNewDatas: function(){
            var ns = this, prop=ns.properties;
            var R = {};
            var datas = prop.newDatas;
            var dbs = ns.host.getDataBinders();
            if(datas != null && datas != "" && dbs.length != 0)
            {
                var db = dbs[0].boxing();
                if(prop.binder != "")
                {
                    for(var i=0; i<dbs.length; i++)
                    {
                        var db1 = dbs[i].boxing();
                        if(db1.getName() == prop.binder)
                        {
                            db = db1;
                            break;
                        }
                    }    
                }

                if(db != null)
                {
                    db.updateDataFromUI();
                    var data = db.getData();
                    var sa = datas.split(":");
                    for(var i=0; i<sa.length; i++)
                    {
                      var key = sa[i];  
                      R[key] = data[key];          
                    }
                }
            }   
            if(ns.getEvents("onInitNewData") != "")
            {
                    var data2 = ns.fireEvent("onInitNewData",[]);        
                    Object.assign(R, data2);   
            }
            return R;
        },
        /**
         * Fired before the hot row is added. If it returns true, the new row will be added; if it returns false, the hot row will be removed; if it returns cell, the new row will not be added, and the cell in the hot row will be focused; if it returns [null], do nothing
         * @method beforeHotRowAdded [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object.} cellMap  row map object
         * @param {Object.} row  row object
         * @param {Booean.} leaveGrid  to determine the event cursor leaves grid or not
        */
        _grid_beforehotrowadded:function(profile, cellMap, row, leaveGrid){
            var ns = this, uictrl = profile.boxing(), prop=ns.properties;
            var tableName = ns.getUpdateTableName();
            if(tableName == "")
            {
                xui.Dom.free();
                xui.alert("請先設定tableName!");
                return;
            }
            var newDatas = ns.prepareNewDatas();
            Object.assign(cellMap,  newDatas); 
            
            if(typeof prop.saveIgnoreFields != "undefined")
            var ignore = prop.saveIgnoreFields.split(",");
            for(var i=0; i<ignore.length; i++)
                delete cellMap[ignore[i]];
            utils.insertTableItem(tableName, cellMap);
            
            return true;
        },
        /**
         * Fired before a specified cell is update. If returns false, the update action will be ignored
         * @method beforeCellUpdated [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} cell , the cell Object
         * @param {Object} options , the keys/values to be updated
         * @param {Boolean.} isHotRow  Is the cell in the hot row
         * @param {}  
         * @param {}  
         * @param {}  
        */
        _grid_beforecellupdated:function(profile, cell, options, isHotRow, n, r, a){
            var ns = this, uictrl = profile.boxing(), prop=ns.properties;
            ns.fireEvent("beforeCellUpdated",[cell._col.id, options.value,  r, isHotRow]);
            if(isHotRow)  //do not do update
                return true;
            var tableName = ns.getUpdateTableName();
            var keyid = prop.keyid;
            var col = cell._col.id;  
			if(col == "ETD")
				col = "ETS";
            var value = options.value;
            if(cell._col.type == "date")
              value = xui.Date.format(value,"yyyy-mm-dd");
            var hash={};
            hash[keyid] = r[keyid];
            hash[col] = value;
            utils.modifyTableItem(tableName, keyid, hash);
            return true;
        },
            /**
         * Fired when a cell's editor pop button is clicked. Cell type must in 'date,time,datetime,listbox,combobox,helpinput,color,getter,popbox,cmdbox'
         * @method beforeComboPop [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {} cell  Object
         * @param {xui.UIProfile} proEditor , the editor profile Object, if the editor exists
         * @param {Object} pos , the click event mouse position
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
         * @param {}  
        */
            _grid_beforecombopop:function(profile, cell, proEditor, pos, e, src, a, s){
                var ns = this, uictrl = profile.boxing(), prop=ns.properties;
                if(cell._col.type == "date" || cell._col.type == "datetime")
                    return;
                var col =  cell._col.id;
                var config = utils.getTableFieldComboConfig("通用",  col);
                var prop = config;

                    xui.newModule("App.DataListForm", function(err,module){
                        module.setProperties("tableName", config.tableName);
                        module.setProperties("keyid", config.keyid);
                        module.setProperties("displayFields", config.displayFields);
                        module.setProperties("uictrl", proEditor);
                        module.setProperties("fieldWidths", config.fieldWidths);
                        module.setProperties("fieldCaptions", config.displayCaptions);
                        module.setProperties("grid",ns.grid);
                        module.setProperties("cell",cell);
                        module.setProperties("orderby", config.orderby)
                        module.popUp(proEditor);
                    });
                
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
        _grid_onclickcell:function(profile, cell, e, src, n, r){
            var ns = this, uictrl = profile.boxing();
            //console.log("cell:",cell);
            ns.fireEvent("onSelectCell",[cell._col.id, cell.value,  cell]);
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
        _grid_oncmd:function(profile, item, cmdKey, e, src){
            var ns = this, uictrl = profile.boxing();
            ns.fireEvent("onCmdClick",[uictrl,item,cmdKey]);
        },
            _grid_afterapplyformulas:function(e,t){
                var ns = this;
                ns.fireEvent("afterApplyFormulas",[]);
            },
                /**
         * Fired when control's UI value is changed!
         * @method onChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
                _pagelength_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
                    var ns = this, uictrl = profile.boxing(),prop = ns.properties;
                    if(newValue == null || newValue == 0)
                        prop["pageLength"] = 100;
                    else 
                        prop["pageLength"] = newValue;
                    ns.refreshGrid();    
                },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _newbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing(), row;
            var action = uictrl.getTag();
            switch(action){
                case "new": 
                    ns._openForm();
                    break;
                case "open": 
                    if((row=ns.grid.getActiveRow())){
                        ns._openForm(row.id, ns.getRowMap(row));
                    }
                    break;
                case "delete": 
                    var ids=ns.grid.getUIValue(true);
                    if(ids && ids.length != 0 && ids[0] != ""){
                        xui.confirm("Confirm", "確定要刪除"+ids.length+" 紀錄嗎?", function(){
                            ns._delRecords(ids);
                        });
                    }else{
                        xui.message("請先選擇資料!");
                    }
                    break;
                case "copy": 
                    var ids=ns.grid.getUIValue(true);
                    if(ids && ids.length != 0 && ids[0] != ""){
                        utils.askNumber("複製份數", function(number){
                            ns._copyRecords(ids, number);
                        });
                    }else{
                        xui.message("請先選擇資料!");
                    }
                    break;
               case "custom1":
                    if(row=ns.grid.getActiveRow()){
                        ns.fireEvent("onCustom1Clicked", [ row.id, ns.getRowMap(row)]);
                    }
                    break;
               case "excel":
                    var ids=ns.grid.getUIValue(true);
                    if(ids && ids.length != 0 && ids[0] != "")
                      ns.downloadExcel();
                    else
                      xui.message("請先選擇資料!");                    
                    break;                     
                case "selectAll":
                    if(typeof ns.selectAllClickCount == "undefined")
                        ns.selectAllClickCount = 0;
                    if(ns.selectAllClickCount % 2 == 0)
                    {
                        var rows = ns.grid.getRows();
                        var ids = [];
                        for(var i=0; i<rows.length; i++)
                            ids.push(rows[i].id);
                        ns.grid.setUIValue(ids);
                    }
                    else 
                        ns.grid.setUIValue([]);
                    ns.selectAllClickCount++;
                    break;                     
            }
        },
        /**
         * Fired after setUIValue is called
         * @method afterUIValueSet [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue , old UIValue
         * @param {String} newValue , new UIValue
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
         * @param {Ojbect} tagVar , value's corresponding object, if exists
        */
        _filter_afteruivalueset:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            ns.refreshGrid();
        },
        /**
         * Fired when keyboard is pressed
         * @method onHotKeypress [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} keyboard , keyboard object
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _grid_onhotkeypress:function(profile, keyboard, e, src){
            var ns = this, uictrl = profile.boxing(), row, prop=ns.properties;
            if(keyboard.key == "enter")
            {
				if(prop.mode == "normal")
				{
                    if((row=ns.grid.getActiveRow())){
                        ns._openForm(row.id, ns.getRowMap(row));
                    }
				}
            }
        },

    },
    Static:{
        // export functions
        $Functions:{
            addRow:function(recordId/*String, the record id*/, fields/*Hash, record fields map*/){},
            updateRow:function(recordId/*String, the record id*/, fields/*Hash, record fields map*/){},
            deleteRows:function(ids/*Array, target record ids*/){}
        },
        // export prop
/*        
        $DataModel:{
            tableName:"",
            conditions:"",
            orderby:"",
            rowLength: 20,
            keyid:"",
            openPageName:""
//            valueColumn:"",
//            captionExpression:"",
//            inMsgType:"",
//            outMsgType:""
        },
*/        
        // export events
        $EventHandlers:{
            onGridHeaderLoaded:function(){},
            onGridDataLoaded:function(){},
            onListRecords:function(page/*Number, page number*/, 
                                    size/*Number, record count of a page*/, 
                                    callback/*
                                             * Function, 
                                             * function(data){data={columns:[], rows:[[]],fields:[{}],page, size, total:0}, 
                                             * callback to show rows
                                             */
                                   ){},
            onDeleteRecords:function(ids/*Array, target record ids*/, 
                                    deleteCallback/*Function, function(ids){},callback to delete rows*/){  return false;},
            onOpenRecord:function(id/*String, the record id*/, 
                                   fields/*Hash, record fields*/, 
                                   updateCallback/*Function, function(id, fields){}, callback to update row*/){  return "";},
            onCreateRecords:function(
                                   createCallback/*Function, function(id, fields){}, callback to add new row*/,
                                   updateCallback/*Function, function(id, fields){}, callback to update row*/
                               ){},
            onSelectRecord:function(value/*String, value*/,caption/*String, caption */,fields/*Hash, record fields map*/){},
            onSelectCell:function(id/*String, value*/,value/*String, caption */,cell/*Hash, record fields map*/){},
            onCustom1Clicked: function(id,fields){},
            onCmdClick: function(grid,item,cmdkey){},
            onPrepareCondition: function(){},
            onInitNewData : function(){
                return {};
            },
            afterApplyFormulas: function(){},
            beforeCellUpdated: function(id,value,row, isHotRow){}

        }
    }    
});

