import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main-layout/MainLayout";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

export const Views = () => {
	return (
		<div className="views flex justify-center">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
