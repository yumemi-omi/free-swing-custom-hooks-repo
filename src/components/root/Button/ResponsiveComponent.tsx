import * as React from "react";
import useMedia from "@/hooks/useMedia";

const ResponsiveComponent = () => {
	const { mediaIs } = useMedia();

	return (
		<p>
			{mediaIs.pc && <span>PC</span>}
			{mediaIs.tb && <span>Tablet</span>}
			{mediaIs.sp && <span>Smartphone</span>}
		</p>
	);
};

export default ResponsiveComponent;
