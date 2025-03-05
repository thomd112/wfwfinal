const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://premium-wine-api-collection.p.rapidapi.com/rapidapi/wine/wine_details.php?');
xhr.setRequestHeader('x-rapidapi-key', 'c728ef5f6cmsh77e45999f82ee44p1dab55jsnf540306e8fa3');
xhr.setRequestHeader('x-rapidapi-host', 'premium-wine-api-collection.p.rapidapi.com');

xhr.send(data);