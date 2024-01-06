"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { animated, useSpring } from "@react-spring/web";
import { SVGProps } from "react";
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const Logo = ({
	title = "logo",
	titleId = "logo",
}: SVGProps<SVGSVGElement> & SVGRProps) => {
	const spring = useSpring({
		from: {
			width: `${(79.23 / screenWidth) * 100}%`,
			left: `${(640 / screenWidth) * 100}%`,
			top: `${(62 / screenHeight) * 100}%`,
		},
		to: {
			width: `${(256.333 / screenWidth) * 100}%`,
			left: `${(551 / screenWidth) * 100}%`,
			top: `${(36 / screenHeight) * 100}%`,
		},
	});

	return (
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 257 55"
			aria-labelledby={titleId}
			style={spring}
			className={"absolute"}
		>
			<title id={titleId}>{title}</title>
			<path
				fill="#000"
				d="m204.88 54.23 19.52-27.85L205.8 0h12.43l12.8 18.82L243.53 0h11.88l-17.98 26.07 18.9 28.16h-12.26l-13.35-20.67-13.96 20.67h-11.88ZM176.25 39.1v-9.17h26.69v9.18h-26.7ZM148.34 55c-11.27 0-19.98-8.49-19.98-19.52 0-10.87 8.64-19.36 19.9-19.36 11.34 0 19.98 8.41 19.98 19.36 0 11.03-8.64 19.52-19.9 19.52Zm-.08-9.41c5.7 0 9.64-4.17 9.64-10.03 0-5.86-4.01-9.95-9.64-9.95-5.63 0-9.57 4.17-9.57 9.95 0 5.86 3.94 10.03 9.57 10.03Zm-44.65 8.64L87.18 16.97H98.3l9.02 23.53 9.18-23.53h10.73l-16.36 37.26h-7.25ZM61.73 55c-10.18 0-17.9-8.33-17.9-19.36S51.56 16.2 61.67 16.2c4.47 0 8.25 1.62 10.87 4.32v-3.55h10.03v37.26H72.53v-3.55A14.82 14.82 0 0 1 61.73 55Zm1.86-9.33c5.63 0 9.48-4.17 9.48-10.1 0-5.87-3.85-10.04-9.48-10.04-5.56 0-9.42 4.17-9.42 10.03 0 5.94 3.86 10.1 9.42 10.1ZM0 54.23V0h21.21c10.5 0 17.6 6.63 17.6 15.81 0 8.57-5.72 14.43-14.59 15.59l18.13 22.83H29.62L12.27 31.55h-1.78v22.68H0ZM20.29 8.56h-9.8v14.81h9.8c5.17 0 8.1-2.77 8.1-7.4 0-4.17-2.93-7.4-8.1-7.4Z"
			/>
		</animated.svg>
	);
};
