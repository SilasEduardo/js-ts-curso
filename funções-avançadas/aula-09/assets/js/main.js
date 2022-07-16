function criaCalculadora(){
    return{

        display: document.querySelector('.display'),




        inicia(){
            this.clickBotoes();
        },

        clickBotoes() {
            document.addEventListener('click', (e)=>{
                const el = e.target;


                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

            });
        },
        btnParaDisplay(value){
            console.log(value)
        }
    };
}
const calculadora = criaCalculadora()

calculadora.inicia();