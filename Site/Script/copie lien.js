document.addEventListener('DOMContentLoaded', function () {
    const copyLinkButton = document.getElementById('copyLinkButton');

    copyLinkButton.addEventListener('click', () => {
        const siteLink = 'https://votresite.com'; // Remplacez par le lien de votre site

        navigator.clipboard.writeText(siteLink)
            .then(() => {
                console.log('Lien copié !');
                alert('Lien copié !'); // Vous pouvez afficher une alerte pour confirmer la copie
            })
            .catch(err => {
                console.error('Erreur lors de la copie du lien : ', err);
            });
    });
});