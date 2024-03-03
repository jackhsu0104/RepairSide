/*************************************************************************************************
 程式代號：BU3
 程式名稱：combodb.js
 系統版本：企業版(for SQL Server)
*************************************************************************************************
 程式版本：1.0
 修改日期：2024/03/02
 修改人員：Jack Hsu
 修改說明：(1). 初始版本
*************************************************************************************************/


ComboDatas = {}; //for variable combo condition use

TableComboConfigs = {
   "通用": {
        "維修單別":"SELECT  MQ001, MQ002  FROM  erp.CMSMQ WHERE  (MQ003 = N'E2') AND (MQ015 = N'Y') AND (MQ001 LIKE N'B%'):MQ001:維修單別,叫修單別",
        "維修部門":"SELECT  ME001, ME002  FROM  erp.CMSME WHERE  (ME001 LIKE N'90%'):ME001:維修部門",
        "維修站別":"SELECT  MA001, MA002  FROM  erp.RMAMA WHERE  (MA001 LIKE N'90%'):MA001",
        "登錄編號":"新增非Crosshead維修工單查詢:登錄編號",
        "領用品號":"erp.領料庫存查詢:品號:站別,品號,庫別,庫存數量",
        "保養名稱":"SELECT DISTINCT 保養名稱 FROM Compressor保養副資料表:保養名稱:::17",
        "入站登錄編號":"維修站總資料表:登錄編號::::維修站名 != {維修站名}",
        "更換登錄編號":"維修工單列表:登錄編號:登錄編號,維修工單:::登錄編號 != {登錄編號} AND 維修工單 = 'Cryopump維修工單'",
        "測試區登錄編號":"測試區登錄編號查詢:登錄編號:登錄編號,維修站名:::維修狀態 NOT IN ('完工','簡修完工','入庫','出貨','不修')",
        "課稅別":"SELECT DISTINCT 課稅別 FROM erp.領料報工表單查詢:課稅別",
        "維修狀況":"1001,維修狀況代號副資料表:維修狀況敘述:::17",
        "維修狀態":"1001,維修狀況代號副資料表:維修狀況敘述::::顯示= 1",
        "型號":"SELECT DISTINCT 產品型號 FROM crm.產品型號查詢:產品型號:產品型號:::",
       "TestAreaFormNo":"CryopumpTestForm,item ASC:item:item:#::登錄編號 = {登錄編號} AND item != {item}",
      
  },
   "App.CrossheadEditForm": {
        "登錄編號":"新增Crosshead工單查詢:登錄編號",
   },
   "App.ModuleTestForm": {
        "登錄編號":"新增Module功能測試表查詢:登錄編號",
   },
   "App.CryopumpEditForm": {
        "Crosshead編號":"未領用Crosshead編號查詢:Crosshead編號:S/N,S/N#2,Crosshead編號:::Model = {Crosshead Model} AND 維修狀態 IN ('完工','簡修完工')",
        "Crosshead Model":"SELECT DISTINCT Model FROM 未領用Crosshead編號查詢:Model:Model",
   },
    "App.ErpPickingForm": {
        "登錄編號":"站內資料表查詢:登錄編號",
         "型號":"SELECT DISTINCT 型號 FROM Bench領用料副資料表:型號:型號::17:站別={SiteName}",
  },
};