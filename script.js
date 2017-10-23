chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('debug');
	func(request);
});

function dl(url, name){
	const a = document.createElement('a');
	a.download = name;
	a.href = url;
	a.click();
}

function func(request){
	console.log(request);
	if(request.match(/pbs.twimg.com\/media\//)){
		console.log('image');
		const url = request.replace(/large$/,'orig');
		const name = request.replace(/^.+\//, '').replace(/:large/, '');
		console.log(url,name);
		dl(url, name);
	}
	if(request.match(/twitter.com\/.+\/status/)){
		console.log('status');
		const div = document.querySelector('div.AdaptiveMedia-singlePhoto');
		const url = div.innerHTML.replace(/\r?\n/g, '').replace(/.+\<img data-aria-label-part="" src="/, '').replace(/".+/, '').replace(/(.+)$/, '$1:orig');
		const name = url.replace(/^.+\//, '').replace(/:orig/, '');
		console.log(url,name);
		dl(url, name);
	}
};
