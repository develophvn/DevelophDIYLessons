const Location = {
	getCurrentLocation(){
		return new Promise(function(resolve, reject) {
		   navigator.geolocation.getCurrentPosition(res => {
			  const { coords } = res;
			  resolve(coords);
		   });
		});
	 }
}
