var listeLiens = [
    {
        titre: "Eloquent Javascript",
        url: "http://eloquentjavascript.net/",
        auteur: "alhern",
        comment: "Great thorough book, a must-read for js."
    },
    {
        titre: "Rithm School",
        url: "https://www.rithmschool.com/courses",
        auteur: "alhern",
        comment: "Very well crafted intermediate and advanced js courses."
    },
    {
        titre: "YDKJS",
        url: "https://github.com/getify/You-Dont-Know-JS",
        auteur: "alhern",
        comment: "A classic and awesome js book collection, very easy to read."
    }
];

//Fonction qui va créer le modèle à appliquer aux liens de la liste
var creationLien = function (liens) {
var liensElt = document.createElement("p"); 
liensElt.setAttribute("class", "lien");

// Creation du titre cliquable renvoyant vers son URL
var lien = document.createElement("a");
lien.setAttribute("href", liens.url);
lien.innerHTML = liens.titre;
lien.style.color = "#DF1239"; 
lien.style.fontWeight = 'bold';
lien.style.textDecoration = 'none';
lien.style.fontSize = "17px";
lien.style.textTransform = "uppercase";
liensElt.appendChild(lien);

// Creation d'un espace pour que le titre et l'URL ne soient pas collés
var espace = document.createTextNode(" "); 
liensElt.appendChild(espace);

// Creation du tag span contenant l'URL et lui donnant ainsi son style css
var ajoutLien = document.createElement("span"); 
ajoutLien.textContent = liens.url;
ajoutLien.style.fontStyle = "italic";
ajoutLien.style.textTransform = "uppercase";
liensElt.appendChild(ajoutLien);

// Creation d'un saut de ligne
var skip = document.createElement("br");
liensElt.appendChild(skip);

// Ajout du commentaire  
var comment = document.createElement("span");
comment.textContent = liens.comment;
liensElt.appendChild(comment);
document.getElementById("contenu").appendChild(liensElt); 

//Saute encore une ligne
var skip = document.createElement("br");
liensElt.appendChild(skip);
  
// Creation du tag span et ajout d'un texte précédant l'auteur
var ajout = document.createElement("span");
ajout.textContent = "added by " + liens.auteur;
ajout.style.textTransform = "lowercase";
ajout.style.fontSize = "xx-small";
ajout.style.color = "#a49fc6";
liensElt.appendChild(ajout);
document.getElementById("contenu").appendChild(liensElt);

return liensElt;
};

//Application de la fonction à chaque lien de l'objet
listeLiens.forEach(function(lien){
  var elementLien = creationLien(lien);
  document.getElementById("contenu").appendChild(elementLien);
});