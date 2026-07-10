
async function includePartials() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    try {
        const headerResponse = await fetch('./header.html');
        const headerHTML = await headerResponse.text();
        header.innerHTML = headerHTML;

        const footerResponse = await fetch('./footer.html');
        const footerHTML = await footerResponse.text();
        footer.innerHTML = footerHTML;

        initMainScripts();

    } catch (err) {
        console.error('header/footer loading mistake', err);
    }
}

document.addEventListener('DOMContentLoaded', includePartials);