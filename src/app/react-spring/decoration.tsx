"use client";

import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { animated, useSpring } from "@react-spring/web";
import { SVGProps } from "react";
interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const Decoration = ({
	title = "decoration",
	titleId = "decoration",
}: SVGProps<SVGSVGElement> & SVGRProps) => {
	const spring = useSpring({
		from: {
			width: `${(947.13 / screenWidth) * 100}%`,
			left: `${(215 / screenWidth) * 100}%`,
			top: `${(708 / screenHeight) * 100}%`,
		},
		to: {
			width: `${(3282.87 / screenWidth) * 100}%`,
			left: `${(-649 / screenWidth) * 100}%`,
			top: `${(-129 / screenHeight) * 100}%`,
		},
	});

	return (
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 3289 1221"
			aria-labelledby={titleId}
			style={spring}
			className={"absolute"}
		>
			<title id={titleId}>{title}</title>

			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M1221.16 2 491.93 731.22V945.7"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M820.35 402.81c-37.53 37.53-97.86 111.26-97.86 154.16v388.74m-16.08-198.4h65.02m-32.51 26.81v-56.3"
			/>
			<path
				fill="#fff"
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M306.95 704.42h345.84l-91.15 91.15H221.16l85.79-91.15Z"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M745.3 611.92 561.63 795.57m1726.55-364.61-276.14 276.59v90.7h-76.84V616.84"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2104.83 614.6v183.65h92.2v-124l233.24-243.29"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2288.18 579.17v168.14l-136.73 139.41h-483.71l-34.49 34.07H97.07l124.09-125.22L4 1010.05h1538.87l217.16-214.48h85.79V707.1l273.46-276.14"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2104.83 798.25h92.2v-124m-184.99 124h-76.84V616.84m76.84 90.71v90.7m-252.01-2.68h85.79V707.1m442.36-127.93v168.14m0 0-136.73 139.41m0 0h-483.71m529.29-212.47 91.15-95.08 142.09-148.21m-233.24 243.29 91.15-95.08"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="m1845.82 707.1 89.38-90.26 184.08-185.88M1845.82 707.1l89.38-90.26m352.98-185.88L2104.83 614.6l-92.79 92.95"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="m2012.04 707.55 92.79-92.95v183.65"
			/>
			<path
				fill="#fff"
				d="m1542.87 1010.05 90.38-89.26 34.49-34.07 92.29-91.15"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="m1542.87 1010.05 90.38-89.26 34.49-34.07 92.29-91.15m-92.29 91.15 92.29-91.15"
			/>
			<path
				fill="#000"
				d="M1435.09 984.08h92.2v-124l91.15-95.08v168.14l-136.73 139.41H998l92.29-91.15h85.79v-88.47l89.38-90.26v181.41h76.84v-90.7l92.79-92.95"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M1435.09 984.08h92.2v-124l91.15-95.08v168.14l-136.73 139.41H998l92.29-91.15h85.79v-88.47l89.38-90.26v181.41h76.84v-90.7l92.79-92.95m107.78 209.62 90.38-89.26M4 1010.05h1538.87"
			/>
			<path fill="#fff" d="M221.16 795.57 95.74 919.44 4 1010.05" />
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M221.16 795.57 95.74 919.44 4 1010.05m1629.25-89.26H97.07"
			/>
			<path fill="#fff" d="M97.07 920.79h1536.18l-90.38 89.26H4l91.74-90.61" />
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M97.07 920.79h1536.18l-90.38 89.26H4l91.74-90.61M2486.57 43.11l-381.74 375.34s318.29 319.03 342.42 343.16c24.13 24.13 23.24 60.77 23.24 89.37s-25.02 100.09-66.13 100.09h-392.31c-45.58 0-113.49-46.47-113.49-96.51"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M1869.95 732.95s-178.21 183.39-202.21 207.39c-24.01 24.01-16.29 100.09-16.29 125.11 0 25.02 37.98 78.64 71.94 94.73 33.96 16.09 58.98 25.02 79.54 25.02h937.44V951.06h-336.01"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2338.8 188.4s298.8 295.28 328.29 324.77c29.49 29.49 41.11 64.44 35.75 113.54-5.36 49.1-32.9 85.24-57.19 109.54-24.3 24.3-215.37 214.81-215.37 214.81"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2647.43 430.96 2497.3 579.18s98.3 98.43 114.39 114.52c16.09 16.09 50.94 58.09 17.87 91.15-33.07 33.07 72.39-74.17 94.73-96.51 22.34-22.34 13.19-51.59-12.51-77.29-25.7-25.7-122.81-122.37-122.81-122.37"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2629.56 784.84c-33.07 33.07 72.39-74.17 94.73-96.51 22.34-22.34 13.19-51.59-12.51-77.29-25.7-25.7-122.81-122.37-122.81-122.37"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2497.3 579.17s98.3 98.43 114.39 114.52c16.09 16.09 50.94 58.09 17.87 91.15m17.87-353.88-58.46 57.71-91.67 90.5m91.67-90.5-91.67 90.5"
			/>
			<path
				fill="#fff"
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2629.56 784.84c-33.07 33.07 72.39-74.17 94.73-96.51 22.34-22.34 13.19-51.59-12.51-77.29-25.7-25.7-122.81-122.37-122.81-122.37l-91.67 90.5s98.3 98.43 114.39 114.52c16.09 16.09 50.94 58.09 17.87 91.15Z"
			/>
			<path
				fill="#fff"
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2409.72 693.69s-80.21 88.7-96.07 104.56c-28.82 28.82-5.81 88.47 38.87 88.47h788.2c28.6 0 119.75-103.66 134.05-117.96 14.3-14.3 17.87-57.19 0-75.07-17.87-17.87-75.96-93.83-87.58-105.45-11.62-11.62-23.24-9.07-44.68-9.07h-185.88c-26.81 0-44.68 21.58-66.13 43.03-21.45 21.45-50.04 48.26-50.04 48.26h235.92c12.51 0 16.98 8.04 32.17 23.24 15.19 15.19 56.3 72.39 67.02 83.11 10.72 10.72 16.09 20.11 5.36 20.11H2445c-28.15 0-62.56-48.26-35.3-103.22l.02-.01Z"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M2956.64 579.17c-26.81 0-44.68 21.58-66.13 43.03-21.45 21.45-142.54 138.52-142.54 138.52M1963.78 43.11s-534.85 523.24-568.36 556.75c-33.51 33.51-40.21 72.39-40.21 120.64v225.2"
			/>
			<path
				stroke="#fff"
				strokeMiterlimit={10}
				strokeWidth={3}
				d="M1679.6 321.22c-38.77 38.77-91.54 93.65-91.54 152.63v343.16c0 37.53-39.83 85.79-72 128.69m-48.25 37.54s-128.69 131.37-150.13 152.82c-21.45 21.45-36.06 49.15-142.69 49.15H54.95m-32.18 33.95 209.11-209.11"
			/>
		</animated.svg>
	);
};
