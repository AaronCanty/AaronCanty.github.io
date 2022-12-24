
// storing input from register-form
function store() {
    // Name and Password from the register-form
    var user_name = document.getElementById("name");
    var pwd = document.getElementById("pw");
    localStorage.setItem("user_name", user_name.value);
    localStorage.setItem("password", pwd.value);
    console.log("name " + user_name);
    console.log("name " + user_name);

}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data
    var saved_name = localStorage.getItem("name");
    var saved_pwd = localStorage.getItem("pw");
    console.log(saved_name);

    // entered data
    var user_name = document.getElementById("user-name");
    var user_pw = document.getElementById("user-pw");

    // check if login & register credentials are the same
    if(user_name.value == saved_name && user_pw.value === saved_pwd) {
        alert("Logged in!");

    }else {
        alert("Something isn't right, try again!");
    }
}



