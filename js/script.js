// collego il file js.
console.log('JS OK');

// chiedo nome e cognome utente.

const nome = document.getElementById('nomeInput').value.trim();
const cognome = document.getElementById('cognomeInput').value.trim();
    
//  Chiedo quanti km vuole percorrere e quanti anni ha.

const km = parseFloat(document.getElementById('kmInput').value);
const eta = parseInt(document.getElementById('etaInput').value);
  
// Controllo se l'utente ha inserito i dati correttamente
if (nome.length < 3 || cognome.length < 3) {
    alert('Inserisci un nome e un cognome validi (almeno 3 caratteri).');
     return;
}
if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
     alert('Inserisci valori validi per i chilometri e l\'età.');
     return;
}
