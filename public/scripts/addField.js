//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {

    //Duplicar os campos. Que campos?
    const newFielsContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    //Pegar os campos. Que campos?

    const fields = newFielsContainer.querySelectorAll('input')

    // Para cada campo, limpar

    fields.forEach(function(field) {
        //Pegar o field do momento
        console.log(field)
        //Pega o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFielsContainer)

}