import React from 'react';
import '../Css/Modal.css';
import Search from './Search';

const Modal=({ open, onClose })=> {
    if (!open) return null

    return (
        <>
        <Search>WDADW</Search>

        <div className='modal-overlay'>
            <div className='modal-container'>
                <button onClick={onClose} class="close-btn">&times;</button>
            </div>
        </div>


        </>
    )
}

export default Modal;