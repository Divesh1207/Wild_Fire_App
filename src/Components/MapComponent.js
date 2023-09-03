import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker';
import LocationInfoBox from './LocationInfoBox';
  


const MapComponent=({eventData, center, zoom  })=> {
   const[LocationInfo,setLocationInfo]=useState(null)  
const markers=eventData.map(ev=>{
    if(ev.categories[0].id==8)
    {
        return  <Locationmarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({id:ev.id,title:ev.title})}/>
    }
    return null
})

    return (
        <div className="map">
            
            <GoogleMapReact
            
                bootstrapURLKeys={{ key:'Use You Google Map Api KEY' }}
                defaultCenter={center}
                defaultZoom={zoom}
                 >
               {markers}
                
            </GoogleMapReact>
            {LocationInfo&& <LocationInfoBox info={LocationInfo}/>}
           
        </div>
       // this pop-up a box for every location and display a message
        
    );
}

    MapComponent.defaultProps = {
        center: {
            lat: 42.3265,
            lng: -122.8756
        },
        zoom: 6
    }
    
     export default MapComponent
    














