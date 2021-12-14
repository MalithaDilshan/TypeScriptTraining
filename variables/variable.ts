
// variables
let count : number;
let count1 : number | string;

// arrays
let array = [];
array.push( 'Timmy' );
console.log( array );

let array1 : number[] = [];
let array2 : ( number | string )[] = []  // mixed type array

// objects
let object : object
let object1 : { objName : string, age : number} = { objName : 'test', age : 100 }

object1 = {
    objName : 'Timmy',
    age : 10
}

console.log( object1 )

//Functions
let add : Function;
type numOrString = number | string;
add = ( a : number, b : number, c? : numOrString ) : number =>
{
    return a + b;
}

let addition = add(3,  4);
console.log( 'Addition : ' + addition );

//------------------------------------------------------------------------------------------------
type objectWithName = { name : string, uid : numOrString }  // Alias
let greet : ( user : objectWithName ) => void   // function prototype
greet = ( user : objectWithName ) =>
{
    console.log(`${user.name}  says, Hello!! `);
}
let userObj : objectWithName = 
{
    name : 'Malitha',
    uid : 'E/13/200'
}
greet( userObj );
