function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

let result  = fullName("Somanshu", "Grover");

let expected = 5;

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

let resultSecond  = fullName("Somanshu", "Grover");

let expectedSecond = "Somanshu Grover";


if(resultSecond !== expectedSecond){
    throw new Error(`${result} is not equal to ${expected}`);
}

function totalAmount(amount, taxRate){
    return amount + (amount * taxRate);
}

let resultOfTotalAmount  = totalAmount(50, 5);

let expectedOfTotalAmount = 250;

if(resultOfTotalAmount !== expectedOfTotalAmount){
    throw new Error(`${resultOfTotalAmount} is not equal to ${expectedOfTotalAmount}`);
}


let resultSecondOfTotalAmount  = totalAmount(50, 5);

let expectedSecondOfTotalAmount = 300;

if(resultSecondOfTotalAmount !== expectedSecondOfTotalAmount){
    throw new Error(`${resultOfTotalAmount} is not equal to ${expectedOfTotalAmount}`);
}