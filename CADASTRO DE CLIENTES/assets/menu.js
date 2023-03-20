let tela = document.querySelector('.header-actived' , '.header-desabilitado')
let menuActived = document.querySelector('#menu-actived', '.header-actived')
let menuDisable = document.querySelector('#menu-disable')
let desabilitado = document.querySelector('.header-disable')


menuActived.addEventListener('click', menu_aberto)
menuDisable.addEventListener('click', menu_fechado)


/*abrir o menu*/
function menu_aberto(){
    tela.classList.add('header-desabilitado');
    tela.classList.remove('header-actived');
    tela.style.display = "none";
    desabilitado.style.display = "flex";
        
}

/*fechar o menu*/
function menu_fechado(){
    tela.classList.add('header-actived');  
    tela.classList.remove('header-desabilitado');
    tela.style.display = "";
    desabilitado.style.display = "none";
 
}


function selecionado(){
    document.getElementById('btn-home').style.backgroundColor = "#7396AA"
    document.getElementById('secao-formulario').style.display = ""
}


/*
function selecionado_garantia(){
    document.getElementById('btn-garantia').style.backgroundColor = "#7396AA"
    /*document.classList.toggle("tirar_selacao()");
}
*/
/*function tirar_selecao(){
    document.getElementById('btn-home').style.backgroundColor = "red"
}*/