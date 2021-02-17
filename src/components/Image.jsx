import React from 'react'


//Son 2 tipos de componentes: 1. class component y 2. Function component
//This is a function component, that's why we only need to use "import React from 'react' without using {Component}"

const Image = (props)=>{

    //destructuring const
    const {largeImageURL,likes, previewURL,tags,views}= props.image;
    //this is going to extract the required values like views, largeImageURL, etc

    return(

        <div className="col-12 col.sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="card">

        <img src={previewURL} alt={tags} className="card-img-top "/>

        <div className="card-body">
        <p className="card-text">{likes} I 💗  it  </p>
        <p className="card-text">{views} Views 👀  </p>
        <a onClick="URL" href={largeImageURL} className="btn btn-primary btn-block">I want this! </a>
        </div>

            </div>


        </div>
    )
}
export default Image