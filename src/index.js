

let content = document.getElementById("content");
while(content.firstChild) {
    content.removeChild(content.firstChild);
}

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let about = document.getElementById("about");

//Build Home page
home.addEventListener("click", () => {
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }
        let title = document.createElement("h1");
        title.textContent = "Welcome to Athen's Garden";
        content.appendChild(title);
        let description = document.createElement("p");
        description.textContent = "Athen's Garden provides a variety of dishes, from ancient delicassies to modern favorites, our menu boasts a healthy spectrum of mediteranean cuisine.";
        content.appendChild(description); 
});

//Build Menu
menu.addEventListener("click", () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    let title = document.createElement("h1");
    title.textContent = "Welcome to Athen's Garden";
    content.appendChild(title);
    let description = document.createElement("p");
    description.textContent = "Athen's Garden provides a variety of dishes, from ancient delicassies to modern favorites, our menu boasts a healthy spectrum of mediteranean cuisine.";
    content.appendChild(description); 
});

//Build About page
about.addEventListener("click", () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    let title = document.createElement("h1");
    title.textContent = "Welcome to Athen's Garden";
    content.appendChild(title);
    let description = document.createElement("p");
    description.textContent = "Athen's Garden provides a variety of dishes, from ancient delicassies to modern favorites, our menu boasts a healthy spectrum of mediteranean cuisine.";
    content.appendChild(description); 
});

