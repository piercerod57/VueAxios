import Vue from 'vue';


window.onload = function()
{
	var app = new Vue({
	  el: '#app',
	  data: {
		get: '...',
		post: '...',
		del: '...'
	  },
	  methods: {
		VueGetFunction: function() {
			let self = this;
			var number = Math.floor(Math.random() * 100);
			
			axios.get('https://jsonplaceholder.typicode.com/posts/' + number).then(function(data){    
				console.log(data); 
				self.get = JSON.stringify(data.data);
			});
		},
		VuePostFunction: function() {
			let self = this;
			//var res = AxiosPostFunc();
			
			;(async () => {
			  var response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
				title: 'boysenberries',
				body: 'bran',
				userId: 1
			  })
			  .then(function (response) {
				console.log(response);
				self.post = response;
			  })
			  .catch(function (error) {
				console.log(error);
				self.post = error;
			  });
			})()
			
			
				/*console.log(res);
				console.log(`Status code: ${res.status}`);
				console.log(`Status text: ${res.statusText}`);
				console.log(`Request method: ${res.request.method}`);
				console.log(`Path: ${res.request.path}`);
				console.log(`Date: ${res.headers.date}`);
				console.log(`Data: ${res.data}`);*/
			//self.post = res.status;
		},
		VueDelFunction: function() {
		  
		  console.log('del');
		}
	  }
	})
}


async function AxiosPostFunc()
{
	let res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
			title: 'boysenberries',
			body: 'bran',
			userId: 1
		  })
		  .then(function (response) {
			console.log(response);
			return response;
		  })
		  .catch(function (error) {
			console.log(error);
			return error;
		  });
}