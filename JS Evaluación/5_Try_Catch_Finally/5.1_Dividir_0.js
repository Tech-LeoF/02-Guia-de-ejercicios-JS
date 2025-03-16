try {
    function dividir(a,b){

        if( b === 0){
            throw new Error("No se puede dividir por 0")
        }else{
            console.log(a/b)
        }
    }
    dividir(10,0)
} catch (error) {
    console.log("Error; se intento dividir por 0")
}