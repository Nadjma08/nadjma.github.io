let variable = "Hello world!";
document.write(variable);

//Avec let et var on déclare une variable
// Une variable peut avoir sa valeur modifiée

variable = "coucou"
document.write(variable);

const nombre = 3;
// Redonner une valeur à une constante est impossible 
// et provoque une erreur
// nombre = 6; => Erreur:
// invalid assignment to const 'nombre'
document.write(nombre);

let string = "chaine de caractère"
// La chaine de caractère est toujours entre guillemets 
let integer = 123 // Un nombre n'a pas besoin de ""
let integer2 = 34.5 // Un nombre à virgule
let boolean = true; // ou false 
let array = ["coucou", 8,64];
// Un tableau contient plusieurs valeurs entre []
// et séparés par des ,
let object = {
    couleur: "blanc",
    hauteur: 100,
    largeur: 350
}
// Un objet est une representation d'un élément
// Un objet possède des propriétés:
// ce sont des variables qui lui sont propres



let a = 12;
let b = 20; 
let c = a + b;
document.write("<p> Le total de a + b = ");
document.write(c)
document.write("</p>");

let reponse = window.prompt("Bonjour, quel est votre prénom ?");
document.write("<p> Prénom : ");
document.write(reponse);
document.write("</p>");

let question = window.prompt("Quel est votre nom ?");
document.write("Nom : ");
document.write(question);
document.write("</p>");



// let reponse = window.prompt("Comment vas-tu");
// document.write("<p> Tu vas ");
// document.write(reponse);
// document.write("</p>");


// Exercice 
// Demander le nom de l'utilisateur dans prompt puis son prénom dans un autre
// Afficher sur la page Bonjour <prenom> <nom>



