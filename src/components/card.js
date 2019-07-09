import React from 'react';

const Card = props =>{

    const male_photo = 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png'
    const female_photo = 'https://www.grupoconduzir.com.br/wp-content/uploads/2017/10/avatar-pessoa-mulher.png'
    var photo = (props.photo_url && props.photo_url != "undefined")? props.photo_url : props.gender_male? male_photo : female_photo

    return(
        <div className="card" id="b-card">
            <img className="card-img-top" src={photo} alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{props.full_name}</h4>
                <a onClick={() => props.changeUser(props)} className="btn btn-primary">Ver carteirinha</a>
            </div>
        </div>    
    )

    

}

export default Card;