async function usage(){
    try {
        const getAPI = await fetch("https://api.chucknorris.io/jokes/random");
        const jsonF = await getAPI.json();
        const showData = jsonF;
    
        console.log(showData);

        //Para ejecutar solo el chiste.
        console.log(showData.value);

        return showData;

    } catch (error) {
        console.log(`Ocurrió un error: ${error.message}`);
    };
};

usage();