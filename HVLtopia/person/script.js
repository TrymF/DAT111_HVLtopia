


function setPerson(name) {
    console.log("Name of person: " + name);
    sessionStorage.setItem("personPage", name);
}

const profilePicturePath = "/person/profilePictures/";

const profilePictures = [profilePicturePath + "Trym Fanebust.jpg", profilePicturePath + "William Waly.jpg",
profilePicturePath + "Simon Toft.jpg", profilePicturePath + "Stian Valstad.jpg",
profilePicturePath + "Bjarte Sætre.jpg", profilePicturePath + "Ola Tungesvik.jpg"];

const names = ["Trym Fanebust", "William Waly", "Simon Toft",
    "Stian Valstad", "Bjarte Sætre", "Ola Tungesvik"];

const eMailAdress = ["TrymFanebust@gmail.com", "WilliamWaly@gmail.com", "SimonToft@gmail.com",
    "StianValstad@gmail.com", "BjarteSætre@gmail.com", "OlaTungesvik@gmail.com"];

const biography = ["Trym Fanebust er prosjektleder for HVLtopia og har en sentral rolle i å styre og koordinere prosjektets ulike faser. Med en mastergrad i by- og regionalplanlegging og over 12 års erfaring i prosjektledelse, bringer Trym omfattende kompetanse til teamet. Han har tidligere ledet flere store bærekraftige byutviklingsprosjekter, og hans evne til å håndtere komplekse oppgaver og utfordringer er uvurderlig. Trym er dedikert til å integrere innovative løsninger som vil forbedre både miljømessige og sosiale aspekter ved byutvikling.",
    "William Waly er teknologisk konsulent i HVLtopia og spesialiserer seg på utvikling og implementering av smarte teknologiske løsninger. Han har en bachelorgrad i informatikk og mer enn 8 års erfaring med Internet of Things (IoT) og smartteknologi. William er ansvarlig for å sørge for at de teknologiske systemene, som smarte sensorer og energistyringssystemer, fungerer effektivt og gir pålitelige data. Hans tekniske ekspertise sikrer at HVLtopia har de mest avanserte og pålitelige løsningene på markedet.",
    "Simon Toft fungerer som miljøanalytiker i HVLtopia og spiller en viktig rolle i overvåkningen og evalueringen av byens miljøforhold. Med en doktorgrad i miljøvitenskap og over 10 års erfaring innen miljøforskning, har Simon dyp kunnskap om luftkvalitet, støyforurensning og energiforbruk. Han analyserer data fra byens smarte sensorer og utvikler strategier for å håndtere identifiserte miljøutfordringer. Simon er kjent for sin evne til å oversette komplekse miljødata til konkrete anbefalinger og tiltak som bidrar til en grønnere by.",
    "Stian Valstad er transportplanlegger i HVLtopia og har ansvaret for å utvikle og forbedre byens transportsystemer. Han har en mastergrad i trafikksikkerhet og mobilitet og har jobbet med bærekraftig transport i over 9 år. Stian jobber med å implementere løsninger som reduserer trafikkbelastning og fremmer miljøvennlig transport. Hans ekspertise omfatter alt fra optimalisering av kollektivtrafikk til utbygging av sykkelveier og gågater. Stians mål er å skape en mer effektiv og grønn transportinfrastruktur for alle innbyggere.",
    "Bjarte Sætre er kommunikasjonsansvarlig for HVLtopia og har en sentral rolle i å formidle prosjektets fremdrift og resultater til innbyggerne og andre interessenter. Med en bachelorgrad i medie- og kommunikasjonsvitenskap og over 7 års erfaring i kommunikasjon og PR, er Bjarte dyktig i å utvikle informasjonskampanjer og håndtere mediekontakt. Han er ansvarlig for å sikre at prosjektets budskap når ut på en klar og engasjerende måte, og for å bygge positivt omdømme for HVLtopia gjennom effektiv kommunikasjon og publisering.",
    "Ola Tungesvik er samfunnsengasjementskoordinator og jobber med å involvere lokalsamfunnet i HVLtopia-prosjektet. Med en bakgrunn i samfunnsarbeid og en bachelorgrad i sosialt arbeid, har Ola over 10 års erfaring med å mobilisere frivillige og organisere samfunnsinitiativer. Han er ansvarlig for å arrangere lokale møter, workshops og frivillighetsaktiviteter, samt for å bygge partnerskap med lokale organisasjoner og grupper. Olas arbeid er essensielt for å fremme fellesskapets deltakelse og engasjement i bærekraftige tiltak og prosjektets målsettinger."
];

function loadPerson() {
    var namePerson = sessionStorage.getItem("personPage");

    console.log(namePerson);

    for (let i = 0; i < names.length; i++)
        if (i == namePerson) {
            loadElementsPerson(i);
            return;
        }
    console.log("loading error");

}

function loadElementsPerson(personNum) {
    console.log("loading info for: " + names[personNum]);

    var profilePictureElement = document.getElementById("profilePicture"),
        profileNameElement = document.getElementById("profileName"),
        emailAddressElement = document.getElementById("emailAdress"),
        biographyElement = document.getElementById("biografi");

    if (profilePictureElement) {
        profilePictureElement.src = profilePictures[personNum];
        profileNameElement.textContent = "Navn: " + names[personNum];
        emailAddressElement.textContent = "Mail: " + eMailAdress[personNum];
        biographyElement.textContent = biography[personNum];
    }
    else
        console.log("could not find id for image");
}
