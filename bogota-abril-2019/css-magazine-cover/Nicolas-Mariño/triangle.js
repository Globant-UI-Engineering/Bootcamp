var width  = 	document.getElementById('chart').offsetWidth
var height = 	(window.innerHeight	|| html.clientHeight  	|| body.clientHeight  	|| screen.availHeight) - document.getElementById('footer').offsetHeight - 30;
var s =  Math.min(height, width); 	//triangle side length

var sin30 = Math.pow(3,1/2)/2;
var cos30 = .5;

var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

//triangle centered at (cx, cy) with circumradius r
function addTriangle(cx, cy, r){
	svg.append('polygon')
		.on(mobile ? "click" : "mouseover", function(d){
			addTriangle(	cx,				cy - r/2, 		r/2);			
			addTriangle(	cx - r*sin30/2,	cy + r*cos30/2, r/2);			
			addTriangle(	cx + r*sin30/2,	cy + r*cos30/2, r/2);
			
			d3.select(this).on('mouseover', function(){});
			d3.select(this).on('click', function(){
				addTriangle(cx, cy, r);});
		})
		.attr('fill', 'white')
		.attr('points', (cx) 	+','+ 	(cy) 	+' '+ 
						(cx) 	+','+ 	(cy)	+' '+
						(cx) 	+','+ 	(cy))
		.transition()
		.duration(600)
		.delay(10)
			.attr('fill', '#'+Math.floor(Math.random()*16777215).toString(16))
			.attr('points', (cx) 			+','+ 	(cy-r) 			+' '+ 
							(cx-r*sin30) 	+','+ 	(cy + r*cos30)	+' '+
							(cx+r*sin30) 	+','+ 	(cy + r*cos30))
}


//adds svg & g elements to page so zooming will work
var svg = d3.select("#chart")
  .append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .attr("pointer-events", "all")
  .append('svg:g')
    .call(d3.behavior.zoom().on("zoom", redraw))
  .append('svg:g');

svg.append('svg:rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white');

function redraw() {
  console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
      "translate(" + d3.event.translate + ")"
      + " scale(" + d3.event.scale + ")");
}

//add the first triangle
addTriangle(width/2, height*2/3, s*2/3)