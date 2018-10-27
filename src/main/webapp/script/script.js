
$(document).ready(function(){
	capitalize()
	setInterval(accessCardEvent,200);
	calculatePrice();
	getGuestList();
});

function accessCardEvent(){
	$.ajax({
		url:"accesscontroleevent",
		data_type: "json",
		success:function(result){
			if(result!="")
				tempAlert(result,2000);
		}
	});
}

function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:0%;left:40%;background-color:white;font-size:20px;color:red;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

function capitalize(){
	 $('.caps').on('keydown', function(event) {
		 console.log("pressed");
	        if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
	           var $t = $(this);
	           event.preventDefault();
	           var char = String.fromCharCode(event.keyCode);
	           $t.val(char + $t.val().slice(this.selectionEnd));
	           this.setSelectionRange(1,1);
	        }
	    });
}
/*===============================================================Teacher related code here===============================================================*/
function readTeacherURL(input) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#teacherImage')
                 .attr('src', e.target.result)
                 .height(150);
             $('#teacherImage').css('display','block');
         };

         reader.readAsDataURL(input.files[0]);
     }
 }

/*=================================================Purchase Food RelatedCoad Here========================================================================*/
var price = 0;
function getPrice(val){
	$.ajax({url: "getprice",
		data_type:"json",
		data:{"id":val.value},
		success: function(result){
		console.log("childId = "+child_id);
		price = result.price;
		$('#quantity').val(1);
		$('#price').val(price);
    }});
}
function calculatePrice(){
	$('#quantity').on('keyup',function(){
		var quantity = parseInt($('#quantity').val());
		console.log(quantity+ "  " +price);
		$('#price').val(price*quantity);
	});
}

function addPurchaseItem(){
	var data = {
			'food_id':$('#item :selected').val(),
			'student_id':child_id,
			'item_name':$('#item :selected').text(),
			'total_quantity':$('#quantity').val(),
			'total_price':$('#price').val(),
	};
	$.ajax({url: "purchasefooditem",
		method: "POST",
		data_type:"json",
		data:data,
		success: function(result){
		console.log(result);
		location.reload();
    }});
}

function returnItem(val){
	$.ajax({url: "returnfooditem",
		method: "POST",
		data_type:"json",
		data:{"id":val},
		success: function(result){
		console.log(result);
		location.reload();
    }});
}
/*=================================================Purchase Food RelatedCoad End Here========================================================================*/


/*=================================================Issue Library Item RelatedCoad Here========================================================================*/
	function issueLibItem(){
		var data = {
				'item_id':$('#lib-item :selected').val(),
				'child_id':child_id,
				'item_name':$('#lib-item :selected').text(),
				'quantity':$('#item-quantity').val(),
		};
		$.ajax({url: "issuelibitem",
			method: "POST",
			data_type:"json",
			data:data,
			success: function(result){
			console.log(result);
			location.reload();
	    }});
	}
	
	function returnLibItem(val){
		$.ajax({url: "returnlibitem",
			method: "POST",
			data_type:"json",
			data:{"id":val},
			success: function(result){
			alert(result);
			location.reload();
	    }});
	}
/*=================================================Issue Library Item RelatedCoad End Here========================================================================*/
	
/*====================================================menu related code start from here===========================================================================*/
/*====================================================menu related code end here===========================================================================*/

/*====================================================Guest related code start from here===========================================================================*/

	function saveGuest(val){
		var data={
				"eventId":val,
				"name":$("#guest-name").val(),
				"mobile":$("#guest-mobile").val()
		}
		$.ajax({
			url:"addguest",
			method:"POST",
			data_type:"json",
			data:data,
			success:function(result){
				console.log(result);
				$("#guest-name").val("").focus();
				$("#guest-mobile").val("");
				$(".guest-list").empty();
				getGuestList();
			}
		});
	}
	function getGuestList(){
		$.ajax({
			url:"getguestlist",
			data_type:"json",
			data:{"eventId":eventId},
			success:function(result){
				console.log(result);
				$.each(result,function(key,data){
					var row = "<tr><td>"+(key+1)+"</td><td>"+data.name+"</td><td>"+data.mobile+"</td><td><button onclick='deleteGuestList("+data.id+")'>delete</button></td></tr>"
					$(".guest-list").append(row);
				})
			}
		});
	}
	
	function deleteGuestList(id){
		$.ajax({
			url:"deleteguest",
			data_type:"json",
			data:{"id":id},
			success:function(result){
				console.log(result);
					location.reload();
			}
		});
	}
	
	
/*====================================================Guest related code end here===========================================================================*/
		
/*=======================================================Search Function =================================================================*/
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
/*========================================search lib item in inventory==========================================================*/
	function searchLibItem(index) {
		   // Declare variables 
		   var input, filter, table, tr, td, i;
		   input = document.getElementById("libsearch");
		   filter = input.value.toUpperCase();
		   table = document.getElementsByClassName("tbody");
		   tr = table[0].getElementsByTagName("tr");
		 	
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
	
/*======================================================drop div========================================================================*/
/*======================================================Siblings========================================================================*/

	function showSiblings(val){
		$.ajax({
			url:"getsiblings",
			data:{"id":val},
			data_type:"json",
			success:function(result){
				$('.drop-div').show();
				$('.siblings-row').empty();
				$.each(result,function(key,value){
					var row = "<tr><td><input type='radio' name='child_id' value='"+value.id+"' required='true'></td>" +
							"<td><img width='50' height='50'  src='ChildrenPhoto/"+value.image_name+"'/></td>" +
							"<td>"+key+"</td><td>"+value.firstname+"</td>" +
							"<td>"+value.lastname+"</td><td>"+value.allergies+"</td></tr>";
					$('.siblings-row').append(row);
				});
			}
		});
	}
	

/*======================================================Documents========================================================================*/
function teacherDocuments(val){
	console.log(val);
	$.ajax({
		url:"retriveteacherdoc",
		data:{id:val},
		success:function(result){
			console.log(result);
			$.each(result,function(key,value) {
			var row = "<tr><td>"+key+"</td><td>"+value.doc_name+"</td><td><a href='TeacherDoc/"+value.url+"' target='_blank'>Link Text</a></td></tr>";
			$(".teacher-document-list").append(row);
			});
		}
	});
}
function staffDocuments(val){
	console.log(val);
	$.ajax({
		url:"retrivestaffdoc",
		data:{id:val},
		success:function(result){
			console.log(result);
			$.each(result,function(key,value) {
			var row = "<tr><td>"+key+"</td><td>"+value.doc_name+"</td><td><a href='StaffDoc/"+value.url+"' target='_blank'>Link Text</a></td></tr>";
			$(".staff-document-list").append(row);
			});
		}
	});
}
/*======================================================ClassAttendance=========================================================*/
function getSessionDate(val){
	$(".session-tbody").empty();
	$(".drop-div").show();
	$.ajax({
		url:"getSessions",
		data:{id:val},
		success:function(result){
			console.log(result);
			$.each(result,function(key,value) {
			var row = "<tr><td><input type='radio' name='session_id' value='"+value.id+"' required='required'/></td><td>"+key+"</td><td>"+value.session_name+"</td><td>"+value.start_time+"</td><td>"+value.end_time+"</td></tr>";
			$(".session-tbody").append(row);
			});
		}
	});
}

function getSession(val){
	alert(val.value);
}
/*======================================================Guest List========================================================================*/
	
	function closeDropDiv(){
		$('.drop-div').hide();
	}