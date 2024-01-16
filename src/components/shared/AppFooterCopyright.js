function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}&nbsp;
				 See how this site was created&nbsp;
				<b><a target="_blank" rel="noreferrer" href="https://crismatters.medium.com/creating-a-simple-cv-template-with-reactjs-fed81d5b1459"
						className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
					here
				</a></b>.
				<a
					href="https://crismatters.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Crismatters
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
