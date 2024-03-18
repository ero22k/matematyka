function losuj(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100);

    document.getElementById('l1').innerHTML = a;
    document.getElementById('l2').innerHTML = b;
    document.getElementById('wynik2').innerHTML="";
    document.getElementById('wynik').innerHTML="";
    
}
function sprawdzd(){
    c=document.getElementById("d").value;
    if(c==a+b){
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else if(c==""){
        document.getElementById('wynik').innerHTML = "PODAJ POPRAWNE DANE";
        document.getElementById('wynik2').innerHTML="";
    }
    else{
        document.getElementById('wynik').innerHTML = "ZLE";
        document.getElementById('wynik2').innerHTML="<img src='zle.png'>"
    }
    
}
function losuj2(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100 || a<b);

    document.getElementById('l1').innerHTML = a;
    document.getElementById('l2').innerHTML = b;
    document.getElementById('wynik2').innerHTML="";
    document.getElementById('wynik').innerHTML="";
    
}
function sprawdz2(){
    d=document.getElementById("pw").value;
    if(d==a-b){
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else if(d==""){
        document.getElementById('wynik').innerHTML = "PODAJ POPRAWNE DANE";
        document.getElementById('wynik2').innerHTML="";
    }
    else{
        document.getElementById('wynik').innerHTML = "ZLE";
        document.getElementById('wynik2').innerHTML="<img src='zle.png'>"
    }
    
}
function losuj3(){
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a % b != 0 || b > a || b == 0);

    document.getElementById('l1').innerHTML = a;
    document.getElementById('l2').innerHTML = b;
    document.getElementById('wynik2').innerHTML="";
    document.getElementById('wynik').innerHTML="";
    
}
function sprawdz3(){
    d=document.getElementById("pw").value;
    if(d==a/b){
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else if(d==""){
        document.getElementById('wynik').innerHTML = "PODAJ POPRAWNE DANE";
        document.getElementById('wynik2').innerHTML="";
    }
    else{
        document.getElementById('wynik').innerHTML = "ZLE";
        document.getElementById('wynik2').innerHTML="<img src='zle.png'>"
    }
    
}
function losuj4() {
    do{
        a=Math.floor(Math.random()*101);
        b=Math.floor(Math.random()*101);
    }
    while(a+b>100);

    document.getElementById('l1').innerHTML = a;
    document.getElementById('l2').innerHTML = b;
    document.getElementById('wynik2').innerHTML="";
    document.getElementById('wynik').innerHTML="";
    
}
function sprawdz4() {
     r = document.getElementById("r").checked;
     w = document.getElementById("wi").checked;
     m = document.getElementById("m").checked;
    if (r == false && w == false && m == false) {
        document.getElementById('wynik').innerHTML = "PODAJ POPRAWNE DANE";
        document.getElementById('wynik2').innerHTML="";
    }
    else if (a == b && r == true) {
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else if (a > b && w == true) {
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else if (a < b && m == true) {
        document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
    }
    else {
        document.getElementById('wynik').innerHTML = "ZLE";
        document.getElementById('wynik2').innerHTML="<img src='zle.png'>"
    }
}
function losuj5() {
    do{
        a=Math.floor(Math.random()*11);
        b=Math.floor(Math.random()*11);
    }
    while(a*b>100);

    document.getElementById('l1').innerHTML = a;
    document.getElementById('l2').innerHTML = b;
    document.getElementById('wynik2').innerHTML="";
    document.getElementById('wynik').innerHTML="";
    
}
function sprawdz5() {
    w = document.getElementById("m").value;
   if(w==""){
    document.getElementById('wynik').innerHTML = "PODAJ POPRAWNE DANE";
    document.getElementById('wynik2').innerHTML="";
   }
   else if(a*b==w){
    document.getElementById('wynik').innerHTML = "DOBRZE!";
        document.getElementById('wynik2').innerHTML="<img src='dobrze.png'>"
   }
   else {
    document.getElementById('wynik').innerHTML = "ZLE";
    document.getElementById('wynik2').innerHTML="<img src='zle.png'>"
   }
}
