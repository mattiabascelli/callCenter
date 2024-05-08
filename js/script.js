

var utente = prompt("inserisci il tuo nome");
var avviso = document.getElementById('avviso');
var avvisoAggiunto = document.getElementById('avviso2');
var appuntamenti = [];
var telefonate = [];
var tabellaTelefonate = document.getElementById('tabella');
var tabellaAppuntamenti = document.getElementById('tabella2');


//funzione che esegue il conteggio di 45 minuti (2700 secondi)
function messaggioMotivazionale() {

    while (utente === null || utente === "") {
        utente = prompt("inserisci il tuo nome");
    }

    avviso.innerHTML = 'Buon lavoro ' + utente + '! Che sia una giornata produttiva!';
    var counter = 1; //contatore inizia da 1
    var output = document.getElementById('counter');
    //funzione per aggiornare il numero e impostare il timeout per il prossimo aggiornamento
    function updateCounter() {
        counter++;//incrementiamo il nostro counter
        if (counter <= 60) {
            setTimeout(updateCounter, 1000);
        } else {
            //avviso nel H2 della pagina con class=blink per lampeggiare
            avviso.innerHTML = '<strong class="blink">' + utente + ' è ora di fare una pausa caffè!</strong><br /><br /><img src="img/caffettino.png" alt="caffettino.png" /><p>"Prenditi un momento per rilassarti! Un dipendente felice è un valore aggiunto alla nostra azienda!</p><br /><button type="button" onclick="messaggioMotivazionale()">Sono tornato</button>';
        }
    }
    //avviamo la funzione updateCounter
    updateCounter();

}
//avvia funzione per il conteggio

messaggioMotivazionale();







/**sezione Appuntamento */

function prenotaAppuntamento() {
    
    var dataAppuntamento = document.getElementById('data').value;
    var oraAppuntamento = document.getElementById('ora').value;


    var dataCompleta = dataAppuntamento + " " + oraAppuntamento;
    var motivoAppuntamento = document.getElementById('motivo').value;
    var operatore = document.getElementById('nominativo').value;
    

    appuntamenti.push({ "dataCompleta": dataCompleta, "nominativoOperatore": operatore, "motivo": motivoAppuntamento });


    // var arrayOrdinato = appuntamenti.sort((a, b) => { return new Date(a.dataCompleta) - new Date(b.dataCompleta) });
    // tabella2.innerHTML = "";

    // for (var i = 0; i < arrayOrdinato.length; i++){
    //     tabella2.innerHTML += "<tr><td>" + arrayOrdinato[i].dataCompleta + "</td><td>" + arrayOrdinato[i].nominativoOperatore + "</td><td>" + arrayOrdinato[i].motivo + "</td></tr>";
    // }
    mostraAppuntamenti();
  

    avviso2.innerHTML = '<strong class="blink">Hai un nuovo appuntamento a nome di ' + operatore + '</strong>';

    document.getElementById('data').value = "";
    document.getElementById('ora').value = "";
    document.getElementById('motivo').value = "";
    document.getElementById('nominativo').value = "";
    
}



function mostraAppuntamenti() {

    var arrayOrdinato = appuntamenti.sort((a, b) => { return new Date(a.dataCompleta) - new Date(b.dataCompleta) });
    tabellaAppuntamenti.innerHTML = "";

    for (var i = 0; i < arrayOrdinato.length; i++){
        tabellaAppuntamenti.innerHTML += "<tr><td>" + arrayOrdinato[i].dataCompleta + "</td><td>" + arrayOrdinato[i].nominativoOperatore + "</td><td>" + arrayOrdinato[i].motivo + "</td></tr>";
    }
    
}

function eliminaAppuntamento() {
    var arrayOrdinato = appuntamenti.sort((a, b) => { return new Date(a.dataCompleta) - new Date(b.dataCompleta) });

    arrayOrdinato.shift();

    mostraAppuntamenti();
}

function aggiungiChiamata() {

    var numeroTelefono = document.getElementById('numero').value;
    var nomeUtente = document.getElementById('nome').value;
    var data = document.getElementById('data2').value;
    var ora = document.getElementById('ora2').value;
    var nomeOperatore = document.getElementById('nomeO').value;

    var dataCompleta = data + " " + ora;

    telefonate.push({ "dataCompleta": dataCompleta, "nomeUtente": nomeUtente, "numeroTelefono": numeroTelefono, "nomeOperatore": nomeOperatore });

      

    mostraTelefonate();

    avviso2.innerHTML = '<strong class="blink">Hai una nuova chiamata a nome di ' + nomeUtente + '</strong>';
   
    document.getElementById('numero').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('data2').value = "";
    document.getElementById('ora2').value = "";
    document.getElementById('nomeO').value = "";  
}

function mostraTelefonate() {
    var arrayOrdinato = telefonate.sort((a, b) => { return new Date(a.dataCompleta) - new Date(b.dataCompleta) });
    tabella.innerHTML = "";

    for (var i = 0; i < arrayOrdinato.length; i++){
        tabella.innerHTML += "<tr><td>" + arrayOrdinato[i].dataCompleta + "</td><td>" + arrayOrdinato[i].nomeUtente + "</td><td>" + arrayOrdinato[i].numeroTelefono + "</td><td>"+ arrayOrdinato[i].nomeOperatore+"</td></tr>";
    }
}

function eliminaChiamata() {
    var arrayOrdinato = telefonate.sort((a, b) => { return new Date(a.dataCompleta) - new Date(b.dataCompleta) });
    arrayOrdinato.shift();
    mostraTelefonate();
}

