// 1. Tipizzazione Statica
// La tipizzazione statica permette di dichiarare esplicitamente i tipi delle variabili, funzioni e oggetti, migliorando la sicurezza del codice e facilitando l'autocompletamento.
let nome: string = "Mario";
let età: number = 30;


// 2. Interfacce
// Le interfacce definiscono la struttura degli oggetti, consentendo di specificare le proprietà e i metodi che un oggetto deve avere.
interface Persona {
    nome: string;
    età: number;
    haFigli: boolean;
}

let me: Persona = { nome: "Fabio", età: 39, haFigli: false };


// Estensione delle Interfacce
// Le interfacce possono essere estese per includere altre proprietà o metodi.
interface Lavoratore extends Persona {
    work: string;
}

let io: Lavoratore = { nome: "Fabio", età: 40, haFigli: true, work: "Sviluppatore Web" };
console.log(io);


// 3. Tipi Personalizzati
// I tipi personalizzati permettono di definire la forma di oggetti complessi con il costrutto type.
type Libro = {
    titolo: string;
    autore: string;
    annoPubblicazione: number;
    disponibileInEbook: boolean;
};

let LibroPreferito: Libro = {
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    annoPubblicazione: 1980,
    disponibileInEbook: true
};

console.log(LibroPreferito);


// 4. Enumeratori (Enum)
// Gli enumeratori forniscono un modo per definire insiemi di costanti con nomi descrittivi, migliorando la leggibilità e la manutenzione del codice.

// Esempio: Bussola
enum Bussola {
    Nord,
    Sud,
    Ovest,
    Est
}

console.log(Bussola[0]); // Output: "Nord"

// Esempio: Numeri
enum Numeri {
    Primo = 1,
    Secondo = 2,
    Terzo = 3,
    Quarto = 4
}

console.log(Numeri[1]); // Output: "Primo"


// 5. Utility Types

// Partial
// L'utility Partial rende tutte le proprietà di un tipo opzionali.
let mioNome: Partial<Persona> = { nome: "Fabio" };
let anni: Partial<Persona> = { età: 39 };
let figli: Partial<Persona> = { haFigli: false };

// Readonly
// L'utility Readonly rende tutte le proprietà di un tipo immutabili.
interface Residenza {
    paese: string;
    regione: string;
    provincia: string;
    citta: string;
    CAP: number;
}

let casaMia: Readonly<Residenza> = {
    paese: "Italia",
    regione: "Puglia",
    provincia: "BT",
    citta: "Bisceglie",
    CAP: 76011
};

// Pick
// L'utility Pick consente di selezionare un sottoinsieme di proprietà di un tipo.
interface TV {
    produttore: string;
    modello: number;
    risoluzione: string;
    pannello: string;
}

let miaTv: Pick<TV, "produttore" | "risoluzione"> = { produttore: "Samsung", risoluzione: "1080p" };

// Omit
// L'utility Omit consente di escludere alcune proprietà di un tipo.
interface Car {
    produttore: string;
    modello: number;
    tecnologia: string;
}

let miaMacchina: Omit<Car, "tecnologia"> = { produttore: "Tesla", modello: 2023 };


// 6. Classi
// Le classi in TypeScript seguono una sintassi moderna e supportano modificatori di accesso come public, private, e protected.
class Film {
    titolo: string;
    regia: string;
    anno: number;
    alCinema: boolean;

    constructor(titolo: string, regia: string, anno: number, alCinema: boolean) {
        this.titolo = titolo;
        this.regia = regia;
        this.anno = anno;
        this.alCinema = alCinema;
    }
}

let filmPreferito = new Film("Nuovo cinema paradiso", "Giuseppe Tornatore", 1988, false);

// A proposito di classi, possono essere "public" (di default sono tali), "private" e "protected".
// Public
class Automobile {
    public marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    public accendi(): void {
        console.log(`${this.marca} è stata accesa.`);
    }
}

