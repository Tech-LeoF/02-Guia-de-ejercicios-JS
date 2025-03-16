//Ejercicio 6.1: Crea una función esperarSegundos(segundos) que use setTimeout con async/await.

async function esperarSegundos(){
    console.log("Task 1")
    console.log("Task 2")
    await setTimeout(_ => {
        console.log("Task 3")
    }, 5000);
    console.log("Task 4")
}

esperarSegundos();