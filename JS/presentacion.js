fetch('./assets/data/datos.json')
    .then(response => response.json())
    .then(data => {
        data.presentacion.map((item) => {
            presentacioContainer.innerHTML += `
                <img class="img-circular" src="${item.imagen}" alt="Foto de perfil Salvador Alvarez">
                <h3>${item.nombre} - ${item.trabajo}</h3>
                <p>${item.descripcion}</p>
                <div class="iconos">
                    <a href="${item.linkedin}" target="_blank">
                        <img class="icono" src="assets/linkedin-svgrepo-com (5).svg" alt="Icono linkedin">
                    </a>
                    <a href="${item.github}" target="_blank">
                        <img class="icono" src="assets/github-142-svgrepo-com.svg" alt="Icono github">
                    </a>
                    <a href="${item.cvlink}" target="_blank">
                        <img class="icono" src="assets/cv-file-interface-symbol-svgrepo-com (3).svg" alt="Icono CV">
                    </a>
                </div>`;
        });
    });