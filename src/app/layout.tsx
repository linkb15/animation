import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { PHProvider, PostHogPageview } from "@/app/providers";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ravox | Animation is hard",
	description:
		"Animations with ReactJS and NextJS using TailwindCSS, ShadcnUI, React-Spring.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Suspense>
				<PostHogPageview />
			</Suspense>
			<PHProvider>
				<body className={inter.className}>{children}</body>
			</PHProvider>
		</html>
	);
}
