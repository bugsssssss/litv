import React from "react";
import { stles } from "./about.css";

export function AboutUsComponent() {
	return (
		<section className="about">
			<h1 className="main__title">О КОМПАНИИ</h1>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#124559",
					color: "#fff",
				}}
			>
				<div className="about__smart-left">
					<img className="about-logo" src="./images/logo.png" alt="" />
				</div>
				<div className="about__smart-right">
					<p>
						LiTV® — это собственная торговая марка компании ЧП ALP TEXNO
						SERVIS. Светодиодные телевизоры LiTV — «МЫ ПРОИЗВОДИМ
						УЗБЕКИСТАНЕ». Мы гордость Узбекской промышленности состоящая из
						команды экспертов с современной инфраструктурой, позволяющей
						разрабатывать и производить первоклассные продукты экономически
						эффективным способом
					</p>
				</div>
			</div>
			<div className="about__text">
				<p>
					ЧП ALP TEXNO SERVIS - ЭТО ОДИН ИЗ КРУПНЕЙШИХ ОЕМ ЗАВОДОВ В РЕСПУБЛИКЕ
					УЗБЕКИСТАН ПО ПРОИЗВОДУ ТЕЛЕВИЗОРОВ С ПЛОСКИМ ЭКРАНОМ.
				</p>
			</div>
			<div
				className="about__smart founded"
				style={{
					backgroundColor: "#e2e2e2",
					height: "145px",
					fontSize: "20px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #000",
						height: "125px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>
						КОМПАНИЯ ОСНОВАННА <br /> В 2017 ГОДУ
					</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
					}}
				>
					<span>КОЛИЧЕСТВО СОТРУДНИКОВ "300" ЧЕЛОВЕК</span>
				</div>
			</div>
			<div className="about__text-second">
				<div className="text-second-left">
					<span>
						ЭКСПОРТ
						<br />
						70 000 ШТ В ГОД
					</span>
				</div>
				<div className="text-second-right">
					<span>
						ПЛОЩАДЬ ЗАВОДА <br /> 10 000 м2
					</span>
				</div>
			</div>
			<div className="about__text">
				<span>ПРОИЗВОДСТВЕННАЯ МОЩНОСТЬ 100 000 ТЕЛЕВИЗОРОВ В ГОД</span>
			</div>
			<h1 className="main__title">ПРОИЗВОДСТВО</h1>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#e2e2e2",
					height: "145px",
					fontSize: "20px",
					height: "250px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #000",
						height: "205px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>
						ПОСТАВЩИКИ <br /> КОМПЛЕКТУЮЩИХ
					</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
						height: "250px",
					}}
				>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "20px",
							flexWrap: "wrap",
							justifyContent: "center",
							padding: "0 40px",
						}}
					>
						<img
							style={{
								width: "82px",
								marginRight: "20px",
							}}
							src="./images/LG_2.png"
							alt=""
						/>
						<img style={{ width: "110px" }} src="./images/heniken.png" alt="" />
						<img style={{ width: "80px" }} src="./images/tcl.png" alt="" />
						<br />
						<img style={{ width: "70px" }} src="./images/boe.png" alt="" />
						<img style={{ width: "120px" }} src="./images/cvte.png" alt="" />
						<img
							style={{ width: "120px" }}
							src="./images/wead-logo.png"
							alt=""
						/>
						<img style={{ width: "120px" }} src="./images/topnice.png" alt="" />
					</div>
				</div>
			</div>
			<div className="about__text">
				<span>
					ВСЯ НАША ПРОДУКЦИЯ СОБРАННА ИЗ КАЧЕСТВЕННЫХ КОМПЛЕКТУЮЩИХ ОТ МИРОВЫХ
					БРЕНДОВ ТЕХНОЛОГИЧЕСКОЙ ПРОМЫШЛЕННОСТИ.
				</span>
			</div>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#e2e2e2",
					height: "250px",
					fontSize: "20px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #000",
						height: "205px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>
						ОПЕРАЦИОНЫЕ <br /> СИСТЕМЫ
					</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
					}}
				>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "40px",
							flexWrap: "wrap",
							justifyContent: "center",
							padding: "0 50px",
						}}
					>
						<img style={{ width: "110px" }} src="./images/android.png" alt="" />
						<img style={{ width: "110px" }} src="./images/yandex.png" alt="" />
						<img style={{ width: "110px" }} src="./images/webos-small.png" />
						<img style={{ width: "80px" }} src="./images/images.png" alt="" />
						<img style={{ width: "110px" }} src="./images/salut.png" alt="" />
						<img style={{ width: "100px" }} src="./images/vidaa.webp" alt="" />
					</div>
				</div>
			</div>
			<div className="about__text">
				<span>
					МЫ РАБОТАЕМ С РАЗНЫМИ ОПЕРАЦИОННЫМИ СИСТЕМАМИ ПРИ ПРОИЗВЕДСТВЕ
					ТЕХНОЛОГИЧЕСКОЙ ПРОДУКЦИИ.
				</span>
			</div>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#5e5e5e",
					color: "#fff",
					height: "250px",
					fontSize: "20px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #fff",
						height: "205px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>ТЕХНОЛОГИИ</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
					}}
				>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
							gap: "50px",
							flexWrap: "wrap",
							justifyContent: "center",
							padding: "0 50px",
						}}
					>
						<img style={{ width: "80px" }} src="./images/ips.png" alt="" />
						<img style={{ width: "80px" }} src="./images/voice-assistant.png" />
						<img
							style={{ width: "80px" }}
							src="./images/Dolby_Atmos_Logo.png"
							alt=""
						/>
						<img style={{ width: "80px" }} src="./images/wifi.png" alt="" />
						<img style={{ width: "80px" }} src="./images/blue.jpg" alt="" />
						<img style={{ width: "80px" }} src="./images/quality.jpg" alt="" />
					</div>
				</div>
			</div>
			<div
				className="about__text"
				style={{
					color: "#fff",
					backgroundColor: "#5e5e5e",
				}}
			>
				<span>НАША ПРОДУКЦИЯ ВКЛЮЧАЕТ В СЕБЯ ВСЕ ПЕРЕДОВЫЕ ТЕХНОЛОГИИ</span>
			</div>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#e2e2e2",
					color: "#000",
					height: "250px",
					fontSize: "20px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #000",
						height: "205px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>ПАРТНЕРЫ</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
					}}
				>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						<img style={{ width: "80px" }} src="./images/jvc.png" alt="" />
						<img style={{ width: "200px" }} src="./images/rebus.png" alt="" />
						<img style={{ width: "115px" }} src="./images/tcl.png" alt="" />
						<img
							style={{ width: "195px" }}
							src="./images/zimer-logo.png"
							alt=""
						/>
						<img style={{ width: "175px" }} src="./images/thomson.png" alt="" />
						<img
							style={{ width: "175px" }}
							src="./images/well-starts.png"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="about__text">
				<span> МЫ ПРОИЗВОДИМ ТЕЛЕВИЗОРЫ ДЛЯ МИРОВЫХ И OEM БРЕНДОВ</span>
			</div>
		</section>
	);
}
