<?php
ini_set('memory_limit', '256M');

//error_reporting ( E_STRICT );

require_once('msdb.php');
// input and output keys
define ( 'XUI_KEYWORD_CALLBACK', "callback" );
define ( 'XUI_KEYWORD_DATA', "data" );
define ( 'XUI_KEYWORD_ERROR', "error" );

date_default_timezone_set("Asia/Taipei");

// for json
if (! function_exists ( 'json_encode' )) {
    include_once ("JSON.php");
    function json_encode($var) {
        return (new JSON ()) . encode ( $var );
    }
    function json_decode($str) {
        return (new JSON ()) . decode ( $str );
    }
}

// handle request data
function xui_getRequestData() {
    $callback = XUI_KEYWORD_CALLBACK;
    $inputData = new stdClass ();
    
    // 1. for "post" request
    // 1.1. form post( a=b$c=d )
    if (count ( $_POST ) > 0) {
        foreach ( $_POST as $k => $v )
            $inputData->$k = get_magic_quotes_gpc () ? stripslashes ( $v ) : $v;
        // 1.2. form post( {a:'b',c:'d'} ) or xmlhttp post
    } else {
        $request = file_get_contents ( 'php://input' );
        if ($request) {
            $request = json_decode ( $request );
            foreach ( $request as $k => $v )
                $inputData->$k = is_string ( $v ) ? get_magic_quotes_gpc () ? stripslashes ( $v ) : $v : $v;
        }
    }
    
    // 2. for "get" request
    $request = $_SERVER ['QUERY_STRING'];
    // 2.1. get ?a=b$c=d
    if ($request) {
        if (strstr ( $request, '=' ) !== false) {
            foreach ( $_GET as $k => $v )
                $inputData->$k = get_magic_quotes_gpc () ? stripslashes ( $v ) : $v;
            // 2.2. get ?{a:'b',c:'d'}
        } else {
            $request = json_decode ( rawurldecode ( $request ) );
            foreach ( $request as $k => $v )
                $inputData->$k = is_string ( $v ) ? get_magic_quotes_gpc () ? stripslashes ( $v ) : $v : $v;
        }
    }
    return $inputData;
}

// echo response data, or error info
function xui_echoResponse($inputData, $outputData, $ok = true) {
    $callback = XUI_KEYWORD_CALLBACK;
    $data = XUI_KEYWORD_DATA;
    $err = XUI_KEYWORD_ERROR;
    
    if (isset ( $inputData )) {
        if (isset ( $inputData->$callback ))
            $callbackV = $inputData->$callback;
        unset ( $inputData );
    }
    
    $outputDataWrapped = new stdClass ();
    
    if ($ok)
        $outputDataWrapped->$data = $outputData;
    else
        $outputDataWrapped->$err = $outputData;
    
    $outputDataWrapped = json_encode ( $outputDataWrapped );
    
    // wrap result data for xui.IAjax and xui.SAjax
    if (_ . isset ( $callbackV )) {
        // for xui.IAjax
        if ($callbackV == "window.name") {
            $outputDataWrapped = "<script type='text' id='json'>" . $outputDataWrapped . "</script><script type='text/javascript'>window.name=document.getElementById('json').innerHTML;</script>";
        } // for xui.SAjax
else {
            $outputDataWrapped = $callbackV . '(' . $outputDataWrapped . ')';
        }
    }
    // for xui.Ajax
    echo $outputDataWrapped;
}
function jsonResponse($outputData, $status = "ok") {
    $outputDataWrapped = new stdClass ();
    
    $outputDataWrapped->status = $status;
    $outputDataWrapped->data = $outputData;
    
    $outputDataWrapped = json_encode ( $outputDataWrapped );
    echo $outputDataWrapped;
}

function myStartSession() {
    session_start ();
    global $Member;
    global $StartLogin;
    
    if (! isset ( $_SESSION ["username"] )) {
        if (isset ( $StartLogin ))
            return;
        else
            exit ();
    }
    $Member = $_SESSION ["username"];
    
}
function myDestroySession() {
    session_destroy ();
}
function check(&$name) {
    $name = $name ?: "";
}
function getFileExt($f) {
    return "." . pathinfo ( $f, PATHINFO_EXTENSION );
}
function getMainFileName($filename) {
    return preg_replace ( '/.[^.]*$/', '', $filename );
}





