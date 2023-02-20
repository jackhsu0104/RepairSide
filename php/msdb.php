<?php

function execsql($query)
{
  global $db;
  $stmt=$db->prepare($query);
  return $stmt->execute();
}
function execquery($query)
{
  global $db;
  $stmt=$db->prepare($query);
  $r = $stmt->execute();
  if($r)
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  else
    return array();
}

function checkItemExist($table, $key, $value){
    $R = getTableItems($table, $key, $value);
    if(count($R) > 0)
        return true;
    else
        return false;
}    
function insertTableItem($table, $item){
  global $db;
  $bindarray = array();
  $query = "INSERT INTO $table (";
  $valuestr = "VALUES(";
  foreach($item as $key => $value)
  {
      $query = $query."[$key],";
      $valuestr = $valuestr."?,";
      array_push($bindarray, $value);
  }
  $query = rtrim($query, ",");
  $valuestr = rtrim($valuestr, ",");
  $query = $query.")"."  ".$valuestr.")";
  $stmt=$db->prepare($query);
  for($i=0;$i<count($bindarray); $i++)
  {
     $stmt->bindValue($i+1, $bindarray[$i]);
  }
 
  return $stmt->execute();
}

function insertTableItemPrefixId($table, $item, $field, $prefix){
  global $db;
  $r = insertTableItem($table, $item);
  if($r)
  {
      $q = $db->query("LAST_INSERT_ID()");
      $id = $q->fetch();
      $newid = sprintf("%s%05d",$prefix, $id);
      $item = new stdClass();
      $item["field"] = $newid;
      $item["autoid"] = $id;
      return modifyTableItem($table, "autoid", $item);
  }
  return $r;
}

function modifyTableItem($table, $primarykey, $item){
  global $db;
  $bindarray = array();
  $query = "UPDATE $table SET ";
  foreach($item as $key=>$value)
  {
      if($key != $primarykey)
      {
        $query = $query."[$key] =  ?, ";
        array_push($bindarray, $value);
      }
  }
  array_push($bindarray,  $item->$primarykey);  
    
  $query = rtrim($query, ", ");
  $query = $query." WHERE $primarykey = ?";
  file_put_contents("log2.txt", print_r($item, true).$query."\n".print_r($bindarray, true));
  $stmt=$db->prepare($query);
  for($i=0; $i<count($bindarray);$i++)
     $stmt->bindValue($i+1, $bindarray[$i]);
  
  //file_put_contents('log.txt', $query."\n".print_r($bindarray, true));  
  //echo $query."\n".print_r($bindarray);  
  return $stmt->execute();
}


function getTableItemsByRule($table, $rule, $fields = "*"){
  global $db;
    $query = "SELECT $fields FROM $table WHERE $rule";
  //file_put_contents('log.txt', $query."\n");  
  $stmt=$db->prepare($query);
  
  $r = $stmt->execute();
  if($r)
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  else
    return array();
}


function getTableItems($table, $key, $value, $extrarule = ""){
  global $db;
  $query = "SELECT * FROM $table WHERE $key = :key ".$extrarule;
  $stmt=$db->prepare($query);
  $stmt->bindValue(":key", $value);
  
  $r = $stmt->execute();
  if($r)
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  else
    return array();
}

function deleteTableItem($table, $key, $value){
  global $db;
  $query = "DELETE FROM $table WHERE $key = :key";
  $stmt=$db->prepare($query);
  $stmt->bindValue(":key", $value);
  
  $r = $stmt->execute();
  return $r;    
}


function getFieldValue($sql)
{
  global $db;
  return $db->query($sql)->fetchColumn();    
}

function getListData($rowidField, $datas)
{
    $rows = array();
    foreach($datas as $data)
    {
        $item = new stdClass();
        $item->caption = $data[$rowidField];
        array_push($rows, $item);
    }
    return $rows;
    
}

function getRowData(/*$rowidField,*/ $header, $datas){
    $rows = array();
    foreach($datas as $data)
    {
        $item = array();
        //$item->id = $data[$rowidField];
        //$item->cells = array();
        foreach($header as $col)
        {
            array_push($item, $data[$col]);
        }
        array_push($rows, $item);
    }
    return $rows;
}

function DB() {
    try {
        $db = new PDO ( "sqlsrv:server=(local), 63937; database = BU3_System", "jack", "3f18681868" );
        //$db = new PDO ( "mysql:host=sql303.byethost31.com", "b31_20425913", "18681868" );        
        $db->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
//        $db->exec ( "CREATE DATABASE IF NOT EXISTS newelc" );
 //       $db->exec ( "use newelc" );
       // $db->exec ( "use GDCRM" );
        //$db->exec("SET NAMES UTF8");       

    } catch ( PDOException $e ) {
         echo $e->getMessage();
    }
    return $db;
}

function DBCRM() {
    try {
        $db = new PDO ( "sqlsrv:server=(local), 63937; database = GDCRM", "jack", "3f18681868" );
        $db->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        $db->exec ( "use GDCRM" );
        $db->exec("SET NAMES UTF8");       

    } catch ( PDOException $e ) {
         echo $e->getMessage();
    }
    return $db;
}

?>