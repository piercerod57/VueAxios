import Vue from 'vue';


window.onload = function()
{
	var app = new Vue({
	  el: '#app',
	  data: {
		get: {
			status: '...',
			title: '...',
			body: '...',
			id: '...',
			userId: '...',
			headers: '...' 
		},
		post: {
			status: '...',
			data: '...',
			headers: '...' 
		},
		del: {
			status: '...',
			data: '...',
			headers: '...' 
		}
	  },
	  methods: {
		VueGetFunction: function() {
			let self = this.get;
			var number = Math.floor(Math.random() * 100);
			
			axios.get('https://jsonplaceholder.typicode.com/posts/' + number).then(function(data){
				console.log(data);
				self.status = data.status;
				self.title = data.data.title;
				self.body = data.data.body;
				self.id = data.data.id;
				self.userId = data.data.userId;
				self.headers = data.headers;
			});
		},
		VuePostFunction: function() {
			let self = this.post;
			
			;(async () => {
			  var response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
				title: 'boysenberries',
				body: 'bran',
				userId: 1
			  })
			  .then(function (response) {
				console.log(response);
				self.status = response.status;
				self.data = response.data;
				self.headers = response.headers;
			  })
			  .catch(function (error) {
				console.log(error);
				self.post = error;
			  });
			})()
		},
		VueDelFunction: function() {
		  let self = this.del;
		  var number = Math.floor(Math.random() * 100);
		  
		  ;(async () => {
			  var response = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + number)
			  .then(function (response) {
				console.log(response);
				self.status = response.status;
				self.data = response.data;
				self.headers = response.headers;
			  })
			  .catch(function (error) {
				console.log(error);
				self.del = error;
			  });
			})()
		}
	  }
	})
}