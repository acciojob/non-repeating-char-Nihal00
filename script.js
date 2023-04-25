var userInput = prompt();

let arr = userInput.split('');

function nonRepChar(arr) {
	
	for(let i = 0; i < arr.length; i++){
		let ct = 0;
		for(let j = i+1; j < arr.length; j++){
			if(arr[i] == arr[j]){
				ct++;
			}
		}

		if(ct == 0){
			return arr[i];
		}
	}
}

alert(nonRepChar(arr));




// alert(userInput);