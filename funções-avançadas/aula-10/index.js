// função construtora retorna -> objetos
// função frabica -> objetos
// construtora -> Pessoa(new)

function Pessoa(nome, sobrenome) {
    //=====Privados=====//
    const ID = 111111;
    const metodoInterno = () =>{
        console.log('dddd')
    };

    //==========Publicos===============//
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = (frase)=>{
        return frase; 
    }
}

const p1 = new Pessoa('Silas', 'Eduardo');

console.log(p1.nome)