"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type Site = {
	name: string;
	headline: string;
	about: string;
	email: string;
	github: string;
	linkedin?: string;
};

export default function HomeClient({ site }: { site: Site; projects: never[] }) {
	const rootRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!rootRef.current) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				'[data-reveal=""]',
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" },
			);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	const styles = useMemo(() => {
		const bg0 = "#060808";
		const bg1 = "#070a0a";
		const panel = "rgba(255,255,255,0.05)";
		const border = "rgba(255,255,255,0.10)";
		const borderStrong = "rgba(255,255,255,0.16)";
		const text = "#ecfeff";
		const muted = "rgba(236,254,255,0.72)";
		const accent = "#16a34a";

		const stage: React.CSSProperties={
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",        // vertical center (y-axis) because flexDirection is row by default
	justifyContent: "center",    // horizontal center (x-axis)
	padding: "24px 18px",        // keep a little padding for small screens
	background: bg1,
	color: text,
	fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
};

		const container: React.CSSProperties = {
			maxWidth: 1020,
			display: "center",
			flexDirection: "column",
			gap: 16,
            alignItems: "center",
            justifyContent: "center",
            	transform: "translateY(-100px)",

		};

		const card: React.CSSProperties = {
			border: `1px solid ${border}`,
			borderRadius: 18,
			background: panel,
			padding: 22,
			boxShadow: "0 22px 80px rgba(0,0,0,0.55)",
			backdropFilter: "blur(10px)",
		};

		const h1: React.CSSProperties = {
			fontSize: 44,
			letterSpacing: -0.8,
			margin: 0,
			lineHeight: 1.05,
		};

		const headline: React.CSSProperties = {
			marginTop: 10,
			color: muted,
			lineHeight: 1.55,
			fontSize: 15,
			maxWidth: 720,
		};

		const sectionTitle: React.CSSProperties = {
			fontSize: 12,
			color: muted,
			letterSpacing: 1.6,
			textTransform: "uppercase",
			margin: 0,
		};

		const p: React.CSSProperties = {
			color: muted,
			lineHeight: 1.75,
			marginTop: 10,
			fontSize: 15,
			maxWidth: 820,
		};

		const row: React.CSSProperties = {
			display: "flex",
			gap: 10,
			flexWrap: "wrap",
			marginTop: 14,
		};

		const chip: React.CSSProperties = {
			display: "inline-flex",
			alignItems: "center",
			gap: 8,
			border: `1px solid ${border}`,
			borderRadius: 999,
			padding: "8px 12px",
			color: text,
			textDecoration: "none",
			fontWeight: 700,
			fontSize: 13,
			background: "rgba(0,0,0,0.18)",
			boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
		};

		const chipHover: React.CSSProperties = {
			border: `1px solid ${borderStrong}`,
			background: "rgba(255,255,255,0.06)",
		};

		const primary: React.CSSProperties = {
			...chip,
			background: accent,
			color: "#07110d",
			border: `1px solid rgba(255,255,255,0.14)`,
		};

		const footer: React.CSSProperties = {
			maxWidth: 920,
			margin: "22px auto 0",
			paddingTop: 14,
			borderTop: `1px solid ${border}`,
			opacity: 0.7,
			fontSize: 13,
		};

		return { stage, container, card, h1, headline, sectionTitle, p, row, chip, chipHover, primary, footer };
	}, []);

	return (
		<div ref={rootRef} style={styles.stage}>
			<div style={styles.container}>
				<header style={styles.card} data-reveal="">
					<h1 style={styles.h1}>{site.name}</h1>
					<p style={styles.headline}>{site.headline}</p>

					<div style={styles.row}>
						<a
							href={`mailto:${site.email}`}
							style={styles.primary}
							onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.chipHover)}
							onMouseLeave={(e) => {
								// revert
								e.currentTarget.style.border = "1px solid rgba(255,255,255,0.14)";
								e.currentTarget.style.background = "#16a34a";
							}}
						>
							Email
						</a>

						<a
							href={site.github}
							target="_blank"
							rel="noreferrer"
							style={styles.chip}
							onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.chipHover)}
							onMouseLeave={(e) => {
								e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
								e.currentTarget.style.background = "rgba(0,0,0,0.18)";
							}}
						>
							GitHub
						</a>

						{site.linkedin ? (
							<a
								href={site.linkedin}
								target="_blank"
								rel="noreferrer"
								style={styles.chip}
								onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.chipHover)}
								onMouseLeave={(e) => {
									e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)";
									e.currentTarget.style.background = "rgba(0,0,0,0.18)";
								}}
							>
								LinkedIn
							</a>
						) : null}
					</div>
                    <div style={{ marginTop: 22 }}>
		<h2 style={styles.sectionTitle}>About</h2>
		<p style={styles.p}>{site.about}</p>
	</div>
				</header>

				

				

				
			</div>
		</div>
	);
}