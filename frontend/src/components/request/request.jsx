import "./request.css";
import { Footer } from "../../components/footer/footer";
import { useEffect, useRef, useState } from "react";

export function Request() {
	const formRef = useRef(null);

	const [formData, setFormData] = useState({
		name: "",
		inn: "",
		city: "",
		sales_type: "",
		shops: 0,
		text: "",
	});
	const [formStatus, setFormStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send POST request here
		let selectElement = document.getElementById("type");
		let selectedValue = selectElement.value;
		formData.sales_type = selectedValue;
		formData.shops = parseInt(formData.shops);
		sendFormData(formData);
	};

	const sendFormData = async (data) => {
		try {
			console.log(data);
			const response = await fetch("https://ssmart.uz/api/dealers/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log("Form data sent successfully!");
				setFormStatus("success");
				formRef.current.reset();
				setFormData({
					name: "",
					inn: "",
					city: "",
					sales_type: "",
					shops: 0,
					text: "",
				});
				// Do something with the response if needed
			} else {
				console.log("Form data failed to send.");
				setFormStatus("error");
			}
		} catch (error) {
			console.error("Error sending form data:", error);
			setFormStatus("error");
		}
	};

	const handleChange = (e) => {
		const value = e.target.value;

		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<section className="request">
				<h1 className="main__title">КАК СТАТЬ НАШИМ ДИЛЕРОМ ?</h1>
				<div
					className="about__text"
					style={{
						background: "#5e5e5e",
						fontSize: "26px",
						color: "#fff",
					}}
				>
					<p>Подайте заявку через форму что бы стать дилером LiTV</p>
				</div>
				<div className="form-box">
					<div className="form-box-left">
						<form ref={formRef} action="" method="POST" onSubmit={handleSubmit}>
							<div className="input__group">
								<label htmlFor="name">Наименование юридического лица</label>
								<input type="text" name="name" onChange={handleChange} />
							</div>
							<div className="input__group-row">
								<div
									className="input__group"
									style={{ width: "40%", gap: "5px" }}
								>
									<label htmlFor="inn">ИНН*</label>
									<input type="text" name="inn" onChange={handleChange} />
								</div>
								<div
									className="input__group"
									style={{ width: "60%", gap: "5px" }}
								>
									<label htmlFor="city">
										Город осуществления деятельности*
									</label>
									<input type="text" name="city" onChange={handleChange} />
								</div>
							</div>
							<div className="input__group-row">
								<div
									className="input__group"
									style={{ width: "40%", gap: "5px" }}
								>
									<label htmlFor="shops">Кол-во магазинов*</label>
									<input type="text" name="shops" onChange={handleChange} />
								</div>
								<div
									className="input__group"
									style={{ width: "60%", gap: "5px" }}
								>
									<label htmlFor="sales_types">
										Тип продаж (Розница или Оптовые)*
									</label>
									<select id="type" name="sales_type" onChange={handleChange}>
										<option value="Розница">Розница</option>
										<option value="Оптовые">Оптовые</option>
									</select>
									{/* <input
										type="text"
										name="sales_type"
										onChange={handleChange}
									/> */}
								</div>
							</div>
							<label htmlFor="text">Введите дополнительную информацию</label>
							<textarea
								name="text"
								id="text"
								cols="30"
								rows="10"
								onChange={handleChange}
							></textarea>
							<button
								type="submit"
								className="btn-primary"
								style={{
									width: "270px",
									fontSize: "20px",
									height: "85px",
									margin: "20px auto",
								}}
							>
								ОТПРАВИТЬ ЗАЯВКУ
							</button>
						</form>
					</div>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<img
							style={{
								width: "240px",
							}}
							src="./images/logo.png"
							alt=""
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
