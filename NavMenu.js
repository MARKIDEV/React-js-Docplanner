import React from 'react';

const NavMenu = (props) => {
    return (
        <ul className="nav">
            {props.tab.map(el => <a href="#"><li className="nav-li"> {el.name}
                {!el.submenu ?
                    null :

                    <ul className="dropdown-list">
                        {el.submenu.map(el => <a href="#"><li className=" nav-li"> {el}</li></a>)}
                    </ul>}

                    </li></a>)}
        </ul>
    )
}
export default NavMenu 
