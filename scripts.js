/* Logica de programação
    [x] Saber quando o usuario clicou no botão
    [x] Preciso mudar o posicionamento do modal
    [x] Fazer a máscara ficar visível
    [ ] Quando clicar na máscara, fechar o modal
*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarmodal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-100%'
    mascara.style.visibility = 'hidden'
}
