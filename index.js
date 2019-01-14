//Cuando pasemos el ratón sobre la imagen agrandaremos dicha imagen 
//Y cuando salgamos de la imagen con el ratón, devolveremos la imagen al tamaño original.

//lo que vamos a realizar es incrementar su tamaño, es decir, su atributo height. 
//Y justamente lo contrario cuando salgamos de la imagen

$(document).ready(function(){
    $("#logo").mouseover(function(){
        $(this).animate({height:'150px'});
    });
    $("#logo").mouseout(function(){
        $(this).animate({height:'50px'});
    });
})