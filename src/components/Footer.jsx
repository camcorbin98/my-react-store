import { useContext } from 'react';

import globalContext from '../state/globalContext';


function Footer() {

    const userData = useContext(globalContext).user;
    return (
        <footer className='p-3 mb-2 bg-inverse fg-contrast'>
            2026 My React Store {userData.name}, Cohort# {userData.id}
            
            
        </footer>
    );
}

export default Footer;
