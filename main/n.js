





   
/************************************************************************/

$.post('this_email.php', function(data) {
        if (data == '0'){
            window.location.replace('../register+login/login.html');
        }
            $('.thisemail').html(data);
        });

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function openForm1() {
    document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}

var addresses = [];
var total_price=0.0;
var final_kms=0;
var kms_delivera=0;
var copycopyresults = [];
var min_j1 = [];
var sentmin=5;
var suitable_shop="";
var deliver = [];
var min_j = [0, 0, 0, 0];
var labelID, freep, k;
var token = [];
var quantityprod = [];
var product = [];
var cart = [];
var p=0;
var ret='';
var copyresults = [0, 0, 0, 0];
var min=0;
var proionta = ['Ελληνικός', 'Φραπέ', 'Εσπρέσο', 'Φίλτρου', 'Καπoυτσίνο', 'Κέικ', 'Κουλούρι', 'Τοστ', 'Τυρόπιτα', 'Χορτόπιτα']
var price = ['1.10', '1.20', '1.30', '1.50', '1.50', '0.70', '0.50', '1.00', '1.10', '1.00']
var finalprice=0.00, productvalue=0.00;
function checkfreep(){
    if ($('#id0').html() == ''){
        return $('#id0');
    }
    else if ($('#id1').html() == ''){
        return $('#id1');
    }
    else if ($('#id2').html() == ''){
        return $('#id2');
    }
    else if ($('#id3').html() == ''){
        return $('#id3');
    }
    else if ($('#id4').html() == ''){
        return $('#id4');
    }
    else if ($('#id5').html() == ''){
        return $('#id5');
    }
    else if ($('#id6').html() == ''){
        return $('#id6');
    }
    else if ($('#id7').html() == ''){
        return $('#id7');
    }
    else if ($('#id8').html() == ''){
        return $('#id8');
    }
    else if ($('#id9').html() == ''){
        return $('#id9');
    }
}
function checkifexists(cart, proionta, i){
    //proionta = proionta.split(' ', 5)[4];
    //console.log("test test test "+proionta);
    
    if ($('#id0').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id0').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id0').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id1').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id1').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id1').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id2').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id2').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id2').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id3').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id3').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id3').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id4').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id4').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id4').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id5').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id5').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id5').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id6').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id6').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id6').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id7').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id7').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id7').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id8').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id8').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id8').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else if($('#id9').html().split(' ', 5)[4] == proionta){
        cart=parseInt(cart)+parseInt($('#id9').html().split(' ', 5)[0]);
        productvalue = cart * price[i];
        $('#id9').html(cart + '  X  ' + proionta + '  =  ' + productvalue.toFixed(2) + '€');
        return 1;//to enhmerwse h checkifexists
    }
    else{
        return 0;
    }
}
var checking=0;
function addtocart(){
    for (var i = 0; i <= 9; i++) {
        cart[i] = 0.0;
        //console.log(cart[i]);
    }
    cart[0] = $('.quantity').val();
    cart[1] = $('.quantity1').val();
    cart[2] = $('.quantity2').val();
    cart[3] = $('.quantity3').val();
    cart[4] = $('.quantity4').val();
    cart[5] = $('.quantity5').val();
    cart[6] = $('.quantity6').val();
    cart[7] = $('.quantity7').val();
    cart[8] = $('.quantity8').val();
    cart[9] = $('.quantity9').val();
    for (var i = 0; i <= 9; i++) {
        if (cart[i] > 0){
            freep = checkfreep();
            productvalue = cart[i] * price[i];
            //parseFloat(productvalue);
            //console.log(productvalue.toFixed(2));
            
           // Math.round(productvalue * 100) / 100
            checking=checkifexists(cart[i], proionta[i], i);
            if (checking != 1){
                freep.html(cart[i] + '  X  ' + proionta[i] + '  =  ' + productvalue.toFixed(2) + '€');
            }
            //finalprice = finalprice + productvalue.toFixed(2);
            //$('#id20').html(finalprice);
            cart[i] = 0;
            //console.log(finalprice);
        }
    };
$('.quantity').val('');
$('.quantity1').val('');
$('.quantity2').val('');
$('.quantity3').val('');
$('.quantity4').val('');
$('.quantity5').val('');
$('.quantity6').val('');
$('.quantity7').val('');
$('.quantity8').val('');
$('.quantity9').val('');
$('.food_input').hide();
$('.coffee_input').hide();
}
function continueorder(){
    total_price=0.0;
        $('.order_input').show();
        $( "#id10" ).html('');
        if ($('#id0').html() != ''){
            $( "#id0" ).clone().appendTo( "#id10" );
            k=1;
        }
        if ($('#id1').html() != ''){
            $( "#id1" ).clone().appendTo( "#id10" );
            k=2;
            //GIA NA KSERW POSES GRAMMES PARAGGELIAS EXW!!
        }
        if ($('#id2').html() != ''){
            $( "#id2" ).clone().appendTo( "#id10" );
            k=3;
        }
        if ($('#id3').html() != ''){ 
            $( "#id3" ).clone().appendTo( "#id10" );
            k=4;
        }
        if ($('#id4').html() != ''){
            $( "#id4" ).clone().appendTo( "#id10" );
            k=5;
        }
        if ($('#id5').html() != ''){
            $( "#id5" ).clone().appendTo( "#id10" );
            k=6;
        }
        if ($('#id6').html() != ''){
            $( "#id6" ).clone().appendTo( "#id10" );
            k=7;
        }
        if ($('#id7').html() != ''){
            $( "#id7" ).clone().appendTo( "#id10" );
            k=8;
        }
        if ($('#id8').html() != ''){
            $( "#id8" ).clone().appendTo( "#id10" );
            k=9;
        }
        if ($('#id9').html() != ''){
            $( "#id9" ).clone().appendTo( "#id10" );
            k=10;
        }
        /**********************************************/
        for (i = 0; i < k; i++) {
                token[i] = $('#id10').text().split('€', k)[i];
            }
            //console.log(token[k-1]);
            for (i = 0; i < k; i++) {
                quantityprod[i] = token[i].split(' ', 5)[0];
                product[i] = token[i].split(' ', 5)[4];

                if (product[i].indexOf('Ελληνικός') > -1){
                    //true
                    //console.log(product[i]);
                    product[i] = 0;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                    //console.log(product[i]);
                }
                else if (product[i].indexOf('Φραπέ') > -1){
                    product[i] = 1;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Εσπρέσο') > -1){
                    product[i] = 2;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Καπoυτσίνο') > -1){
                    product[i] = 3;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Φίλτρου') > -1){
                    product[i] = 4;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Κέικ') > -1){
                    product[i] = 5;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Κουλούρι') > -1){
                    product[i] = 6;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Τοστ') > -1){
                    product[i] = 7;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Τυρόπιτα') > -1){
                    product[i] = 8;
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
                else if (product[i].indexOf('Χορτόπιτα') > -1){
                    product[i] = 9;
                    console.log(price[i] + i);
                    total_price += parseFloat(quantityprod[i]) * parseFloat(price[product[i]]);
                }
            }
            total_price=Number((total_price).toFixed(1));
            console.log("eeeeeeeeeeeeeeddd"+total_price);
            $('.total_pricee').html('Σύνολο: ' + total_price + ' €');

}
$('.buttonreset').click(function(){
    $('.quantity').val('');
    $('.quantity1').val('');
    $('.quantity2').val('');
    $('.quantity3').val('');
    $('.quantity4').val('');
});
$('.buttonreset1').click(function(){
    $('.quantity5').val('');
    $('.quantity6').val('');
    $('.quantity7').val('');
    $('.quantity8').val('');
    $('.quantity9').val('');
});

$(window).load(function () {
    
    $('.btn').click(function(){
        //console.log("fvdff'");
        $.post('logout.php', function(data) {
            //console.log("epitelous");
            if (data==1){                       
                window.location.replace("../register+login/login.html");
            }
        });
    });
    
    $('.button_send').click(function(){
        var all_shops=[];
        var metriths_magaziwn=0;
            var jq1=$.get('allshops.php', function(data) {
            all_shops=JSON.parse(data);
            //alert(JSON.parse(data));
            //alert(all_shops.length);
            metriths_magaziwn=all_shops.length/3;
            //alert(metriths_magaziwn);
            });
            console.log("working...");
            var lat_lon = [];
            var myLatlng = [];
            jq1.done(function(){
                
            var j=0;
            for (var i=0; i<all_shops.length; i+=3){

                addresses[j]=all_shops[i];
                console.log(all_shops[i]);
                console.log(addresses[j]);
                j++;

            }
            j=0;
            for (i=0; i<all_shops.length; i+=3){
                lat_lon[j]={lat:parseFloat(all_shops[i+1]), lng:parseFloat(all_shops[i+2])};
                console.log(lat_lon[j]);
                myLatlng[j] = new google.maps.LatLng(parseFloat(lat_lon[j].lat),parseFloat(lat_lon[j].lon));
                //console.log(myLatlng[j]);
                j++;
            }
            
            var deliver_positions = [];
            
            
            });
            destinationA = $('.street').val();
            
            
            

        /*****************************DELIVERADES******************            
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var deliver_positions = JSON.parse(this.responseText);
                    console.log(JSON.parse(this.responseText));
                }
            };
            xmlhttp.open("GET", "search_deliver.php", true);
            xmlhttp.send();
            console.log((deliver_positions[2]));*/
        $.get('search_deliver.php', function(data) {
            console.log("epitelous");
            deliver_positions=JSON.parse(data);
            console.log(JSON.parse(data));
            
        });



        
        /*****************APOSTASEIS MAGAZIWN SE PROORISMO*******************/
        var geocoder = new google.maps.Geocoder;
        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: lat_lon,
          destinations: [destinationA],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            console.log('Error was: ' + status);
          } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            var outputDiv = document.getElementById('output');
            
            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                    //sto copy results tou i kataxwreitai
                    copyresults[i] = results[j].distance.text.toString().split(' ', 1)[j];
              }
       
            }
              for (a=0; a<metriths_magaziwn; a++){
                  copyresults[a] = parseFloat(copyresults[a].replace(",", "."));
                  copycopyresults[a] = copyresults[a];
                  //console.log(copyresults[a]);
            }
              
              
              var min1 = 9999999999;
            for(var a = 0; a < metriths_magaziwn; a++){
                //console.log('a  ' + a);
                for (var k = 0; k < metriths_magaziwn; k++){
                   // console.log('k ' + k + ' cp ' + copyresults[k] + ' min1 '+ min1);
                    
                    if (copyresults[k] < min1){
                        min1=copyresults[k];
                        min=k;
                    }
                }

                copyresults[min]=99999999999;
                min_j[a]=min;
                min1 = 9999999999;
            }
              for (a=0; a<metriths_magaziwn; a++){
                  console.log("magazia "+min_j[a]);
              }
            /* First destination */
             // addresses[min_j[0]];
       
            //
          }
           sentmin = min_j[0];
            console.log('sentmin =  '+sentmin);
            /****************************deliveras**************************/
            console.log("edwwwwwww"+deliver_positions[0]);

                i=0;
                while (i < 12){
                    if (deliver_positions[i].toString() != ""){
                        p++;//gia na dw posoi deliverades einai availability true
                    }
                    i++;
                } 
            var toaddress=$('.street').val();
            console.log("eeeeeeeeeeeeeeeeee  "+ destinationA);
           deliver_distance(sentmin, p, copycopyresults, destinationA, metriths_magaziwn, lat_lon);
            
        });

        

        
        /**/
        
        
        
        
        
        
        
        
        
        
        sum=0;
        //alert($('.street').val());
        if ($('.street').val() != '' ){
            for (i = 0; i < k; i++) {
                token[i] = $('#id10').text().split('€', k)[i];
            }
            //console.log(token[k-1]);
            for (i = 0; i < k; i++) {
                quantityprod[i] = token[i].split(' ', 5)[0];
                product[i] = token[i].split(' ', 5)[4];

                if (product[i].indexOf('Ελληνικός') > -1){
                    //true
                    //console.log(product[i]);
                    product[i] = 0;
                    //console.log(product[i]);
                }
                else if (product[i].indexOf('Φραπέ') > -1){
                    product[i] = 1;
                }
                else if (product[i].indexOf('Εσπρέσο') > -1){
                    product[i] = 2;
                }
                else if (product[i].indexOf('Καπoυτσίνο') > -1){
                    product[i] = 3;
                }
                else if (product[i].indexOf('Φίλτρου') > -1){
                    product[i] = 4;
                }
                else if (product[i].indexOf('Κέικ') > -1){
                    product[i] = 5;
                }
                else if (product[i].indexOf('Κουλούρι') > -1){
                    product[i] = 6;
                }
                else if (product[i].indexOf('Τοστ') > -1){
                    product[i] = 7;
                }
                else if (product[i].indexOf('Τυρόπιτα') > -1){
                    product[i] = 8;
                }
                else if (product[i].indexOf('Χορτόπιτα') > -1){
                    product[i] = 9;
                }
                
                
            }
            var sum = [];
             for (i = 0; i < k ; i++){
                 sum[i]=0;
             }
            for (i = 0; i < k ; i++){
                 sum[i]=quantityprod[i] * 10 + product[i];
                ret = ret.concat(sum[i].toString());
                if (i != k-1){
                    ret=ret.concat('.');
                }
                
            }
            //To ekana me function giati etrexe prwta auta kai meta ta ths google maps
            //opote evgaze la8os sentmin(evgaze synexeia 0)
            function deliver_distance(sentmin, p, results1, toaddress, metriths_magaziwn, lat_lon1){
                for (i=0; i<metriths_magaziwn; i++){
                    console.log("error "+results1[i]+ " " + addresses[i]);
                }
                console.log("pppp " + p);
                var copyresults11 = [];
                console.log("kalesthka");
                if(sentmin != 5){
                    var results11;
                    var data=0;
                    var jqxhr = $.post('n.php', {ret: ret, minjarray: min_j, k: k, metriths_magaziwn: metriths_magaziwn, s_shop: addresses}, function(data) {
                        console.log("epitelousphpphp");
                        console.log(data);//H data krataei to magazi pou 8a ginei h apostolh!!!
                        suitable_shop=data;
                        });
                        
                        jqxhr.done(function(){
                            
                        for (var y=0; y<metriths_magaziwn; y++){
                            console.log(" hello "+addresses[y]+" "+suitable_shop+ " "+metriths_magaziwn);
                            if (addresses[y].toString() === suitable_shop.toString()){
                                console.log("solonas "+y);
                                results11 = results1[y];
                            }
                        }
                        console.log("GIA NA DOUME "+results11);
                            for (var i=0; i<metriths_magaziwn; i++){
                                if (suitable_shop == addresses[i]){
                                    var lat_lon2=lat_lon1[i];
                                    console.log(lat_lon2);
                                }
                            }
                           /* if (suitable_shop == "Κατάστημα Γενναδίου"){
                                destinationA=Gennadiou;
                            }
                            else if(suitable_shop == "Κατάστημα Λύκωνος"){
                                destinationA=Likonos;
                            }
                            else if(suitable_shop == "Κατάστημα Πετμεζά"){
                                destinationA=Petmeza;
                            }
                            else if(suitable_shop == "Κατάστημα Νοταρά"){
                                destinationA=Notara;
                            }*/
                            
                            console.log("p= " + p);//p=pli8os deliveradwn available+suitable
                            console.log(deliver_positions[0] + deliver_positions[1] + destinationA);
                            var geocoder = new google.maps.Geocoder;
                            var service = new google.maps.DistanceMatrixService;
                            service.getDistanceMatrix({
                            origins: [deliver_positions[0], deliver_positions[1], deliver_positions[2], deliver_positions[3], deliver_positions[4], deliver_positions[5], deliver_positions[6], deliver_positions[7], deliver_positions[8], deliver_positions[9], deliver_positions[10], deliver_positions[11]],
                            destinations: [destinationA],
                            travelMode: 'DRIVING',
                            unitSystem: google.maps.UnitSystem.METRIC,
                            avoidHighways: false,
                            avoidTolls: false
                            }, function(response, status) {
                            if (status !== 'OK') {
                                console.log('Error was: ' + status);
                            } else {
                                var originList = response.originAddresses;
                                console.log(originList.length + "   " + p);//Edw parathrhsa oti vriskei to length
                                //ths listas, dhladh posa stoixeia exw dwsei sto origins kai epeidh
                                //eixa provlhma giati phgaine ektos oriwn pinaka h <results>
                                //VAZW anti tou origins.lenegth to p enw stis metriseis OLES!!!!!!
                                var destinationList = response.destinationAddresses;            
                                for (var i = 0; i < p; i++) {
                                  var results00 = response.rows[i].elements;
                                  console.log(results00.length);
                                  for (var j = 0; j < results00.length; j++) {
                                        //sto copy results1 tou i kataxwreitai
                                        //console.log(j);
                                        //console.log(results[j].distance.text);
                                        copyresults11[i] = results00[j].distance.text;
                                        copyresults11[i] = copyresults11[i].toString().split(' ', 1)[j];
                                  }
                           
                                }
                                  for (a=0; a<p; a++){
                                      copyresults11[a] = parseFloat(copyresults11[a].replace(",", "."));
                                      console.log("xa "+copyresults11[a]);
                                }
                                  
                                  
                                  var min1 = 9999999999;
                                for(var a = 0; a < p; a++){
                                    //console.log('a  ' + a);
                                    for (var k = 0; k < p; k++){
                                       // console.log('k ' + k + ' cp ' + copyresults1[k] + ' min1 '+ min1);
                                        
                                        if (copyresults11[k] < min1){
                                            min1=copyresults11[k];
                                            min=k;
                                        }
                                    }
                                    if (a==0){
                                        kms_delivera=min1;
                                    }
                                    copyresults11[min]=99999999999;
                                    min_j1[a]=min;
                                    min1 = 9999999999;
                                }
                                  for (a=0; a<p; a++){
                                      console.log("deliverades "+min_j1[a]);
                                  }
                                  final_kms=parseFloat(results11)+parseFloat(kms_delivera);
                                  console.log("telos " + deliver_positions[min_j1[0]+12]+"telos " + final_kms);
                                  //console.log(results[y]+" "+ kms_delivera +" "+ "------++--"+final_kms);
                                  now_post(deliver_positions[min_j1[0]+12], suitable_shop, ret, final_kms, total_price, toaddress);
                                /* First suitable deliver */
                                 // deliver_positions[min_j1[0]];
                           
                                //

                              }

                            });
                        /****************************/  
                        });
                   
                }
            }
            function now_post(suitabledeliver, suitableshop, orderdetails, finalkms, price_total, toaddress){
                console.log("-----------------------------");
                console.log(suitabledeliver);
                console.log(suitableshop);
                console.log(orderdetails);
                price_total=Number((price_total).toFixed(2));
                console.log(price_total);
                finalkms=parseFloat(finalkms.toFixed(2));
                console.log(finalkms);
                console.log(k);
                console.log("dief8insi "+toaddress);
                $.post('final_post.php', {order_details: orderdetails, suitable_shop: suitableshop, suitable_deliver: suitabledeliver, kms_final: finalkms, total_price: price_total, k: k, toaddress: toaddress}, function(data) {
                    console.log("-----------------------------");
                    console.log(data);
                    if ( (data=="111") || (data=="111111") ){
                        window.location.replace('regsucc.php');
                    }
                    else{
                        window.location.replace('regfail.php');
                    }
                });
            }  
            
            
            //console.log(Math.floor(ret/divv));
            //console.log(ret%divv);
            /*a=0;
            for (i = 0; i < k ; i++){
                sum = sum + quantityprod[i] * Math.pow(10, 2*k-a-1) + product[i] * Math.pow(10, 2*k-a-2);
                a+=2;
            }*/
            
            $('.street').val('');
            $('.street_error').html("");
            
        }
        else{
            $('.street_error').html('Αυτό το πεδίο είναι απαραίτητο');
        }
        
        
        
        
        
        
    });

    $('.popupCloseButton2').click(function(){
        $('.order_input').hide();
    });


    $(".coffee").click(function(){
       $('.coffee_input').show();
    });

    $('.popupCloseButton').click(function(){
        $('.coffee_input').hide();
        $('.quantity').val('');
        $('.quantity1').val('');
        $('.quantity2').val('');
        $('.quantity3').val('');
        $('.quantity4').val('');
        $('.quantity5').val('');
        $('.quantity6').val('');
        $('.quantity7').val('');
        $('.quantity8').val('');
        $('.quantity9').val('');
    });
    $(".food").click(function(){
       $('.food_input').show();
    });
    //$('.food_input').click(function(){
       // $('.food_input').hide();
   // });
    $('.popupCloseButton1').click(function(){
        $('.food_input').hide();
        $('.quantity').val('');
        $('.quantity1').val('');
        $('.quantity2').val('');
        $('.quantity3').val('');
        $('.quantity4').val('');
        $('.quantity5').val('');
        $('.quantity6').val('');
        $('.quantity7').val('');
        $('.quantity8').val('');
        $('.quantity9').val('');
    });

});

