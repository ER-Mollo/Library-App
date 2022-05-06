
function saveData(){
    //get the values of the input fields
//    console.log(document.getElementById("fname"));
//     return;
    let fname,surname,cell,email,pass,conf,img;
    fname = document.getElementById("fname").value;
    surname = document.getElementById("last").value;
    cell = document.getElementById("cell").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    conf = document.getElementById("conf").value;
    img = document.getElementById("img").value;

    //initialize errors
    // let nameErr,cellErr, emailErr,passErr,conErr,imgErr;
    // nameErr = document.getElementById("nameErr").innerHTML;
    // surErr = document.getElementById("surErr").innerHTML;
    // cellErr = document.getElementById("cellErr").innerHTML;
    // emailErr = document.getElementById("emailErr").innerHTML;
    // passErr = document.getElementById("passErr").innerHTML;
    // conErr = document.getElementById("conErr").innerHTML;
    // imgErr = document.getElementById("imgErr").innerHTML;

    //validation
    if(surname == ""){
        document.getElementById("surErr").innerHTML = "please enter your first name";
    }
    
}
