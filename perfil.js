
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('jugadores.json')
    .then(res => res.json())
    .then(data => {
        const jugador = data.find(j => j.id == id);
        const container = document.getElementById('perfil-container');
        if (jugador) {
            container.innerHTML = `
                <h1>${jugador.nombre}</h1>
                <img src="${jugador.foto}" alt="Foto de ${jugador.nombre}">
                <p><strong>Edad:</strong> ${jugador.edad}</p>
                <p><strong>Posición:</strong> ${jugador.posicion}</p>
                <p><strong>Pierna hábil:</strong> ${jugador.pierna_habil}</p>
                <p><strong>Equipo actual:</strong> ${jugador.equipo}</p>
                <p><strong>Descripción:</strong> ${jugador.descripcion}</p>
                <iframe width="560" height="315" src="${jugador.video}" frameborder="0" allowfullscreen></iframe>
                <p><strong>Contacto:</strong> ${jugador.contacto}</p>
            `;
        } else {
            container.textContent = "Jugador no encontrado.";
        }
    });
