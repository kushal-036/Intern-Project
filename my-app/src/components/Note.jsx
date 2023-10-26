import React from "react";

function Note(props) {
    return (
        <div class="card">
            <img src={props.urltoimage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
                <a href={props.url} class="short-btn btn btn-primary">check it out</a>
            </div>

        </div>
    );
}

export default Note;
