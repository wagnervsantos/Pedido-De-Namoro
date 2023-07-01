function meuBotao() {
  var janela = document.getElementById("janela");
  janela.classList.add('abrir')

  janela.addEventListener('click', (e) =>{
    if(e.target.id == 'fechar'|| e.target.id == 'janela'){
      janela.classList.remove('abrir')
    }
  })
}

function desvia(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(20, 80);
  btn.style.left = geraPosicao(20, 80);
  console.log('opa')
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";

}