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
		},
		VueDelFunction: function() {
		  
		  console.log('del');
		}
	  }
	})
}