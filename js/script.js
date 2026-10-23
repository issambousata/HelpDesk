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


let index_demande_modifier = -1;

// get container de section les demandes
const container_articles = document.getElementById("articles");

// l'affichage des demandes 
let isTaible = false;
function Afficher() {

    // afficher le nombre total des demandes
    const total_demandes = document.getElementById("total_demandes");
    total_demandes.textContent = `${demandes.length} demandes`;
    //get les container d'article et tableau et les initialiser
    container_articles.innerHTML = "";
    const taible_body = document.getElementById("table_body");
    taible_body.innerHTML = "";
    const tableau_thead_tr = document.getElementById("tableau_thead_tr");
    tableau_thead_tr.innerHTML = "";

    // raporter les button de choisir entre le tableau et cartes
    const button_taible = document.getElementById("tableau");
    const button_cartes = document.getElementById("Cartes");
    button_taible.addEventListener("click", () => { isTaible = true; Afficher(); button_taible.style.backgroundColor = "#FFFFFF"; button_cartes.style.backgroundColor = "#cad2dd" })
    button_cartes.addEventListener("click", () => { isTaible = false; Afficher(); button_taible.style.backgroundColor = "#cad2dd"; button_cartes.style.backgroundColor = "#FFFFFF" })


    if (demandes.length > 0) {

        if (isTaible === true) {

            // creer thead de tableau 
            const thead_tr_th1 = document.createElement("th");
            thead_tr_th1.textContent = "N° Ticket";
            const thead_tr_th2 = document.createElement("th");
            thead_tr_th2.textContent = "Titre";
            const thead_tr_th3 = document.createElement("th");
            thead_tr_th3.textContent = "Categorie";
            const thead_tr_th4 = document.createElement("th");
            thead_tr_th4.textContent = "Priorité";
            const thead_tr_th5 = document.createElement("th");
            thead_tr_th5.textContent = "Action";
            tableau_thead_tr.append(thead_tr_th1, thead_tr_th2, thead_tr_th3, thead_tr_th4, thead_tr_th5)


            demandes.forEach((demande) => {
                const table_tr = document.createElement("tr");
                const table_td_NTicket = document.createElement("td");
                const table_td_titre = document.createElement("td");
                const table_td_categorie = document.createElement("td");
                const table_td_priorite = document.createElement("td");
                const table_td_action = document.createElement("td");
                const h3_titre = document.createElement("h3");
                const p_titre = document.createElement("p");


                //creer le status de tableau 
                const status_p1 = document.createElement("p");
                status_p1.setAttribute("id", "status_p1");
                const status_p2 = document.createElement("p");
                status_p2.setAttribute("id", "status_p2");

                // changer le color de priorite d'apres son status  
                if (demande.priorite === "Haute") {
                    status_p1.style.backgroundColor = "#FFF0E8";
                    status_p1.style.color = "#BA6444";
                } else {
                    status_p1.style.backgroundColor = "#E8F6EE";
                    status_p1.style.color = "#388867";
                }

                //creer buttons
                const modifier_icon = document.createElement("i")
                modifier_icon.setAttribute("class", "fa-solid fa-pencil");
                const supprimer_icon = document.createElement("i");
                supprimer_icon.setAttribute("class", "fa-solid icon_suprimer fa-trash");
                const button_modifier = document.createElement("button");
                button_modifier.append(modifier_icon);
                button_modifier.addEventListener("click", () => { modifier(demande.id) })
                const button_suprimer = document.createElement("button");
                button_suprimer.append(supprimer_icon);
                button_suprimer.addEventListener("click", () => { supprimer(demande.id) });


                // remplir le tableau de donner
                table_td_NTicket.textContent = "HD-00" + demande.id;
                h3_titre.textContent = demande.titre;
                p_titre.textContent = demande.description;
                table_td_titre.append(h3_titre, p_titre);
                status_p1.textContent = demande.categorie;
                table_td_categorie.append(status_p1);
                status_p2.textContent = demande.priorite;
                table_td_priorite.append(status_p2);
                table_td_action.append(button_modifier, button_suprimer);


                table_tr.append(table_td_NTicket, table_td_titre, table_td_categorie, table_td_priorite, table_td_action);

                taible_body.append(table_tr);
            });



        } else {


            for (let i = 0; i < demandes.length; i++) {
                const article = document.createElement("article");

                // creer article head contient icon et p
                const article_head = document.createElement("div");
                article_head.setAttribute("id", "article_head");
                const article_head_icon = document.createElement("i");
                article_head_icon.setAttribute("id", "article_head_icon");
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
                div_status.setAttribute("id", "status");
                const status_p1 = document.createElement("p");
                status_p1.setAttribute("id", "status_p1");
                const status_p2 = document.createElement("p");
                status_p2.setAttribute("id", "status_p2");

                // changer le color de priorite d'apres son status  
                if (demandes[i].priorite === "Haute") {
                    status_p1.style.backgroundColor = "#FFF0E8";
                    status_p1.style.color = "#BA6444";
                } else {
                    status_p1.style.backgroundColor = "#E8F6EE";
                    status_p1.style.color = "#388867";
                }


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
                supprimer_icon.setAttribute("class", "fa-solid icon_suprimer fa-trash");
                const button_modifier = document.createElement("button");
                button_modifier.textContent = "Modifier";
                button_modifier.addEventListener("click", () => { modifier(demandes[i].id) })
                const button_suprimer = document.createElement("button");
                button_suprimer.textContent = "Supprimer";
                button_suprimer.style.color = "#CC626A"
                button_suprimer.addEventListener("click", () => { supprimer(demandes[i].id) })
                buttons_div.append(modifier_icon, button_modifier, supprimer_icon, button_suprimer);
                article.append(buttons_div);



                // creer le contenu des cards par les donner des demandes
                article_head_p.textContent = `HD-00${demandes[i].id}`;
                article_h3.textContent = demandes[i].titre;
                article_p.textContent = demandes[i].description;
                status_p1.textContent = demandes[i].categorie;
                status_p2.textContent = demandes[i].priorite;


                container_articles.append(article);
            }
        }

    } else {
        const aucunDemande = document.createElement("p");
        aucunDemande.textContent = "il n y a aucun demande";
        container_articles.append(aucunDemande);
    }



}
Afficher()

