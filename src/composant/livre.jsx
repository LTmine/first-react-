import React from 'react'

export default function livre() {
    
var livre = [
       {titre :'one piece' , auteur:'Eiichirō Oda' , image:'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'} ,
       {titre :'dbz' , auteur:'Akira Toriyama' , image:'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg'} ,
       {titre : 'bleach' , auteur: 'Tite Kubo' , image:'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'}
    ]
  return (
    
    <div className='bd'>
 {livre.map(livre => {
        return (
            <div className="fit">
                        <img src={livre.image} alt=""/>
                        <h4>{livre.titre}</h4>
                        <span>{livre.auteur}</span>
                        
                        
                    </div>
                
        )

    })
}
    </div>
  )
  
}
