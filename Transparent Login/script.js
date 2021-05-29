function validate() {
    var username = document.getElementById('uname')
    var password = document.getElementById('pass')
    var user_box = document.getElementById('user-textbox')
    var pass_box = document.getElementById('pass-textbox')
    var user_label = document.getElementById('lbluser')
    var pass_label = document.getElementById('lblpass')

    if (username.value.trim() === "") {
       user_box.style.borderBottom = "2px solid red";
       user_label.style.visibility="visible";
       //alert('Blank Username');
       return false;
    }
    else if (password.value.trim() === "") {
        pass_box.style.borderBottom = "2px solid red";
        pass_label.style.visibility="visible";
        //alert('Blank Password');
        return false;
    }
    else{
        true;
    }
}

//border-bottom: 1px solid black