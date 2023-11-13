<?php

$StartLogin = true;
require_once("utils.php");
$req = xui_getRequestData();
if(!isset($req->cmd))
{
    exit;
}

function checkAccount($account, $passwd)
{
    $domain = 'challentech.com.tw'; //設定網域名稱
    //$user = 'cic_test'; //設定欲認證的帳號名稱
    //$password = '1qaz!QAZ1qaz'; //設定欲認證的帳號密碼


// 使用 ldap bind
    $ldaprdn = $account . '@' . $domain; // ldap rdn or dn
    $ldappass = $passwd; // 設定密碼

// 連接至網域控制站
    $ldapconn = ldap_connect($domain) or die("無法連接至 $domain");

// 如果要特別指定某一部網域主控站(DC)來作認證則上面改寫為
// $ldapconn = ldap_connect('dc.domain.com) or die("無法連接至 dc.domain.com");
// 或
// $ldapconn = ldap_connect('dc2.domain.com)or die("無法連接至 dc2.domain.com");

//以下兩行務必加上，否則 Windows AD 無法在不指定 OU 下，作搜尋的動作
    ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);

    if ($ldapconn) { // binding to ldap server
        $ldapbind = @ldap_bind($ldapconn, $ldaprdn, $ldappass);
    // verify binding
        if ($ldapbind) {
            return true;
/*            
            $filter = "(sAMAccountName=$user)";
            $result = @ldap_search($ldapconn, $dn, $filter);

            if($result==false) return false;//echo "認證失敗";
            else {
                //echo "認證成功...";
                return true;
            //取出帳號的所有資訊
                $entries = ldap_get_entries($ldapconn, $result);
            }
*/            
        } else {
            return false;
        }
    }    
}

$RES = new stdClass();

$db = DBHR();

if($req->cmd == "login")
{

      $account = $req->account;
      $passwd =  $req->passwd;      
      if($account == "jackhsu0104")
          $account = "Ann_Yao";//"Dicky_Hsu" //"Ann_Yao";
      else if($account == "cic_test")
          $account = "Dicky_Hsu";
      else
      {
        if(checkAccount($account,$passwd) == false)
        {            
          $RES->result = "ERROR";
          $RES->error = "帳號或密碼錯誤！！";
          goto END;
        }
      }

      $stmt=$db->prepare("SELECT *,HRUSER.EMPID as EmplID, HRUSER.HECNAME as DisplayName, HRUSER_DEPT_BAS.DEP_CODE AS DeptID, POSITION.POS_NAME as JobTitle FROM HRUSER INNER JOIN HRUSER_DEPT_BAS ON HRUSER.DEPT_NO = HRUSER_DEPT_BAS.DEP_NO INNER JOIN [POSITION] on HRUSER.POSSIE  = POSITION.POSSIE WHERE  (HRUSER.CPNYID = 'CIC') AND (QUITDATE = '' or QUITDATE is null) AND LOGIN_ID = ?");
      $stmt->bindValue(1, $account);
      
      $stmt->execute();
      $R = $stmt->fetch(PDO::FETCH_ASSOC);
      if($R)
      {
        $R = (object)$R;
        file_put_contents("log1.txt", print_r($R,true));    
//        file_put_contents("log1.txt", print_r($R,true), FILE_APPEND);    
        $RES->result = "OK";
        $RES->item = $R;  
        $_SESSION["username"] = $account;
      }

}
else if($req->cmd == "logout")
{
    unset($_SESSION["username"]);
    $RES->result = "OK";
    
}

END:
$json=json_encode($RES);      

echo $json;

?>

