// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.ErpPickingForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "keyid" : "領料報工單號",
            "tableName" : "領料報工單",
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
                .setLeft("9.933333333333334em")
                .setTop("1.9333333333333333em")
                .setWidth("61.714285714285715em")
                .setHeight("37.333333333333336em")
                .setCaption("領料報工單")
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
                xui.create("xui.UI.Button")
                .setHost(host,"uploadBtn")
                .setDock("left")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("24.685714285714287em")
                .setTop("0.6857142857142857em")
                .setWidth("5.561904761904762em")
                .setCaption("確認上傳")
                .onClick("_uploadbtn_onclick")
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block638")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("2.2857142857142856em")
                .setHeight("13.714285714285714em")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_input531")
                .setDataBinder("pdb")
                .setDataField("維修單別")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修單別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput359")
                .setDataBinder("pdb")
                .setDataField("維修部門")
                .setLeft("0.7619047619047619em")
                .setTop("3.0476190476190474em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修部門")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput362")
                .setDataBinder("pdb")
                .setDataField("維修站別")
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("維修站別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput364")
                .setDataBinder("pdb")
                .setDataField("單據日期")
                .setLeft("0.7619047619047619em")
                .setTop("7.619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("單據日期")
                .setType("date")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput367")
                .setDataBinder("pdb")
                .setDataField("產品品號")
                .setLeft("17.523809523809526em")
                .setTop("3.2666666666666666em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品品號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput369")
                .setDataBinder("pdb")
                .setDataField("產品品名")
                .setLeft("17.523809523809526em")
                .setTop("5.6em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品品名")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput371")
                .setDataBinder("pdb")
                .setDataField("產品序號")
                .setLeft("17.523809523809526em")
                .setTop("7.866666666666666em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("產品序號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput373")
                .setDataBinder("pdb")
                .setDataField("客戶簡稱")
                .setLeft("17.523809523809526em")
                .setTop("10.066666666666666em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("客戶簡稱")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput383")
                .setDataBinder("pdb")
                .setDataField("發票地址一")
                .setLeft("32em")
                .setTop("0.7619047619047619em")
                .setWidth("27.8em")
                .setLabelSize("6em")
                .setLabelCaption("發票地址一")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input533")
                .setDataBinder("pdb")
                .setDataField("發票地址二")
                .setLeft("32em")
                .setTop("3.0476190476190474em")
                .setWidth("27.8em")
                .setLabelSize("6em")
                .setLabelCaption("發票地址二")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput397")
                .setDataBinder("pdb")
                .setDataField("課稅別")
                .setLeft("45.333333333333336em")
                .setTop("5.333333333333333em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("課稅別")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput399")
                .setDataBinder("pdb")
                .setDataField("營業稅率")
                .setLeft("45.333333333333336em")
                .setTop("7.619047619047619em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("營業稅率")
                .setType("popbox")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput442")
                .setDataBinder("pdb")
                .setDataField("工時")
                .setLeft("0.7619047619047619em")
                .setTop("10.438095238095238em")
                .setWidth("14.476190476190476em")
                .setLabelSize("6em")
                .setLabelCaption("工時")
                .setType("spin")
                .setPrecision(1)
                .setValue(0)
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"id")
                .setDataBinder("pdb")
                .setDataField("領料報工單號")
                .setLeft("47.333333333333336em")
                .setTop("10.066666666666666em")
                .setWidth("12.4em")
                .setPlaceholder("儲存後自動產生")
                .setLabelSize("4em")
                .setLabelCaption("單號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"repairNo")
                .setDataBinder("pdb")
                .setDataField("登錄編號")
                .setRequired(true)
                .setLeft("32em")
                .setTop("5.266666666666667em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
                .onValueChange("_repairno_onvaluechange")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input136")
                .setDataBinder("pdb")
                .setDataField("客戶代號")
                .setLeft("32em")
                .setTop("9.933333333333334em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("客戶代號")
            );
            
            host.xui_ui_block638.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1933")
                .setDataBinder("pdb")
                .setDataField("型號")
                .setLeft("17.6em")
                .setTop("1em")
                .setWidth("14.4em")
                .setLabelSize("6em")
                .setLabelCaption("型號")
            );
            
            host.form.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"mgrid")
                .setProperties({
                    "tableName" : "領料報工單子表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "領料報工單號={領料報工單號}",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "rowid",
                    "openPageName" : "PickingEditForm",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "header" : [
                                    {
                                        "id" : "領用庫別",
                                        "caption" : "領用庫別",
                                        "type" : "label",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "型號",
                                        "caption" : "型號",
                                        "type" : "label",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "品號",
                                        "caption" : "品號",
                                        "type" : "label",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "領料數量",
                                        "caption" : "領料數量",
                                        "type" : "number",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "rowid",
                                        "caption" : "rowid",
                                        "hidden" : true,
                                        "width" : "8em",
                                        "type" : "input"
                                    }
                                ]
                            }
                        },
                        "newBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "openBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "deleteBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "selectAllBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "excelBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "pageLength" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "custom1Btn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "filter" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
                .setEvents({
                    "onInitNewData" : "_mgrid_oninitnewdata"
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
            "onReady" : "_page_onready"
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
            utils.saveForm(ns);
        },
        prepareNewData: function(rno){
          var data = utils.getITemValue("CTI Control Number總資料庫","登錄編號",rno);
          if(data != "")
          {   
            var item = {"維修單別":"B200","維修站別":"902","產品品號":data["In P/N"], "產品品名":data["型號(EX form)"],"產品序號":data["In S/N"],"單據日期":utils.today(),
                        "登錄編號":rno, "Creator": LoginUser.EmplID};
            var data2 = utils.getITemValue("erp.領料報工表單查詢","登錄編號",rno); 
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
            return item;
          }
          else 
            return {"維修單別":"B200","維修站別":"902", "Creator": LoginUser.EmplID};
              
              
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
            var data = ns.pdb.getData();
            if(data["已上傳"] == true)
            {
              ns.uploadBtn.setCaption("已上傳"); 
              ns.uploadBtn.setDisabled(true);  
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
        _page_onready:function(e,i){
            var ns = this;
        },
        uploadPickingData: function(edata){
                var ns = this;
                var wait = true;
                if(onFinish)
                    wait = false;
                var result = null;
                xui.Ajax("http://192.168.10.21/WEBAPI_W3R027/INSERTRMAMI13",edata,function(rsp){
                    var data =rsp;
                    if(!data)    alert("no data");
                    else
                    {
                        result = data;
                        if(onFinish)
                          onFinish(data);  
                    }
                },null,null,{"reqType":"json","asy": !wait}).start();
                return result;
        },
        prepareErpHeader: function(){
            var ns = this;
            var hdata = utils.getItemValue("erp.領料報工表單查詢", "登錄編號",ns.repairNo.getUIValue());
            if(hdata == "")
                return "";
            ns.pdb.updateDataFromUI();
            var d1 = ns.pdb.getData(); 
            var head = {    "RMATC001": d1["維修單別"],                  
                            "RMATC017": d1["維修部門"],                  
                            "RMATC035": "902",                  
                            "RMATC003": d1["單據日期"].replace("-",""),                  
                            "RMATC224": d1["登錄編號"],                
                            "RMATC005": hdata["叫修單別"],                  
                            "RMATC006": hdata["叫修單號"],                 
                            "RMATC007": d1["客戶代號"],                 
                            "RMATC008": d1["產品品號"],                
                            "RMATC026": d1["工時"],                
                            "RMATC226": StoreNameList[SiteName],                  
                            "CREATOR":  d1["Creator"]
                       };
            var dat = {"DoAction":1, "LoginID":LoginUser.EmplID, "CompanyID":"CICTEST", "head":head};   

            return dat;
        },
        pad: function(num, size) {
            var s = "000000000" + num;
            return s.substr(s.length-size);
        },
        uploadErpData: function(){
            var ns = this;
            var id = ns.id.getUIValue();
            if(id == "")
            {
              xui.alert("請先取得單號!");
              return;  
            }
            var edata = ns.prepareErpHeader();
            if(edata == "")
            {
              xui.alert("查無叫修單資料!");
              return;  
            }
            var datas = utils.getItemValue("領料報工單子表","領料報工單子表",id,"*",true);
            if(datas != "")
            {
              edata["DoAction"] = 2; //picking & workhour
              var hdr = edata.head.RMATC005 + "-" + edata.head.RMATC006 + "-";  
              var body = [];  
              for(var i=0; i<datas.length; i++)
              {
                let item = datas[i];
                let condition = `MG001='${ edata.head.RMATC005}' AND MG002='${item["品號"]}'`;  
                let customerpn = utils.getItemValueByCondition("erp.COPMG",condition, "MG003");  
                let d2 = {"RMATD003": hdr + ns.pad(i+1, 4), "RMATD004": item["品號"], "RMATD008": item["領用庫別"],"RMATD009":item["領用數量"],"RMATD014":item["批號"],
                         "RMATD200": customerpn, "RMATD201":pad(i+1,4)};
                body.push(d2);  
              }
            }
            else 
               var body = [{}];
            edata.body = body;
            ns.uploadPickingData(edata);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _uploadbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
             //console.log(utils.createDDL(ns.form, "領料報工單"));
            var result = ns.uploadErpData();
            xui.alert("訊息",result);
            ns.uploadBtn.setCaption("已上傳"); 
            ns.uploadBtn.setDisabled(true);  
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
        _repairno_onvaluechange:function(profile, oldValue, newValue, force, tag){
            var ns = this, uictrl = profile.boxing();
            var rno = newValue;
            if(rno != "")
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
                var keys = Object.keys(item);  
                for(var i=0; i<keys.length; i++)
                {
                    var k = keys[i];
                    ns.pdb.setData(k, item[k]);        
                }
                ns.pdb.updateDataToUI();  
              }                   
            }
        },
        _mgrid_oninitnewdata:function(){
            var ns = this;
            ns.pdb.updateDataFromUI();
            var data = ns.pdb.getData();
            return {"型號": data["型號"], "領料報工單號":data["領料報工單號"],"維修站別": SiteName};

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