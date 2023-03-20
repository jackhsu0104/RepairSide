 utils = {
	getRowMap: function(data){
                    var rows=[];
                    // maybe need to collect rowsMap
                    if(data.rows && data.columns){
                        var cols=data.columns;
                        xui.arr.each(data.rows,function(cells){
                            var row={};
                            for(var i=0,l=cols.length;i<l;i++){
                                var value = cells[i];
                                if(value && value.endsWith(" 00:00:00.000"))
                                    value = value.slice(0,-13);
                                row[cols[i]] = value||"";
                            }
                            rows.push(row);
                        });
                    }
					return rows;
	}, 
    setGridData : function(data, grid){
				var rows = utils.getRowMap(data); 
				grid.fieldNames = data.columns;
                grid.removeAllRows().setRows(rows);
    },
    sendLoginCmd : function(hash, onFinish, wait){
                if(typeof wait == "undefined")
                    wait = false;
                var result = null;
                xui.Ajax("php/login.php",hash,function(rsp){
                    var data =rsp;
                    if(!data)    alert("no data");
                    else
                    {
                        result = data;
                        if(onFinish)
                          onFinish(data);  
                    }
                },null,null,{"asy": !wait}).start();
                return result;
    },
    sendDataCmd : function(hash, onFinish, wait){
                if(typeof wait == "undefined")
                    wait = false;
                var result = null;
                xui.Ajax("php/data.php",hash,function(rsp){
                    var data =rsp;
                    if(!data)    alert("no data");
                    else
                    {
                        result = data;
                        if(onFinish)
                          onFinish(data);  
                    }
                },null,null,{"asy": !wait}).start();
                return result;
    },
    getPageTableItems : function(prop, onFinish){
        var hash={"cmd":"getTableItems","table": prop.tableName,"pageno":  prop.pageno, "pagelen": prop.pagelen, "orderby":  prop.orderby};
        if(prop.condition)
            hash.condition = prop.condition;
        if(prop.fields && prop.fields != "*" && prop.fields != "")
        {
            var fields = prop.fields.split(",");
            for(var i=0; i<fields.length; i++)
            {
              var s = fields[i];  
              if(s.indexOf('[') == -1)
                  fields[i] = "[" + s + "]";
            }
            fields = fields.join(",");
            hash.fields = fields;
        }
        
        utils.sendDataCmd(hash,  onFinish);
    }, 
    setFieldValue : function(srcui, dstui){
		if(srcui.updatingFieldValue)
			return;
		var value = srcui.getUIValue();
		var config = utils.getTableFieldComboConfig("通用", srcui.getDataField());
		var config2 = utils.getTableFieldComboConfig("通用", dstui.getDataField());
		var tableName = config.tableName;
		var key = config.keyid;
		if(config2)
		  var col = config2.keyid;
		else 
		  var col = dstui.getDataField();
			
		var cb = function(data){
			if(data)
			{
				if(data.rows.length  > 0)
				{
					dstui.updatingFieldValue = true;
					dstui.setValue(data.rows[0]);
					dstui.updatingFieldValue =  false;
				}
			}
		}	
		var condition =  `[${key}] = '${value}'`;
		utils.getTableItems({"tableName":tableName, "fields": col, "condition":condition}, cb);
	},	
    getTableItems : function(prop, onFinish, wait){
        var hash={"cmd":"getTableItems","table":prop.tableName};
        if(prop.condition)
            hash.condition = prop.condition;
        if(prop.orderby)
            hash.orderby = prop.orderby;
		
        if(prop.fields  && prop.fields != "*" && prop.fields != "")
        {
            var fields = prop.fields.split(",");
            for(var i=0; i<fields.length; i++)
            {
              var s = fields[i];  
              if(s.indexOf('[') == -1)
                  fields[i] = "[" + s + "]";
            }
            fields = fields.join(",");
            hash.fields = fields;
        }
        utils.sendDataCmd(hash, onFinish, wait);
    }, 
    getPageQueryItems : function(query, orderby, pageno, pagelen, onFinish,  wait){
        var hash={"cmd":"getQueryItems","query":query,"pageno":pageno, "pagelen":pagelen, "orderby":orderby};
        utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    getQueryItems : function(query,onFinish, wait){
        var hash={"cmd":"getQueryItems","query":query};
        utils.sendDataCmd(hash,  onFinish, wait);
    }, 
	getItemValue: function(table, key, keyValue,  getField)
	{
		if(typeof getField == "undefined")
			getField = "*";
		if(table.startsWith("crm."))
		{
			table = table.substring(4);
			table = `GDCRM.dbo.[${table}]`;
		}
		var query = `SELECT ${getField} FROM ${table} WHERE ${key}='${keyValue}'`;
        var hash={"cmd":"getQueryItems","query":query};
        var datas = utils.sendDataCmd(hash,  null, true);
		if(datas.rows.length > 0)
		{
		  if(getField != "*"  && getField.indexOf(",") == -1)	
		    return datas.rows[0][0];
		  else
		  {	
			var rows = utils.getRowMap(datas);
			return rows[0];
		  }			
		}
	    else 
		  return "";    
	},
	checkItemExists: function(table, field, value)
	{
		var query = `SELECT ${field} FROM ${table} WHERE ${field}='${value}'`;
        var hash={"cmd":"getQueryItems","query":query};
        var datas = utils.sendDataCmd(hash,  null, true);
		if(datas.totalRowCount > 0)
			return true;
		else
			return false;
	},
    modifyTableItem : function(table, key, datas, onFinish,  wait){
		key = utils.removeBracket(key);
        var hash={"cmd":"modifyTableItem","table":table, "key":key,"item":datas};
        utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    insertTableItem : function(table, datas, onFinish,wait){
        var hash={"cmd":"insertTableItem","table":table, "item":datas};
        utils.sendDataCmd(hash,  onFinish,wait);
    }, 
    removeTableItem : function(table, keys, onFinish,wait){
        var hash={"cmd":"deleteTableItem","table":table, "key":keys};
        utils.sendDataCmd(hash,  onFinish,wait);
    }, 
	showDataGrid: function(prop){
		var cb = function(mod){
			mod.dialog.setCaption(prop.tableName);
			mod.modGrid.properties = prop;
		};    
        xui.showModule("App.DataGridForm", cb);
	},
	removeBracket: function(str){
		str = str.replace("[","");
		str = str.replace("]","");
		return str;
	},
    showDataPage : function(pagename, item, mode, onload,  ondestroy){
        var cb2 = function(mod){
			var db = mod.getDataBinders();
			if(db.length > 0)
			  db = db[0].boxing();
			else
			  return;	
			if(mode == "edit")
				mod.saveBtn.setCaption("儲存");
			else
				mod.saveBtn.setCaption("新增");
				
			mod.properties.mode = mode;  
            utils.installDataBinderHooks(mod);  
			utils.installModuleTableBoxHooks(mod);
			db.setData(item).updateDataToUI();
            utils.updateModuleTableBoxCaption(mod);
            if(onload)
              onload(mod);
			if(ondestroy)
			{
			  mod.setEvents("onDestroy",function(){
                    ondestroy(mod);
                });	
			}				
        };
        xui.showModule("App." + pagename, cb2);
    }, 
    showPage : function(pagename,  cb){
        var cb2 = function(mod){
            utils.installDataBinderHooks(mod);  
			utils.installModuleTableBoxHooks(mod);
            if(cb)
              cb(mod);  
        };
        xui.showModule("App." + pagename, cb2);
    }, 
    popupBox : function(pagename,  combo){
        xui.newModule("App."  +  pagename, function(err,mod){
            mod.setMode("selection"); 
            mod.properties.combo = combo; 
            mod.popup(combo);
            mod.loadGridData();
        });
    }, 
    popupTableBox : function(table, combo){
        xui.newModule("App.DataList", function(err,mod){
            mod.setMode("selection"); 
            mod.properties.combo = combo;
            mod.tableName = table;
            mod.popup(combo);
            mod.loadGridData();
        });
    },
	getCompareString: function(comp,value){
		var R=" ";
		value1 = "'"+ value + "'"
		value2 = "'%"+ value + "%'"
		value3 = "'%"+ value + "'"
		value4 = "'"+ value + "%'"
		if(comp == ">")
			R += " > " + value1;
		else if(comp == ">=")
			R += " >= " + value1;
		else if(comp == "<")
			R += " < " + value1;
		else if(comp == "<=")
			R += " <= " + value1;
		else if(comp == "==")
			R += " = " + value1;
		else if(comp == "!=")
			R += " != " + value1;
		else if(comp == "contains")
			R += " LIKE" + value2;
		else if(comp == "startsWith")
			R += " LIKE " + value3;
		else if(comp == "endsWith")
			R += " LIKE " + value4;
		return R;
	},
	
	getTableFieldComboConfig: function(tableName,  col){
		if(!TableComboConfigs.hasOwnProperty(tableName) || !TableComboConfigs[tableName].hasOwnProperty(col))
		{
			if(!TableComboConfigs["通用"].hasOwnProperty(col))
			  return null;
			else
			  tableName = "通用";	
		}
		var config={};
		var s = TableComboConfigs[tableName][col];
		s = s.split(":");
		config.tableName = s[0];
		config.keyid = s[1];
		if(typeof s[2] == "undefined"  || s[2] == "")
		  config.displayFields = config.keyid;
		else 
		  config.displayFields = s[2];
		if(typeof s[3] == "undefined"  || s[3] == "")
		  config.displayCaptions = config.displayFields;
		else 
		  config.displayCaptions = s[3];
		if(typeof s[4] == "undefined"  || s[4] == "")
		  config.displayWidths = "";
		else 
		  config.displayWidths = s[4];
	    return config;
	},
    saveForm: function(mod, ignoreFields, extDatas, onFinish, db){
            var prop = mod.properties;
			if(typeof db == "undefined")
			{
			  db = mod.getDataBinders();
			  if(db.length > 0)
				db = db[0].boxing();
			  else
				return false;
			}
                
            if(db && db.updateDataFromUI() == false)
                return false;
            var newcb = function(data){
                if(typeof data != "undefined" && typeof data.item != "undefined" && db)
                {
                  var item = data.item;  
                  db.setData(item).updateDataToUI();
                  prop.mode = "edit";
				  mod.saveBtn.setCaption("儲存");	
				  if(onFinish)
					onFinish(data.item);  
                }
            }
            var datas = db.getData();
                
            if(typeof datas.__row__id  != "undefined")
                delete datas.__row__id;
            if(prop.tableName == "工號登錄總資料表")
            {
               if(typeof datas["連結資料"] != "undefined")
                 delete datas["連結資料"];
               if(typeof datas["其他相關資料"] != "undefined")
                 delete datas["其他相關資料"];
            }
			if(ignoreFields)
			{	
			  for(let i=0; i<ignoreFields.length; i++)
			  {
                if(typeof datas[ignoreFields[i]] != "undefined")
                  delete datas[ignoreFields[i]];
			  }
			}
			if(extDatas)
			{	
			  let keys = Object.keys(extDatas); 	
			  for(let i=0; i<keys.length; i++)
			  {
				let key = keys[i];  
                datas[key] = extDatas[key];
			  }
			}
            if(prop.mode.indexOf("new") != -1)
            {
              utils.insertTableItem(prop.tableName,  datas, newcb);  
            }
            else
            {
               utils.modifyTableItem(prop.tableName, prop.keyid, datas);
               mod.dialog.close();
            }    
            return true;
    },
    updateModuleTableBoxCaption : function(mod){
        var nodes = mod.form.getChildren(true,true).get();
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();
            if(n.KEY == 'xui.UI.ComboInput' && n.getType() == "cmdbox")
            {
                
              let value = n.getValue(); 
              n.setCaption(value);  
/*
              let prop = n.getPopCtrlProp();
              let table = prop.tableName;
              let fields = prop.displayFields;
              let k = prop.keyid;  
              let condition = `[${k}] = '${value}'`;  
              utils.getTableItems(table,condition, function(data){
                  if(data.rows.length > 0)
                  {
                    let row =  data.rows[0];
                    let names = fields.split(':');
                    let caption = "";
                    for(let i=0; i<names.length; i++)
                      caption = row[names[i]] + "  ";  
                    n.setCaption(caption);        
                  }
              });
              */
            }
        }
    }, 
    installDataBinderHooks : function(mod){
        var nodes = mod.getDataBinders();
        mod._db_afterupdatedatafromui = function (profile,dataFromUI){
                      var ns = this, uictrl = profile.boxing();
                      xui.each(dataFromUI,function(o,i){
                      if(xui.isDate(o))
                        dataFromUI[i] = xui.Date.format(o,"yyyy-mm-dd hh:nn:ss");
                      });
        }
		// console.log("nodes:",nodes); 
         for(var i=0; i< nodes.length; i++)
         {
            let n = nodes[i].boxing();;
            n.afterUpdateDataFromUI("_db_afterupdatedatafromui");
		 } 
    }, 
    installModuleTableBoxHooks : function(mod){
		var root = mod.getRoot();
		console.log("root:", root);
        if(mod.form)
           var nodes = mod.form.getChildren(true,true).get();
        else if(mod.mainPage)
           var nodes = mod.mainPage.getChildren(true,true).get();
        else if(mod.dialog)
           var nodes = mod.dialog.getChildren(true,true).get();
        var formTableName = mod.properties.tableName;   

		var showCombo = function(uictrl, condition){
				var tableName  = formTableName;
				if(typeof tableName == "undefined")  //get from db tagvar
				{
				  tableName = "通用";
				}
				var field  = uictrl.getDataField();
				var condition = "";
				if(uictrl.getType == "popbox")
                  condition = `[${prop.keyid}] LIKE '%${uictrl.getUIValue()}%'`;
				var prop = utils.getTableFieldComboConfig(tableName, field);
				var cachetitle = `${prop.tableName}:${prop.displayFields}:${prop.displayCaptions}`;
				if(typeof ComboBoxCache == "undefined")
					ComboBoxCache = {};
				if(typeof ComboBoxCache[cachetitle] == "undefined")
				{
				  xui.newModule("App.DataListForm", function(err,module){
                    module.setProperties("tableName", prop.tableName);
                    module.setProperties("keyid", prop.keyid);
                    module.setProperties("displayFields", prop.displayFields);
                    module.setProperties("uictrl", uictrl);
                    module.setProperties("fieldWidths", prop.displayWidths);
                    module.setProperties("fieldCaptions", prop.displayCaptions);
                    module.setProperties("condition", condition);
                    //module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-INPUT"]);
					ComboBoxCache[cachetitle] = module;
                    module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-BOX"]);
				  });           
				}		
				else
				{
                  ComboBoxCache[cachetitle].setProperties("uictrl", uictrl);
				  ComboBoxCache[cachetitle].popUp(uictrl.n0.$_domid["xui.UI.ComboInput-BOX"]);
				}
		}		
        let popcb = function(profile, pos, e, src){
                var ns = this, uictrl = profile.boxing();//, prop = uictrl.getPopCtrlProp();
				showCombo(uictrl);
        }; 
        let popcb2 = function(profile, pos, e, src){
                var ns = this, uictrl = profile.boxing();
				var tableName  = formTableName;
				if(typeof tableName == "undefined")  //get from db tagvar
				{
				  tableName = "通用";
				}
				var prop = utils.getTableFieldComboConfig(tableName, field);
                condition = `[${prop.keyid}] LIKE '%${uictrl.getUIValue()}%'`;
                utils.getTableItems({"tableName":prop.tableName, "fields": prop.displayFields, "condition":condition},function(data){
                    var items = [];
                    var rows = data.rows;   
                    for(var i=0; i<rows.length; i++)
                    {
                      var row = rows[i];  
                      items.push({"id":row[0], "caption":row[0]});      
                    }
                    uictrl.setItems(items);
                });
        };                
        mod.tableBox_beforecombopop = popcb;  
        mod.tableBox_beforecombopop2 = popcb2;
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();;
            if(n.KEY == 'xui.UI.ComboInput')
            {
                if(n.getType() == "cmdbox")
                   n.beforeComboPop("tableBox_beforecombopop");
                else if(n.getType() == "popbox")
				{
				   //console.log("popbo:",n.getDataField());	
                   n.beforeComboPop("tableBox_beforecombopop");
				}
                //else if(n.getType() == "combobox")
                //   n.beforeComboPop("tableBox_beforecombopop2");
            }
        }
    },
    updateTableNamesCombo: function(combo,  database){
      var ns = this;
        if(typeof database == "undefined")
            database = "BU3_System";
      var hash={"cmd":"getTableNames","database":database};
      utils.sendDataCmd(hash,  function(data){
          var items  =  data.items;
          var list = [];
          for(var i=0;i<items.length; i++)
          {
            list.push({"id":items[i].TABLE_NAME,"caption":items[i].TABLE_NAME});      
          }
          combo.setItems(list);
      });
        
    },
    updateFieldNamesCombo: function(table, combo){
      var ns = this; 
      var hash={"cmd":"getTableFieldConfigs","table":table};
      utils.sendDataCmd(hash,  function(data){
          var items  =  data.items;
          var list = [];
          for(var i=0;i<items.length; i++)
          {
            var value = items[i].COLUMN_NAME;  
            var id = "["  + value + "]";  
            list.push({"id":  id,"caption":value});      
          }
          combo.setItems(list);
      });
        
    },
    getTableConfig : function(table){
        if(typeof TableConfigs == "undefined")
          TableConfigs = [];  
        if(table in TableConfigs == false)
        {
            var hash={"cmd":"getTableFieldConfigs","table":table};
            var data = utils.sendDataCmd(hash,  null, true);
            TableConfigs[table] = data.items;
        }
        return TableConfigs[table];
    }, 
    getTableFieldConfig : function(table,  field){
		var cols = utils.getTableConfig(table);
		for(var i=0; i<cols.length; i++)
		{
			if(cols[i].COLUMN_NAME == field)
				return cols[i];
		}
        return null;
    }, 
	askData: function(config, cb){
        xui.newModule("App.AskDataDialog", function(err,mod){
			utils.installDataBinderHooks(mod);
			mod.askData(config, cb);
        });		
	},
    createTableControls : function(table, key, thepage, onFinish){
        var form = thepage.form;
        var cb = function(items){
            if(items)
            {
              var h = 2;
              var x = 2;   
              var s = "";  
              for(var i=0; i<items.length; i++)
              {
                let name = items[i].COLUMN_NAME;
                let type = items[i].DATA_TYPE;
                let maxlen = items[i].CHARACTER_MAXIMUM_LENGTH;    
                var input;  
                s += "\nhost.form.append("; 
                if(type.includes("varchar")){
                   input = xui.create("xui.UI.Input");
                   s += 'xui.create("xui.UI.Input")'; 
                }
                if(type.includes("varbinary")){
                   input = xui.create("xui.UI.Input");
                   s += 'xui.create("xui.UI.Input")'; 
                }
                else if(type.includes("int")){
                   input = xui.create("xui.UI.ComboInput").setType("spin").setIncrement(1).setPrecision(0);
                   s += 'xui.create("xui.UI.ComboInput").setType("spin").setIncrement(1).setPrecision(0)'; 
                }
                else if(type.includes("float") || type.includes("real")){
                    input = xui.create("xui.UI.ComboInput").setType("spin").setIncrement(1).setPrecision(1);
                   s += 'xui.create("xui.UI.ComboInput").setType("spin").setIncrement(1).setPrecision(1)'; 
                }
                else if(type.includes("money")){
                   input = xui.create("xui.UI.ComboInput").setType("currency");
                   s += 'xui.create("xui.UI.ComboInput").setType("currency")'; 
                }
                else if(type.includes("datetime")){
                   input = xui.create("xui.UI.ComboInput").setType("date");
                   s += 'xui.create("xui.UI.ComboInput").setType("date")'; 
                }
                else if(type.includes("bit"))
                {
                   input = xui.create("xui.UI.CheckBox").setCaption(name); 
                   s += `xui.create("xui.UI.CheckBox").setCaption('${name}')`; 
                }
                else if(type.includes("ntext")){
                   input = xui.create("xui.UI.Input");
                   s += 'xui.create("xui.UI.Input")'; 
                }
                
                input.setDock("none")
                    .setLeft(x +"em")
                    .setTop(h+"em")
                    .setWidth("18em")
                    .setName(name)
                    .setDataBinder("db")
                    .setDataField(name);
                s += `.setDock("none").setLeft("${x}em").setTop("${h}em").setWidth("18em").setName('${name}').setDataBinder("db").setDataField('${name}')`;
                if(input.setLabelSize)
                {
                   input.setLabelSize("8em");
                   s += '.setLabelSize("8em")';
                }
                if(input.setLabelCaption)
                {
                   input.setLabelCaption(name);
                   s += `.setLabelCaption('${name}')`; 
                }
                if(input.setMaxlength)
                {
                   input.setMaxlength(maxlen);
                   s += `.setMaxlength('${maxlen}')`; 
                }
                  form.append(input);
                s +=  ');\n'  
                if(x == 2)
                    x = 22;
                else
                {
                    h += 2;
                    x = 2;
                }
              }
              if(onFinish)
                onFinish();
              thepage.db.updateDataToUI().getUI().setDisabled(false);
              console.log(s);
                
            }
        };
        var items = utils.getTableConfig(table);
        cb(items);
    },
	today: function(){
		return xui.Date.format(new Date(),"yyyy-mm-dd");
	},
	now: function(){
		return xui.Date.format(new Date(),"yyyy-mm-dd hh:nn:ss");
	},     
     
     
 };