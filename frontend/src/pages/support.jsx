import { useState, useEffect } from "react";
import { Footer } from "../components/footer/footer";
import {Link} from 'react-router-dom'


export function Support() {
	return (
		<>
			<section className="support">
				<h1
					style={{
						textAlign: "center",
						marginBottom: "40px",
					}}
				>
					Обслуживание и поддержка продукции LiTV
				</h1>
				<div
					className="about__text"
					style={{
						color: "#000",
					}}
				>
					<p>
						Получите ответы на свои вопросы о настройке продукта, использовании
						и уходе, ремонте и техническом обслуживании. Мы можем помочь.
					</p>
				</div>
				<div className="support__center">
					<div className="support__center-box">
						<span> Поговорите с нами</span>
						<button
							className="btn-primary"
							style={{
								height: "85px",
							}}
						>
							Открыть чат
						</button>
						<span>Чат поддержки 24/7</span>
					</div>
					<Link to="mailto: info@ssmart.uz" className="support__center-box">
						<span> Свяжитесь с нами по Электронной почте</span>
						<img
							style={{
								width: "130px",
							}}
							src="./images/email.png"
							alt=""
						/>
						<span>support@litv.uz</span>
					</Link>
					<div className="support__center-box">
						<span> Свяжитесь с нами в социальных сетях</span>
						<Link
							href=""
							style={{
								display: "flex",
								alignItems: "center",
								gap: "20px",
							}}
						>
							<div
								className="instagram"
								style={{
									width: "90px",
								}}
							>
								<img
									style={{
										width: "90px",
									}}
									src="./images/instagram.png"
									alt=""
								/>
							</div>
							@litv_official
						</Link>
						<Link
							href=""
							style={{
								display: "flex",
								alignItems: "center",
								gap: "20px",
							}}
						>
							<div
								className="telegram"
								style={{
									width: "90px",
								}}
							>
								<img
									style={{
										width: "90px",
									}}
									src="./images/telegram.png"
									alt=""
								/>
							</div>
							@litv_official
						</Link>
					</div>
					<Link
						href="tel:+998712209009"
						className="support__center-box"
						style={{
							backgroundColor: "#124559",
							color: "#fff",
						}}
					>
						<span> Позвоните в наш колл-центр</span>
						<img
							style={{
								width: "90px",
							}}
							src="./images/phone.png"
							alt=""
						/>
						<span style={{ color: "#fff" }}>+998 75 220 00 55</span>
						<span
							style={{
								fontSize: "18px",
							}}
						>
							Звонок внутри Республики Узбекистан бесплатный
						</span>
					</Link>
				</div>
			</section>
			<Footer />
		</>
	);
}
