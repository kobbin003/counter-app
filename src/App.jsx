import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const handleCountChange = (val) => {
		setCount((prev) => prev + val);
	};
	return (
		<>
			<h1>Counter App</h1>
			<div>Count: {count}</div>
			<div>
				<button onClick={() => handleCountChange(1)}>Increment</button>
				<button onClick={() => handleCountChange(-1)}>decrement</button>
			</div>
		</>
	);
}

export default App;
