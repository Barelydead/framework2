Moment 02
---------------


#### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Nja, docker är helt nytt för och jag är ingen van användare av virtualiseringsverktyg. I linux kursen så använde vi virtual box och i webapp så körde vi någon andriod emulator men jag fick aldrig nått riktigt bra grepp om hur det fungerade. Så för att vara ganska ovan med dessa termer så gick det ganska smidigt att komma igång. Jag gick igenom övningen och lekte lite med docker help kommandona för att se vad man kunde göra.

#### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Jag är mycket positivt inställd till docker. Allt kändes snabbt och det fungerade nästan lite magiskt smidigt.
Det krävdes väldigt lite konfigurering för att sätta upp flera olika containrar med varierande innehåll på vilket gör att man snabbt kan testa sina program i olika miljöer.

Jag känner också att docker kan vara en bra grej att använda när man jobbar i team då man kan sätta upp en likadan container oavsätt vilken miljö man har lokalt.

Nu har vi bara skrapat lite på ytan av vad man kan använda docker till och jag är redan såld.


#### Gick allt smidigt eller stötte du på problem?
Det mesta gick ganska smidigt men jag sötte på några problem.

De problemen jag upplevde var att jag inte kunde använda cygwin fullt ut då det inte går att köra en interactive container. Enligt google så ska det gå att installera ett extra paket för att lösa problemet men jag misslyckades med det. Ett annat litet strul jag hade var när jag skulle koppla min container till en lokal fil. Efter mycket testande så kom jag fram till att det inte gick att använda $pwd då den ger en sökväg som inte är i windowsformat.

Både mina problem löstes genom att köra docker i windows powershell istället för cygwin. Jag ville helst slippa byta terminal eftersom jag har vant mig att använda cygwin men det var definitivt värt det.

Att få lite strul tror jag var bra då jag har fått ganska bra koll på de grundläggande kommandona som docker erbjuder.

#### Skapade du din egen image, berätta om den?
Nej, jag har inte testat att skapa en egen image än så länge.
