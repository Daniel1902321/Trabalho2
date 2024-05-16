let calculaSoma = document.querySelector("#calculaSoma") ;
let h2Titulo = document.querySelector("#h2Titulo") ;
let PNumero = document.querySelector("#PNumero") ;
let SNumero = document.querySelector("#SNumero") ;



function resultado(){
    let var1;
    let var2;
    var1=Number(PNumero.value);
    var2=Number(SNumero.value)

    h2Titulo.textContent=var1+var2;
}
calculaSoma.onclick = function(){
    resultado()
}
