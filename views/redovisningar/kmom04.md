Moment 04
---------------


#### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?
Japp! Detta är inget jag pysslar med tidigare men det känns som att användningsområdet är väldigt stort. Att skapa en chat var ett bra sätt att komma in i hur/var/när kommunikationen mellan server och client skickas. Nu när man kan skicka meddelanden fram och tillbaka så kan man ju byta ut chatten mot spel, verktyg och andra saker som har flera användare sammtidigt.


#### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?
Det gick hyffsat bra men det blev en hel del console.loggande till en början för att se när vissa funktioner körs. När man väl kommit in i hur det fungerar så var det faktiskt ganska enkelt. Jag stötte på lite problem när jag skulle skapa chatten och inte koll på att emit och broadcast.emit var två olika saker. Den ena skickar meddelandet till ALLA klienter och den andra till alla UTOM den ursprunliga sändaren. Det tog mig ett antal timmar att klura ut vad felet var men som alltid så lär man sig mycket när det inte går vägen direkt. Nu har jag stenkoll på de olika sätten men emittar mot klienterna.

#### Berätta om din chatt som du integrerade i redovisa-sidan.
Som sagt så bygger hela chatten på socket.io och för att komma in till chatten så behöver man skriva in ett användarnamn. Väl i chatten så kan man se en lista på ansluta klienter samt skicka meddelanden till alla och privata meddelanden genom att skriva "@användare msg".

När man skriver ett meddelande i chatten så skickas ett jsonobject till servern med information om sändaren, mottagare och meddelandet i sig. På servern sker sedan kontroll om mottagare finns och valideringen av meddelandet så att det inte inhåller något skadligt.


#### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.
Chatten som jag har byggt till redovisningssidan kommer implementeras till min app men eftersom jag inte vet om jag kommer göra den till en npm modul eller hur det blir så har jag inte lagt till detta ännu. Chatten är modulär redan nu så att den kan plockas in i andra projekt och jag valde också att lägga några enhetstest så att den är klar att användas på ett snyggt sätt som en modul framöver.

Jag kommer säkerligen använda mig av sockets på något sätt i mitt schackspel så båda spelarna måste se vad som händer med brädet. Exakt hur detta ska implementeras flyttar jag fram till kravvarande kursmoment.
