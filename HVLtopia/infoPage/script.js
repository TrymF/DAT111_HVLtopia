

function setPageName(pageName) {
    console.log("Setting page name: " + pageName);
    sessionStorage.setItem("infoPage", pageName);

}

const imgPath = ["/HVLtopia/temp.png", "/HVLtopia/temp.png", "/HVLtopia/temp.png", "/HVLtopia/temp.png"];

const pageNames = ["Om prosjektet", "Løsninger, resultater og impact", "Bærekraft og Samfunnsansvar", "Engasjement for Bærekraft"];

const pageText = [
    "Visjon og Mål:" +
    " Prosjektets visjon er å skape fremtidens bærekraftige og trygge byer, hvor teknologiske løsninger fremmer miljøvennlighet, trivsel og inkludering for alle innbyggere. Hovedmålet er å integrere innovativ teknologi for å optimalisere byens transport, miljøovervåkning og ressurseffektivitet, og dermed sikre en grønnere, mer helsevennlig og tilgjengelig by for alle" +
    "Bakgrunn:" +
    " Den raske urbaniseringen har skapt et økende behov for bærekraftig byutvikling. Med befolkningstettheten i byene kommer utfordringer knyttet til forurensning, energiforbruk, og infrastruktur. Teknologi spiller en avgjørende rolle i å møte disse utfordringene ved å muliggjøre smartere styring av ressurser og mer effektive løsninger for både innbyggere og miljø. IT kan drive utviklingen av smartere transportsystemer, overvåke og forbedre luftkvaliteten, og sikre at helse- og miljøstandarder opprettholdes i byene." +
    " Prosjektbeskrivelse:" +
    " Dette prosjektet har som hensikt å utvikle og implementere teknologiske løsninger som fremmer bærekraftig byutvikling. Gjennom bruk av smarte sensorer, kunstig intelligens og digitale plattformer, skal prosjektet overvåke miljøfaktorer som luftkvalitet, støy og energiforbruk. Målet er å skape byer som er både miljøvennlige og innbyggerfokuserte, med forbedret transporteffektivitet og redusert karbonavtrykk. Forventede resultater inkluderer renere luft, bedre folkehelse, mer effektiv ressursbruk og økt innbyggerengasjement for bærekraftige løsninger.",

    " Oversikt over løsninger og teknologier:" +
    " I HVLtopia har vi utviklet og implementert en rekke banebrytende teknologiske løsninger for å fremme bærekraftig byutvikling. Noen av de mest sentrale teknologiene inkluderer:" +
    " Smarte sensorer: Disse overvåker kontinuerlig luftkvalitet, temperatur og støy i sanntid. Dataene blir analysert for å kunne tilpasse tiltak som reduserer forurensning og forbedrer livskvaliteten." +
    " Energistyringssystemer: Ved bruk av avanserte algoritmer optimaliseres energiforbruket i bygg og offentlig infrastruktur, noe som bidrar til redusert strømforbruk og lavere karbonutslipp." +
    " Smartere transportløsninger: Ved hjelp av sensorer og sanntidsdata er byens transportsystem mer effektivt organisert, noe som reduserer trafikkbelastning og energiforbruk knyttet til transport." +
    " Digitale plattformer: Disse plattformene gjør det mulig for innbyggerne å få direkte tilgang til informasjon om miljøtilstanden i byen, samt tips om hvordan de selv kan bidra til et mer bærekraftig lokalsamfunn." +
    " Resultater oppnådd så langt:" +
    " HVLtopia har allerede oppnådd imponerende resultater. Luftkvaliteten i byen har blitt betydelig forbedret, noe som har ført til en reduksjon i luftveisplager blant innbyggerne. Energiforbruket i bygninger er redusert med opptil 25 %, noe som har ført til en direkte nedgang i byens karbonfotavtrykk. I tillegg har transportsystemet blitt langt mer effektivt, med mindre trafikkork og kortere ventetider for offentlig transport. Dette har også ført til lavere utslipp fra kjøretøy." +
    " Impact på lokalsamfunnet og langsiktige fordeler:" +
    " HVLtopia har hatt en dyp og positiv effekt på lokalsamfunnet. Innbyggerne opplever en økt livskvalitet gjennom renere luft og enklere transportmuligheter. Prosjektet har også skapt større bevissthet om bærekraft blant befolkningen, som i økende grad deltar aktivt i byens miljøarbeid. På lang sikt forventes HVLtopia å være et forbilde for andre byer som ønsker å gå i en grønnere og mer bærekraftig retning. Teknologiene som er utviklet, kan videreføres til andre byer, og erfaringene fra prosjektet kan bidra til en bredere implementering av smarte byløsninger over hele verden.",

    "Energi og Miljø:" +
    " I HVLtopia har vi tatt flere konkrete grep for å redusere energiforbruket og minimere karbonfotavtrykket. Bygninger og infrastruktur er utstyrt med energieffektive systemer som bruker smarte algoritmer for å styre energibruken optimalt. Dette inkluderer solcelleanlegg på tak, energieffektive vinduer og isolasjon, samt bruk av fornybar energi i størst mulig grad. Byen har også et omfattende system for energigjenvinning som reduserer avfall og sørger for at energi fra ulike kilder utnyttes effektivt. Samlet har disse tiltakene ført til en betydelig reduksjon i byens samlede energiforbruk og karbonutslipp." +
    " Mobilitet:" +
    " Transportløsninger i HVLtopia er designet for å fremme bærekraftig mobilitet. Et godt utbygget nettverk av elbusser, sykkelveier og gågater gjør det enkelt for innbyggerne å velge miljøvennlige transportalternativer. Smarte trafikksystemer styrer trafikkflyten for å minimere køer og optimalisere reisetid, noe som reduserer både drivstofforbruk og utslipp. Elbil-ladestasjoner er strategisk plassert rundt i byen for å støtte en økende andel elektriske kjøretøy. Disse tiltakene reduserer avhengigheten av fossilt drivstoff og bidrar til en renere byluft." +
    " Helse og Sikkerhet:" +
    " Prosjektet setter også stort fokus på helse og sikkerhet. Smarte sensorer er plassert rundt i byen for kontinuerlig å overvåke luftkvaliteten, støy og andre miljøfaktorer som påvirker innbyggernes helse. Systemet gir tidlig varsling dersom nivåene av skadelige stoffer overstiger trygge grenser, og tiltak kan iverksettes raskt for å beskytte befolkningen. Videre er offentlige rom designet med sikkerhet i tankene, med gode lysforhold og åpne plasser som fremmer trygg ferdsel for alle. Helsestasjoner i byen er koblet til det smarte nettverket, slik at de kan overvåke folks helse og raskt reagere på potensielle helsekriser. Sammen bidrar disse tiltakene til et sunnere og tryggere miljø for byens innbyggere.",

    "Felles ansvar for bærekraft:" +
    " For at HVLtopia skal lykkes med å skape en bærekraftig by, er det avgjørende at innbyggerne aktivt bidrar og engasjerer seg. Bærekraftige løsninger kan bare oppnå sitt fulle potensial når samfunnet som helhet står bak dem. Ved å redusere eget energiforbruk, ta i bruk grønnere transportalternativer og delta i lokale miljøtiltak, kan hver enkelt innbygger bidra til å redusere byens samlede karbonfotavtrykk. Små handlinger fra mange mennesker kan til sammen utgjøre en betydelig forskjell for byens bærekraftsmål." +
    " Skap et bedre lokalsamfunn:" +
    " Ved å delta i prosjektet får innbyggerne muligheten til å være med på å forme sitt eget lokalsamfunn. Deres innspill og handlinger er med på å skape en tryggere, renere og mer inkluderende by. Engasjement i lokale initiativer som miljødugnader, deling av kunnskap om bærekraftige praksiser og samarbeid med lokale myndigheter gir innbyggerne en følelse av eierskap over fremtidens byutvikling. Det handler om å skape et sted der alle trives, og hvor kommende generasjoner kan vokse opp i et sunnere miljø." +
    " Styrk samfunnets motstandsdyktighet:" +
    " Aktiv deltakelse fra innbyggerne er avgjørende for å styrke byens evne til å håndtere fremtidige utfordringer, som klimaendringer og befolkningsvekst. Ved å engasjere seg i prosessen kan innbyggerne lære mer om hvordan de kan tilpasse seg endringer og bidra til byens robusthet. Deres engasjement kan også bidra til raskere identifisering og løsning av lokale problemer, for eksempel gjennom bruk av teknologiske plattformer der folk kan rapportere problemer med luftkvalitet, støy eller infrastruktur." +
    " Fremme bevissthet og kollektiv handling:" +
    " Innbyggernes engasjement er nøkkelen til å spre kunnskap og øke bevisstheten om bærekraft. Ved å være rollemodeller i sitt nærmiljø kan de inspirere andre til å ta bærekraftige valg i hverdagen. Jo flere som deltar aktivt, jo større er sjansen for å skape en kultur for bærekraftig handling i hele samfunnet. Dette vil bidra til en varig endring der bærekraftige valg blir normen og ikke unntaket."
];


function loadInfoPage() {
    var pageName = sessionStorage.getItem("infoPage");
    console.log("trying to set up page: " + pageName);

    for (let i = 0; i <= pageNames.length; i++)
        if (pageNames[i] == pageName) {
            loadePageNum(i);
            return;
        }
    console.log("could not find page: " + pageName);
}

function loadePageNum(num) {
    var pageName = sessionStorage.getItem("infoPage");

    var imageElement = document.getElementById("image"),
        headerElement = document.getElementById("header"),
        paragraphElement = document.getElementById("paragraph");

    if (imageElement) {
        console.log("Setting page: " + pageNames[num]);

        imageElement.src = imgPath[num];
        headerElement.textContent = pageNames[num];
        paragraphElement.textContent = pageText[num];
    }
    else
        console.log("could not find id for image");

}