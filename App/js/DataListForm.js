// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.DataListForm', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {
            "tableName" : "",
            "condition" : "",
            "displayFields" : "",
            "fieldWidths" : null,
            "keyid" : "",
            "uictrl" : null
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
                xui.create("xui.UI.Block")
                .setHost(host,"form")
                .setLeft("9.142857142857142em")
                .setTop("4.571428571428571em")
                .setWidth("16.076190476190476em")
            );
            
            host.form.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"modgrid")
                .setProperties({
                    "tableName" : "",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "fields" : "",
                    "rowLength" : 20,
                    "conditions" : "",
                    "__inner_coms_prf__" : {
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "directInput" : false,
                                "selMode" : "single",
                                "rowHandler" : false,
                                "colResizer" : false,
                                "colSortable" : false,
                                "colMovable" : false
                            }
                        },
                        "toolbar" : {
                            "properties" : {
                                "items" : [
                                    {
                                        "id" : "grp1",
                                        "sub" : [
                                            {
                                                "id" : "new",
                                                "caption" : "新增",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-add",
                                                "hidden" : true
                                            },
                                            {
                                                "id" : "open",
                                                "caption" : "編輯資料",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-popbox",
                                                "disabled" : false
                                            },
                                            {
                                                "id" : "delete",
                                                "caption" : "刪除",
                                                "image" : "",
                                                "imageClass" : "xui-uicmd-close",
                                                "disabled" : false,
                                                "hidden" : true
                                            },
                                            {
                                                "id" : "custom1",
                                                "caption" : "自定義1",
                                                "hidden" : true
                                            }
                                        ],
                                        "caption" : "grp1"
                                    }
                                ],
                                "display" : "none"
                            }
                        },
                        "pagebar" : {
                            "properties" : {
                                "visibility" : "hidden"
                            }
                        },
                        "ctl_sbutton1" : {
                            "properties" : {
                                "visibility" : "hidden",
                                "zIndex" : 1
                            }
                        }
                    }
                })
                .setEvents({
                    "onSelectRecord" : "_modgrid_onselectrecord",
                    "afterShow" : "_modgrid_aftershow",
                    "onGridDataLoaded" : "_modgrid_ongriddataloaded"
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
            "onReady" : "_page_onready",
            "beforeShow" : "_page_beforeshow"
        },
        _page_onready:function(e,i){

        },
        _page_beforeshow:function(e,i){
            var ns = this, prop = ns.properties, modgrid = ns.modgrid;
            modgrid.setProperties("tableName", prop["tableName"]);
            modgrid.setProperties("condition", prop["condition"]);
            modgrid.setProperties("keyid", prop["keyid"]);
            modgrid.setProperties("pageLength", 0);
           // modgrid.setProperties("orderby", "["+prop["keyid"]+"]");
            modgrid.setProperties("mode", "selection");
            modgrid.setProperties("displayFields", prop["displayFields"]);
            modgrid.setProperties("fieldWidths", prop["fieldWidths"]);
            modgrid.setProperties("fieldCaptions", prop["fieldCaptions"]);
            //if(prop["formWidth"])
            //    ns.form.setWidth(prop["formWidth"] +  "em");
        },
        _modgrid_onselectrecord:function(value/*String, value*/,caption/*String, caption */,fields/*Hash, record fields map*/){
            var ns = this, prop = ns.properties, uictrl = prop.uictrl, disp = prop.displayFields;
            //console.log("fields", fields);
            var  value = fields[prop.keyid]; 
            disp = disp.split(',');
            var tips = "";
            for(var i=0; i<disp.length;i++)
                tips += fields[disp[i]] + "  ";
            if(prop.grid)
            {
              //prop.grid.updateCell(prop.cell.id,{"value":value,"caption":caption});    
                prop.grid.updateEditor(value, value);
            }   
            else
            {
              uictrl.setValue(value);
              uictrl.setCaption(value);
              uictrl.setTips(tips);
            }
            ns.form.hide();
        },
        _modgrid_ongriddataloaded:function(){
            var ns=this, grid = ns.modgrid.grid;
            var header = grid.getHeader();
            for(var i=0,w=0; i<header.length; i++)
            {
              var w1 = Number(header[i].width.replace("em",""));
              w  += w1;  
            }
            w+=2;
            ns.form.setWidth(w + "em");
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