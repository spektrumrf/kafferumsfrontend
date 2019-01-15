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

function httpRequestAsync(targetUrl, verb, data, success, handleError) {
    var xmlHttp = new XMLHttpRequest();	
	
    xmlHttp.open(verb, targetUrl, true);
    
	if (data === null) {
		xmlHttp.send(null);
	} else {
        xmlHttp.setRequestHeader("Content-type", "application/json");
		xmlHttp.send(JSON.stringify(data));    
    }

	xmlHttp.onreadystatechange = () => {
		if (xmlHttp.readyState === 4) {
			if (xmlHttp.status === 200)
				success(xmlHttp.responseText, xmlHttp);
			else
				handleError(xmlHttp.responseText, xmlHttp);
		}
	}
}

function httpGetSync(targetUrl, success, handleError) {
	return httpRequestSync(targetUrl, 'GET', null, success, handleError)
}

function httpPostSync(targetUrl, obj, success, handleError) {
	return httpRequestSync(targetUrl, 'POST', obj, success, handleError)
}

function httpGetAsync(targetUrl, success, handleError) {
	httpRequestAsync(targetUrl, 'GET', null, success, handleError)
}

function httpPostAsync(targetUrl, obj, success, handleError) {
	httpRequestAsync(targetUrl, 'POST', obj, success, handleError)
}

export function getUsernameList(success, handleError) { 
	httpGetAsync('http://localhost:25555/api/user/names', (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}

export function verifyPIN(success, handleError) {
	httpPostAsync('http://localhost:25555/api/user/pin', (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}
