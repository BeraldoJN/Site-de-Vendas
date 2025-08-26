function next(){ //carrosel
    document.getElementById('prev').hidden = true; //esconde a imagem principal
    document.getElementById('next').hidden = false; //mostra a secunda imagem
    
}

function prev(){
    document.getElementById('next').hidden = true; //mostra a primeira imagem
    document.getElementById('prev').hidden = false; //esconde a primeira imagem
}

setInterval(next, 15000);
setInterval(prev, 30000)

