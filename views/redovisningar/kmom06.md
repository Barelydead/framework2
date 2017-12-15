Moment 06
---------------


#### Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.
Det känns viktigt för ett programmeringsspråk att ha en pakethanterare som är enkel att använda. Om det är enkelt att använda och det finns många moduler att hämta så slipper man skriva all kod själv och det blir både roligare och snabbare att komma igång med ett projekt. Inget programmeringspråk är perfekt och moduler kan vara ett sätt att hjälpa till att täppa igen hål som finns i språket eller addera bättre funktionalitet.


#### Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?
Jadu, jag tror att javascript är är ett av de första språk man kommer i kontakt med när man jobbar med webbutveckling. Om det är så att alla PHP-användare kan lite javascript med inte alla javascript-användare kan PHP så är det ju natuligt att det finns fler moduler på npm. Det tillsammans med att npm gör det väldigt lätt att ladda upp moduler.


#### Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.
Jag bestämde mig ganska tidigt i kursen för att skapa en schackmodul så det har hela tiden legat i bakhuvudet att den koden måste vara separerad. Att jag har hållit fast vid min grundtanke har varit bra för jag har haft tid på mig att tänka på hur jag ska utforma modulen och skrivit några kodrader här och var under kursens gång. Jag hade också sedan tidigare börjat med testning av modulen vilket gjorde att det gick snabbt att komma upp i en rimlig procentenhet av kodtäckning. Jag tycker det är mycket mer motiverade att skapa en bra modul i denna kurs jämfört med ramverk1 då denna modul faktiskt kan återanvändas i flera sammanhang.

Själva publikationen av modulen var busenkelt. Skapa ett konto på npm och köra npm publish. Att plocka in modulen i projektet igen var inte heller några problem men till en början så hade jag ingen Main-fil i mitt skript vilket gjorde att jag fick skriva sökvägen när jag gjorde require på modulen, typ require("oop-chess/src/index"). Jag ändrade detta i modulen och nu gör man require("oop-chess") så får man den relevanta klassen direkt.


#### Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?
Nej det tog inte så mycket tid. Jag hade i stort sett allting klart sedan tidigare moment så det handlade bara om att göra lite snyggt i README filen och se till så att de olika npm-kommandona funger som tänkt.
