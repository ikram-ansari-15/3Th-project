
// console.log("Hello");

// 


// var a=12;
// var b=12;
// c=a+b;
// console.log(c);


// let a=12;
// let b=12;
// c=a+b;
// console.log(c);

// const a=12;
// const b=45;
// c=a*b;
// console.log(c);

//  what is data types 

// there are two data types : 1primitive data types;
//                             .Number
//                             .String
//                             .Boolrean
//                             .Null
//                             .UndeFined

//                             2:Non primitive data types 
//                             .Object
//                             .Array
//                             .Function

// let num =50;
// console.log(typeof num);


// let str='Hello';
// console.log(typeof str);


// let bool=false;
// console.log(typeof bool);

// let a= null;
// console.log(typeof a);

// //2

// let b ;
// console.log(typeof b);


// conversion?

// result='3' -1;
// console.log(result);
// console.log(typeof result);

// result = 20.20;
// result=parseInt(result);
// console.log(result);
// console.log(typeof result);


// operator?

// Airthmetic operator

// let a=12;
// let b=12;
// c=a-b;
// console.log(c);

// let x=1;
// x++;
// console.log(x++);
// console.log(x);

// Comparision Operator?

// a=6;
// b=5;
// console.log(a==b);
// console.log(a!=b);

// Logical operator?

// console.log(2>3 || 3>4);

// console.log(4>3 || 5>3);


// console.log(4>8 && 5>3);


// console.log(!false);


// conditionl Satatement?

// let age=16;
// if(age>=18){
//     console.log("you are eligible");
// }
// else{
//     console.log("You are not eligible");
// }

// let a=10;
// let b=10;
// if(a=b){
//     console.log("A is greater");

// }
// else if(b>a){
//     console.log("B is greater");
// }

// else{
// console.log("Both are equal");

// }


// switch()?

// let ch='helo';
// switch(ch){
//     case 1:
//         console.log(" i a i");
//  break;
//         case 2:
//             console.log(" i am 2");

//             case 3:
//                 console.log("i am 3");

//                 default:
//                     console.log("you pressed wrong choice");
//                     break;
// }


//Loop?
// for(var i=0;i<10;i++){
// console.log("Hello");
// }


// for(var i=10;i>0;i--){
//     console.log("i am a frontend Developer");
// }

// for(var i=0;i<10;i++){
//     if(i==1){
//         console.log("I am Software ingineer");
//     }else{
//         console.log("I am a Farmer");
//     }
// }


// for(var i=0;i<10;i++){
//     console.log(`2 x ${i} = ${2*i}`);
// }


// while loop?

// var i=0;
// while(i<=10){
//     console.log(`2 x ${i} ${ 2*i}`);
//     i++;
// }


// do while loop?

// var i=0;
// do{
//     console.log((`2 x ${i} ${ 2*i}`));
//     i++;
// }while(i<10);


// Function?

// function name(a){
//     console.log("Ikram "+a);
// }
// name("Afreen");

// function add(a,b){
//     console.log(a+b);
// }
// add(2,3);


// function add(a,b){
//     console.log(a+b+c);
// }
// let a=10;
// let b=120;
// c=225;
// add(a,b,c);



// Array?

// let name=["Ikram","Afreen","Manisha"];
// name.push("maa");
// name.unshift("papa");
// console.log(name);

// let num=[10,20,30,40,50,60];
// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i]);
// }

// let num=[10,20,30,40,50,60];
// num.forEach((val,index,Array)=>{
//     console.log(val+""+index+""+Array);
// })


// part Two Array?
 
// let arr=[10,20,30,40];
// for(let ar in arr)
// console.log(arr[ar]);

// let arr=[["johan",30],["Afreen",19],["Ikram",23]];
// console.log(arr);

// let arr=[["johan",30],["Afreen",19],["Ikram",23]];

// for(let ar of arr){

// for(i of ar){
//     console.log(i);
// }
// }

// arr1 =["johan",202,true];
// arr2=arr1;
// arr1.push("Ikram");

// console.log(arr1);
// console.log(arr2);

// Array Destructuring?

// let array1=["Thomas","chad"]
// let [item1,item2]=array1;
// console.log(item1);
// console.log(item2);

// // object?

// let obj={
//     name:"Afreen",
//     age:"20",

//     fun:function(){
//          console.log("I am a Function")

//     },
//     arr:[10,20,30]
// }
// let a="key2";
// obj.key="item"
// obj[a]="item"
// console.log(obj.age);


