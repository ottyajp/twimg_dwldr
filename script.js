chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	func(request);
});

function dl(url, name){
	const a = document.createElement('a');
	a.download = name;
	a.href = url;
	a.click();
}

function func(request){
	if(request.match(/pbs.twimg.com\/media\//)){
		const url = request.replace(/large$/,'orig');
		const name = request.replace(/^.+\//, '').replace(/:large/, '');
		dl(url, name);
	}
	if(request.match(/twitter.com\/.+\/status/)){
		const div = document.querySelector('div.AdaptiveMedia-singlePhoto');
		const url = div.innerHTML.replace(/\r?\n/g, '').replace(/.+\<img data-aria-label-part="" src="/, '').replace(/".+/, '').replace(/(.+)$/, '$1:orig');
		const name = url.replace(/^.+\//, '').replace(/:orig/, '');
		dl(url, name);
	}
};
