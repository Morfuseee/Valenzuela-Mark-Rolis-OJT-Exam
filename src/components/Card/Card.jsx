import { useState } from "react";
import Modal from "../Modal/Modal";

function Card({id, author, title, content, date, handleCheckboxChange, checkboxStates, deleteItem}){
    //Responsible for modal's visibility
    const [open, setOpen] = useState(false);
    
    //Sets the visibility of the modal
    function openInfo(){
        setOpen(!open);
    }

    return(
    <>
        {open ? <Modal id = {id} openInfo={openInfo} author = {author} title = {title} content = {content} date = {date} deleteItem = {deleteItem}/> : null}
        <div className="cards">
          <div className="left-part">
            <div className="left-part-content">
                <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"></path>
                    <path fillRule="evenodd" d="M18.5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"></path>
                </svg>
                <input id={id} type="checkbox" checked={checkboxStates[id] || false} onChange={() => handleCheckboxChange(id)}/>
              </div> 
          </div>
          <div className="card-content">
            <div className="top-part">
              <p className="title">{title}</p>
            </div>
            <div className="middle-part">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25ZM9.646 7.726c.594-.63 1.43-.976 2.354-.976.924 0 1.753.349 2.349.982.604.64.898 1.502.829 2.429C15.038 12 13.614 13.5 12 13.5c-1.614 0-3.042-1.5-3.178-3.34-.069-.934.225-1.798.824-2.434ZM12 20.25a8.227 8.227 0 0 1-5.906-2.495c.44-.626 1-1.16 1.647-1.567C8.936 15.422 10.448 15 12 15c1.552 0 3.064.422 4.258 1.188a5.76 5.76 0 0 1 1.648 1.567A8.223 8.223 0 0 1 12 20.25Z"></path>
              </svg>
              <p className="name">{author}</p>
              <div className="calender"></div>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 21.375A1.125 1.125 0 0 0 2.625 22.5h18.75a1.125 1.125 0 0 0 1.125-1.125V8.25h-21v13.125Zm15-11.438a.188.188 0 0 1 .188-.187h1.875a.188.188 0 0 1 .187.188v1.874a.188.188 0 0 1-.188.188h-1.875a.188.188 0 0 1-.187-.188V9.938Zm0 3.75a.188.188 0 0 1 .188-.187h1.875a.188.188 0 0 1 .187.188v1.874a.188.188 0 0 1-.188.188h-1.875a.188.188 0 0 1-.187-.188v-1.874Zm-3.75-3.75a.188.188 0 0 1 .188-.187h1.874a.188.188 0 0 1 .188.188v1.874a.188.188 0 0 1-.188.188h-1.874a.188.188 0 0 1-.188-.188V9.938Zm0 3.75a.188.188 0 0 1 .188-.187h1.874a.188.188 0 0 1 .188.188v1.874a.188.188 0 0 1-.188.188h-1.874a.188.188 0 0 1-.188-.188v-1.874Zm0 3.75a.188.188 0 0 1 .188-.187h1.874a.188.188 0 0 1 .188.188v1.875a.188.188 0 0 1-.188.187h-1.874a.188.188 0 0 1-.188-.188v-1.875ZM9 13.688a.188.188 0 0 1 .188-.187h1.874a.188.188 0 0 1 .188.188v1.874a.188.188 0 0 1-.188.188H9.188A.188.188 0 0 1 9 15.562v-1.874Zm0 3.75a.188.188 0 0 1 .188-.187h1.874a.188.188 0 0 1 .188.188v1.875a.188.188 0 0 1-.188.187H9.188A.188.188 0 0 1 9 19.312v-1.875Zm-3.75-3.75a.188.188 0 0 1 .188-.187h1.875a.188.188 0 0 1 .187.188v1.874a.188.188 0 0 1-.188.188H5.438a.188.188 0 0 1-.187-.188v-1.874Zm0 3.75a.188.188 0 0 1 .188-.187h1.875a.188.188 0 0 1 .187.188v1.875a.188.188 0 0 1-.188.187H5.438a.188.188 0 0 1-.187-.188v-1.875Z"></path>
                  <path d="M21.375 3h-2.621V1.5h-2.25V3H7.496V1.5h-2.25V3H2.625A1.116 1.116 0 0 0 1.5 4.114V6.75h21V4.114A1.117 1.117 0 0 0 21.375 3Z"></path>
                </svg>
                <p className="date">{date}</p>
            </div>
            <div className="bottom-part">
              <p className="message">{content}</p>
              <div className="read-button" onClick={openInfo}>
                <svg className="eye" width="17" height="17" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.82 9-5.391 0-9.877-3.88-10.818-9C2.12 6.88 6.608 3 12 3Zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19Zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                </svg>
                <p className="read">Read Full</p>
              </div>
            </div>
          </div>
          <div className="hashtags">
            <button> #Sports</button>
            <button> #Worldwide </button>
            <button> #Local </button>
          </div>
        </div>
    </>
    )
}

export default Card