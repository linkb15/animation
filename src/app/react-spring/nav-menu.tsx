"use client"

import { openInfoToast } from "@/app/toast";
import { cn } from "@/util/cn";
import React, { ReactNode } from "react";

export const NavMenu = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => {
	return (
		<button
			type="button"
			onClick={openInfoToast}
			className={cn(
				"bg-[#E0E2F0] flex justify-center items-center rounded-full h-12 w-12",
				className,
			)}
		>
			{children}
		</button>
	);
};

export const HomeIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-labelledby={"home"}
		>
			<title id={"home"}>home</title>
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41a4.23 4.23 0 0 0 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33a4.49 4.49 0 0 0-5 .12ZM12 17.99v-3"
			/>
		</svg>
	);
};

export const StoryIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-labelledby={"story"}
		>
			<title id={"story"}>story</title>

			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="M16.42 7.95a6.25 6.25 0 1 1-8.85 8.84 6.25 6.25 0 0 1 8.85-8.84ZM8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25m3.76-6.65a9.94 9.94 0 0 1 12.19-.07m-2.29 17.23c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25"
			/>
		</svg>
	);
};

export const PaypalIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-labelledby={"paypal"}
		>
			<title id={"paypal"}>paypal</title>

			<path
				stroke="#000"
				strokeMiterlimit={10}
				strokeWidth={1.5}
				d="M19 7v.5a6.04 6.04 0 0 1-6 5.5H9.9c-.5 0-.9.4-1 .9l-.8 5.3c-.1.4-.3.7-.7.8H5.2a1 1 0 0 1-1-1.2L6.6 4.5A3 3 0 0 1 9.5 2H14c2.8 0 5 2.2 5 5Z"
			/>
			<path
				stroke="#000"
				strokeMiterlimit={10}
				strokeWidth={1.5}
				d="M21 11c0 1.4-.6 2.6-1.5 3.5-.9.9-2.1 1.5-3.5 1.5h-2.1c-.5 0-.9.3-1 .8l-.7 4.3c-.1.5-.5.8-1 .8h-3c-.6 0-1.1-.6-1-1.2l.2-.7c.4-.1.7-.4.7-.8l.8-5.3c.1-.5.5-.9 1-.9H13c1.7 0 3.2-.7 4.2-1.8 1-1 1.6-2.3 1.7-3.7 1.3.7 2.1 2 2.1 3.5Z"
			/>
		</svg>
	);
};

export const AppleIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-labelledby={"apple"}
		>
			<title id={"apple"}>apple</title>

			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={1.5}
				d="M15.4 2c.2 1.1-.3 2.2-.9 3-.6.8-1.7 1.5-2.8 1.4-.2-1.1.3-2.1.9-2.9.7-.8 1.8-1.4 2.8-1.5Zm3.2 17.4c.5-.8.8-1.3 1.2-2.2-3.1-1.2-3.6-5.6-.5-7.2-.9-1.2-2.2-1.8-3.5-1.8-.9 0-1.5.2-2.1.4-.5.2-.9.3-1.4.3-.6 0-1-.2-1.6-.4-.6-.2-1.2-.4-1.9-.4-1.4 0-2.9.8-3.8 2.3-1.3 2-1.1 5.9 1 9.1.9 1.2 1.9 2.5 3.2 2.5.6 0 .9-.2 1.3-.3.5-.2 1-.4 1.8-.4.9 0 1.3.2 1.8.4.4.2.7.3 1.3.3 1.4 0 2.4-1.5 3.2-2.6Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
