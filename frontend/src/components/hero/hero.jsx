import { useEffect, createContext, useContext } from "react";
import { words } from "../words";
import styles from "./hero.css";
import { LanguageContext } from "../context/language";

export function Hero() {
	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<>
			<section>
				<div className="hero__main">
					<div className="hero__main__ttile">
						<span className="text">Powered by</span>
						<img
							className="webos-logo"
							style={{
								marginTop: "20px",
							}}
							src="./images/webos_logo.png"
							alt=""
						/>
					</div>
					<div
						className="hero__main__picture"
						style={{
							backgroundImage: "url(./images/start.png)",
						}}
					></div>
					<div className="hero__logos">
						<img src="./images/hdmi.png" alt="" className="hero__logos__hdmi" />
						<img
							src="./images/wi-fi.png"
							id="wifi"
							alt=""
							className="hero__logos__wifi"
						/>
						<img
							src="./images/bluetooth-2.png"
							alt=""
							id="bluetooth"
							className="hero__logos__bluetooth"
						/>
						<div className="hero__logos__4k" id="4k">
							4K
						</div>
						<img
							className="hero__logos__allplay"
							src="./images/allplay.png"
							id="allplay"
							alt=""
						/>
						<img
							className="hero__logos__dolby"
							src="./images/dolby.png"
							id="dolby"
							s
							alt=""
						/>
					</div>
				</div>
			</section>
			<div className="rectangle"></div>
			<span className="rectangle__title">{words[language]["new"]}</span>
		</>
	);
}
