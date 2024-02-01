/*20230404*/
ConditionDatas = {};
DataPageTheme = "";
DataPageThemeIndex = 0;
DataPageThemeNames = ["army","webflat", "pink", "classic","vista","red"];

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
                                if(value && value == ".0000")
                                    value = "0";
                                else if(value && value.endsWith(".0000"))
                                    value = value.slice(0,-2);
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
                var url = "php/login.php";
                if(typeof DebugMode != "undefined")
                    url = "http://127.0.0.1/RepairSide/php/login.php";
                xui.Ajax(url,hash,function(rsp){
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
    fixDateIssue: function(rows){
        for(var i=0; i<rows.length; i++)
        {
          var r = rows[i];
          for(var j=0; j<r.length; j++)
          {
            if(typeof r[j] == "string" && r[j].includes("1900-01-01"))
                r[j] = null;
          }
        }
    },
    sendDataCmd : function(hash, onFinish, wait){
                var ns = this;
                var wait = true;
                if(onFinish)
                    wait = false;
                if(ShowDataCommand === true)
                    console.log(hash);
                var result = null;
                var url = "php/data.php";
                if(typeof DebugMode != "undefined")
                    url = "http://127.0.0.1/RepairSide/php/data.php";
                xui.Ajax(url,hash,function(rsp){
                    var data =rsp;
                    if(!data){    alert("no data");
                        result = {"columns":[], "result":"ERROR", "rows":[], "totalRowCount":0};
                    }
                    else if(typeof data == "string") {
                        console.log(data);
                        result = {"columns":[], "result":"ERROR", "rows":[], "totalRowCount":0};
                    }//alert("ERROR");
                    else
                        result = data;
                    //ns.fixDateIssue(data.rows);
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
        
        return utils.sendDataCmd(hash,  onFinish);
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
    getItemValueList: function(table, key, keyValue, orderby = ""){
        return utils.getItemValue(table, key, keyValue,"*", true, orderby);
    },
    getItemValue: function(table, key, keyValue,  getField="*", allRows = false, orderby = "")
    {
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
        if(orderby != "")
            query += " ORDER BY " + orderby;
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
    cloneObject: function(obj){
        return JSON.parse(JSON.stringify(obj));
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
        return utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    modifyTableItem2 : function(table, key, keyValue, datas, onFinish,  wait){
        var data = utils.removeInvalidFields(table, datas);
        key = utils.removeBracket(key);
        var hash={"cmd":"modifyTableItem2","table":table, "key":key,"keyValue":keyValue, "item":data};
        return utils.sendDataCmd(hash,  onFinish, wait);
    }, 
    removeInvalidFields: function(table, datas, action = ""){
        var data = utils.cloneObject(datas);
        if(data.ETD)
          data.ETS = data.ETD;
        var dateFields = utils.getDateFieldNames(table);
        var fields = utils.getTableFieldNames(table);
        var keys = Object.keys(data);     
        for(let i=0; i<keys.length; i++)
        {
           var k = keys[i];    
           if(!fields.includes(k))
              delete data[k];
           else if(dateFields.includes(k))
           {
               var v = data[k];
               if(typeof v == "string" && (v == "" || v.includes("1900-01-01")))
                   data[k] = null;
           }
                    
        }
        if(action == "insert")
        {
          delete data["rowid"];
          delete data["CreateTime"];
          if(table == "CTI Control Number總資料庫")
          {
            delete data["維修報告"];
            //delete data["CN#"];
            //delete data["登錄編號"];  
          }
        }
        return data;
    },
    insertTableItem : function(table, datas){
        var data = utils.removeInvalidFields(table, datas, "insert");
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
    getRandomDbName:function(){
        return "db999" + Math.floor(Math.random() * 99999);
    },
    changeDbName: function(db){
        db.setName(this.getRandomDbName());
    },
    showDataPage : function(pagename, item, mode = "edit", onload,  ondestroy){
        if(item)
          this.fixDate1900(item);
        var cb2 = function(mod){
            //if(typeof ChangeDbName != "undefined" && ChangeDbName)
            //    utils.changeDbName(mod);
            //ChangeDbName = false; //auto reset
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
    checkRepairStatus: function(datas){
        var status = datas["維修狀態"];
        if(["完工","不修","簡修完工"].includes(status))
        {
            datas["完工確認"] = LoginUser.DisplayName;
        }
    },
    fixDate1900:function(datas){
        var keys = Object.keys(datas);
        for(var i=0; i<keys.length; i++)
        {
            var k = keys[i];
            if(k.includes("Date") || k.includes("Time") || k.includes("日期") || k.includes("時間")|| k.includes("保固期"))
            {
                var d= datas[k];
                if(typeof d == "string" && d!=null && (d == "" || d.includes("1900-01-01")))
                  datas[k] = null;
            }
        }
    },
    saveFormSilent: function(mod, ignoreFields, extDatas, onFinish, db){
        SaveFormSilent = true;
        utils.saveForm(mod, ignoreFields, extDatas, onFinish, db);
        SaveFormSilent = false;
    },
    saveForm: function(mod, ignoreFields, extDatas, onFinish, db){
            if(mod.inSaveFormFlag === true)
                return;
            mod.inSaveFormFlag = true;
            var prop = mod.properties;
            if(typeof db == "undefined")
            {
              db = mod.getDataBinders();
              if(db.length > 0)
                db = db[0].boxing();
              else
              {
                mod.inSaveFormFlag = false;
                return false;
              }
            }
                
            if(db && db.updateDataFromUI() == false)
            {
                mod.inSaveFormFlag = false;
                return false;
            }
            var newcb = function(item){
                  db.setData(item).updateDataToUI();
                  prop.mode = prop.mode.replaceAll("new","edit");
                  mod.saveBtn.setCaption("儲存");    
                  if(onFinish)
                    onFinish(item);  
            }
            var datas = db.getData();
            //if(mod.prevRepairStatus && ["完工","不修","簡修完工"].includes(mod.prevRepairStatus) && (!LoginUser.Privilege.includes("組長") && !LoginUser.Privilege.includes("經理")))
            if(mod.prevRepairStatus && ["完工","不修"].includes(mod.prevRepairStatus) && (!LoginUser.Privilege.includes("組長") && !LoginUser.Privilege.includes("經理")))
            {
                utils.alert("組長才能修改完工工單");
                return;
            }
            if(mod.prevRepairStatus && mod.prevRepairStatus != datas["維修狀態"])
                utils.checkRepairStatus(datas);
                    
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
 
            if(extDatas)
            {    
              let keys = Object.keys(extDatas);     
              for(let i=0; i<keys.length; i++)
              {
                let key = keys[i];  
                datas[key] = extDatas[key];
              }
            }
        
            //fix 1900-01-01 issue
            var keys = Object.keys(datas);
            for(var i=0; i<keys.length; i++)
            {
              var k = keys[i];  
              if(typeof datas[k] == "string" && datas[k].includes("1900-01-01"))
                  datas[k] = null;
            }
            datas["修改人員"] = LoginUser.DisplayName;
            datas["修改時間"] = utils.now();
            if(prop.mode.includes("new"))
            {
              var data = utils.insertTableItem(prop.tableName,  datas); //wait 
              mod.inSaveFormFlag = false;
              if(typeof data == "undefined")
              {
                   utils.alert("新增錯誤!");
                   return false;
              }
              else        
                newcb(data);
            }
            else
            {
               var data = utils.modifyTableItem(prop.tableName, prop.keyid, datas); //wait
               if(data.result == "ERROR")
               {
                   utils.alert("儲存錯誤!");
                   mod.inSaveFormFlag = false;
                   return false;
               }
               //set flag before onFinish
               mod.inSaveFormFlag = false;
               if(onFinish)
                 onFinish();
               if(typeof SaveFormSilent != 'undefined' && SaveFormSilent)
               {
                   return true;
               }
               
               //if(AppName == "BU3")        
               //  mod.dialog.close();
               //else 
                 utils.alert("儲存完成!");  
            }    
           mod.inSaveFormFlag = false;
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
                            {
                                dataFromUI[i] = xui.Date.format(o,"yyyy-mm-dd hh:nn:ss");
                                if(dataFromUI[i].includes("1900-01-01"))
                                    dataFromUI[i] = null;
                            }
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
        var modprop = mod.properties;
        var root = mod.getRoot();
        console.log("root:", root);
        if(mod.dialog)
           var nodes = mod.dialog.getChildren(true,true).get();
        else if(mod.form)
           var nodes = mod.form.getChildren(true,true).get();
        else if(mod.mainPage)
           var nodes = mod.mainPage.getChildren(true,true).get();
        var formTableName = mod.key;   
        var showCombo = function(uictrl){
                var dbs = mod.getDataBinders();
                var db = null;
                if(dbs.length > 0)
                {
/*                   if(typeof mod.db == "string" && mod.db != "")
                   {
                       for(var i=0; i<db.length; i++)
                       {
                         if(db[i].alias == mod.db)  
                         {
                           db = db[i].boxing();
                           break;
                         }                           
                       }
                   }
                   else
                     db = db[0].boxing();
*/
                    db = dbs[0].boxing();
                    for(var i=0; i<dbs.length; i++)
                    {
                      if(dbs[i].alias == uictrl.getDataBinder())  
                      {
                        db = dbs[i].boxing();
                        break;
                      }                           
                    }
                       
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
                if(uictrl.beforeComboPop0)
                {
                  if(ns[uictrl.beforeComboPop0](profile) == false)
                      return false;
                }
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
       // mod.tableBox_beforecombopop2 = popcb2;
        for(var i=0; i< nodes.length; i++)
        {
            let n = nodes[i].boxing();
            if(n.getDataField)
            {
              var field = n.getDataField();
              var maxlen = -1;
              var fc = utils.getTableFieldConfig(modprop.tableName, field);  
              if(fc)
                  maxlen = fc.CHARACTER_MAXIMUM_LENGTH;
              if(n.KEY == 'xui.UI.ComboInput')
              {
                
                if(n.getType() == "cmdbox")
                {
                   n.beforeComboPop0 = n.n0.beforeComboPop;  //string
                   n.beforeComboPop("tableBox_beforecombopop");
                }
                else if(n.getType() == "popbox")
                {
                   //console.log("popbo:",n.getDataField());    
                   n.beforeComboPop0 = n.n0.beforeComboPop;  //string
                   n.beforeComboPop("tableBox_beforecombopop");
                }
              }
              if(n.setMaxlength && maxlen >= 0)
                n.setMaxlength(maxlen);
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
    getDateFieldNames: function(table){
        var fields = [];
        var cols = utils.getTableConfig(table);
        for(var i=0; i<cols.length; i++)
        {
            if(cols[i].DATA_TYPE.includes("datetime"))
              fields.push(cols[i].COLUMN_NAME);
        }
        return fields;
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
    askNumber: function(caption, cb){
        var cb2 = function(data){
            cb(data.Number);
        }
        utils.askData({"Number": caption},cb2);
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
                   s += 'xui.create("xui.UI.ComboInput").setType("input")'; 
                }
                else if(type.includes("varbinary")){
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
                   s += 'xui.create("xui.UI.ComboInput").setType("input")'; 
                }
                else {
                   input = xui.create("xui.UI.Input");
                   s += 'xui.create("xui.UI.ComboInput").setType("input")'; 
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
    addHours: function(d, n){
            if(d != null)
            {
              d.setTime(d.getTime() + n * 60 * 60 * 1000);
            }
            return d;
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
        JsBarcode(canvas, text, {format: "CODE39",width:1, height:30, displayValue:false});
        return canvas.toDataURL("image/png");
    },
    textToBase64QRcode: function (text){
        var c = document.createElement("canvas");
		let canvas = bwipjs.toCanvas(c, {
			bcid: "qrcode", // Barcode type
			text: text, // Text to encode
	//		scale: 3, // 3x scaling factor
			height: 12, // Bar height, in millimeters
	//		padding: 5,
    // rotate: 'R',
			includetext: false, // Show human-readable text
		});
        return canvas.toDataURL("image/png");
    },
    showServiceRecordForm: function(item, mode){
                  var loadcb = function(mod){
                      mod.sdb.setData(item);
                      mod.sdb.updateDataToUI();
                  }
                  utils.showDataPage("CrmEditForm",null, mode, loadcb);  
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
    showCryopumpEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Cryopump維修工單","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CryopumpEditForm", item, "edit");      

    },
    showControllerEditForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("3phControler維修工單","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("3phControlerEditForm", item, "edit");      

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
    showCrossheadEditFormXH: function(xh,cb1,cb2){
                    if(xh == "")
                    {
                      xui.alert("請先指定XH代碼!");
                      return;
                    }
                    var item = utils.getItemValue("Crosshead維修工單","Crosshead編號",xh,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CrossheadEditForm", item, "edit", cb1, cb2);      

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
    showModuleTestForm: function(id, cb1, cb2){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("Module功能測試表","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("ModuleTestForm", item, "edit", cb1, cb2);      

    },    
    showCryopumpTestForm: function(id){
                    if(id == "")
                    {
                      xui.alert("請先指定登錄編號!");
                      return;
                    }
                    var item = utils.getItemValue("CryopumpTestForm","登錄編號",id,"*");
                    if(item == "")
                      utils.alert("查無表單!");        
                    else
                      utils.showDataPage("CryopumpTestSubForm", item, "edit");      

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
                      utils.showDataPage("RepairOptionForm",{"登錄編號":id,"Model":data["Pump"],"S/N":data["Pump S/N"], "BenchName":LoginUser.DisplayName,"CreateDate":utils.today(), "公司名稱":data["客戶名稱"]},
                                        "new");        
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
    showWorkSheet: function(rno, readonly = false){
                  var loadcb = function(mod){
                      if(readonly)
                          mod.saveBtn.setDisabled(true);
                  };                      
                  var item =utils.getItemValue("Cryopump維修工單","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("CryopumpEditForm", item, "edit", loadcb);
                      return;
                  }
                  item =utils.getItemValue("Crosshead維修工單","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("CrossheadEditForm", item, "edit", loadcb);
                      return;
                  }
                  item =utils.getItemValue("3phControler維修工單","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("3phControlerEditForm", item, "edit", loadcb);
                      return;
                  }
                  item =utils.getItemValue("CylinderHeater維修工單","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("CylinderHeaterEditForm", item, "edit", loadcb);
                      return;
                  }
                  item =utils.getItemValue("Compressor維修工單","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("CompressorEditForm", item, "edit", loadcb);
                      return;
                  }
                  item =utils.getItemValue("Module功能測試表","登錄編號",rno);
                  if(item != "")
                  {
                      utils.showDataPage("ModuleTestForm", item, "edit", loadcb);
                      return;
                  }   
  },        
    showWorkSheet2: function(tableName, rno, readonly = false){
                  var loadcb = function(mod){
                      if(readonly)
                          mod.saveBtn.setDisabled(true);
                  };
				  var formMap = {"Cryopump維修工單":"CryopumpEditForm", "Crosshead維修工單":"CrossheadEditForm","3phControler維修工單":"3phControlerEditForm","CylinderHeater維修工單":"CylinderHeaterEditForm",
								"Compressor維修工單":"CompressorEditForm","Module功能測試表":"ModuleTestForm"};	
                  var item =utils.getItemValue(tableName,"登錄編號",rno);
                  if(item != "")
                  {
					  if(item["維修站名"] != SiteName || utils.repairFinishStates().includes(item["維修狀態"]))
					  {
						  var s = `登錄編號: ${item["登錄編號"]}<br>所在站名: ${item["維修站名"]}<br>維修狀態: ${item["維修狀態"]}<br>`
						  utils.alert(s,"物件狀態");
						  return;
					  }
					  else
                        utils.showDataPage(formMap[tableName], item, "edit", loadcb);
                      return;
                  }
				  else
					  utils.alert("查無此工單!  " + rno);
     
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
        var dbs = mod.getDataBinders();
        if(dbs.length > 0)
           var db = dbs[0].boxing();
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
        for(var i=0;i<dbs.length;i++)
            utils.changeDbName(dbs[i].boxing());
        utils.showDataPage(pageName, item, "readonly", cb1, cb2);
        
    },
    updateConfirmBtnCaption(mod, uictrl, caption = ""){
            var db = mod.getDataBinders();
            if(db.length > 0)
               db = db[0].boxing();
            else
               return; 
            var data = db.getData();
            var confirm = data["確認狀態"];
            if(typeof confirm == "undefined" || confirm == null)
                confirm = "";
            if(["待組長確認","待經理確認","待秘書確認"].includes(confirm))
                  uictrl.setCaption(confirm);
            else if(["通知組長確認","通知經理確認","通知秘書確認"].includes(confirm))
                  uictrl.setCaption(confirm);
            else if(confirm.includes("秘書已確認"))
                uictrl.setCaption("秘書已確認");
            else if(confirm == "組長已確認")
            {
                if(data["秘書確認"] === "") //有秘書確認欄位,並且為空
                    uictrl.setCaption("通知秘書確認");
                else
                    uictrl.setCaption("組長已確認");
            }
            else if(caption != "")
                uictrl.setCaption(caption);
            else if(confirm.includes("已確認"))
                uictrl.setCaption(confirm);
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
            else if(confirm == "通知經理確認")
            {
              utils.modifyTableItem(table, key, {[key]:id, "確認狀態":"待經理確認"});  
              db.setData("確認狀態","待經理確認");   
              xui.alert("已通知經理確認!");        
              uictrl.setCaption("待經理確認");
            }
            else if(confirm == "秘書已確認<br>取消通知!")
            {
              utils.modifyTableItem(table,key,{[key]:id, "確認狀態":"秘書已確認"});  
              db.setData("確認狀態","秘書已確認");   
              xui.alert("已取消通知!");        
              uictrl.setCaption("秘書已確認");
            }               
    },
    signNameClick: function(datectrl, uictrl, pri, saveFlag=false){
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
    confirmNameClick: function(mod, uictrl, pri, finishState = "", saveFlag=false){
        var prop = mod.properties;
        if(prop.mode.includes("new"))
        {
            utils.alert("請先新增表單!");
            return;
        }
        if(uictrl.getUIValue() !== "")
        {
            utils.alert("已確認過了!");
            return;
        }
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
        var confirmBtn = null;
        if(mod.confirmBtn)
            confirmBtn = mod.confirmBtn;
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
            if(pri.includes("經理"))
            {
                confirmName =  "經理確認";
                confirmState = "經理已確認";
            }
            if(finishState != "")
            {
               confirmState = finishState;
               if(finishState == "待組長確認")
                   utils.alert("已通知組長!");
               if(finishState == "待秘書確認")
                   utils.alert("已通知秘書!");
               if(finishState == "待經理確認")
                   utils.alert("已通知經理!");
            }               
            if(confirmBtn)
               confirmBtn.setCaption(confirmState);  
            uictrl.setValue(name);    
            db.setData(uictrl.getDataField(), name);
            if(saveFlag){
              utils.modifyTableItem(table, key, {[key]:id, [confirmName]:name, "確認狀態": confirmState});
            }
            db.setData("確認狀態", confirmState); 
            if(finishState == "")
              utils.alert("已確認!");
            return true;
          }
          else
          {
              utils.alert("請 '"+ pri + "' 確認!");
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
    
    showCrossheadPickingSheetMenu: function(uictrl, xhno, model = ""){
            var ns = uictrl.getModule(), items = [{"id" : "new", "caption" : "新增領料報工單"}];
            ns.model = model;
            /*
            var data = utils.getItemValue("erp.領料報工表單查詢","登錄編號",rno); 
            if(data == "")
            {
              utils.alert("ERP查無此登錄編號: "+ rno);
              return;  
            }
            */
            if(typeof ns.pickingMenu == "undefined")
            {
              ns._pickingmenu_onmenuselected = function(profile, item, src){
                  let ns = this;
                var model = ns.model;  
                if(item.id == "new")
                {
                  var data = utils.getItemValue("Crosshead維修工單","Crosshead編號",xhno);
                  if(data != "")
                  {   
                    if(model == "")
                        model = data["Model"];

                    var item = {"型號":model,"產品品號":"SVC-04","客戶代號":"190026","客戶簡稱":"佳霖","發票地址一":"新竹縣竹北市泰和路21號","課稅別":2, "營業稅率":0.05,
                                "維修單別":"B201","維修站別":"902","維修部門":"902","單據日期":utils.getCloseDate(),"Crosshead編號":xhno};

                    utils.showDataPage("ErpPickingForm", item, "newFactory");
                  }                   
                }
                else
                {
                  var data = utils.getItemValue("領料報工單","領料報工單號", item.id);  
                  utils.showDataPage("ErpPickingForm", data, "editFactory");
                }                  
              }  
              var menu =  xui.create("xui.UI.PopMenu").setHost(ns,"pickingMenu").onMenuSelected("_pickingmenu_onmenuselected");
              ns.AddComponents(menu);
            }
            var condition = `[Crosshead編號] = '${xhno}'`; 
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
    showPickingSheetMenu: function(uictrl, rno, model = ""){
            var ns = uictrl.getModule(), items = [{"id" : "new", "caption" : "新增領料報工單"}];
            ns.model = model;
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
                var model = ns.model;  
                if(item.id == "new")
                {
                  var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rno);
                  if(data != "")
                  {   
                    if(model == "")
                        model = data["In Model"];
                    var pn = data["In P/N"];
                    var sn = data["In S/N"];
                    if(data["變更後型號"] != "")
                    {
                        model = data["變更後型號"];
                        pn = data["變更後P/N"];
                        sn = data["變更後S/N"];
                    }
                    var item = {"維修單別":"B200","維修部門":"902","維修站別":"902","產品品號":pn, "產品品名":data["型號(EX form)"],"產品序號": sn,"單據日期":utils.getCloseDate(),
                        "登錄編號":rno, "Creator": LoginUser.EmplID,"型號": model};
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
                  var data = utils.getItemValue("Cryopump維修工單","登錄編號",rno);
                  if(data != "")
                  {   
                    var item = {"Pump":data["Pump"],"P/N":data["Pump P/N"], "S/N":data["Pump S/N"],"TestDate":utils.today(),
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
                   var postfix = r[1];
                   if(r[2] == 1)
                       postfix = "維修前測試";
                       
                   let caption = (rows.length-i) + ": " + postfix;
                   items.push({"id" : r[0], "caption" : caption}); 
                 }
               }
               ns.testFormMenu.setItems(items);
               ns.testFormMenu.popUp(uictrl); 
            };
            utils.getTableItems({"tableName":"CryopumpTestForm","condition":condition, "fields":"rowid,Fail 原因,維修前測試", "orderby":"rowid DESC"}, cb);
    },
    updateNextStationStatus:function(tableName, site, rno){
        var state = "";
        if(site == "Vacuum side" || site == "Helium side")
            state = "組裝中";
        else if(site == "測試站")
            state = "測試中";
        else if(site == "拆解站")
            state = "待拆解";
        else
            state = "待維修";
            
        var data = {"登錄編號":rno,"維修狀態":state};
        utils.modifyTableItem(tableName, "登錄編號", data);

        var data = {"登錄編號":rno,"維修狀況":state};
        if(tableName == "Crosshead維修工單")
        {
            var item = utils.getItemValue("Crosshead主工單查詢","登錄編號", rno);
            if(item != "")
                utils.modifyTableItem("CTI Control Number總資料庫","登錄編號",data);
        }
        if(tableName == "Module功能測試表")
        {
            var item = utils.getItemValue("Module主工單查詢","登錄編號", rno);
            if(item != "")
                utils.modifyTableItem("CTI Control Number總資料庫","登錄編號",data);
        }
        else
                utils.modifyTableItem("CTI Control Number總資料庫","登錄編號",data);
    },
    nextStation: function(uictrl, sites){
            var ns = uictrl.getModule(), items = [];
      if(ns.prevRepairStatus && ["完工","不修","簡修完工"].includes(ns.prevRepairStatus))
      {
          utils.alert("完工狀態,無法過站!");
          return;
      }          
      for(var i=0; i<sites.length; i++)
      {
        var s = sites[i];
        if(s == SiteName)
            continue;
        if(s == "拆解站")
          items.push({"id" : "拆解站","caption" : "拆解站"});
        else if(s == "Vacuum side")
          items.push({"id" : "Vacuum side","caption" : "Vacuum站"});
        else if(s == "Helium side")
          items.push({"id" : "Helium side","caption" : "Helium"});
        //else if(s == "Compressor")
        //  items.push({"id" : "Compressor站","caption" : "Compressor站站"});
        else if(s == "Crosshead")
          items.push({"id" : "Crosshead","caption" : "Crosshead站"});
        else if(s == "Module")
          items.push({"id" : "Module","caption" : "Module站"});
        else if(s == "測試站")
          items.push({"id" : "測試站","caption" : "測試站"});
      }
      var tableName = ns.properties.tableName;
      
            var rno = ns.repairNo.getUIValue();
            if(typeof ns.nextMenu == "undefined")
            {
              ns._nextmenu_onmenuselected = function(profile, item, src){
                  let ns = this;
                  utils.modifyTableItem(tableName,"登錄編號",{"登錄編號":rno, "維修站名": item.id});
                  utils.updateNextStationStatus(tableName, item.id, rno);
                  utils.alert("維修工單:" + rno + "已放入 " + item.caption);
                  ns.destroy();
              }  
              var menu =  xui.create("xui.UI.PopMenu").setHost(ns,"nextMenu").onMenuSelected("_nextmenu_onmenuselected");
              ns.AddComponents(menu);
            }
            ns.nextMenu.setItems(items);
            ns.nextMenu.updateItem(SiteName, {"hidden":true});
            ns.nextMenu.popUp(uictrl);
    },
    newCryopumpTestForm: function(rno){
              var rdata = utils.getItemValue("CTI Control Number總資料庫","登錄編號", rno);
              if(rdata == "")
              {
                utils.alert("查無此登錄編號!");
                return "";
              }
              var ndata = {"登錄編號":rno, "Pump":rdata["In Model"], "P/N":rdata["In P/N"], "S/N":rdata["In S/N"], "TestDate":utils.today()};
              var data = utils.insertTableItem("CryopumpTestForm", ndata);
              return data;
    },
    pad: function(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    },
    createPdfReport: async function(formUrl, data, fileName){
            xui.Dom.busy(null, "產生報告中...");
              const { PDFDocument,StandardFonts } = PDFLib
              const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
              if(typeof PdfFontBytes == 'undefined')
                PdfFontBytes = await fetch("U30-L.ttf").then(res => res.arrayBuffer())
          // Load a PDF with form fields
              const pdfDoc = await PDFDocument.load(formPdfBytes)
          // Register the `fontkit` instance    
              pdfDoc.registerFontkit(fontkit)

      // Embed our custom font in the document
             const customFont = await pdfDoc.embedFont(PdfFontBytes)              // Get the form containing all the fields
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
                    field.updateAppearances(customFont);
                    field.enableReadOnly();
                  }
                  else
                    console.log(name, "not found!");  
                }
                catch(e){
                }
              }
                
             // Serialize the PDFDocument to bytes (a Uint8Array)
              const pdfBytes = await pdfDoc.save()
              xui.Dom.free();
              // Trigger the browser to download the PDF document
              download(pdfBytes, fileName, "application/pdf");
    },
    testForm2ReportData: function(data){
        data["D2#1"] = data["Supply"];
        data["D2#2"] = data["Return"];
        data["D3#1"] = data["Comp"];
        data["D3#2"] = data["Comp#2"];
        data["D3#3"] = data["Comp#3"];
        data["E18"] = data["Start Time"];
        data["E20"] = data["20k/17k"];
        data["E23"] = data["20k/17k#3"];
        data["E21"] = data["20k/17k#2"];
        data["E24"] = data["20k/17k#4"];
        data["E26"] = data["底溫1st"];
        data["E27"] = data["底溫2nd"];
        data["E29"] = data["65k#1"];
        data["E30"] = data["65k#2"];
        data["E31"] = data["65k#3"];
        data["E32"] = data["65k#4"];
        data["E41"] = data["Warm Up"];
        return data;
    },
    createCryopumpTestReport: function(rno, data = null){
            var rdata = utils.getItemValue("Cryopump維修工單","登錄編號", rno);
            if(rdata == "")
                return;
            if(data == null)
            {
                data  = rdata;
                data["AssyOK"] = data["Assy OK"];
            }
            else  //room temperature
            {
                data["E15"] = rdata["E15"];
                data["E16"] = rdata["E16"];
            }
            if(data != "")
            {
              data["D2#3"] = (Number(data["D2#1"]) - Number(data["D2#2"])).toString();   
              if(data["TestDate"])    
                data["TestDate"] = data["TestDate"].substring(0,10);
              else
                data["TestDate"] = "";  
              var fname = rno +"_CryopumpTestReport.pdf";   
              this.createPdfReport("./TestData.pdf", data, fname);
            }

    },
    createCompressorTestReport: function(rno){
            var data = utils.getItemValue("Compressor維修工單","登錄編號", rno)
            if(data != "")
            {
              if(data["日期C"])    
                data["日期C"] = data["日期C"].substring(0,10);
              var fname = rno +"_CompressorTestReport.pdf";   
              this.createPdfReport("./CompressorTestData.pdf", data, fname);
            }

    },
    uploadErpDatas:function(edata){
        var item = JSON.stringify(edata);
        var data = this.sendDataCmd({"cmd":"uploadErpDatas", "item": item});
        return data;
    },
    currencyString: function(num){
        return num.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                });
    },
    readRepairStatus:function(ns){
        var rno = ns.repairNo.getUIValue();
        var r = utils.getItemValue("CTI Control Number總資料庫","登錄編號", rno, "維修狀況");
        if(r == null)
            r = "";
        var uictrl = ns.repairStatus;
        if(uictrl)
          uictrl.setValue(r);
        return r;
    },
    writeRepairStatus:function(ns, status){
        
        if(typeof ns == "string")
            rno = ns;
        else
            rno = ns.repairNo.getUIValue();
        if(typeof status == "undefined")
          status = ns.repairStatus.getUIValue();
        
        if(typeof ns.prevRepairStatus != 'undefined')
        {
            if(ns.prevRepairStatus == status)
                return;
        }
        if(typeof ns.alias == "string" && ns.alias.includes("app_crossheadeditform"))
        {
            var item = utils.getItemValue("Crosshead主工單查詢","登錄編號",rno);
            if(item == "")
                return;
        }
        if(typeof ns.alias == "string" && ns.alias.includes("app_moduletestform"))
        {
            var item = utils.getItemValue("Module主工單查詢","登錄編號",rno);
            if(item == "")
                return;
        }
        var items = utils.getItemValueList("維修工單列表","登錄編號", rno);
        if(items != "")
        {    
          var writecn = false; 
          var data = {"登錄編號":rno,"維修狀態":status};
          if(items.length == 1)
          {
            var tableName = items[0]["維修工單"];
            if(tableName.includes("Controller"))
                tableName = "3phControler維修工單";
            if(tableName == "Crosshead維修工單")
            {
                var item = utils.getItemValue("Crosshead主工單查詢","登錄編號",rno);
                if(item != "")
                    writecn = true;
            }
            else if(tableName == "Module功能測試表")
            {
                var item = utils.getItemValue("Module主工單查詢","登錄編號",rno);
                if(item != "")
                    writecn = true;
            }
            else
                writecn = true;
          }
          else
          {
            tableName = "Cryopump維修工單";    
            writecn = true;
          }
          utils.modifyTableItem(tableName,"登錄編號", data);
          if(status == "入庫" && tableName == "Cryopump維修工單") //write Module and Crosshead
          {
            utils.modifyTableItem("Module功能測試表","登錄編號", data);
            item = utils.getItemValue("Cryopump維修工單","登錄編號",rno);
            if(item != "")
            {
              var data2 = {"Crosshead編號":item["Crosshead編號"], "維修狀態":status}
              utils.modifyTableItem("Crosshead維修工單","Crosshead編號", data2);
            }
          }
          
          if(writecn)
          {
              if(status.includes("完工") || status == "不修")
              {
//              data["Date Complete"] = utils.today();
                data["完工日期"] = utils.today();
              }                  
              data["維修狀況"] = status;
              utils.modifyTableItem("CTI Control Number總資料庫","登錄編號", data);
          }
       }
    },
    updateDataBinder: function(ns, data)
    {
        var dbs = ns.getDataBinders();
        for(var i=0; i<dbs.length; i++)
        {
            var db = dbs[i].boxing();
            var keys = Object.keys(data);
            for(var k=0; k<keys.length; k++)
              db.setData(keys[k], data[keys[k]]);    
        }
    },
    putInStorehouse:function(ns,tableName = ""){
        var rno = ns.repairNo.getUIValue();
        if(tableName == "")
          tableName = ns.properties.tableName;
        var data = {"登錄編號":rno, "維修站名": "已入庫", "維修狀態":"完工", "入庫時間":utils.now()};
        utils.modifyTableItem(tableName,"登錄編號", data);
        utils.updateDataBinder(ns, data);
    },
    isSubSheets:function(ns){
            var rno = ns.repairNo.getUIValue();
            var tableName = ns.properties.tableName;
            if(tableName == "Crosshead維修工單" || tableName == "Module功能測試表")
            {
                var items = utils.getItemValue("維修工單列表","登錄編號",rno, "*", true);
                if(items.length >= 2) //子工單,不須通知秘書
                    return true;
            }
            return false;
    },
    finishBtnClick: function(ns){
                var uictrl = ns.finishBtn;
                var prop = ns.properties, tableName = prop.tableName;
                if(uictrl.getCaption() == "已入庫")
                    return;
                if(tableName == "Cryopump維修工單" && !ns.checkSubSheetFinish())
                    return;
                var text = "已入庫!\n並設定維修狀況為A10.";
                if(!utils.isSubSheets(ns)) //主工單
                {
                  if(tableName == "Compressor維修工單")
                  {
                    ns.repairStatus.setValue("C30,入庫--Compressor");
                    text = "已入庫!\n並設定維修狀況為C30.";
                  }
                  else    
                    ns.repairStatus.setValue("A10,入庫--Pump/Controller");
                  utils.writeRepairStatus(ns);
                }
                else 
                    text = "已完工入庫!";  //子工單完工
                utils.putInStorehouse(ns);
                uictrl.setCaption("已入庫");
                utils.alert(text);
    },
    outBtnClick(ns){
            var prop = ns.properties, tableName = prop.tableName;
            var uictrl = ns.outBtn;
            if(uictrl.getCaption().includes("已通知"))
                return;
            if(utils.isSubSheets(ns))
            {
                utils.alert("子工單,不通知出貨!");
                return;
            }
            if(tableName == "Cryopump維修工單" && !ns.checkSubSheetFinish())
                return;
            var text = "已通知秘書入庫/出貨!\n並設定維修狀況為A08.";
            if(tableName == "Compressor維修工單")
            {
                ns.repairStatus.setValue("C28,待入庫/待出貨--Compressor");
                text = "已通知秘書入庫/出貨!\n並設定維修狀況為C28.";
            }
            else
                ns.repairStatus.setValue("A08,待入庫/待出貨--Pump/Controller");
            utils.writeRepairStatus(ns);
            uictrl.setCaption("已通知出貨");
            utils.alert(text);
    },
    updateFinishOutBtnCaption: function(ns){
        var prop = ns.properties, tableName = prop.tableName;
        var status = utils.readRepairStatus(ns);
        var rno = ns.repairNo.getUIValue();
        if(status.includes("A08") || status.includes("C28"))
        {
            if(ns.outBtn)
                ns.outBtn.setCaption("已通知出貨");
        }
        if(status.includes("A08") || status.includes("C28"))
        {
            if(ns.finishBtn)
                ns.finishBtn.setCaption("已入庫");
        }
        if(utils.isSubSheets(ns)) //cehck if need outBtn
        {
            if(ns.outBtn)
                ns.outBtn.hide();
            if(ns.repairStatus)
                ns.repairStatus.hide();
            var db = ns.getDataBinders();
            if(db.length > 0)
            {
              db = db[0].boxing();
              var data = db.getData();
            if(ns.finishBtn && data["維修狀態"] == "已完工")
                ns.finishBtn.setCaption("已入庫");
              
            }
        }
    },
    setButtonFocused: function(btn){
        var parent = btn.getParent();
        var nodes = parent.getChildren(true,true).get();
        for(var i=0; i<nodes.length; i++)
        {
            var n = nodes[i].boxing();
            if(n.$key == "xui.UI.Button")
            {
                n.setFontWeight("normal");
                if(AppName == "RepairSide")
                    n.setFontColor("white");//#90EE90
            }
        }
        btn.setFontWeight("800");
        if(AppName == "RepairSide")
            btn.setFontColor("#90EE90");//#90EE90
    },
    blockConfirmName: function(uictrl){
        return;
        var block = uictrl.getParent();
        if(uictrl.getUIValue() != "")
            utils.setContainerDisabled(block,true);
    },
    checkSaveSimpleFinish: function(ns,rno)
    {
        var value = ns.repairStatus.getUIValue();
        if(value == "簡修完工" && (value != ns.prevRepairStatus))
        {
          var cb = function(){    
            var data = utils.getItemValue("Cryopump維修工單","登錄編號",rno);
            if(data != "")
            {
              var xh = data["Crosshead編號"];
              if(typeof xh != "undefined" && xh != "")
                utils.modifyTableItem("Crosshead維修工單","Crosshead編號",{"Crosshead編號":xh, "維修狀態":"簡修完工"});
              utils.modifyTableItem("Module功能測試表","登錄編號",{"登錄編號":rno, "維修狀態":"簡修完工"});
              utils.modifyTableItem("Cryopump維修工單","登錄編號",{"登錄編號":rno, "維修狀態":"簡修完工"});
            }
          }
          xui.confirm("確認","是否將相關工單設為簡修完工?", cb);
        }          
    },
	getLastRepairDatas: function(insn, rno=""){
				var R = {"上次登錄編號":"NA", "上次Pump出廠CN":"NA", "上次CN保固截止日期":null};
                if(insn == "NA" || insn == "N/A")
                    return R; 
				if(insn == "")
					return {"上次登錄編號":"", "上次Pump出廠CN":"", "上次CN保固截止日期":null};		
                  
                var condition = `[In S/N] = '${insn}' AND 登錄編號 != '${rno}' ORDER BY [Log date] DESC`;  
                var item = utils.getItemValueByCondition("CTI Control Number總資料庫",condition);
                if(item == "")
                    R["上次登錄編號"] = "NA";
                else
                    R["上次登錄編號"] = item["登錄編號"];
                var condition = `[Out S/N] = '${insn}' AND 登錄編號 != '${rno}' ORDER BY [Log date] DESC`;  
                var item = utils.getItemValueByCondition("CTI Control Number總資料庫",condition);
                if(item == "")
                {
                    R["上次Pump出廠CN"] = "NA";
                    R["上次CN保固截止日期"] = null;
                }
                else 
                {
                    R["上次Pump出廠CN"] = item["CN#"];
                    R["上次CN保固截止日期"] = item["保固期限"];
                }    
				return R;
	},
	startCodeRead:function(tableName){
		//utils.alert("還未完成");
		//return;
		var cb = function(rno){
			//utils.alert(rno);
			utils.showWorkSheet2(tableName, rno);
		}
		if(typeof tableName == 'function')
			cb = tableName;
		
		var cb2 = function(mod){
			mod.onCodeRead = cb;
            mod.dialog.setModal(true);            
		};
        xui.showModule("App.ScanForm", cb2, null, null, false);
		
	},
	repairFinishStates:function(){
		return ["出貨","完工","簡修完工","入庫","不修"];
	},
	writeRepairShipped: function(rno){
		var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rno);
		var code = data["CN分類碼"];
		if(code == "CON")
			utils.modifyTableItem("3phControler維修工單","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
		if(code == "CYL")
			utils.modifyTableItem("CylinderHeater維修工單","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
		if(code == "EFC")
			utils.modifyTableItem("Compressor維修工單","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
		if(code == "EFM")
			utils.modifyTableItem("Crosshead維修工單","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
		if(code == "EFP")
		{
			utils.modifyTableItem("Cryopump維修工單","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
			utils.modifyTableItem("Module功能測試表","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});
		}
		if(code == "MOD")
			utils.modifyTableItem("Module功能測試表","登錄編號",{"登錄編號":rno,"維修狀態":"出貨"});

		utils.modifyTableItem("CTI Control Number總資料庫","登錄編號",{"登錄編號":rno,"維修狀況":"出貨"});
		
	},
 };