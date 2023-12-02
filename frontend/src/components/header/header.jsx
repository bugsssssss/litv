import { Link } from "react-router-dom";
import { words } from "../words";
import { LanguageContext } from "../context/language";
import styles from "./header.css";
import React, { useEffect, useState, createContext, useContext } from "react";
import { BurgerMenu } from "../burgerMenu/burgerMenu";
export { Header };

function Header(logo, globe) {
	// const [language, setLanguage] = useState("ru");
	const { language, changeLanguage } = useContext(LanguageContext);

	function LanguageCall(event) {
		console.log(event.target);
		let header__language = document.querySelector(".header__language");
		header__language.classList.toggle("active");
	}
	const HandleClick = (e, lang) => {
		// console.log(e.target.classList.toggle("active"));
		let en = document.getElementById("en");
		let ru = document.getElementById("ru");
		let uz = document.getElementById("uz");
		if (lang === "en") {
			en.classList.add("active");
			ru.classList.remove("active");
			uz.classList.remove("active");
			changeLanguage("en");
		} else if (lang === "ru") {
			en.classList.remove("active");
			ru.classList.add("active");
			uz.classList.remove("active");
			changeLanguage("ru");
		} else if (lang === "uz") {
			en.classList.remove("active");
			ru.classList.remove("active");
			uz.classList.add("active");
			changeLanguage("uz");
		}
	};

	useEffect(() => {
		localStorage.setItem("language", language);
		changeLanguage(language);
	}, [language]);

	return (
		<header className="header__main">
			<div className="header__left">
				<div className="header__main__logo">
					<Link to="/">
						<img className="main__logo" src={logo.logo} alt="" />
					</Link>
				</div>
				<nav className="header__main__nav">
					<ul className="header__main__nav__list">
						<li className="header__main__nav__list__item">
							<Link to="/request">{words[language]["dealers"]}</Link>
						</li>
						<li className="header__main__nav__list__item">
							<Link to="/products">{words[language]["products"]}</Link>
						</li>
						<li className="header__main__nav__list__item">
							<Link to="/service">{words[language]["warranty"]}</Link>
						</li>
						<li
							style={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<img
								style={{
									margin: "0 auto 0 auto",
								}}
								className="globe"
								src={logo.globe}
								alt=""
								id="globe"
								onClick={LanguageCall}
							/>
							<div className="header__language" id="header__language">
								<div
									onClick={(e) => HandleClick(e, "en")}
									id="en"
									className="language-item"
								>
									{/* <Link to="">EN</Link> */}
									EN
								</div>
								<div
									onClick={(e) => HandleClick(e, "ru")}
									id="ru"
									className="language-item active"
								>
									{/* <Link to="">RU</Link> */}
									RU
								</div>
								<div
									onClick={(e) => HandleClick(e, "uz")}
									id="uz"
									className="language-item"
								>
									{/* <Link to="">UZ</Link> */}
									UZ
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>

			{/* ! menu */}
			<BurgerMenu />
			<div className="header__main__user not">
				<Link to="/support" className="btn">
					{words[language]["support"]}
				</Link>
				{/* <Link to="" className="btn">
					<img width={"24px"} src="./images/basket(2).png" alt="" />
				</Link>
				<Link to="" className="btn">
					<img width={"24px"} src="./images/user.png" alt="" />
				</Link> */}
			</div>
		</header>
	);
}