function checkNick($id) { 

     $flag = false; 
     $id = strtoupper($id); // 將英文字母全部轉成大寫 
     $id_len = strlen($id); // 取得字元長度 

  
     if($id_len <= 0) { 
        return false;   
     } 
     if ($id_len > 10) { 
        return false;   
     } 
     if ($id_len < 10 && $id_len > 0) { 
        return false;   
     } 
  
     //檢 查 第一個字母是否為英文字 
     $id_sub1 = substr($id,0,1); // 從第一個字元開始 取得字串 
     $id_sub1 = ord($id_sub1); // 回傳字串的acsii 碼 
     if ($id_sub1 > 90 || $id_sub1 < 65) { 
        return false;   
     } 

     //檢 查 身份證字號的 第二個字元 男生或女生 
     $id_sub2 = substr($id,1,1); 
  
     if($id_sub2 !="1" && $id_sub2 != "2") { 
        return false;   
     } 

     for ($i=1;$i<10;$i++) { 
        $id_sub3 = substr($id,$i,1); 
        $id_sub3 = ord($id_sub3); 
        if ($id_sub3 > 57 || $id_sub3 < 48) { 
           $n=$i+1; 
           return false;   
        } 
     } 
  
     $num=array("A" => "10","B" => "11","C" => "12","D" => "13","E" => "14", 
     "F" => "15","G" => "16","H" => "17","J" => "18","K" => "19","L" => "20", 
     "M" => "21","N" => "22","P" => "23","Q" => "24","R" => "25","S" => "26", 
     "T" => "27","U" => "28","V" => "29","X" => "30","Y" => "31","W" => "32", 
     "Z" => "33","I" => "34","O" => "35"); 

     $d1 = substr($id,0,1); // 從第一個字元開始 取得字串 
     $n1=substr($num[$d1],0,1)+(substr($num[$d1],1,1)*9); 
     $n2=0; //初使化 
     for ($j=1;$j<9;$j++) { 
        $d4=substr($id,$j,1); 
        $n2=$n2+$d4*(9-$j); 
     } 
     $n3=$n1+$n2+substr($id,9,1); 
     if(($n3 % 10)!= 0) { 
        return false;   
     } 
     return true;   

}

function verifyChinaId($id)
{
$id = trim($id);
 
//長度檢查
$string_length = strlen($id);
if ( $string_length != 18) {
    return false;
}
 
//數字檢查
//前17碼必須為數字
for ($i = 0; $i < $string_length - 1; $i++) {
    if ( ! is_numeric($id[$i]) ) {
        return false;
    }
}
 
//生日碼檢核
$date = substr( $id , 6 ,8 );
$date = strtotime( $date );
if ( ! $date ) return false;
 
//取得校驗碼
$factors = array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); ////加權因子
$nValue = 0;
for ($i = 0; $i< 17; $i++) {
    $nValue = $nValue + ($factors[$i] * $id[$i]);
}
$nValue %= 11;
$verify_ref = array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
$last_verify_code = $verify_ref[$nValue];
 
return ( $last_verify_code == $id[17] );    
}

function returnErrorResult($text)
{
  $R = new stdClass;
  $R->result = "ERROR";
  $R->error = $text;  
  $json=json_encode($R);      
  echo $json;
  exit;  
}

/*
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

function getRowData($header, $datas){
    $rows = array();
    foreach($datas as $data)
    {
        $item = new stdClass();
        //$item->id = $data[$rowidField];
        $item->cells = array();
        foreach($header as $col)
        {
            array_push($item->cells, $data[$col]);
        }
        array_push($rows, $item);
    }
    return $rows;
}
*/

if (strncasecmp ( PHP_OS, 'WIN', 3 ) == 0)
    $OS = "WIN";
else
    $OS = "LINUX";


//myStartSession (); // exit immediately if not login

// error_reporting(0);

?>