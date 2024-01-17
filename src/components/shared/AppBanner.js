//import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Data from '../../data/Data';
import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'

const AppBanner = () => {
	//const [activeTheme] = useThemeSwitcher();
	const termLines = [
		{ text: "whoami", cmd:true },
		{ text: "uid=1000(crismatters) Hello, I am Cristóbal", cmd:false },
		{ text: "Systems Engineer", cmd:false },
		{ text: "Web Design Enthusiast", cmd:false },
		{ text: "Cloud Security Specialist", cmd:false },
	]
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					{Data.salutation.title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						target='blank'
						href="https://docs.google.com/document/d/e/2PACX-1vScdM97wyU2B1Y55MDyPrtWeWiIqdj2SWvbOQM8Fo3wzyJkzGyP89LclsClYyqw6Zo9E6J_a9zZzfZq/pub"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg text-gray-400 hover:text-primary-dark dark:hover:text-white cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
						aria-label="Read Resume"
					>
						<FiFileText className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiFileText>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Read CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<Terminal
					lines={termLines}
					interval={600}
					delay={{start: 1200, characters: 90, lines: 1000}} 
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
