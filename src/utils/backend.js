
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() { 
    //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    //         callback(xmlHttp.responseText);
    // }
    xmlHttp.open('GET', theUrl, false); // true for asynchronous 
    xmlHttp.send(null);
    return xmlHttp.responseText //comment this for async
}

function httpPostAsync(theUrl) {
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = () => { alert(xmlHttp.responseText); };
	xmlHttp.open("POST", theUrl, true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send("pin=1234&userName=waxwax");
}

function getUsernameList() {
    return JSON.parse(httpGetAsync('http://localhost:25555/user/names', null));
}

export default getUsernameList
