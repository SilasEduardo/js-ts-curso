function createCalculator(){
    return{
        display: document.querySelector('.display'),
        init(){
            this.btnCreate();
        },
        btnCreate(){
            document.addEventListener('click', (e)=>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btndisplay(el.innerText);
                }; 

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }; 

                if(el.classList.contains('btn-del')){
                    this.dellItem()
                };

                if(el.classList.contains('btn-eq')){
                    this.calculate()
                };   
            });
        },
        btndisplay(value){
            this.display.value += value;
        },

        clearDisplay(){
            this.display.value = '';
        },

        dellItem(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate(){
            let sing = this.display.value;
            try{
                sing = eval(sing)
            if(!sing){
                alert('Conta Invalida!')
                return
            }
             this.display.value = sing;
            }catch(e){
                alert('Conta Invalida!', e);
            }
        }
    }

}

const calculator = createCalculator()

calculator.init()