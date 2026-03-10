import React from 'react';
import Navigation from '../Navigation';

const DesktopContents = () => {
    return (
        <main
            id="main-content"
            className="flex-[5] h-screen overflow-y-auto pb-0 md-breakpoint:hidden"
        >
            <Navigation />
        </main>
    );
};

export default DesktopContents;
