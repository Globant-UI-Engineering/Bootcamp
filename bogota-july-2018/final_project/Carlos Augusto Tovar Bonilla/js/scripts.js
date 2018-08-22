(function(){
"use strict";
var formPapa = document.getElementById('form-papa');
var program = formPapa.program;
var programSelected;


program.addEventListener('change', function () {
	programSelected = program.value;
	var container = document.getElementsByName('subjectSelect');
        if (container[0].length > 0) {
            for(var j = 0; j < container.length; j++) {
                for(var i = container[j].length - 1 ; i >= 0 ; i--){
                    container[j].remove(i);
                }
            }
        }
	var request = new XMLHttpRequest();
	request.open('POST', 'https://siabog.unal.edu.co/buscador/JSON-RPC', true);
	request.setRequestHeader("Content-Type", "text/plain");

	request.onload = function () {

		var data = JSON.parse(this.response);
		if (request.status >= 200 && request.status < 400) {
			var asignaturas = data.result.asignaturas.list;
			asignaturas.forEach(function (asignaturas) {
				for (var i = 0; i < container.length; i++) {
					var option = document.createElement('option');
					var subjectName = document.createTextNode((asignaturas.nombre).toLowerCase());
					option.appendChild(subjectName);
					option.value = asignaturas.nombre;
					container[i].appendChild(option);
				}
			});

		} else {
			alert('No fue posible cargar los cursos');
		}
	}

	request.send(JSON.stringify({
		method: "buscador.obtenerAsignaturas",
		params: ["", "PRE", "", "PRE", programSelected, "", 1, 1000]
	}))
});

var original = document.getElementById('form-content');
var navInicio = document.getElementById('nav-inicio');
var articleMain = document.getElementById('main');
var articleCalculate = document.getElementById('calculate');
var navCalcular = document.getElementById('nav-calcular');

function addSubject(event) {
	var clone = original.cloneNode(true);
	clone.id = "form-content";
	original.parentNode.appendChild(clone);
	event.preventDefault();
}

function showInicioNav() {
    articleMain.style.display = 'block';
    articleCalculate.style.display = 'none';
}

function showCalcularNav() {
    articleMain.style.display = 'none';
    articleCalculate.style.display = 'block';
}

navInicio.addEventListener('click', showInicioNav);
navCalcular.addEventListener('click', showCalcularNav);
var btnSubject = document.getElementById('add-subject');
btnSubject.addEventListener('click', addSubject);

function sumCreditXGrade(subjectCredits, subjectGrades) {

	try {
		var resultCreditXGrade = 0;
	    for(var i = 0; i < subjectCredits.length; i++) {
	    	var valueSubjectCredits = subjectCredits[i].value;
	    	var valueSubjectGrades = subjectGrades[i].value;
	        resultCreditXGrade += (parseFloat(valueSubjectCredits ? valueSubjectCredits : 0) * parseFloat(valueSubjectGrades ? valueSubjectGrades : 0));
	    }
	    return resultCreditXGrade;	
	} catch (error) {
		console.log(error);
	}
}

function sumCreditsFunction (subjectCredits) {

	try {
	    var resultSumCredits = 0;
	    for(var i = 0; i < subjectCredits.length; i++) {
		    var valueSubjectCredits = subjectCredits[i].value;
	        resultSumCredits += parseFloat(valueSubjectCredits ? valueSubjectCredits : 0);
	    }
	    return resultSumCredits;
	} catch (error) {
		console.log(error);
	}
}

    
formPapa.addEventListener('submit', function(data) {
    var subjectCredits = document.getElementsByName('credits');
    var subjectGrades = document.getElementsByName('grade');
    var creditXGrade = sumCreditXGrade(subjectCredits, subjectGrades);
    var sumCredits = sumCreditsFunction(subjectCredits);
    var papa = creditXGrade/sumCredits;
    console.log(data);
    alert('Su PAPA actual es: ' + papa);

    data.preventDefault();
    
});
})();