
// Handle new tab page
(function() {
	const mypage = "http://localhost/startpage/";
	var removefocus = true;
	var clearlocationbar = false;

	aboutNewTabService.newTabURL = mypage;
	function customNewTab () {
		if (removefocus) {
			setTimeout(function() {
        		gBrowser.selectedBrowser.focus();
      		}, 0);
    	}
	    if (clearlocationbar) {
			setTimeout(function() {
	       		if (gBrowser.selectedBrowser.currentURI.spec == mypage) {
          			window.document.getElementById("urlbar").value = "";
        		}
     		 }, 1000);
		}
	}
	gBrowser.tabContainer.addEventListener("TabOpen", customNewTab, false);
})();



// handle showing UI
(function() {
	window.addEventListener("keyup", hideUI, false);
	window.addEventListener("keydown", showUI, false);

	var element = document.getElementById("navigator-toolbox");
	var className = "key-pressed";
	var lockedName = "locked";
	var osPressed = false;

	function hideUI(e) {
		if (e.key == "OS") {
			element.classList.remove(className);
			osPressed = false;
		}
	}
	function showUI(e) {
		console.log(e.key);
		if (e.key == "OS") {
			element.classList.add(className);
			osPressed = true;
		}
			
		if (e.key == "Shift" && osPressed) {
			if(element.classList.contains(lockedName)) {
				console.log("unlock");
				element.classList.remove(lockedName);
			} else {
				console.log("lock");
				element.classList.add(lockedName);
			}
		}
	}

	/*	
	window.addEventListener("keydown", uiToggle, false);
	var open = false;
	function uiToggle(e) {
		// Input the key you want to use here
		if (e.key == "OS") {
			open ? element.classList.remove(className) : element.classList.add(className);
			open = !open;
		}
	}*/
})();
