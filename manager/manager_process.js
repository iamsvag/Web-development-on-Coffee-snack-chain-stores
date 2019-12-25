$.post('this_manager.php', function(data) {
            $('.thismanager').html(data);
});
$('document').ready(function()
{

	var jqxhr0 = $.get('manager_apo.php', function(data){
       		current_quantity=JSON.parse(data);
            current_quantity.push(100);
            for (var i=0; i<5; i++){
            	console.log(current_quantity[i]);
            }
       });
	jqxhr0.done(function(){
		$('.text0').html(current_quantity[0]);
		$('.text5').html(current_quantity[1]);
		$('.text2').html(current_quantity[2]);
		$('.text3').html(current_quantity[3]);
		$('.text6').html(current_quantity[4]);
	});
	var handler;
	var handler1;
	var myVar = setInterval(new_order, 5000);
	//new_order();
	//console.log("sdsd");
	function new_order(){
		$('.customer').html("");
	    $('.address').html("");
	    $('.delivery').html("");
		$('.customer1').html("");
	    $('.address1').html("");
	    $('.delivery1').html("");
		$('.customer2').html("");
	    $('.address2').html("");
	    $('.delivery2').html("");
		$('.customer3').html("");
	    $('.address3').html("");
	    $('.delivery3').html("");
		//console.log("eeww");
		var jqxhr = $.get('manager.php', function(data) {
            //console.log("epitelous");
            current_order=JSON.parse(data);
            current_order.push(100);//object->array
            //console.log(JSON.parse(data));       
        });


        
        jqxhr.done(function(){
        	console.log("-------------------------");
        	for (var i=0; i<current_order.length-1; i++){
        		for (var j=0; j<3; j++){

        			console.log(current_order[i][j]);
        		}
        	}
        	for(var i=0; i<current_order.length-1; i++){
        			/*********************************/

        			/*********************************/
        			handler=checkfreerow();
        			//console.log("sdsds"+handler);
        			if (handler == 0){
        				handler1=checkexisting(current_order[i][2]);
	        			if (handler1!=0){
	        				

	        				$('.customer').html(current_order[i][0]);
	        				$('.address').html(current_order[i][1]);
	        				$('.delivery').html(current_order[i][2]);
	        			}

        			}
        			else if (handler == 1){
        				handler1=checkexisting(current_order[i][2]);
	        			if (handler1!=0){	
	        				

	        				$('.customer1').html(current_order[i][0]);
	        				$('.address1').html(current_order[i][1]);
	        				$('.delivery1').html(current_order[i][2]);
	        			}		
        			}
        			else if (handler == 2){
        				handler1=checkexisting(current_order[i][2]);
	        			if (handler1!=0){
	        				
	
	        				$('.customer2').html(current_order[i][0]);
	        				$('.address2').html(current_order[i][1]);
	        				$('.delivery2').html(current_order[i][2]);
	        			}		
        			}
        			else if (handler == 3){
        				handler1=checkexisting(current_order[i][2]);
	        			if (handler1!=0){	
	        				

	        				$('.customer3').html(current_order[i][0]);
	        				$('.address3').html(current_order[i][1]);
	        				$('.delivery3').html(current_order[i][2]);
	        			}		
        			}
        	}
        });



		
	}
	
	function checkexisting(val2){
		if( ($('.delivery').html() == val2) || ($('.delivery1').html() == val2) || ($('.delivery2').html() == val2) || ($('.delivery3').html() == val2)){
				return 0;	
		}
	}
	function checkfreerow(){
		if( $('.customer').html() == '' ){
			return 0;
		}
		else if( $('.customer1').html() == '' ){
			return 1;
		}
		else if( $('.customer2').html() == '' ){
			return 2;
		}
		else if( $('.customer3').html() == '' ){
			return 3;
		}
	}
	
	 	var updated0 = $('.quantity5').val();
 		var updated1 = $('.quantity6').val();
 		var updated2 = $('.quantity7').val();
 		var updated3 = $('.quantity8').val();
 		var updated4 = $('.quantity9').val();


	$('.buttonadd').click(function(){
		
		var shopname = $('.thismanager').html();

 		 updated0 = $('.quantity5').val();
       	console.log(updated0);
        updated1 = $('.quantity6').val();
       //console.log(updated1);
        updated2 = $('.quantity7').val();
       //console.log(updated2);
        updated3 = $('.quantity9').val();
       //console.log(updated3);
        updated4 = $('.quantity8').val();
       //console.log(updated4);
       $.post('manager1.php', {shop_name : shopname ,updated_0 : updated0 , updated_1 : updated1, updated_2 : updated2, updated_3 : updated3, updated_4 : updated4 }, function(data){
       	console.log("-----------------------------");
                    console.log(data);
                    var value = document.querySelector('.quantity6').value;
                    });
	});
   $('.btnn').click(function(){
   		$.post('logout.php', function(data) {
            //console.log("epitelous");
            if (data==1){                       
                window.location.replace("../register+login/login.html");
            }
        });
   });


    $(".food").click(function(){

       $('.food_input').show();
    });
    $(".coffee").click(function(){
       $('.coffee_input').show();
    });
    $('.popupCloseButton').click(function(){
        $('.coffee_input').hide();
    });
    $('.popupCloseButton1').click(function(){
        $('.food_input').hide();
    });

});