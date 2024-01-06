"use client"

import { NavMenu, AppleIcon, PaypalIcon } from "@/app/react-spring/nav-menu";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

export const SocialMenu = () => {
	const paypal = useSpring({
		from: {
			left: "0",
		},
		to: {
			left: "48px",
		},
	});
	const apple = useSpring({
		from: {
			left: "45px",
		},
		to: {
			left: "0",
		},
	});
	return (
		<div className="absolute top-[44px] right-[53px] h-[56px] w-[101px]">
			<animated.div style={apple} className={"absolute"}>
				<NavMenu className="h-[53px] w-[53px]">
					<AppleIcon />
				</NavMenu>
			</animated.div>

			<animated.div style={paypal} className={"absolute"}>
				<NavMenu className="h-[56px] w-[56px]">
					<PaypalIcon />
				</NavMenu>
			</animated.div>
		</div>
	);
};
