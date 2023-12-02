import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("ru");

	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider, LanguageContext };
