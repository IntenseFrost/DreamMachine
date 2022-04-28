let btnMenu = window.document.querySelector('button#btnMenu');

let interrupitor= 0;


function poeMenu(){

   if(interrupitor==0){
        let ativaMenu = window.document.querySelector('nav#navegacao');
        ativaMenu.className+=' ativo';
        interrupitor=1;
    }
    else{
        let ativaMenu = window.document.querySelector('nav#navegacao');
        ativaMenu.className='menu';
        interrupitor=0;
    }
}

btnMenu.addEventListener('click',poeMenu)