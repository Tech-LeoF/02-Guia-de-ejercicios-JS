//El error es la variable "tareas", la cual no está definida.

try {
    let saludo = "Hola";
    let Name = "Leonardo";
    let complement = "¿cómo estas?";

    console.log(`${saludo} ${Name}, ${complement}, ${tareas}`);
} catch (error) {
    console.log("Se produjo un pequeño error:",error.message);
}finally{
    console.log("Que pasó Master 🥴");
};