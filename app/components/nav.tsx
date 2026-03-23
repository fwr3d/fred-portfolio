"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function Nav() {
	const pathname = usePathname();

	const styles = useMemo(() => {
		const border = "rgba(255,255,255,0.12)";
		const text = "#ecfeff";
		const muted = "rgba(236,254,255,0.72)";

		const nav: React.CSSProperties = {
			maxWidth: 900,
			margin: "0 auto 18px",
			display: "flex",
			gap: 14,
			alignItems: "center",
			fontSize: 14,
			color: muted,
		};

		const link = (active: boolean): React.CSSProperties => ({
			color: text,
			textDecoration: "none",
			borderBottom: active ? `1px solid ${text}` : `1px solid ${border}`,
			paddingBottom: 2,
			opacity: active ? 1 : 0.9,
		});

		return { nav, link };
	}, []);

	return (
		<nav style={styles.nav}>
			<Link href="/" style={styles.link(pathname === "/")}>
				Home
			</Link>
			<Link href="/projects" style={styles.link(pathname === "/projects")}>
				Projects
			</Link>
			<Link href="/contact" style={styles.link(pathname === "/contact")}>
				Contact
			</Link>
		</nav>
	);
}