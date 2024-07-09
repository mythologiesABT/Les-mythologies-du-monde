// Fonction pour remplacer l'input en bouton (pour appliquer un style)
        function replaceButton() {
            const inputButton = document.getElementById('button');
            const styledButton = document.createElement('button');

            styledButton.className = 'c-btn btn';
            styledButton.onclick = inputButton.onclick;

            const span1 = document.createElement('span');
            span1.textContent = 'Cliquez ! ';
            const span2 = document.createElement('span');
            span2.textContent = 'Rechercher';

            styledButton.appendChild(span1);
            styledButton.appendChild(span2);

            inputButton.parentNode.replaceChild(styledButton, inputButton);
        }

        // Call the function to replace the input button on page load
        window.onload = replaceButton;