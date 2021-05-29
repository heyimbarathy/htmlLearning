function validate() {
    var username = document.getElementById('uname');
    var password = document.getElementById('pass');
    if (username.value.trim() === "" || password.value.trim() === "") {
        alert('No blank values are allowed');
        return false;
    }
    else{
        true;

    }
}