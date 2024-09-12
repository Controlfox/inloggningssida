let namnInput = document.createElement("input");
let lösenInput = document.createElement("input");
const inloggBtn = document.createElement("button");
const pNamn = document.createElement("p");
const pLösen = document.createElement("p");

inloggBtn.innerText = "Logga in";
pNamn.innerText = "Användarnamn";
pLösen.innerText = "Lösenord";

document.body.append(pNamn,namnInput,pLösen,lösenInput,inloggBtn);

inloggBtn.addEventListener("click", function()
{
    const namn = namnInput.value;
    const lösenord = lösenInput.value;
    const rättNamn = "test";
    const rättLösenord = "1234";

    if (namn === rättNamn && lösenord === rättLösenord)
    {
        const rättInlogg = document.createElement("h1");
        rättInlogg.innerText = "Välkommen till sidan!"
        const utloggBtn = document.createElement("button");
        utloggBtn.innerText = "Logga ut";
        document.body.innerHTML = " ";
        document.body.append(rättInlogg, utloggBtn);
        utloggBtn.addEventListener("click", function()
            {
                document.body.innerHTML = " ";
                document.body.append(pNamn,namnInput,pLösen,lösenInput,inloggBtn);
            });
    }
    else if (namn !== rättNamn && lösenord !== rättLösenord)
    {
        const felInlogg = document.createElement("h1");
        const försökIgenBtn = document.createElement("button");
        felInlogg.innerText = "Fel användarnamn eller lösenord, försök igen.";
        försökIgenBtn.innerText = "Försök igen"
        document.body.innerHTML = " ";
        document.body.append(felInlogg, försökIgenBtn);
        försökIgenBtn.addEventListener("click", function()
        {
            document.body.innerHTML = " ";
            document.body.append(pNamn,namnInput,pLösen,lösenInput,inloggBtn);
        });
    }
});