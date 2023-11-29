function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listaDeTeclas = document.querySelectorAll(".tecla");
if (elemento && elemento.localName === 'audio') {
    elemento.play();
}else{
    console.log("Elemento não encontrado ou seletor inválido");
}




/*function tocaSom(idElementoAudio){

    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}*/




for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if (evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    
}



















   














































/*function tocaSomVaia(){
        document.querySelector("#som_tecla_vaia").play();
        }*/
    


//listaDeTeclas[1].onclick = tocaSomVaia; 


















//listaDeTeclas[1].onclick = tocaSomVaia;



/*function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
    }*/