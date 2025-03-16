async function obtenerName(){
    try {
        const getData = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await getData.json();
        const name = json.map(show => show.name);

        console.log(name);
        return name;

        }catch (error){
            console.log("Ha ocurrido un error", error.message);
        }
    }
obtenerName();