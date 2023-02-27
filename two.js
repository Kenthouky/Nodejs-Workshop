var xhr = new XMLHttpRequest();
xhr.open("GET", "https://en.wikipedia.org/wiki/Main_Page", true);
xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 && xhr.status === 200) {
		      console.log(xhr.responseText);
		    }
};
xhr.send();
