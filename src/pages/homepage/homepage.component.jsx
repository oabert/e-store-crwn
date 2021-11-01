import React from 'react';
import DirectoryComponent from "../../components/directory/directory.component";
import './homepage.style.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <DirectoryComponent/>
        </div>
    );
};

export default Homepage;