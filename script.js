//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
//Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  'nome' : 'Andrea',
  'cognome' : 'Fedeli',
  'eta' : '38'
}

for(var k in studente){
  console.log(studente[k]);
}

//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
var studenti = [
  {
  'nome' : 'Luca',
  'cognome' : 'Rossi',
  'eta' : '29'

  },

  {
  'nome' : 'Marco',
  'cognome' : 'Verdi',
  'eta' : '27'

  },

  {
  'nome' : 'Paolo',
  'cognome' : 'Bianchi',
  'eta' : '32'

  }
];

for( var i=0; i< studenti.length; i++){
  console.log(studenti[i].nome + '' + studenti[i].cognome);

}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var eta = parseInt(prompt('Inserisci la tua età'));

var nuovoStudente = {
  'nome' : nome,
  'cognome' : cognome,
  'eta' : eta

};

studenti.push(nuovoStudente);
console.log(studenti);
