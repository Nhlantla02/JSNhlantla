//let numb1 = number1
//let numb2 = number2
//document.getElementById('numb1' + 'numb2')
//const number1 = numb1
//const number2 = numb2
//document.addEventListener()
//console.log(output);

//function testResults (form) {
   // let inputValue = form.inputbox.value;
   // let formData = new FormData(form);
   // let object = {};
    //formData.forEach(function(value, key){
    //  object[key] = value;
   // });
   // var json = JSON.stringify(object);
   // alert(json);
  
   // alert(JSON.stringify(Object.fromEntries(formData)));
   
//let data = [3, 5, 8, 'Veronique', 'Sivuyisiwe']
//console.log(data);
//console.log(`Array's size: ${data.lenght}`);
//console.log(`Element at position 3: ${data[3]}`);
////push to add element to the end
//data.push('Metthew')
//console.log(data.at(-1));
//data.push('Shawn', 'Simamkele')
//console.log(data);
////unshift add element from the start
//data.unshift('new', 'element')
//let lastRomeovedElement = data.pop()
//console.log(data);
////slicing to remove element from the specific position(index)
//console.log(data.slice(3, 5))
////splice is to add new item to the array 
//console.log("===Addinhg using splice");
//data.splice(2, 0, 'Nhlanhla')
//console.log(data);
//let numbers = [1, 3, 4,  5]
//console.log(numbers)
//console.log("===Adding using splice")
//numbers.splice(1, 0, 2,);
//numbers.splice(3, 0, 4)
//console.log(numbers);
let data = [7, 3, 'Abc', 1, 'abc']
console.log(data);
////Reverse
//console.log(data.reverse());
////sorting form the lowest to highest
//console.log(data.sort());
let numbers = data.filter(a=> typeof a == 'number')
//name function or declaration
function onlyNumbers(a) {
  return typeof a == 'number'
}
console.log(numbers);




