"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { openInfoToast } from "@/app/toast";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

export const CTA = () => {
	const button = useSpring({
		from: {
			left: `${(573 / screenWidth) * 100}%`,
			top: `${(780 / screenHeight) * 100}%`,

			width: "194px",
		},
		to: {
			left: `${(522 / screenWidth) * 100}%`,
			top: `${(640 / screenHeight) * 100}%`,

			width: "280px",
		},
	});

	const arrow = useSpring({
		from: {
			opacity: 0,
			left: 123,
			top: 30,
			width: "24px",
		},
		to: {
			opacity: 1,
			left: 224,
		},
	});

	return (
		<animated.button
			onClick={openInfoToast}
			type="button"
			style={button}
			className="rounded-full absolute flex items-center justify-start px-[37px] font-semibold text-[28px] h-[82px] bg-[#BBFF1A] drop-shadow-[0px_4px_50px_#BBFF1A]"
		>
			Discover
			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				aria-labelledby={"right arrow"}
				style={arrow}
				className={"absolute"}
			>
				<title id={"right arrow"}>{"right arrow"}</title>
				<path
					stroke="#0B0C10"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit={10}
					strokeWidth={1.5}
					d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
				/>
			</animated.svg>
		</animated.button>
	);
};
