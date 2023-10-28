import {portifolio} from "./../../data/data.js"

const {username, role, resume, social} = portifolio
// Variaveis
let portifolioName = document.querySelector(".js-portifolio-name");
let portifolioRole = document.querySelector(".js-portifolio-role");
let resumeText = document.querySelector(".js-resume-text");
let portifolioContacts = document.querySelector(".js-portifolio-contacts");
let btnProjects = document.querySelector(".js-btn-projects")
let btnClosed = document.querySelector(".js-closed")

// Inserindo DOM
portifolioName.innerText = username;
portifolioRole.innerText = role;
resumeText.innerText = resume

for(let i = 0; i < social.length; i++){
    let listItem = document.createElement("li")
    let listItemImg = document.createElement("img")

    listItemImg.src = social[i]
    listItem.appendChild(listItemImg);
    portifolioContacts.appendChild(listItem)
}

btnProjects.addEventListener('click', ()=>{
    document.querySelector(".js-modal").style.display = "inline-block";
    document.querySelector("body").style.backgroundColor = "#0000009d"
})

btnClosed.addEventListener('click', ()=>{
    document.querySelector(".js-modal").style.display = "none";
    document.querySelector("body").style.backgroundColor = "";
})