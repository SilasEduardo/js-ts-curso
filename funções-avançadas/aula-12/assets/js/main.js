function Calculadora(){
    this.display = document.querySelector('.display')
    this.inicia = () =>{
        this.capituraClicks();
    };

    this.capituraClicks = () => {
        addEventListener('click', (e)=>{
            let el = e.target

            if(el.classList.contains('btn-num')) this.adicionaNoDisplay(el.innerText);


            if(el.classList.contains('btn-clear')) this.limparDisplay();


            if(el.classList.contains('btn-del')) this.apagaDigito();


            if(el.classList.contains('btn-eq')) this.realizarConta();

           
        });
    };
    this.adicionaNoDisplay = (valor) => this.display.value += valor;

    this.limparDisplay = () => this.display.value = '';

    this.apagaDigito = () => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = () => {
        let conta = eval(this.display.value)
        try{
            if(!conta){
                alert('conta  invalida');
                return
            }
        this.display.value = conta
        }catch(e){ 
            console.log(e)

        }
    } 



    


    

}


const Calcular = new Calculadora();
Calcular.inicia();


