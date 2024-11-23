var techno = ["php", "mysql", "javascript", "apache", "firefox"];
for (var i = 0; i < techno.length; i++) {
    techno[i] = techno[i].relaceAll('e', 'a');
}
document.getElementById("resultat").innerHTML = techno;