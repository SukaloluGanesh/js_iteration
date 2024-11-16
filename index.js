

// 1.  Employee Salary Update: You have a list of employee salaries [30000, 45000, 50000, 35000]. Increase each salary by 10% and create a new array with the updated salaries.

// let salaries = [30000, 45000, 50000, 35000];
// let newArr = [];

// let cond = salaries.filter(function(value){
//  let sum =  (value/100)*10;
//  return newArr.push(value+sum);
// })

// console.log(newArr)

// 2. Odd Numbers Only: Given an array of daily sales numbers [23, 45, 60, 70, 33], filter out only the odd sales numbers to analyze specific buying patterns. 

  // filter:-
// let sales = [23, 45, 60, 70, 33];
// let newArr = sales.filter((value)=>(value%2!==0)?value:0)
// console.log(newArr);


// for each:-
// let sales = [23, 45, 60, 70, 33];
// let newArr = sales.forEach((value)=>{
//     if(value%2!==0){
//       console.log(value)
//     }
// })

// 3.Product Price Tag Update: You have a list of product names in lowercase ['soap', 'shampoo', 'toothpaste']. Capitalize each product name to display on tags.   

// let product = ['soap', 'shampoo', 'toothpaste'];

// for each:-
// let newArr = product.forEach((value)=>
//   console.log(value[0].toUpperCase()+value.slice(1))
// )
// console.log(newArr)


// filter :-
// let arr = [];
// let newArr = product.filter((value)=>arr.push(value[0].toUpperCase()+value.slice(1)));
// console.log(arr);

// 4.Student Passing Scores: From an array of student scores [55, 70, 82, 47], filter out scores that are above 50 to get a list of students who passed. 


// let scores = [55, 70, 82, 47];

// let newArr = scores.filter((value)=>value>50);
// console.log(newArr);


// 5. Customer Names Extraction: You have an array of customer records [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}]. Extract just the names for a promotional email list.

// let records = [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}];
// let names = []; 
// let arr = records.filter((value)=>names.push(value.name));
// console.log(names)


