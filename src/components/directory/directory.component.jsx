import React from 'react';

import MenuItemComponent from '../menu-items/menu-item.component';
import {useSelector} from 'react-redux';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import './directory.style.scss';

const DirectoryComponent = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionProps}) => (
                        <MenuItemComponent key={id} {...otherSectionProps}/>
                    )
                )
            }
        </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//     sections: selectDirectorySections
//
// })

export default DirectoryComponent;