q=prompt("grid??");

$(document).ready(function() {
	makeGrid(q);
	$(".box").on("mouseenter",function(){
		var gid = $(this).attr("id");
		var jid = darken(gid);
		$(this).attr("id",jid);
	});	
	clear();
});


function makeGrid(x) {
	for(i=0; i<x; i++) {
		$(".container").append("<div class='row'></div>");
		aBox(x);
	}
	var pix = ((620/x)-2);
    $(".box").css({"height":pix+"px", "width":pix+"px"});
};

function aBox(x) {
	
	for (j=0; j<x; j++){
		$(".row:last").append("<div class='box' id='d0'></div>");
	}
}

function clear(){
	$("#clear").click(function(){
		return q;
	});

}

/*BLACK BOXES
	$(".box").hover(function(){
		$(this).addClass("blackOut");	
	});
*/	


/*RANDOM COLOR
	var hue = "rgb(" + (Math.floor((256-199)*Math.random()) + 200) + "," + (Math.floor((256-199)*Math.random()) + 200) + "," + (Math.floor((256-199)*Math.random()) + 200) + ")";
		$(this).css({"background-color": hue});
*/


function darken(w) {
	console.log("poop though");
	switch (w) {
		case "d0":
			return "d1";
			break;
		case "d1":
			return "d2";
			break;
		case "d2":
			return "d3";
			break;
		case "d3":
			return "d4";
			break;
		case "d4":
			return "d5";
			break;
		case "d5":
			return "d6";
			break;
		case "d6":
			return "d7";
			break;
		case "d7":
			return "d8";
			break;
		case "d8":
			return "d9";
			break;
		case "d9":
			return "d10";
			break;
		
	}
}



