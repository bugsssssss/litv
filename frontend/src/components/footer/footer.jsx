import { styles } from "./footer.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { words, footer } from "../words";
import {Link} from 'react-router-dom'

export function Footer() {
	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<footer className="foot">
			<div className="footer__container">
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["support"]}
					</span>
					<li className="footer__list-item">
						<Link to="/support">Поддержка LiTV</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/where-to-buy">Где купить ?</Link>
					</li>
					<li className="footer__list-item">
						<Link to="">Руководство пользователя</Link>
					</li>

					<li className="footer__list-item">
						<Link to="/service">Условия Гарантии</Link>
					</li>

					<li className="footer__list-item">
						<Link to="/request">Дилерам</Link>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["about"]}
					</span>
					<li className="footer__list-item">
						<Link to="/about-us">LiTV</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/about-us">Производство</Link>
					</li>
					<li className="footer__list-item">
						<Link to="">Политика конфиденциальности</Link>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["products"]}
					</span>
					<li className="footer__list-item">
						<Link to="/products">Все товары</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/products">LiTV Web OS</Link>
					</li>
					<li className="footer__list-item">
						<Link to="/products">LiTV Android</Link>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["contact"]}
					</span>
					<li className="footer__list-item">
						<Link to="mailto: info@litv.uz">Эл.почта</Link>
					</li>
					<li className="footer__list-item">
						<Link to="tel:+998712209009">Колл-центр : +998 75 220 00 55</Link>
					</li>
					<li className="footer__list-item">
						<Link to="">Часы работы : с 9:00 до 18:00 Карши</Link>
					</li>

					<li className="footer__list-item">
						<Link to="/support">Онлайн поддержка</Link>
					</li>
				</ul>
			</div>
			<div className="footer-rectangle"></div>
			<div className="footer-rectangle-title"></div>
			<img
				src="./images/logo.png"
				alt=""
				className="footer-rectangle-title main__logo"
				style={{
					height: "60px",
				}}
			/>
			<div className="footer__social">
				<span className="footer__news-title">Новости LiTV</span>
				<div className="footer__news-logos">
					<Link to="">
						<div className="instagram">
							<img src="./images/instagram.png" alt="" />
						</div>
						instagram
					</Link>
					<Link to="">
						<div className="telegram">
							<img src="./images/telegram.png" alt="" />
						</div>
						telegram
					</Link>
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					border: "1px solid #E5E5E5",
					position: "absolute",
					bottom: "6%",
				}}
			/>
			<span className="copyright-text">
				LiTV 2014-2023 все права защищены
			</span>
		</footer>
	);
}