//object inside Array?

// let arr =[
//     {user:1,name:"ikram"},
//     {user:2,name:"Afreen"},
//     {user:3,name:"Maa"},
//     {user:4,name:"Papa"}
// ]

// console.log(arr[0]);

//Function inside Function?


// function fun(){
//     console.log("I am a function 1");
//     function fun2(){
//         console.log("I am function 2");
//     }
//      fun2();
// }
// fun();


// Lexical Scope?

// function fun(){
//     var a=1
//     console.log("Ikram "+a);
// }
// fun(); 


// Debugger?

// function fun(){
//     debugger;
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
// }
// fun();


// Sets?

// const arr=[10,20,30,40,50];
// console.log(arr);

// const s=new Set([10,20,30,40,50]);
// console.log(s);

// Maps?

// var map1=new Map([[1,"one"]]
//     ["fName","Afreen"],
//     ["vijay","ajit"],
//     ["akbar","izhar"],
//     ["Whole Number",[0,1,2,3,4,5,6]]

// )
// console.log(map1.get("fName")); 
// console.log(map1);

// Array This?

// var obj={
//     fName:"Ikram",
//     age:22,
//     fun: function(){
//     console.log(this.fName);
//     }
// }
// obj.fun();

// new?

// function fun(){
//     let fName="Ikram"
//     this.fName=fName;
// }
// var obj =new fun();
// console.log(obj.fName)

//Constructor?

// function User(name){
//     this.name=name;

// }
// console.log("Ikram");


// Array Symbol?
// =:A Symbol represents a unique identifier


// let sym=Symbol("id");

// let sym1=Symbol("id");
// console.log(sym===sym1);

// let id=Symbol("id");
// let obj={
//     name:"Ikram",
//     [id]:1
// }
// console.log(obj.name);


 //Recursion?
//  for(let i=0;i<=10;i++){
//     console.log(i);
//  }

//  function printNumberRecursive(n){
//          if(n<=10){
//             console.log(n);
//             console.log(n+1);
//          }
//  }


//  printNumberRecursive(1)

//factorial
// 5=:5*4*3*2*1=120?


// function fact(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*FontFaceSet(n-1);

//     }
// }
// console.log(fact(5));


// Recursion?
     
// //for(let i=0;i<=10;i++){console.log(i);}

// function printNumberRecursive(n){
//     if(n<=10){
//         console.log(n);
//     printNumberRecursive(n+1)

//     }
// }
// printNumberRecursive(1)

//factorial
//5=5*4*3*2*1=120
//4=4*3*2*1*=24

// function fact(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*fact(n-1);
//     }
// }
// console.log(fact(5));

// Asynchronous javascript?
// console.log("this is a goog boy");
// console.log("This is a very popular man");
// console.log("This is a most popular person");

// SetTime Out?

// console.log("Afreen");
// setTimeout(() => {
//     console.log("Synchronous");
// }, 5000)
// console.log("Afreen");

// Call Back?

// function fun(val){
//     console.log(val);
// }

// function add(a,b,callback){
//     let sum=a+b;
//     callback(sum);
// }
// add(25,25,fun)



// function loadingData(){
//     setTimeout(() => {
//         console.log("1) Loading Data...")
//     }, 4000);

// }
// function collectingData(){
//     console.log("2) Collecting Data...")
// }

// function approvingData(){
//     console.log("3) Approving Data")
// }

// function approved(){
//     console.log("4) Approved")
// }
// loadingData();
// collectingData();
// approvingData();
// approved();


//promise?
  
// function fun(task){

//     return new Promise((resolve,reject)=>{
//       if(task){
//         resolve("completed");
//       }else{
//         reject("Not completed");
//       }
//     }
// )
// }
// let onResolve=(res)=>{
//     console.log(res);
// }
// let onReject=(err)=>{
//     console.log(err);
// }
// fun(true).then(onResolve).catch(onReject);


//Async

// Setinterval?

// var inter=setInterval(fun ,1000)

// function fun(){
//    let date=new Date().toLocaleDateString();
//    console.log(date);

// }
// setTimeout(()=>{
// clearInterval(inter);
// },1000)


// property flag?

// let emp={};
// emp.name="johan";
// console.log(Object.getOwnPropertyDescriptor(emp,"name"))

//   Object.defineProperty(emp,"age",
//   {
// value:21,
// writable:true,
// configurable:true,
// enumerable:true
//   });

