emailjs.init('nJbXVmO-q9nEj45z8');


function sendEmail() {
    //const radios = document.getElementsByName("response");
    const name = document.getElementById('name').value;
    const allergies = document.getElementById('allergies').value;
    const message = document.getElementById('message').value;


    var completedAssistance = false;
    var attendDecission = false;
    var quest = false;

    // // for (let i = 0; i < radios.length; i++) {
    // //     if (radios[i].checked) {
    // //         // if (radios[i].value === "yes")
    // //         // {
    // //         //     attendDecission = true;
    // //         // }
    // //         // else if (radios[i].value === "no")
    // //         // {
    // //         //     attendDecission = false;
    // //         // }
    // //         // else
    // //         // {
    // //         //     quest = true;
    // //         // }
    // //         // completedAssistance = true;
    // //         alert(radios[i].value);
    // //     }
    // // }
    //alert("Enviando mensaje2");


    if (name.trim() !== "" && allergies.trim() !== "" /*&& completedAssistance === true*/) {

        attend = "borrar";
        /*if (attendDecission === true)
        {
            attend = "Confirmado";
        }
        else{
            attend = "Rechazado";
        }

        if (quest){
            attend = "Preguntarle"
        }*/

        emailjs.send("service_h2dnmxe", "template_909oeah", {
            name, allergies, message, attend,
        })
            .then(function (response) {
                console.log("Correo enviado con éxito:", response);
                alert("¡Correo enviado exitosamente!");
            })
            .catch(function (error) {
                console.error("Error al enviar el correo:", error);
                alert("Error al enviar el correo.");
            });
    }
    else{
        console.log("Los campos obligatiorios no estar rellenos");
    }

}