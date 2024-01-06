"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { animated, useSpring } from "@react-spring/web";
import { SVGProps } from "react";
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const Inventory = ({
	title = "inventory",
	titleId = "inventory",
}: SVGProps<SVGSVGElement> & SVGRProps) => {
	const inventory = useSpring({
		from: {
			opacity: 0,
			width: `${(14 / screenWidth) * 100}%`,
			left: `${(15 / screenWidth) * 100}%`,
			top: `${(202.37 / screenHeight) * 100}%`,
		},
		to: {
			opacity: 1,
			// width: `${(256.333 / screenWidth) * 100}%`,
			left: `${(73 / screenWidth) * 100}%`,
			top: `${(202.37 / screenHeight) * 100}%`,
		},
	});

	const inventoryText = useSpring({
		from: {
			opacity: 0,
			// width: `${(79.23 / screenWidth) * 100}%`,
			left: `${(47 / screenWidth) * 100}%`,
			top: `${(217 / screenHeight) * 100}%`,
		},
		to: {
			opacity: 1,
			// width: `${(256.333 / screenWidth) * 100}%`,
			left: `${(105 / screenWidth) * 100}%`,
			top: `${(217 / screenHeight) * 100}%`,
		},
	});

	const strangeText = useSpring({
		from: {
			opacity: 0,
			width: `${(15.86 / screenWidth) * 100}%`,
			left: `${(52.86 / screenWidth) * 100}%`,
			top: `${(402 / screenHeight) * 100}%`,
		},
		to: {
			opacity: 1,
			// width: `${(256.333 / screenWidth) * 100}%`,
			left: `${(84.85 / screenWidth) * 100}%`,
			top: `${(402 / screenHeight) * 100}%`,
		},
	});

	const stripeBar = useSpring({
		from: {
			opacity: 0,
			width: `${(128.25 / screenWidth) * 100}%`,
			left: `${(92 / screenWidth) * 100}%`,
			top: `${(866 / screenHeight) * 100}%`,
		},
		to: {
			opacity: 1,
			// width: `${(256.333 / screenWidth) * 100}%`,
			left: `${(92 / screenWidth) * 100}%`,
			top: `${(805 / screenHeight) * 100}%`,
		},
	});

	return (
		<>
			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 48"
				aria-labelledby={titleId}
				style={inventory}
				className={"absolute"}
			>
				<title id={titleId}>{title}</title>

				<path
					fill="#000"
					d="M14 19.19 0 5.25V.37l14 13.89v4.93ZM0 27.5v-7L3.5 24 0 27.5Z"
				/>
				<path
					fill="#000"
					d="m0 32.64 8.46-8.7L0 15v-4.56l13.56 13.5L0 37.57v-4.92Zm0 14.99v-4.96L14 28.8v5.06L0 47.63Z"
				/>
			</animated.svg>

			<animated.p
				style={inventoryText}
				className={"absolute font-medium text-xl/[25px]"}
			>
				Inventory
			</animated.p>

			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 129 45"
				aria-labelledby={"stripe bar"}
				className={"absolute"}
				style={stripeBar}
			>
				<title id={"stripe bar"}>stripe bar</title>
				<path
					fill="#000"
					d="m127.81 26.23-18.65 18.6h13.99l4.66-5.11V26.23Zm0-26.23h-5.91L76.94 44.84h13.4L128.25 7l-.44-7ZM101.3 0H89.47l-44.5 44.84H57.8L101.3 0ZM68.86 0H56.3L12 44.84h13.07L68.86 0ZM35.72 0H23.48L0 23.73v12.93L35.72 0ZM5.75 0H0v6l5.75-6Z"
				/>
			</animated.svg>

			<animated.svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 16 160"
				aria-labelledby={"strange text"}
				className={"absolute"}
				style={strangeText}
			>
				<title id={"strange text"}>strange text</title>
				<path
					fill="#000"
					d="M.57 3.9V0h12.64v4.07c0 1.23-.26 2.28-.76 3.15a4.97 4.97 0 0 1-2.17 2c-.93.47-2.06.7-3.37.7a7.6 7.6 0 0 1-3.4-.7 5.01 5.01 0 0 1-2.18-2.05C.83 6.27.57 5.18.57 3.9Zm1.36-2.37V3.8c0 1.04.2 1.91.6 2.6.4.68.98 1.2 1.73 1.53.74.34 1.63.5 2.65.5s1.9-.16 2.64-.5c.74-.32 1.3-.82 1.7-1.48.4-.67.6-1.49.6-2.48V1.53H1.93ZM13.2 24.68 2.58 28.43v.15l10.64 3.75v1.6L.57 29.3v-1.58l12.64-4.64v1.6Zm-3.15 30.57a1.94 1.94 0 0 0 1.45-.9c.35-.52.52-1.17.52-1.93 0-.56-.09-1.05-.27-1.47a2.34 2.34 0 0 0-.75-.98 1.79 1.79 0 0 0-1.94-.1c-.24.16-.44.37-.6.63a4.5 4.5 0 0 0-.4.8l-.23.77-.35 1.28c-.08.33-.2.7-.36 1.1-.15.4-.35.8-.62 1.17A2.88 2.88 0 0 1 4 56.9c-.68 0-1.3-.18-1.85-.54a3.65 3.65 0 0 1-1.31-1.55 5.7 5.7 0 0 1-.49-2.48c0-.9.15-1.69.44-2.35a3.49 3.49 0 0 1 3.04-2.19v1.58c-.48.04-.87.2-1.18.48-.31.29-.54.64-.7 1.08-.14.43-.22.9-.22 1.4 0 .59.1 1.11.29 1.58.19.46.46.83.8 1.1.34.27.75.4 1.2.4.43 0 .77-.11 1.03-.34.27-.24.48-.55.64-.93.17-.38.31-.8.44-1.24l.44-1.55c.28-1 .69-1.77 1.21-2.35a2.67 2.67 0 0 1 2.07-.86c.7 0 1.33.19 1.85.57.53.39.94.9 1.24 1.56.3.65.44 1.38.44 2.19s-.15 1.53-.44 2.17a3.76 3.76 0 0 1-1.18 1.5c-.5.38-1.07.57-1.71.6v-1.49Zm1.8 15.37h1.36v9.47h-1.36v-3.97H.57V74.6h11.28v-3.97ZM.57 94.41h12.64v4.27c0 .99-.17 1.8-.5 2.43-.34.64-.8 1.1-1.38 1.41-.59.3-1.25.46-2 .46-.74 0-1.4-.16-1.98-.46a3.22 3.22 0 0 1-1.35-1.4 5.24 5.24 0 0 1-.5-2.41v-3.46h1.4v3.4c0 .68.1 1.23.3 1.64.2.41.47.71.84.9.36.19.8.28 1.3.28s.95-.1 1.33-.28c.38-.2.67-.5.88-.9.2-.42.31-.97.31-1.66v-2.69H.57v-1.53Zm5.68 5.95-5.68 3.11v-1.78l5.68-3.06v1.73Zm6.95 18.3H.58v-1.53h12.64v1.53ZM15.86 160H.36v-1.78h15.5V160ZM5 139.58l-5-1.7v-3.8l13.48 4.98v3.18L0 147.22v-3.8l5-1.7m0 0 3.56-1.06L5 139.58m4.74-6.81a2.03 2.03 0 1 0 4.05 0 2.03 2.03 0 0 0-4.05 0Z"
				/>
			</animated.svg>
		</>
	);
};
