const buttonsShowModal = document.querySelectorAll(".button-control-modal")

Array.from(buttonsShowModal).map((buttonShowModal)=>{
    buttonShowModal.addEventListener("click", ()=>{
        let modalId = buttonShowModal.getAttribute("data-control-modal")
        document.getElementById(modalId).classList.toggle("show-modal")
    })
})