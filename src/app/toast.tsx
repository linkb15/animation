import { toast } from "sonner";

export const openInfoToast = () =>
	toast("Welcome, thanks for the visit!", {
		description: (
			<>
				Open in desktop for the best view.
				<br />
				Enjoy the animation, and keep refreshing to check it again. I will
				open-source the codebase in the future. Still in WIP 🔨 atm.
				<br />
				<br />
				Follow for more information on the{" "}
				<a
					className="underline text-sky-500"
					href="https://www.reddit.com/r/nextjs/comments/18zt889/animation_is_hard/"
					target="_blank"
					rel="noreferrer"
				>
					Reddit Post
				</a>
				! Inspiration from this{" "}
				<a
					className="underline text-sky-500"
					href="https://www.instagram.com/p/C0RdOSMLCWa/"
					target="_blank"
					rel="noreferrer"
				>
					IG Reel
				</a>
				.
			</>
		),
	});
