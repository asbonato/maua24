class Pato {
}
class PatoReal extends Pato{
}
class PatoDeCaca extends Pato{
}
class PatoDeBorracha extends Pato{
}

function test(): void {
    let pato: Pato = new Pato()
}

function qualPato(ocasiao: string): Pato | null{
    let pato: Pato | null = null
    if (ocasiao === "piquenique")
        pato = new PatoReal()
    else if (ocasiao === "caça")
        pato = new PatoDeCaca()
    else if (ocasiao === "banheira")
        pato = new PatoDeBorracha()
    return pato
}

let ocasioes: string[] = [
    "piquenique",
    "caça",
    "banheira"
]

//indexando ocasiões de 0 a 2
console.log(qualPato(ocasioes[Math.floor(Math.random()*3)]))