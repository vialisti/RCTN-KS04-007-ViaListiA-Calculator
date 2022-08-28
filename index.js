const operator = (operator) => {
	let input = document.getElementById("input");
	onclick = function () {
		if (operator == 'AC'){
            input.value = '';
        } else if (operator == 'Del'){
            input.value = input.value.slice(0, -1); 
        } else {
            input.value += operator;
        }
	};
};

const number = (number) => {
	let Input = document.getElementById("input");
	onclick = function () {
		Input.value += number;
	};
};

const calculate = (calc) => {
    let input = document.getElementById('input');
    onclick = function () {
        input.value = eval(input.value);
    }
};
