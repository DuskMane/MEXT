// var balance = 50;
// var ticketPrice = 10;

// var buyTicket = prompt(`You have ${balance} $ on your account. Price per ticket is ${ticketPrice} $. How many tickets would you like to buy?`);

// var totalPrice = buyTicket * ticketPrice;
// if(totalPrice > balance){
//     alert(`You need ${totalPrice - balance} more dollars to buy ${buyTicket} tickets.`)
// }
// else{
//     alert(`Purchase is succesful. After purchase you have ${balance - totalPrice} $ left on your account.`);
// }

// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     sum = sum + i;
// }

// alert(sum);

// let num = prompt("Enter a number: ");

// let result = 1;
// for(let i = 1; i <= num; i++){
//     result = result * i;
// }

// alert(result);

// let num = prompt("Enter a number: ");

// for(let i = 1; i <= num; i++)
// {
//     if((num %i) === 0){
//         console.log(i);
//     }
// }

// let a = 5;
// console.log(a);
// a = "nbr";
// console.log(a);

// let i = 1;
// let sum = 0;
// while( i != 0){
//     i = prompt("Enter a number: ");
//     sum = parseFloat(sum) + parseFloat(i);
//     alert(`Summary of entered numbers: ${sum}`);
// }

// let a = [5,14,7,4,9];

// let sum = 0;
// a.map((num) => sum = sum+num);
// console.log(sum);

/*

1. Bir sayının asal olup olmadığını tespit eden programı yapınız. 
2. Sizin oluşturduğunuz 5-6 adet sayıdan oluşan arrayin en büyük sayısını, en küçük sayısını ve array ortalamasını bulunuz. 
3. Bir film objesi oluşturup içinde film adı, film süresi ve yapımcısını tutun. Filmler objesinde "xxx" isimli yapımcıya ait kaç adet film olduğunu hesaplayın.
*/

// Task 1

let num = prompt("Enter a number: ");
let checkPrime = true;

for(let i = 2; i <= num / 2; i++)
{
    if((num % i) == 0)
    {
        checkPrime = false;
        console.log("Number you submit is not a prime number");
        break;
    }
}
if(checkPrime)
{
    console.log("Number you submit is a prime number");
}

// Task 2

let myArray = [5, 10 , 7 , 400, 8, 24];

console.log(`Max number in the array is: ${Math.max(...myArray)} and the min number in the array is ${Math.min(...myArray)}`);

let sumArray = 0;
myArray.forEach((e) => sumArray = sumArray + e);
console.log(`Average of the array is: ${sumArray/myArray.length}`);

// Task 3
// 3. Bir film objesi oluşturup içinde film adı, film süresi ve yapımcısını tutun. Filmler objesinde "xxx" isimli yapımcıya ait kaç adet film olduğunu hesaplayın.

let movie = [{
    name:"The Dark Knight",
    movieLength:"2h 32m",
    director: "Christopher Nolan"
},
{
    name:"The Prestige",
    movieLength:"2h 10m",
    director: "Christopher Nolan"
},
{
    name:"The Lord of the Rings: The Fellowship of the Ring",
    movieLength:"2h 58m",
    director: "Peter Jackson"
},
{
    name:"Coach Carter",
    movieLength:"2h 16m",
    director: "Thomas Carter"
}]

let checkDirector = prompt("Enter a director name: ");
let directorNum = 0;
for(let i = 0; i < movie.length;i++)
{
    if(movie[i].director === checkDirector)
    {
        directorNum = directorNum +1;
    }
}
let result = movie.filter((element) => (element.director === checkDirector));
console.log(`${checkDirector} directed ${directorNum} of the movies in array.`)