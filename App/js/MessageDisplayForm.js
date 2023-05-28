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
                        "caption" : "額外Option零件確認通知 <font color=red>2</font>",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "維修品檢測完成確認通知<font color=red>2</font>",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false
                    },
                    {
                        "id" : "c",
                        "caption" : "Compressor Repair Quotation Sheet確認通知<font color=red>2</font>"
                    },
                    {
                        "id" : "d",
                        "caption" : "Compressor Heater Fail/ Motor Fail零件更換表確認通知<font color=red>2</font>"
                    },
                    {
                        "id" : "e",
                        "caption" : "Compressor Standard Overhaul確認通知<font color=red>2</font>"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"optionList")
                .setDock("fill")
                .setLeft("4.571428571428571em")
                .setTop("6.095238095238095em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_optionlist_onitemselected"),
                "a"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"testFinishList")
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
                .setHost(host,"heaterList")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("7.619047619047619em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_heaterlist_onitemselected"),
                "d"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"overhaulList")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("7.619047619047619em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_overhaullist_onitemselected"),
                "e"
            );
            
            host.stack.append(
                xui.create("xui.UI.List")
                .setHost(host,"quotationList")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("7.619047619047619em")
                .setWidth("24.38095238095238em")
                .setValue("a")
                .onItemSelected("_quotationlist_onitemselected"),
                "e"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        updateAllList: function(){
          var ns = this;
          ns.updateOptionList();
          ns.updateQuotationList();
          ns.updateRepairFinishList();
          ns.updateTestFinishList();
          ns.updateUnitFormList();
          ns.updateHeaterList();
          ns.updateOverhaulList();
           
        },
        updateList: function(id, list, table, condition, fields, postfix=""){
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
              var t = ns.captionList[id] + "<font color=red>" + data.rows.length + "</font>";
              ns.stack.updateItem(id, {"caption":t});
          }  
          utils.getTableItems({"tableName":table, "condition": condition, "fields": fields}, cb);
        },
        updateOptionList: function(){
          var ns = this;  
          ns.updateList("a",ns.optionList,"Option零件更換表", "確認狀態 = '秘書已確認'", "登錄編號,公司名稱,CreateDate","已確認通知");
          ns.updateList("a",ns.optionList,"Option零件更換表", "確認狀態 = '待組長確認'", "登錄編號,公司名稱,CreateDate","待確認");
        },
        updateQuotationList: function(){
          var ns = this;  
            ns.updateList("c",ns.quotationList, "Compressor Repair Quotation Sheet", "確認狀態 = '秘書已確認'", "登錄編號,客戶名稱,維修內容簡述","已確認通知");
            ns.updateList("c",ns.quotationList, "Compressor Repair Quotation Sheet", "確認狀態 = '待組長確認'", "登錄編號,客戶名稱,維修內容簡述","待確認");
        },
        updateRepairFinishList: function(){
          var ns = this;  
          ns.updateList(ns.repairFinishList, "UnitServiceForm子表", "確認狀態 = '已修復待出貨'", "登錄編號,公司名稱,服務內容");
        },
        updateUnitFormList: function(){
          var ns = this;  
          ns.updateList(ns.unitList, "UnitServiceForm子表", "確認狀態 = '待出貨'", "登錄編號,公司名稱,服務內容");
        },
        updateHeaterList: function(){
          var ns = this;  
          ns.updateList("d",ns.heaterList, "Compressor Heater Fail/ Motor Fail零件更換表", "確認狀態 = '秘書已確認'", "登錄編號,客戶名稱,故障問題簡述","已確認通知");
          ns.updateList("d",ns.heaterList, "Compressor Heater Fail/ Motor Fail零件更換表", "確認狀態 = '待組長確認'", "登錄編號,客戶名稱,故障問題簡述","待確認");
        },
        updateOverhaulList: function(){
          var ns = this;  
          ns.updateList("e",ns.overhaulList, "Compressor Standard Overhaul", "確認狀態 = '秘書已確認'", "登錄編號,客戶名稱,故障問題簡述","已確認通知");
          ns.updateList("e",ns.overhaulList, "Compressor Standard Overhaul", "確認狀態 = '待組長確認'", "登錄編號,客戶名稱,故障問題簡述","待確認");
        },
        updateTestFinishList: function(){
          var ns = this;  
          ns.updateList("b",ns.testFinishList, "CryopumpWarranty原因分析表", "確認狀態 = '秘書已確認'", "登錄編號,日期,客戶名稱", "-保固已確認通知");
          ns.updateList("b",ns.testFinishList, "CryopumpTestForm", "確認狀態 = '秘書已確認'", "登錄編號,TestDate", "-付費已確認通知");
          ns.updateList("b",ns.testFinishList, "CryopumpWarranty原因分析表", "確認狀態 = '待組長確認'", "登錄編號,日期,客戶名稱", "-保固待確認");
          ns.updateList("b",ns.testFinishList, "CryopumpTestForm", "確認狀態 = '待組長確認'", "登錄編號,TestDate", "-付費待確認");
        },
        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        showDataPage:function(page, table, key, keyValue){
            var data = utils.getItemValue(table, key, keyValue); 
            utils.showDataPage(page, data, "edit");
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
            ns.showDataPage("RepairOptionForm", "Option零件更換表","登錄編號", item.id);
            uictrl.setValue("");
        },
        events:{
            "beforeShow" : "_page_beforeshow",
            "onReady" : "_page_onready"
        },
        _page_beforeshow:function(e,i){
            var ns = this;
            ns.updateOptionList();
            ns.updateQuotationList();
            ns.updateTestFinishList();
            ns.updateHeaterList();
            ns.updateOverhaulLit();

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
            ns.showDataPage("CompressorOverhaulEditForm", "Compressor Standard Overhaul","登錄編號", item.id);
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
            ns.showDataPage("CompressorSpecialPriceEditForm", "Compressor Heater Fail/ Motor Fail零件更換表","登錄編號", item.id);
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
            ns.showDataPage("CompressorRepairQuotationSheet", "Compressor Repair Quotation Sheet","登錄編號", item.id);
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
            ns.showDataPage("SubUnitServiceForm", "UnitServiceForm子表","登錄編號", item.id);
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
            ns.showDataPage("SubUnitServiceForm", "UnitServiceForm子表","登錄編號", item.id);
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
                ns.showDataPage("CryopumpWarrantyEditForm", "CryopumpWarranty原因分析表","登錄編號", item.id);
            else if(caption.includes("付費"))
                ns.showDataPage("CryopumpTestForm", "CryopumpTestForm","登錄編號", item.id);
              uictrl.setValue("");
              
        },
        _page_onready:function(e,i){
            var ns = this;
            ns.captionList = {"a":"額外Option零件確認通知","b":"維修品檢測完成確認通知","c":"Compressor Repair Quotation Sheet確認通知",
                              "d":"Compressor Heater Fail/ Motor Fail零件更換表確認通知", "e":"Compressor Standard Overhaul確認通知"};
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