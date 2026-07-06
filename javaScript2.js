// console.log(this);
// console.log(window);
// console.log(myfunction);
// console.log(name);
// var name = "sumit";



// var myfunction = function(){
//  return "hello";
// }
// console.log(myfunction());

// for let
// console.log(myfunction);
// console.log(name);
// let name = "sumit";

// let myfunction = function(){
//  return "hello";
// }

//const
// console.log(myfunction);
// console.log(name);
// const name = "sumit";
// const myfunction = function(){
//  return "hello";
// }
// console.log(myfunction);
// console.log(name);

// Note:- let and const are hoisting

//TDZ Temporal dead zone
// console.log(typeof hello)
// let hello;


//function execution context

// function getfullname(firstName,lastName){
//     console.log(arguments.length); // (ES5)here arguments is array like structure which can perform the operations which can performed by array like (arguments[1],arguments.length)
//     let var1 = 'var inside function';
//     console.log(var1);
//     const fullname = firstName + " " + lastName;
//     return fullname;
// }

// const fullName = getfullname("sumit","negi");
// console.log(fullName)

//laxical environment
// const lastName = "negi";
// const printName = function(){
//     const firstName = "sumit";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();

//laxical environment and scope chain
// const lastName = "negi";
// const printName = function(){
//     const firstName = "sumit";
//     function myfunction(){
//     const firstName = "raghu"
//     console.log(firstName);
//     console.log(lastName);
//     }
//     myfunction();
// }
// printName();

//closures
// function hello(){
//     function inner(){
//     console.log("ji hannn")
//     }
//     return inner()
    
// }
// const func = hello()
// console.log(func)


// function printfullname(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName;
// }

// const ans = printfullname("sumit","negi");
// ans();

//closure
// function outer(){
//     let count = 0;
//     function inner(){
//         count ++;
//         console.log(count);
//     }
//     return inner;

// }
// const final = outer()
// final()
// final()
// final()
// final()
// final()
// final()


// function change(x){
//     const a = "first";
//     const b = "second";
//     return function (){
//         console.log(a,b,x);
//     }
// }
// const final = change("hello");
// final()

//function which can cube any number
// function myfunction(power){
//     function cube(num){
//         return num ** power;
//     }
//     return cube;
// }
// const cube = myfunction(3);
// const final = cube(3);
// console.log(final)


// function which can cube any number
// function myfunction(power){
//     return function (num){
//         return num ** power;
//     }
    
// }
// const cube = myfunction(3);
// const final = cube(3);
// console.log(final)


// const myfunction = power=>num=>num**power;
// const cube = myfunction(3);
// const final = cube(3);
// console.log(final)


// code for a logic(runs once if you try to run it again then it will give you warning that you already called me)
// function youcalled(){
//     let count = 0
//     return function(){
//         if(count===0){
//             console.log("Hi,you called me!");
//             count ++
//         }else{
//             console.log("you already called me!")
//         }

//     }
// }

// const myfunc = youcalled();
// myfunc();
// myfunc();

// const myfunc1 = youcalled();
// myfunc1();
// myfunc1();


//DOM (document object model)

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText)// this will show only the content visible in the webpage

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent) // this will show all the content present in the html

// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.color='blue';//styling in js
// mainHeading.style.backgroundColor="gray";//we cann't write the '-' in between the "background-color" instead we can use "backgroundColor" we calpitalized the first letter after the sign "-".
// mainHeading.style.border = "2px solid black"; // style property


//attributes(class,id,name,type,placeholder,value)
//get and set attributes

// const link = document.querySelector("a")
// console.log(link.getAttribute("href").slice(1));//getAttribute 
// link.setAttribute("href","ji hann")
// console.log(link.getAttribute("href"));

// const typeOfFormTodo = document.querySelector(".form-todo input");
// console.log(typeOfFormTodo.getAttribute("type"))


//getElementsByClassName:- it gives HTMLCollection 
// const navItem = document.getElementsByClassName("nav-navItem");
// console.log(navItem[0]) // it is an Array like object

//querySelectorAll :- it gives NodeList
// const navItems = document.querySelectorAll(".nav-navItem")
// console.log(navItems[0])// it is an array like object

//getElementsByTagName :- it gives HTMLCollection
// const navItems = document.getElementsByTagName("a");
// console.log(navItems)

