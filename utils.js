/*20230404*/
ConditionDatas = {};
DataPageTheme = "";
DataPageThemeIndex = 0;
DataPageThemeNames = ["army","webflat", "pink", "classic","electricity","red"];

utils = {
    alert: function(content, caption = "訊息"){
        xui.alert(caption, content);
    },
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
                var wait = true;
                if(onFinish)
                    wait = false;
                var result = null;
                xui.Ajax("php/data.php",hash,function(rsp){
                    var data =rsp;
                    if(!data){    alert("no data");
                        result = {"columns":[], "result":"ERROR", "rows":[], "totalRowCount":0};
                    }
                    else if(typeof data == "string") {
                        result = {"columns":[], "result":"ERROR", "rows":[], "totalRowCount":0};
                    }//alert("ERROR");
                    else
                        result = data;
                    if(onFinish)
                       onFinish(data);  
                },null,null,{"asy": !wait}).start();
                return result;
    },
    getPageTableItems : function(prop, onFinish){
        var hash={"cmd":"getTableItems","table": prop.tableName,"pageno":  prop.pageno, "pagelen": prop.pagelen, "orderby":  prop.orderby};
        if(prop.condition)
            hash.condition = prop.condition;
        if(prop.fields && prop.fields != "*" && prop.fields != "")
            hash.fields = utils.getProperFields(prop.fields);
        
        utils.sendDataCmd(hash,  onFinish);
    }, 
    setFieldValue : function(srcui, dstui){
        if(srcui.updatingFieldValue)
            return;
        var value = srcui.getUIValue();
        var config = utils.getTableFieldComboConfig("通用", srcui.getDataField());
        var config2 = utils.getTableFieldComboConfig("通用", dstui.getDataField());
        var tableName = config.tableName;
        if(tableName.includes("SELECT "))
            tableName = utils.formatString(tableName, ComboDatas);
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
    getTableItems : function(prop, onFinish = null){
        var hash={"cmd":"getTableItems","table":prop.tableName};
        if(prop.condition)
            hash.condition = prop.condition;
        if(prop.orderby)
            hash.orderby = prop.orderby;
        
        if(prop.fields  && prop.fields != "*" && prop.fields != "")
            hash.fields = utils.getProperFields(prop.fields);
        
        return utils.sendDataCmd(hash, onFinish);
    }, 
    getPageQueryItems : function(query, orderby, pageno, pagelen, onFinish){
        var hash={"cmd":"getQueryItems","query":query,"pageno":pageno, "pagelen":pagelen, "orderby":orderby};
        return utils.sendDataCmd(hash,  onFinish);
    }, 
    getQueryItems : function(query,onFinish){
        var hash={"cmd":"getQueryItems","query":query};
        return utils.sendDataCmd(hash,  onFinish);
    }, 
    getItemValueByCondition: function(table, condition,  getField="*", allRows = false)
    {
        table = utils.getProperTableName(table);

        var query = `SELECT ${getField} FROM ${table} WHERE ${condition}`;
        var hash={"cmd":"getQueryItems","query":query};
        var datas = utils.sendDataCmd(hash);
        if(datas.rows.length > 0)
        {
          if(getField != "*"  && getField.indexOf(",") == -1)    
            return datas.rows[0][0];
          else       
          {    
            var rows = utils.getRowMap(datas);
            if(allRows)
              return rows;
            else    
              return rows[0];
          }            
        }
        else 
          return "";    
    },
    getProperFields: function(fields){
        if(typeof fields == "undefined")
            return "*";
        if(fields == '*' || fields == "count(*)")
            return fields;
        var items = fields.split(',');
        var R= "";
        for(var i=0; i<items.length; i++)
        {
            var it = items[i].trim();
            if(it.startsWith("["))
                R += it;
            else
                R += ("[" + it + "]");
            if(i != items.length-1)
              R += ","
        }
        return R;
    },
    getProperTableName :function(table){
        if(table.startsWith("crm."))
        {
            table = table.substring(4);
            if(!table.startsWith("["))
              table = `[${table}]`;
            table = `GDCRM.dbo.${table}`;
        }
        else
        {
            if(!table.startsWith("["))
              table = `[${table}]`;
        }
        return table;
    },
    getItemValue: function(table, key, keyValue,  getField, allRows = false)
    {
        if(typeof getField == "undefined")
            getField = "*";
        getField = utils.getProperFields(getField);
        table = utils.getProperTableName(table);
        if(typeof key == "undefined")
        {
          var query = `SELECT ${getField} FROM ${table}`;
          allRows = true;  
        }
        else
        {
          key = utils.getProperFields(key);
          var query = `SELECT ${getField} FROM ${table} WHERE ${key}='${keyValue}'`;
        }
        var hash={"cmd":"getQueryItems","query":query};
        var datas = utils.sendDataCmd(hash);
        if(datas.rows.length > 0)
        {
          if(getField != "*"  && getField.indexOf(",") == -1)    
            return datas.rows[0][0];
          else 
          {    
            var rows = utils.getRowMap(datas);
            if(allRows)
                return rows;
            else
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
        var data = utils.removeInvalidFields(table, datas);
        key = utils.removeBracket(key);
        var hash={"cmd":"modifyTableItem","table":table, "key":key,"item":data};
        utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    modifyTableItem2 : function(table, key, keyValue, datas, onFinish,  wait){
        var data = utils.removeInvalidFields(table, datas);
        key = utils.removeBracket(key);
        var hash={"cmd":"modifyTableItem2","table":table, "key":key,"keyValue":keyValue, "item":data};
        utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    removeInvalidFields: function(table, datas){
        var data = Object.assign(datas);
        var fields = utils.getTableFieldNames(table);
        var keys = Object.keys(data);     
        for(let i=0; i<keys.length; i++)
        {
           if(fields.indexOf(keys[i]) == -1)
              delete data[keys[i]];
        }
        return data;
    },
    insertTableItem : function(table, datas){
        var data = utils.removeInvalidFields(table, datas);
        var hash={"cmd":"insertTableItem","table":table, "item":data};
        var res = utils.sendDataCmd(hash);
        return res.item;
    }, 
    removeTableItem : function(table, keys, value, onFinish,wait){
        var hash={"cmd":"deleteTableItem","table":table, "key":keys, "value":value};
        utils.sendDataCmd(hash,  onFinish,wait);
    }, 
    showDataGrid: function(prop){
        var cb = function(mod){
            mod.dialog.setCaption(prop.tableName);
            mod.modGrid.properties = prop;
        };    
        xui.showModule("App.DataGridForm", cb);
    },
    newCnNumber : function(repairno){
        var hash={"cmd":"newCnNumber","value": repairno};
        var res = utils.sendDataCmd(hash);
        return res["CN#"];
    }, 
    newDelivery : function(cn, repairno, companyid){
        var datas = {"出貨單性質":"銷貨單", "公司代碼": companyid, "出貨單日期":  utils.today()};  
        var item = utils.insertTableItem("L10300,出貨單總資料庫",  datas); //wait
        var rdatas = {"登錄編號":repairno, "送貨單#": item["出貨單號"]};  
        utils.modifyTableItem("CTI Control Number總資料庫", "登錄編號", rdatas); //wait
        return item;
    }, 
    removeBracket: function(str){
        str = str.replace("[","");
        str = str.replace("]","");
        return str;
    },
    hasSavePrivilege: function(item){
        var chkeys = ["登錄人","Sponser"];
        var pri = LoginUser.Privilege;
        return true;
    },
    showItemPage : function(table, key, value, pagename, mode = "edit", onload = null,  ondestroy = null){
            if( value && value != "")
            {
              var item = utils.getItemValue(table,key,value,"*");
              if(item != "")
                utils.showDataPage(pagename, item, mode, onload, ondestroy);        
            }
    },
    showDataPage : function(pagename, item, mode, onload,  ondestroy){
        var cb2 = function(mod){
            var db = mod.getDataBinders();
            if(db.length > 0)
              db = db[0].boxing();
            else
              return;    
            if(mode.includes("edit"))
                mod.saveBtn.setCaption("儲存");
            else if(mode.includes("new"))
                mod.saveBtn.setCaption("新增");
            else if(mode == "readonly")
                mod.saveBtn.setDisabled(true);
                
                
            mod.properties.mode = mode;  
            utils.installDataBinderHooks(mod);  
            utils.installModuleTableBoxHooks(mod);
            if(mod.saveBtn && utils.hasSavePrivilege(item) == false)
              mod.saveBtn.setDisabled(true);
            
            utils.disableAutoTips(mod);
            db.setData(item).updateDataToUI();
            utils.updateModuleTableBoxCaption(mod);
            if(onload)
              onload(mod);
              mod.setEvents("onDestroy",function(){
                    //DataPageTheme = "";
                    DataPageThemeIndex--;
                    if(DataPageThemeIndex < 0)
                        DataPageThemeIndex = 0;
                    if(ondestroy)
                      ondestroy(mod);
                });    
            if(DataPageTheme != "")
                mod.dialog.setSandboxTheme(DataPageTheme);
            mod.dialog.setModal(true);
        };
        DataPageTheme = DataPageThemeNames[DataPageThemeIndex++];
        xui.showModule("App." + pagename, cb2, null, null, false); //not cached
    }, 
    showPage : function(pagename,  onload, ondestroy){
        var cb2 = function(mod){
            utils.installDataBinderHooks(mod);  
            utils.installModuleTableBoxHooks(mod);
            if(onload)
              onload(mod); 
            mod.setEvents("onDestroy",function(){
                    //DataPageTheme = "";
                    DataPageThemeIndex--;
                    if(DataPageThemeIndex < 0)
                        DataPageThemeIndex = 0;
                    if(ondestroy)
                      ondestroy(mod);
                });    
            if(DataPageTheme != "")
                mod.dialog.setSandboxTheme(DataPageTheme);
            mod.dialog.setModal(true);            
        };
        xui.showModule("App." + pagename, cb2, null, null, false);
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
        config.orderby = "";
        config.tableName = s[0];
        if(s[0].includes(",") &&(s[0].endsWith(" DESC") || s[0].endsWith(" ASC")))
        {
          var ss = s[0].split(",");
          config.tableName = "";
          for(var i=0; i<ss.length; i++)
          {
              if(i == ss.length-1)
              {
                 config.orderby = ss[i];
                 config.tableName = config.tableName.slice(0, -1);
              }
              else   
              {    
                config.tableName += ss[i]+",";
              }
          }
        }
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
        if(typeof s[5] == "undefined"  || s[5] == "")
          config.condition = "";
        else 
          config.condition = s[5];
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
            var newcb = function(item){
                  db.setData(item).updateDataToUI();
                  prop.mode = prop.mode.replaceAll("new","edit");
                  mod.saveBtn.setCaption("儲存");    
                  if(onFinish)
                    onFinish(item);  
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
            if(prop.tableName == "CTI Control Number總資料庫")
            {
               if(typeof datas["維修報告"] != "undefined")
                 delete datas["維修報告"];
            }
            if(prop.tableName == "領料報工單" && prop["mode"].includes("new")){
                delete datas["領料報工單號"];
            }
            if(prop.tableName == "crm.Incident")
            {
                if(!datas["Remark"].includes("BU3系統轉入案件"))
                    datas["Remark"] = "[BU3系統轉入案件]"+ datas["Remark"];
            }
            if(prop.tableName == "crm.ServiceRecord")
            {
                if(!datas["Remark"].includes("BU3系統轉入服務記錄"))
                    datas["Remark"] = "[BU3系統轉入服務記錄]"+ datas["Remark"];
            }
            if(ignoreFields)
            {    
              for(let i=0; i<ignoreFields.length; i++)
              {
                if(typeof datas[ignoreFields[i]] != "undefined")
                  delete datas[ignoreFields[i]];
              }
            }
/*        
            //remove unused field
            var fields = utils.getTableFieldNames(prop.tableName);
            var keys = Object.keys(datas);     
            for(let i=0; i<keys.length; i++)
            {
                if(fields.indexOf(keys[i]) == -1)
                  delete datas[keys[i]];
            }
*/        
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
              var data = utils.insertTableItem(prop.tableName,  datas); //wait 
              newcb(data);
            }
            else
            {
               utils.modifyTableItem(prop.tableName, prop.keyid, datas); //wait
               if(onFinish)
                 onFinish();  
               mod.dialog.close();
            }    
            return true;
    },
    updateModuleTableBoxCaption : function(mod){
        if(mod.dialog)
          var nodes = mod.dialog.getChildren(true,true).get();
        else if(mod.form)
          var nodes = mod.form.getChildren(true,true).get();
        else 
          return;  
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();
            if(n.KEY == 'xui.UI.ComboInput' && (n.getType() == "cmdbox" || n.getType() == "button"))
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
        var formTableName = mod.key;   
        var showCombo = function(uictrl){
                var db = mod.getDataBinders();
                if(db.length > 0)
                {
                   db = db[0].boxing();
                   db.updateDataFromUI(true,false,false,null,null,true); //ignore alert
                   var comboDatas = db.getData(); 
                }
                else 
                    var comboDatas = {}; 
                var tableName  = formTableName;
                if(typeof tableName == "undefined")  //get from db tagvar
                {
                  tableName = "通用";
                }
                var field  = uictrl.getDataField();
                var condition = "";
                //if(uictrl.getType == "popbox")
                //  condition = `[${prop.keyid}] LIKE '%${uictrl.getUIValue()}%'`;
                var prop = utils.getTableFieldComboConfig(tableName, field);
                condition = utils.formatString(prop.condition, comboDatas);
                var cachetitle = `${prop.tableName}:${prop.displayFields}:${prop.displayCaptions}`;
                if(typeof ComboBoxCache == "undefined")
                    ComboBoxCache = {};
                if(typeof ComboBoxCache[cachetitle] == "undefined")
                {
                  xui.newModule("App.DataListForm", function(err,module){
                    var tableName =  prop.tableName;
                    if(tableName.includes("SELECT "))  
                      tableName = utils.formatString(tableName, comboDatas);  //process SELECT
                      
                    module.setProperties("tableName", tableName);
                    module.setProperties("keyid", prop.keyid);
                    module.setProperties("displayFields", prop.displayFields);
                    module.setProperties("uictrl", uictrl);
                    module.setProperties("fieldWidths", prop.displayWidths);
                    module.setProperties("fieldCaptions", prop.displayCaptions);
                    module.setProperties("condition", condition);
                    module.setProperties("orderby", prop["orderby"]);
                    //module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-INPUT"]);
                    //ComboBoxCache[cachetitle] = module;
                    //module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-BOX"]);
                     utils.popUp(module, uictrl); 
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
        let passFailCb = function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            if(type == 1)
            {
              if(item.id == "Pass")
                  uictrl.setValue("Pass");
              else 
                  uictrl.setValue("Fail");
            }            
        }
        mod.tableBox_beforecombopop = popcb;  
        mod.passFail_onitemselected = passFailCb;
       // mod.tableBox_beforecombopop2 = popcb2;
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
            else if(n.KEY == "xui.UI.RadioBox")
            {
              var items = n.getItems();  
              if(items.length == 2 && items[0].id == "Pass")
              {
                  n.setSelMode("multi");
                  n.onItemSelected("passFail_onitemselected");
              }
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
    getTableFieldNames: function(table){
        var fields = [];
        var cols = utils.getTableConfig(table);
        for(var i=0; i<cols.length; i++)
        {
            fields.push(cols[i].COLUMN_NAME);
        }
        return fields;
    },
    getTableFieldConfig : function(table,  field){
        var cols = utils.getTableConfig(table);
        if(typeof cols == "undefined")
            return null;
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
                else {
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
    dateToString: function(d){
      return xui.Date.format(d,"yyyy-mm-dd");  
    },
    today: function(){
        return xui.Date.format(new Date(),"yyyy-mm-dd");
    },
    now: function(){
        return xui.Date.format(new Date(),"yyyy-mm-dd hh:nn:ss");
    },     
    dateTimeToString: function(d){
        return xui.Date.format(d,"yyyy-mm-dd hh:nn:ss");
    },     
    formatString: function(fmt, item, quoteFlag = true){
        var cb = function(match,offset,str)
        {
                if(typeof item == "undefined")
                    return "";
                var key = match;
                key = key.substring(1,key.length-1);
                if(item.hasOwnProperty(key))
                {
                    if(quoteFlag && !item[key].startsWith("'"))  
                      return "'" + item[key] +"'";
                    else 
                      return item[key];  
                }
                else
                  return "";    
        };
        return fmt.replace(/{[^{}]*}/g, cb);    
    },       
    createDDL: function(form, tableName, checkDup = false){
        var nodes = form.getChildren(true,true).get();
        var fieldList = [];
        var s = `CREATE TABLE [${tableName}] (\n`;
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();;
            if(n.KEY == 'xui.UI.ComboInput' || n.KEY == 'xui.UI.Input' || n.KEY == 'xui.UI.Button' || n.KEY == 'xui.UI.RadioBox' || n.KEY == 'xui.UI.CheckBox')
            {
                if(n.getAlias() == 'saveBtn' || n.getAlias() == 'cancelBtn')
                    continue;
                var field = n.getDataField();
                if(field == "")
                    continue;
                if(checkDup && fieldList.includes(field))
                    continue;
                fieldList.push(field);    
                
                if(n.KEY == 'xui.UI.ComboInput' && n.getType().includes('date'))
                  s += `[${field}] datetime NULL,\n`;
                else if(n.KEY == 'xui.UI.CheckBox')
                  s += `[${field}] BIT Default 0,\n`;
                else    
                  s += `[${field}] varchar(32) Default '',\n`;
            }
       }     
        s += ')\n';
        return s;
    },
    textToBase64Barcode: function (text){
        var canvas = document.createElement("canvas");
        JsBarcode(canvas, text, {format: "CODE128",width:2});
        return canvas.toDataURL("image/png");
    },
    showWarrantyEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("CryopumpWarranty原因分析表","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CryopumpWarrantyEditForm", item, "edit");      

    },
    showCompressorEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Compressor維修工單","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CompressorEditForm", item, "edit");      

    },
    showCrossheadEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Crosshead維修工單","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CrossheadEditForm", item, "edit");      

    },
    showCylinderHeaterEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("CylinderHeater維修工單","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CylinderHeaterEditForm", item, "edit");      

    },    
    showRepairOptionForm: function(db){
                    db.updateDataFromUI();
                    var data = db.getData();
                    var id = data["登錄編號"];
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Option零件更換表","登錄編號",id,"*");
                    if(item == "")
                      utils.showDataPage("RepairOptionForm",{"登錄編號":id,"Model":data["Pump"],"S/N":data["Pump S/N"], "BenchName":LoginUser.DisplayName}, "new");        
                    else
                      utils.showDataPage("RepairOptionForm", item, "edit")  ;      

    },
    showRepairEditForm: function(id, readonly = false){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var cb = function(mod){
                        if(readonly)
                        {
                          mod.saveBtn.setDisabled(true);    
                          mod.messageBtn.setDisabled(true);
                          mod.testMessageBtn.setDisabled(true);
                          mod.confirmBtn.setDisabled(true);
                          mod.serviceBtn.setDisabled(true);
                          mod.incidentBtn.setDisabled(true);
                        }
                    }
                    var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號",id);
                    if(item != "")
                      utils.showDataPage("RepairEditForm", item, "edit", cb)  ;      

    },    
    updateNewWorkSheetValue: function(db, rno){
        db.updateDataFromUI();
        var item = utils.getItemValue("CTI Control Number總資料庫","登錄編號", rno,"*");
        if(item == "")
          return;    
        var newitem = {"登錄編號":item["登錄編號"], "Model":item["In Model"], "P/N":item["In P/N"], "S/N": item["In S/N"],"客戶名稱": item["客戶名稱"], "日期":utils.today(),
                       "保固期":item["保固期"],"上次登錄編號":item["上次登錄編號"], "上次登錄時間":item["上次登錄時間"],"上次故障原因":item["上次故障原因"],
                      "Pump": item["In Model"], "Pump P/N": item["In P/N"],  "Pump S/N": item["In S/N"], "Report":item["SL是否需維修報告"]}; 
        var keys = Object.keys(newitem);
        for(var i=0; i<keys.length;i++)
          db.setData(keys[i], newitem[keys[i]]);  
        db.updateDataToUI();  
    },    
    getCompanyItem: function(companyID){
        var item = this.getItemValue("crm.Company","CompanyID", companyID);
        if(item == "")
        {
            var item2 = this.getItemValue("廠商公司資料表","公司代碼",companyID);
            if(item2 == "")
                return "";
            item = {"CompanyID":companyID, "Address": item2["所在地址"], "ShipAddress": item2["所在地址"], "CoShortName":item2["中文簡稱"], "統一編號":item2["統一編號"], "PhoneNumber":item2["總機"]};
        }
        return item;
    },
    showLastWorkSheet: function(mod,pageName, table, keysn, keyDate = '日期'){
        var db = mod.getDataBinders();
        if(db.length > 0)
           db = db[0].boxing();
        else
           return; 
        db.updateDataFromUI();
        var data = db.getData();
        var keyValueSn = data[keysn];
        var d = new Date(data[keyDate]);
        d = xui.Date.format(d,"yyyy-mm-dd");
        var condition = `[${keysn}] = '${keyValueSn}' AND 日期 < '${d}' ORDER BY 日期 DESC`;
        var item = utils.getItemValueByCondition(table, condition);
        if(item == "")
        {
          xui.alert("查無上次工單!");
          return;  
        }
        var cb1 = function(mod){
            mod.dialog.setSandboxTheme("army");
        }

        var cb2 = function(mod){
           db.setData(data);
           db.updateDataToUI(); 
        }
        utils.showDataPage(pageName, item, "readonly", cb1, cb2);
        
    },
    updateConfirmBtnCaption(mod, uictrl){
            var db = mod.getDataBinders();
            if(db.length > 0)
               db = db[0].boxing();
            else
               return; 
            var data = db.getData();
            var confirm = data["確認狀態"];
            if(typeof confirm == "undefined")
                confirm = "";
            if(confirm == "待秘書確認")
                  uictrl.setCaption("待秘書確認");
            else if(confirm == "待組長確認")
                  uictrl.setCaption("待組長確認");
            else if(confirm == "秘書已確認，通知Bench")
                uictrl.setCaption("秘書已確認,取消通知");
            else if(confirm.includes("已確認"))
                uictrl.setCaption(confirm);
            else if(data["組長確認"] == "")
                uictrl.setCaption("通知組長確認");
            else 
                uictrl.setCaption("通知秘書確認");
    },
    confirmBtnClick: function(mod, uictrl, key = "登錄編號"){
            var db = mod.getDataBinders();
            if(db.length > 0)
               db = db[0].boxing();
            else
               return; 
            var prop = mod.properties;
            if(prop["mode"].includes("new"))
            {
              xui.alert("請先按新增!");
              return;  
            }
            var table = prop["tableName"];
            var data = db.getData();
            var id = data[key];
            var confirm = uictrl.getCaption();
            if(confirm == "通知秘書確認")
            {
              if(data["組長確認"] == "")  
              {
                xui.alert("請先通知組長確認!");   
                return;        
              }
              utils.modifyTableItem(table,key,{[key]:id, "確認狀態":"待秘書確認"}); 
              db.setData("確認狀態","待秘書確認");   
              xui.alert("已通知秘書確認!");   
              uictrl.setCaption("待秘書確認");
            }
            else if(confirm == "通知組長確認")
            {
              utils.modifyTableItem(table, key, {[key]:id, "確認狀態":"待組長確認"});  
              db.setData("確認狀態","待組長確認");   
              xui.alert("已通知組長確認!");        
              uictrl.setCaption("待組長確認");
            }
            else if(confirm == "秘書已確認,取消通知")
            {
              utils.modifyTableItem(table,key,{[key]:id, "確認狀態":"秘書已確認"});  
              db.setData("確認狀態","秘書已確認");   
              xui.alert("已取消通知!");        
              uictrl.setCaption("秘書已確認");
            }               
    },
    signNameClick: function(datectrl, uictrl, pri, saveFlag=true){
        var mod = uictrl.getModule();
        var dbname = uictrl.getDataBinder();
        var db = xui.DataBinder.getFromName(dbname);
        if(typeof db == "undefined")
            return;
        var data = db.getData();
        var prop = mod.properties;
        var table = prop["tableName"];
        var name = uictrl.getValue();
        var key = prop["keyid"];
        var id = data[key];
        if(name == "")
        {
          var priflag = false;  
          var prilist = pri.split(",");
          for(var i=0; i<prilist.length; i++)
          {
            if(LoginUser.Privilege.includes(prilist[i]))
            {
              priflag = true;
              break;
            }
          }
          if(priflag)
          {
            var field = uictrl.getDataField(); 
            name = LoginUser.DisplayName;  
            uictrl.setValue(name);    
            if(datectrl)
                datectrl.setValue(utils.today());
            if(saveFlag){
              if(datectrl)  
              {
                var dateField = datectrl.getDataField();  
                utils.modifyTableItem(table, key, {[key]:id, [field]:name, [dateField]: utils.today()});
              }
              else
                utils.modifyTableItem(table, key, {[key]:id, [field]:name});
            }
//            xui.alert("已確認!");
            return true;
          }
          else
          {
            xui.alert("請 '"+ pri + "' 覆核!");
            return false;
          }
        }
    },
    confirmNameClick: function(mod, uictrl, pri, saveFlag=true){
        var db = mod.getDataBinders();
        if(db.length > 0)
           db = db[0].boxing();
        else
           return; 
        var data = db.getData();
        var prop = mod.properties;
        var table = prop["tableName"];
        var name = uictrl.getValue();
        var key = prop["keyid"];
        var id = data[key];
        if(name == "")
        {
          var priflag = false;  
          var prilist = pri.split(",");
          for(var i=0; i<prilist.length; i++)
          {
            if(LoginUser.Privilege.includes(prilist[i]))
            {
              priflag = true;
              break;
            }
          }
          if(priflag)
          {
            name = LoginUser.DisplayName;  
            var confirmName =  pri + "確認";
            var confirmState =  pri + "已確認";
              
            if(pri.includes("組長"))
            {
                confirmName =  "組長確認";
                confirmState = "組長已確認";
            }
            uictrl.setValue(name);    
            if(saveFlag){
              utils.modifyTableItem(table, key, {[key]:id, [confirmName]:name, "確認狀態": confirmState});
            }
            db.setData("確認狀態", confirmState); 
            xui.alert("已確認!");
            return true;
          }
          else
          {
            xui.alert("請 '"+ pri + "' 確認!");
            return false;
          }
        }
    },
    installConfirmNameButtonOnClick: function(mod){
        var dialog = mod.dialog;
        var nodes = dialog.getChildren(true,true).get();
        var cb = function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var name = uictrl.getValue(); 
            if(name == "")
              uictrl.setValue(LoginUser.DisplayName);
            if(name == LoginUser.DisplayName)
              uictrl.setValue("");  
        }
        mod._confirm_name_onclick = cb;
        
        var cbname = "_confirm_name_onclick";
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();;
            if(n.KEY == 'xui.UI.ComboInput')
            {
                if(n.getType() == "button" || n.getType() == "getter")
                {
                  var c = n.getDataField()[0];  
                  if(c == 'A' || c == 'B' || c== 'C' || c == 'D' || c == 'E')
                      n.onClick(cbname);
                }
            }
        }       
    },
    getCloseDate: function(){
      if(typeof CloseDate == "undefined")
      {
        var d = utils.getItemValue("erp.MIS_AccountingCloseDate","Start", 1, "CloseDate");
        if(d != "")
          CloseDate = d;
        else 
          CloseDate = 26;  
      }
      var n = new Date();
      var d = n.getDate();
      if(d >= CloseDate)  
      {
          n.setMonth(n.getMonth()+1);
          n.setDate(1);
      }
      else
          n.setDate(CloseDate);
            
      return xui.Date.format(n,"yyyy-mm-dd");
    },
    isEmpty: function(value){
        if(value == null || value == "")
            return true;
        else 
            return false;
    },
    getDataFromUI : function(db, check=true){
        if(check)
        {    
            if(db.updateDataFromUI() == false)
                return "";
        }
        else 
        {
            db.updateDataFromUI(true,false,false,null,null,true); //ignore alert
            return db.getData();
        }            
    },
    setContainerDisabled:function(block, flag){
        var nodes = block.getChildren(true,true).get();
        for(var i=0; i<nodes.length; i++)
        {
          let n = nodes[i].boxing();
          if(typeof n.setDisabled != "undefined")  
            n.setDisabled(flag);           
        }
    },
    popUp:function(menu, uictrl){
        if(uictrl.n0.key == "xui.UI.ComboInput")
            menu.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-BOX"]);
        else 
            menu.popUp(uictrl);
    },
    showTableCombo: function(uictrl, field=null, mod=null){
                if(mod == null)
                   mod = uictrl.getHost();
                var db = mod.getDataBinders();
                if(db.length > 0)
                {
                   db = db[0].boxing();
                   db.updateDataFromUI(true,false,false,null,null,true); //ignore alert
                   var comboDatas = db.getData(); 
                }
                else 
                    var comboDatas = {};
                var prop = mod.properties;
                var tableName  = mod.key;
                if(typeof tableName == "undefined")  //get from db tagvar
                  tableName = "通用";
                if(field == null)
                  field  = uictrl.getDataField();
                var condition = "";
                //if(uictrl.getType == "popbox")
                //  condition = `[${prop.keyid}] LIKE '%${uictrl.getUIValue()}%'`;
                var prop = utils.getTableFieldComboConfig(tableName, field);
                condition = utils.formatString(prop.condition, comboDatas);
                  xui.newModule("App.DataListForm", function(err,module){
                    var tableName =  prop.tableName;
                    if(tableName.includes("SELECT "))  
                      tableName = utils.formatString(tableName, comboDatas);  //process SELECT
                      
                    module.setProperties("tableName", tableName);
                    module.setProperties("keyid", prop.keyid);
                    module.setProperties("displayFields", prop.displayFields);
                    module.setProperties("uictrl", uictrl);
                    module.setProperties("fieldWidths", prop.displayWidths);
                    module.setProperties("fieldCaptions", prop.displayCaptions);
                    module.setProperties("condition", condition);
                    module.setProperties("orderby", prop.orderby);
                    //module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-INPUT"]);
                    //ComboBoxCache[cachetitle] = module;
                    //module.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-BOX"]);
                     utils.popUp(module, uictrl); 
                  });           
        },
    updateWorkSheetRepairState:function(repairid, state){
        utils.modifyTableItem("維修站總資料表", "登錄編號", {"登錄編號":repairid, "維修狀態":state});
    },
    toggleFullScreen:function(ename) {
        var element = document.querySelector(ename);

        element.requestFullscreen()
        .then(function() {
    // element has entered fullscreen mode successfully
        })
        .catch(function(error) {
            // element could not enter fullscreen mode
            // error message
            console.log(error.message);
        });
    },
    disableAutoTips: function(mod){
        if(mod.dialog)
          var nodes = mod.dialog.getChildren(true,true).get();
        else if(mod.form)
          var nodes = mod.form.getChildren(true,true).get();
        else 
          return;  
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();
            if(typeof n.setAutoTips != "undefined")
                n.setAutoTips(false);
        }        
    },
    getMinutes: function(t){
        var ts = t.split(":");
        if(ts.length >= 2)
        {
          var m = Number(ts[0])*60 + Number(ts[1]);
          return m;
        }
        else 
            return 0;
    },
    calcMinute: function(t1, t2, dst){
            var t1 = t1.getUIValue();
            var t2 = t2.getUIValue();
            if(t1 == "" || t2 == "")
                return;
            var end = utils.getMinutes(t1);
            var start = utils.getMinutes(t2);
            var diff = (end -start);
            dst.setValue(diff);
    },    
    getEmployeeData: function(emplID){
        return utils.getItemValue("crm.Employee","EmplID", emplID);
    },
    showPickingSheetMenu: function(uictrl, rno){
            var ns = uictrl.getModule(), items = [{"id" : "new", "caption" : "新增委託單"}];
            var data = utils.getItemValue("erp.領料報工表單查詢","登錄編號",rno); 
            if(data == "")
            {
              utils.alert("ERP查無此登錄編號: "+ rno);
              return;  
            }
            if(typeof ns.pickingMenu == "undefined")
            {
              ns._pickingmenu_onmenuselected = function(profile, item, src){
                  let ns = this;
                if(item.id == "new")
                {
                  var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rno);
                  if(data != "")
                  {   
                    var item = {"維修單別":"B200","維修站別":"902","產品品號":data["In P/N"], "產品品名":data["型號(EX form)"],"產品序號":data["In S/N"],"單據日期":utils.today(),
                        "登錄編號":rno, "Creator": LoginUser.EmplID,"型號":data["In Model"]};
                    var data2 = utils.getItemValue("erp.領料報工表單查詢","登錄編號",rno); 
                    if(data2 != "")
                    {
                      item["客戶簡稱"] = data2["客戶簡稱"];      
                      item["客戶代號"] = data2["客戶代號"];      
                      item["發票地址一"] = data2["發票地址一"];      
                      item["發票地址二"] = data2["發票地址二"];      
                      item["課稅別"] = data2["課稅別"];      
                      item["營業稅率"] = data2["營業稅率"];      
                      item["叫修單別"] = data2["叫修單別"];      
                      item["叫修單號"] = data2["叫修單號"];      
                    }
                    utils.showDataPage("ErpPickingForm", item, "new");
                  }                   
                }
                else
                {
                  var data = utils.getItemValue("領料報工單","領料報工單號", item.id);  
                  utils.showDataPage("ErpPickingForm", data, "edit");
                }                  
              }  
              var menu =  xui.create("xui.UI.PopMenu").setHost(ns,"pickingMenu").onMenuSelected("_pickingmenu_onmenuselected");
              ns.AddComponents(menu);
            }
            var condition = `[登錄編號] = '${rno}'`; 
            var cb = function(datas){
               var rows = datas.rows;   
               for(var i=0; i<rows.length; i++)
               {
                 if(rows[i])
                 {
                   var r = rows[i];
                   let empl = utils.getEmployeeData(r[1]);
                   let caption = r[0] + "  " + empl.DisplayName;
                   items.push({"id" : r[0], "caption" : caption}); 
                 }
               }
               ns.pickingMenu.setItems(items);
               ns.pickingMenu.popUp(uictrl); 
            };
            utils.getTableItems({"tableName":"領料報工單","condition":condition, "fields":"領料報工單號,Creator"}, cb);
    },
    showTestFormMenu: function(uictrl, rno){
            var ns = uictrl.getModule(), items = [{"id" : "new", "caption" : "新增Test Form"}];
            if(typeof ns.testFormMenu == "undefined")
            {
              ns._testformmenu_onmenuselected = function(profile, item, src){
                  let ns = this;
                if(item.id == "new")
                {
                  var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rno);
                  if(data != "")
                  {   
                    var item = {"Pump":data["In Model"],"P/N":data["In P/N"], "S/N":data["型號(EX form)"],"S/N":data["In S/N"],"TestDate":utils.today(),
                        "登錄編號":rno};
                    utils.showDataPage("CryopumpTestSubForm", item, "new");
                  }                   
                }
                else
                {
                  var data = utils.getItemValue("CryopumpTestForm","rowid", item.id);  
                  utils.showDataPage("CryopumpTestSubForm", data, "edit");
                }                  
              }  
              var menu =  xui.create("xui.UI.PopMenu").setHost(ns,"testFormMenu").onMenuSelected("_testformmenu_onmenuselected");
              ns.AddComponents(menu);
            }
            var condition = `[登錄編號] = '${rno}'`; 
            var cb = function(datas){
               var rows = datas.rows;   
               for(var i=0; i<rows.length; i++)
               {
                 if(rows[i])
                 {
                   var r = rows[i];
                   let caption = (rows.length-i) + ": " + r[1];
                   items.push({"id" : r[0], "caption" : caption}); 
                 }
               }
               ns.testFormMenu.setItems(items);
               ns.testFormMenu.popUp(uictrl); 
            };
            utils.getTableItems({"tableName":"CryopumpTestForm","condition":condition, "fields":"rowid,Fail 原因", "orderby":"rowid DESC"}, cb);
    },
    nextStation: function(uictrl){
            var ns = uictrl.getModule(), items = [
    {
        "id" : "拆解站",
        "caption" : "拆解站"
    },
    {
        "id" : "Vacuum side",
        "caption" : "Vacuum站"
    },
    {
        "id" : "Helium side",
        "caption" : "Helium站"
    },
    {
        "id" : "Compressor",
        "caption" : "Compressor站"
    },
    {
        "id" : "Crosshead",
        "caption" : "Crosshead站"
    },
    {
        "id" : "Module",
        "caption" : "Module站"
    },
    {
        "id" : "測試站",
        "caption" : "測試站"
    }
];
            var rno = ns.repairNo.getUIValue();
            if(typeof ns.nextMenu == "undefined")
            {
              ns._nextmenu_onmenuselected = function(profile, item, src){
                  let ns = this;
                  utils.modifyTableItem("維修站總資料表","登錄編號",{"登錄編號":rno, "維修站名": item.id});
                  utils.alert("維修工單:" + rno + "已放入 " + item.caption);
              }  
              var menu =  xui.create("xui.UI.PopMenu").setHost(ns,"nextMenu").onMenuSelected("_nextmenu_onmenuselected");
              ns.AddComponents(menu);
            }
            ns.nextMenu.setItems(items);
            ns.nextMenu.updateItem(SiteName, {"hidden":true});
            ns.nextMenu.popUp(uictrl);
    },
    newCryoPumpTestForm: function(rno){
            var items = utils.getItemValue("CryopumpTestForm","登錄編號",ns.repairNo.getUIValue(),"*",true);
            if(items == "")
            {
              var rdata = utils.getItemValue("CTI Control Number總資料庫","登錄編號", rno);
              if(rdata == "")
              {
                utils.alert("查無此登錄編號!");
                return "";
              }
              var ndata = {"登錄編號":rno, "Pump":rdata["In Model"], "P/N":rdata["In P/N"], "S/N":rdata["In S/N"], "TestDate":utils.today(), "item":1};
              var data = utils.insertTableItem("CryopumpTestForm", ndata);
                    
            }
            else
            {    
              var last = items[items.length-1];
              var datas = {"登錄編號":last["登錄編號"], "item": Number(last["item"])+1, "Pump":last["Pump"], "P/N":last["P/N"], "S/N":last["S/N"], "Type":last["Type"], "Ch":last["Ch"],
                         "Pump#2":last["Pump#2"],"Pump#3":last["Pump#3"]};
              var data = utils.insertTableItem("CryopumpTestForm",datas);
            }
        
            return data;
    },
    pad: function(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    },
    createPdfReport: async function(formUrl, data, fileName){
              const { PDFDocument,StandardFonts } = PDFLib
              const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
              // Load a PDF with form fields
              const pdfDoc = await PDFDocument.load(formPdfBytes)
              // Get the form containing all the fields
              const form = pdfDoc.getForm()

          // Get all fields in the PDF by their names
              var keys = Object.keys(data);
              for(var i=0; i<keys.length; i++)
              {
                var name = keys[i];
                try{    
                  var field = form.getTextField(name);
                  if(field)
                  {
                    field.setText(data[name]);
                    field.enableReadOnly();
                    
                  }
                }
                catch(e){
                }
              }
              // Serialize the PDFDocument to bytes (a Uint8Array)
              const pdfBytes = await pdfDoc.save()

              // Trigger the browser to download the PDF document
              download(pdfBytes, fileName, "application/pdf");
    },
    createCryopumpTestReport: function(rno){
            var data = utils.getItemValue("Cryopump維修工單","登錄編號", rno)
            if(data != "")
            {
              var fname = rno +"_CryopumpTestReport.pdf";   
              this.createPdfReport("./TestData.pdf", data, fname);
            }

    },
    createCompressorTestReport: function(rno){
            var data = utils.getItemValue("Compressor維修工單","登錄編號", rno)
            if(data != "")
            {
              var fname = rno +"_CompressorTestReport.pdf";   
              this.createPdfReport("./CompressorTestData.pdf", data, fname);
            }

    },
    uploadErpDatas:function(edata){
        var item = JSON.stringify(edata);
        var data = this.sendDataCmd({"cmd":"uploadErpDatas", "item": item});
        return data;
    }
    
 };