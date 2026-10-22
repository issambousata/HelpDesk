const demandes = [
    {
        id: 1,
        titre: "Clavier défectueux",
        description: "Certaines touches du clavier ne fonctionnent plus.",
        categorie: "Matériel",
        priorite: "Haute"
    },
    {
        id: 2,
        titre: "Installation de logiciel",
        description: "Installer Microsoft Office sur le poste utilisateur.",
        categorie: "Logiciel",
        priorite: "Normale"
    },
    {
        id: 3,
        titre: "Problème de connexion réseau",
        description: "Impossible de se connecter au réseau de l'entreprise.",
        categorie: "Réseau",
        priorite: "Basse"
    }
];

// get container de section les demandes
const container_articles = document.getElementById("articles");

// l'affichage des demandes 
function Afficher() {

    if (demandes.length > 0) {

        container_articles.innerHTML = "";

        for (let i = 0; i < demandes.length; i++) {
            const article = document.createElement("article");

            // creer article head contient icon et p
            const article_head = document.createElement("div");
            article_head.setAttribute("id", "article_head");
            const article_head_icon = document.createElement("i");
            const article_head_p = document.createElement("p");
            article_head.append(article_head_icon, article_head_p);
            article.append(article_head);

            // changer icon pour chaque categorie de demande
            switch (demandes[i].categorie) {
                case "Matériel":

                    article_head_icon.setAttribute("class", "fa-solid fa-computer");
                    break;
                case "Logiciel":

                    article_head_icon.setAttribute("class", "fa-solid fa-network-wired");
                    break;

                default:
                    article_head_icon.setAttribute("class", "fa-solid fa-globe");
                    break;
            }


            // h3 et paragraphe d'article
            const article_h3 = document.createElement("h3")
            const article_p = document.createElement("p");
            article.append(article_h3, article_p);

            // div de status d'article
            const div_status = document.createElement("div");
            div_status.setAttribute("id", "status")
            const status_p1 = document.createElement("p")
            const status_p2 = document.createElement("p")
            div_status.append(status_p1, status_p2);
            article.append(div_status);

            // hr pour separer le contenu avec les buttons
            const hr = document.createElement("hr");
            article.append(hr);

            // creer les button modifier et supprimer
            const buttons_div = document.createElement("div");
            buttons_div.setAttribute("id", "buttons")
            const modifier_icon = document.createElement("i")
            modifier_icon.setAttribute("class", "fa-solid fa-pencil");
            const supprimer_icon = document.createElement("i");
            supprimer_icon.setAttribute("class", "fa-solid fa-trash");
            const button_modifier = document.createElement("button");
            button_modifier.textContent = "Modifier";
            const button_suprimer = document.createElement("button");
            button_suprimer.textContent = "Supprimer";
            buttons_div.append(modifier_icon, button_modifier, supprimer_icon, button_suprimer);
            article.append(buttons_div);



            // creer le contenu des cards par les donner du tableau
            article_head_p.textContent = `HD-00${demandes[i].id}`;
            article_h3.textContent = demandes[i].titre;
            article_p.textContent = demandes[i].description;
            status_p1.textContent = demandes[i].categorie;
            status_p2.textContent = demandes[i].priorite;


            container_articles.append(article);
        }

    } else {
        const aucunDemande = document.createElement("p");
        aucunDemande.textContent = "il n y a aucun demande";
        container_articles.append(aucunDemande);
    }

    // afficher le nombre total des demandes
    const total_demandes = document.getElementById("total_demandes");
    total_demandes.textContent = `${demandes.length} demandes`

}
Afficher()

// la foction pour verefier les champs de form avant d'ajouter un demande 
const les_champs = document.querySelectorAll(".champs") ;

les_champs.forEach((champ)=>{
    champ.addEventListener("input" , ()=>{
        champ.setCustomValidity("")
    })
})

function valider_form(event){
    event.preventDefault();

    const input_titre = document.getElementById("Titre");
    const input_categorie = document.getElementById("Catégorie");
    const input_priorite = document.getElementById("Priorité");
    const input_Description = document.getElementById("Description");

    (input_titre.value.trim().length!==0)     ?  input_titre.setCustomValidity("")            :   input_titre.setCustomValidity("vous devez entrer le titre de votre demande") ;
    (input_categorie.value.trim().length!==0) ?  input_categorie.setCustomValidity("")        :   input_categorie.setCustomValidity("vous devez choisir categorie de votre demande") ;
    (input_priorite.value.trim().length!==0)  ?  input_priorite.setCustomValidity("")          :   input_priorite.setCustomValidity("vous devez choisir le priorite de votre demande") ;
    (input_Description.value.trim().length!==0)?  input_Description.setCustomValidity("") :   input_Description.setCustomValidity("vous devez ecrire un description de votre demande") ;

    if(!(input_titre.reportValidity()) && !(input_Description.reportValidity()) && !(input_categorie.reportValidity()) && !(input_priorite.reportValidity())){
        return ;
    }
    Ajouter(input_titre , input_Description , input_categorie , input_priorite)
}

// la fonction d'ajouter les demandes
function Ajouter( titre, description, categorie, priorite) {

    const demande = {
        id: demandes.length + 1,
        titre: titre.value.trim(),
        description: description.value.trim(),
        categorie: categorie.value,
        priorite: priorite.value
    };

    demandes.push(demande);
    Afficher();
}


