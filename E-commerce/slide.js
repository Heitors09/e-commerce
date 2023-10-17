const radio = document.querySelector('.manual-btn')
const cont = 1
//pega o elemento radio 1 e diz que ele já vai estar marcado ao site ser carregado(checked = true)
document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 5000)
//metodo ser interval criou uma arrow function nextImg()
//determinou 5000(5s) como intervalo de passagem

//criando a função dentro da arrow function, passador de imagem adicionando valor a variavel
//cont e voltando ao inicio quando ela for maior que 3
function nextImg(){
      cont ++
      if(cont>3){
        cont = 1
      }
    
  document.getElementById('radio'+cont).checked = true
}