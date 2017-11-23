Moment 03
---------------


#### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?
Jag valde att köra på mocha för testerna och istanbul för kodtäckningen. Eftersom att jag inte jobbat med test i javascript sedan tidigare så har jag inte några särskilda preferencer och valde därför att köra på de rekommenderade teknikerna.

Jag tyckte att mocha kändes som ett bra bibliotek och jag gillar att man kan göra tydliga besrkivningar av vad man testar.

#### Berätta om cin CI-kedja och reflektera över de valen du gjorde?
Som sagt så har jag använt mocha för att skapa mina tester. Som byggtjänst använder jag travis och scrutinizer som kör tester samt validatorer på koden. Jag valde att ta med scrutinizer då jag gillar att man får både kodtäckning och kodkvalitet av en och samma tjänst.

För att ytterligare få feedback på kodkvalitet så testade jag också att använda better code hub. Jag tycker det fungerar bra att ha två tjänser för kodkvalitet då de fokuserar på lite olika saker.


#### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.
Det gick bra att att köra testerna i docker-containers. Jag förstår att man kan villa testa i flera olika versioner av node om man inte själv har full kontroll över vart koden till slut kommer köras. Har man däremot möjlighet att själv välja vad som installerars på servern koden kommer köras från så känns det som ett onödigt steg.

Så ett exempel där jag kan se nyttan i det är om man ska skapa en publik modul som kommer användas i många olika projekt.


#### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
Nja, jag började uppgiften med att göra tester först men eftersom att jag inte var helt säker på vad jag ville göra för typ av app och hur allt skulle hänga ihop så blev det lurigt att skriva tester först. När jag ska skapa någonting nytt är det sällan jag har en klar bild av hur allt ska fungera vilket gör min kod ofta ändras kraftigt under arbetet. Med det arbetssättet så är det allt för tidskrävande att skriva tester innan och av den anledningen så föredrar jag nog att skriva mina tester efter. Det jag tycker är viktigt är att bestämma innan påbörjat arbete att koden ska testas så att den skrivs på ett testbart sätt.

#### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
Jag vill göra ett online schack där spelare kan mötas i en lobby och sedan hoppa in i ett spel. Jag tänker mig att man ska kunna chatta med sin motspelare samt att man kan bestämma olika tidsintervall för spelet.

Vad gäller serverdelen så har jag börjat utveckla grunden till spelmotorn men jag har inte riktigt kommit fram till hur allt ska hänga ihop än. Min tanke är att servern kommer använda min schackmotor som man sedan kan komma åt via ett REST-api. Lite likt det upplägget som vi jobbade med i Linux/Gomoku-uppgiften.

Jag har inte börjat utveckla klientkoden än så länge och jag har inte heller valt någon teknik för detta ännu. Det vore kul att jobba med något ramverkt likt react/vue/angular då jag känner att det är väldigt efterfrågat ute i verkliga världen. Dock så är jag lite orolig att det blir för ambititöst att både sätta sig in i ett nytt ramverk samtidigt som man ska utveckla servern med tekniker som jag inte är van att jobba med. Känner jag att jag har tid så kommer jag testa något av dessa ramverk annars så bygger jag klienten med vanlig html css och Js.
