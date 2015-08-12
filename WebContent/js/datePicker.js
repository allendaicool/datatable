
      	
$("#datepicker-2").datepicker({
		dateFormat: "yy-mm-dd",
		maxDate: "-1"
 });


$("#datepicker-1").datepicker({
		dateFormat: "yy-mm-dd",
		maxDate: "-1",
		onSelect: function(date) {
			var dateText = $(this).datepicker('getDate');
			var EndDateMillis = dateText.getTime();
			var endDate = new Date(EndDateMillis);
			$("#datepicker-2").datepicker( "option", "minDate", endDate );
	}
});