var emberek = [];
var beoltott = [];
function Ember(nev,kategoria,szulev,van){
    this.nev=nev;
    this.kategoria=kategoria;
    this.szulev=szulev;
    this.van=van;
}
function felvesz(){
    var nev = document.getElementById("nev").value;
    var kategoria = document.getElementById("kategoria").value;
    var szulev = parseInt(document.getElementById("szulev").value);
    var van = document.getElementById("van").checked;
    var hiba = document.getElementById("hiba");
    var jo = true;

    if (nev==""){
        jo=false;
        hiba.innerHTML="Nem adtad meg a nevet"
    }

    if (kategoria=="") {
        kategoria="nincs";
    }

    if (jo) {
        var ember = new Ember(nev,kategoria,szulev,van);
        emberek.push(ember);
        kiir();
    }
}
    function kiir(){
        var ki = document.getElementById("kimenet");
        ki.innerHTML="";
        var tablazat = document.createElement("table")
        for (let i = 0; i<emberek.length;i++){
            var ember = emberek[i];
            var sor = document.createElement("tr")
            var cella = document.createElement("td")
            cella.innerHTML=ember.nev;
            sor.appendChild(cella);
            var cella = document.createElement("td")
            cella.innerHTML=ember.kategoria;
            sor.appendChild(cella);
            var cella = document.createElement("td")
            cella.innerHTML=ember.szulev;
            sor.appendChild(cella);
            sor.onclick=function(){atrak(i)};
            tablazat.appendChild(sor);
            }
        ki.appendChild(tablazat);
    }
    function atrak(id){
        ember=emberek[id];
        beoltott.push(ember);
        emberek.splice(id,1);
        kiir();
        elkiir();
    }
    function elkiir(){
        var el = document.getElementById("el");
        el.innerHTML="";
        var tablazat = document.createElement("table");
        for (var i = 0; i<beoltott.length; i++){
            var ember=beoltott[i];
            var sor = document.createElement("tr")
            var cella = document.createElement("td")
            cella.innerHTML=ember.nev;
            sor.appendChild(cella);
            var cella = document.createElement("td");
            cella.innerHTML=ember.kategoria;
            sor.appendChild(cella);
            var cella = document.createElement("td");
            cella.innerHTML=ember.szulev;
            sor.appendChild(cella);
            tablazat.appendChild(sor);
            
            }
        el.appendChild(tablazat);
    }