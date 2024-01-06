"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { openInfoToast } from "@/app/toast";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import React from "react";

const menus = [
	{
		label: "Home",
		href: "/",
		animation: {
			from: {
				opacity: 0,
				left: `${(469 / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
			to: {
				opacity: 1,
				left: `${(469 / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
		},
	},
	{
		label: "Guide book",
		href: "/",
		animation: {
			from: {
				opacity: 0,
				left: `${(469 / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
			to: {
				opacity: 1,
				// width: `${(256.333 / screenWidth) * 100}%`,
				left: `${((469 + 118) / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
		},
	},
	{
		label: "Settings",
		href: "/",
		animation: {
			from: {
				opacity: 0,
				left: `${((469 + 48) / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
			to: {
				opacity: 1,
				left: `${((284 + 469) / screenWidth) * 100}%`,
				top: `${(823 / screenHeight) * 100}%`,
			},
		},
	},
];

type MenuItemType = (typeof menus)[number];

export const Menu = () => {
	return (
		<div>
			{menus.map((menu) => (
				<MenuItem key={menu.label} {...menu} />
			))}
		</div>
	);
};

const MenuItem = (props: MenuItemType) => {
	const menu = useSpring({
		from: props.animation.from,
		to: props.animation.to,
	});
	return (
		<Link href={props.href} legacyBehavior>
			<animated.button
				onClick={openInfoToast}
				className="absolute text-[#0F0F15] text-xl/[25px] font-medium"
				style={menu}
			>
				{props.label}
			</animated.button>
		</Link>
	);
};
