import React, { useState } from "react";

const PhoneNumberInput = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isValid, setIsValid] = useState(false);

	const handlePhoneNumberChange = (e) => {
		const inputValue = e.target.value;
		setPhoneNumber(inputValue);

		const regex = /^\+9989-\(\d{2}\)-\d{3}-\d{2}-\d{2}$/;
		const isValidPhoneNumber = regex.test(inputValue);
		setIsValid(isValidPhoneNumber);
	};

	return (
		<div>
			<label>Phone Number: </label>
			<input
				type="text"
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
			/>
			{isValid ? (
				<span style={{ color: "green" }}>Valid phone number</span>
			) : (
				<span style={{ color: "red" }}>Invalid phone number</span>
			)}
		</div>
	);
};

export default PhoneNumberInput;
