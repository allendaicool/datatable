$("#datepicker-2").datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
			changeYear:true,
			onSelect: function(date) {
			}
	 });


   $("#datepicker-1").datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
			changeYear:true,
			onSelect: function(date) {
				var msecsInADay = 86400000;
				var dateText = $(this).datepicker('getDate');
				var EndDateMillis = dateText.getTime() + msecsInADay;
				var endDate = new Date(EndDateMillis);
				$("#datepicker-2").datepicker( "option", "minDate", endDate );
    			$("#datepicker-2").datepicker( "option", "maxDate", '+2y' );
			
		}
	});

      