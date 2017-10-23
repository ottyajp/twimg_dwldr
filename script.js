chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('debug');
	func(request);
});

function func(request){
	console.log(request);
	if(request.match(/pbs.twimg.com\/media\//)){
		console.log('image');
		const url = request.replace(/large$/,'orig');
		const name = request.replace(/^.+\//, '').replace(/:large/, '');
		console.log(url,name);
		const a = document.createElement('a');
		a.download = name;
		a.href = url;
		a.click();
	}
	if(request.match(/twitter.com\/.+\/status/)){
		console.log('status');
	}
};
