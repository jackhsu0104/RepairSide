// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
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
                xui.create("xui.Timer")
                .setHost(host,"timer1")
                .onTime("_timer1_ontime")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"repairdb1")
                .setName("repairdb1")
            );
            
            append(
                xui.create("xui.DataBinder")
                .setHost(host,"repairdb2")
                .setName("repairdb2")
            );
            
            append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"mainPage")
                .setItems([
                    {
                        "id" : "掃碼入站",
                        "caption" : "掃碼入站",
                        "imageClass" : ""
                    },
                    {
                        "id" : "維修工單",
                        "caption" : "維修工單",
                        "imageClass" : ""
                    },
                    {
                        "id" : "維修前測試",
                        "caption" : "維修前測試",
                        "imageClass" : ""
                    },
                    {
                        "id" : "領料報工",
                        "caption" : "領料報工",
                        "imageClass" : ""
                    },
                    {
                        "id" : "廠內領料報工",
                        "caption" : "廠內領料報工",
                        "imageClass" : ""
                    },
                    {
                        "id" : "Test",
                        "caption" : "Test",
                        "imageClass" : "",
                        "closeBtn" : false,
                        "optBtn" : false,
                        "popBtn" : false,
                        "hidden" : true
                    },
                    {
                        "id" : "修復入庫",
                        "caption" : "修復入庫"
                    }
                ])
                .setLeft("0em")
                .setTop("9.142857142857142em")
                .setWidth("67.5047619047619em")
                .setBarLocation("left")
                .setBarSize("12em")
                .setValue("維修前測試")
                .onItemSelected("_mainpage_onitemselected")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"block1")
                .setDock("top")
                .setLeft("11.428571428571429em")
                .setTop("12.19047619047619em")
                .setHeight("8.380952380952381em"),
                "掃碼入站"
            );
            
            host.block1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"camera")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("18em")
                .setHeight("2.2857142857142856em")
                .setLabelSize("8em")
                .setLabelCaption("攝影機")
                .setLabelVAlign("middle")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1"
                    }
                ])
                .onChange("_camera_onchange")
            );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"startCameraBtn")
                .setLeft("21.409523809523808em")
                .setTop("0.7619047619047619em")
                .setWidth("7.542857142857143em")
                .setHeight("2.2857142857142856em")
                .setCaption("開始掃碼")
                .onClick("_startcamerabtn_onclick")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input29")
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button45")
                .setLeft("21.333333333333332em")
                .setTop("5.0285714285714285em")
                .setWidth("7.542857142857143em")
                .setHeight("2.2857142857142856em")
                .setCaption("入站")
                .onClick("_startcamerabtn_onclick")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"repairBlock")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("25.904761904761905em")
                .setHtml("<video id=\"video\" width=\"600\" height=\"400\">\n</video>\n"),
                "掃碼入站"
            );
            
            host.mainPage.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"testButtonView")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarSize("2.1333333333333333em")
                .setValue("a"),
                "Test"
            );
            
            host.testButtonView.append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"loginDialog")
                .setLeft("4.723809523809524em")
                .setTop("4.723809523809524em")
                .setWidth("20.419047619047618em")
                .setHeight("16.60952380952381em")
                .setCaption("登入")
                .setMaxBtn(false)
                .setCloseBtn(false),
                "a"
            );
            
            host.loginDialog.append(
                xui.create("xui.UI.Input")
                .setHost(host,"password")
                .setLeft("1.9047619047619047em")
                .setTop("4.571428571428571em")
                .setWidth("13.40952380952381em")
                .setLabelSize("4em")
                .setLabelCaption("密碼")
                .setType("password")
                .setValue("pwd")
            );
            
            host.loginDialog.append(
                xui.create("xui.UI.Button")
                .setHost(host,"loginBtn")
                .setLeft("6.857142857142857em")
                .setTop("8.380952380952381em")
                .setWidth("7.0095238095238095em")
                .setCaption("登入")
                .onClick("_loginbtn_onclick")
            );
            
            host.loginDialog.append(
                xui.create("xui.UI.Input")
                .setHost(host,"account")
                .setLeft("1.9047619047619047em")
                .setTop("1.8285714285714285em")
                .setWidth("13.714285714285714em")
                .setLabelSize("4em")
                .setLabelCaption("帳號")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"repairTabs")
                .setItems([
                    {
                        "id" : "Cryopump",
                        "caption" : "Cryopump維修工單",
                        "imageClass" : ""
                    },
                    {
                        "id" : "ShiCryopump",
                        "caption" : "Shi Cryopump維修工單"
                    },
                    {
                        "id" : "Crosshead",
                        "caption" : "Crosshead維修工單"
                    },
                    {
                        "id" : "ShiCrosshead",
                        "caption" : "Shi Crosshead維修工單"
                    },
                    {
                        "id" : "Compressor",
                        "caption" : "Compressor維修工單"
                    },
                    {
                        "id" : "3phControler",
                        "caption" : "3ph Controler維修工單"
                    },
                    {
                        "id" : "ModuleTest",
                        "caption" : "Module測試單"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("ModuleTest"),
                "維修工單"
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rtopblock1")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("14.476190476190476em")
                .setHeight("8.60952380952381em"),
                "Cryopump"
            );
            
            host.rtopblock1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input258")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.rtopblock1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"rsearchBtn1")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block102")
                .setDock("fill")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "Cryopump"
            );
            
            host.xui_ui_block102.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid1")
                .setProperties({
                    "tableName" : "ShiCryopump維修工單",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "ShiCryopumpEditForm",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : "",
                    "__inner_coms_prf__" : {
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
                        },
                        "grid" : {
                            "properties" : {
                                "dirtyMark" : true,
                                "header" : [
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Pump",
                                        "caption" : "Pump",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Pump P/N",
                                        "caption" : "Pump P/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Pump S/N",
                                        "caption" : "Pump S/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "日期",
                                        "caption" : "日期",
                                        "type" : "date",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "進廠原因",
                                        "caption" : "進廠原因",
                                        "type" : "input",
                                        "width" : "16em"
                                    }
                                ]
                            }
                        }
                    }
                })
                .setEvents({
                    "onCmdClick" : "_repairgrid1_oncmdclick",
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rtopblock2")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "Crosshead"
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input276")
                .setDataBinder("repairdb2")
                .setDataField("登錄編號")
                .setLeft("0.7619047619047619em")
                .setTop("2.2095238095238097em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Button")
                .setHost(host,"rsearchBtn2")
                .setLeft("47.23809523809524em")
                .setTop("2.2857142857142856em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input309")
                .setDataBinder("repairdb2")
                .setDataField("Crosshead編號")
                .setLeft("0.7619047619047619em")
                .setTop("4.495238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead編號")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block109")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "Crosshead"
            );
            
            host.xui_ui_block109.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid3")
                .setProperties({
                    "tableName" : "Crosshead維修工單",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "CrossheadEditForm",
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
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "日期",
                                        "caption" : "日期",
                                        "type" : "date",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Crosshead編號",
                                        "caption" : "Crosshead編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Model",
                                        "caption" : "Model",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "S/N",
                                        "caption" : "S/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Remark",
                                        "caption" : "Remark",
                                        "type" : "input",
                                        "width" : "16em"
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
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block454")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "ShiCryopump"
            );
            
            host.xui_ui_block454.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1452")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block454.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button685")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rblock2")
                .setDock("fill")
                .setLeft("22.095238095238095em")
                .setTop("19.047619047619047em"),
                "ShiCryopump"
            );
            
            host.rblock2.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid2")
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
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block460")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "ShiCrosshead"
            );
            
            host.xui_ui_block460.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1458")
                .setDataBinder("repairdb2")
                .setDataField("登錄編號")
                .setLeft("0.7619047619047619em")
                .setTop("2.2095238095238097em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block460.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button694")
                .setLeft("47.23809523809524em")
                .setTop("2.2857142857142856em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.xui_ui_block460.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1459")
                .setDataBinder("repairdb2")
                .setDataField("Crosshead編號")
                .setLeft("0.7619047619047619em")
                .setTop("4.495238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead編號")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rblock4")
                .setDock("fill")
                .setLeft("16em")
                .setTop("24.38095238095238em"),
                "ShiCrosshead"
            );
            
            host.rblock4.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid4")
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
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block466")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "Compressor"
            );
            
            host.xui_ui_block466.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1463")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block466.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button703")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rblock5")
                .setDock("fill")
                .setLeft("15.238095238095237em")
                .setTop("28.952380952380953em"),
                "Compressor"
            );
            
            host.rblock5.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid5")
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
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block469")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "3phControler"
            );
            
            host.xui_ui_block469.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1465")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block469.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button710")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rblock6")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("26.666666666666668em"),
                "3phControler"
            );
            
            host.rblock6.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid6")
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
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block539")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "ModuleTest"
            );
            
            host.xui_ui_block539.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input461")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block539.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button1173")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block540")
                .setDock("fill")
                .setLeft("20.571428571428573em")
                .setTop("27.428571428571427em"),
                "ModuleTest"
            );
            
            host.xui_ui_block540.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"reapirGrid7")
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
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block277")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "維修前測試"
            );
            
            host.xui_ui_block277.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input854")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block277.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button377")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"blockTest1")
                .setDock("fill")
                .setLeft("21.333333333333332em")
                .setTop("27.428571428571427em"),
                "維修前測試"
            );
            
            host.blockTest1.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"testGrid1")
                .setProperties({
                    "tableName" : "CryopumpWarranty原因分析表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "",
                    "openPageName" : "CryopumpWarrantyEditForm",
                    "mode" : "normal",
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : ""
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition"
                })
            );
            
            append(
                xui.create("xui.UI.PopMenu")
                .setHost(host,"popmenu1")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item 2",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item 3",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item 4",
                        "imageClass" : "xui-icon-number9",
                        "disabled" : true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"topBlock")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("3.8095238095238093em")
                .setHeight("2.2857142857142856em")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label82")
                .setDock("left")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("9.142857142857142em")
                .setTop("0.7619047619047619em")
                .setCaption("維修站管理系統")
                .setVAlign("middle")
                .setFontColor("#006400")
                .setFontSize("14px")
                .setFontWeight("bold")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"logoutBtn")
                .setDock("right")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("89.14285714285714em")
                .setTop("0.7619047619047619em")
                .setCaption("")
                .setImageClass("fa fa-lg fa-user-times")
                .onClick("_logoutbtn_onclick")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Label")
                .setHost(host,"labelUserName")
                .setDock("right")
                .setDockOrder(2)
                .setLeft("67.80952380952381em")
                .setTop("0.7619047619047619em")
                .setWidth("8em")
                .setCaption("使用者：")
                .setHAlign("left")
                .setVAlign("middle")
                .setFontSize("14px")
                .setFontWeight("bolder")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Label")
                .setHost(host,"labelUserTitle")
                .setDock("right")
                .setDockOrder(1)
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("79.16190476190476em")
                .setTop("0.6857142857142857em")
                .setWidth("12em")
                .setCaption("職稱：")
                .setHAlign("left")
                .setVAlign("middle")
                .setFontSize("14px")
                .setFontWeight("bolder")
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Gallery")
                .setHost(host,"message")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "message",
                        "imageClass" : "fa fa-lg fa-bell"
                    }
                ])
                .setDock("right")
                .setDockMargin({
                    "left" : 0,
                    "top" : -2,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("40.38095238095238em")
                .setTop("0em")
                .setWidth("2.9714285714285715em")
                .setHeight("2.2857142857142856em")
                .setBorderType("none")
                .setIconOnly(true)
                .setValue("a")
                .setCustomStyle({
                    "ITEMS" : {
                        "background-color" : "transparent",
                        "overflow" : "hidden"
                    },
                    "ITEM" : {
                        "color" : "#696969",
                        "background-color" : "transparent"
                    }
                })
            );
            
            host.topBlock.append(
                xui.create("xui.UI.Label")
                .setHost(host,"siteName")
                .setDock("left")
                .setDockMargin({
                    "left" : 20,
                    "top" : 0,
                    "right" : 0,
                    "bottom" : 0
                })
                .setLeft("9.904761904761905em")
                .setTop("0.7619047619047619em")
                .setCaption("xxx")
                .setVAlign("middle")
                .setFontColor("#FF4500")
                .setFontSize("18px")
                .setFontWeight("bold")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _xui_ui_comboinput17_beforecombopop:function(profile, pos, e, src){
            var ns = this, uictrl = profile.boxing();
            xui.newModule("App.CustListBox", function(err,mod){
                mod.popUp(uictrl);
            });
        },
        /**
         * When the timer is triggered regularly. If returns [false], the timer will end
         * @method onTime [xui.Timer event]
         * @param {xui} profile .Profile
         * @param {} threadId  String
        */
        _timer1_ontime:function(profile, threadId){
            var ns = this, uictrl = profile.boxing();
            if(Logined == 0)
            {
              Logined = 1;
              ns.loginDialog.showModal();
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
        _xui_ui_button107_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.modGrid1.loadGridData(0);
           // ns.datalist.loadGridData();
/*            
            xui.showModule("App.DataInputDialog",function(mod){
                mod.setEvents("onDestroy",function(){
                    xui.alert("Destroyed...");
                });
                
            });
*/            
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button8_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.modDataList.loadGridData();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button50_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
//            if(ns.modDatalist1.grid.getHeader().length == 0)
        },

        /**
         * Fired when a tab is selected
         * @method onItemSelected [xui.UI.ButtonViews event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
        */
        _mainpage_onitemselected:function(profile, item, e, src, n){
            var ns = this, uictrl = profile.boxing();
            //console.log(item);
            if(item.id == "員工資料管理")
                ns.employeeGrid.loadGridData(0);
        },
/**
         * Fired before the pop-up window is created. If returns false, the default pop window will be ignored
         * @method beforeComboPop [xui.UI.ComboInput event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {the} pos  mouse position
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
_xui_ui_comboinput531_beforecombopop:function(profile, pos, e, src){
    var ns = this, uictrl = profile.boxing();
//    ns.popmenu1.popUp(uictrl);
    ns.popmenu1.popUp(uictrl.n0.$_domid["xui.UI.ComboInput-INPUT"]);
    //var subnodes = uictrl.getSubNodes();
},
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button169_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.testCombo1.setValue("!234");
            ns.testCombo1.setCaption("!234  5678");
            console.log("children:",ns.modList1.getComponents());
            console.log("items:", ns.testCombo1.getItems());
            console.log("listkey:", ns.testCombo1.getListKey());
            console.log("prop:", ns.testCombo1.getPopCtrlProp());
            
        },
        /**
         * Fired when a cell's editor command button is clicked. Cell type must in 'date,time,datetime,listbox,combobox,helpinput,color,getter,popbox,cmdbox'
         * @method onCommand [xui.UI.TreeGrid event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {} cell  Object
         * @param {xui.UIProfile} proEditor , the editor profile Object, if the editor exists
         * @param {String} src , command button's xid
         * @param {}  
         * @param {}  
         * @param {}  
        */
        _xui_ui_treegrid212_oncommand:function(profile, cell, proEditor, src, n, r, a){
            var ns = this, uictrl = profile.boxing();
            console.log("command");
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
        _xui_ui_treegrid212_onclickcell:function(profile, cell, e, src, n, r){
            var ns = this, uictrl = profile.boxing();
            console.log("click");
            console.log(cell);
        },
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        startCodeReader: function(){
                        var ns = this;
                        CodeReader.decodeOnceFromVideoDevice(CameraDeviceId, 'video').then((result) => {
                            console.log(result);
                            ns.scanRepairNo.setValue(result.text);
                        }).catch((err) => {
                            console.error(err)
                        })
                        console.log(`Started continous decode from camera with id ${CameraDeviceId}`)
            
        },
        resetCodeReader: function(){
                        CodeReader.reset();
                        console.log('Reset.');            
        },
        initCodeReader: function(){
            var ns = this;
            CameraDeviceId = "";
            CodeReader = new ZXing.BrowserMultiFormatReader;//BrowserBarcodeReader();
            console.log('ZXing code reader initialized');
            CodeReader.getVideoInputDevices()
                .then((videoInputDevices) => {
                    CameraDeviceId = videoInputDevices[0].deviceId;
                    var items = [];
                    if (videoInputDevices.length > 0) {
                        videoInputDevices.forEach((element) => {
                            let item = {"id":element.deviceId,"caption":element.label};
                            items.push(item);
                        })
                    }
                    ns.camera.setItems(items);
                })
                .catch((err) => {
                    console.error(err)
                })        
        },
        updateRepairSiteTabs: function(){
            var ns=this;
                ns.repairTabs.updateItem("Cryopump",{"hidden": true});        
                ns.repairTabs.updateItem("ShiCryopump",{"hidden": true});        
                ns.repairTabs.updateItem("Crosshead",{"hidden": true});        
                ns.repairTabs.updateItem("ShiCrosshead",{"hidden": true});        
                ns.repairTabs.updateItem("Compressor",{"hidden": true});        
                ns.repairTabs.updateItem("3phControler",{"hidden": true});        
            if(SiteName.includes("Vacumm") || SiteName.includes("Helium"))
            {
                ns.repairTabs.updateItem("Cryopump",{"hidden": false});        
                ns.repairTabs.updateItem("ShiCryopump",{"hidden": false});        
            }
            else if(SiteName.includes("Crosshead"))
            {
                ns.repairTabs.updateItem("Crosshead",{"hidden": false});        
                ns.repairTabs.updateItem("ShiCrosshead",{"hidden": false});        
            }            
            else if(SiteName.includes("Compressor"))
            {
                ns.repairTabs.updateItem("Compressor",{"hidden": false});        
                ns.repairTabs.updateItem("3phControler",{"hidden": false});        
            }            
        },
            _xui_ui_button62_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.popmenu1.popUp(uictrl);
            },
                events:{
                    "onReady" : "_page_onready"
                },
                _page_onready:function(e,i){
                    var ns = this;
                    ns.initCodeReader();        
                    Logined = 0;
    
                    utils.installModuleTableBoxHooks(ns);
                    xui.setLang("tw");
                    ns.siteName.setCaption(SiteName);
                    ns.updateRepairSiteTabs();

                },
        onUserLogined: function(){
          var ns = this;    
          ns.labelUserName.setCaption("使用者：" + LoginUser.DisplayName);  
          ns.labelUserTitle.setCaption("職稱：" + LoginUser.JobTitle);  
          var value = utils.getItemValue("BU3員工資料表","員工代號", LoginUser.EmplID, "權限");
          LoginUser["Privilege"] = value;  
          if(value.indexOf("主管") != -1)
          {
              ns.mainPage.updateItem("掃碼入站", {"hidden":"hidden"});        
          }
        },        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _loginbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var account = ns.account.getValue();
            var passwd  = ns.password.getValue();
            var cb = function(data){
                if(data)
                {
                  if(data.result == "OK")
                  {
                    LoginUser =  data.item;
                    Logined = 2;  //logined 
                    ns.loginDialog.hide();  
                    ns.onUserLogined();  
                  }
                  else
                      xui.alert("帳號，密碼錯誤!!");
                }
                
            };
            utils.sendLoginCmd({"cmd":"login","account":account, "passwd":passwd},cb);
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
        _camera_onchange:function(profile, oldValue, newValue, force, tag, tagVar){
            var ns = this, uictrl = profile.boxing();
            CameraDeviceId = newValue;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _startcamerabtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.startCodeReader();
        },
        openPickingForm: function(item){
            var condition = `登錄編號 = '${item["登錄編號"]} AND Model = '${item["Model"]} AND 維修站名 = '${item["維修站名"]}'`;
            var value = utils.getItemValueByCondition("維修站領用料表", condition, "*");
            if(value == "")
            {
                value = {"維修站名":RepairSideName, "Model":item["Model"], "登錄編號":item["登錄編號"],
                        "領用人ID": LoginUSer.EmplID, "領用人名稱":LoginUSer.DisplayName};
                utils.showDataPage("PickingEditForm", value ,"new");
            }
            else 
            {
                utils.showDataPage("PickingEditForm", value ,"edit");
            }
        },
        _repairgrid1_oncmdclick:function(grid,item,cmdkey){
            var ns = this;
            if(cmdkey == "領料單" && typeof item != "undefined")
            {
                ns.openPickingForm(item);
            }

        },
        getSiteRepairNoList: function(){
            var condition = `所在站名 = '${SiteName}'`; 
            var s = "";
            var data = utils.getTableItems({"tableName":"維修站總資料表","fields":"登錄編號","condition":condition}, null, true);//wait  
            for(var i=0; i<data.rows.length; i++)
            {
              var item = data.rows[i];  
              s += `${items[0]}`;
              if(i != data.rows.length-1)
                  s += ",";
            }
            return s;
        },
        _repairgrid1_onpreparecondition:function(){
            var ns = this;
            var values = ns.getSiteRepairNoList();
            return `登錄編號 IN (${values})`;
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