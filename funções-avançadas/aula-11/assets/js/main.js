function CreateCalculator() {
    let display = document.querySelector('.display')
       this.init=()=>{
        this.createBtn()
       }
        


    this.createBtn=()=>{
        document.addEventListener('click', (e)=>{
            let el = e.target
            if(el.classList.contains('btn-num')){
                this.displayBtn(el.innerText)
            };
            if(el.classList.contains('btn-clear')){
                this.clearBtn();
            };

            if(el.classList.contains('btn-del')){
                this.dellBtn();
            }


            if(el.classList.contains('btn-eq')){
                this.calculate();
            }

           
        })
    }
    this.displayBtn=(value)=>{
        display.value += value;
    }
    this.clearBtn=()=>{
        display.value = '';
    }
    this.dellBtn=()=>{
        display.value = display.value.slice(0, -1);
    };

    this.calculate=()=>{
        let calculate = eval(display.value)
        try{
            if(!calculate){
                alert('Conta Invalida!');
                return;
            }
            display.value = calculate

        }catch(e){
            alert('Conta Invalida!', e);
        }
    }
}
const calculator = new CreateCalculator()

calculator.init()

 