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
console.log('this is odd number1',oddResult);

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


// factorial
// var factorial=1;
// for(var i =1; i<=7;i++){
//     console.log(i);
    
//     factorial=factorial*i;
// }
// console.log(factorial);


// function factorial

function getFactorial(number){
    let factorial=1;
    for(let i=1; i <= number; i++){
        factorial= factorial*i;
    }
    return factorial;
}
var firstFactorial=getFactorial(10);
console.log(firstFactorial);

var secondFactorial=getFactorial(14);
console.log(secondFactorial);

// const myNumber=-5;
// const outPut=Math.abs(myNumber)
// console.log(outPut);

const myNumber=21.001;
const outPut=Math.ceil(myNumber)
console.log(outPut);

const num=22.5699;
const result=Math.floor(myNumber);
console.log(result);

const num1= 21.5;
const sum=Math.round(num1)
console.log(sum);

const num2= 5;
const sum1=Math.random(num2)*10;
const rounded=Math.round (sum1);
console.log(rounded);

var first=5;
var second=7;
console.log(first,second);
var temp=first;
var first=second;
var second=temp;
console.log(first,second);

var fourth=3;
var five=8;
console.log(fourth,five);
[fourth,five]=[five,fourth]
console.log(fourth,five);

function largest(first ,second,third){
    if(first>second){
        return first;
    }
    else if(second>third){
        return second;
    }
    else{
        return third;
    }

}
 var largested=largest(70,20,50)
console.log(largested);

a=50;
b=30;
c=160;

if(a<b && a<c){
    console.log('this is  small number a')

}
else if(b<a && b<c){
    console.log('this is small number b');
}
else{
    console.log('this is small number c');
}

var max=Math.max(a,b,c)
console.log(max);
var min=Math.min(a,b,c)
console.log(min);
 

var arrayName=[23,56,67,56,20,23]
let sum4=0;
for(let i=0; i<arrayName.length;i++){
   const elment= arrayName[i]
   
    sum4=sum4+elment;
    
    
}
console.log(sum4);

// function largestElement(myNumbers){
//     let largest=myNumbers[0];
//     for(let i=0; i<myNumbers.length;i++){
//         const element=myNumbers[i];
//         if(element>largest){
//             largest=element;
//         }
        
//     }
//     return largest;
// }

// let myNumbers=[12,45,67,87,32,56,76,]
// let largest11=largestElement(myNumbers)
// console.log(largest11);

// let myNumbers1=[-10,-23,-5]
// let big=largestElement(myNumbers1)
// console.log(big);


function lowest(number){
    let lowested=number[0];
    for(let i=0; i<number.length;i++){
        const element=number[i];
        if(element<lowested ){
            lowested=element;
        }
        
    }
    return lowested;
}
let array=[12,10,5,56,9,]
let arrayResult=lowest(array);
console.log(arrayResult);

const fibo=[0,1];
for(let i=2; i<=10;i++){
    // nth = (n-1)th + (n-2)th
    // ith = (i-1)th + (i-2)th
    fibo[i]= fibo[i-1] +fibo[i-2];
}
console.log(fibo);


const names=[12,45,34,56,12,45,34,6,8,6,7,8,40,20,20];

function removeDuplicate(num){
    let unique=[];
    // for(const element of names){
    //     if(unique.indexOf(element)==-1){
    //         unique.push(element)
    //     }
        
    // }
    // return unique;
    for(let i=0;i<names.length;i++){
        const element=names[i]
        if(unique.indexOf(element)==-1){
            unique.push(element)
        }
    }
    return unique;
}
const uniqueName=removeDuplicate(num)
console.log(uniqueName);

const greeting='hello how are'
function reverseString(text){
    let revers="";
    for(const letter of text){
        console.log(letter);
        revers=revers+letter;
    }
    return revers
}
const textReverse=reverseString(greeting)
console.log(textReverse);



function woodCalculator(charQuentity,tableQurntity,bedQuentity){

   const charWood=3;
   const tableWood=10;
   const bedWood=50;

   const charWoodQuentity=charQuentity * charWood;
   const tableWoodQuentity=tableQurntity *tableWood;
   const bedWoodQuentity=bedQuentity *bedWood

   const totalWood=charWoodQuentity+ tableWoodQuentity+bedWoodQuentity;
   return totalWood;

}

const quentity=woodCalculator(2,2,2);
console.log(quentity);