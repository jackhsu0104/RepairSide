<?php
require_once("utils.php");
require_once("restclient.php");
$req = xui_getRequestData();
if(!isset($req->cmd))
{
    exit;
}

function myDeleteTableItem($table, $key, $value)
{
    if(isDelFlag($table))
    {
      $item = new stdClass;
      $item->$key = $value;
      $item->DelFlag = 1;  
      $res = modifyTableItem($table, $key, $item);
    }
    else 
      $res = deleteTableItem($table, $key, $value);
    return $res;
}
function myGetTableItems($table, $key, $value)
{
  $query = "SELECT * FROM $table WHERE [$key] = '$value'";
  $stmt=$db->prepare($query);
  $R2 = $stmt->execute();
  $R = $stmt->fetchAll(PDO::FETCH_ASSOC);
  return $R; 
}
function str_contains($a, $b)
{
    return strpos($a,$b) !== false;
}
function str_between($str, $starting_word, $ending_word)
{
    $subtring_start = strpos($str, $starting_word);
    //Adding the starting index of the starting word to
    //its length would give its ending index
    $subtring_start += strlen($starting_word); 
    //Length of our required sub string
    $size = strpos($str, $ending_word, $subtring_start) - $subtring_start; 
    // Return the substring from the index substring_start of length size
    return substr($str, $subtring_start, $size); 
}

function replace_between($str, $needle_start, $needle_end, $replacement) {
    $pos = strpos($str, $needle_start);
    $start = $pos === false ? 0 : $pos + strlen($needle_start);

    $pos = strpos($str, $needle_end, $start);
    $end = $start === false ? strlen($str) : $pos;

    return substr_replace($str,$replacement,  $start, $end - $start);
}

function str_starts_with($s, $query)
{
  return substr($s, 0, strlen($query)) === $query;
}

$erp = false;
if(isset($req->table))
{
  if(str_contains($req->table,"erp."))
  {
    $req->table = str_replace("erp.","",$req->table);
    $erp = true;
  }
  $req->table = str_replace("crm.","GDCRM.dbo.",$req->table);
  if(str_starts_with($req->table,"GDCRM.dbo."))
  {
    $name =  substr($req->table, 10);
    $req->table = "GDCRM.dbo."."[$name]";  
  }
  else if(!str_starts_with($req->table,"["))   
    $req->table = "[$req->table]";  
}
if(isset($req->query))
{
  if(str_contains($req->query,"erp."))
  {
    $req->query = str_replace("erp.","",$req->query);
    $erp = true;
  }
  else      
    $req->query = str_replace("crm.","GDCRM.dbo.",$req->query);
}
if(isset($req->fields))
{
  $fields = explode(",",$req->fields);
  for($i=0;$i<count($fields);$i++)
  {
    $v = trim($fields[$i], " ");
    if(!str_starts_with($v, "[") && !str_contains($v, "count(*)"))
      $v = "[$v]";
    $fields[$i]=$v;  
  }  
  $req->fields = implode(",",$fields);
}

$RES = new stdClass();

if($erp)
    $db = DBWFERP();
else
    $db = DB();
if(isset($req->table) && str_contains($req->table, "MIS_AccountingCloseDate"))
    execsql("USE DSCSYS");
if(isset($req->query) && str_contains($req->query, "MIS_AccountingCloseDate"))
    execsql("USE DSCSYS");
//$adminuser =  $_SESSION ["adminuser"]; //true or false

function IsCRM($value)
{
    return strpos($value,"GDCRM") !==  false;
}

function isDelFlag($table)
{
    $tableList = array("[CTI Control Number總資料庫]", "[工號登錄總資料表]","[UnitServiceForm子表]");    
    return in_array($table, $tableList);
}

