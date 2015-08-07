var editor; // use a global for the submit and return data rendering in the examples

var num = 0 ;
var table;
var passToServer = {};
var change = 0;
var wordListString;
var data_January;
var word_array_temp_Jan;
$(document).ready(function() {

	editor = new $.fn.dataTable.Editor( {
		ajax: "dataTable",
		table: "#example",
		fields: [  
		         {
		        	 label: "Star_Rating",
		        	 name: "Star_Rating"
		         },

		         {
		        	 label: "Device",
		        	 name: "Device"
		         },

		         {
		        	 label: "Review_Submit_Date",
		        	 name: "Review_Submit_Date"
		         },
		         {
		        	 label: "Review_Title",
		        	 name: "Review_Title"
		         },
		         {
		        	 label: "Review_Text",
		        	 name: "Review_Text"
		         }, 
//		         {
//		         label: "App_Version_Code",
//		         name: "App_Version_Code"
//		         },
		         {
		        	 label: "Label",
		        	 name: "Label"
		         }
		         ]
	});

	// Edit record
//	$('#example').on( 'click', 'a.editor_edit', function (e) {
//	e.preventDefault();

//	editor
//	.title( 'Edit record' )
//	.buttons( { "label": "Update", "fn": function () { editor.submit() } } )
//	.edit( $(this).closest('tr') );
//	} ); 





	table = $('#example').DataTable( {
		dom: 'T<"clear">lfrtip',
		ajax: {
			"url": "dataTable",
			"dataType": 'json',
			"type": "GET",
			"data": function ( d ) {
				// d.rating = num ;
				return  passToServer;
			},
			"dataSrc":function(json)
			{
				//console.log(json);
				//console.log(json.wordCloud);
				//alert("typeof is " + typeof(json.wordCloud) );
				//alert(obj);
				//alert(json.data);

//				alert("come here again");
//				wordListString = obj.wordCloud;
				var temp = json.data;
				//console.log(temp);

				data_January = '{"hands":1,"functions":2,"use":33,"reader":19,"android":27,"update":34,"screen":28,"turn":8,"ios":3,"good":54,"setting":5,"wish":12,"properly":4,"download":42,"whats":7,"fix":37,"let":16,"kindle":82,"takes":14,"upgrade":6,"like":58,"need":15,"devices":9,"bought":13,"want":21,"reading":62,"wont":41,"stars":23,"great":40,"sync":35,"version":11,"way":18,"amazon":29,"better":20,"phone":17,"time":24,"dont":32,"open":22,"authors":10}';
				word_array_temp_Jan = [];

				JSON.parse(data_January, function(k, v) {
					if( k !== ''){
						var tempObject = {text:k,weight:v};
						word_array_temp_Jan.push(tempObject);
					}
				}); 
				
				return json.data;
			}
		},
		columns: [
		          { data:  null, defaultContent: '', orderable: false },
		          { data: "Star_Rating" },
		          { data: "Device" },
		          { data: "Review_Submit_Date" },
		          { data: "Review_Title" },
		          { data: "Review_Text" },
//		          { data: "App_Version_Code"},
		          { data: "Label" },
//		          {
//		          data: null,
//		          className: "center",
//		          defaultContent: '<a href="" class="editor_edit">Edit</a> / <a href="" class="editor_remove">Delete</a>'
//		          } 
		          ],
		          tableTools: {
		        	  "sSwfPath": "swf/copy_csv_xls_pdf.swf",
		        	  "sRowSelect": "multi",
		        	  "sRowSelector": 'td:first-child',
		        	  "aButtons": [
		        	               "copy",{
		        	            	   "sExtends":    "collection",
		        	            	   "sButtonText": "export to",
		        	            	   "aButtons":    [ "csv", "xls", "pdf" ]
		        	               },
		        	               "select_all", "select_none"
		        	               ]
		          }
	} );




	$( "#submitToServer" ).click(function() {
		var dateFrom = $.trim($('#datepicker-1').val());

		var dateTo = $.trim($('#datepicker-2').val());
		if (!dateFrom || !dateTo) 
		{
			alert("the date from must be filled");
			return false;
		}
		var compare = dateTo.localeCompare(dateFrom);;
		if (compare <= 0)
		{
			alert(" the date from must be before date to");
			return false;
		}

		passToServer.rating = $("#selectedRating").val();
		passToServer.dateFrom = $("#datepicker-1").val();
		passToServer.dateTo = $("#datepicker-2").val();
		passToServer.NonEmpty = $("#selectedReviewtext").val();
		alert("rating is" +  passToServer.rating);
		alert("rating NonEmpty  " +  passToServer.NonEmpty);




		table.ajax.reload();

		return true;
	});


	$('#example').on( 'click', 'tbody td:nth-child(n+7)', function (e) {
		editor.inline( this );
	} );

	$("#showWordCloud").click(function() {
        $("#example-1").jQCloud(word_array_temp_Jan);
	});

} );

