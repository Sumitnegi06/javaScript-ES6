// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// // const obj = {
// //     objkey1 : "myvalue1",
// //     objkey2 : "myvalue2"
// // }
// let obj = {}
// obj[key1] = value1
// obj[key2] = value2
// console.log(obj)
// const arr = [1,2,3];
// const arr1 = [4,5,6];
// const newarr = [...'harshit']
// console.log(newarr)


// const person = {
//     name : 'sumit',
//     age: 21,
//     "person hobbies" : ["reading","swimming","riding"],
// }
// const key = "gmail";
// // console.log(person["age"])

// person.college = "ishan"
// console.log(person.college);

// person["gender"] = 'male';
// console.log(person.gender);

// console.log(person["person hobbies"])

// person[key] = "negi03318@gmail.com";
// console.log(person.gmail)

// console.log(Object.keys(person))
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }


// const arr = [
//     {userId:1,firstName:"sumit"},
//     {userId:2,firstName:"mohit"}
// ];
// const [{firstName},{userId:Id}] = arr;
// console.log(Id)

// const isEven = (num)=>{
//     if(num%2 === 0){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// const val = "hello";
// function first (){
//     // const val ="hello1";
//     function second(){
//         // const val ="hello2";
//         console.log(val);
//     }
//     console.log(val);
//     second();
// }
// first();

// function hello (){
//     console.log("hello i am hello function");
// }
// function saitama(callback){
//     callback();

// }
// saitama(hello);

// function first(){
//     function second(){
//         console.log("finally called");
//     }
//     return second;
// }
// const ans = first();
// console.log(ans())

// const num = [22,33,44,55];
// const ans = num.forEach((num,index)=>{
//     console.log(num*2,index)
// })

// const arr = [11,21,23,31,12];
// const arr = ['sumit','mohit','rohit','subham']
// arr.sort((a,b)=>b-a);
// console.log(arr)

// const userCard = [
//     {productId : 1, product : "laptop", price : 129999},
//     {productId : 2, product : "mobile", price : 29999},
//     {productId : 3, product : "charger", price : 1299}
// ]
//sort usercard!!
// userCard.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(userCard)

//sort and make its clone
// const lowToHigh = userCard.slice(0).sort((a,b)=>a.price-b.price);
// console.log(lowToHigh)


// const totalAmount = userCard.reduce((totalPrice,currentPrice)=>{
    //    return totalPrice + currentPrice.price;
    // },0)
    // console.log(totalAmount)
    
    //to make clone of another array
// const arr=[1,22,3,44,5];
// const newarr= [].concat(arr)
// console.log(newarr)

//find method 
// const animal =['dog','cow','mouse','horse','snake','lizard']
// const newAnimal = animal.find((animal)=>{
//     return animal.length===6;
// })
// console.log(newAnimal)

// const user =[
//     {userId:1,userName:"sumit"},
//     {userId:2,userName:"rohitSharma"},
//     {userId:3,userName:"manav"},
//     {userId:4,userName:"mohan"},
// ]
// const Find = user.find((user)=>{
//     return user.userName.length>=6;
// });
// console.log(Find)


//every method

// const num = [4,5,3,5,6,2,6,2,5,3];
// const newArr = num.every((num)=>num%2 === 0);
// console.log(newArr);

// const userCard = [
//     {productId : 1, product : "laptop", price : 129999},
//     {productId : 2, product : "mobile", price : 29999},
//     {productId : 3, product : "charger", price : 1299}
// ]

// const ans = userCard.every((price)=>{
//     return price.price<=130000;
// })
// console.log(ans)

//for validation and entries in object!!
// const obj = {
//     name:"sumit",
//     rollNo : null,
//     marks : undefined,
//     address: '',
// }
// console.log(Object.entries(obj).some(([key,value])=>{
//     return value === "" || value === null || value === undefined
// }))


//some method
// const num = [4,5,3,5,6,2,6,2,5,3];
// const ans = num.some((val)=>val%7===0);
// console.log(ans)

//fill method

// const arr = new Array(4).fill("sumit");
// console.log(arr)

// const num = [1,3,5,6,3,4,6,3,6];
// const newNum = num.fill(0,2,7);
// console.log(newNum)

//splice method (main array may changes kar deta hai)

