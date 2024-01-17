import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';
	document.body.style.background = activeTheme === "dark" ? "#fff" : "#303030";

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
