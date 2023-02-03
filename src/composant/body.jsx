import '../App.css';

export default function body() {


     var  produit = [
        {titre: 'QUI EST L4IMPOSTEUR ? ' , name: 'SQUEEZIE' , vu: '16 M vues' , temps : 'il y a 7 mois',image:'https://i.ytimg.com/vi/QrqVKAPHZjM/maxresdefault.jpg' },
        {titre: 'ON REACT LES JUGEMENTS LES PLUS FOUS', name:'Aminematue VOD' , vu: '793 k vues' , temps : 'il y a 2 semaine', image:'https://i.ytimg.com/vi/KQelC5181tg/maxresdefault.jpg' },
        {titre : 'VOUS FINIRIEZ AVEC LE SOURIRE !', name : 'JOYCA' , vu : ' 2.2 M de vues ', temps : 'il y a 4 jours' , image :  'https://i.ytimg.com/vi/cqNnglMXFvQ/maxresdefault.jpg'
        }
     ]

     return (
        <div className="app">
            {produit.map(produit => {
                return (
                    <div className="fit">
                        <img src={produit.image} alt/>
                        <h4>{produit.titre}</h4>
                        <span>{produit.name}</span>
                        <h6>{produit.vu}</h6>
                        <h6>{produit.temps}</h6>
                        
                    </div>
                )
            })} 
            
            </div>
        
     );

        }
    