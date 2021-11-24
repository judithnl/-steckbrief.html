var eu8 = 1028;
var eu18 = 1235.5;

var na8 = 6600.4;
var na18 = 6035.6;

var sa8 = 1132.6;
var sa18 = 1261.5;

var af8 = 1028;
var af18 = 1235.5;

var as8 = 12954.7;
var as18 = 16274.1;
    
var aus8 = 1993;
var aus18 = 2100.5;

var gesamt8 = eu8+na8+sa8+af8+as8+aus8;
var gesamt18 = eu18+na18+sa18+af18+as18+aus18;

console.log('Die Emission von Europa ist: ' + eu18 + 'Relativ zur Gesamtemission der Welt verusacht Europa damit ' 
+ (eu18 / gesamt18*100).toFixed(0) +'%. Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((eu18 / eu8-1)*100).toFixed(0) + '% geändert. 2018 im Vergleich zu 2008 sind das ' + (eu18-eu8).toFixed(0) + ' kg CO2');

console.log('Die Emission von Nordamerika ist: ' + na8 + 'Relativ zur Gesamtemission der Welt verusacht Nordamerika damit ' 
+ (na18 / gesamt18*100).toFixed(0) +'%. Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((na18 / na8-1)*100).toFixed(0) + '% geändert. 2018 im Vergleich zu 2008 sind das ' + (na18-na8).toFixed(0) + ' kg CO2');

console.log('Die Emission von Südamerika ist: ' + sa18 + 'Relativ zur Gesamtemission der Welt verusacht Südamerika damit ' 
+ (sa18 / gesamt18*100).toFixed(0) +'%.Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((sa18 / sa8-1)*100).toFixed(0) + '% geändert.2018 im Vergleich zu 2008 sind das ' + (sa18-sa8).toFixed(0) + ' kg CO2');

console.log('Die Emission von Afrika ist: ' + af18 + 'Relativ zur Gesamtemission der Welt verusacht Afrika damit ' 
+ (af18 / gesamt18*100).toFixed(0) +'%.Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((af18 / af8-1)*100).toFixed(0) + '% geändert.2018 im Vergleich zu 2008 sind das ' + (af18-af8).toFixed(0) + ' kg CO2');

console.log('Die Emission von Asien ist: ' + as18 + 'Relativ zur Gesamtemission der Welt verusacht Asien damit ' 
+ (as18 / gesamt18*100).toFixed(0) +'%.Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((as18 / as8-1)*100).toFixed(0) + '% geändert.2018 im Vergleich zu 2008 sind das ' + (as18-as8).toFixed(0) + ' kg CO2');

console.log('Die Emission von Australien ist: ' + aus18 + 'Relativ zur Gesamtemission der Welt verusacht Australien damit ' 
+ (aus18 / gesamt18*100).toFixed(0) +'%.Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' 
+ ((aus18 / aus8-1)*100).toFixed(0) + '% geändert.2018 im Vergleich zu 2008 sind das ' + (aus18-aus8).toFixed(0) + ' kg CO2');