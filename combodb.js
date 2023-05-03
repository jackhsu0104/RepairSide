ComboDatas = {}; //for variable combo condition use

TableComboConfigs = {
   "通用": {
        "維修單別":"SELECT  MQ001, MQ002  FROM  erp.CMSMQ WHERE  (MQ003 = N'E2') AND (MQ015 = N'Y') AND (MQ001 LIKE N'B%'):MQ001:維修單別,叫修單別",
        "維修部門":"SELECT  ME001, ME002  FROM  erp.CMSME WHERE  (ME001 LIKE N'90%'):ME001:維修部門",
        "維修站別":"SELECT  MA001, MA002  FROM  erp.RMAMA WHERE  (MA001 LIKE N'90%'):MA001",
        "登錄編號":"新增非Crosshead維修工單查詢:登錄編號",
       /*       
       "OEM機台型號":"OEM機台副資料庫:System model::機台型號",        //tableName:valueField:displayFfields:displayCaptions:displayWidths , 如果不指定 displayFields, 自動以valueField當顯示欄位,不指定displayCaptions則以displayFields當表頭
       "群呈Sponser":"群呈Sponser:群呈Sponser",
       "登錄人":"群呈Sponser:群呈Sponser",
       "Sponser":"群呈Sponser:群呈Sponser",
       "業務名稱":"群呈Sponser:群呈Sponser",
       "業務ID":"群呈Sponser:群呈Sponser",
       "OEM製造廠":"OEM廠商副資料庫:OEM::OEM製造廠",
       "客戶名稱":"crm.Company:CoShortName:CompanyID,CoShortName:公司代號,公司名稱",
       "Customer":"crm.Company:CoShortName:CompanyID,CoShortName:公司代號,公司名稱",
       "公司名稱":"crm.Company:CoShortName:CompanyID,CoShortName:公司代號,公司名稱",
       "System ID":"CTI OEM system install base總資料庫:System ID",
       "Chamber ID":"Chamber ID副資料庫:Chamber ID",
       "產品機型":"CTI型號副資料庫:Model",
       "P/N":"P/N副資料庫:P/N",
       "工號分類":"工號分類副資料庫:分類縮寫:分類縮寫,分類內容",
       "Process":"Process分類副資料庫:Process簡寫:Process簡寫,Process分類",
       "SL入廠原因":"入廠維修原因代碼:代碼:代碼,內容",
       "EX/F分類":"Exchange Form分類副資料庫:分類縮寫:分類縮寫,Exchange Form分類內容",
       "In P/N":"P/N副資料庫:P/N",
       "Out P/N":"P/N副資料庫:P/N",
       "In Model":"CTI型號副資料庫:Model:Model,Remarks,生產廠商",
       "Model":"CTI型號副資料庫:Model:Model,Remarks,生產廠商",
       "型號(EX form)":"CTI型號副資料庫:Model:Model,Remarks,生產廠商",
       "委外供應商":"SELECT DISTINCT 委外供應商 FROM UU100_委外總資料庫:委外供應商:",
       "ProductID":"crm.Product:ProductID:ProductID,ProductCategoryID,ProductNameCHT,ProductSpecCHT",
       "CompanyID":"crm.Company:CompanyID:CompanyID,CoShortName,CoFullName",
       "公司編號":"crm.Company:CompanyID:CompanyID,CoShortName,CoFullName",
       "公司代碼":"crm.Company:CompanyID:CompanyID,CoShortName,CoFullName",
       "ContactID":"crm.Contact:ContactID:ContactID,DisplayName",
       "ContactName":"crm.Contact:DisplayName:ContactID,DisplayName",
       "連絡人":"crm.Contact:DisplayName:ContactID,DisplayName",
       "IncidentTypeID":"crm.IncidentType:IncidentTypeID:IncidentTypeID,IncidentTypeNameCHT",
       "WorkTypeID":"crm.WorkType:WorkTypeID:WorkTypeID,WorkTypeNameCHT",
       "DeptID":"crm.Department:DeptID:DeptID,DeptShortNameCHT",
       "ServiceEmplID":"crm.Employee:EmplID:EmplID,DisplayName",
       "SystemNo":"SELECT DISTINCT Incident.SystemNo AS 系統序號 FROM crm.Incident WHERE (Incident.SystemNo <> N'') ORDER BY Incident.SystemNo:系統序號::",
       "Module":"SELECT DISTINCT Incident.Module FROM crm.Incident WHERE (Incident.Module <> N'') ORDER BY Incident.Module:Module::",
       "ProductNo":"SELECT DISTINCT Incident.ProductNo AS 產品序號 FROM crm.Incident WHERE (Incident.ProductNo <> N'') ORDER BY Incident.ProductNo:ProductNo::",
       "SystemVendor":"SELECT DISTINCT Incident.SystemVendor AS 系統廠商 FROM crm.Incident WHERE (Incident.SystemVendor <> N'') ORDER BY Incident.SystemVendor:系統廠商::",
       "SystemType":"SELECT DISTINCT Incident.SystemType AS 系統型號 FROM crm.Incident WHERE (Incident.SystemType <> N'') ORDER BY Incident.SystemType:系統型號::",
       "CustomerTool":"SELECT DISTINCT Incident.CustomerTool  FROM crm.Incident WHERE (Incident.CustomerTool <> N'') ORDER BY Incident.CustomerTool:CustomerTool::",
       "BU3_Process":"Process分類副資料庫:Process簡寫:Process簡寫,Process分類",
       "PAYMENT":"Payment副資料表:PAYMENT::",
       "DELIVERY": "Delivery副資料表:DELIVERY::",
       "Issue by": "Issuer:Issue by::",
       "CIC P/N":"Cryo價目總表:CIC P/N:CIC P/N,ND,Description,NT sales list,US$ sales list:",
       "BU3_ProductID":"SELECT RMAXI.XI002, RMAXI.XI003, INVMB.MB002, RMAXI.XI004 FROM erp.RMAXI INNER JOIN INVMB ON RMAXI.XI003 = INVMB.MB001:XI002:ID,換出產品代號,換出產品名稱,庫存數量",
       "BU3_ID":"SELECT RMAXI.XI002, RMAXI.XI003, INVMB.MB002, RMAXI.XI004 FROM erp.RMAXI INNER JOIN INVMB ON RMAXI.XI003 = INVMB.MB001:XI002:ID,換出產品代號,換出產品名稱,庫存數量",
       "客戶代碼":"廠商公司資料表:公司代碼,公司代碼,中文簡稱,英文簡稱", //訂單管理
       "出貨單性質":"SELECT DISTINCT 出貨單性質 FROM [L10300,出貨單總資料庫]:",
*/
  },
   "SHI Crosshead維修工單": {
        "登錄編號":"新增Crosshead維修工單查詢:登錄編號",
   },
   "Crosshead維修工單": {
        "登錄編號":"新增Crosshead維修工單查詢:登錄編號",
   },
   "crm.ServiceRecord":{

   },
   "crm.Incident":{
   }
};