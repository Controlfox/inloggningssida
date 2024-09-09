const namnInput = document.createElement("input");
const lösenInput = document.createElement("input");
const inloggBtn = document.createElement("button");
const pNamn = document.createElement("p");
const pLösen = document.createElement("p");

inloggBtn.innerText = "Logga in";
pNamn.innerText = "Användarnamn";
pLösen.innerText = "Lösenord";

document.body.append(pNamn,namnInput,pLösen,lösenInput,inloggBtn);