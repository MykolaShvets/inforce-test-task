import React, { FC, ReactElement } from 'react';

import './Modal.css';

const Modal: FC<{ children: ReactElement, active: boolean, setActive: any }> = ({ children, active, setActive }) => {
    return (
        <div className={ active ? 'modal active' : 'modal' } onClick={() => setActive(false)}>
            <div className="modal__body" onClick={ e => e.stopPropagation() }>
                { children }
            </div>
        </div>
    );
};

export { Modal };
