import React, { useState, useContext } from "react";
import "./slider.css";
import { ProductsContainer } from "../products/products-container";
import { words } from "../words";
import { LanguageContext } from "../context/language";

export const Slider = ({ products }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { language } = useContext(LanguageContext);

	const handleNextSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === products.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrevSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? products.length - 1 : prevIndex - 1
		);
	};

	return (
		<div>
			<div className="slider-container">
				<div className="card-slider">
					{products.map((product, index) => (
						<div
							key={index}
							style={{
								border: "none",
							}}
							className={`card ${index === activeIndex ? "active" : ""} ${
								index === activeIndex - 1 ||
								(index === 0 && activeIndex === products.length - 1)
									? "prev"
									: ""
							} ${
								index === activeIndex + 1 ||
								(index === products.length - 1 && activeIndex === 0)
									? "next"
									: ""
							}`}
						>
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
								url={product.url}
								key={product.id}
							/>
						</div>
					))}
				</div>
			</div>
			{/* <button
				style={{
					position: "absolute",
					left: "70px",
					marginTop: "265px",
					padding: "8px 12px",
				}}
				className="arrow-btn prev"
				onClick={handlePrevSlide}
			>
				prev
			</button> */}
			<img
				src="./images/previous.png"
				alt=""
				style={{
					position: "absolute",
					left: "10%",
					marginTop: "265px",
					padding: "8px 12px",
					cursor: "pointer",
					width: "64px",
				}}
				className="arrow-btn prev"
				onClick={handlePrevSlide}
			/>
			{/* <button
				style={{
					position: "absolute",
					right: "70px",
					marginTop: "265px",
					padding: "8px 12px",
				}}
				className="arrow-btn next"
				onClick={handleNextSlide}
			>
				next
			</button> */}
			<img
				src="./images/next.png"
				alt=""
				style={{
					position: "absolute",
					right: "10%",
					marginTop: "265px",
					padding: "8px 12px",
					cursor: "pointer",
					width: "64px",
				}}
				className="arrow-btn next"
				onClick={handleNextSlide}
			/>
		</div>
	);
};

export default Slider;
