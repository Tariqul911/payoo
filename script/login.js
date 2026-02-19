// 1.get the mobile number input
    // 2.get the pin input
    // 3.match pin & mobile number
    // 3-1. true :::>> alert> homepage
    // 3-2. false :::>> alert> return


document.getElementById('login-btn').addEventListener('click', function(){
    // 1.get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2.get the pin input
    const inputPin = document.getElementById('input-pin');
    const pinNumber = inputPin.value;
    console.log(pinNumber);

    // 3.match pin & mobile number
    if(contactNumber == '01911296716' && pinNumber == '1234'){
        // 3-1. true :::>> alert> homepage
        alert('Login Success');

        window.location.assign('/home.html');

    }
    else{
        // 3-2. false :::>> alert> return
        alert('Login Failed');
        return;
    }

})