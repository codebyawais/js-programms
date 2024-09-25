// let nIs =10;
//  nIs=nIs -1;
//  console.log(nIs);
// output is 9


// let nIs =10;
//  nIs=--nIs;
//  console.log(nIs);
// 9





//  let nIs =10;
//  nIs-- ;
//  console.log(nIs);
 // 9 



//  let nIs =10;
//  nIs++ ;
//  console.log(nIs);
 // 11
 
 


//  let nIs =10;
//  --nIs ;
//  console.log(nIs);
 // 9 



//   let nIs =90;
//  nIs++ ;
//  x=nIs
//  console.log(x);
 // 90  ???



//   let nIs =10;
//  nIs= nIs +3 ;
//  console.log(nIs);
 // 13 

 
//  let nIs =10;
//  nIs= nIs -3 ;
//  console.log(nIs);
 // 7 



//  let nIs =10;
//  nIs += 2 ;
//  console.log(nIs);
 // 12

//  let nIs =10;
//  nIs -= 2 ;
//  console.log(nIs);
//  8


//  let nIs =10;
//  nIs *= 2 ;
//  console.log(nIs);
//  20



//  let nIs =10;
//  nIs *= 2 ;
//  console.log(++nIs);
//  21

//  let nIs =10;
//  nIs *= 2 ;
//  console.log(nIs--);

//  console.log(nIs);
 
//  10  ???



// let n1 = 5;
// let n2 =5;
// console.log(n1  === true);


// let myObj  = {
//     name:'awais',
//     age:'22',
//     deg:'bscs',
//     city:'fsd',
//     rollno:'01',
//     semester:'7th'
// }
// // console.log( myObj);
// console.log( myObj.name, " has ",myObj.age, "years old " );
// console.log( "I am a student of ",myObj.deg, "having " ,myObj.semester, "semester under the roll number of ",myObj.rollno, );



//objects can be declare TWO METHODS ONE IS LITERAL AND OTHER IS CONSTRUCTOR
//sINGLETON : WHEN MAKE A CONSTUCTOR IT MEANS IT is a single type object Only single instance 
// eg: Object.create
// objects has two things one is keys and 2nd is values
// key: name age etc all are bydefault strings

//object literals
// const mySym = Symbol("key1")
// const jsUser = {
//     name:"awais",
//     "fullname":"awais rafiq",
//     // [mySym] : "mykey1",
// //    "mySym" : "key1", 
//     age:20,
//     email: "codebyawais@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays: ["monday", "saturady"]  

// }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(typeof jsUser.mySym);
// console.log( jsUser[mySym]);

// jsUser.email ="gpt.com"
// Object.freeze(jsUser)
// jsUser.email="aaaaaa.com"/
// console.log(jsUser);


// jsUser.greeting = function(){
//     console.log("hello jsuser"); 
// }
// jsUser.greetingtwo = function(){
//     console.log(`hello jsuser ${this.name}` ); 
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());






// objects singleton/constructor 
// const tinderUser = new Object ()
//non signletonobject
// const tinderUser ={}
// tinderUser.id = "123abc"
// tinderUser.name ="faizan"
// tinderUser.isLoggedIn=false

// // both are internal same
// console.log(tinderUser);

const regularUser ={
    email:"awais@gmail.com",
    fullname:{
        userfullname:{
        firstname:"awais",
        lastname:"bhatti",
        }
    }
     
    
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);



const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}
const obj5 ={7:"a", 8:"b"}
// const obj3 ={ obj1,obj2}
// problem like a array all value etc can execute eg:aray me array and object me object
// {} target value , obj1 obj2 source values
// const obj3 =Object.assign({},obj1,obj2,obj5)
// spread the object
// const obj3 = {...obj1, ...obj4}
// console.log(obj3);

// const user =[
// {
//     id:1,
//     email:"gpt@mial.com"
// },
// {
//     id:1,
//     email:"gpt@mial.com"
// },
// {
//     id:1,
//     email:"gpt@mial.com"
// },
// {
//     id:1,
//     email:"gpt@mial.com"
// },
// ]
// user[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// console.log(tinderUser);


//Object
// const awais ={
    //age:23,
    //isLoggedIn:true,

//}
// console.log(awais);
//complete object execute
// console.log("awais");
// only awais can be execute bcz awais in a string


// Array
const myarray=["this", "is", "an", "array"]
// console.log(myarray);
// to comoplete array can be execute
// console.log(myarray[3][3]);
//why can as it is execute 9
// console.log(myarray[9]);
//it can be undefined


// array of objects
let sections = [
     {name:"awais"},
     {age:23},
     {height:"sevenn", class :"bscs"} 
    ]
// console.log(sections[2]);
// console.log(sections[2].class);






// objects of array
let semesters = { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' ,
 class: { bscs : [{ name : "aws" , class : 12} , { name : 'dilawar' , class: 13}] ,
 bba :  [ "c1" , "c2" , "c3" , "c7" , "c890" ]}}] , bba :  [ "c1" , "c8" , "c3" , "c7" , "c890" ]}
