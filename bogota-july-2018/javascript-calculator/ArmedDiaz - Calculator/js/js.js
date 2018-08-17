var p = {

	key: document.querySelectorAll("#calculator ul li"),
	event: null,
	digit: null,
	operation: document.querySelector("#screen"),
	counterSign: 0,
	counterDecimal: false,
	result: false

}


var m = {

	init: function() {

		for (var i = 0; i < p.key.length; i++) {

			p.key[i].addEventListener("click", m.keyDown)

		}
	},

	keyboard: function() {

		document.addEventListener("keydown", m.keyboardDown);

	},

	keyboardDown: function(tecla) {

		if (tecla.keyCode == 48 || tecla.keyCode == 96) {

			p.event = "number";
			p.digit = 0;
		}

		else if (tecla.keyCode == 49 || tecla.keyCode == 97) {

			p.event = "number";
			p.digit = 1;
		}

		else if (tecla.keyCode == 50 || tecla.keyCode == 98) {

			p.event = "number";
			p.digit = 2;
		}

		else if (tecla.keyCode == 51 || tecla.keyCode == 99) {

			p.event = "number";
			p.digit = 3;
		}

		else if (tecla.keyCode == 52 || tecla.keyCode == 100) {

			p.event = "number";
			p.digit = 4;
		}

		else if (tecla.keyCode == 53 || tecla.keyCode == 101) {

			p.event = "number";
			p.digit = 5;
		}

		else if (tecla.keyCode == 54 || tecla.keyCode == 102) {

			p.event = "number";
			p.digit = 6;
		}

		else if (tecla.keyCode == 55 || tecla.keyCode == 103) {

			p.event = "number";
			p.digit = 7;
		}

		else if (tecla.keyCode == 56 || tecla.keyCode == 104) {

			p.event = "number";
			p.digit = 8;
		}

		else if (tecla.keyCode == 57 || tecla.keyCode == 105) {

			p.event = "number";
			p.digit = 9;
		}

		else if (tecla.keyCode == 187 || tecla.keyCode == 107) {

			p.event = "sign";
			p.digit = "+";
		}

		else if (tecla.keyCode == 189 || tecla.keyCode == 109) {

			p.event = "sign";
			p.digit = "-";
		}

		else if (tecla.keyCode == 88 || tecla.keyCode == 106) {

			p.event = "sign";
			p.digit = "*";
		}

		else if (tecla.keyCode == 111) {

			p.event = "sign";
			p.digit = "/";
		}

		else if (tecla.keyCode == 190 || tecla.keyCode == 110) {

			p.event = "decimal";
			p.digit = ".";
		}

		else if (tecla.keyCode == 13) {

			p.event = "equal";
		}

		else if (tecla.keyCode == 8) {

			p.event = "";
			m.clear();
		}

		else{
			p.event = "";
			p.digit = "";

		}


		m.calculator(p.event, p.digit);

	},

	keyDown: function(tecla) {

		p.event = tecla.target.getAttribute("class");
		p.digit = tecla.target.innerHTML;

		m.calculator(p.event, p.digit);

	},

	calculator: function(event, digit) {

		switch (event) {

			case "number":

				p.counterSign = 0;

				if (p.operation.innerHTML == "0") {

					p.operation.innerHTML = digit;

				} else {

					if (p.result) {

						p.result = false;
						p.operation.innerHTML = digit;


					} else {

						p.operation.innerHTML += digit;
					}

				}

				break;

			case "sign":

				p.counterSign++

					if (p.counterSign == 1) {

						if (p.operation.innerHTML == "0") {

							p.operation.innerHTML = 0;

						} else {

							p.operation.innerHTML += digit;

							p.counterDecimal = false;

							p.result = false;

						}

					}

				break;

			case "decimal":

				if (!p.counterDecimal && p.counterSign!=1) {

					p.operation.innerHTML += digit;

					p.counterDecimal = true;
					console.log("p.counterDecimal", p.counterDecimal);

					p.result = false;

				}

				break;

			case "equal":

				p.operation.innerHTML = eval(p.operation.innerHTML);

				var expresion = /./g;

				if(!expresion.test(p.operation.innerHTML)){

					p.counterDecimal = true;
				}

				p.result = true;

				break;

		}

	},

	clear: function() {

		p.result = false;
		p.counterDecimal = false;
		p.operation.innerHTML = 0;

	}

}

m.init();
m.keyboard();