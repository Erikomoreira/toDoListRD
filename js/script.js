let btnAddTask = document.getElementById("adicionar-tarefa");
console.log(btnAddTask);
let tarefas = document.querySelector("#tarefas");
let inpuTarefa = document.querySelector("#tarefa-digitada")
let finalizarTarefa = document.querySelector(".botao-tarefa");


finalizarTarefa.onclick = function (event) {

    remove(event.target[0]);

}

btnAddTask.onclick = function () {

    let valorDigitado = inpuTarefa.value;

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


    tarefas.innerHTML += tarefaNova;

}


inpuTarefa.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {

        let valorDigitado = inpuTarefa.value;

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


        tarefas.innerHTML += tarefaNova;


    }
});


