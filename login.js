function validate(){
 var names=document.getElementById("name").value;
 var passw=document.getElementById("pass").value;
 if(names=='prasanth' && passw=="24235"){

 
    alert("Correct");

}else if(names==-''&& passw==''){

    alert("please enter the Username ans Password");
 
    
}else{
    alert("Incorrect");
 

}
}