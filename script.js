document.addEventListener('DOMContentLoaded', () => {
    const toc = document.getElementById('toc');
    const headers = document.querySelectorAll('h2.titulo, h3.capitulo, h4.articulo');

    // 1. Generar Índice Dinámico
    headers.forEach(header => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${header.id || ''}`;
        a.textContent = header.textContent.replace('Artículo ', 'Art. ');
        
        // Asignar clases en lugar de estilos en línea
        if (header.classList.contains('titulo')) a.classList.add('nav-titulo');
        else if (header.classList.contains('capitulo')) a.classList.add('nav-cap');
        else a.classList.add('nav-art');

        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(header.id) || header;
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, null, `#${header.id}`);
        });

        li.appendChild(a);
        toc.appendChild(li);
    });

    // 2. Resaltar artículo activo al hacer scroll
    const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('#toc a').forEach(link => link.classList.remove('active'));
                const link = document.querySelector(`#toc a[href="#${entry.target.id}"]`);
                if (link) link.classList.add('active');
            }
        });
    }, { rootMargin: '-15% 0px -70% 0px' });

    headers.forEach(h => scrollObserver.observe(h));

    // 3. Animación de entrada (Fade-In) al hacer scroll
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('h4.articulo').forEach(el => revealObserver.observe(el));

    // 4. Botón "Volver arriba"
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 400));
    backTop.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});