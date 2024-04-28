import { useState } from "preact/hooks";

export { Counter };

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<button className="btn btn-primary" type="button" onClick={() => setCount((count) => count + 1)}>
			Counter {count}
		</button>
	);
}
