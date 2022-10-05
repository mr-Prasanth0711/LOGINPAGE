function validate() {
  
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    // var password = /^[A-Za-z]\w {7}$/;

    var arry = JSON.parse(localStorage.getItem("submit"));
   
    if (name == "") {
        alert("Please fill the username");
    } else if (pass == "") {
        alert("Please fill the Password");
    }
    // else if (!password.test(pass)) {
    //     alert("Enter Strong Password");
    // }
     else if (cpass == "") {
        alert("Please fill the Confirm Password");
    } else if (pass == cpass) {
        alert("Account Registered successfully");
        if (arry == null) {
            var data = [[name, pass]];
            localStorage.setItem("submit", JSON.stringify(data));

        } else {
            arry.push([name, pass]);
            localStorage.setItem("submit", JSON.stringify(arry));
        }
    } else {
        alert("Password doesn't match");
    }


    console.log(arry);
}



