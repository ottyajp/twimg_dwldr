chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	func(request);
});

function func(request){
	const url = request.replace(/large$/,'orig');
	const name = request.replace(/^.+\//, '').replace(/:large/, '');
	const a = document.createElement('a');
	a.download = name;
	a.href = url;
	a.click();
};
