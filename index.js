function plus() {
	let sign = document.querySelector(".plus").value;
	document.querySelector(".symbol").innerHTML = sign;
}

function minus() {
	let sign = document.querySelector(".minus").value;
	document.querySelector(".symbol").innerHTML = sign;
}

function times() {
	let sign = document.querySelector(".times").value;
	document.querySelector(".symbol").innerHTML = sign;
}

function divide() {
	let sign = document.querySelector(".divide").value;
	document.querySelector(".symbol").innerHTML = sign;
}

function calculateResult() {
	let firstNum = +document.querySelector(".firstNum").value;
	let secondNum = +document.querySelector(".secondNum").value;
	if (document.querySelector(".symbol").textContent == document.querySelector(".plus").value) {
		let result = firstNum + secondNum;
		if (isFinite(result)) {
			document.querySelector(".result__area").innerHTML = +result.toFixed(5);
		} else {
			let result = "Ошибка";
			document.querySelector(".result__area").innerHTML = result;
		}
	} else if (document.querySelector(".symbol").textContent == document.querySelector(".minus").value) {
		let result = firstNum - secondNum;
		if (isFinite(result)) {
			document.querySelector(".result__area").innerHTML = +result.toFixed(5);
		} else {
			let result = "Ошибка";
			document.querySelector(".result__area").innerHTML = result;
		}
	} else if (document.querySelector(".symbol").textContent == document.querySelector(".times").value) {
		let result = firstNum * secondNum;
		if (isFinite(result)) {
			document.querySelector(".result__area").innerHTML = +result.toFixed(5);
		} else {
			let result = "Ошибка";
			document.querySelector(".result__area").innerHTML = result;
		}
	} else if (document.querySelector(".symbol").textContent == document.querySelector(".divide").value) {
		let result = firstNum / secondNum;
		if (isFinite(result)) {
			document.querySelector(".result__area").innerHTML = +result.toFixed(5);
		} else if (result == Infinity) {
			let result = "На ноль делить нельзя!";
			document.querySelector(".result__area").classList.add("result__area_long");
			document.querySelector(".result__area").innerHTML = result;
		} else {
			let result = "Ошибка";
			document.querySelector(".result__area").innerHTML = result;
		}
	} else {
		let result = "Ошибка";
		document.querySelector(".result__area").innerHTML = result;
	}
}
