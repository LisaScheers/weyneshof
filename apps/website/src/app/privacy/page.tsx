import { cn } from '@weyneshof/util';
import { subtitleFont, titleFont } from '@weyneshof/util/fonts';

const titleClass = cn(
  titleFont.className,
  'text-3xl text-primary pt-5 font-bold',
);
const subtitleClass = cn(
  titleFont.className,
  'text-2xl text-destructive pt-3 font-bold ',
);
const subsubtitleClass = cn(subtitleFont.className, 'font-bold inline pr-1');
const paragraphClass = 'pt-3 ';

export default function PrivacyPage() {
  return (
    <div className={'m-auto max-w-3xl pt-2'}>
      <section>
        <h1 className={titleClass}>
          Privacyverklaring en Cookiebeleid voor Speelplein Weyneshof vzw
        </h1>
        <strong className={subsubtitleClass}>
          Laatste update: 19 november 2023
        </strong>

        <p className={paragraphClass}>
          Deze privacyverklaring en cookiebeleid legt uit hoe Speelplein
          Weyneshof vzw (“wij”, “ons” of “onze”) persoonlijke gegevens
          verzamelt, gebruikt en beschermt en hoe cookies en vergelijkbare
          technologieën worden gebruikt op onze website www.weyneshof.be. We
          respecteren uw privacy en streven ernaar uw persoonlijke gegevens te
          beschermen in overeenstemming met de geldende wetten en regels voor
          gegevensbescherming.
        </p>
      </section>
      <section>
        <h2 className={titleClass}>1. Algemeen</h2>
        <p className={paragraphClass}>
          De organisatie heet Speelplein Weyneshof vzw, met ondernemingsnummer
          0410247147, en heeft zijn maatschappelijke zetel in de
          Paardenkerkhofstraat 148 te 2800 Mechelen. De algemeen
          verantwoordelijke is Zino Scheers. Voor contact gedurende het hele
          jaar kunt u ons bereiken via info@weyneshof.be.
        </p>
        <p className={paragraphClass}>
          Speelplein Weyneshof vzw is onderworpen aan de Europese verordening
          van 27 april 2016 betreffende de bescherming van natuurlijke personen
          in verband met de verwerking van persoonsgegevens, ook bekend als de
          GDPR (General Data Protection Regulation) of de AVG (Algemene
          Verordening Gegevensbescherming).
        </p>
      </section>
      <section>
        <h2 className={titleClass}>2. Ouders en Kinderen</h2>
        <h3 className={subtitleClass}>2.1 Persoonsgegevens</h3>
        <p className={paragraphClass}>
          Voor de goede werking van het speelplein verzamelen en verwerken wij
          persoonsgegevens van zowel uw kind als uzelf. Deze gegevens zijn
          essentieel voor de administratie en het welzijn van uw kind tijdens
          hun verblijf bij ons. De volgende persoonsgegevens worden verzameld:
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>2.1.1 Kindgegevens:</strong>
          We vragen om de volledige naam, geboortedatum, geslacht, woonplaats
          en, indien van toepassing, het UiTPAS-nummer van uw kind. Deze
          informatie is cruciaal om de administratie vlot te laten verlopen en
          voor de veiligheid van uw kind tijdens activiteiten op ons speelplein.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            2.1.2 Rijksregisternummer:
          </strong>
          In overeenstemming met de geldende regelgeving vragen wij, in functie
          van van het uitreiken van fiscale attesten, ook het
          rijksregisternummer van u en uw kind. Dit nummer is noodzakelijk om te
          voldoen aan wettelijke verplichtingen en om ervoor te zorgen dat u als
          ouder recht heeft op belastingvoordelen voor de kosten van
          kinderopvang. Het rijksregisternummer wordt uitsluitend gebruikt voor
          administratieve doeleinden en wordt strikt vertrouwelijk behandeld.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            2.1.3 Allergieën, dieetvoorkeuren en medische gegevens:
          </strong>
          Om ervoor te zorgen dat uw kind veilig kan genieten van de aangeboden
          maaltijden, moeten wij op de hoogte zijn van eventuele allergieën of
          dieetvoorkeuren. Wij hanteren een polsbandjessysteem met drie kleuren
          (groen, wit en oranje) om aan te geven of uw kind vegetarisch eet,
          lactose-intolerant is of andere allergieën of intoleranties heeft.
          Deze informatie is van vitaal belang voor de gezondheid en het welzijn
          van uw kind. Daarnaast vragen we om medische informatie over uw kind,
          zoals relevante gezondheidsproblemen of medicijnen die zij nemen. Deze
          informatie wordt alleen bekeken door medewerkers van het secretariaat
          en is uitsluitend bedoeld voor de algemene begeleiding en veiligheid
          van uw kind.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>2.1.4 Contactgegevens:</strong>
          Wij vragen om minstens twee (bij voorkeur drie) telefoonnummers van
          uzelf of van een familielid/kennis die we in noodgevallen kunnen
          bereiken. Dit stelt ons in staat om snel contact op te nemen als dat
          nodig is. Voor communicatiedoeleinden en om u van de nodige informatie
          en attesten te voorzien, vragen we om uw e-mailadres. U kunt zich op
          elk moment afmelden voor e-mails van onze organisatie via de
          afmeldingslink onderaan de e-mails die u van ons ontvangt. Houd er
          echter rekening mee dat servicemails, zoals bevestigingen van
          inschrijvingen of e-mails met attesten, nog steeds aan u worden
          verstuurd.
        </p>
        <h3 className={subtitleClass}>2.2 Bewaring van Gegevens</h3>
        <p className={paragraphClass}>
          Wij bewaren deze persoonsgegevens gedurende een periode van maximaal
          acht jaar in een afgesloten databank. Deze gegevens zijn essentieel
          voor het verstrekken van fiscale attesten en bewijzen van betaling.
          Alleen het kernbestuur en de medewerkers van het secretariaat hebben
          toegang tot deze databank. Op uw verzoek kunnen we deze gegevens
          aanpassen of verwijderen. Deze gegevens kunnen gedeeld worden met
          overheidsdiensten i.f.v. de fiscale aftrekbaarheid van de
          deelnameprijs. We delen deze gegevens op geen enkel ander moment met
          derden.
        </p>
        <h3 className={subtitleClass}>2.3 Statistische Gegevens</h3>
        <p className={paragraphClass}>
          Voor de aanvraag van subsidies bij verschillende gemeentebesturen en
          voor interne evaluatiedoeleinden houden we enkele algemene en
          statistische gegevens bij, zoals het aantal speeldagen, het gemiddelde
          aantal kinderen, enzovoort. Deze gegevens worden geanonimiseerd
          bewaard en worden alleen gebruikt voor rapportage- en
          evaluatiedoeleinden.
        </p>
        <h3 className={subtitleClass}>2.4 Beeldopnames</h3>
        <p className={paragraphClass}>
          Voor het maken van beeldopnames (foto en video) hanteren we een beleid
          in overeenstemming met de wetgeving. Beeldopnames worden uitsluitend
          gemaakt door een medewerker van het secretariaat en worden verwerkt op
          het secretariaat zelf. Beelden waarop kinderen duidelijk herkenbaar
          zijn, worden alleen verspreid via de officiële kanalen van onze
          werking, zoals de website en sociale media, na verkregen toestemming
          van de ouders van de betrokken kinderen. Deze toestemming kan al dan
          niet worden gegeven bij de inschrijving van het kind. Alle foto’s
          worden intern bewaard in een fotoarchief en worden niet gebruikt voor
          gedrukte promotiematerialen, zoals folders en affiches. U heeft te
          allen tijde het recht om deze toestemming te herroepen en ons te
          verzoeken bepaalde foto’s te verwijderen.
        </p>
      </section>
      <section>
        <h2 className={titleClass}>3. Huurders</h2>
        <h3 className={subtitleClass}>3.1 Persoonsgegevens</h3>
        <p className={paragraphClass}>
          Voor de goede werking van de verhuur verzamelen wij persoonsgegevens
          wanneer u zichzelf registreert als contactpersoon voor de verhuur.
          Deze gegevens zijn strikt toegankelijk voor het kernbestuur en de
          conciërge. De volgende persoonsgegevens worden verzameld:
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>3.1.1 Naam en Voornaam:</strong>
          Om contact met u op te nemen met betrekking tot praktische zaken rond
          de verhuur, vragen wij uw naam en voornaam.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>3.1.2 Woonplaats:</strong>
          We vragen naar uw woonplaats om administratieve doeleinden.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            3.1.3 Telefoonnummer en E-mailadres:
          </strong>
          Om contact met u op te nemen met betrekking tot praktische
          formaliteiten van de verhuur, vragen wij om uw telefoonnummer en
          e-mailadres.
        </p>
        <h3 className={subtitleClass}>4.2 Bewaring van Gegevens</h3>
        <p className={paragraphClass}>
          We bewaren deze persoonsgegevens totdat u aangeeft dat u deze niet
          langer wilt ontvangen. Deze gegevens worden bewaard in een afgesloten
          spreadsheet die alleen toegankelijk is voor het kernbestuur.
        </p>
      </section>
      <section>
        <h2 className={titleClass}>5 Beveiliging van Gegevense</h2>
        <p className={paragraphClass}>
          Wij nemen alle redelijke maatregelen om persoonsgegevens te beschermen
          tegen verlies, diefstal en ongeoorloofde toegang. Dit omvat het
          gebruik van beveiligde databanken en toegangsbeperking tot
          geautoriseerde medewerkers.
        </p>
      </section>
      <section>
        <h2 className={titleClass}>6. Uw Rechten</h2>
        <p className={paragraphClass}>
          U heeft te allen tijde het recht om ons te vragen welke gegevens we
          van u bezitten, om deze gegevens waar nodig te laten corrigeren en om
          deze gegevens gedeeltelijk of volledig te laten verwijderen. We zullen
          elk verzoek zo snel mogelijk behandelen. Als we niet reageren op een
          legitiem verzoek voor inzage, correctie of verwijdering van gegevens,
          kunt u contact opnemen met de Gegevensbeschermingsautoriteit (GBA). U
          vindt hun contactgegevens op www.gegevensbeschermingsautoriteit.be.
        </p>
      </section>
      <section>
        <h2 className={titleClass}>7. Cookiebeleid</h2>
        <p className={paragraphClass}>
          Onze website maakt gebruik van cookies en vergelijkbare technologieën
          om uw browse-ervaring te verbeteren en statistische informatie te
          verzamelen over het gebruik van onze website.
        </p>
        <h3 className={subtitleClass}>7.1 Welke cookies gebruiken we?</h3>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            7.1.1 Noodzakelijke Cookies:
          </strong>
          Deze cookies zijn essentieel voor het functioneren van de website en
          kunnen niet worden uitgeschakeld in onze systemen. Ze worden meestal
          alleen ingesteld in reactie op acties die u onderneemt, zoals het
          instellen van uw privacyvoorkeuren, inloggen of het invullen van
          formulieren. U kunt uw browser instellen om deze cookies te blokkeren
          of waarschuwingen hierover te ontvangen, maar sommige delen van de
          website werken mogelijk niet meer.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>7.1.2 Prestatiecookies:</strong>
          Deze cookies stellen ons in staat om het aantal bezoeken aan de
          website te tellen en verkeersbronnen te analyseren, zodat we de
          prestaties van onze website kunnen meten en verbeteren. Ze helpen ons
          te begrijpen welke pagina’s het meest en minst populair zijn en hoe
          bezoekers zich op de site verplaatsen. Alle informatie die deze
          cookies verzamelen, is geaggregeerd en daarom anoniem. Als u deze
          cookies uitschakelt, weten we niet wanneer u onze website heeft
          bezocht en kunnen we de prestaties ervan niet volgen.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            7.1.3 Functionele Cookies:
          </strong>
          Deze cookies stellen de website in staat om verbeterde functionaliteit
          en personalisatie te bieden. Ze kunnen worden ingesteld door ons of
          door externe providers wiens diensten we hebben toegevoegd aan onze
          pagina’s. Als u deze cookies uitschakelt, kunnen sommige of al deze
          functies mogelijk niet correct werken.
        </p>
        <p className={paragraphClass}>
          <strong className={subsubtitleClass}>
            7.1.4 Targeting Cookies:{' '}
          </strong>
          Deze cookies kunnen door onze advertentiepartners via onze website
          worden ingesteld. Ze kunnen door die bedrijven worden gebruikt om een
          profiel van uw interesses samen te stellen en u relevante advertenties
          op andere websites te tonen. Ze slaan geen directe persoonlijke
          informatie op, maar zijn gebaseerd op unieke identificatoren van uw
          browser en internetapparaat. Als u deze cookies uitschakelt, zult u
          minder gepersonaliseerde advertenties ervaren.
        </p>
        <h3 className={subtitleClass}>7.2 Hoe kunt u cookies beheren?</h3>
        <p className={paragraphClass}>
          U kunt uw cookievoorkeuren op elk moment aanpassen door uw
          browserinstellingen te wijzigen. U kunt uw browser ook instellen om u
          te waarschuwen wanneer er cookies worden geplaatst op uw apparaat en
          om deze cookies te weigeren. Houd er rekening mee dat het uitschakelen
          van cookies de functionaliteit van de website kan beïnvloeden.
        </p>
      </section>
    </div>
  );
}
