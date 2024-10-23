const letrasMaiuscula="ABCDEFGHIJKLMNOPQRSTUVXWYZ";
const letrasMinuscula="abcdefghijklmnopqrstuvxwyz";
const numerosString="1234567890";
const caracteresEspeciais="!@#$%&*()-_=+[]{}|;:,.<>?/";


function capturarValores(){
    const qtdCaracteres=parseInt(document.getElementById('qtdCaracteres').value);
    const caracMaiusculo=document.getElementById('caracMaiusculo').value.toLowerCase()==='s';
    const caracMinusculo=document.getElementById('caracMinusculo').value.toLowerCase()==='s';
    const usarNumeros=document.getElementById('numeros').value.toLowerCase()==='s';
    const caracEspeciais=document.getElementById('caracEspeciais').value.toLowerCase()==='s';

    console.log(qtdCaracteres);
    console.log(caracMaiusculo);
    console.log(caracMinusculo);
    console.log(numeros);
    console.log(caracEspeciais);

    let caracteresPossiveis='';

    if(qtdCaracteres<=5){
        alert('A senha precisa ter mais que cinco caracteres');
        return;
    }
    let senha="";
    if(caracMaiusculo){
        senha+=letrasMaiuscula.charAt(Math.floor(Math.random()*letrasMaiuscula.length));
        caracteresPossiveis+=letrasMaiuscula;
    }
    if(caracMinusculo){
        senha+=letrasMinuscula.charAt(Math.floor(Math.random()*letrasMinuscula.length));
        caracteresPossiveis+=letrasMinuscula;
    }
    if(usarNumeros){
        senha+=numerosString.charAt(Math.floor(Math.random()*numerosString.length));
        caracteresPossiveis+=numerosString;
    }
    if(caracEspeciais){
        senha+=caracteresEspeciais.charAt(Math.floor(Math.random()*caracteresEspeciais.length));
        caracteresPossiveis+=caracEspeciais;
    }


    for(let i=senha.length;i<qtdCaracteres;i++){
        const indexAleatorio =Math.floor(Math.random()*caracteresPossiveis.length);
        senha+=caracteresPossiveis.charAt(indexAleatorio);
    }

    const senhaElemento = document.createElement("div");
    senhaElemento.textContent = "Senha gerada: " + senha;

    const h2 = document.querySelector("h2");
    h2.innerHTML="";
    h2.appendChild(senhaElemento)
}
