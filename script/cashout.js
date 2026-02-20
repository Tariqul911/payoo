// 1. Get the agent Number & validate
    // 2. get the amount, validate, convert to Number
    // 3. get the current Balance, validate, convert to Number
    // 4. Calculate new Balance
    // 5. Get the pin and verify
    // 5-1 true :: show an alert > set New Balance
    // 5-1 false :: show an error alert > return
// ******************************              ************************************


document.getElementById('cashout-btn').addEventListener('click',function(){
    // 1. Get the agent Number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }

    // 2. get the amount, validate, convert to Number
    const cashoutAmount = getValueFromInput('cashout-amount');

     // 3. get the current Balance, validate, convert to Number
    //  const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;
    // console.log(balance);

    const currentBalance = getBalance();
    // 4. Calculate new Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0 ){
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    if(pin === '1234'){
        alert('CashOut Successfull');
        // document.getElementById('balance').innerText = newBalance;
        setBalance(newBalance);
    }else{
        alert('Invalid Pin');
        return;
    }
})

// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // 1. Get the agent Number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log("cashout btn clicked",cashoutNumber); 
//     if(cashoutNumber.length !=11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 2. get the amount, validate, convert to Number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3. get the current Balance, validate, convert to Number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4. Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    

//     if(newBalance < 0 ){
//         alert("Invalid Amount");
//         return;    
//     }
//     console.log('new balance', newBalance)

//     // 5. Get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;

//     if(pin === '1234'){
//         // 5-1 true :: show an alert > set New Balance
//         alert('Cashout Successful')
//         console.log('new balance', newBalance);
//         balanceElement.innerText = newBalance;
//     }
    
//     else{
//        // 5-1 false :: show an error alert > return
//        alert('Invalid Pin');
//        return;

//     }
    
    
// })