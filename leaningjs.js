//console.log('hello');
//let name='h';
    //console.log(name);

//cannot be a reserved keyowrd
//should be meaningful
//cannot start with a number
//cannot contain spaces o hyphen
//are case sensitive

//let firstName='utkarsh';
//lastName='pathak';

//const interestRate=1;
//interestRate=3;
//console.log(interestRate);

//let anme='u';
//let ahe=23;
//let isapp=true;
//let firstName=undefined;//type of variable and the value of the variable both are 
//undefined
//let selectedColor=null; // used to explicitely clear the variable

 //dynamic language, the type of the 
 //console.log(typeof anme);
 //anme=7.72;
 //console.log(typeof anme);
//all number are of type number
//console.log(typeof isapp);
//console.log(typeof selectedColor);
//ty[pe of the null assigned variable is an object


//reference types has objects, arrays and functions

let person={
    game :'hockey',
    age: 30
};

console.log(person);
person.name="hell";
//console.log(person.name);

//bracket notation
let selection='name';
person['name']='mary';
console.log(person[selection]);*/

//array is a data structure used to list items
let selectedColors=['red','blue','green'];
console.log(selectedColors);
console.log(selectedColors[2]);
selectedColors[3]=6;//this is stored as an integer, different types in the same array
console.log(selectedColors);

let y=['red',45,true,undefined];
for(i=0;i<4;i++){
    console.log(typeof selectedColors[i]);
}

console.log(selectedColors.length)

console.log('running the function now')


function list(x){//this is the parameter
    for(i=0;i<4;i++){
        console.log(typeof x[i]+ '  '+x[i]);
    }
}

list(selectedColors);//passing argument
list(y);

function Square(square){
    console.log(square*square);
}
Square(46);
let de=null;

console.log(typeof de);
console.log(typeof person);
