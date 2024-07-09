// Prend le mot de la barre de recherche et parcours toute la page pour fluoter ce mot //
// Appelée dans : egyptienne; grec; romaine et nordique (HTML) //
// Liée à : cherche mot (CSS) //
// Exécuté par : page egyptienne; page grecque; page romaine et page nordique (JS) //

function searchWord(searchBar) {
  var contents = document.querySelectorAll("#content"); // Utiliser querySelectorAll pour obtenir tous les éléments avec l'identifiant "content"

  contents.forEach(function(content) { // Utiliser forEach pour itérer sur chaque élément avec l'identifiant "content"
    var text = content.textContent;
    var pos = text.indexOf(searchBar);
    if (pos >= 0) {
      var words = text.split(" ");
      content.textContent = "";
      words.forEach(function(word) {
        var node = document.createElement("span");
        node.textContent = word;
        if (word === searchBar) {
          node.classList.add("highlight");
        }
        content.appendChild(node);
        content.appendChild(document.createTextNode(" "));
      });

    }
  });
}
