
function searchFunction(index) {
		   // Declare variables 
		   var input, filter, table, tr, td, i;
		   input = document.getElementById("myInput");
		   filter = input.value.toUpperCase();
		   table = document.getElementById("tbody");
		   tr = table.getElementsByTagName("tr");
		 	
		   //search all table row by attendant name column 
		   
		   for (i = 0; i < tr.length; i++) {
		     td = tr[i].getElementsByTagName("td")[index];    
		     if (td) {    	
		       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {    	
		         tr[i].style.display = "";
		       } else {
		         tr[i].style.display = "none";
		       }
		     } 
		   }
		}

/*=================================================Class Attendance============================================*/
function getSessionDate(val){
	$(".session-tbody").empty();
	$(".drop-div").show();
	$.ajax({
		url:"getSessions",
		data:{id:val},
		success:function(result){
			console.log(result);
			$.each(result,function(key,value) {
			var row = "<tr><td><input type='radio' name='session_id' value='"+value.id+"'/></td><td>"+key+"</td><td>"+value.session_name+"</td><td>"+value.start_time+"</td><td>"+value.end_time+"</td></tr>";
			$(".session-tbody").append(row);
			});
		}
	});
}

function getSessions(val){
	$.ajax({
		url:"getSessions",
		data:{id:val.value},
		success:function(result){
			console.log(result);
			$("#select-session").show();
			$.each(result,function(key,value) {
			var row="<option value='"+value.id+"'>"+value.session_name+"</option>"
			$(".select-session").append(row);
			});
		}
	});
}