//   console.log(Object.getOwnPropertyDescriptor(emp,"age"));


// proto and prototype?

// let obj={
//     fName:"johan",
// };

// var obj2={
//     lName:"Smith",
// };
// obj2.__proto__=obj; 
// console.log(obj2.fName);

// Prototype?

// function person(name,age){
// let person=Object.create(obj)
// person.name=name;
// person.age=age;
// return person
// }

// var obj={
//     great(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let user =person("Ikram",22)
// console.log(user.great());

// console.log(person.prototype);


// Class?/

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     great(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let user=new person("Ikram",22)
// user.great();
// console.log(user);

// inheryTance?


// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name}make a noice`)
//     }
// }



// class Dog{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} make a noice`)
//     }
// }

// let d=new Animal('Rufus');
// d.speak();

// Static?


// class Game{
//     static score=0;
//     constructor(){
//         this.isplayng=false;
//     }
//     start(){
//         this.isplayng=true;
//         console.log("The game has started");
//     }
//     end(){
//         this.isplayng=false;
//         console.log("this has ended");
//         game.updateScore();

//     }
//     static updateScore(){
//         Game.score++;
//         console.log(`score " ${Game.score}`);
//     }
// }
// const game=new Game();

// game.start();
// game.end();


//public and private?

// class BankAccount{
//     balance=0;
//     deposit(amount){
//         this.balance +=amount;
//         console.log(`deposit${amount}, new balance is ${this.balance}`);


//    }
//    withdraw (amount){
//       if(amount>this.balance){
//         console.log(`insuficient funds`)
//       }
//       else{
//         this.balance=amount;
//         console.log(`withdraw ${amount},new balance is ${this.balance}`)
//       }
//    }
// }

// const amount=new BankAccount();

// console.log(account.balance);


// try and catch?

// function d(a,b){
//     try{
//         if(b==0){
//             throw new Erroe("Cant divide by 0")

//         }else{
//             console.log(a/b);
//         }
        
//     }
//     catch(err){
//         console.log(err.meassage)
//     }

// }
// d(10,0);

// FectchAPI?

// fetch ('myfile.text')
// .then(Response=>{
//     if(!Response.ok){
//         throw new error('Network is not response')
//     }
//     return Response.text();

// })
// .then(data=>console.log(data))
// .catch(error=>console.log('error'));

// // Dom?

// document.getElementsByTagName('class');
// document.getElementById("class");
// document.getElementsByClassName('class');

//  console.log(document.querySelector('.class').previousElementSibling);

// Dom Append Child?

// const ul=document.querySelector('ul');
// const newE =document.createElement('li');
// newE.textContent="Ikram And Afreen";
// ul.appendChild(newE);


// Dom Remove?

// const ul=document.querySelector('ul');
// ul.remove();

// Dom Replace Childe?

// const list =document.querySelector('ul');

// const childToChange=list.children[1];

// const newLi=document.createElement('li');
// newLi.textContent="Ikram Ansari"
// list.replaceChild(newLi,childToChange);

//Dom  Paren Node?


// var Parent =document.querySelector('ul');
// var p=parent.parentElement;
// console.log(p);


// var Parent =document.querySelector('div');
// var p=parent.parentNode;
// console.log(p);


// Dom Sibling?

// var b=document.querySelector('.class');
// console.log(b.previousSibling);


// var fChild=document.querySelector('ul');
// console.log(fChild.firstChild);

// var fChild=document.querySelector('ul');
// console.log(fChild.firstElementChild);

// Dom Inner ?

//  var a=document.querySelector('h1').innerText;
// console.log(a);

// console.log("----------");
// var a=document.querySelector('h1').textContent;
// console.log(a);


// var target=document.querySelector('.hero');
 
// var nweE='<b>Dro[ X Out</b>';

// target.insertAdjacentHTML("afterbegin",nweE);

// inner Html

// let a=document.querySelector('.hero');
// a.innerHTML='Giga Chad';
// console.log(a.innerHTML);

//outer Html?


// let a=document.querySelector('.hero');
// a.outerHTML='Giga Chad';
// console.log(a.outerHTML);


// Style?

// document.body.style.backgroundColor="red";

// Get

// let hero= document.querySelector('.hero');
// // console.log(hero.getAttribute('about'));

// hero.setAttribute("example",123);
// // console.log(hero.outerHTML);

// for(let att of hero.attributes){
//     console.log(`$(att.name)= $(att.value)`);
// }

