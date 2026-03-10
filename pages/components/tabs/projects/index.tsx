import 'swiper/css';
import 'swiper/css/pagination';
import Projects from './components/Projects';
import Services from './components/Services';
import Certifications from './components/Certifications';

const ProjectsTab = () => {
    return (
        <div className="flex flex-col gap-6">
            <Services />
            <Projects />
            <Certifications />
        </div>
    );
};

export default ProjectsTab;
