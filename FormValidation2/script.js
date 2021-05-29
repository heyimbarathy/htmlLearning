function validate() {
    var username = document.getElementById('uname');
    var password = document.getElementById('pass');
    if (username.value.trim() === "") {
        //alert('Blank Username');
        username.style.border = "solid 3px red";
        document.getElementById('lbluser').style.visibility="visible";
        return false;
    }
    else if (password.value.trim() === "") {
        // alert('Blank Password');
        password.style.border = "solid 3px red";
        document.getElementById('lblpass').style.visibility="visible";
        return false;
    }
    else if (password.value.trim().length < 5) {
        alert('password too short');
        return false;
    }
    else if (password.value.trim().length > 20) {
        alert('Password too long');
        return false;
    }
    else{
        true;

    }
}