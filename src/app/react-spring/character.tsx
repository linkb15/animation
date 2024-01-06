"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

export const Character = () => {
	const character = useSpring({
		from: {
			left: `${(497 / screenWidth) * 100}%`,
			top: `${(250 / screenHeight) * 100}%`,

			width: `${(434 / screenWidth) * 100}%`,
			// height: `${(666 / screenHeight) * 100}%`,
		},
		to: {
			left: `${(400 / screenWidth) * 100}%`,
			top: `${(25 / screenHeight) * 100}%`,

			width: `${(666 / screenWidth) * 100}%`,
			// height: `${(1024 / screenHeight) * 100}%`,
		},
	});

	return (
		<animated.img
			className="absolute"
			style={character}
			src={"/character.png"}
			alt={"character"}
		/>
	);
};
