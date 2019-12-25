$('document').ready(function()
{
   
   $("#solon").validate({
        rules:
        {
            year: {
                required: true,
                min: 2018
                
            },
            month: {
                required: true,
                min: 1,
                max: 12
            }
        },
       messages:
        {
            year: "",
            month:""
        }
    });
   
   $('#btn').on('click', function(){
       if ($('#solon').valid()){
           var yearval = $('#year').val();
           var monthval = $('#month').val();
          // alert('fgfhgfh');
           $.post('script.php', {year: yearval, month: monthval}, function() {     
               window.location.replace("script.php");
            });
       }
       else{
           alert('Wrong Data');
           
       }
   });
});