// la foction pour verefier les champs de form avant d'ajouter un demande 
const les_champs = document.querySelectorAll(".champs");
const button_anuller = document.getElementById("button_anuller");
button_anuller.addEventListener("click", () => { initialiser_champs() })
button_anuller.style.display = "none";

les_champs.forEach((champ) => {
    champ.addEventListener("input", () => {
        champ.setCustomValidity("");
        if (champ.value.trim() !== "") {
            button_anuller.style.display = "block";
        } else {
            button_anuller.style.display = "none";

        }
    })
})


// initialiser les champs 
function initialiser_champs() {
    input_titre.value = "";
    input_Description.value = "";
    input_categorie.value = "";
    input_priorite.value = "";
    button_anuller.style.display = "none";
}

// get les elements de form 
const input_titre = document.getElementById("Titre");
const input_categorie = document.getElementById("Catégorie");
const input_priorite = document.getElementById("Priorité");
const input_Description = document.getElementById("Description");

function valider_form(event) {
    event.preventDefault();


    (input_titre.value.trim().length !== 0) ? input_titre.setCustomValidity("") : input_titre.setCustomValidity("vous devez entrer le titre de votre demande");
    (input_categorie.value.trim().length !== 0) ? input_categorie.setCustomValidity("") : input_categorie.setCustomValidity("vous devez choisir categorie de votre demande");
    (input_priorite.value.trim().length !== 0) ? input_priorite.setCustomValidity("") : input_priorite.setCustomValidity("vous devez choisir le priorite de votre demande");
    (input_Description.value.trim().length !== 0) ? input_Description.setCustomValidity("") : input_Description.setCustomValidity("vous devez ecrire un description de votre demande");

    if (!(input_titre.reportValidity()) && !(input_Description.reportValidity()) && !(input_categorie.reportValidity()) && !(input_priorite.reportValidity())) {
        return;
    }
    index_demande_modifier >= 0 ? modifier_demande() : Ajouter();

}



// la fonction d'ajouter les demandes
function Ajouter() {

    const demande = {
        id: demandes.length + 1,
        titre: input_titre.value.trim(),
        description: input_Description.value.trim(),
        categorie: input_categorie.value,
        priorite: input_priorite.value
    };
    if (confirm("voulez vous ajouter ce demande ?")) {
        demandes.push(demande);
        initialiser_champs();

        alert("le demande est ajouter avec saccès");

    }
    Afficher();
}



// la fonction pour supprimer les demandes
function supprimer(id) {
    demandes.forEach((demande, index) => {

        if (demande.id == id) {

            if (confirm("voulez vous supprimer ce demande !")) {
                demandes.splice(index, 1);
                alert("le demand est suprimer avec saccès");
                Afficher();

            }

        }
    })
}

function modifier(id) {
    const btn = document.getElementById("button");
    btn.value = "Modifier";


    index_demande_modifier = demandes.findIndex((demande) => demande.id == id);
    input_titre.value = demandes[index_demande_modifier].titre;
    input_categorie.value = demandes[index_demande_modifier].categorie;
    input_priorite.value = demandes[index_demande_modifier].priorite;
    input_Description.value = demandes[index_demande_modifier].description;
    button_anuller.style.display = "block";

}

function modifier_demande() {

    if (confirm("voulez vous modifier ce demande !")) {
        demandes[index_demande_modifier].titre = input_titre.value;
        demandes[index_demande_modifier].description = input_Description.value;
        demandes[index_demande_modifier].categorie = input_categorie.value;
        demandes[index_demande_modifier].priorite = input_priorite.value;

        // renitialiser les champs
        initialiser_champs();

        //initialiser le variable 
        index_demande_modifier = -1;

        // ajouter les bitton de modification pour modifier une demande
        const btn = document.getElementById("button");
        btn.value = "＋  Ajouter la demande";


        alert("le demande est ajouter avec saccès");
    }
    Afficher()


}

