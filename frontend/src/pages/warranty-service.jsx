import { Details } from "../components/details/details";
import { Footer } from "../components/footer/footer";
import { Guidance } from "../components/guidance/guidance";
import { WarrantyComponent } from "../components/warranty/warranty";
import { styles } from "./pages.css";
export function Warranty() {
	return (
		<>
			<WarrantyComponent />
			<Details />
			<Footer />
		</>
	);
}
