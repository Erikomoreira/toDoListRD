let btnAddTask = document.getElementById("adicionar-tarefa");
let tarefas = document.querySelector("#tarefas");
let inpuTarefa = document.querySelector("#tarefa-digitada")
let listaTarefas = localStorage.getItem('listaTarefas') ? JSON.parse(localStorage.getItem('listaTarefas')) : [];

const salvarLocalStorage = (listaTarefas) => {
    let tarefasEmJson = JSON.stringify(listaTarefas);
    localStorage.setItem('listaTarefas', tarefasEmJson);
    console.log("Lista de tarefas salva com sucesso")
}

const mostrarNaTela = (listaTarefas) => {

    listaTarefas.forEach((textoTarefa, item) => {

        let tarefaNova = ` <div class="col-md-4">

            <div class="card-tarefa">
                <div class="texto-tarefa">
                ${textoTarefa}
                </div>
                <div class="botao-tarefa">
                    <img width="32px" src="img/check.png" alt="Botão para finalizar tarefa"
                        title="Botão para finalizar tarefa">
                </div>
            </div>
            </div> `

            tarefas.insertAdjacentHTML('beforeend', tarefaNova)
            let objTarefaNova = tarefas.lastElementChild.lastElementChild.lastElementChild;
            objTarefaNova.onclick = (event) => {

                event.target.parentNode.parentNode.parentNode.remove();
                listaTarefas =  listaTarefas.filter((valor, index) => valor != textoTarefa)
                    salvarLocalStorage(listaTarefas);
            }
    });

}

mostrarNaTela(listaTarefas);

const criarTarefaComEnter = (event) => {

    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inpuTarefa.value;

        if (valorDigitado == "") {

            return alert("Você deve digitar uma tarefa primeiro");

        } else {

            listaTarefas.push(valorDigitado);
            salvarLocalStorage(listaTarefas);

            inpuTarefa.value = "";

            let tarefaNova = ` <div class="col-md-4">

            <div class="card-tarefa">
                <div class="texto-tarefa">
                ${valorDigitado}
                </div>
                <div class="botao-tarefa">
                    <img width="32px" src="img/check.png" alt="Botão para finalizar tarefa"
                        title="Botão para finalizar tarefa">
                </div>
            </div>

            </div> `;

            tarefas.insertAdjacentHTML('beforeend', tarefaNova)

            let objTarefaNova = tarefas.lastElementChild.lastElementChild.lastElementChild;

            objTarefaNova.onclick = (event) => {

                event.target.parentNode.parentNode.parentNode.remove();
                listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)
                    salvarLocalStorage(listaTarefas);
                }
                    
            }
        }

}

inpuTarefa.addEventListener("keypress", criarTarefaComEnter)
btnAddTask.addEventListener("click", criarTarefaComEnter)

