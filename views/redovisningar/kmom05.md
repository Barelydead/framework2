Moment 05
---------------


#### Hur gick det att komma igång med databasen MongoDB?
Det gick helt okej. Jag började med att leka lite i mongo clienten för att komma in i hur de olika CRUD delarna fungerade. När jag kände att jag hade lite koll på grunderna så började jag klura på hur man integrar det mot node. Det gick ganska smärtfritt men som alltid när man jobbar med något nytt så får man räkna med att det tar lite tid. Det blev en hel del manualläsande för att komma in i hur man bör bygga upp sin kod.

#### Vilken syn har du på databaser inom konceptet NoSQL?
Jag har väldigt lite erfarenhet av databaser utanför SQL-världen så har inte så känns svårt att säga något vettigt. Det lilla jag har läst är att nosql ofta anses snabbare och är lättare att skala upp än Sql. Om det stämmer har jag ingen aning om.

#### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.
På ett översiktligt plan så verkar det fungera på liknande sätt. Databasen används för att på ett smidigt sätt kunna hämta, lagra och manipulera data. Det finns en databas-server som snurrar någonstans och väntar på att ta emot querys som sedan utförs.

När vi sedan kommer in på hur man använder databaserna i ett programmeringsperspektiv så börjar man se skillnader. Den mesta uppenbara skillnaden för mig är att man inte har strika tabeller att gå efter. Man kan lägga in precis vad man vill i databasen och man får inga klagomål. Det kändes otroligt befriande att inte behöva skapa alla dessa tabeller och det gjorde också att det gick mycket snabbare att komma igång. Så den givna frågan för mig blir, vad finns det för fördelar med att ha tabeller? Utifrån den lilla kunskap jag har om nosql och framförallt mongo så är det svårt att svara på men jag misstänker att just koppla ihop data är enklare i en sql miljö. Det heter ju trots allt relationsdatabas. Om det finns lika smidiga sätt att "joina"-dokument i mongo som i sql så tycker jag att nosql verkar väldigt lockande. Det ska bli kul att fortsätta jobba med nosql och se vilka möjligheter och begränsningar som finns.


#### Vilka är dina tankar om asynkron programmering med JavaScript?
Det är helt klart ovant och i vissa fall lite klurigt att förstå. I detta kursmoment testade jag att använda async/await vilket jag inte gjort förut och jag tycker det blev tydligare än att använda callbacks eller then. Enligt mig så blev koden renare när man skrev det på det sättet och det blev enklare att följa flödet. Generellt så tycker jag det går bra med asynkorn programmering så länge man löser ett problem i taget.


#### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?
Jag har blandade känslor om docker. Det jag definitivt gillar med docker är att det känns så fruktansvärt snabbt. Jag tycker att saker och ting går snabbare i mina docker-containrar än på min lokala miljö. Hur det går till vågar jag inte svara på, men det är iallafall min uppfattning. Jag gillar också möjligheten att på ett väldigt enklet sätt kunna konfigurera den miljön man kör sina saker i.

Det som känns mindre bra med docker är möjligheten att felsöka. Allt blir lite mer komplext när man kör saker i containrar istället för att köra det lokalt. Det blir ett extra steg där någonting kan gå fel. När något sedan går fel så kan det vara svårt att veta vart man ska börja leta. Är det containern, dockerklieten, den lokala miljön, koden? Det är möjligt att det är min okunskap som sätter käppar i hjulet och att man med lite mer erfarenhet hittar felen snabbare. Men än så länge så är det där jag har mina största frågetecken om docker. Precis som med noSQL så behöver jag testa med mer för att kunna säga någonting vettigt.
