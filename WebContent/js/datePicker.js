$("#datepicker-1").datepicker({
				dateFormat: "mm-dd-yy",
				changeMonth: true,
				onSelect: function(date) {
					

					var selectedDate = new Date(date);
					var msecsInADay = 86400000;
					var endDate = new Date(selectedDate.getTime() + msecsInADay );
					alert("the end date is " + endDate);
					$("#datepicker-2").datepicker( "option", "minDate", endDate );
        			$("#datepicker-2").datepicker( "option", "maxDate", '+2y' );
				
			}
		});

		 $("#datepicker-2").datepicker({
				dateFormat: "mm-dd-yy",
				changeMonth: true,
				changeYear:true,
				onSelect: function(dateText, inst) {
				}
			});


		  $('#myform').submit(function() {

		 		var dateFrom = $.trim($('#datepicker-1').val());
		 		
		 		var dateTo = $.trim($('#datepicker-2').val());
				if (!dateFrom || !dateTo) 
		 		{
		 			alert("the date from must be filled");
		 			return false;
		 		}
		 		return true;
		 });