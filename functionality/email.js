emailjs.init('nJbXVmO-q9nEj45z8');

function sendEmail() {

    const radios = document.getElementsByName("response");
    const name = document.getElementById('name').value;
    const allergies = document.getElementById('allergies').value;
    const message = document.getElementById('message').value;

    var completedAssistance = false;
    var attendDecission = false;
    var quest = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === "yes") {
                attendDecission = true;
            }
            else if (radios[i].value === "no") {
                attendDecission = false;
            }
            else {
                quest = true;
            }
            completedAssistance = true;
        }
    }

    if (name.trim() !== "" && allergies.trim() !== "" && completedAssistance === true) {

        const srcImageButtonOriginal = document.getElementById("imageSendButton").src;
        document.getElementById("imageSendButton").src = "resources/brujula.gif";

        attend = "";
        if (attendDecission === true) {
            attend = "Confirmado";
        }
        else {
            attend = "Rechazado";
        }

        if (quest) {
            attend = "Preguntarle"
        }

        emailjs.send("service_h2dnmxe", "template_909oeah", {
            name, allergies, message, attend,
        })
            .then(function (response) {
                document.getElementById("imageSendButton").src = srcImageButtonOriginal;
                console.log("Correo enviado con éxito:", response);
                cerrarModal();
                alert("¡Correo enviado exitosamente!");
            })
            .catch(function (error) {
                console.error("Error al enviar el correo:", error);
                alert("Error al enviar el correo.");
            });
    }
    else {
        alert("Los campos obligatiorios no estan rellenos");
    }
}



function abrirModal() {
    document.getElementById('modalIdFormulary').style.display = 'flex';
    document.getElementById('contFinal').style.display = 'none';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modalIdFormulary').style.display = 'none';
    document.getElementById('contFinal').style.display = 'flex';

    document.getElementById('name').value = "";
    document.getElementById('allergies').value = "";
    document.getElementById('message').value = "";
}