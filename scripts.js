//FUNÇÃO DE CLICAR E ABRIR MODAL

const modal_overlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for(let card of cards){
    card.addEventListener("click", function() {
        let id = card.getAttribute("id")
        modal_overlay.classList.add("active")
        modal_overlay.querySelector("iframe").src =`${id}`
    })  
} 
const close_modal= document.querySelector(".close_modal")

close_modal.addEventListener("click", function(){
    modal_overlay.classList.remove("active")
    modal_overlay.querySelector("a").src = "" 
})

//HEADER SELECIONADO COM ESTILO DIFERENTE
const current_page = window.location.pathname
const menu_items = window.document.querySelectorAll(" #active ")

for( let item of menu_items){
    if(current_page.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}


