"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { animated, useSpring, useSprings } from "@react-spring/web";
import React from "react";

const animation = [
	{
		from: { top: `${(278 / screenHeight) * 100}%` },
		to: { top: `${(278 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(282.96 / screenHeight) * 100}%` },
		to: { top: `${(292.24 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(287.93 / screenHeight) * 100}%` },
		to: { top: `${(329.64 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(292.89 / screenHeight) * 100}%` },
		to: { top: `${(343.2 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(311.49 / screenHeight) * 100}%` },
		to: { top: `${(370.21 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(330.09 / screenHeight) * 100}%` },
		to: { top: `${(397.23 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(348.7 / screenHeight) * 100}%` },
		to: { top: `${(504.43 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(367.3 / screenHeight) * 100}%` },
		to: { top: `${(532.41 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(372.26 / screenHeight) * 100}%` },
		to: { top: `${(545.35 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(377.23 / screenHeight) * 100}%` },
		to: { top: `${(558.13 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(382.19 / screenHeight) * 100}%` },
		to: { top: `${(571.5 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(387.15 / screenHeight) * 100}%` },
		to: { top: `${(584.28 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(392.12 / screenHeight) * 100}%` },
		to: { top: `${(598.53 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(410.72 / screenHeight) * 100}%` },
		to: { top: `${(625.81 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(429.32 / screenHeight) * 100}%` },
		to: { top: `${(733.83 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(434.28 / screenHeight) * 100}%` },
		to: { top: `${(746.62 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(439.25 / screenHeight) * 100}%` },
		to: { top: `${(782.83 / screenHeight) * 100}%` },
		type: "ellipse",
	},
	{
		from: { top: `${(444.21 / screenHeight) * 100}%` },
		to: { top: `${(796.44 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(462.81 / screenHeight) * 100}%` },
		to: { top: `${(823.45 / screenHeight) * 100}%` },
		type: "rect",
	},
	{
		from: { top: `${(481.42 / screenHeight) * 100}%` },
		to: { top: `${(850.46 / screenHeight) * 100}%` },
		type: "rect",
	},
];

export const Lines = () => {
	return (
		<div>
			{animation.map((top, index) =>
				top.type === "ellipse" ? (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Ellipse {...top} key={index} />
				) : (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Rect {...top} key={index} />
				),
			)}
		</div>
	);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Ellipse = (props: { from: any; to: any }) => {
	const character = useSpring({
		from: {
			left: `${(1316 / screenWidth) * 100}%`,
			...props.from,
		},
		to: {
			...props.to,
		},
	});
	return (
		<animated.svg style={character} className={"absolute"}>
			<title>ellipse</title>
			<ellipse cx="1.5" cy="2.5" rx="1.5" ry="2.5" fill="currentColor" />
		</animated.svg>
	);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Rect = (props: { from: any; to: any }) => {
	const character = useSpring({
		from: {
			left: `${(1316 / screenWidth) * 100}%`,
			...props.from,
		},
		to: {
			...props.to,
		},
	});
	return (
		<animated.svg style={character} className={"absolute"}>
			<title>ellipse</title>
			<rect width="3" height="18.6" x=".56" y=".2" fill="currentColor" rx="1" />
		</animated.svg>
	);
};
