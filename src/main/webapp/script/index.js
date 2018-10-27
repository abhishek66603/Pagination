$(document).ready(function(){
	setInterval(getChildLiveStatus,1000);
});

function searchStudents(mobile){
	if(mobile.value == ""){
		$("#child-search-result").empty();
		return
	}
	$.ajax({
		url:"searchchild",
		data:{mobile:mobile.value},
		data_type:"json",
		success:function(result){	
			$("#child-search-result").empty();
			$.each(result,function(key,value){
				var tr="<tr><td><input type='radio' name='child_id' value='"+value.id+"'/></td></td><td>"+(key+1)+"</td><td>"+value.firstname+" "+value.lastname+"</td>" +
						"<td>"+value.phone+"</td><td></td></tr>"
				console.log(value);
				$("#child-search-result").append(tr);
			});
		}
	});
}

function getChildLiveStatus(){
	$.ajax({
		url:"livechildstatus",
		data_type:"json",
		success:function(result){	
			$(".child-live-status").empty();
			$("#totalCh").text("  ("+result.length+")");
			$.each(result,function(key,value){
				var tr="<tr><td>"+value.name+"</td><td>"+value.mobile+"</td><td>"+value.checkin_time+"</td>" +
						"<td>"+value.total_time+"(Min)</td></tr>"
				console.log(value);	
				$(".child-live-status").append(tr);
			});
		}
	});
}