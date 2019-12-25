$('document').ready(function()
{
    
    /* validation */
    $("#solon").validate({
        rules:
        {
            email: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 8
            },
            cpass: {
                required: true,
                equalTo: '#pass'
            },
            tel: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
            
        },
        messages:
        {
            email: "Εισάγετε έγκυρο email",
            pass:{
                required: "Εισάγετε κωδικό",
                minlength: "Ελάχιστοι χαρακτήρες: 8"
            },
            tel:"Εισάγετε έγκυρο αριθμό τηλεφώνου",
            cpass:{
                required: "Eισάγετε τον ίδιο κωδικό",
                equalTo: "Εισάγετε τον ίδιο κωδικό"
            }
        }
        
    });

    $('#register_button').on('click', function(){
        if ($('#solon').valid()){
           // $('#alex').html('dfgdfg');
            var cpass = $('#cpass').val();
            var tel = $('#tell').val();
            var email = $('#email').val();
            var pass = $('#pass').val();
            if (($.trim(tel) != '') && ($.trim(email) != '') && ($.trim(pass) != '')){
                
                
                $.post('register1.php', {pass: pass, email: email, tel: tel}, function(data) {
                    if (data == 1){
                        window.location.replace("regsucc.php");

                    }
                    else{
                        document.forms.contact.email.style.border = "1.2px solid red"; 
                        $('#emailexists').html('Email already exists');
                        $('#pass').val('');
                        $('#cpass').val('');
                        
                        //pass.txt('');
                    }
                });
              
            }
        }
    });
    /* validation */

    /* form submit */
    /*alert(123);
    $('#register_button').on('click', function(){
        var tel = $('#tell').val();
        var email = $('#email').val();
        var pass = $('#pass').val();
        alert(email);
    });
     form submit */
 
});