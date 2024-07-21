import {useState, useEffect} from 'react';

const useScreenWidth = () => {
	let innerWidth = 0;
	try {
		innerWidth = window.innerWidth;
		console.log('1');
	} catch (_) {
		console.log('2');
	}
	const [screenWidth, setScreenWidth] = useState(innerWidth);

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

	return screenWidth;
};

export default useScreenWidth;
