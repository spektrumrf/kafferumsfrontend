function httpRequestAsync(targetUrl, verb, data, success, handleError) {
    var xmlHttp = new XMLHttpRequest();	
	
    xmlHttp.open(verb, targetUrl, true);
    
	if (data === null) {
		xmlHttp.send(null);
	} else {
        xmlHttp.setRequestHeader("Content-Type", "application/json");
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

function httpGetAsync(targetUrl, success, handleError) {
	httpRequestAsync(targetUrl, 'GET', null, success, handleError)
}

function httpPostAsync(targetUrl, obj, success, handleError) {
	httpRequestAsync(targetUrl, 'POST', obj, success, handleError)
}

function httpPostAsyncWithToken(targetUrl, accessToken, obj, success, handleError) {
	httpRequestAsync(targetUrl + '?token=' + accessToken, 'POST', obj, success, handleError)
}

export function getUsernameList(success, handleError) { 
	httpGetAsync('http://localhost:25555/api/names', (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}

/**
 * login is in the form of {pin: string, userName: string}
 */
export function verifyLogin(login, success, handleError) {
	httpPostAsync('http://localhost:25555/api/pin', login, (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}

/**
 * items is in the form of [{itemId: int, amount: int}]
 */
export function purchase(ledgerId, items, accessToken, success, handleError) {
	var purchaseData = {
		ledgerId: ledgerId,
		items: items
	}
	httpPostAsyncWithToken('http://localhost:25555/api/user/purchase', accessToken, purchaseData, (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}

export function logout(accessToken, success, handleError) {
	httpPostAsyncWithToken('http://localhost:25555/api/user/logout', accessToken, null, (data, xmlHttp) => success(JSON.parse(data), xmlHttp), handleError);
}
