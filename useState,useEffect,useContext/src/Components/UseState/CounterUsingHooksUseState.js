import React, { useState } from "react";
import "./counter.css";

function CounterUsingHooksUseState() {

	// Use Array destructuring when using useState
	let [count, setCount] = useState(0);

	const increment = () => {
		// count = count + 10 // // Never do this. It won't update it.
		// console.log(count)
		setCount((prevState) => { return prevState + 10 }); // use the updater function
	};

	return (
		<div>
			<h1>useState Example</h1>
			<h1>{count}</h1>
			<button onClick={increment}>Increment by Ten</button>
		</div>
	);
}

export default CounterUsingHooksUseState;
