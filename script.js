//your code here
function minCostToFormRope(event) {
	event.preventDefault();
	// we will get as string
	var inputElement = document.querySelector("input").value;
	// break the string into array
	var arr = inputElement.split(',');
	arr.sort((a, b) => (a-b));
	
    // we will access first two element 
	// add and store in res
	var cost = 0;
	while(arr.length > 1){
		var res = Number(arr[0]) + Number(arr[1]);
		cost += res;
		// remove added first two element and add res 
		arr.splice(0,2);
		arr.push(res);
		arr.sort((a, b) => (a-b));
	}
	// cost will show below input
	document.getElementById("result").textContent = cost;
}