function sendImageMail($from, $to, $title, $base64img)
{
        $subject = "=?UTF-8?B?".base64_encode($title)."?="; 
        $bound_text = "----*%$!$%*";
        $bound = "--".$bound_text."\r\n";
        $bound_last = "--".$bound_text."--\r\n";

        $headers = "From: ".$from."\r\n";
        $headers .= "MIME-Version: 1.0\r\n" .
        "Content-Type: multipart/mixed; boundary=\"$bound_text\""."\r\n" ;

        $message = " you may wish to enable your email program to accept HTML \r\n".$bound;

        $message .=
        'Content-Type: text/html; charset=UTF-8'."\r\n".
        'Content-Transfer-Encoding: 7bit'."\r\n\r\n".
        '

<html>

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style> p {color:green} </style>
</head>
<body>
<p>
<img src="cid:report.jpg">
</p>
</body>

</html>'."\n\n".$bound;

$message .= "Content-Type: image/jpg; name=\"report.jpg\"\r\n"
."Content-Transfer-Encoding: base64\r\n"
."Content-ID: <report.jpg>\r\n"
."\r\n"
.chunk_split($base64img)
.$bound_last;

        return mail($to, $subject, $message, $headers) ;         
         
}

function newCnNumber()
{
        $d=date_create();
        $d = date_format($d,"Y");
        $d = substr($d, 2);
        $n = 1;
        $h = 'A'.$d;
        $q1 = "SELECT TOP 1 [CN#] FROM [CTI Control Number總資料庫]  WHERE [CN#] LIKE '$h%' ORDER BY [CN#] DESC";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
            $value = $items[0]["CN#"];
            $n = (int)substr($value,strlen($value)-4);
            $n++;
        }        
        $value = sprintf("%s%04d",$h,$n);
        return $value;    
}

function newOrderNumber()
{
        $q1 = "SELECT TOP 1 [訂單流水編號] FROM [訂單總資料庫]  ORDER BY [訂單流水編號] DESC";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
            $value = $items[0]["訂單流水編號"];
            $prefix = $value[0];
            $n = (int)substr($value,1, 3);
            $n++;
            if($n > 999)
            {
                $n = 0;
                $prefix = chr(ord($prefix)+1);
            }
            $value = sprintf("%s%03d",$prefix,$n);
        }     
        else 
          $value = "0000";
        return $value;
}

function afterInsertTable($table, $item)
{
    if($table == "[UnitServiceForm總表]")
    {
        $items = execquery("SELECT @@IDENTITY as k");
        $item->總表單號 = $items[0]["k"];
    }
    else  if($table == "[UnitServiceForm子表]")
    {
        $items = execquery("SELECT @@IDENTITY as k");
        $item->子表單號 = $items[0]["k"];
    }    
}

