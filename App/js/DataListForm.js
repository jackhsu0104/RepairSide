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
                .setWidth("16em")
                .setHeight("19.047619047619047em")
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
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
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
                        "topBlock" : {
                            "properties" : {
                                "height" : "3.8095238095238093em",
                                "overflow" : "hidden"
                            }
                        },
                        "ctl_sbutton1" : {
                            "properties" : {
                                "visibility" : "hidden",
                                "zIndex" : 1
                            }
                        },
                        "pagebar" : {
                            "properties" : {
                                "dock" : "top",
                                "width" : "12em",
                                "visibility" : "visible"
                            }
                        },
                        "newBtn" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "openBtn" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "deleteBtn" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "selectAllBtn" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "excelBtn" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "pageLength" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "display" : "none"
                            }
                        },
                        "custom1Btn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        },
                        "filter" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "dock" : "bottom",
                                "width" : "6em",
                                "display" : "block",
                                "labelSize" : "3em"
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
            //modgrid.setProperties("pageLength", 0);
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
//            console.log("fields", fields);
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
              uictrl.setTips(tips);//call first to work
              uictrl.setValue(value);
              uictrl.setCaption(value);
            }
            ns.form.destroy();
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
            if(w < 12)
                w = 12;
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