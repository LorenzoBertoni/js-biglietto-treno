const chilometri = parseInt(prompt('Inserisci i chilometri che vorresti percorrere'));
let prezzo = chilometri * 0.21;

const eta = parseInt(prompt('Inserisci la tua età'));
if (eta < 18) {
    prezzo = ((prezzo * 20) / 100);
    alert('Hai diritto al 20% di sconto!')
    alert(`Il prezzo del tuo biglietto è di ${prezzo.toFixed(2)} Euro`);
} else if (eta > 65) {
    prezzo = ((prezzo * 40) / 100);
    alert('Hai diritto al 40% di sconto!')
    alert(`Il prezzo del tuo biglietto è di ${prezzo.toFixed(2)} Euro`);
} else {
    prezzo = prezzo;
    alert(`Il prezzo del tuo biglietto è di ${prezzo.toFixed(2)} Euro`);
}

