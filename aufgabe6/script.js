var eu8 = 1028;
var eu18 = 1235.5;
var eu = "Europa";
var na8 = 6600.4;
var na18 = 6035.6;
var na = "Nordamerika";
var sa8 = 1132.6;
var sa18 = 1261.5;
var sa = "Südamerika";
var af8 = 1028;
var af18 = 1235.5;
var af = "Afrika";
var as8 = 12954.7;
var as18 = 16274.1;
var as = "Asien";
var aus8 = 1993;
var aus18 = 2100.5;
var aus = "Australien";
var gesamt8 = eu8 + na8 + sa8 + af8 + as8 + aus8;
var gesamt18 = eu18 + na18 + sa18 + af18 + as18 + aus18;
var el;
(function (el) {
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () {
            what(eu, eu18, eu8);
        });
        document.querySelector(".africa").addEventListener("click", function () {
            what(af, af18, af8);
        });
        document.querySelector(".asia").addEventListener("click", function () {
            what(as, as18, as8);
        });
        document.querySelector(".australia").addEventListener("click", function () {
            what(aus, aus18, aus8);
        });
        document.querySelector(".northamerica").addEventListener("click", function () {
            what(na, na18, na8);
        });
        document.querySelector(".southamerica").addEventListener("click", function () {
            what(sa, sa18, sa8);
        });
    });
    function what(conti, conti18, conti8) {
        document.querySelector("#titleRegion").innerHTML = conti;
        document.querySelector("#co2").innerHTML = conti18.toFixed(1);
        document.querySelector("#prozent").innerHTML = (((conti18 - conti8) / conti8) * 100).toFixed(1);
        document.querySelector("#abso").innerHTML = (conti18 - conti8).toFixed(1);
    }
    ;
})(el || (el = {}));
;
//# sourceMappingURL=script.js.map