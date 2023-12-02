import { Footer } from "../footer/footer";
import {Link} from 'react-router-dom'

import "./where.css";


export function Where() {
	return (
		<>
			<section className="where">
				<h1
					style={{
						textAlign: "center",
						marginBottom: "40px",
					}}
				>
					ГДЕ ПРЕОБРЕСТИ НАШУ ПРОДУКЦИЮ?
				</h1>
				<div
					className="about__text"
					style={{
						color: "#000",
					}}
				>
					<p>
						Вы можете приобрести нашу продукцию у наших официальных партнеров в
						розницу а также в кредит
					</p>
				</div>
				<div className="support__center">
					<Link
						href="https://elmakon.uz/"
						className="support__center-box"
						style={{
							justifyContent: "space-between",
						}}
					>
						<div className="center-box-logo elmakon"></div>
						{/* <img src="./images/elmakon.png" alt="" /> */}
						<button className="btn-primary gray">Перейти на сайт</button>
					</Link>

					<Link
						href="https://www.goodzone.uz/ru"
						className="support__center-box"
						style={{
							justifyContent: "space-between",
						}}
					>
						<div className="center-box-logo goodzone"></div>
						{/* <img src="./images/elmakon.png" alt="" /> */}
						<button className="btn-primary gray">Перейти на сайт</button>
					</Link>

					<Link
						href="https://idea.uz/"
						className="support__center-box"
						style={{
							justifyContent: "space-between",
						}}
					>
						<div className="center-box-logo idea"></div>
						{/* <img src="./images/elmakon.png" alt="" /> */}
						<button
							style={{
								padding: "20px 40px",
								width: "247px",
							}}
							className="btn-primary"
						>
							Скоро
						</button>
					</Link>

					<Link
						href="https://uzum.uz/" 
						className="support__center-box"
						style={{
							justifyContent: "space-between",
						}}
					>
						<div className="center-box-logo uzum"></div>
						{/* <img src="./images/elmakon.png" alt="" /> */}
						<button className="btn-primary gray">Перейти на сайт</button>
					</Link>
				</div>
				<div
					className="about__text"
					style={{
						color: "#000",
						fontSize: "22px",
						marginTop: "30px",
					}}
				>
					<p>
						МЫ РАСШИРЯЕМ ПРЕДСТАВЛЕННОСТЬ СВОЕЙ ПРОДУКЦИИ КАЖДЫЙ ДЕНЬ И СКОРО
						СДЕСЬ БУДУТ НОВЫЕ ПАРТНЕРЫ
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
}
