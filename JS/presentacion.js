document.addEventListener('DOMContentLoaded', () => {
    const presentacioContainer = document.getElementById('presentacion-container');

    fetch('./assets/data/datos.json')
        .then(response => response.json())
        .then(data => {
            data.presentacion.map((item) => {
                presentacioContainer.innerHTML += `
                    <img class="img-circular" src="assets/Captura.jpg" alt="Foto de perfil Salvador Alvarez" height="" width="400">
                    <h3>${item.nombre} - ${item.trabajo}</h3>
                    <p>${item.descripcion}</p>
                    <div class="iconos">
                        <a href="${item.linkedin}" target="_blank">
                            <img class="icono" src="assets/linkedin-svgrepo-com (5).svg" alt="Icono linkedin" height="40" width="40">
                        </a>
                        <a href="${item.github}" target="_blank">
                            <img class="icono" src="assets/github-142-svgrepo-com.svg" alt="Icono github" height="40" width="40">
                        </a>
                        <a href="${item.cvlink}" target="_blank">
                            <img class="icono" src="assets/cv-file-interface-symbol-svgrepo-com (3).svg" alt="Icono de CV" height="40" width="40">
                        </a>
                    </div>
                `;
            });
        });
});
