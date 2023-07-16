// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.CompressorSpecialPriceEditForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "rowid",
            "tableName" : "Compressor零件更換表",
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
                .setHost(host,"cdb")
                .setName("cdb")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"dialog")
                .setLeft("6em")
                .setTop("2em")
                .setWidth("67.80952380952381em")
                .setHeight("42.666666666666664em")
                .setCaption("Compressor 零件更換表(維修工單附件)")
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
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm1")
                .setDataBinder("rdb")
                .setDataField("組長確認")
                .setReadonly(true)
                .setLeft("-0.0761904761904762em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("組長確認")
                .setType("getter")
                .onClick("_confirm1_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"confirm2")
                .setDataBinder("rdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("11.333333333333334em")
                .setTop("0.6857142857142857em")
                .setWidth("10.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("秘書確認")
                .setType("getter")
                .onClick("_confirm2_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.Button")
                .setHost(host,"confirmBtn")
                .setDataBinder("opdb")
                .setDataField("秘書確認")
                .setLeft("23.333333333333332em")
                .setTop("0.6857142857142857em")
                .setWidth("9.142857142857142em")
                .setCaption("通知秘書確認")
                .onClick("_confirmbtn_onclick")
            );
            
            host.xui_ui_block103.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput618")
                .setDataBinder("rdb")
                .setDataField("秘書確認")
                .setReadonly(true)
                .setLeft("35.333333333333336em")
                .setTop("0.6857142857142857em")
                .setWidth("12.8em")
                .setLabelSize("6em")
                .setLabelCaption("工程師簽名")
                .setType("getter")
                .onClick("_confirm2_onclick")
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
                xui.create("xui.UI.Tabs")
                .setHost(host,"tabs")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "基本資料",
                        "imageClass" : ""
                    },
                    {
                        "id" : "b",
                        "caption" : "零件更換表"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("b")
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block2")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("17.523809523809526em"),
                "b"
            );
            
            host.block2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"topBlock")
                .setDock("top")
                .setLeft("8em")
                .setTop("1.3333333333333333em")
                .setHeight("4.333333333333333em")
                .setTabindex(0)
            );
            
            host.topBlock.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"name")
                .setDataBinder("cdb")
                .setDataField("保養名稱")
                .setAutoTips(false)
                .setDisableTips(true)
                .setLeft("0.6666666666666666em")
                .setTop("1.3333333333333333em")
                .setWidth("22.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("零件表分類")
                .setType("popbox")
                .onValueChange("_name_onvaluechange")
            );
            
            host.block2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"bottomBlock")
                .setDock("bottom")
                .setLeft("12.733333333333333em")
                .setTop("25em")
                .setHeight("7em")
            );
            
            host.bottomBlock.append(
                xui.create("xui.UI.Input")
                .setHost(host,"remark")
                .setDataBinder("cdb")
                .setDataField("其他附註")
                .setDock("fill")
                .setDockMargin({
                    "left" : 0,
                    "top" : 5,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("2.6666666666666665em")
                .setTop("2.6666666666666665em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelCaption("其他附註")
                .setMultiLines(true)
            );
            
            host.bottomBlock.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"sum")
                .setDataBinder("cdb")
                .setDataField("其他附註")
                .setReadonly(true)
                .setDock("top")
                .setDockStretch("fixed")
                .setLeft("3.4285714285714284em")
                .setTop("3.4285714285714284em")
                .setWidth("18em")
                .setHeight("2em")
                .setLabelSize("8em")
                .setLabelCaption("總計")
                .setType("currency")
                .setMultiLines(true)
            );
            
            host.block2.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"partsGrid")
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id" : "Item",
                        "caption" : "Item",
                        "type" : "input",
                        "width" : "8em",
                        "hidden" : true
                    },
                    {
                        "id" : "建議數量",
                        "caption" : "建議數量",
                        "type" : "label",
                        "width" : "8em"
                    },
                    {
                        "id" : "數量",
                        "caption" : "數量",
                        "type" : "counter",
                        "width" : "8em",
                        "min" : 0
                    },
                    {
                        "id" : "領料料號",
                        "caption" : "領料料號",
                        "type" : "label",
                        "width" : "8em"
                    },
                    {
                        "id" : "Description",
                        "caption" : "說明",
                        "type" : "label",
                        "width" : "16em"
                    },
                    {
                        "id" : "Price (NT)",
                        "caption" : "Price (NT)",
                        "type" : "number",
                        "width" : "8em"
                    },
                    {
                        "id" : "小計",
                        "caption" : "小計",
                        "type" : "number",
                        "width" : "8em",
                        "readonly" : true
                    }
                ])
            );
            
            host.tabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("fill")
                .setLeft("24.38095238095238em")
                .setTop("11.428571428571429em"),
                "a"
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1228")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("客戶名稱")
                .setLeft("3.7333333333333334em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("客戶名稱")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1229")
                .setName("登錄編號")
                .setDataBinder("cdb")
                .setDataField("登錄編號")
                .setLeft("32.76190476190476em")
                .setTop("0.7333333333333333em")
                .setWidth("14.533333333333333em")
                .setLabelSize("5em")
                .setLabelCaption("登錄編號")
                .setMaxlength("20")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1230")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("ATTN")
                .setLeft("18.285714285714285em")
                .setTop("0.6em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("ATTN")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1231")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("Model")
                .setLeft("3.7333333333333334em")
                .setTop("3.7333333333333334em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("Model")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1232")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("S/N")
                .setLeft("18.285714285714285em")
                .setTop("3.7333333333333334em")
                .setWidth("12.666666666666666em")
                .setLabelSize("5em")
                .setLabelCaption("S/N")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1233")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("ETM")
                .setLeft("32.76190476190476em")
                .setTop("3.7333333333333334em")
                .setWidth("14.476190476190476em")
                .setLabelSize("5em")
                .setLabelCaption("ETM")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1234")
                .setDataBinder("cdb")
                .setDataField("故障問題簡述")
                .setLeft("0.7619047619047619em")
                .setTop("6.780952380952381em")
                .setWidth("30.4em")
                .setHeight("4.876190476190477em")
                .setLabelSize("8em")
                .setLabelCaption("故障問題簡述")
                .setMultiLines(true)
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1235")
                .setName("客戶名稱")
                .setDataBinder("cdb")
                .setDataField("預估金額")
                .setLeft("32.76190476190476em")
                .setTop("6.780952380952381em")
                .setWidth("14.476190476190476em")
                .setLabelSize("5em")
                .setLabelCaption("預估金額")
                .setMaxlength("32")
            );
            
            host.block1.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label186")
                .setLeft("3.0476190476190474em")
                .setTop("13.638095238095238em")
                .setCaption("Remarks:<br>1)Bench檢測後, 若特殊零件項目報價, 請於B欄勾選, 並交給秘書報價<br>2)Heater fail/ Motor fail 報價為預估報價參考,需視compressor實際狀況再增減其項目 <br>3)若除下列報價項目外有其它額外零件需更換, 工程師請於附註欄填寫並說明,以利秘書報價給客戶")
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
            ns.updateUIToContent();
            utils.saveForm(ns);
        },
        updateContentToUI: function(){
            var ns = this;
            var data = ns.cdb.getData()["保養內容"];
            if(data != "" && data != null)
            {
              var items = JSON.parse(data);
              var rows = ns.partsGrid.getRows();
              for(var i=0; i<rows.length; i++)
              {
                var row = rows[i];
                for(var j=0; j<items.length; j++)
                {
                  var item = items[j];
                  if(row.Item == item.Item)
                  {
                      ns.partsGrid.updateCell(row._cells["數量"], {"value": item["數量"]});   
                      break;
                  }
                }
                if(j >= items.length)
                      ns.partsGrid.updateCell(row._cells["數量"], {"value": 0});   
              }
            }
        },
        updateUIToContent: function(){
            var ns = this;
              var items = [];
              ns.partsGrid.updateGridValue();  
              var rows = ns.partsGrid.getRows("value");
              for(var i=0; i<rows.length; i++)
              {
                var row = rows[i];
                if(row[2] != 0 && row[2] != null)  
                {
                  let item = {};  
                  item.Item = row[0];
                  item["數量"] = row[2]; 
                  items.push(item);
                }
              }           
              ns.cdb.setData("保養內容", JSON.stringify(items));
        },
        updatePartsGrid: function(){
          var ns = this;
          var name = ns.name.getUIValue();
          if(name.includes("A. "))
          {
            var data = utils.getTableItems({"tableName":"Compressor零件價格資料表", "orderby":"Item"});  
            var items = utils.getRowMap(data);
          }
          else  
            var items = utils.getItemValue("保養零件查詢","保養名稱",name,"*",true); //get all rows  
          for(var i=0; i<items.length; i++)
          {
            var item = items[i]  
            if(typeof item["建議數量"] == "undefined")
               item["建議數量"] = 1; 
            item["數量"] = item["建議數量"];        
          }
          ns.partsGrid.removeAllRows().setRows(items);
       },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _dialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var ns = this, prop = ns.properties;
           // ns.db.setData(prop.datas).updateDataToUI().getUI().setDisabled(false);
          //  xui.alert("onShowDialog");  
           // console.log(utils.createDDL(ns.dialog,"Compressor Heater Fail/ Motor Fail零件更換表"));
            utils.installConfirmNameButtonOnClick(ns);
            ns.tabs.setValue('a');
            utils.updateConfirmBtnCaption(ns, ns.confirmBtn);
            if(prop.mode == "edit")
            {
              ns.updatePartsGrid();
              ns.updateContentToUI();
            }
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
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
                _confirm1_onclick:function(profile, e, src, value, n){
                    var ns = this, uictrl = profile.boxing();
                      utils.confirmNameClick(ns, uictrl, "組長,主管");
                },
        /**
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
        _confirm2_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
                      utils.confirmNameClick(ns, uictrl, "秘書");
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _confirmbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
             utils.confirmBtnClick(ns, uictrl);
        },
        /**
         * Fired when the control's pop button is clicked. (Only for 'popbox' or 'getter' type)
         * @method onClick [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {String} value , control's UI value
         * @param {}  
        */
        _b1_onclick:function(profile, e, src, value, n){
            var ns = this, uictrl = profile.boxing();
            uictrl.setValue(LoginUser.DisplayName);
        },
        /**
         * Fired when control's inner value is changed!
         * @method onValueChange [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {String} oldValue ,  old Value
         * @param {String} newValue , new Value
         * @param {Boolean} force , force to call or not
         * @param {call} tag  extra info
        */
        _name_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            ns.updatePartsGrid();
        },

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