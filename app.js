/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var currentExerciseId = 0;
var rightAnswers = 0;

$(document).ready(function(){


	// reset the list and the result 
	$(".sentences").html("");
	$(".final").hide();

	// populate the list
	for (var i = 0; i < data.length; i++) {
		$(".sentences").append(tmpl.replace("ID", i).replace("SENTENCE", data[i].phrase_en))			
	}
  	
  	// show the first sentence
  	$("#0").addClass('current');

  	// button handler
  	$(".opt-continue").click(function() {
  		
  		// check the answer
  		if($(".form-control").val() == data[currentExerciseId].phrase_de)
  		{
  			rightAnswers++;
  		}

  		// show next exercise
  		if (currentExerciseId < data.length-1) {
  			$("#"+currentExerciseId).removeClass('current');
  			currentExerciseId++;
  			$("#"+currentExerciseId).addClass('current');
  			$(".form-control").val("");
  		} 
  		else{	// or show the result
  			$("#tot-good").html(rightAnswers);
  			$("#tot").html(data.length);
  			$(".final").show();
  		};
  	});
});







