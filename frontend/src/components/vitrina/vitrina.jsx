import styles from "./vitrina.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { words } from "../words";

export function Vitrina() {
	const { language } = useContext(LanguageContext);

	return (
		<section className="vitrina" id="vitrina">
			<div className="vitrina__left-section">
				<div className="vitrina__left">
					<div className="vitrina__left-top__title">
						<span
							className=""
							style={{
								fontWeight: "500",
								fontSize: "38px",
							}}
						>
							{words[language]["webos"]}
						</span>
						<img
							style={{
								marginTop: "10px",
							}}
							src="./images/webos_logo.png"
							alt=""
							className="webos-logo"
						/>
					</div>
					<div className="vitrina__left-top-background">
						<img
							src="./images/start.png"
							alt=""
							style={{
								height: "330px",
							}}
						/>
					</div>
				</div>
				<div className="vitrina__left-bottom">
					<span className="left-bottom-title">
						{words[language]["services_title"]}
					</span>
					<span className="left-bottom-description">
						{words[language]["services_description"]}
					</span>
					<div className="left-bottom-logos">
						<img className="allplay" src="./images/allplay.png" alt="" />
						<img className="youtube" src="./images/youtube.png" alt="" />
					</div>
				</div>
			</div>
			<div className="vitrina__right-section">
				<div className="vitrina__right-top">
					<div className="right-top-text">
						<span className="right-top-title">Ultra HD 4K</span>
						<span className="right-top-description">
							{/* Дисплей с яркими */}
							{words[language]["display_top"]}
							<br />
							{words[language]["display_bottom"]}
						</span>
					</div>
					<img
						className="right-top-image"
						src="./images/ssmart-tv-3.png"
						alt=""
					/>
				</div>
				<div className="vitrina__right-center">
					<div className="right-center-text">
						<span className="right-center-title">
							{words[language]["no_frame_top"]}
						</span>
						<span className="right-center-description">
							{" "}
							{words[language]["no_frame_bottom"]}
						</span>
						<img
							className="right-center-image"
							src="./images/ssmart-tv-5.png"
							alt=""
						/>
					</div>
				</div>
				<div className="vitrina__right-bottom">
					<div className="right-bottom-text">
						<span className="right-bottom-title">
							{words[language]["dolby_title"]}
						</span>
						<span className="right-bottom-description">
							{words[language]["dolby_description"]}
						</span>
						<img
							className="right-bottom-image"
							src="./images/Dolby_Atmos_Logo.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
