$('document').ready(function()
{
    $('.login_button').click(function(){
       var pass=$('#pass1').val();
       var email=$('#email1').val();
        console.log(pass + email);
        
       $.post('login.php', {pass: pass, email: email}, function(data) {
           if (data==10){
                window.location.replace("../main/n.html"
                                        );
           }
           else if(data==1){
                window.location.replace("../deliver/delivery.html");

           }
           else if(data==2){
                window.location.replace("../manager/manager.html");
           }
           else{
            window.location.replace("login.html")
           }
        });
    });
});