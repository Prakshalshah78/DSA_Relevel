function convert(arr, n)
	{
		//copy the original array to temp array
		let temp = [...arr];

		//sort array
		temp.sort((a, b) => a - b);

		//create empty map 
		let umap = new Map();
		let val = 0;

		//travarse through temp and store the mapping number and value in hash table
		for (let i = 0; i < n; i++)
			umap.set(temp[i], val++);
		//travarse through original array and store value corresponds to array 
		for (let i = 0; i < n; i++)
			arr[i] = umap.get(arr[i]);
	}

	function prletArr(arr, n)
	{
		for (let i = 0; i < n; i++)
			console.log(arr[i]);
	}
	let arr = [10, 20, 15, 12, 11, 50];
	let n = arr.length;
	console.log("Given Array is" );
	prletArr(arr, n);
	convert(arr , n);
	console.log("Converted array is");
	prletArr(arr, n);