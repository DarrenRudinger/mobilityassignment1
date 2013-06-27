//Darren Rudinger - 13243791

//Declaring variables to initiate counters and the memory value.
var count = 0;
var memValue = 0;

//This function is called by the MR button, which will display the current value stored in the memory.
function totalrecall(){
	Buttons.display.value = memValue;
	display.memValue;
}

//This function will simply set the memory value back to zero.
function memClear(){
	memValue = 0;
	Buttons.display.value = "";
}

//This function adds to the existing value of what is stored in memory.
function memPlus(){
	memValue = memValue + parseFloat(Buttons.display.value);
	Buttons.display.value = "";
}

//This function will subtract from the existing memory value.
function memMinus(){
	memValue = memValue - Buttons.display.value;
	Buttons.display.value = "";
}

//This function will increment a counter variable when a number is appended to the calculator, and display an error is the number is too long.
function counter(){
	count=count + 1;
	if(count>10)
		Buttons.display.value = "Error"
	else{
	
	}
}

//This function is specifically called when the counter needs to be reset.
function clearcount(){
	count = 0;
}
