const reponse=await fetch("data.json")
const extension=await reponse.json();
//Creation de l'element
function AfficheAllextension(extension){
    for(let i=0;i<extension.length;i++){
    const nom=document.createElement("h3")
    nom.innerHTML=extension[i].name
    const logo=document.createElement("img")
    logo.src=extension[i].logo
    const description=document.createElement("p")
    description.innerText=extension[i].description;
    const ficheExtension=document.createElement("article")
    const extensionFiche=document.querySelector(".extension")
    extensionFiche.appendChild(ficheExtension)
    const textPlace=document.createElement("div")
    textPlace.appendChild(nom)
    textPlace.appendChild(description)
    //ficheExtension.append(logo)
    //ficheExtension.appendChild(textPlace)
    const boutonRemouve =document.createElement("button")
    boutonRemouve.textContent="Remove"
    const layout=document.createElement("nav")
    layout.appendChild(logo)
    layout.appendChild(textPlace)
    ficheExtension.appendChild(layout)
    ficheExtension.appendChild(boutonRemouve)
    const switchLabel=document.createElement("label")
    const checkbox=document.createElement("input")
    checkbox.type="checkbox"
    const spanE=document.createElement("span")
    switchLabel.appendChild(checkbox)
    switchLabel.appendChild(spanE)
    ficheExtension.appendChild(switchLabel)
    //Affichage du bouton active ou non
    
    if(extension[i].isActive===true){
        checkbox.checked=true
    }  
}

}
AfficheAllextension(extension);
/*function aficheActive(listeActive){
    for(let i=0; i<extension.length;i++){
        if(extension[i].isActive=true){

        }
    }
}*/
//Ajouter une listener pour les bouton
const butonAll=document.querySelector(".all-btn");
butonAll.addEventListener("click",function(){
    document.querySelector(".extension").innerHTML=""
    AfficheAllextension(extension);
    
    
})
const boutonActive=document.querySelector(".active-btn")
boutonActive.addEventListener("click",function(){
    const extensionActive=extension.filter(function(extes){
        return extes.isActive
    })
    document.querySelector(".extension").innerHTML=""
    AfficheAllextension(extensionActive)
})
const boutonInactive=document.querySelector(".inactive-btn")
boutonInactive.addEventListener("click",function(){
    const extensionInactive=extension.filter(function(extes){
        return !extes.isActive
    })
    document.querySelector(".extension").innerHTML=""
    AfficheAllextension(extensionInactive)
})
 const getImage=document.getElementById("sun")
const Btnchange=document.querySelector(".sun")
Btnchange.addEventListener("click",function(){
    getImage.src="/assets/images/icon-moon.svg"
    console.log("Way")
    
    
})
