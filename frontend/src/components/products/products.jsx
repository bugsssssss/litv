import { styles } from "./products.css";
import { useEffect, useState, useContext } from "react";
import { ProductsContainer } from "./products-container";
import { words } from "../words";
import { LanguageContext } from "../context/language";
import { Slider } from "../slider/slider.jsx";

export function Products() {
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
		<section className="products" id="products">
			<div className="product__os">
				<div className="product__os-text">
					<img
						className="webos-logo"
						style={{
							marginTop: "20px",
							width: "230px",
							height: "unset",
						}}
						src="./images/webos_logo.png"
						alt=""
					/>
					<span className="os-text">
						{words[language]["os_title"]}
						<br />
						<span className="os-text-light">
							{words[language]["os_description"]}
						</span>
					</span>
				</div>
				<img className="product-img" src="./images/os.jpeg" alt="" />
			</div>
			<img
				className="products__image-center"
				src="./images/remote.png"
				alt=""
			/>
			<h1 id="products__heading" className="products__heading">
				{words[language]["products_heading"]}
			</h1>
			<Slider products={products} />
			{/* {products.map((product) => (
				<ProductsContainer
					name={product.name}
					picture={product.picture}
					os_type={product.os_type}
					is_new={product.is_new}
					display={product.display}
					resolution={product.resolution}
					brightness={product.brightness}
					contrast={product.contrast}
					voice={product.voice}
					ac={product.ac}
					system={product.system}
					wifi={product.wifi}
					ram={product.ram}
					voice_control={product.voice_control}
					tech={product.tech}
					price={product.price}
					is_published={product.is_published}
					key={product.id}
				/>
			))} */}
		</section>
	);
}
