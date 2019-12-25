var year = document.getElementById("year");
var month = document.getElementById("month");
var scriptsalary = document.forms.contact;
var erroryear, errormonth;

year.onblur = function(){
    if (year.value < 2018){
        year.style.border="2px solid red";
        erroryear = true;
    }
    else{
        year.style.removeProperty('border');
        erroryear = false;
    }
}

month.onblur = function(){
    if ((month.value < 1) || (month.value > 12)){
        month.style.border="2px solid red";
        errormonth = true;
    }
    else{
        month.style.removeProperty('border');
        errormonth = false;
    }
}


scriptsalary.onsubmit = function(){
    if ((errormonth == false) && (erroryear == false)){
        
    }
    else{
        return false;
    }
}

