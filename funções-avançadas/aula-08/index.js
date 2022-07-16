
// Factory funtion 
function criaPessoa(nome, sobreNome, altura, peso){
    return {
        nome,
        sobreNome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobreNome}`
        },

        // setter
        set nomeCompleto(value){
            value = value.split(' ');
            this.nome = value.shift();
            this.sobreNome = value.join(' ')
            
        },
        fala(assunto){
            return `${this.nome} está ${assunto}` 
        },

        altura,

        peso,

        get imc(){ // get tranforma uma função em atributo Getter
            const indece = this.peso / (this.altura ** 2);
            return indece.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Silas', 'Otavio', 1.80, 80);




p1.nomeCompleto = 'Silas Eduardo de Paula'

console.log(p1.nomeCompleto)