// const fruits = ['mango','grapes','orange','banana'];
// const FavFruits = fruits.splice(2,0,'tomato');
// console.log(FavFruits);
// console.log(fruits)


// const items = ['item1','item2','item3','item4']
// items.splice(1,3,"item Inserted","item 2 Inserted","item 3 Inserted");
// console.log(items)

//remaining methods of array

//at method
// const num = [1,3,5,6,3,4,6,3,6];
// const newNum = num.at(-4)
// console.log(num)
// console.log(newNum)

//join method (it converts array to string)
// const num = [1,3,5,6,3,4,6,3,6];
// const newNum = num.join()
// console.log(num)
// console.log(newNum)

// Iterables (which can be looped using for of loop examples :- string,array,sets) note:objects are not iterable

// const names = ["sumit","rohti","mohit","syamu"];
// for(let name  of names){
//     console.log(name)
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai

// const name = "sumit";
// console.log(name.length);
// console.log(name[3])

// sets (it is iterable) 
// store data
// sets have its own methods
// No index-based access
// order is not guaranteed
// it stores unique items only (no duplicates allowed) if you duplicate element it ignores it 


// const num = new Set([2,5]);
// num.add(33);
// num.add(23);
// num.add(13);
// num.add(43);

// num.add(["sumit","rohti","mohit","syamu"]);
// num.add(["sumit","rohti","mohit","syamu"]);
// for(let val of num){
//     console.log(val)
// }



//has in Set
// const num = new Set([3,5]);
// if(num.has(3)){console.log("3 is present")
// }else{console.log("3 is not present")}


//for early knowledge
// const users = [
//     { userId: 1, userName: "sumit" },
//     { userId: 2, userName: "rohitSharma" },
//     { userId: 3, userName: "manav" },
//     { userId: 1, userName: "mohan" },
// ];

// const uniqueUsers = [...new Map(users.map(user => [user.userId, user])).values()];

// console.log(uniqueUsers);
// console.log([...new Map(users.map(user => [user.userId, user])).keys()])


// Maps

// const person = {
//     3 : "three",
//     name :"sumit",
//     1 : "one",
//     2 : "two"
// }
// console.log(person['1']);
// console.log(person[1]);
// you cann't log 1 directly eg.:- console.log(person.1)💔
// console.log(person.name)


// for(let key in person){
//     console.log(key)
// }


// const person = new Map([["age",20]]);
// person.set("userId" , 1)
// person.set(1,"one")
// person.set("name" , "sumit")
// person.set([2,3,4,5],"numbers")

// person.set({1:'one'},"number")

// console.log(person.get("name"))
// console.log(person.get(1)) 
// console.log(person.keys())
// console.log(person)
// for(let keys of person.keys()){
//     console.log(keys, typeof keys)
// }
// for(let [keys,value] of person){
//     console.log(keys,value)
// }

// const person1 = {
//     name : 'sumit',
//     age : 20
// };

// const person2 = {
//     name: 'rohit',
//     age: 22
// }
 
// const extraInfo = new Map();
// extraInfo.set(person1,{rollNo:21,address:"barola"});
// extraInfo.set(person2,{rollNo:121,address:"noida"});
// console.log(extraInfo)
// console.log(extraInfo.get(person1))
// console.log(extraInfo.get(person1).address)


//clone using Object.assign
// const obj = {name:"sumit",age:22};
// const obj2 = {...obj};
// const obj2 = Object.assign({},obj)

// obj.address = "barola";
// obj2.address = "greater Noida" 
// console.log(obj2);
// console.log(obj)

//Optional chaining

//  const obj = {name:"sumit",address:{home:"barola",village:"uk"}}
// const obj= {}
// console.log(obj?.name)
// console.log(obj?.address?.home)


//methods
//function inside object
// use of this keyword

// const person = {
//     name:"sumit",
//     age: 20,
//     about : function (){
//         console.log(`my name is ${this.name} and i am ${this.age} years old`
              
//         )}
// }
// person.about() 

// function personInfo(){
//      console.log(`my name is ${this.name} and i am ${this.age} years old`)
// }

// const person1 = {
//     name:"sumit",
//     age: 20,
//     about : personInfo,
// }
//  const person2 = {
//     name:"rohit",
//     age: 22,
//     about : personInfo,
// }
// const person3 = {
//     name:"syamu",
//     age: 24,
//     about : personInfo,
// }

