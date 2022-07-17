function criaCalculadora(){
    return{

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.clickBotoes();
            this.precionaEnter();
        },
        precionaEnter(){
            document.addEventListener('keyup', (e)=>{
                if(e.key === 'Enter'){
                    this.realizaConta()
                }
            })
        },

        crearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta Invalida');
                    return
                }
                this.display.value = conta;
            }catch(e){
                alert('Conta Invalida')
                console.log(e)
            }
        },



        clickBotoes() {
            document.addEventListener('click', (e)=>{
                const el = e.target;


                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')){
                    this.crearDisplay()
                };

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                };

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                };

            });
        },
        btnParaDisplay(value){
            this.display.value += value;
            
        },
    };
}
const calculadora = criaCalculadora()

calculadora.inicia();