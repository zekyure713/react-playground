import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
	return (
		<div className="main-layout">
			<div className="header">
				<div className="logo">
					<img src="logo.png" alt="logo" className="h-8 w-8" />
				</div>
				<nav>
					<Link to="/" className="nav-item">
						Home
					</Link>
					<Link to="/about" className="nav-item">
						About
					</Link>
					<Link to="/contact" className="nav-item">
						Contact
					</Link>
				</nav>
			</div>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
};
