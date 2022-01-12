import React from 'react';

import MenuItemComponent from '../menu-items/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import './directory.style.scss';

const DirectoryComponent = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                    <MenuItemComponent key={id} {...otherSectionProps}/>
                )
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections

})

    export default connect(mapStateToProps)(DirectoryComponent);