//to change whole nav items using loop!!
//types of loops we can use here
//1) simple for loop
//2) for of loop
//3) forEach(Note:- We cann't use it to iterate through HTMLCollection it only use in querySelectorAll(NodeList))


//simple for loop
// const navItems = document.getElementsByTagName("a");
// // console.log(navItems.length)
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "800"
// }


// for of loop
//  const navItems = document.getElementsByTagName("a");
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "800"
// }

//forEach loop
// const navItems = document.querySelectorAll("a")//one way to use forEach
//  const navItems = document.getElementsByTagName("a");
// const items = Array.from(navItems)//another way to use forEach
// items.forEach((Item) => {
//     Item.style.backgroundColor = "white";
//     Item.style.color = "green";
//     Item.style.fontWeight = "800"
// });

//inner HTML
// const headline = document.querySelector(".headline");
// // console.log(headline.innerHTML);
// headline.innerHTML = "<h2>InnerHtml</h2>"
// headline.innerHTML += "<button class = \"btn btn-headline\">learn more</button>" //we cann't user " "" " that why we use \" 
// console.log(headline.innerHTML);


// DOM TREE

// const rootNode = document.getRootNode();
// const HTMLElementNode=rootNode.childNodes[0];
// const headElementNode = HTMLElementNode.childNodes[0];
// // console.log(headElementNode.childNodes[0])
// const nextNode= headElementNode.childNodes[0]
// const bodyElementNode = HTMLElementNode.childNodes[2];
// console.log(bodyElementNode.childNodes)
// console.log(bodyElementNode.parentNode)
// console.log(bodyElementNode.previousSibling.previousSibling)
// console.log(headElementNode.nextSibling.nextSibling)
// console.log(headElementNode.nextElementSibling)//it ignores text node

// const heading = document.querySelector("h1");
// const container = heading.parentNode;
// container.style.backgroundColor = "gray"
// container.style.color = "black"

// const body = document.body
// console.log(body)


// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title.childNodes)

//classList, Add and remove ,toggle classes

// const sectionTodo = document.querySelector('.section-todo');//excess class
// console.log(sectionTodo.classList)
// sectionTodo.classList.add("bg-dark")//add class

// sectionTodo.classList.remove("container")//remove class
// console.log(sectionTodo.classList)

// console.log(sectionTodo.classList.contains("container"))//to check whether the class contain className or not

// sectionTodo.classList.toggle("container")//this will toggle the className if exist then remove if not then add
// console.log(sectionTodo.classList)

// sectionTodo.classList.toggle("container")
// console.log(sectionTodo.classList)

 
//add HTML elements using js

// const todo = document.querySelector(".todo-list")
// todo.innerHTML = "<li>Todo"
// todo.innerHTML += "<li>todo 2"

//append
//prepend
//remove
// const newTodo = document.createElement("li");
// const newTodoText = document.createTextNode("New Todo")
// newTodo.append(newTodoText)
// newTodo.textContent = "New Todo" //short way to add textContent
// console.log(newTodo)
// const todo = document.querySelector(".todo-list")
// todo.append(newTodo)//add element in the end 
// todo.prepend(newTodo)//add element in the beginning(starting)
// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)

// before method
//after method

// const newTodo = document.createElement("li");
// newTodo.textContent = "New Todo" 
// const todo = document.querySelector(".todo-list")
// todo.before(newTodo)
// todo.after(newTodo)

// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const newTodo = document.querySelector(".todo-list")
// newTodo.insertAdjacentHTML("beforebegin","<li>Hello</li>")
// newTodo.insertAdjacentHTML("afterbegin","<li>Hello</li>")

//clone Node (porpose is to use same textNodes in different places)
// const todo = document.querySelector('.todo-list')
// const li = document.querySelector("li");
// li.textContent = "clone todo";
// const li2 = li.cloneNode(false)
// todo.append(li)
// todo.prepend(li2)


// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild

// const todo = document.querySelector(".todo-list")
// const li = document.createElement("li")
// const refNode = document.querySelector(".todo-list li")
// li.textContent = 'hello'
// todo.appendChild(li)
// todo.insertBefore(li,refNode)
// todo.replaceChild(li,refNode)
// todo.removeChild(li)






















