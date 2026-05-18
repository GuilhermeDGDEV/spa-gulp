(function () {
    function marcarLinkComoSelecionado(hash) {
        const links = document.querySelectorAll(`[custom-link]`);
        links.forEach(link => link.classList.remove('selecionado'));

        const link = document.querySelector(`[custom-link='${hash}']`);
        link.classList.add('selecionado');
    }

    function navegarViaAjax(hash) {
        if (!hash) return;

        const link = document.querySelector(`[custom-link='${hash}']`);
        const destino = document.querySelector('[link-destino]');

        const url = hash.substring(1);
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html;
                marcarLinkComoSelecionado(hash);
            });
    }

    function configurarLinks() {
        document.querySelectorAll('[custom-link]')
            .forEach(link => link.href = link.attributes['custom-link'].value);
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash);
        } else {
            const primeiroLink = document.querySelector('[custom-link]');
            navegarViaAjax(primeiroLink.hash);
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash);

    configurarLinks();
    navegacaoInicial();
})();