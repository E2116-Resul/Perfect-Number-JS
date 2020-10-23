document.querySelector("#checkButton").addEventListener("click", perfectNumber);
function perfectNumber(){
    var count = 0;
    const number = document.getElementById("numberPreCheck").value;
    if(number<1){
        return alert("Değer gir")
    }
    for(var i=1; i<number; i++) {
        if(number%i==0){
            count = count+i;
        }
    }
    if(count==number){
        alert("It is a perfect number")
    }
    else{
        alert("It is a not perfect number")
    }
};