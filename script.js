function createCard(title, description, script = "") {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3><p>${description}</p>` + 
                     (script ? `<button class="btn-copy" onclick="navigator.clipboard.writeText('${script}')">Copiar Script</button>` : "");
    return card;
}

function renderView(page) {
    const view = document.getElementById('main-view');
    view.innerHTML = "";
    
    if (page === 'clima') {
        view.innerHTML = `
            <h2>Pesquisa de Clima</h2>
            <form action="https://formspree.io/f/xojgdkdw" method="POST">
                <textarea name="feedback" required></textarea>
                <button type="submit">Enviar</button>
            </form>`;
    } else if (KnowledgeBase[page]) {
        KnowledgeBase[page].artigos.forEach(a => view.appendChild(createCard(a.titulo, a.desc)));
    }
}

// Inicialização
renderView('dashboard');