// person1.about()
// person2.about()
// person3.about()


// window 
// function func(){
//     "use strict" //so that it doesn't show the window object it shows undefined
//     console.log(this);
// }
// window.func()

// another way to call function
// function hello() {
//     console.log("hello world")
// }
// hello.call();


//  const user1 = {
//     name:"sumit",
//     age: 11,
//     about:function(){
//         console.log(this.name,this.age)
//     }
//  }

//  const user2 = {
//     name:"rohit",
//     age: 21,
  
//  }

//  user1.about.call(user2) // call ka use karke ham this ka refrence bata sakte hain kahan se lena hai

//this with parameter

// function about(game,hobby){
//         console.log(this.name,this.age,game,hobby)
//     }

//  const user1 = {
//     name:"sumit",
//     age: 11,
    
//  }
 
//  const user2 = {
//     name:"rohit",
//     age: 21,
  
//  }
// using call
//  about.call(user2,"FreeFire","gaming")
//using apply
// about.apply(user2,["free fire","gaming"])
// using bind 
// const minecraft = about.bind(user1,"minecraft","watching anime");
// minecraft()

//  const user1 = {
//     name:"sumit",
//     age: 11,
//     about:function(){
//         console.log(this.name,this.age)
//     }
//  }
//  const another = user1.about.bind(user1)
// another()

//this in arrow function(here this refers window only)
// const user1 = {
//     name :"sumit",
//     age: 3,
//     about: ()=>{
//         console.log(this)
//         console.log(this.name,this.age);
//     }
// }
 
// user1.about()

//Method (function inside the object is called method)

// const user1 = {
//     firstName: "sumit",
//     age:8,
//     about(){   //we can also direct define function using key
//         console.log(this.firstName);
//     }
// }
// console.log(user1.about.call(user1))


// user object (but if i want to create so many objects??)
// const user1 = {
//     firstName : "sumit",
//     lastName : "negi",
//     email : "negi03318@gmail.com",
//     age : 21,
//     address : "barola,sec-49,noida",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 :function(){
//         return this.age >=18;
//     },
// }

// function (that creates objects)
// add key value pair 
// object ko return karega

// function CreateUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18 = function(){
//         return this.age >=18;
//     };
//     return user;
// }

// const user1 = CreateUser('sumit','negi','negi03318@gmail.com',18,'barola');
// console.log(user1)
// const ans = user1.is18();
// console.log(ans)

//now we will create the methods outside
//  const userMethods ={
//      about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//  }
// function CreateUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }
// const user1 = CreateUser('sumit','negi','negi03318@gmail.com',18,'barola');

// console.log(user1)
// const ans = user1.is18();
// console.log(ans)
// console.log(user1.about())

//there is another way to create an object 
// const obj1 = {
//     key1 : 'value1',
//     key2 : "value2",
// }
// // in this way we can access the key value pairs from the other object
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// obj2.key2 = "unique"// if we did this then js first check if the key is already present in the object then js print that key first and if the key is not present in the current object then js checks the other object
// // console.log(obj2.key2)
// console.log(obj2)

//Note:- __proto__ === [[prototype]] they both are same {this is called as proto and (proto and prototype is different)}
// proto is a reference of a chain created by a us

// now object is created using Object.create() now proto works 
//  const userMethods ={
//      about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//  }
// function CreateUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// const user1 = CreateUser('sumit','negi','negi03318@gmail.com',18,'barola');

// console.log(user1)
// console.log(user1.about());


// in JavaScript the function ===> function + object (we can treat the function as object)

// function first(){
//     console.log("welcome")
// }
// // console.log(first.name)
// first.myOwnProperties = "unique value";
// console.log(first.myOwnProperties)


//A prototype is an object from which other objects inherit properties and methods.
//Note:- only functions provide prototype property

// const hello = {key1:"value1"} //here object doesn't have prototype
// function hello(){  //only funcitons can have prototype preperty
//     console.log("welcome")
// }
// // const hello = [1,2,3,4,5,6] //here array also doesn't have prototype
// if(hello.prototype){  // to check if prototype is present or not
//     console.log("prototype is present")
// }
// else{
//     console.log("prototype is not present")
// }

