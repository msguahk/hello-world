$(document).ready(function(){
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	//to-do
	/*
	var c;
		for(var x=25; x<400; x+=50) {
			for(var y=25; y<400; y+=50) {
				c = Shape.Circle(x,y,20);
				c.fillColor = 'green';
			}
		}
	var tool = new Tool();
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	}
	*/
	/*
	let	age = 46;
	function getBirthYear(){
		return new Date().getFullYear() - age;
	}
	var c = Shape.Circle(150,150,120);
	c.fillColor = 'black';
	var text = new PointText(150,150);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'You were born in '+ getBirthYear();
	*/

	function find_last_core(job_num, core_performance){
		console.log("Job_numb: "+ job_num);
		console.log("core_performance: " + core_performance);
		console.log("length = " + core_performance.length);
		if(job_num === 0) {
			return 1;
		}
		//var j=0;
		var core= [0,0,0];
		for(var i=0;i<core_performance.length;i++){
			core[i] = core_performance[i];
			console.log("core["+i+"] = "+core[i]);
		}
		/*
		for(var i=0;i<job_num;i++){
			var core[i] = 
		}
		*/
		return 2;
	}

	var num = prompt("Input Job Number: ");
	var cores = [1,5,3];
	var result = find_last_core(num, cores);
	alert("The last core is "+ result);
});