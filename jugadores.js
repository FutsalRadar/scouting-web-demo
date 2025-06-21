
fetch('jugadores.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('jugadores-container');
        data.forEach(jugador => {
            const div = document.createElement('div');
            div.className = 'jugador-card';
            div.innerHTML = `
                <img src="${jugador.foto}" alt="Foto de ${jugador.nombre}">
                <h2>${jugador.nombre}</h2>
                <p>Posición: ${jugador.posicion}</p>
                <a href="perfil.html?id=${jugador.id}">Ver perfil</a>
            `;
            container.appendChild(div);
        });
    });
