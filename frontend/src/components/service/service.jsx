import { styles } from "./service.css";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/language";
import { words } from "../words";
import Slider from "react-slick";
import {Link} from 'react-router-dom'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export function Service() {
	const [partners, setPartners] = useState([]);
	const [banner, setBanner] = useState("");

	const { language } = useContext(LanguageContext);

	async function getPartners() {
		const response = await fetch("https://ssmart.uz/api/partners/");
		const data = await response.json();
		setPartners(data);
	}

	async function getBanner() {
		const response = await fetch("https://ssmart.uz/api/adverts/");
		const data = await response.json();
		setBanner(data);
	}

	useEffect(() => {
		getPartners();
		getBanner();
	}, []);

	console.log(partners);
	console.log(banner);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <button className="slider-button next-button">Next</button>,
		prevArrow: <button className="slider-button prev-button">Previous</button>,
	};

	return (
		<section className="service" id="service">
			{/* <div className="banner">
				<div
					className="banner-image"
					style={{
						width: "100%",
						height: "100%",
						backgroundImage: `url(${banner[0]?.image})`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				></div>
			</div> */}
			<h1 className="service-heading">{words[language]["service_heading"]}</h1>
			<div className="service__container">
				<div className="service__container-left">
					<span className="left-title">
						{words[language]["service_left_title"]}
					</span>
					<div className="left-bottom">
						<img src="./images/map-128.png" alt="" />
						<div className="service-left-bottom-text">
							<span className="service-left-bottom-title">
								{words[language]["addresses"]}
							</span>
							<Link className="service-left-bottom-link" href="">
								{words[language]["service_points"]}
							</Link>
						</div>
					</div>
				</div>
				<div className="service__container-right">
					<div className="service-right-top">
						<div className="service-right-top-text">
							<span className="service-right-top-title">
								{words[language]["warranty_conditions"]}
							</span>
							<Link className="service-right-top-link" href="/service">
								{words[language]["warranty_text"]}
							</Link>
						</div>
					</div>
					<div className="service-right-bottom">
						<Link to="/where-to-buy" className="service-right-bottom-title">
							{words[language]["where_to_buy"]}
						</Link>
					</div>
				</div>
			</div>
			<div className="partners">
				<h2 className="partners__heading">
					{words[language]["partners_heading"]}
				</h2>
				<div className="partners__container">
					{partners.map((partner) => (
						<div
							style={{
								backgroundColor: `${partner.background_color}` || "white",
								backgroundImage: `url(${partner.image})`,
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								zIndex: "100",
							}}
							className="partners__container-item"
							key={partner.id}
						></div>
					))}
				</div>
			</div>
		</section>
	);
}
