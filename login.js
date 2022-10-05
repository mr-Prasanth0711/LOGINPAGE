function vfun(){
 var names=document.getElementById("uname").value;
 var passw=document.getElementById("pass").value;
 
if(names==null || names==""){
    document.getElementById("errorBox").innerHTML="Enter the Username";
    return false;

}if(passw==null || passw==""){
    document.getElementById("errorBox").innerHTML="Enter the Password";
    return false;


}if(names!='' && passw!=''){
    alert("login Succesfully");

}
}