function modProfilePage(settings){
	var newCss = document.createElement("link");
	newCss.setAttribute("rel", "stylesheet");
	newCss.setAttribute("href", chrome.extension.getURL("assets/profile.css"));
	document.getElementsByTagName("head")[0].appendChild(newCss);

	if (settings["profExtendedStats"] != "off")
		addPageJS("profile/extendedStats.js");

	if (settings["profRecordReviews"]) {
		const newCss = document.createElement("link");
		newCss.setAttribute("rel", "stylesheet");
		newCss.setAttribute("href", chrome.extension.getURL("assets/datatables.css"));
		document.getElementsByTagName("head")[0].appendChild(newCss);
		const newCss2 = document.createElement("link");
		newCss2.setAttribute("rel", "stylesheet");
		newCss2.setAttribute("href", chrome.extension.getURL("assets/daterangepicker.css"));
		document.getElementsByTagName("head")[0].appendChild(newCss2);
		addPageJS("libs/moment.js");
		addPageJS("libs/jquery.js");
		addPageJS("libs/datatables.js");
		addPageJS("libs/markerclusterer.js");
		setTimeout(() => addPageJS("libs/daterangepicker.js"), 100);
		addPageJS("profile/recordReviews.js", true);
	}

	addPageJS("profile/main.js", true);
	
	console.log("[WayFarer+] Profile page injection successful!");
}