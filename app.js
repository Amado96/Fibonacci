let fruits = ["apple","banana","orange"];
fruits.forEach(Uppercase);
fruits.forEach(display);
function display(fruits){
    console.log(fruits);
}
function display(element,index,array){
    array[index] = element.toUppercase();
}

// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }