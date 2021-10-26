//holds user input for username and password
let username = document.querySelector("#username");
let password = document.querySelector("#password");

function checkLogin(){
    //if the username value is Username and the password value is Password
    if((username.value == "Username")&&(password.value=="Password")){
        //print Success to the div
        dvOutput.innerHTML = "Success!"
    }else{
        //if not, print Wrong Information to the div
        dvOutput.innerHTML = "Wrong Information";
    }
}