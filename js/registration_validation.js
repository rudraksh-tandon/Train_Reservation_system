function formValidation() {
    var username = document.getElementById('uname').value;
    var letters = /^[A-Za-z]+\d{1,}$/;
    if (!username.match(letters))
        alert('Username must be alphanumeric and contain at least one digit')


    var num1 = document.getElementById('number').value;
    var num = /^[6-9][0-9]{9}$/;
    if (!num1.match(num))
        alert("Wrong phone number");


    var pass1 = document.getElementById('password').value;
    var pass = /[A-Za-z]*[^A-Za-z0-9]+\d{1,}$/;
    if (!pass1.match(pass))
        alert("password format is invalid\nplease include atleast 1 digit and 1 special character");



    var confp = document.getElementById('cpassword').value;
    if (confp != pass1)
        alert("Confirm password does not match with original password");
}