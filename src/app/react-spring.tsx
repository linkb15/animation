import { Background } from "@/app/react-spring/background";
import { Character } from "@/app/react-spring/character";
import { CTA } from "@/app/react-spring/cta";
import { Decoration } from "@/app/react-spring/decoration";
import { Gear } from "@/app/react-spring/gear";
import { Inventory } from "@/app/react-spring/inventory";
import { Lines } from "@/app/react-spring/lines";
import { Logo } from "@/app/react-spring/logo";
import { Menu } from "@/app/react-spring/menu";
import { HomeIcon, NavMenu, StoryIcon } from "@/app/react-spring/nav-menu";
import { screenHeight, screenWidth } from "@/app/react-spring/screen";
import { SocialMenu } from "@/app/react-spring/social-menu";

export const ReactSpring = () => {
	return (
		<div
			className="w-full relative"
			style={{
				height: `${screenHeight}px`,
				width: `${screenWidth}px`,
			}}
		>
			<Background />

			<Logo />

			<Character />

			<Decoration />

			<Lines />

			<Inventory />

			<CTA />

			<Menu />

			<div className="flex gap-2 absolute top-[45px] left-[71px]">
				<NavMenu>
					<HomeIcon />
				</NavMenu>

				<NavMenu>
					<StoryIcon />
				</NavMenu>
			</div>

			<SocialMenu />

			<Gear
				from={{
					rotate: "-20deg",
					left: `${(517 / screenWidth) * 100}%`,
					top: `${(408 / screenHeight) * 100}%`,
				}}
				to={{
					rotate: "135deg",
					left: `${(230 / screenWidth) * 100}%`,
					top: `${(261 / screenHeight) * 100}%`,
				}}
			/>

			<Gear
				from={{
					rotate: "-20deg",
					left: `${(566 / screenWidth) * 100}%`,
					top: `${(355 / screenHeight) * 100}%`,
				}}
				to={{
					rotate: "135deg",
					left: `${(361 / screenWidth) * 100}%`,
					top: `${(268 / screenHeight) * 100}%`,
				}}
			/>

			<Gear
				from={{
					rotate: "20deg",
					scaleX: "-1",
					left: `${(722 / screenWidth) * 100}%`,
					top: `${(375 / screenHeight) * 100}%`,
				}}
				to={{
					rotate: "225deg",
					left: `${(883 / screenWidth) * 100}%`,
					top: `${(261 / screenHeight) * 100}%`,
				}}
			/>

			<Gear
				from={{
					rotate: "20deg",
					scaleX: "-1",
					left: `${(777 / screenWidth) * 100}%`,
					top: `${(422 / screenHeight) * 100}%`,
				}}
				to={{
					rotate: "225deg",
					left: `${(1018 / screenWidth) * 100}%`,
					top: `${(268 / screenHeight) * 100}%`,
				}}
			/>
		</div>
	);
};
