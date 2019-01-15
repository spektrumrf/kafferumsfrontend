import { asyncComponent } from 'react-async-component';

/**
 * backendFunction is in the form of function(resolvingFunction, rejectingFunction)
 * the result, if successful, is then given to handleData function
 * loadingComponent is a placeholder component
 */
function Async(loadingComponent, handleData, backendFunction) {
	return asyncComponent({
		resolve: () => new Promise(function(resolve, reject) {
			backendFunction(resolve, reject);
		}).then((data) => {
			return () => handleData(data)
		}, alert),
		LoadingComponent: () => loadingComponent
	});
}

export default Async
