
console.log(deposit +"  "+total_amount);
var play_cost = 0.0;
var miscellaenous_cost = 0.0;
var catering_cost = 0.0;
var cafe_cost = 0.0;
var updated_total = 0.0;
var return_amount = 0.0;
var gtotal = 0.0;
var sub_total = 0.0;
changeData();
function changeData(){
	play_cost = testNull(parseFloat($('input[name=playcost]').val()));
	miscellaenous_cost = testNull(parseFloat($('input[name=miscellaneous]').val()));
	catering_cost = testNull(parseFloat($('input[name=catering]').val()));
	cafe_cost = testNull(parseFloat($('input[name=cafe]').val()));
	console.log(play_cost+" "+miscellaenous_cost+" "+catering_cost+" "+cafe_cost);
	updated_total = play_cost+miscellaenous_cost+catering_cost+cafe_cost+total_amount;
	gtotal = updated_total + (updated_total*cgst/100) + (updated_total*sgst/100);
	if(gtotal > deposit){
		sub_total = updated_total-deposit;
		return_amount=0;
	}
	else{
		return_amount = deposit-updated_total;
		sub_total=0;
	}
	setupdata()
}

function setupdata(){
	$("#show-total").text(updated_total);
	$("#show-gtotal").text(gtotal);
	$("#show-subtotal").text(sub_total);
	$("#show-return").text(return_amount);
	$("#event_total_amount").val(updated_total);
	$("#event_gtotal_amount").val(gtotal);
	$("#event_subtotal_amount").val(sub_total);
	$("#event_return_amount").val(return_amount);
}

function testNull(value){
	if(isNaN(value)){
		return 0.0;
	}else{
		return value;
	}
}