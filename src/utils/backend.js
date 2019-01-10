
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

function getUsernameList() {
    var stuff = httpGetAsync('http://localhost:25555/user/names', null);
    return JSON.parse(stuff);
}

export default getUsernameList
