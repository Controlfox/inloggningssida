//Skapa inloggningselement
let namnInput = document.createElement("input");
let lösenInput = document.createElement("input");
const inloggBtn = document.createElement("button");
const pNamn = document.createElement("p");
const pLösen = document.createElement("p");

inloggBtn.innerText = "Logga in";
pNamn.innerText = "Användarnamn";
pLösen.innerText = "Lösenord";

//Visa inloggningssidan
document.body.append(pNamn, namnInput, pLösen, lösenInput, inloggBtn);

//Skapar funktion för inloggning
function inloggning() {
    const namn = namnInput.value;
    const lösenord = lösenInput.value;
    const rättNamn = "test";
    const rättLösenord = "1234";

    if (namn === rättNamn && lösenord === rättLösenord)
    {
        //sparar inloggningen och visar välkomstsidan
        localStorage.setItem("inloggad", "true");
        välkommen();
    }
    else
    {
        felInlogg();
    }
}

//Skapar funktion för välkomstsidan
function välkommen() {
    document.body.innerHTML = "";
    const rättInlogg = document.createElement("h1");
    rättInlogg.innerText = "Välkommen till sidan!";
    const utloggBtn = document.createElement("button");
    utloggBtn.innerText = "Logga ut";

    document.body.append(rättInlogg, utloggBtn);

    //eventlistener för utloggningsknappen
    utloggBtn.addEventListener("click", function()
    {
        localStorage.removeItem("inloggad");
        visaInloggning();
    });
}

//Skapar funktion för felmeddelandet
function felInlogg()
{
    document.body.innerHTML = "";
    const felInlogg = document.createElement("h1");
    const försökIgenBtn = document.createElement("button");
    felInlogg.innerText = "Fel användarnamn eller lösenord, försök igen.";
    försökIgenBtn.innerText = "Försök igen";

    document.body.append(felInlogg, försökIgenBtn);

    // Lägg till eventlistener för att visa första sidan igen
    försökIgenBtn.addEventListener("click", function()
    {
        visaInloggning();
    });
};

//Skapar funktion för att visa första sidan
function visaInloggning()
{
    document.body.innerHTML = "";
    document.body.append(pNamn, namnInput, pLösen, lösenInput, inloggBtn);
};

//Visa välkomstsidan om användaren är inloggad
window.onload = function()
{
    const inloggad = localStorage.getItem("inloggad");
    if (inloggad === "true")
    {
        välkommen();
    }
    else
    {
        visaInloggning();
    }
};

//Eventlistener för vid inloggning
inloggBtn.addEventListener("click", inloggning);
