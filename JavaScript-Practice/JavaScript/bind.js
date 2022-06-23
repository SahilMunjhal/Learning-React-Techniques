// let obj1={
//    name:"Sahil",
//    age:25,

//    print:function(){
//        console.log(this.name);
//    }
// };

// obj1.print();

// let z=obj1.print;




// class Check1 {
//     constructor(price){
//         this.brand="Nike",
//         this.price=price
//     }

//   sahil(){
//       console.log('sahil function called');
//   }
// };

// let class1=new Check1(2000)

// function constructor(price){
//     this.brand="Nike",
//     this.price=price
// }

// let nike1=new constructor(2000);
// console.log(nike1);

// const obj1={
//      first_name:"sahil",
//      age:25,
//      print(){
//           console.log(this.name);
//      }
// };

// let obj2=Object.create(obj1);


// console.log(obj2);

const obj1={
     name:"sahil",
     age:25,
     print:function(){
       return(this.name+":"+this.age);
     }
};

const obj2={
     name:"munjhal",
     age:26
};

console.log(obj1.print.call(obj2));