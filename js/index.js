let ilustracao = window.document.getElementById('ilustracaoBanner');

setInterval(function(){

    ilustracao.style.marginTop=(ilustracao.style.marginTop=="-1em"?"-.4em":"-1em");

},1000)



let div = document.getElementById('destaqueTitulo');
var textos = [' ', 'Vem ser grande com a DM', 'Vamos te dar uma forcinha com seu sonho', 'Você acabou de dar o primeiro passo', 'Nos acreditamos em você'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);






















