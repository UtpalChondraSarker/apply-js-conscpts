var numbers=[12,45,56,76,88,90,34,12,34,23]
for(var i=0; i<numbers.length; i++){
    var number6=numbers[i]
    if(number6 > 70){
        continue;
    }
    console.log(number6);
}



function inchesToFeet(inches){
        var feet=inches/12;
        return feet;
}
var myInches=144;
var feet=inchesToFeet(myInches)
console.log('this is feet',feet);

var didiinches=132;
var feet=inchesToFeet(didiinches);
console.log('this is feet',feet);


//miletokilomiter

function miletokilomiter(mile){
    var kilometer=mile*1.60934;
    return kilometer;
}
var kilo=miletokilomiter(4);
console.log(kilo);

//odd and even number

function isEven(number){
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
}

var even=140;
var evenResult=isEven(even)
console.log('this is even number',evenResult);

//odd

function isOdd(number1){
    if(number1 % 2 !=0 ){
        return true;
    }
    else{
        return false;
    }
}

var oddNumber=123;
var oddResult=isOdd(oddNumber);
console.log('this is odd number',oddResult);

//leepyear

function leepyear(year){
    if(year % 4 == 0 && year % 4 != 1 ){
        return true;
    }
    else{
        return false;
    }
}

var year=2020;
var yearResult=leepyear(year);
console.log( 'this is leepyear',yearResult);