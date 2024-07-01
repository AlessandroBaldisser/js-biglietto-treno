// chiedo al cliente quanti km vuole percorrere e l'età
let kmDaPercorrere = prompt("Inserire il numero di km da percorrere");
let etaCliente = prompt("Inserisci la tua età: ");
//calcolo il prezzo del biglietto
let prezzoBiglietto = kmDaPercorrere * 0.21;

console.log("Prezzo biglietto " + prezzoBiglietto + "$");

// se il cliente è minorenne ha uno sconto del 20% se invece è over 65 ha uno sconto del 40%
let prezzoBigliettoScontato = document.getElementById("prezzoScontato")

if (etaCliente < 18){
    let sconto = prezzoBiglietto * 0.2;
    prezzoBigliettoScontato.innerHTML = prezzoBiglietto - sconto;
}   else if(etaCliente >= 65){
    let sconto = prezzoBiglietto * 0.4;
    prezzoBigliettoScontato.innerHTML = prezzoBiglietto - sconto;
}
