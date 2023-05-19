import { useState } from 'react';
import '../../css/Modal.css';

function Modal({id, openInfo, author, title, content, date, deleteItem}){

    return(
    <div className='modal-cont' >
        <div id="myModal" className="modal" onClick={openInfo}></div>
            <div className="modal-content">
                <div className="header">
                    <p className="title-content">{title}</p>
                    <div className="close">
                        <p onClick={openInfo}>&times;</p>
                    </div>
                </div>
                <div className="bottom-header">
                    <p>{author}</p>
                    <p className='separator'>|</p>
                    <p>{date}</p>
                </div>
                <div className='news-body'>
                    <div className='news-holder'>
                        <p>{content}</p>
                    </div>
                <div className="modal-buttons">
                    <button className='publish-modal'>Publish</button>
                    <button className='delete-modal' onClick={() => deleteItem(id)}>Delete</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal