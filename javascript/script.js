// map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); 

// filter
const odd = numbers.filter(n => n % 2 !== 0);
console.log(odd); 
//reduce
 var total= numbers.reduce((val,numbers)=> val+numbers,0)
 console.log(total);

 var details = async () => {
    var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var users = await response.json();
    console.log(users);
};
details();
