 new Vue({
 	el: '#vue-app',
 	data() {
 		return {
 			api_key: '254c774a06d98686fff02c7c95ec9910',
 			api_base: 'https://api.openweathermap.org/data/2.5/weather',
 			query: '',
 			weather: {},
 		}
 	},
 	methods: {
 		fetchWeather(e) {
 			if (e.keyCode === 13 || e.type === 'click') {
 			fetch(` ${this.api_base}?q=${this.query}&units=metric&appid=${this.api_key} `)
 				.then(res => {
 					return res.json();
 				}).then(this.setResults)
 			}
 		},
 		setResults(result) {
 			this.weather = result;
 		},
 		dateBuilder() {
 			let d = new Date()
 			let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 			let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", ]

 			let day = days[d.getDay()]
 			let date = d.getDate()
 			let month = months[d.getMonth()]
 			let year = d.getFullYear()

 			return ` ${day} ${date} ${month} ${year} `
 		}
 	}
 })