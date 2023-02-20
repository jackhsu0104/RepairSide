<?php
require_once("utils.php");
$req = xui_getRequestData();
if(!isset($req->cmd))
{
    exit;
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
if(isset($req->table))
{
  $req->table = str_replace("crm.","GDCRM.dbo.",$req->table);
  if(str_starts_with($req->table,"GDCRM.dbo."))
  {
     $name =  substr($req->table, 10);
     $req->table = "GDCRM.dbo."."[$name]";  
  }
  else if(!str_starts_with($req->table,"["))   
     $req->table = "[$req->table]";  
}
if(isset($req->fields))
{
  $fields = explode(",",$req->fields);
  for($i=0;$i<count($fields);$i++)
  {
    $v = trim($fields[$i], " ");
    if(!str_starts_with($v, "["))
      $v = "[$v]";
    $fields[$i]=$v;  
  }  
  $req->fields = implode(",",$fields);
}

$RES = new stdClass();

$db = DB();

//$adminuser =  $_SESSION ["adminuser"]; //true or false

function IsCRM($value)
{
    return strpos($value,"GDCRM") !==  false;
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
            $n = (int)substr($value,strlen()-4);
            $n++;
        }        
        $value = sprintf("%s%04d",$h,$n);
        return $value;    
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
        $h1 = "A";  
        $wid  = $item->工號;  
        $q1 = "SELECT ROBOT FROM [工號登錄總資料表]  WHERE [工號] = '$wid'";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
          if($items[0]["ROBOT"] == 0)
            $h1 = "B";  
        }
        $h2 =  $item->type; //'R' or 'E' 辨別用，不儲存
        unset($item->type);
        $d=date_create();
        $d = date_format($d,"Ym");
        $d = substr($d, 2);
        $n = 1;
        $h = $h1.$d.$h2;
        $q1 = "SELECT TOP  1 [登錄編號] FROM [CTI Control Number總資料庫]  WHERE [登錄編號] LIKE '$h%' ORDER BY [登錄編號] DESC";  
        $items = execquery($q1);
        if(count($items)  > 0)
        {
            $value = $items[0]["登錄編號"];
            $n = (int)substr($value,strlen()-3);
            $n++;
        }        
        $value = sprintf("%s%03d",$h,$n);
        $item->登錄編號 = $value;
    }
    else  if($table == "GDCRM.dbo.[Incident]")
	{
		$qry = "SELECT Seed FROM  KeyFieldDefine  WHERE TableName = 'Incident'";
		$items = execquery($qry);
		if(count($items) > 0)
		{
		  $seed = $items[0]["Seed"];
		  $seed++;
		  $item->IncidentID = sprintf("%08d",$seed);
		}
	}
    else  if($table == "GDCRM.dbo.[ServicRecord]")
	{
		$qry = "SELECT Seed FROM  KeyFieldDefine  WHERE TableName = 'ServicRecord'";
		$items = execquery($qry);
		if(count($items) > 0)
		{
		  $seed = $items[0]["Seed"];
		  $seed++;
		  $item->ServiceRecordID = sprintf("%08d",$seed);
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
    
    $countQuery = replace_between($query, 'SELECT ', ' FROM', 'count(1)'); //SQL for rowcount
    
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
    //file_put_contents("log4.txt", $query."\n\n");   
    //file_put_contents("log4.txt", $countQuery, FILE_APPEND);   
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
    $res = insertTableItem($table,$item);
    $RES->result = "OK";
    $RES->item = $item;
    
}
else  if($req->cmd == "deleteTableItem")
{
    $key = $req->key; 
    $value = $req->value; 
    $table = $req->table;

    $res = deleteTableItem($table, $key, $value);
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
else
{
    $RES->result = "Wrong Command";
}
$json=json_encode($RES);      
echo $json;

?>
    
