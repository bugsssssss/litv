import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Products } from "../components/products/products";
import { Service } from "../components/service/service";
import { Vitrina } from "../components/vitrina/vitrina";
import { Footer } from "../components/footer/footer";
import { Warranty } from "./warranty-service";
import { WarrantyComponent } from "../components/warranty/warranty";

export function Home() {
	return (
		<>
			<Hero />
			<Vitrina />
			<Products />
			<Service />
			{/* <WarrantyComponent /> */}
			<Footer />
		</>
	);
}
