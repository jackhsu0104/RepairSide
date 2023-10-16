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
        "測試區登錄編號":"測試區登錄編號查詢:登錄編號:登錄編號,維修站名:::",
        "課稅別":"SELECT DISTINCT 課稅別 FROM erp.領料報工表單查詢:課稅別",
        "維修狀況":"1001,維修狀況代號副資料表:維修狀況敘述:::17"
  },
   "App.CrossheadEditForm": {
        "登錄編號":"新增Crosshead維修工單查詢:登錄編號",
   },
   "App.CryopumpEditForm": {
        "Crosshead編號":"未領用Crosshead編號查詢:Crosshead編號",
   },
    "App.ErpPickingForm": {
        "登錄編號":"站內資料表查詢:登錄編號",
   },
};