import { Guidance } from "../guidance/guidance";
import { styles } from "./warranty.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PhoneNumberInput from "../input/phone-ipnut";
export function WarrantyComponent() {
	const formRef = useRef(null);

	const [seriesInput, setSeriesInput] = useState("");
	const [talonInput, setTalonInput] = useState("");
	const [nameInput, setNameInput] = useState("");
	const [phoneInput, setPhoneInput] = useState("");
	const [cityInput, setCityInput] = useState("");
	const [dealerInput, setDealerInput] = useState("");

	const [seriesVerified, setSeriesVerified] = useState(false);

	//? Получение всех серийных номеров из базы данных
	// const [seriesData, setSeriesData] = useState([]);
	// async function getSeriesData() {
	// 	try {
	// 		const response = await fetch("http://127.0.0.1:8000/api/warrantydata/");
	// 		const data = await response.json();
	// 		setSeriesData(data);
	// 	} catch (error) {
	// 		console.error("Error fetching series data:", error);
	// 	}
	// }

	// useEffect(() => {
	// 	getSeriesData();
	// }, []);

	const [formData, setFormData] = useState({
		series: "",
		talon: "",
		name: "",
		phone: "",
		city: "",
		dealer: "",
	});
	const [formStatus, setFormStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send POST request here
		sendFormData(formData);
	};

	const checkSeries = (series) => {
		axios
			.get(`http://127.0.0.1:8000/api/warrantydata/?series=${series}`)
			.then((response) => {
				// Handle the response from the API
				let is_found = response.data["found"];
				setSeriesVerified(is_found);
				let seriesInputStyle = document.getElementById("series");
				if (is_found) {
					seriesInputStyle.classList.add("verified");
					seriesInputStyle.classList.remove("not-verified");
				} else {
					seriesInputStyle.classList.add("not-verified");
					seriesInputStyle.classList.remove("verified");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleChange = (e, input) => {
		const value = e.target.value;

		switch (input) {
			case "series":
				setSeriesInput(value);
				checkSeries(e.target.value);
				// if (e.target.value.length === 15) {
				// 	checkSeries(e.target.value);
				// }
				break;
			case "talon":
				setTalonInput(value);
				break;
			case "name":
				setNameInput(value);
				break;
			case "phone":
				setPhoneInput(value);
				break;
			case "city":
				setCityInput(value);
				break;
			case "dealer":
				setDealerInput(value);
				break;

			default:
				break;
		}
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const sendFormData = async (data) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/api/warranty/", {
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
					series: "",
					talon: "",
					name: "",
					phone: "",
					city: "",
					dealer: "",
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

	return (
		<>
			<section className="warranty">
				<span className="heading">ГАРАНТИЯ</span>
				<span className="subheading">
					Мы предоставляем вам информацию о гарантии Ssmart здесь
				</span>
				<div className="heading__main">
					<div className="heading__main-form">
						<span className="form-heading">АКТИВАЦИЯ ГАРАНТИИ</span>
						<form
							ref={formRef}
							className="heading__form"
							method="POST"
							onSubmit={handleSubmit}
						>
							<span className="form-subtitle">
								Заполните поля для активации гарантии
							</span>
							<div className="form-group">
								<div className="form__input">
									<label htmlFor="series">1</label>
									<input
										onChange={(e) => handleChange(e, "series")}
										type="text"
										name="series"
										id="series"
										required
										maxLength={15}
									/>
									<label className="label-main" htmlFor="series">
										Серийный номер
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="talon">2</label>
									<input
										onChange={(e) => handleChange(e, "talon")}
										type="text"
										name="talon"
										id="talon"
										required
										disabled={seriesVerified == false || seriesInput == ""}
									/>
									<label className="label-main" htmlFor="talon">
										No гарантийного Талона
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">3</label>
									<input
										onChange={(e) => handleChange(e, "name")}
										type="text"
										name="name"
										id="name"
										required
										disabled={seriesInput == "" || talonInput == ""}
									/>
									<label className="label-main" htmlFor="name">
										И.Ф.О.
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="phone">4</label>
									<input
										onChange={(e) => handleChange(e, "phone")}
										type="text"
										name="phone"
										id="phone"
										required
										disabled={
											seriesInput == "" || talonInput == "" || nameInput == ""
										}
									/>
									{/* <PhoneNumberInput /> */}
									<label className="label-main" htmlFor="phone">
										Номер телефона
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="city">5</label>
									<input
										onChange={(e) => handleChange(e, "city")}
										type="text"
										name="city"
										id="city"
										required
										disabled={
											seriesInput == "" ||
											talonInput == "" ||
											nameInput == "" ||
											phoneInput == ""
										}
									/>
									<label className="label-main" htmlFor="city">
										Город
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="dealer">6</label>
									<input
										onChange={(e) => handleChange(e, "dealer")}
										type="text"
										name="dealer"
										id="dealer"
										required
										disabled={
											seriesInput == "" ||
											talonInput == "" ||
											nameInput == "" ||
											phoneInput == "" ||
											cityInput == ""
										}
									/>
									<label className="label-main" htmlFor="dealer">
										Продавец/Диллер
									</label>
								</div>
							</div>
							{formStatus === "success" && (
								<span className="success">Успешно!</span>
							)}
							{formStatus === "error" && <span className="error">Ошибка!</span>}
							<button className="btn-submit" type="submit">
								АКТИВИРОВАТЬ ГАРАНТИЮ
							</button>
						</form>
					</div>
					<div className="heading__left">
						<div className="heading__main-info">
							<span className="form-heading">ИНФОРМАЦИЯ О ГАРАНТИИ</span>
							<div className="info__block">
								<span className="info__block-subtitle">
									Как активировать гарантию гарантию на приобретенную продукцию
									«Ssmart» ?
								</span>
								<ol className="info__block-list">
									<li className="block-list-item">
										Вам необходимо вписать в первое поле серийный номер
										устройства, который находится на боковой части коробки.
										Серийный номер состоит из 15 символов ( букв и цифр) пример
										SM552305A110223 после вам станут доступы остальные поля.
									</li>
									<li className="block-list-item">
										Вам необходимо вписать во второе поле номер гарантийного
										талона, который заполнил вам продавец при покупки устройства
										Ssmart. No гарантийного талона уникален у каждого продавца
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в третье поле имя ,фамилию , отчества
										человека на кого был оформлен гарантийный талон.
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в четвертое поле номер вашего
										телефона
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в пятое поле город в котором вы
										приобрели устройство «Ssmart».
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в шестое поле ИНН продавца у которого
										вы приобрели устройство «Ssmart»
									</li>
								</ol>
							</div>
						</div>
						<div className="heading__main-warning">
							<span className="warning-heading">ЭТО ВАЖНО</span>
							<div className="warning-box">
								Активацию гарантии должен осуществлять продавец!
							</div>
						</div>
					</div>
				</div>
				<Guidance />
			</section>
		</>
	);
}
