// IIFE -> immediately invoked  função espression


(()=>{
    const sobreNome = 'Eduardo';
    function criarNome(nome){
        return nome + ' ' + sobreNome
    }
    function falaNome(){
        console.log(criarNome('Silas'))
    }

    falaNome()
})()