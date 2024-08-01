
// // Obtener referencia al formulario
// const form = document.querySelector('#miFormulario');

// // Escuchar el evento 'submit' del formulario
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Evitar que el formulario se envíe automáticamente

//     // Obtener los valores de los campos del formulario
//     const nombre = document.querySelector('#nombre').value;
//     const email = document.querySelector('#email').value;
//     // ... Obtener otros campos del formulario según sea necesario

//     // Realizar alguna acción con los valores del formulario
//     // Por ejemplo, enviar los datos al servidor o realizar validaciones

//     // Limpiar los campos del formulario después de enviar los datos
//     form.reset();
// });

// // Obtener referencia al formulario
// const form = document.querySelector('#miFormulario');

// // Escuchar el evento 'submit' del formulario
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Evitar que el formulario se envíe automáticamente

//     // Obtener los valores de los campos del formulario
//     const nombre = document.querySelector('#nombre').value;
//     const email = document.querySelector('#email').value;
//     // ... Obtener otros campos del formulario según sea necesario

//     // Realizar alguna acción con los valores del formulario
//     // Por ejemplo, enviar los datos al servidor o realizar validaciones

//     // Limpiar los campos del formulario después de enviar los datos
//     form.reset();
// });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contact');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtén los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí puedes agregar la lógica para enviar los datos a tu servidor
        // Por ejemplo, usando fetch para enviar una solicitud POST
        fetch('/path/to/your/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta del servidor
            console.log('Success:', data);
            alert('Mensaje enviado con éxito');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje');
        });
    });
});