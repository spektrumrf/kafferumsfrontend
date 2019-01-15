
function httpRequestSync(targetUrl, verb, data, success, handleError) {
    var xmlHttp = new XMLHttpRequest();	
	
    xmlHttp.open(verb, targetUrl, false);
    
	if (data === null) {
		xmlHttp.send(null);
	} else {
        xmlHttp.setRequestHeader("Content-type", "application/json");
		xmlHttp.send(JSON.stringify(data));    
    }

    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
		return success(xmlHttp.responseText, xmlHttp);
	else
		return handleError(xmlHttp.responseText, xmlHttp);
}

function httpGetSync(targetUrl, success, handleError) {
	return httpRequestSync(targetUrl, 'GET', null, success, handleError)
}

function httpPostSync(targetUrl, obj, success, handleError) {
	return httpRequestSync(targetUrl, 'POST', obj, success, handleError)
}

export function getUsernameList(){ 
	return httpGetSync('http://localhost:25555/api/user/names', JSON.parse, alert);
}

export function verifyPIN() {
	return httpPostSync('http://localhost:25555/api/user/pin', JSON.parse, alert);
}
