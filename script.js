// document.writeln("IsmailMail");

// var valueStr = "12.9pt"
// valueStr = parseInt(valueStr);
// console.log(valueStr);
// var floatStr = ("12.9pt");
// floatStr = parseFloat(floatStr);
// console.log(floatStr);


// console.log("4" + 2);
// console.log("4" -2);


// console.log(3=="3");
// console.log(3==="3");

// var temperature =30;

// if(temperature>=100){
//     document.writeln("boiling");
// }else if(temperature<100 && temperature>=60){
//     document.writeln("worm");
// }else{
//     document.writeln("cold");
// }


// var status;
// if(temperature>=100){
//     status = "boiling";
// }else{
//     status="not boiling";
// }
// document.writeln(status);

// //  var status =(temperature>=100)? "boiling":"notboiling";
// //  document.writeln(status);

// var dayIndex=1;
// switch(dayIndex){
//     case 1:
//         document.writeln("sunday");
//         break;
//      case 2:
//         document.writeln ("monday")
//         break;
//     case 3:
//         document.writeln("tharday")
//         break;
//     case 4:
//         document.writeln("wensday")
//         break;
//     case 5:
//         document.writeln("thurday")
//         break;
//     case 6:
//         document.writeln("friday")
//         break;
        
//     // default:
//     //     document.writeln("none")  
// }

// for(var counter=2; counter<5; counter++){
//     document.writeln(counter);
// }


// var loopValue = 5;
// while(loopValue<4){
//     document.writeln(loopValue);
//     loopValue++
// }

// do{
//     document.writeln(loopValue);
//     loopValue++
// }while(loopValue<4)


// function sayHello(){
//     console.log("hello from Ismail");
// }
// sayHello();


// function addNumbers(n1=9,n2=11){
//     var tempVar=3;
//     let blockVar=4;
//     var sumResult = n1+n2;
//     return sumResult;
// }
// console.log(addNumbers(4,4));
// // console.log(tempVar)
// // console.log(blockVar)


// var greetFn = function (){
//     console.log("hello from function");
// }
// greetFn();


// function CallAnother(callbackFn){
//     console.log("Hi from function");
//     callbackFn();
// }

// CallAnother(function(){
//     console.log("this is an anonymous function");
// });

// // CallAnotherFn(greetFn);



// var dataArr = [100,200,300,300,"item","text"]
// console.log(dataArr);
// console.log(dataArr[4]);
// dataArr[0] = "Alex"
// console.log(dataArr);
// console.log(dataArr.length);
// dataArr.pop();
// console.log(dataArr);
// dataArr.push(80,90);
// console.log(dataArr);
// dataArr.splice(3,0,450);
// console.log(dataArr);
// dataArr.shift();
// console.log(dataArr);
// dataArr.unshift(8);
// console.log(dataArr);


// var numbersArr =[10,20,40,30,40,50,60,40];
// console.log(numbersArr.indexOf(20));
// console.log(numbersArr.lastIndexOf(40));

// var slicedArr = numbersArr.slice(2,5);
// console.log(slicedArr);



// var firstList = [1,2,3,4];
// var secondList = [5,6,7,8];
// var mergedList = firstList.concat(secondList)
// console.log(mergedList);


// let smallArr = [1,2,3];
// let bigArr = [6,7,8];
// let finalArr= smallArr.concat(bigArr)
// console.log(finalArr);

// let wordsArr=["hi","ismail","and","friend"]
// let joinedStr = wordsArr.join("")
// console.log(wordsArr);
// wordsArr.sort()
// console.log(wordsArr)


// let sortArr = [5,6,7]
// console.log(sortArr)
// sortArr.sort((a,b)=> a-b)
// console.log(sortArr);


// for(var i=0;i<wordsArr.length;i++){
//     wordsArr[i]

// }
// console.log(wordsArr)


// smallArr.forEach(function(element){
   
// })
// // console.log(element+1)

// for(var element of wordsArr){
   
// }
// // console.log(wordsArr)


