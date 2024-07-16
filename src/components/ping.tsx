import React from "react";

export default function Ping(): React.JSX.Element {
	return (
		<span className={`relative flex h-2 w-2 mx-2`}>
			<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
			<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
		</span>
	);
}
