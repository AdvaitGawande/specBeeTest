import React from 'react';
function Card(props){
    return(<>

        <a href="">
            <div class="card text-dark" cssStyle="width: 200px; display: inline-block">
                <img class="card-img-top" src="https://www.dumpaday.com/wp-content/uploads/2018/09/photos-21-3.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Wrapped with a tag</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </a>    
    </>);
}
export default Card;