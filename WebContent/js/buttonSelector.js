$(document).ready(function() {
	var buttonArray = [0,0,0,0,0];
	//$('#yihongdai').find('.btn.btn-default').css('background','red');
	function getRegexp ()
	{
		var reg = "";
		var firstTime = 1;
		for  ( var  i = 0; i < buttonArray.length ; i++)
		{
			if (buttonArray[i] == 1 && firstTime == 1)
			{
				reg = reg + (i+1);
				firstTime = 0;
			}
			else if (buttonArray[i] == 1)
			{
				reg = reg + "|";
				reg = reg + (i+1);
			}
		}
		return reg;
	}

	function drawTable(reg)
	{
		myTable
		.columns(1)
		.search(reg,true)
		.draw();

	}

	$('#yihongdai').children().each(function(i) { 
		var ratingButton = $(this);

		ratingButton.click(function() {
			if (buttonArray[i] == 0)
			{
				buttonArray[i] = 1;
				ratingButton.removeClass("btn-default");

				ratingButton.addClass("btn-primary");
				var reg = getRegexp();
				console.log(reg);
				drawTable(reg);
			}
			else
			{
				buttonArray[i] = 0;
				$(this).removeClass("btn-primary");
				$(this).addClass("btn-default");
				var reg = getRegexp();
				drawTable(reg);
			}
		});

	});
//	$('#ratingAll').click(function() {
//	$('#yihongdai').children().each(function(i) { 
//	var ratingButton = $(this);
//	if (!ratingButton.hasClass("btn-primary") && ratingButton.val() != "All")
//	{
//	buttonArray[i] = 1;
//	buttonArray[5] = 1;
//	ratingButton.removeClass("btn-default");
//	ratingButton.addClass("btn-primary");
//	}
//	var reg = getRegexp();
//	drawTable(reg);
//	});
//	});

//	$('#selectRating').click(function(){
//	console.log(buttonArray);
//	var filterPattern = getRegexp();

//	console.log("fad is " + filterPattern );

//	myTable
//	.columns(1)
//	.search(filterPattern,true)
//	.draw();

//	});

//	$('#unSelectRating').click(function(){
//	myTable
//	.columns(1)
//	.search("")
//	.draw();

//	});

});