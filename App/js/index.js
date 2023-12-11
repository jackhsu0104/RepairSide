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
                xui.create("xui.Timer")
                .setHost(host,"timer2")
                .setInterval(10000)
                .onTime("_timer2_ontime")
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
                xui.create("xui.DataBinder")
                .setHost(host,"sitedb")
                .setName("sitedb")
            );
            
            append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"mainPage")
                .setItems([
                    {
                        "id" : "掃碼入站",
                        "caption" : "掃碼入站",
                        "imageClass" : "",
                        "hidden" : true
                    },
                    {
                        "id" : "維修工單",
                        "caption" : "維修工單",
                        "imageClass" : ""
                    },
                    {
                        "id" : "維修委託單/工單",
                        "caption" : "維修委託單/工單"
                    },
                    {
                        "id" : "維修測試區",
                        "caption" : "維修測試區",
                        "imageClass" : ""
                    },
                    {
                        "id" : "領料報工",
                        "caption" : "領料報工",
                        "imageClass" : "",
                        "hidden" : true
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
                        "id" : "站內物件列表",
                        "caption" : "完工物件列表"
                    },
                    {
                        "id" : "已入庫清單",
                        "caption" : "已入庫清單"
                    }
                ])
                .setLeft("0em")
                .setTop("9.142857142857142em")
                .setWidth("67.5047619047619em")
                .setBarLocation("left")
                .setBarSize("12em")
                .setValue("站內物件列表")
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
                xui.create("xui.UI.ComboInput")
                .setHost(host,"scanRepairNo")
                .setDataBinder("repairdb1")
                .setDataField("入站登錄編號")
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
                .setType("popbox")
            );
            
            host.block1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"inSiteBtn")
                .setLeft("21.333333333333332em")
                .setTop("5.0285714285714285em")
                .setWidth("7.542857142857143em")
                .setHeight("2.2857142857142856em")
                .setCaption("入站")
                .onClick("_insitebtn_onclick")
            );
            
            host.block1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"onSiteName")
                .setDataBinder("repairdb1")
                .setDataField("維修站名")
                .setReadonly(true)
                .setLeft("32.666666666666664em")
                .setTop("5.333333333333333em")
                .setWidth("9.866666666666667em")
                .setValue("拆解站")
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
                .setCloseBtn(false)
                .onShow("_logindialog_onshow"),
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
                .onHotKeypress("_password_onhotkeypress")
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
                .onHotKeypress("_account_onhotkeypress")
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
                        "id" : "Crosshead",
                        "caption" : "Crosshead維修工單"
                    },
                    {
                        "id" : "Compressor",
                        "caption" : "Compressor維修工單"
                    },
                    {
                        "id" : "Controller",
                        "caption" : "Controller維修工單",
                        "hidden" : false
                    },
                    {
                        "id" : "ChallentechBench",
                        "caption" : "Challentech Bench 維修工單",
                        "hidden" : true
                    },
                    {
                        "id" : "ModuleTest",
                        "caption" : "Module測試表"
                    },
                    {
                        "id" : "CylinderHeater",
                        "caption" : "Cylinder/Heater維修工單",
                        "hidden" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("Cryopump")
                .onItemSelected("_repairtabs_onitemselected"),
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
                .setHost(host,"repair1")
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
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchbtn1_onclick")
            );
            
            host.rtopblock1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtn1")
                .setLeft("4.666666666666667em")
                .setTop("5.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtn1_onclick")
            );
            
            host.rtopblock1.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtn1")
                .setLeft("14em")
                .setTop("5.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtn1_onclick")
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
                    "tableName" : "Cryopump維修工單查詢",
                    "insertTableName" : "Cryopump維修工單",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "CryopumpEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "秘書確認",
                                        "caption" : "秘書確認",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    }
                                ]
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
                                "dirtyMark" : true
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
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
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
                .setHeight("9.933333333333334em"),
                "Crosshead"
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repair3")
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
                .setLeft("22em")
                .setTop("2.2857142857142856em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchbtn2_onclick")
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xh3")
                .setDataBinder("repairdb2")
                .setDataField("Crosshead編號")
                .setLeft("0.7619047619047619em")
                .setTop("4.495238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Crosshead編號")
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtn3")
                .setLeft("5.40952380952381em")
                .setTop("7.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtn3_onclick")
            );
            
            host.rtopblock2.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtn3")
                .setLeft("14.780952380952382em")
                .setTop("7.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtn3_onclick")
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
                    "tableName" : "Crosshead維修工單查詢",
                    "insertTableName" : "Crosshead維修工單",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "CrossheadEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "Crosshead編號",
                                        "caption" : "XH",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "已安裝Pump登錄編號",
                                        "caption" : "已安裝Pump登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
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
                        },
                        "copyBtn" : {
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
                .setHost(host,"xui_ui_block466")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "Compressor"
            );
            
            host.xui_ui_block466.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repair5")
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
                .setHost(host,"rsearchBtn5")
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchbtn5_onclick")
            );
            
            host.xui_ui_block466.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtn5")
                .setLeft("5.40952380952381em")
                .setTop("5.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtn5_onclick")
            );
            
            host.xui_ui_block466.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtn5")
                .setLeft("14.780952380952382em")
                .setTop("5.266666666666667em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtn5_onclick")
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
                    "tableName" : "Compressor維修工單查詢",
                    "insertTableName" : "Compressor維修工單",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "CompressorEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "秘書確認",
                                        "caption" : "秘書確認",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    }
                                ]
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
                                "dirtyMark" : true
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
                        "copyBtn" : {
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
                .setHost(host,"xui_ui_block469")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "Controller"
            );
            
            host.xui_ui_block469.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repair6")
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
                .setHost(host,"rsearchBtn6")
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchbtn6_onclick")
            );
            
            host.xui_ui_block469.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtn6")
                .setLeft("5.40952380952381em")
                .setTop("4.6em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtn6_onclick")
            );
            
            host.xui_ui_block469.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtn6")
                .setLeft("14.780952380952382em")
                .setTop("4.6em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtn6_onclick")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"rblock6")
                .setDock("fill")
                .setLeft("10.666666666666666em")
                .setTop("26.666666666666668em"),
                "Controller"
            );
            
            host.rblock6.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"repairGrid6")
                .setProperties({
                    "tableName" : "3phControler維修工單查詢",
                    "insertTableName" : "3phControler維修工單",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "3phControlerEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Pump",
                                        "caption" : "Model",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "秘書確認",
                                        "caption" : "秘書確認",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    }
                                ]
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
                                "dirtyMark" : true
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
                        "copyBtn" : {
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
                .setHost(host,"xui_ui_block539")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "ModuleTest"
            );
            
            host.xui_ui_block539.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repair7")
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
                .setHost(host,"rsearchBtn7")
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchbtn7_onclick")
            );
            
            host.xui_ui_block539.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtn7")
                .setLeft("6.171428571428572em")
                .setTop("5.333333333333333em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtn7_onclick")
            );
            
            host.xui_ui_block539.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtn7")
                .setLeft("15.542857142857143em")
                .setTop("5.333333333333333em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtn7_onclick")
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
                .setHost(host,"repairGrid7")
                .setProperties({
                    "tableName" : "Module功能測試表查詢",
                    "insertTableName" : "Module功能測試表",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "ModuleTestForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Module#1",
                                        "caption" : "Module",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "秘書確認",
                                        "caption" : "秘書確認",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N#1",
                                        "caption" : "Module P/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "S/N#1",
                                        "caption" : "Module S/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
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
                        },
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
                .setEvents({
                    "onPrepareCondition" : "_repairgrid1_onpreparecondition",
                    "onInitNewData" : null
                })
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block298")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "ChallentechBench"
            );
            
            host.xui_ui_block298.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input983")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block298.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button363")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"blockChallentech")
                .setDock("fill")
                .setLeft("24.666666666666668em")
                .setTop("24em"),
                "ChallentechBench"
            );
            
            host.blockChallentech.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"challentechGrid")
                .setProperties({
                    "tableName" : "ChallentechBench維修工單",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "登錄編號 IN (SELECT 登錄編號 FROM 維修站總資料表 WHERE 維修站名 = {SiteName})",
                    "condition2" : "",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "ChallentechBenchEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "品名",
                                        "caption" : "品名",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "日期",
                                        "caption" : "日期",
                                        "type" : "date",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "入廠原因",
                                        "caption" : "入廠原因",
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
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block355")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "CylinderHeater"
            );
            
            host.xui_ui_block355.append(
                xui.create("xui.UI.Input")
                .setHost(host,"repairHeater")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block355.append(
                xui.create("xui.UI.Button")
                .setHost(host,"rsearchHeaterBtn")
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_rsearchheaterbtn_onclick")
            );
            
            host.xui_ui_block355.append(
                xui.create("xui.UI.Button")
                .setHost(host,"finishBtnHeater")
                .setLeft("6.171428571428572em")
                .setTop("5.333333333333333em")
                .setWidth("7.066666666666666em")
                .setCaption("已完工")
                .onClick("_finishbtnheater_onclick")
            );
            
            host.xui_ui_block355.append(
                xui.create("xui.UI.Button")
                .setHost(host,"unfinishBtnHeater")
                .setLeft("15.542857142857143em")
                .setTop("5.333333333333333em")
                .setWidth("7.066666666666666em")
                .setCaption("未完工")
                .setFontColor("#90EE90")
                .setFontWeight("800")
                .onClick("_unfinishbtnheater_onclick")
            );
            
            host.repairTabs.append(
                xui.create("xui.UI.Block")
                .setHost(host,"blockHeater")
                .setDock("fill")
                .setLeft("24.666666666666668em")
                .setTop("22em"),
                "CylinderHeater"
            );
            
            host.blockHeater.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"heaterGrid")
                .setProperties({
                    "tableName" : "CylinderHeater維修工單查詢",
                    "insertTableName" : "CylinderHeater維修工單",
                    "displayFields" : "",
                    "condition" : "維修站名 = {SiteName} AND 維修狀態 NOT IN ('出貨','入庫')",
                    "condition2" : "維修狀態 NOT IN ('完工','不修','簡修完工') ",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "CylinderHeaterEditForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
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
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "秘書確認",
                                        "caption" : "秘書確認",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "P/N",
                                        "caption" : "P/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Cylinder S/N",
                                        "caption" : "S/N",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "維修狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    }
                                ]
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
                                "dirtyMark" : true
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
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block392")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "領料報工"
            );
            
            host.xui_ui_block392.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input292")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block392.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button851")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block393")
                .setDock("fill")
                .setLeft("35.04761904761905em")
                .setTop("25.142857142857142em"),
                "領料報工"
            );
            
            host.xui_ui_block393.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"pickingGrid1")
                .setProperties({
                    "tableName" : "領料報工單",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "客戶代號 != '190026'",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "領料報工單號",
                    "openPageName" : "ErpPickingForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : ""
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block395")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "廠內領料報工"
            );
            
            host.xui_ui_block395.append(
                xui.create("xui.UI.Button")
                .setHost(host,"noUploadSearchBtn")
                .setLeft("4.666666666666667em")
                .setTop("4em")
                .setWidth("8.4em")
                .setCaption("未上傳")
                .onClick("_nouploadsearchbtn_onclick")
            );
            
            host.xui_ui_block395.append(
                xui.create("xui.UI.Button")
                .setHost(host,"uploadSearchBtn")
                .setLeft("16em")
                .setTop("4em")
                .setWidth("8.4em")
                .setCaption("已上傳")
                .onClick("_uploadsearchbtn_onclick")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block396")
                .setDock("fill")
                .setLeft("19.80952380952381em")
                .setTop("25.142857142857142em"),
                "廠內領料報工"
            );
            
            host.xui_ui_block396.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"pickingGrid2")
                .setProperties({
                    "tableName" : "領料報工單",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "客戶代號 = '190026'",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "領料報工單號",
                    "openPageName" : "ErpPickingForm",
                    "mode" : "normal",
                    "enableCopyButton" : false,
                    "formCaption" : "",
                    "newDatas" : null,
                    "binder" : "",
                    "useCache" : false,
                    "saveIgnoreFields" : "",
                    "excelFileName" : ""
                })
                .setEvents({
                    "onInitNewData" : "_pickinggrid2_oninitnewdata",
                    "onOpenRecord" : "_pickinggrid2_onopenrecord",
                    "onCreateRecords" : "_pickinggrid2_oncreaterecords"
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block398")
                .setDock("top")
                .setLeft("15.238095238095237em")
                .setTop("16em")
                .setHeight("8.60952380952381em"),
                "站內物件列表"
            );
            
            host.xui_ui_block398.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input296")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block398.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button865")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block399")
                .setDock("fill")
                .setLeft("35.04761904761905em")
                .setTop("24.38095238095238em"),
                "站內物件列表"
            );
            
            host.xui_ui_block399.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"outGrid")
                .setProperties({
                    "tableName" : "站內物件查詢2",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "完工狀態 IN ('完工','不修','簡修完工')",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "",
                    "mode" : "readonly",
                    "enableCopyButton" : false,
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
                                "rowHandlerWidth" : "8em",
                                "header" : [
                                    {
                                        "id" : "ERP維修單號",
                                        "caption" : "ERP維修單號",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "完工狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "產品分類",
                                        "caption" : "產品分類",
                                        "type" : "input",
                                        "width" : "8em"
                                    }
                                ],
                                "tagCmds" : [
                                    {
                                        "id" : "out",
                                        "type" : "button",
                                        "location" : "left",
                                        "caption" : "入庫"
                                    },
                                    {
                                        "id" : "unfinish",
                                        "type" : "button",
                                        "location" : "left",
                                        "caption" : "取消完工"
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
                        },
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
                .setEvents({
                    "onCmdClick" : "_outgrid_oncmdclick"
                })
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block710")
                .setDock("top")
                .setLeft("16em")
                .setTop("16.761904761904763em")
                .setHeight("8.60952380952381em"),
                "已入庫清單"
            );
            
            host.xui_ui_block710.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input678")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.xui_ui_block710.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button1534")
                .setLeft("46.476190476190474em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
            );
            
            host.mainPage.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"outHistoryGrid")
                .setProperties({
                    "tableName" : "站內物件查詢2",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "完工狀態 = '入庫' ",
                    "condition2" : "",
                    "orderby" : "",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "",
                    "mode" : "readonly",
                    "enableCopyButton" : false,
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
                                "rowHandlerWidth" : "6em",
                                "header" : [
                                    {
                                        "id" : "ERP維修單號",
                                        "caption" : "ERP維修單號",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "維修前測試",
                                        "caption" : "維修前測試",
                                        "type" : "checkbox",
                                        "width" : "5.485714285714286em"
                                    },
                                    {
                                        "id" : "登錄編號",
                                        "caption" : "登錄編號",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "Extno",
                                        "caption" : "-",
                                        "type" : "input",
                                        "width" : "1.980952380952381em"
                                    },
                                    {
                                        "id" : "維修分類歸屬",
                                        "caption" : "維修分類歸屬",
                                        "type" : "input",
                                        "width" : "6.019047619047619em"
                                    },
                                    {
                                        "id" : "客戶名稱",
                                        "caption" : "客戶名稱",
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
                                        "id" : "P/N",
                                        "caption" : "P/N",
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
                                        "id" : "ID",
                                        "caption" : "ID",
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
                                    },
                                    {
                                        "id" : "完工狀態",
                                        "caption" : "完工狀態",
                                        "type" : "input",
                                        "width" : "8em"
                                    },
                                    {
                                        "id" : "產品分類",
                                        "caption" : "產品分類",
                                        "type" : "input",
                                        "width" : "8em"
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
                        },
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                }),
                "已入庫清單"
            );
            
            host.mainPage.append(
                xui.create("xui.UI.Block")
                .setHost(host,"wrtopblock")
                .setDock("top")
                .setLeft("14.476190476190476em")
                .setTop("15.238095238095237em")
                .setHeight("8.60952380952381em"),
                "維修委託單/工單"
            );
            
            host.wrtopblock.append(
                xui.create("xui.UI.Input")
                .setHost(host,"wrRepairNo")
                .setDataBinder("repairdb1")
                .setDataField("登錄編號")
                .setLeft("0.8380952380952381em")
                .setTop("1.6em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("登錄編號")
            );
            
            host.wrtopblock.append(
                xui.create("xui.UI.Button")
                .setHost(host,"wrRepairSearchBtn")
                .setLeft("22em")
                .setTop("1.5238095238095237em")
                .setWidth("10.666666666666666em")
                .setCaption("查詢")
                .onClick("_wrrepairsearchbtn_onclick")
            );
            
            host.mainPage.append(
                xui.create("Module.DataGrid", "xui.Module")
                .setHost(host,"wrGrid")
                .setProperties({
                    "tableName" : "維修工單列表",
                    "insertTableName" : "",
                    "displayFields" : "",
                    "condition" : "維修狀態 NOT IN ('出貨','完工','簡修完工','不修','入庫')",
                    "condition2" : "",
                    "orderby" : "登錄編號 DESC",
                    "fieldWidths" : null,
                    "fieldCaptions" : null,
                    "pageLength" : 100,
                    "keyid" : "登錄編號",
                    "openPageName" : "",
                    "mode" : "readonly",
                    "enableCopyButton" : false,
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
                                        "id" : "維修狀態",
                                        "caption" : "維修狀態",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "維修站名",
                                        "caption" : "維修站名",
                                        "width" : "8em",
                                        "type" : "input"
                                    },
                                    {
                                        "id" : "維修工單",
                                        "caption" : "維修工單",
                                        "type" : "input",
                                        "width" : "16em"
                                    }
                                ],
                                "tagCmds" : [
                                    {
                                        "id" : "edit",
                                        "type" : "button",
                                        "location" : "",
                                        "caption" : "編輯工單"
                                    }
                                ]
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
                        "copyBtn" : {
                            "properties" : {
                                "dirtyMark" : true
                            }
                        }
                    }
                })
                .setEvents({
                    "onCmdClick" : "_wrgrid_oncmdclick",
                    "onDeleteRecords" : "_wrgrid_ondeleterecords"
                }),
                "維修委託單/工單"
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
                .setWidth("15.333333333333334em")
                .setCaption("維修站管理系統-20231210")
                .setHAlign("left")
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
                .onClick("_message_onclick")
                .onFlagClick("_message_onflagclick")
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
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block931")
                .setDock("top")
                .setLeft("17.523809523809526em")
                .setTop("4.571428571428571em")
                .setHeight("3.0476190476190474em")
                .setConDockSpacing({
                    "width" : 10,
                    "height" : 0
                })
            );
            
            host.xui_ui_block931.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"siteTabs")
                .setItems([
                    {
                        "id" : "拆解站",
                        "caption" : "拆解站"
                    },
                    {
                        "id" : "Crosshead",
                        "caption" : "Crosshead站"
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
                        "id" : "Module",
                        "caption" : "Module站"
                    },
                    {
                        "id" : "測試站",
                        "caption" : "測試站"
                    },
                    {
                        "id" : "Compressor",
                        "caption" : "Compressor站"
                    },
                    {
                        "id" : "Controller",
                        "caption" : "Controller站"
                    },
                    {
                        "id" : "Heater",
                        "caption" : "Heater站"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setSandboxTheme("classic")
                .setValue("拆解站")
                .onItemSelected("_sitetabs_onitemselected")
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
        appendPage:function(pagename, subid){
            var ns  = this;
            xui.newModule("App."+  pagename,function(err,mod){
                Pages[subid] = mod;
                ns.mainPage.append(mod, subid);
                utils.installModuleTableBoxHooks(mod);
                utils.installDataBinderHooks(mod);
            });
        
        },        
        loadPage: function(subid){
          var ns = this;
          if(Pages[subid])
              return;
          var pageName = "";  
          if(subid == "維修測試區")
            pageName = "TestAreaForm";
          if(pageName != "")
            ns.appendPage(pageName, subid);
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
            //if(item.id == "員工資料管理")
            //    ns.employeeGrid.loadGridData(0);
            if(item.id == "維修測試區")
                ns.loadPage(item.id);
            else if(item.id == "站內物件列表")
                ns.outGrid.refreshGrid();
            else if(item.id == "已入庫清單")
                ns.outHistoryGrid.refreshGrid();
            else if(item.id == "維修工單")
                ns.updateAllGrids();

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
                            ns.processInsite();
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
              //  ns.repairTabs.updateItem("ShiCryopump",{"hidden": true});        
                ns.repairTabs.updateItem("Crosshead",{"hidden": true});        
              //  ns.repairTabs.updateItem("ShiCrosshead",{"hidden": true});        
                ns.repairTabs.updateItem("Compressor",{"hidden": true});        
                ns.repairTabs.updateItem("Controller",{"hidden": true});        
                ns.repairTabs.updateItem("ModuleTest",{"hidden": true});        
                ns.repairTabs.updateItem("ChallentechBench",{"hidden": true});        
                ns.repairTabs.updateItem("CylinderHeater",{"hidden": true});        
            if(SiteName.includes("Vacuum") || SiteName.includes("Helium"))
            {
                ns.repairTabs.updateItem("Cryopump",{"hidden": false});    
                ns.repairTabs.setValue("Cryopump");
                //ns.repairTabs.updateItem("ShiCryopump",{"hidden": false});        
            }
            else if(SiteName.includes("Crosshead"))
            {
                ns.repairTabs.updateItem("Crosshead",{"hidden": false});        
                ns.repairTabs.setValue("Crosshead");
                //ns.repairTabs.updateItem("ShiCrosshead",{"hidden": false});        
            }            
            else if(SiteName.includes("Compressor"))
            {
                ns.repairTabs.updateItem("Compressor",{"hidden": false});        
                ns.repairTabs.setValue("Compressor");
            }            
            else if(SiteName.includes("Module"))
            {
                ns.repairTabs.updateItem("ModuleTest",{"hidden": false});        
                ns.repairTabs.setValue("ModuleTest");
            }  
            else if(SiteName.includes("Controller"))
            {
                ns.repairTabs.updateItem("Controller",{"hidden": false});        
                ns.repairTabs.setValue("Controller");
            }  
            else if(SiteName.includes("Heater"))
            {
                ns.repairTabs.updateItem("CylinderHeater",{"hidden": false});        
                ns.repairTabs.setValue("CylinderHeater");
            }  
            else if(SiteName.includes("測試站"))
            {
                ns.repairTabs.updateItem("Cryopump",{"hidden": false});        
                ns.repairTabs.setValue("Cryopump");
            }
            else if(SiteName.includes("拆解站") || SiteName.includes("測試站"))
            {
                ns.repairTabs.updateItem("Cryopump",{"hidden": false});        
                //ns.repairTabs.updateItem("ShiCryopump",{"hidden": false});        
                ns.repairTabs.updateItem("Crosshead",{"hidden": false});        
                //ns.repairTabs.updateItem("ShiCrosshead",{"hidden": false});        
                ns.repairTabs.updateItem("ModuleTest",{"hidden": false});        
                //ns.repairTabs.updateItem("ChallentechBench",{"hidden": false});        
                ns.repairTabs.setValue("Cryopump");
           }
        },
            _xui_ui_button62_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.popmenu1.popUp(uictrl);
            },
                events:{
            "onReady" : "_page_onready",
            "afterShow" : "_page_aftershow"
        },
                _page_onready:function(e,i){
                    var ns = this;
                    //ns.initCodeReader();        
                    ShowDataCommand = true;
                    Logined = 0;
                    AppName = "RepairSide";
                    StoreNameList = {"拆解站":"1102-1","Vacuum side":"1102-3","Helium side":"1102-4","Compressor":"1102-7", "Crosshead":"1102-2","Module":"1102-5","測試站":"1102-6","Charcoal":"1102-8","Displacer":"1102-9"};
                    SiteName = "拆解站";
                    ns.repairdb1.setData("SiteName",SiteName);
                     xui.Ajax.method = "POST";
                    xui.Ajax.timeout = 15000;
                    xui.Ajax.retry = 3;
   
                    utils.installModuleTableBoxHooks(ns);
                    xui.setLang("tw");
                    ns.siteTabs.setValue(SiteName);
                    ns.siteName.setCaption(SiteName);
                    ns.updateRepairSiteTabs();
                    console.log("CloseDate:",utils.getCloseDate());
                    MainPage = ns;
                    Pages = {};
                    //utils.toggleFullScreen("document");

                },
        onUserLogined: function(){
          var ns = this;    
          ns.labelUserName.setCaption("使用者：" + LoginUser.DisplayName);  
          ns.labelUserTitle.setCaption("職稱：" + LoginUser.JobTitle);  
          var value = utils.getItemValue("BU3員工資料表","員工代號", LoginUser.EmplID, "權限");
          value = value.replace("主管","經理");  
          if(value.includes("經理"))
              value += ",組長";
          LoginUser["Privilege"] = value;  
//          if(value.indexOf("主管") == -1)
//          {
              ns.mainPage.updateItem("掃碼入站", {"hidden":"hidden"});        
//          }
          ns.updateAllGrids();
          ns.mainPage.setValue("維修工單");
          utils.toggleFullScreen("body");
          value = utils.getItemValue("crm.Employee","EmplID", LoginUser.EmplID, "DeptID");
          if(value != "")
              LoginUser.DeptID = value;
            
        },

        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _loginbtn_onclick:function(profile, e, src, value){
            var ns = this;
            var account = ns.account.getValue();
            var passwd  = ns.password.getValue();
            localStorage.setItem("RepairSide_Account", account);
            localStorage.setItem("RepairSide_Password", passwd);
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
            var condition = `維修站名 = '${SiteName}'`; 
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
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _logoutbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            Logined = 0;
            utils.sendLoginCmd({"cmd":"logout"});
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _sitebtn1_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var caption = uictrl.getCaption();
            SiteName = caption; 
        },
        updateAllGrids: function(){
            var ns = this;
            ns.repairGrid1.refreshGrid();
            ns.repairGrid3.refreshGrid();
            ns.repairGrid5.refreshGrid();
            ns.repairGrid6.refreshGrid();
            ns.repairGrid7.refreshGrid();
            ns.heaterGrid.refreshGrid();
            //ns.testGrid1.refreshGrid();
            //ns.testGrid2.refreshGrid();
            ns.pickingGrid1.refreshGrid();
            ns.pickingGrid2.refreshGrid();
            ns.wrGrid.refreshGrid();
        },
        /**
         * Fired when a tab is selected
         * @method onItemSelected [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
        */
        _sitetabs_onitemselected:function(profile, item, e, src, n){
            var ns = this, uictrl = profile.boxing();
            SiteName = item.id;
            ns.onSiteName.setValue(SiteName);
            StoreName = StoreNameList[SiteName]; 
            ns.siteName.setCaption(SiteName);
            ns.repairdb1.setData("SiteName",SiteName);
            ns.updateRepairSiteTabs();
            ns.updateAllGrids();            
            if(Logined == 2)
            {
              var s = SiteName;
              if(s.includes("站") == false)
                  s = s + "站";
              xui.alert("訊息","已切換到"+ s+"!");
            }
        },
            _testgrid1_oninitnewdata:function(){
                return {"Type":"維修前測試"};
            },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _searchpumptestbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var svalue = ns.testPumpRepairno.getUIValue();
            var condition = "";
            if(svalue != "")
                condition += `登錄編號 LIKE '%${svalue}%'`;
            ns.testGrid1.properties["condition"] = condition;
            ns.testGrid1.refreshGrid();    
        },
        processInsite: function(){
          var ns = this;
          var id = ns.scanRepairNo.getUIValue();
          var item = utils.getItemValue("維修站總資料表","登錄編號", id, "*");
          if(item == "") //新增維修單或測試單
          {
              var data1 = utils.getItemValue("CTI Control Number總資料庫","登錄編號", id, "*");
              if(data1 == "")
              {
                  xui.alert("查無此登錄編號!");
                  return;
              }
              var data = {"登錄編號":data1["登錄編號"],"客戶名稱":data1["客戶名稱"],"Model": data1["In Model"], "P/N":data1["In P/N"], "S/N":data1["In S/N"],
                          "維修站名":SiteName, "入站時間": utils.now(), "接收時間":utils.now()}
              utils.insertTableItem("維修站總資料表", data);
              data["保固期限"] = data1["保固期限"];
              data["維修前測試"] = data1["SL是否要測試"];
              utils.showDataPage("NewWorkSheetForm",data, "new");
          }
          else
          {
             item["入站時間"] = utils.now();
             item["維修站名"] = SiteName;
             delete item["rowid"]; 
             utils.modifyTableItem("維修站總資料表", "登錄編號", item); 
              ns.updateAllGrids();
             xui.alert("已入站!");
         }
        },
        getMessageCount:function(table, condition){
          var ns = this;  
          var condition2 = "";
          var cpairs = condition.split(",");
          for(var i=0; i<cpairs.length; i++)
          {
            var p2 = cpairs[i].split(":");
            condition2 += `([${p2[0]}] != '' AND [${p2[0]}] = '') `;
            if(i != cpairs.length-1)
              condition2 += ' OR ';  
          }
          var cb = function(data){
              if(typeof data != "object")
                  console.log("getMessageCount error:", data);
              else 
              {
                 var n = Number(data.rows[0][0]);
                 ns.messageCount += n;
                 ns.messageCountIndex++;
                 if(ns.messageCountIndex >= ns.messageCountMax)
                 {
                   ShowDataCommand = true;  
                   ns.message.setItems([
                      {
                        "id" : "a",
                        "caption" : "message",
                        "imageClass" : "fa fa-lg fa-bell",
                        "flagText": ns.messageCount
                      }
                    ]);                        
                 }
              }
          }  
          var data = utils.getTableItems({"tableName":table, "condition": condition2, "fields": "count(*)"}, cb);
          //return Number(data.rows[0][0]);  
        },
        getMessageCount2:function(table, condition){
          var ns = this;  
          var cb = function(data){
              if(typeof data != "object")
                  console.log("getMessageCount error:", data);
              else 
              {
                 var n = Number(data.rows[0][0]);
                 ns.messageCount += n;
                 ns.messageCountIndex++;
                 if(ns.messageCountIndex >= ns.messageCountMax)
                 {
                   ShowDataCommand = true; 
                   ns.message.setItems([
                      {
                        "id" : "a",
                        "caption" : "message",
                        "imageClass" : "fa fa-lg fa-bell",
                        "flagText": ns.messageCount
                      }
                    ]);                        
                 }
              }
          }  
          var data = utils.getTableItems({"tableName":table, "condition": condition, "fields": "count(*)"},cb);
          //return Number(data.rows[0][0]);  
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _insitebtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var id = ns.scanRepairNo.getUIValue();
            if(id == "")
                return;
            ns.processInsite();
        },
        newUnitServiceForm:function(id){
                var uitem = utils.getItemValue("UnitServiceForm子表","登錄編號", id);   
                if(uitem == "") //新增 Unit Service Form
                {
                  var ritem = utils.getItemValue("CTI Control Number總資料庫","登錄編號",id);
                  if(ritem == "")
                  {
                    xui.alert("查無登錄編號...");
                    return false;  
                  }
                  var workid = ritem["工號"];
                  var witem = utils.getItemValue("工號登錄總資料表","工號", workid);
                  var mitem = utils.getItemValue("UnitServiceForm子表","工號", workid);
                  if(mitem == "")  //新增unit service form 總表 
                  {
                      var emplName = ritem["Sponser"];
                      var emplID = utils.getItemValue("BU3員工資料表","姓名",emplName, "員工代號");
                      if(emplID == "")
                      {
                          emplID = "0860048";
                          emplName = "馬藍菁";
                      }
                      var today = utils.today();
                      var condition = `業務ID = '${emplID}' AND 日期 = '${today}'`;
                      var mdata = utils.getItemValueByCondition("UnitServiceForm總表", condition);
                      if(mdata == "")  //no today;s unit service form, create one
                      {
                        var data = {"業務ID":  emplID, "業務名稱": emplName,"日期": utils.today()};
                        mdata = utils.insertTableItem("UnitServiceForm總表", data, null, true);
                      }
                      var mid = mdata["總表單號"];
                  }
                  else 
                      var mid = mitem["總表單號"];
                      var robot = "Robot";
                      if(wdata["Robot"] == 0)
                        robot = "Cryo";
                      var subitem = {"總表單號": mid, "Type":"Repair", "登錄編號": id, "工號":ritem["工號"], "公司名稱":witem["客戶名稱"], "公司編號":witem["CompanyID"],
                             "Model":"In Model","P/N":"In P/N", "S/N":"In S/N", "End User":witem["End User"], "Tel":witem["電話"], "連絡人代號":witem["ContactID"], "Request By": emplName,
                             "日期":utils.today(), "System ID":ritem["System ID"], "Chamber ID": ritem["Chamber ID"], "Process":ritem["Process"], "User Name":witem["連絡人"],
                             "單別": robot};
                      uitem = utils.insertTableItem("UnitServiceForm子表", subitem);  
                  //xui.alert("Unit Service Form已產生!");
                  return true;  
                }
                return true;
        },
        _outgrid_oncmdclick:function(grid,item,cmdkey){
            var ns = this;
            if(typeof item == "undefined")
                return;
            var id = item["登錄編號"];
            if(cmdkey == "out")
            {
               // if(ns.newUnitServiceForm(id) == false)
               //     return;
                    if(item["ERP維修單號"] == "")
                    {
                      utils.alert("沒有ERP維修單號,無法入庫!");    
                      return;
                    }
                    utils.writeRepairStatus(id,"入庫");
                    ns.outGrid.refreshGrid();
                    ns.outHistoryGrid.refreshGrid();
                    utils.alert("已入庫!<br>已通知秘書!");
               // utils.showDataPage("SubUnitServiceForm",uitem,"edit", null, cb);  
            }
            else if(cmdkey == "unfinish")
            {
                    utils.writeRepairStatus(id,"待維修");
                    ns.outGrid.refreshGrid();
                    ns.outHistoryGrid.refreshGrid();
                    utils.alert("已取消完工!");
            }
        },
            /**
         * When the timer is triggered regularly. If returns [false], the timer will end
         * @method onTime [xui.Timer event]
         * @param {xui} profile .Profile
         * @param {} threadId  String
        */
            _timer2_ontime:function(profile, threadId){
                var ns = this, uictrl = profile.boxing();
             if(Logined != 2)
                return;
            ShowDataCommand = false;    
            var privilege = LoginUser["Privilege"];
            if(typeof privilege != "undefined" && (privilege.includes("組長")||privilege.includes("經理")))
            {
                ns.messageCount = 0;
                ns.messageCountIndex = 0;
                ns.messageCountMax = 10; //
                ns.getMessageCount("Cryopump維修工單", "A組裝簽名:A組長覆核,B組裝簽名:B組長覆核,C組裝簽名:C組長覆核,D測試人員簽名:D測試組長覆核");
                ns.getMessageCount("Crosshead維修工單", "C組裝簽名:C組長覆核");
                ns.getMessageCount("Compressor維修工單", "A簽名:A組長覆核,C簽名:C組長覆核");
                ns.getMessageCount2("Compressor零件更換表", "確認狀態 = '秘書已確認,通知Bench'");
                ns.getMessageCount2("Compressor零件更換表", "確認狀態 = '待組長確認'");
                ns.getMessageCount2("Compressor零件更換表", "確認狀態 = '待經理確認'");
                ns.getMessageCount2("Option零件更換表", "確認狀態 = '秘書已確認,通知Bench'");
                ns.getMessageCount2("Option零件更換表", "確認狀態 = '待組長確認'");
                    
                ns.getMessageCount2("站內物件查詢", "完工狀態 = '通知維修'");
                ns.getMessageCount2("CryopumpTestForm", "維修狀態 = '通知測試'");
                ns.getMessageCount2("CryopumpWarranty原因分析表", "維修狀態 = '通知測試'");
            }
        },
        _message_onflagclick:function(e,t,i,o){
            var ns = this;
             if(Logined != 2)
                return;
            var privilege = LoginUser["Privilege"];
            //if(typeof privilege != "undefined" && (privilege.includes("組長")||privilege.includes("主管")))
              utils.showPage("MessageDisplayForm");        

        },

        _pickinggrid2_oninitnewdata:function(){
            var data = {"型號":"","產品品號":"SVC-04","客戶代號":"190026","客戶簡稱":"佳霖","發票地址一":"新竹縣竹北市泰和路21號","課稅別":2, "營業稅率":0.05, "維修單別":"B200","維修站別":"902","維修部門":"902","單據日期":utils.getCloseDate()};
            return data;
        },
           /**
         * Fired when keyboard is pressed
         * @method onHotKeypress [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} keyboard , keyboard object
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
            _password_onhotkeypress:function(profile, keyboard, e, src){
                var ns = this, uictrl = profile.boxing();
                if(keyboard.key == 'enter')
                    ns._loginbtn_onclick();
            },
        /**
         * Fired when keyboard is pressed
         * @method onHotKeypress [xui.UI.Input event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} keyboard , keyboard object
         * @param {Event} e , Dom event object
         * @param {String} src , the event source DOM element's xid
        */
        _account_onhotkeypress:function(profile, keyboard, e, src){
            var ns = this, uictrl = profile.boxing();
                if(keyboard.key == 'enter')
                    ns._loginbtn_onclick();
        },
        _page_aftershow:function(e,i){
            var ns = this;
            ns.onSiteName.hide();

        },
        /**
         * Fired when a list item was clicked
         * @method onClick [xui.UI.Gallery event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {list} item  item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
        */
        _message_onclick:function(profile, item, e, src){
            var ns = this, uictrl = profile.boxing();
            ns._message_onflagclick();
        },
        _repairgrid1_onpreparecondition:function(){

},
    showWorkSheet: function(item){
        var work = item["維修工單"];
        var rid = item["登錄編號"];
        var data = utils.getItemValue(work, "登錄編號", rid);
        var formName = "CryopumpEditForm";
        if(work == "Crosshead維修工單")
            formName = "CrossheadEditForm";
        else if(work == "Compressor維修工單")
            formName = "CompressorEditForm";
        else if(work == "Module功能測試表")
            formName = "ModuleTestForm";
        else if(work == "CylinderHeater維修工單")
            formName = "CylinderHeaterEditForm";
        else if(work == "Controler維修工單")
            formName = "3phControlerEditForm";
        
        if(data != "")
            utils.showDataPage(formName, data, "edit");
        else 
            utils.alert("查無此工單!");
    },
    _wrgrid_oncmdclick:function(grid,item,cmdkey){
        var ns = this;
        if(cmdkey == "edit" && item != null)
        {
           ns.showWorkSheet(item); 
        }
    },
        _wrgrid_ondeleterecords:function(ids/*Array, target record ids*/, 
                                          deleteCallback/*Function, function(ids){},callback to delete rows*/){ 
            var ns = this;
            var grid = ns.wrGrid.grid;
            for(var i=0; i<ids.length; i++)
            {
              var row = grid.getRowMap(ids[i]); 
              utils.removeTableItem(row["維修工單"], "登錄編號", row["登錄編號"]);  
            }            
            return true;

        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _wrrepairsearchbtn_onclick:function(profile, e, src, value){
            var ns = this;
            var condition2 = "";
            var rid = ns.wrRepairNo.getUIValue();
            if(rid != "")
            {
               condition2 = `登錄編號 LIKE '%${rid}%'`;
            }
            ns.wrGrid.setProperties("condition2", condition2);
            ns.wrGrid.refreshGrid();
        },
        _pickinggrid2_onopenrecord:function(id/*String, the record id*/, 
                                             fields/*Hash, record fields*/, 
                                             updateCallback/*Function, function(id, fields){}, callback to update row*/){  
            return "editFactory";
        },
        _pickinggrid2_oncreaterecords:function(
        createCallback/*Function, function(id, fields){}, callback to add new row*/,
         updateCallback/*Function, function(id, fields){}, callback to update row*/
        ){
            return "newFactory";
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _pickingsearchbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            var rno = ns.pickingRepairNo.getUIValue();
            if(rno != "")
            {
                ns.pickingGrid2.properties.condition2 = `登錄編號 LIKE '${rno}'`;
                ns.pickingGrid2.refreshGrid();
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
        _nouploadsearchbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.pickingGrid2.properties.condition2 = '已上傳 != 1';
            ns.pickingGrid2.refreshGrid();
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _uploadsearchbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.pickingGrid2.properties.condition2 = '已上傳 = 1';
            ns.pickingGrid2.refreshGrid();
        },
        /**
         * Fires when the dialog shows
         * @method onShow [xui.UI.Dialog event]
         * @param {xui} profile .UIProfile
        */
        _logindialog_onshow:function(profile){
            var ns = this, uictrl = profile.boxing();
            var value = localStorage.getItem("RepairSide_Account");
            ns.account.setValue(value);
            value = localStorage.getItem("RepairSide_Password");
            ns.password.setValue(value);
        },
        searchRepairGrid: function(grid, rnoctrl, xhctrl = null){
                var rno = rnoctrl.getUIValue();            
                var xh = "";
                if(xhctrl)
                    xh = xhctrl.getUIValue();
                if(rno != "")
                    grid.properties["condition2"] = ` 登錄編號 LIKE '%${rno}%'`;
                else
                    grid.properties["condition2"] = "";

                if(xh != "")
                    grid.properties["condition2"] += ` Crosshead編號 LIKE '%${xh}%'`;
                
                grid.refreshGrid();
        },
        finishRepairGrid:function(grid, rnoctrl, xhctrl = null){
                var rno = rnoctrl.getUIValue();            
                var xh = "";
                if(xhctrl)
                    xh = xhctrl.getUIValue();
                if(rno != "")
                    grid.properties["condition2"] = `登錄編號 LIKE '%${rno}%'`;
                else
                    grid.properties["condition2"] = "";
                if(xh != "")
                    grid.properties["condition2"] += ` Crosshead編號 LIKE '%${xh}%'`;
                if(grid.properties["condition2"] != "")
                    grid.properties["condition2"] += " AND ";
                grid.properties["condition2"] += "維修狀態 IN ('完工','不修','簡修完工')";
                grid.refreshGrid();
            
        },
        unfinishRepairGrid:function(grid, rnoctrl, xhctrl = null){
                var rno = rnoctrl.getUIValue();            
                var xh = "";
                if(xhctrl)
                    xh = xhctrl.getUIValue();
                if(rno != "")
                    grid.properties["condition2"] = `登錄編號 LIKE '%${rno}%'`;
                else
                    grid.properties["condition2"] = "";
                if(xh != "")
                    grid.properties["condition2"] += ` Crosshead編號 LIKE '%${xh}%'`;
                if(grid.properties["condition2"] != "")
                    grid.properties["condition2"] += " AND ";
                grid.properties["condition2"] += "維修狀態 NOT IN ('完工','不修','簡修完工')";
                grid.refreshGrid();
            
        },        
            /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
            _rsearchbtn1_onclick:function(profile, e, src, value){
                var ns = this, uictrl = profile.boxing();
                ns.searchRepairGrid(ns.repairGrid1, ns.repair1);
            },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtn1_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.repairGrid1, ns.repair1);
             utils.setButtonFocused(uictrl); 

        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtn1_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.unfinishRepairGrid(ns.repairGrid1, ns.repair3, ns.xh3);
              utils.setButtonFocused(uictrl); 
       },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtn3_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.repairGrid3, ns.repair3, ns.xh3);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _rsearchbtn2_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.searchRepairGrid(ns.repairGrid3, ns.repair3, ns.xh3);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtn3_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.unfinishRepairGrid(ns.repairGrid3, ns.repair3, ns.xh3);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _rsearchbtn5_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.searchRepairGrid(ns.repairGrid5, ns.repair5);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtn5_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.repairGrid5, ns.repair5);
              utils.setButtonFocused(uictrl); 
       },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtn5_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.unfinishRepairGrid(ns.repairGrid5, ns.repair5);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _rsearchbtn6_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.searchRepairGrid(ns.repairGrid6, ns.repair6);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtn6_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.repairGrid6, ns.repair6);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtn6_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.unfinishRepairGrid(ns.repairGrid6, ns.repair6);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _rsearchbtn7_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.searchRepairGrid(ns.repairGrid7, ns.repair7);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtn7_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.repairGrid7, ns.repair7);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtn7_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.unfinishRepairGrid(ns.repairGrid7, ns.repair7);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _rsearchheaterbtn_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.searchRepairGrid(ns.heaterGrid, ns.repairHeater);
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _finishbtnheater_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            ns.finishRepairGrid(ns.heaterGrid, ns.repairHeater);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _unfinishbtnheater_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
             ns.unfinishRepairGrid(ns.heaterGrid, ns.repairHeater);
             utils.setButtonFocused(uictrl); 
        },
        /**
         * Fired when a tab is selected
         * @method onItemSelected [xui.UI.Tabs event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Object} item , item Object
         * @param {Event} e , the DOM event Object
         * @param {String} src , the event source DOM element's xid
         * @param {}  
        */
        _repairtabs_onitemselected:function(profile, item, e, src, n){
            var ns = this, uictrl = profile.boxing();
            //ns.updateAllGrids();
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