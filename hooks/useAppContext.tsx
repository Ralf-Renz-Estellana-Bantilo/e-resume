import { AppContext } from '@/context/appContext';
import { useContext } from 'react';

const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw Error('Context should have value');
    }

    return context;
};

export default useAppContext;