// prototype is an empty object{} which can store key value pairs
// function first(){
//     console.log("welcome")
// }

// first.prototype.name = "sumit";
// first.prototype.music = function(){
//     return "na na na na";
// }
// console.log(first.prototype.music())


//  const userMethods ={
//      about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//  }
// function CreateUser(firstName,lastName,email,age,address){
//     const user = Object.create(CreateUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// CreateUser.prototype.about = function(){
//      return `${this.firstName} is ${this.age} years old`;
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >=18;
// }

// const user1 = CreateUser('sumit','negi','negi033@gmail.com',18,"barola");
// console.log(user1.about())

// new keyword
// function CreateUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// }
// CreateUser.prototype.about = function(){
//     console.log(this.firstName,this.age)
// }
// const ans = new CreateUser("sumit",19)
// //here new keyword do few things
// //1) create empty object where this={}
// //2) return this (when we use new keyword this return itself)
// //3) creates chain automatically, don't have to do(Object.create(CreateUser.prototype);)
// console.log(ans.about())

//constructor function (note:- to use new keyword we always create function with capital letter)
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }

// CreateUser.prototype.is18 = function(){
//     return this.age >=18;
// }

// const user1 = new CreateUser("sumit","negi","negi@gmail.com",18,'barola'); // here we use new keyword which return this automatically and create chain between the function and it's prototype
// // console.log(user1.about())

// for(let key in user1){
//     // console.log(key); // this will provide the keys of prototype also
//     if(user1.hasOwnProperty(key)){ //this only shows the keys of obj
//         console.log(key)
//     }
// }

//prototype in array
// let numbers = new Array(1,2,3);
// console.log(Array.prototype)
// let numbers = [1,2,3];
// console.log(Object.getPrototypeOf(numbers))

// function hello(){
//     return hello;

// }
// console.log(hello.prototype)
// hello.prototype=[];
// console.log(hello.prototype);
// hello.prototype.push("1");
// hello.prototype.push("4");
// hello.prototype.push("1");
// hello.prototype.pop();

// console.log(hello.prototype)

// class keyword
// class are not real classes they are fake

// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//         console.log("constructor called!")
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about(){
//       return `${this.firstName} is ${this.age} years old`
//     }
//     is18(){
//         return this.age>=18;
//     }
   
// }

// const user1 = new CreateUser("sumit","negi","negi@gmail.com",28,"barola");
// const user2 = new CreateUser("mohit","negi","negi033@gmail.com",18,"barola,noida");
// const user3 = new CreateUser("rohit","rawat","rawat@gmail.com",228,"uk");

// console.log(user1.about())
// console.log(user2.about())
// console.log(user3.about())
// for(key in user1){
//     console.log(key)
// }

// class animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     play(){
//         return `${this.name} is playing`
//     }
//     Age(){
//         return `${this.name} is now ${this.age} years old`
//     }

// }
// class dog extends animal{
   
// }
// const cat = new animal("kitty",8);
// console.log(cat.play())
// console.log(cat.Age())
// const dog1 = new dog("googlu",11);
// console.log(dog1.play());
// console.log(dog1.Age());

//object can be called as instance

// class animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     play(){
//         return `${this.name} is playing`
//     }
//     Age(){
//         return `${this.name} is now ${this.age} years old`
//     }

// }
// class dog extends animal{
//    constructor(name,age,speed){
//     super(name,age);
//     this.speed = speed;
//    }
//    get run(){ //get can able to make this function as a property
//     return `${this.name} can run at speed of ${this.speed}`
//    }
// }
// const tommy = new dog("tommy",10,31);
// console.log(tommy.run)

//getter and setter
// class person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         const[firstName,lastName] = fullName.split(" "); // here split divide the full name into two parts and store them in array
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person1 = new person("rohit","rawat");
// console.log(person1.fullName)
// person1.fullName="Sumit Negi"
// console.log(person1.fullName)


//static methods and properties

// class person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     static classInfo(){  //we can directly call it using class name 
//         return "static for a reason"
//     }
//     static info = "static property"
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         const[firstName,lastName] = fullName.split(" "); // here split divide the full name into two parts and store them in array
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// console.log(person.classInfo())
// console.log(person.info)














