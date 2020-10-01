var result=[]; //initialize array variable for output
var num =[1, 2, 3, 4, 5, 6, 7, 8, 9];//initialize array to use for looping

function row(param){ //created a function in order to compile computation every row
	var rowResult = []; //initialize array variable for array
	var rowNum = param; //initialize variable from function's param

	for (var i = 1; i <= rowNum; ++i) { //for loop to compile string into array 
		var rowMultiBy = i; 
		var rumMulti = rowNum * i; //result of multiplication
		rowResult.push(rowNum+"*"+rowMultiBy+"="+rumMulti); //pushed the string computation to array
		
	}
	return rowResult; //returns the list of strings for row
}

for (var i = 0; i < num.length; i++) { //created for to call the function 9 times
	result = row(num[i]); //calling the row function
	console.log(result.join(" ")); //outputs every row
}
	