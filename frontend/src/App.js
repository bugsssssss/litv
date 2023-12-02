import styles from "./App.css";
import { Header } from "./components/header/header";
import { CCarouselCaption } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Warranty } from "./pages/warranty-service";
import { AboutUs } from "./pages/about-us";
import { LanguageProvider } from "./components/context/language";
import { Support } from "./pages/support";
import { Where } from "./components/where/where";
import { Request } from "./components/request/request";
import { Slider } from "./components/slider/slider.jsx";
import { AllProducts } from "./pages/allProducts";
function App() {
	return (
		<LanguageProvider>
			<div className="App">
				<BrowserRouter>
					<div className="content">
						<Header logo="../images/logo.png" globe="../images/globe(1).png" />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about-us" element={<AboutUs />} />
							<Route path="/service" element={<Warranty />} />
							<Route path="/support" element={<Support />} />
							<Route path="/where-to-buy" element={<Where />} />
							<Route path="/request" element={<Request />} />
							<Route path="/products" element={<AllProducts />} />
							<Route path="/slider" element={<Slider />} />
						</Routes>
					</div>
				</BrowserRouter>
				{/* <CCarousel controls indicators dark>
				{pictures.map((picture) => (
					<CCarouselItem key={picture.id}>
						<CImage
							className="carousel__image"
							src={picture.image}
							alt={picture.id}
						/>
						<CCarouselCaption className="d-none d-md-block caption">
							<h5>{picture.characteristics}</h5>
							<p>{picture.status}</p>
						</CCarouselCaption>
					</CCarouselItem>
				))}
			</CCarousel> */}
				;
			</div>
		</LanguageProvider>
	);
}

export default App;
