import {useState, useEffect} from 'react';

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const SM = 576;
	const MD = 768;
	const LG = 992;
	const XL = 1200;
	const XXL = 1400;

	return screenWidth;
};

export default useScreenWidth;
