// On click Button event Code
$('#save').on('click', function() {
var name = $('#name').val();
var email = $('#email').val();
var city = $('#city').val();
var mobile = $('#mb').val();
var pwd = $('#pass').val();
var count = $('#myData tr').length;

if(name !="" && email!="" && city!="" && mobile!="" && pwd!=""){
	$('#myData tbody').append('<tr class="child"><td>'+count+'</td><td>'+name+'</td><td>'+email+'</td><td>'+city+'</td><td>'+mobile+'</td><td>'+pwd+'</td><td><a href="javascript:void(0);" class="remdata"><i class="fa fa-trash"></i></a></td></tr>');
}
});

// On click delete event Code
$(document).on('click','.remdata',function(){
	$(this).parent().parent().remove();
		$('#myData tbody tr').each(function(i){            
		$($(this).find('td')[0]).html(i+1);          
	});
});