// // bba c2 can be get
//  console.log(semesters);
//  console.log(semesters.bba[1]);


let degre ={bscs:[{name:"awais",class:"bscs"},{name:"daniyal", class: [{name:"ahsan",class:"bscs"}] }   ]}
// console.log(degre.bscs);
// console.log(degre.bscs[0].name);
// console.log(degre.bscs[1] .class);



// function method1 
// function add (number){
//     // console.log(  5*2-9*false);
//     console.log(5 + 6 -3 * 2);
    
// }
// add(5+6)
// method2
const newadd=(n1,n2,n3)=>{
console.log(n1 + n2 +n3);
}
let x=5,y=5
newadd(6,8,y)




// today work

































































// 22-9-23
// let myArray = [
//        {name:'awais',class:"bscs"} ,
//       {name:'ahmad',class:"bba"} ,
//       {name:'ahad',class:"base"}
//     ]
//     let requiredStudent;
//     console.log("before: ", requiredStudent);
    

//     // myArray.map((item)=>{console.log(item.name );
//     myArray.map((item)=>{ 

//         if(item.name === "ahmad") {requiredStudent = item.name }
//     }) 
//     console.log("after: ", requiredStudent);
  

    //even nmbr
// let myArray =[
//     {n:1 },
//     {n:2 },
//     {n:3 },
//     {n:4 },
//     {n:5 },
//     {n:6 },
//     {n:7 },
//     {n:8 },
// ]
// myArray.map((item)=>{
//     if(item.n  % 2 == 0 ) 
//     { 
//         for(let x =1; x < 5; x++){
//             console.log(`${item.n} * ${x} = ${item.n * x}`);
            
//         }

        
//     }
// });



//od number
// let myArray =[
//     {n:1 },
//     {n:2 },
//     {n:3 },
//     {n:4 },
//     {n:5 },
//     {n:6 },
//     {n:7 },
//     {n:8 },
// ]
// myArray.map((item)=>{
//     if(item.n  % 2 !== 0 ) 
//     { 
//         for(let x =1; x < 5; x++){
//             console.log(`${item.n} * ${x} = ${item.n * x}`);
//         }        
//     }
// });


// let empArray = [
//     { name:"awais", religion:"islam1", status:"unmarried", age:16 },
//     { name:"ahsan", religion:"islam1", status:"unmarried",age:14 },
//     { name:"faizan", religion:"islam", status:"married",age:19 },
//     { name:"kokhar", religion:"islam1", status:"unmarried",age:16 },
//     { name:"wahid", religion:"islam", status:"married",age:19 }
// ]
// let newArray;
// console.log("before :: ", newArray);

// empArray.map((item)=>{
//     if(item.religion === "islam" && item.status === "married" &&  item.age >= 18 ) {newArray = item.religion && item.age && item.status}
//         console.log(item);

// });
// console.log("after ::", newArray);








// let empArray = [
//     { name:"awais", religion:"islam1", status:"unmarried", age:16 },
//     { name:"ahsan", religion:"islam1", status:"unmarried",age:14 },
//     { name:"faizan", religion:"islam", status:"married",age:19 },
//     { name:"kokhar", religion:"islam1", status:"unmarried",age:16 },
//     { name:"wahid", religion:"islam", status:"married",age:19 }
// ];

// let newArray = []; // Initialize newArray as an empty array
// console.log("before :: ", newArray);

// empArray.map((item) => {
//     if (item.religion === "islam" && item.status === "married" && item.age >= 18) {
//         newArray.push(item); // Push the entire object to newArray
//     }
//     console.log(item);
// });

// console.log("after ::", newArray ,"congrats you can go  to umrah");


// array in youtube


let  myArr =[0,1,2,3,4,5]
const myHeros = ["awais" , "rafiq"]
const myArr2 = new Array (1,2,3,4)
// console.log(myArr.length);
// console.log(myArr[9]);

// array methods
// myArr.push(6)
// console.log(myArr);
// myArr.push(8)
// console.log(myArr);

// pop can remove the last value of array
// myArr.pop()

// unshif can add the start of the value in array
// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(9));
//false

// console.log(myArr.includes(3));
//true
//console.log(myArr.indexOf(61));
//console.log(myArr.indexOf(51));
//console.log(myArr.indexOf(9));
//-1

// join canconvert the value of string
// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



// slice splice
// console.log("a", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("b", myArr);
  

// const myn2 = myArr.splice(1, 3)

// console.log("c", myArr);
// console.log(myn2);



// const me_hero = ["awais","asad","ali" ]
// const dc_hero = ["kokhar" , "bhatti","jutt"]
// me_hero.push(dc_hero)
// console.log(me_hero);
// console.log(me_hero[3][1]);

// const allhero= me_hero.concat(dc_hero)
// console.log(allhero);
// 
// const allnewhero = [...me_hero, ...dc_hero]
// console.log(allnewhero);

// const anotherArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real= anotherArr.flat(Infinity)
// console.log(real);
// console.log(Array.isArray("awais"));
// console.log(Array.from("awais"));
// console.log(Array.from({name:"awais"}));//no conver directly 

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));
