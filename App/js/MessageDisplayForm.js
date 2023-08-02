// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.MessageDisplayForm', 'xui.Module',{
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
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("27.428571428571427em")
                .setTop("3.0476190476190474em")
                .setWidth("32.76190476190476em")
                .setHeight("38.857142857142854em")
                .setCaption("Message")
            );
            
            host.dialog.append(
                xui.create("xui.UI.Stacks")
                .setHost(host,"stack")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "維修工單確認",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "CryoPumpTestForm確認",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    },
                    {
                        "id" : "c",
                        "caption" : "待維修案件"
                    },
                    {
                        "id" : "e",
                        "caption" : "待測試案件"
                    },
                    {
                        "id" : "d",
                        "caption" : "Repair Quotation Sheet"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("c")
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"lista")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("6.095238095238095em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_lista_onitemselected"),
                "a"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"listb")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("6.857142857142857em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_testfinishlist_onitemselected"),
                "b"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"listd")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("6.857142857142857em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_unitformlist_onitemselected"),
                "d"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"listc")
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("6.857142857142857em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_listc_onitemselected"),
                "c"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"liste")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("7.619047619047619em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_liste_onitemselected"),
                "e"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        updateAllList: function(){
          var ns = this;
          ns.updateRepairSheetList();
          ns.updateTestFormConfirmList(); //測試完，待確認
          ns.updateTestFormList();  //待測試
          ns.updateQuotationList();
          ns.updateNoRepairSheetList();
            
// ns.updateHeaterList();
         // ns.updateOverhaulList();
           
        },
        updateCaptionCount: function(id, list, caption){
            var ns = this;
            var s = caption + "&emsp;<font color=red>" + list.getItems().length + "</font>";
            ns.stack.updateItem(id, {"caption": s});
        },
        updateList: function(list, table, condition, fields, postfix=""){
          var ns = this;  
          var cb = function(data){
              var items = list.getItems();
              for(var i=0; i<data.rows.length; i++)
              {
                let d = data.rows[i];  
                let caption = "";
                for(var j=0; j<d.length; j++)
                    caption += d[j] + "  ";
                let it = {"id":d[0], "caption": caption + postfix};
                items.push(it);  
              }
              list.setItems(items);
              list.refresh();
          }  
          var condition2 = "";
          var cpairs = condition.split(",");
          for(var i=0; i<cpairs.length; i++)
          {
            var p2 = cpairs[i].split(":");
            condition2 += `([${p2[0]}] != '' AND [${p2[0]}] = '') `;
            if(i != cpairs.length-1)
              condition2 += ' OR ';  
          }
          var data = utils.getTableItems({"tableName":table, "condition": condition2, "fields": fields});
          cb(data);
        },
        updateList2: function(list, table, condition, fields, postfix=""){
          var ns = this;  
          var cb = function(data){
              var items = list.getItems();
              for(var i=0; i<data.rows.length; i++)
              {
                let d = data.rows[i];  
                let caption = "";
                for(var j=0; j<d.length; j++)
                    caption += d[j] + "  ";
                let it = {"id":d[0], "caption": caption + postfix};
                items.push(it);  
              }
              list.setItems(items);
              list.refresh();
          }  
          var data = utils.getTableItems({"tableName":table, "condition": condition, "fields": fields});
          cb(data);
        },
        updateRepairSheetList: function(){
          var ns = this;
          var list = ns.lista;
          list.clearItems();
          ns.updateList(list,"Cryopump維修工單", "A組裝簽名:A組長覆核,B組裝簽名:B組長覆核,C組裝簽名:C組長覆核,D測試人員簽名:D測試組長覆核", "登錄編號,客戶名稱","-Cryopump維修工單");
          ns.updateList(list,"Crosshead維修工單", "C組裝簽名:C組長覆核", "登錄編號,客戶名稱","-Crosshead維修工單");
          ns.updateList(list,"Compressor維修工單", "A簽名:A組長覆核,C簽名:C組長覆核", "登錄編號,客戶名稱","-Compressor維修工單");
          ns.updateCaptionCount("a", list, "維修工單確認");
        },
        updateQuotationList: function(){
          var ns = this;  
          var list = ns.listd;
          list.clearItems();
          ns.updateList2(list, "Compressor Repair Quotation Sheet", "確認狀態 = '秘書已確認'", "登錄編號,客戶名稱,維修內容簡述");
          ns.updateCaptionCount("d", list, "Repair Quotation Sheet");
        },
        updateNoRepairSheetList: function(){
          var ns = this;  
          var list = ns.listc;
          list.clearItems();
          ns.updateList2(list, "維修站總資料表", "維修狀態='待維修'", "登錄編號,客戶名稱");
          ns.updateCaptionCount("c", list, "待維修案件");
        },
        updateUnitFormList: function(){
          var ns = this;  
          var list = ns.unitFormList;
          list.clearItems();
          ns.updateList(list, "UnitServiceForm子表", "確認狀態 = '待秘書確認'", "登錄編號,公司名稱,服務內容");
          ns.updateCaptionCount("d", list, "Unit Service Form確認");
        },
        updateHeaterList: function(){
          var ns = this;  
          ns.updateList(ns.heaterList, "Compressor Heater Fail/ Motor Fail零件更換表", "確認狀態 = '待秘書確認'", "登錄編號,客戶名稱,故障問題簡述");
        },
        updateOverhaulList: function(){
          var ns = this;  
          ns.updateList(ns.overhaulList, "Compressor Standard Overhaul", "確認狀態 = '待秘書確認'", "登錄編號,客戶名稱,故障問題簡述");
        },
        updateTestFormConfirmList: function(){
          var ns = this;  
          var list = ns.listb;  
          list.clearItems();
          ns.updateList2(list, "CryopumpWarranty原因分析表", "確認狀態 = '待組長確認'", "登錄編號,日期,客戶名稱", "-保固");
          ns.updateList2(list, "CryopumpTestForm", "確認狀態 = '待組長確認'", "登錄編號,TestDate", "-付費");
          ns.updateCaptionCount("b", list, "CryoPumpTestForm確認");
      },
        updateTestFormList: function(){
          var ns = this;  
          var list = ns.liste;  
          list.clearItems();
          ns.updateList2(list, "維修站總資料表", "維修狀態='待測試'", "登錄編號,客戶名稱");
          ns.updateCaptionCount("e", list, "待測試案件");
      },
        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        showPage:function(page, table, key, keyValue){
            var ns = this;
            var descb = function(){
                ns.updateAllList();                
            }
            var data = utils.getItemValue(table, key, keyValue); 
            utils.showDataPage(page, data, "edit", null, descb);
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _optionlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("RepairOptionForm", "Option零件更換表","登錄編號", item.id);
            uictrl.setValue("");
        },
        events:{
            "beforeShow" : "_page_beforeshow"
        },
        _page_beforeshow:function(e,i){
            var ns = this;
            ns.updateAllList();

        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _overhaullist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("CompressorOverhaulEditForm", "Compressor Standard Overhaul","登錄編號", item.id);
             uictrl.setValue("");
       },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _heaterlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("CompressorSpecialPriceEditForm", "Compressor Heater Fail/ Motor Fail零件更換表","登錄編號", item.id);
            uictrl.setValue("");
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _quotationlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("CompressorRepairQuotationSheet", "Compressor Repair Quotation Sheet","登錄編號", item.id);
             uictrl.setValue("");
       },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _unitformlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("RepairOptionForm", "Option零件更換表","登錄編號", item.id);
            uictrl.setValue("");
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _repairfinishlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            ns.showPage("SubUnitServiceForm", "UnitServiceForm子表","登錄編號", item.id);
            uictrl.setValue("");
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _testfinishlist_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            var caption = item.caption;
            if(caption.includes("保固"))
                ns.showPage("CryopumpWarrantyEditForm", "CryopumpWarranty原因分析表","登錄編號", item.id);
            else if(caption.includes("付費"))
                ns.showPage("CryopumpTestForm", "CryopumpTestForm","登錄編號", item.id);
              uictrl.setValue("");
              
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _lista_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            var rid = item.id;
            var caption = item.caption;
            if(caption.includes("Cryopump維修工單"))
              ns.showPage("CryopumpEditForm", "Cryopump維修工單","登錄編號", rid);
            if(caption.includes("Compressor維修工單"))
              ns.showPage("CompressorEditForm", "Compressor維修工單","登錄編號", rid);
            if(caption.includes("Crosshead維修工單"))
              ns.showPage("CrossheadEditForm", "Crosshead維修工單","登錄編號", rid);
            uictrl.setValue("");
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _listc_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            var rid = item.id;
            var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rid);
            if(data != "")
            {
                MainPage.wrRepairNo.setValue(rid);
                MainPage._wrrepairsearchbtn_onclick();
                MainPage.mainPage.setValue("維修委託單/工單");
                ns.destroy();
                /*
                var descb = function(){
                    ns.updateAllList();                
                }
                utils.showDataPage("NewWorkSheetForm", data, "newRepair", null, descb);
                */
            }
            else 
              xui.alert("查無登錄編號!");  
        },
        /**
         * Fired when list item is selected
         * @method onItemSelected [xui.UI.List event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , list item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {} type:Number,0:noaffacted;1:checked;-1  unchecked
        */
        _liste_onitemselected:function(profile, item, e, src, type){
            var ns = this, uictrl = profile.boxing();
            var rid = item.id;
            var data = utils.getItemValue("CTI Control Number總資料庫","登錄編號",rid);
            if(data != "")
            {
                var descb = function(){
                    ns.destroy();
                }
              utils.showDataPage("NewWorkSheetForm", data, "newTest",null, descb);
            }
            else 
              xui.alert("查無登錄編號!");  
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