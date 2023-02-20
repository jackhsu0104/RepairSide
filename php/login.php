<?php

$StartLogin = true;
require_once("utils.php");
$req = xui_getRequestData();
if(!isset($req->cmd))
{
    exit;
}
$RES = new stdClass();

$db = DB();

if($req->cmd == "getCaptcha")
{
  include("simple-php-captcha.php");
  $_SESSION['captcha'] = simple_php_captcha();
  $RES->result = "OK";
  $RES->captcha =  $_SESSION['captcha']['image_src'];
  $p = strpos($RES->captcha,"/newelc/php/");
  if($p >= 0)  
    $RES->captcha = substr($RES->captcha, $p);  
  //file_put_contents("log.txt", $RES->captcha);  
    
}
else if($req->cmd == "login")
{
    $vcode = strtoupper($req->vcode);
    $captcha = strtoupper($_SESSION['captcha']);
    //file_put_contents('vcode.txt', $captcha);
    if($vcode != $captcha)
    {
        $RES->result = "ERROR";
        $RES->error = "驗證碼錯誤！！";
    }
    else
    {
      $stmt=$db->prepare("SELECT * FROM members WHERE memberid = :memberid AND passwd = :passwd");
      $stmt->bindValue(":memberid", $req->memberid);
      $stmt->bindValue(":passwd", $req->passwd);
      
      $stmt->execute();
      $R = $stmt->fetch(PDO::FETCH_ASSOC);
      if($R)
      {
        $R = (object)$R;
        file_put_contents("log1.txt", print_r($R,true));    
        updateFateDatas($R);
        $R->lastlogin = date_create()->format('Y-m-d H:i:s');  
        modifyTableItem("members", "memberid", $R);   //update date data and login date  
//        file_put_contents("log1.txt", print_r($R,true), FILE_APPEND);    
        if($R->type == "手机版" || $R->type == "手機簡易版" || $R->type == null || $R->type == " " || $R->type == "")  
        {
            $d = date_create($R->regdate);
            $d->modify('+10 day');
            $R->expdate = $d->format("Y-m-d");
        }
        $RES->result = "OK";
        $RES->item = $R;  
        $_SESSION["username"] = $req->memberid;
        $_SESSION["email"] = $R->email;
      }
      else
      {
        $RES->result = "ERROR";
        $RES->error = "帳號或密碼錯誤！！";
        
      }
    }
}
else if($req->cmd == "forgotpass")
{
    $vcode = strtoupper($req->vcode);
    $captcha = strtoupper($_SESSION['captcha']);
    //file_put_contents('vcode.txt', $captcha);
    if($vcode != $captcha)
    {
        $RES->result = "ERROR";
        $RES->error = "驗證碼錯誤！！";
    }
    else
    {
      $stmt=$db->prepare("SELECT * FROM members WHERE memberid = :memberid");
      $stmt->bindValue(":memberid", $req->memberid);
    
      $stmt->execute();
      $R = $stmt->fetch(PDO::FETCH_ASSOC);
      if($R)
      {
         $cust = (object)$R;
//         file_put_contents("log2.txt", print_r($cust,true));    
         if($cust->email != "")// && $cust->email == "jackhsu0104@gmail.com")
         {
           $to = $cust->email;
           $passwd = $cust->passwd;  
           $txt = "您好：<br>您登記的密碼是：<br>$passwd<br>";
           $type="Content-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding:8bit\r\n";     
           $headers = "From: support@super-elc147.com\r\n".$type;   
           $title = "=?UTF-8?B?".base64_encode("貴人王密碼函")."?=";  
           
  //         file_put_contents("log1.txt", "$to \n $title \n $txt \n $headers \n");
           $R1 = mail($to, $title, $txt,$headers);
           
           if($R1 == false)
           {
             $RES->result = "ERROR";
             $RES->error = "郵件遞送錯誤！！";
           }
           else
             $RES->result = "OK";
         }
         else
         {
          $RES->result = "ERROR";
          $RES->error = "您未設定電子信箱！！";
         }
          //        file_put_contents("log1.txt", print_r($R,true));    
      }
      else
      {
        $RES->result = "ERROR";
        $RES->error = "帳號或密碼錯誤！！";
        
      }
    }
}
else if($req->cmd == "logout")
{
    unset($_SESSION["username"]);
    $RES->result = "OK";
    
}
else if($req->cmd == "getNews")
{
    if(isset($req->id))
    {
      $query = "SELECT * FROM news WHERE id = :id ORDER BY createtime DESC";
      $stmt=$db->prepare($query);
      $stmt->bindValue(":id", $req->id);
    }
    else
    {
      $query = "SELECT * FROM news ORDER BY createtime DESC";
      $stmt=$db->prepare($query);
    }
    $stmt->execute();
    $R = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $RES->items = $R; 
    $RES->result = "OK";
}
else if($req->cmd == "addMember")
{
  $item = json_decode($req->item);
  $item->memberid = strtoupper($item->memberid);  
  if(!checkNick($item->memberid) && !verifyChinaId($item->memberid))
      returnErrorResult("身分証號碼錯誤！！");

  if(checkItemExist("members","memberid", $item->memberid)) 
      returnErrorResult("會員帳號重複！！");

  updateFateDatas($item);  
  if(insertTableItem("members", $item))
  {
      $lastid = $db->query("SELECT LAST_INSERT_ID()")->fetchColumn();
      $memberno = sprintf("%s%06d","mbr", $lastid);
      $db->exec("UPDATE members SET memberno = '$memberno' WHERE autoid = $lastid");
      
      $RES->result = "OK";
  }
  else
    $RES->result = "ERROR";
      
}
else if($req->cmd == "updateAllFateYears")
{
     if(isset($req->key) && $req->key = "271838")
         updateAllFateYears();
      $RES->result = "OK";
}
else if($req->cmd == "getDataList")
{
 //   $table = mysql_real_escape_string($req->table);
 //   $field = mysql_real_escape_string($req->field);
 //   $value = mysql_real_escape_string($req->value);
    $table = $req->table;
    $field = $req->field;
    $value = $req->value;
    if($value == "")
    {
        if($table == "instructor")
        {
          $query = "SELECT $field FROM $table";
          $R = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);
          $RES->items = getListData($field, $R);
        }
        else
          $RES->items = array();
    }
    else
    {
      $query = "SELECT $field FROM $table WHERE $field LIKE '%$value%' ";
      if($table == "customer")
          $query = $query." AND memberid = '$Member'";
      //file_put_contents("log.txt", $query."\n");
      $R = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);
    //file_put_contents("log.txt", print_r($R));
      $RES->items = getListData($field, $R);
    }
    $RES->result = "OK";
   
}

$json=json_encode($RES);      

echo $json;

?>

