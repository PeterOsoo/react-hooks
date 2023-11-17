import  { useState, useEffect } from "react"
import axios from "axios"

const DataFetchingOne = () => {
	//need three state variables
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [post, setPost] = useState({})

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/54`)
			.then(response => {
				setLoading(false)
				setPost(response.data)
				setError("") // empty string
			})
			.catch(error => {
				setLoading(false)
				setPost({})
				setError("Something went wrong!")
			})
	}, [])
	// empty dependency array to ensure it is called once ie ComponentDidMount behavior

	return (
		<div>
			{loading ? "Loading" : post.title}
			{error ? error : null}
		</div>
	)
}

export default DataFetchingOne
