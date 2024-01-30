const titleElement = document.querySelector("#title");

titleElement.innerHTML= "CALCOLA IL PREZZO DEL TUO BIGLIETTO";
titleElement.style.color="white";
titleElement.style.textAlign= "center";

const buttonGeneraElement = document.querySelector("#genera button");
buttonGeneraElement.innerHTML = "Genera";

const buttonAnnullaElement = document.querySelector("#annulla button");
buttonAnnullaElement.innerHTML = "Annulla";


const inputsezioneNomeElement = document.querySelector("#sezioneNome input");
inputsezioneNomeElement.value="Gian Marco Pimentel";




buttonGeneraElement.addEventListener("click",
        function(){
            const inputsezioneAgeElement = Number(document.querySelector("#sezioneAge input").value);
            console.log(inputsezioneAgeElement);
            const inputsezioneKmElement = Number(document.querySelector("#sezioneKm input").value);
            

            let price = 0.21 * inputsezioneKmElement;
            let finalPrice= price.toFixed(2);


            if (inputsezioneAgeElement < 18){
                //allora fai sconto del 20%
                finalPrice = price - price * 0.2;
            } else if (inputsezioneAgeElement >= 65){
                //allora sconto 40%
                finalPrice = price - price * 0.4
            }
            document.getElementById("result").innerHTML = `${finalPrice} `
        }

)
buttonAnnullaElement.addEventListener("click",
        function(){
            window.location = ("index.html")
        }
)

const title2Element = document.querySelector("#title2");
title2Element.innerHTML= "IL TUO BIGLIETTO";
title2Element.style.color="white";
title2Element.style.textAlign= "center";

const subtitleElement = document.querySelector("#subtitle");
subtitleElement.innerHTML= "DETTAGLI DEL BIGLIETTO";
subtitleElement.style.color="black";
subtitleElement.style.textAlign= "start";

/* const userpassElement = document.querySelector("userpass");
userpassElement.style.backgroundColor = "gray"; */

const spanElement = document.querySelector("#pass-name");
spanElement.innerText = inputsezioneNomeElement.value ;
