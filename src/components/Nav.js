import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libaryStatus, setLibaryStatus}) => {

    return (
        <nav>
            <h1>Waves.app</h1>
            <button onClick={() => setLibaryStatus(!libaryStatus)} >Libary
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;