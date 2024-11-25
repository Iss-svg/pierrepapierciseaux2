
//role:pierre, papier,ciseaux
//paramétre:NON
//retour:choix du joueur
/// pierre => 1 , papier => 2 , ciseaux => 3
function choixJoueur(){
    
    let choixJ=prompt("choisissez feuille, ciseaux ou papier");
    return choixJ;

}



//role:l'ordinateur choisis de maniére aleatoire 
//paramétre:aucun
//retour:son choix

function choixO(){
  return Math.ceil(Math.random()*3)
}


//role:convertire les chiffres en mots
//paramétre:le nbr choisi par l'ordi
//retourne:le mots
//1=papier, 2=ciseaux, 3=pierre
function conversion(nbr){

    let choixO;
    if (nbr === 1 ){
        choixO="papier"
    }
}

//role:comparer les choix du jr et de l'ordi
//paramétre: choix du joueur et choix ordinateur
//retour:le gagnant
let
function comparer(choixJoueur,choixOdinateur){
    
    let result;

    if (choixJoueur,choixOdinateur){
        result="égalité"
    }else if (
        choixJoueur==="ciseaux"&&choixOdinateur
    ){}

}


//role:afficher le chois du joueur et du result
//paramétre:
//retour:le gagnant

function affichage(){

}


//role:lancer le jeu
//paramétre:démarrage
//retour:r

function lancement(){

}


choixJ();
choixpc();