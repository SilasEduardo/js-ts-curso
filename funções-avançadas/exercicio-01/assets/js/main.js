function CreateCalculator() {
    this.display = document.querySelector('.display')
    this.init = () =>{
       this.btnCreate()
    };

    this.btnCreate = () =>{
        document.addEventListener('click', (e)=>{
            let el = e.target
            if(el.classList.contains('btn-num')){
                this.btnDisplay(el.innerText)
            };

            if(el.classList.contains('btn-clear')){
                this.btnClear()
            };

            if(el.classList.contains('btn-del')){
                this.btnResetOne()
            };

            if(el.classList.contains('btn-eq')){
                this.calculate()
            };
        });  
    };

    this.btnDisplay = ( value) => {
        this.display.value += value
    };
    this.btnClear = () =>{
        this.display.value = ''
    };
    this.btnResetOne = () =>{
        this.display.value = this.display.value.slice(0, -1);
    };
    this.calculate = () =>{
       let cal =  eval(this.display.value);

       try{
        if(!cal){
            alert('Conta invalida!')
            return;
           }
           this.display.value = cal;

       }catch(e){
        alert('Conta invalida! \n', e)
       }
       
    }
}


const calculator = new CreateCalculator()

calculator.init()