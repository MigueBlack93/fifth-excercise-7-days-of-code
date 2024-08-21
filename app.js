let categories = [
    {
        category: "Aceites y Grasas",
        items: []
    },
    {
        category: "Carnes",
        items: []
    },
    {
        category: "Cereales y Granos",
        items: []
    },
    {
        category: "Condimentos y Especias",
        items: []
    },
    {
        category: "Conservas y Enlatados",
        items: []
    },
    {
        category: "Dulces y Repostería",
        items: []
    },
    {
        category: "Vegetales",
        items: []
    },
    {
        category: "Harinas y Panificados",
        items: []
    },
    {
        category: "Lácteos",
        items: []
    },
    {
        category: "Legumbres",
        items: []
    },
    {
        category: "Limpieza e Higiene",
        items: []
    },
    {
        category: "Mascotas",
        items: []
    },
    {
        category: "Pastas",
        items: []
    },
    {
        category: "Perfumería",
        items: []
    },
    {
        category: "Pescados y Mariscos",
        items: []
    }
];

function selecElement(id){
    return document.getElementById(id);
}

function selecValue(id){
    return document.getElementById(id).value;
}

function clearScreen(hidden, show){
    selecElement(hidden).setAttribute("hidden", "");
    selecElement(show).removeAttribute("hidden");
}

function nextPage(){
    clearScreen("first-section", "second-section");
}

function addProduct(){
    let selectedCategory = selecValue("category-selected");

    for(i = 0 ; i < categories.length ; i++){
        if(selectedCategory === categories[i]){
            categories[i].items.push(selecValue("product"));
            selecElement("product").innerHTML = "";
            break;
        }
    }
}

function finish(){
    clearScreen("second-section", "final-section");
    for(i = 0 ; i < categories.length ; i++){
        let h3Title = document.createElement("h2");
        h3Title.textContent = categories[i];
        for(a = 0 ; a < categories[i].items[i].length ; a++)[
            
        ]
    }
}