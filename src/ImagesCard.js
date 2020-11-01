import React from 'react'

export default function ImagesCard({images}) {
    return (
           <div>
              <div className="row">
                 {
                    images.map(image =>{
               return (
             <div className="col-md-3 mb-1 mt-1">
                 <div className="card shadow-lg custom-card">
                
            <img className="img-fluid custom-card-img" src={image.webformatURL} />
            <h3>User:- <img className="user" src={image.userImageURL}/> <br/> {image.user}</h3>
             <h2>Views:-{image.views}</h2>
              <h6>Downloads:-{image.downloads}</h6>
              <h6>Likes:-{image.likes}</h6>
              
                 </div>
            </div>
            
                      )
          })
        }

            
       </div>

       </div>
    )
}
