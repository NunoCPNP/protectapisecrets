const axios = require("axios")

exports.handler = function(event, context, callback) {
	console.log("1", process.env.NODE_ENV)
	console.log("2", process.env.REACT_APP_API_KEY)
	const devUrl = `https://api.themoviedb.org/3/movie/popular?api_key=3811fe59412f2d570cb9882329333bf1&language=en-US&page=1`

	const send = body => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(body)
		})
	}

	const getMovies = async () => {
		const response = await axios.get(devUrl)
		const data = response.data.results
		
		send(data)
	}

	getMovies()
}