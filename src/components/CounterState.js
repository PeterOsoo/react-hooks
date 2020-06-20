import React, { useState } from "react"

function CounterState() {
	const [count, setcount] = useState(0)
	return (
		<div>
			<button onClick={() => setcount(count + 1)}> Count - {count} </button>
		</div>
	)
}

export default CounterState
