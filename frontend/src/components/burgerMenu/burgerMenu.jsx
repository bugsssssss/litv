import React, { useState, useContext, useEffect } from "react";
import styles from "./burgerMenu.css";
import { words } from "../words";
import { LanguageContext } from "../context/language";
import {Link} from 'react-router-dom'

export const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<div className="menu-container">
			{isOpen ? (
				<span className="menu-title">
					<img
						style={{
							width: "26px",
						}}
						src="./images/close.png"
						alt=""
						onClick={() => {
							setIsOpen(false);
						}}
					/>
				</span>
			) : (
				<span className="menu-title">
					<img
						style={{
							width: "26px",
						}}
						src="./images/menu.png"
						alt=""
						onClick={() => {
							setIsOpen(true);
						}}
					/>
				</span>
			)}
			{isOpen ? (
				<ul
					className="menu-list"
					style={{
						display: "flex",
					}}
				>
					<li className="menu-list-item">
						<a href="/request">{words[language]["dealers"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/products">{words[language]["products"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/service">{words[language]["warranty"]}</a>
					</li>
				</ul>
			) : (
				<ul
					className="menu-list"
					style={{
						display: "none",
					}}
				>
					{/* <li className="menu-list-item">
						<Link to="/request">{words[language]["dealers"]}</Link>
					</li>
					<li className="menu-list-item">
						{" "}
						<Link to="/products">{words[language]["products"]}</Link>
					</li>
					<li className="menu-list-item">
						{" "}
						<Link to="/service">{words[language]["warranty"]}</Link>
					</li> */}
				</ul>
			)}
		</div>
	);
};
