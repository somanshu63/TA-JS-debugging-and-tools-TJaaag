function addTwoNumbers(numA = 0, numB = 0) {
    return numA + numB;
}
let result, expected;

function test(message, callback) {
    try{
        callback();
        console.log("right", message);
    } catch (error) {
        console.error(error);
        console.log("wrong", message);
    }
}

function expect(actual) {
    return {
        toEqual: function(expected) {
            if(actual !== expected){
                throw new error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

function testAdd(){
    result = addTwoNumbers(100,"200");
    expected = 300;
    expect(result).toEqual(expected);
}
test("adding 2 numbers", testAdd);

function testAdd2(){
    result = addTwoNumbers(1400,200);
    expected = 1600;
    expect(result).toEqual(expected);
}
test("adding 2 numbers", testAdd2);

function testAdd3(){
    result = addTwoNumbers(10,2);
expected = 12;
expect(result).toEqual(expected);
}
test("adding 2 numbers", testAdd3);

function testAdd4(){
    result = addTwoNumbers(121,220);
expected = 341;
expect(result).toEqual(expected);
}
test("adding 2 numbers", testAdd4);

function testAdd5(){
result = addTwoNumbers(1400,200);
expected = 160;
expect(result).toEqual(expected);
}
test("adding 2 numbers", testAdd5);





function mulTwoNumbers(numA = 1, numB = 1) {
    return numA * numB;
}

function test(message, callback) {
    try{
        callback();
        console.log("right", message);
    } catch (error) {
        console.error(error);
        console.log("wrong", message);
    }
}

function testMul(){
    result = mulTwoNumbers(100,"200");
    expected = 300;
    expect(result).toEqual(expected);
}
test("multiplying 2 numbers", testMul);

function testMul2(){
    result = mulTwoNumbers(14,2);
    expected = 28;
    expect(result).toEqual(expected);
}
test("multiplying 2 numbers", testMul2);

function testMul3(){
    result = mulTwoNumbers(10,2);
expected = 20;
expect(result).toEqual(expected);
}
test("multiplying 2 numbers", testMul3);

function testMul4(){
    result = mulTwoNumbers(1,220);
expected = 220;
expect(result).toEqual(expected);
}
test("multiplying 2 numbers", testMul4);

function testMul5(){
result = mulTwoNumbers(100,200);
expected = 20000;
expect(result).toEqual(expected);
}
test("multiplying 2 numbers", testMul5);
