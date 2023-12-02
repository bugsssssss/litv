import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../components/context/language";
import { Header } from "../components/header/header";
import { ProductsContainer } from "../components/products/products-container";
import { Vitrina } from "../components/vitrina/vitrina";
import { words } from "../components/words";
import { Hero } from "../components/hero/hero";
import { Footer } from "../components/footer/footer";
import {Link} from 'react-router-dom'


export function AllProducts() {
	const [products, setProducts] = useState([]);

	const { language } = useContext(LanguageContext);

	async function getProducts() {
		const response = await fetch("https://ssmart.uz/api/products/");
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		getProducts();
	}, []);
	// getProducts();
	console.log(products);
	return (
		<>
			<section
				className="all__products"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "50px",
					marginBottom: "50px",
				}}
			>
				<Hero />
				<h1 className="products__heading" style={{}}>
					{words[language]["products_heading"]}
				</h1>
				<div
					className="products__wrapper"
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						rowGap: "50px",
						columnGap: "25px",
					}}
				>
					{products.map((product) => (
						<div className="products__container">
							<div
								className="products__container-main"
								style={{
									height: "490px",
									width: "335px",
								}}
							>
								<div
									className="container-main-title"
									style={{
										display: "flex",
										width: "100%",
										fontSize: "22px",
										justifyContent: "center",
										alignItems: "center",
										gap: "10px",
										marginTop: "20px",
									}}
								>
									<img
										style={{
											width: "135px",
										}}
										src={product.os_type}
										className="system"
									></img>
									{product.name}
								</div>
								<div
									className="products__main-picture"
									style={{
										backgroundImage: `url(${product.picture})`,
										width: "310px",
										height: "200px",
										top: "175px",
									}}
								></div>
								<div
									className="container-main-bottom"
									style={{
										gap: "15px",
									}}
								>
									<span
										className="main-bottom-price"
										style={{
											fontSize: "18px",
										}}
									>
										{product.price} {words[language]["currency"]}
									</span>
									<Link
										href={product.url}
										style={{
											textDecoration: "none",
											cursor: "pointer",
											fontSize: "20px",
										}}
										className="btn-primary"
									>
										{words[language]["buy"]}
									</Link>
								</div>
							</div>
							<div className="products__container-left">
								<div className="product__character">
									<div
										className="character-title"
										style={{
											fontSize: "26px",
											padding: "12px 32px",
											width: "335px",
											textAlign: "center",
											backgroundColor: "rgb(223, 223, 223)",
											borderRadius: "20px",
											marginBottom: "20px",
										}}
									>
										{words[language]["character"]}
									</div>
									<div
										className="character__info"
										style={{
											fontSize: "15px",
											padding: "6px 15px",
											width: "335px",
											backgroundColor: " rgb(223, 223, 223)",
											borderRadius: "20px",
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											gap: "10px",
											height: "405px",
										}}
									>
										<span className="display" style={{}}>
											<b>{words[language]["display"]}</b> - {product.display}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["resolution"]}</b> -{" "}
											{product.resolution}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["brightness"]}</b> -{" "}
											{product.brightness}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["contrast"]}</b> - {product.contrast}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["sound"]}</b> - {product.voice}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["ac"]}</b> - {product.ac}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["system"]}</b> - {product.system}
										</span>
										<span className="display" style={{}}>
											<b>Wi-Fi/Bluetooth</b> - {product.wifi}
										</span>
										<span className="display" style={{}}>
											<b>RAM/DDR</b> - {product.ram}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["voice"]}</b> -{" "}
											{product.voice_control}
										</span>
										<span className="display" style={{}}>
											<b>{words[language]["tech"]}</b> - {product.tech}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
}
