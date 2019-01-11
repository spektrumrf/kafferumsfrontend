
function httpRequestAsync(targetUrl, verb, data, success, handleError) {
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = () => {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
			success(xmlHttp.responseText, xmlHttp);
		else if (handleError)
			handleError(xmlHttp.responseText, xmlHttp);
	};
	xmlHttp.open(verb, targetUrl, true);
	if (verb === 'POST') {
		xmlHttp.setRequestHeader("Content-type", "application/json");
		xmlHttp.send(JSON.stringify(data));
	} else {
		xmlHttp.send(null);
	}
}

function httpGetAsync(targetUrl, success, handleError) {
	httpRequestAsync(targetUrl, 'GET', null, success, handleError)
}

function httpPostAsync(targetUrl, obj, success, handleError) {
	httpRequestAsync(targetUrl, 'POST', obj, success, handleError)
}

function getUsernameList() {
	var success = (data) => {
		alert(JSON.parse(data));
	}

	//httpGetAsync('http://localhost:25555/api/user/names', success);
	
	var login = { userName: 'waxwax', pin: '1234' }
	httpPostAsync('http://localhost:25555/api/user/pin', login, success, success);
	
	return [];
}

export default getUsernameList
