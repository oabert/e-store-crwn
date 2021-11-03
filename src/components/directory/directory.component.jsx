import React from 'react';
import MenuItemComponent from "../menu-items/menu-item.component";
import './directory.style.scss';
import sections from "./directory.data";

class DirectoryComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                            <MenuItemComponent key={id} {...otherSectionProps}/>
                        )
                    )
                }
            </div>
        )
    }
};

export default DirectoryComponent;