function prepareTableKey($table, $item)
{
    if($table == "[工號登錄總資料表]")
    {
        $items = execquery("SELECT TOP 1  [工號] FROM [工號登錄總資料表]  ORDER BY [工號] DESC");
        if(count($items) > 0)
        {
            $value = $items[0]["工號"];
            $h = $value[0];
            $n = (int)substr($value,1);
            $n++;
            if($n >= 10000)
            {
              $n = 1;
              $h = chr(ord($h)+1);
            }
            $value = sprintf("%s%04d",$h,$n);
            $item->工號 = $value;
        }
    }
    else  if($table == "[CTI Control Number總資料庫]")
    {
        if(!isset($item->type))
            return;
        $h1 = "A";  
        $wid  = $item->工號;  
        $q1 = "SELECT Robot FROM [工號登錄總資料表]  WHERE [工號] = '$wid'";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
          if($items[0]["Robot"] == 1)
            $h1 = "B";  
        }
        $h2 =  $item->type; //'R' or 'E' 辨別用，不儲存
        unset($item->type);
        $d=date_create();
        $d = date_format($d,"Ym");
        $d = substr($d, 2);
        $n = 1;
        if(strlen($h2) > 1) //including year,month
          $h = $h1.$h2;
        else
          $h = $h1.$d.$h2;
        $q1 = "SELECT TOP  1 [登錄編號] FROM [CTI Control Number總資料庫]  WHERE [登錄編號] LIKE '$h%' ORDER BY [登錄編號] DESC";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
            $value = $items[0]["登錄編號"];
            $n = (int)substr($value,strlen($value)-3);
            $n++;
        }        
        $value = sprintf("%s%03d",$h,$n);
        $item->登錄編號 = $value;
    }
    else if($table == "[UU100_委外總資料庫]")
    {
        $n = 1;
        $d=date_create();
        $d = date_format($d,"Y");
        $d = substr($d, 2);
        $items = execquery("SELECT TOP 1  [委外單號] FROM [UU100_委外總資料庫] WHERE [委外單號] LIKE '$d%' ORDER BY [委外單號] DESC");
        if(count($items)  > 0)
        {
            $value = $items[0]["委外單號"];
            $n = (int)substr($value,strlen($value)-3);
            $n++;
        }        
        $value = sprintf("%s%03d",$d,$n);
        $item->委外單號 = $value;
        
    }
    else if($table == "[L10300,出貨單總資料庫]")
    {
        $n = 1;
        $d=date_create();
        $d = date_format($d,"Y");
        $d = substr($d, 2);
        $items = execquery("SELECT TOP 1  [出貨單號] FROM [L10300,出貨單總資料庫] WHERE [出貨單號] LIKE '$d%' ORDER BY [出貨單號] DESC");
        if(count($items)  > 0)
        {
            $value = $items[0]["出貨單號"];
            $n = (int)substr($value,strlen($value)-4);
            $n++;
        }        
        $value = sprintf("%s%04d",$d,$n);
        $item->出貨單號 = $value;
        
    }
    else if($table == "[PS101,零件PO資料表]")
    {
        $n = 1;
        $k = "PO#";
        $po = $item->$k;
        $items = execquery("SELECT TOP 1  Item FROM [PS101,零件PO資料表] WHERE [PO#] = '$po' ORDER BY Item DESC");
        if(count($items)  > 0)
        {
            print_r($items);
            $value = $items[0]["Item"];
            $n = (int)$value;
            $n++;
        }        
        $item->Item = sprintf('%02d',$n);
    }
    else  if($table == "GDCRM.dbo.[Incident]")
    {
        $qry = "SELECT Seed FROM  GDCRM.dbo.KeyFieldDefine  WHERE TableName = 'Incident'";
        $items = execquery($qry);
        if(count($items) > 0)
        {
          $seed = $items[0]["Seed"];
          $seed++;
          $item->IncidentID = sprintf("%08d",$seed);
          $qry = "UPDATE GDCRM.dbo.KeyFieldDefine  Set Seed = $seed  WHERE　TableName = 'Incident'";
          execsql($qry);
          
        }
    }
    else  if($table == "GDCRM.dbo.[ServiceRecord]")
    {
        $qry = "SELECT Seed FROM  GDCRM.dbo.KeyFieldDefine  WHERE TableName = 'ServiceRecord'";
        $items = execquery($qry);
        if(count($items) > 0)
        {
          $seed = $items[0]["Seed"];
          $seed++;
          $item->ServiceRecordID = sprintf("%08d",$seed);
          $qry = "UPDATE GDCRM.dbo.KeyFieldDefine  Set Seed = $seed  WHERE　TableName = 'ServiceRecord'";
          execsql($qry);
        }
    }
    else  if($table == "[UnitServiceForm總表]")
    {
        unset($item->總表單號);
    }
    else  if($table == "[UnitServiceForm子表]")
    {
        unset($item->子表單號);
    }
    else  if($table == "[估價單明細(NT)]")
    {
        unset($item->rowid);
    }
    else  if($table == "[訂單總資料庫]")
    {
        $item->訂單流水編號 = newOrderNumber();
    }
    else  if($table == "[估價單總表(NT)]")
    {
        $key = "Quotation no#";
        if($item->$key != "")
        {
          $no = $item->$key;  
          $v = (int)substr($no, -1)+1;
          while(true)
          {
              $v1 = substr_replace($no,strval($v),-1);; 
              $qry = "SELECT [Quotation no#] FROM  [估價單總表(NT)]  WHERE [Quotation no#] = '$v1'";
              $items = execquery($qry);
              if(count($items) == 0)
                  break;
              $v++;;  
          }
          $item->$key = $v1;
        }
        else
        {
            $h2 =  $item->type; //'Robot' or 'Special' or 'NotRobot'
            $d=date_create();
            $d = date_format($d,"Ymd");
            $d = substr($d, 2);
            if($h2 == 'Robot')
              $v = 'S0';
            else if($h2 == 'Special')
              $v = 'W';
            else  //NotRobot
              $v = 'A';
            while(true)
            {
              $v1 = $d.$v."0"; 
              $qry = "SELECT [Quotation no#] FROM  [估價單總表(NT)]  WHERE [Quotation no#] = '$v1'";
              $items = execquery($qry);
              if(count($items) == 0)
                  break;
              $v = chr(ord($v)+1);  
            }
            $item->$key = $v1;
        }
    }
}