let auto = new Automobile("Toyota");
auto.accendi(); // Output: Toyota è stata accesa.

// Private
class ContoBancario {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    public deposita(importo: number): void {
        this.saldo += importo;
        console.log(`Deposito di ${importo} effettuato. Saldo attuale: ${this.saldo}`);
    }

    private calcolaInteresse(): number {
        return this.saldo * 0.05;
    }
}

let conto = new ContoBancario(1000);
conto.deposita(500); // Output: Deposito di 500 effettuato. Saldo attuale: 1500
// conto.calcolaInteresse(); // Errore: 'calcolaInteresse' è privato e non accessibile dall'esterno della classe.

// Protected
class Dipendente {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Manager extends Dipendente {
    public salutaDipendente(): void {
        console.log(`Ciao ${this.nome}, benvenuto a bordo!`);
    }
}

let manager = new Manager("Luca");
// manager.nome; // Errore: 'nome' è protetto e non accessibile dall'esterno della classe o di una sua sottoclasse.
manager.salutaDipendente(); // Output: Ciao Luca, benvenuto a bordo!


// 7. Funzioni
//Le funzioni in TypeScript possono beneficiare della tipizzazione per i parametri e i valori di ritorno.

// Funzione per Calcolare il BMI
function calcolaBMI(peso: number, altezza: number): number {
    return peso / (altezza * altezza);
}

let peso: number = 70;
let altezza: number = 1.75;
let bmi: number = calcolaBMI(peso, altezza);

if (bmi > 25) {
    console.log(`Sei in sovrappeso`);
} else {
    console.log(`Non sei in sovrappeso`);
}


// 8. Tuple
// Le tuple permettono di definire array con un numero fisso di elementi di tipi specifici.
let film: [string, number, boolean] = ["Taxi Driver", 120, false];
let [titolo, durata, streaming] = film;
console.log(`${titolo}, che dura ${durata} minuti, ${streaming ? "è disponibile su Netflix" : "non è disponibile su Netflix"}`);


// 9. Classi Astratte
// Le classi astratte sono utilizzate come classi base da cui altre classi possono derivare, ma non possono essere istanziate direttamente.
abstract class Veicolo {
    abstract numeroRuote: number;
    abstract tipoCarburante: string;

    descrizione(): void {
        console.log(`Questo veicolo ha ${this.numeroRuote} ruote e utilizza ${this.tipoCarburante} come carburante.`);
    }

    abstract accelera(): void;
}

class Auto extends Veicolo {
    numeroRuote = 4;
    tipoCarburante = "benzina";

    accelera(): void {
        console.log("L'auto accelera rapidamente.");
    }
}

class Moto extends Veicolo {
    numeroRuote = 2;
    tipoCarburante = "diesel";

    accelera(): void {
        console.log("La moto accelera con grande velocità.");
    }
}

let miaAuto = new Auto();
miaAuto.descrizione();  // Output: Questo veicolo ha 4 ruote e utilizza benzina come carburante.
miaAuto.accelera();     // Output: L'auto accelera rapidamente.

let miaMoto = new Moto();
miaMoto.descrizione();  // Output: Questo veicolo ha 2 ruote e utilizza diesel come carburante.
miaMoto.accelera();     // Output: La moto accelera con grande velocità.


// 10. Record
// Il tipo Record permette di creare un tipo oggetto con una serie di chiavi di tipo stringa e un tipo di valore specificato.
type MembroFamiglia = "Nicola" | "Anna" | "Angelo" | "Fabio";

interface InfoFamiglia {
    ruolo: string;
    anni: number;
}

const Famiglia: Record<MembroFamiglia, InfoFamiglia> = {
    Nicola: { ruolo: "padre", anni: 67 },
    Anna: { ruolo: "madre", anni: 74 },
    Angelo: { ruolo: "figlio", anni: 43 },
    Fabio: { ruolo: "figlio", anni: 39 }
};

console.log(Famiglia.Fabio);
