Moment 01
---------------


#### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.
Express verkar vara ett ganska litet ramverk i grunden vilket känns skönt. Det blir enkelt att komma igång när den kodmassa man får är liten och det går enkelt att addera fristående moduler för att få den funktionalitet som man vill ha i ett senare skede.

Jämfört med tex anax så känns det lättare att komma in i då det inte kräver så mycket konfigurering men i övrigt ganska likt. Filen app.js kickar igång webbplatsen med dependencies likt index.php/services.php i anax. Routern får in en request och renderar en vy som skickas som en respons till användaren, det känns också igen från anax. Sen finns det olikheter såklart och den största skillnaden jag ser är att i Express/node så är ramverket också själva servern. I PHP så är det applikationen separerad från servern på ett annat sätt.

Det är svårt att säga så mycket om ramverket när jag hittills bara har gjort en enkel statisk webbplats. Jag har än så länge bara använt det mest grundläggande så jag väntar lite med ett utlåtande tills jag har testat lite fler delar av ramveket.

Att skriva sina vyer i pug var något nytt och tog lite tid innan jag greppat. Det jag tycker var trevlig med pug är att man kan använda sig av layoutfiler och dela in sidorna i mindre delar. En annan positiv sak är att man kan använda vanlig HTML direkt i pug filer om man vill. Det jag var mindre imponerad över är väl syntaxen då det kändes lite väl minifierad och jag kände att jag inte hade full kontroll på hur man gjorde enkla saker som att loopa en array eller skriva ut en variabel. Det är väl en vanesak kanske. Vi får se.

#### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
Jag valde att använda samma struktur som express app generator. I och med att jag aldrig jobbat med express så kändes det tryggt att följa en mall där man får med alla väsentliga delar. Utöver det man får av scaffolden så har jag fixat så att alla standard routes finns på ett ställe samt gjort en enkel struktur för vyerna. Eftersom att jag valde app generatorn och inte skrev koden själv så har jag försökt att kolla upp alla delar i ramverket och se hur det fungar. Dokumentationen på expressjs.com var tydlig och enkel att förstå, än så länge.

#### Använde du någon form av scaffolding som Express erbjuder?
Japp, som beskrivet ovan.

#### Jobbar du med Markdown för innehållet, eller annat liknande?
Ja jag testade att spara mina redovisningstexter som markdown och med hjälp av pug importera dessa och konvertera till HTML.
