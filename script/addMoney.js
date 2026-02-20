document.getElementById('add-money-btn').addEventListener('click', function(){
    // 1. bank account 
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == 'Select A Bank'){
        alert('Please select a bank');
        return; 
    }
    // 2. get bank account number
    const accountNumber = getValueFromInput('add-money-number');
    if(accountNumber.length != 11){
        alert('Invalid Account Number');
        return;
    }
    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();

    const newBalance = currentBalance + Number(amount);
    
    const pin = getValueFromInput('add-money-pin');
    if(pin == "1234"){
        alert(`Add Money Success from 
            ${bankAccount} 
            at ${new Date()}`);
        setBalance(newBalance);
    }else{
        alert('Invalid Pin');
        return;
    }
})