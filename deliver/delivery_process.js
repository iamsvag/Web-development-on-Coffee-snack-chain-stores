$('document').ready(function()
{
    
    $.post('this_deliver.php', function(data) {
        	if (data == '0'){
        		window.location.replace('../register+login/login.html');
        	}
            $('.thisdeliver').html(data);
    });
    $('.button1').click(function(){
    	window.location.replace("delivery1.html");
    });
    $('.logout').click(function(){
        var jqxhr = $.post('delivery2.php', function(data) {
        });
        jqxhr.done(function(){
                $.post('logout.php', function(data) {
                    if (data==1){                       
                        window.location.replace("../register+login/login.html");
                    }
                });
        });
    	
    });
    

});