// var obj1  = 

// let numArr1= [1,2,4]
// let numArr2= [7,8,9]
// let combinedArr= numArr1.concat(numArr2)
// console.log(combinedArr)

// let textArr = ["hello", "ismail", "and","js"]
// let sentence =textArr.join(" ")
// console.log(sentence)
// textArr.sort()
// console.log(textArr)

// let mixArr = [10,2,5]
// console.log(mixArr)
// mixArr.sort((a,b)=>a-b)
// console.log(mixArr)
// mixArr.sort((a,b)=>b-a)
// console.log(mixArr)

// for(var i=0;i<textArr.length;i++){
//     textArr[i]
// }
// console.log(textArr)

// numArr2.forEach(function(element){
//     console.log(element+1)
// })
// for(var element of textArr){
//     console.log(element+" Ismail")
// }
// var domObj1 = document.getElementById("1")
// console.log(domObj1)

// var domObj2 =document.getElementsByClassName("class1")[1]
// console.log(domObj2)
//  var domObj3 = document.getElementsByTagName("h3")[0]
//     console.log(domObj3)

//     var domObj4 = document.querySelector("#flex-container")
//     console.log(domObj4)

//     var domObj5 =document.getElementsByTagName("input")[0]
//     domObj5.setAttribute("placeholder","Enter your name here") 
//     domObj5.setAttribute("value","Ismail") 
//     console.log(domObj5)

//     domObj4.style.background= "grey"

//     var newDiv = document.createElement("div")
//     var newText = document.createTextNode("this is a new node")


//     var button = document.getElementsByTagName("button")[0]
//     button.addEventListener("click","function(){}")

let userProfile = {
    fullName:"ismail",
    userAge:20,
    welcomeUser: function(){
        console.log("welcome " + this.fullName)
    }
};
userProfile.welcomeUser();

console.log(userProfile.fullName);

userProfile.fullName = "john";
console.log(userProfile);

userProfile.major = "Data Science & AI";
console.log(userProfile);

console.log(Object.keys(userProfile));
console.log(Object.values(userProfile));
console.log(Object.entries(userProfile));

let copiedProfile = {};
Object.assign(copiedProfile, userProfile, {job:"Data Scientist"});
console.log(copiedProfile);

function PersonData(fullName, ageValue){
    this.fullName = fullName;
    this.ageValue = ageValue;
}

let student1 = new PersonData("Ismail", 19);
console.log(student1);
console.log(student1.fullName);

let student2 = new PersonData("Asaad", 24);
console.log(student2);
console.log(student2.ageValue);

let arrayObj = new Array(1,2,3);
console.log(Array.prototype);


function AnimalType(animalName){
    this.animalName = animalName;
}

AnimalType.prototype.speak = function(){
    console.log(this.animalName + " make a sound");
}

let wildAnimal = new AnimalType("wolf");
wildAnimal.speak();


function DogType(dogName){
    AnimalType.call(this, dogName);
}

DogType.prototype = Object.create(AnimalType.prototype);

DogType.prototype.speak = function(){
    console.log(this.animalName + " barks");
}

let dogObj = new DogType("bubby");
dogObj.speak();


class AnimalClass{
    constructor(animalName){
        this.animalName = animalName;
    }

    speak(){
        console.log(this.animalName + " makes a sound.");
    }
}

class DogClass extends AnimalClass{
    constructor(animalName, animalType){
        super(animalName);        
        this.animalType = animalType;
    }

    getDAta(){
        console.log("the name and the type is " + this.animalName + " " + this.animalType);
    }
}

let animalInstance = new AnimalClass("cat");
animalInstance.speak();

let dogInstance = new DogClass("puppy", "type");
dogInstance.speak();
dogInstance.getDAta();



let jsonStr = JSON.stringify(userProfile)
console.log(jsonStr)

let parsedObj = JSON.parse(jsonStr)
console.log(parsedObj)

console.log("task1")
setTimeout(function(){
    console.log("task2")
},3000)
console.log("task3")
