function liczenie(){
    var dzisiaj =new Date();
    var dzien=dzisiaj.getDate();
    var miesiac=dzisiaj.getMonth();
    var rok=dzisiaj.getFullYear();

    var godzina=dzisiaj.getHours();
    if(godzina<10)godzina="0"+godzina;
    var minuta=dzisiaj.getMinutes();
    var sekunda=dzisiaj.getSeconds();
    if(sekunda<10)sekunda="0"+sekunda;
    document.getElementById("timer").innerHTML=dzien+"/"+miesiac+"/"+rok+"--"+godzina+"/"+minuta+"/"+sekunda;

setTimeout("liczenie()",1000);
}