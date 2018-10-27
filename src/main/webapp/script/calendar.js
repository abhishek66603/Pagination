
var date = [];

$( function() {
	var eventDates = date;
    // datepicker
    $('#datepicker').datepicker({
        beforeShowDay: function( date ) {
            var highlight = eventDates[date];
            
            if( highlight ) {
            	console.log(highlight);
                 return [true, "event", highlight];
            } else {
                 return [true, '', ''];
            }
        },
        dateFormat: "yy/mm/dd",
    	onSelect: showDate
    });
	
});
	
	function showDate(date){
		console.log(date);
		$.ajax({
			url:"setcalendar",
			data:{"date":date},
			data_type:"json",
			success:function(result){
				console.log(result);
				/*if(result=='remove')*/
					//console.log($(this).attr("class"));
				location.reload();
				//setCalendar();
			}
		});
	}
	setCalendar();
	function setCalendar(){
		$.ajax({
			url:"showcalendardata",
			data_type:"json",
			success:function(result){
				console.log(result);
				$.each(result,function(key,value){
					date[new Date(value)] = "special cost";
				});
			}
		});
	}