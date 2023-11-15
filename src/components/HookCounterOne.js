import  { useState, useEffect } from "react"

function HookCounterOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("")

	//useEffect runs after every render of the component
	useEffect(() => {
		console.log("useEffect - Updating document title ")
		document.title = `You clicked ${count} times`
		// add dependency as second parameter
	}, [count])

	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne

// 8 - Conditionally run effects
// specify props or state to watch for as second param
// effect dont runif no change
