import 'react-toastify/dist/ReactToastify.css';
import LeftContainer from './components/LeftContainer';
import ResponsiveContents from './components/ResponsiveContents';
import RightContainer from './components/RightContainer';

const HomePage = () => {
    return (
        <>
            <LeftContainer className="flex-[2] md-breakpoint:flex-none" />

            <ResponsiveContents />

            <RightContainer className="flex-[2] md-breakpoint:flex-none" />
        </>
    );
};

export default HomePage;