if($req->cmd == "getTableItems")
{
    $table = $req->table;
    $fields = "*";
    if(isset($req->fields) && $req->fields != "")
        $fields = $req->fields;
    
    $query = "SELECT $fields FROM $table ";
    
    if(isset($req->condition))
    {
      $condition = $req->condition;
      $query = $query."WHERE $condition ";
    }
    if(isDelFlag($table))
    {
        if(str_contains($query,"WHERE "))
           $query = $query."AND DelFlag != 1 ";
        else
           $query = $query."WHERE DelFlag != 1 ";
    }       
    $countQuery = replace_between($query, 'SELECT ', ' FROM', 'count(1)'); //SQL for rowcount

    if(isset($req->orderby))
    {
      $orderby = $req->orderby;
      $query = $query." ORDER BY $orderby ";
    }
    if(isset($req->pageno))
    {
      if(isset($req->pagelen))
        $pagelen = $req->pagelen;
      else
        $pagelen = 20;
      $offset = strval($req->pageno * $pagelen);  
      $query = $query." OFFSET $offset ROWS FETCH NEXT $pagelen ROWS ONLY";
    }
    file_put_contents("log.txt", $query);   
    $stmt=$db->prepare($query);
    $R2 = $stmt->execute();
    echo  "";
    $R = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if(count($R) > 0)
        $header = array_keys($R[0]);
    else
        $header = array();
    $rows =  getRowData($header,$R);
    
 //   $RES->items = $R;
    $RES->columns = $header;
    $RES->rows = $rows;
    $RES->totalRowCount = $db->query($countQuery)->fetchColumn();
    $RES->result = "OK";
    
}
else  if($req->cmd == "getQueryItems")
{
    $query = $req->query;
    $fields = str_between($query, 'SELECT ', ' FROM');
    if(stripos($fields,"DISTINCT ") !== false)
      $countFields = "count($fields)";
    else 
      $countFields = "count(1)";    
    $countQuery = replace_between($query, 'SELECT ', ' FROM', $countFields); //SQL for rowcount
    $index = stripos($countQuery,"ORDER BY ");
    if($index != false)
        $countQuery = substr($countQuery, 0, $index);
    if(isset($req->orderby))
    {
      $orderby = $req->orderby;
      $query = $query." ORDER BY $orderby ";
    }
    if(isset($req->pagelen))
        $pagelen = $req->pagelen;
    else
        $pagelen = 20;
    if(isset($req->pageno))
    {
      $offset = strval($req->pageno * $pagelen);  
      $query = $query." OFFSET $offset ROWS FETCH NEXT $pagelen ROWS ONLY";
    }
    file_put_contents("log4.txt", $query."\n\n");   
    file_put_contents("log4.txt", $countQuery, FILE_APPEND);   
    $stmt=$db->prepare($query);
    $stmt->execute();
    $R = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if(count($R) > 0)
        $header = array_keys($R[0]);
    else
        $header = array();
    $rows =  getRowData($header,$R);
    
 //   $RES->items = $R;
    $RES->columns = $header;
    $RES->rows = $rows;
    $RES->totalRowCount = $db->query($countQuery)->fetchColumn();
    $RES->result = "OK";
    
}
else  if($req->cmd == "modifyTableItem")
{
    $key = $req->key; 
    $table = $req->table;
    $item = json_decode($req->item);

    if($table == "[CTI Control Number總資料庫]")
      unset($item->type);  //no use    
    $res = modifyTableItem($table, $key, $item);
    $RES->result = "OK";
}
else if($req->cmd == "insertTableItem")
{
    $table = $req->table;
    $item = json_decode($req->item);
    prepareTableKey($table,$item);
    //print_r($item);
    if(str_contains($table,"[ServiceRecord]") || str_contains($table,"[Incident]"))
    {
      $res = insertTableItem2($table,$item); //no OUTPUT inserted.* or there is trigger error
      $RES->result = "OK";
      $RES->item = $item;
    }
    else
    {
      $res = insertTableItem($table,$item);
    //file_put_contents("log6.txt", print_r($res,true));
    //afterInsertTable($table,$item);
      $RES->result = "OK";
      $RES->item = $res[0];
    }
    
}
else  if($req->cmd == "deleteTableItem")
{
    $key = $req->key; 
    $value = $req->value; 
    $table = $req->table;
    if($table == "[unitServiceForm子表]")
    {
        $items = myGetTableItems("[unitServiceForm子表]", $key, $value);
        $rid = "登錄編號";
        if(count($items) > 0)
        {
          $it = $items[0];  
          myDeleteTableItem("[CTI Control Number總資料庫]", $rid, $it[$rid]);  
        }
    }
    $res = myDeleteTableItem($table, $key, $value);
    $RES->result = "OK";
}
else if($req->cmd == "getTableFieldConfigs")
{
    $table = $req->table;
    file_put_contents("log3.txt", $table."\n");
    $table = str_replace("[","",$table);  
    $table = str_replace("]","",$table);  
    if(IsCRM($table))
    {
      $table = str_replace("GDCRM.dbo.", "",$table);
        
      $qrystr = "SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH FROM GDCRM.INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '$table' AND TABLE_SCHEMA='dbo'";
    }
    else
      $qrystr = "SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '$table' AND TABLE_SCHEMA='dbo'";
    file_put_contents("log3.txt", $qrystr, FILE_APPEND);
    $items = execquery($qrystr);
    //print_r($items);
/*
    $names = array();
    
    foreach($items as $v)
    {
      $obj = new stdClass;
      $obj->COLUMN_NAME = $v["COLUMN_NAME"];  
      $obj->DATA_TYPE = $v["DATA_TYPE"];  
      array_push($names, $obj);
    }
*/    
    $RES->items = $items;    
}
else if($req->cmd == "getTableNames")
{
    $database = $req->database;
    if($database == "")
        $database = "BU3_System";
    $qrystr = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG='$database'";
    $items = execquery($qrystr);

    $RES->items = $items;    
}
else  if($req->cmd == "newCnNumber")
{
    $value = $req->value; 
    $nbr = newCnNumber();
    $key = "CN#";
    if($value != "")
    {    
      $datas = new stdClass;
      $datas->登錄編號 = $value;
      $datas->$key = $nbr;
      modifyTableItem("[CTI Control Number總資料庫]", "登錄編號", $datas); //wait
    }
    $RES->$key = $nbr;
    $RES->result = "OK";
}
else  if($req->cmd == "uploadErpDatas")
{
    $item = json_decode($req->item);
    $api = new RestClient;
    $result = $api->post("http://192.168.10.21/WEBAPI_W3R027/INSERTRMAMI13", $req->item,
            array('Content-Type' => 'application/json'));
        
    $rjson = $result->decode_response();
    $RES->code = $rjson->code;
    $RES->message = $rjson->message;
    $RES->result = "OK";
}
else
{
    $RES->result = "Wrong Command";
}
$json=json_encode($RES);      
echo $json;

?>
    
