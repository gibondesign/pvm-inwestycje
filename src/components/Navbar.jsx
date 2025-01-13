"use client";

import Link from "next/link";

import "./navbar.css";
import NavLinks from "./NavLinks";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<>
			<nav>
				<div className="navbar">
					<Link href={`/${lang}`}>
						<img src="/navbar-logo.png" alt="PVM Logo" />
					</Link>

					<ul className="navbar-menu menu">
						<NavLinks lang={lang} />
					</ul>
					<div className="hide-on-mobile">
						<LanguageSwitcher />
					</div>

					<div
						className={`hamburger-icon ${isMenuOpen ? "active" : ""} `}
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<span className="line-1"></span>
						<span className="line-2"></span>
						<span className="line-3"></span>
					</div>
				</div>
			</nav>
			<div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
				<ul className="menu">
					<NavLinks lang={lang} onLinkClick={closeMenu} />
				</ul>
				<LanguageSwitcher />
			</div>
		</>
	);
}
