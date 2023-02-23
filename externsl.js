
function validate() {

    var name = document.myform.name.value;
    var address = document.myform.password.value;

    if (name == '' || name == null) {
        alert('Please enter your name');
        return false;
    }
    else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
        return false;
    }
    else if (email == '') {
        alert('Please enter your user email id');
        return false;
    }
    else if (address == '') {
        alert('Please enter your address');
        return false;
    }
    else if (age == '') {
        alert('Please enter your age');
        return false;
    }
    else if (age > 18) {
        document.write("eligible to vote :)");
    }
    else {
        document.write("wait till you turn 18!")
    }
}
