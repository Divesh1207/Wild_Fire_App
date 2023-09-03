import { useState, useEffect } from 'react';
import MapComponent from './Components/MapComponent';
import LoadingSpinner from './Components/LoadingSpinner';

  function App() {
    const [eventData, setEventData] = useState([])

    const [loading, setLoading] = useState(false)//We need a React state to access and 
    //update the loading state value dynamically so that the changes are reflected immediately on the screen. 
    //The default value of loading is false to hide the loading spinner initially.
      useEffect(() => {
      
       const fetchEvents = async () => {
        setLoading(true)
const res =await fetch ('https://eonet.gsfc.nasa.gov/api/v2.1/events')

      
         const { events } = await res.json()

         setEventData(events)//it set the data in function setEvendata
         setLoading(false)
       }
      

     fetchEvents()
   }, [])//[]-> whenever we reload our website it will move once at a time


  //   useEffect(() => {
  //     const fetchEvents = async () => {
  //         try {
  //             const res = await Promise.race([
  //                 fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events'),
  //                 new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), )) // Timeout after 10 seconds
  //             ]);
  
  //             if (!res.ok) {
  //                 throw new Error('Network response was not ok');
  //             }
  
  //             const { events } = await res.json();
  
  //             // Add a timestamp to each event before setting it in state
  //             const eventsWithTimestamp = events.map(event => ({
  //                 ...event,
  //                 timestamp: new Date().getTime(), // Add the current timestamp
  //             }));
  
  //             setEventData(eventsWithTimestamp);
  //             setLoading(false);
  //         } catch (error) {
  //             // Handle the error here, e.g., set an error state or display a message
  //             console.error('Error fetching data:', error);
  //             setLoading(false);
  //         }
  //     };
  
  //     fetchEvents();
  // }, []);
  




  return (
    //Thats why we use "useEffect" beacuse we want to render a loading sign image and []->this use for because we want only
    //at start
    <div>

      {!loading ? <MapComponent eventData={eventData} /> : <LoadingSpinner />}
    </div>











  );

}



export default App;


// import React from 'react';
// import MapComponent from './Components/MapComponent';

// function App() {
//     const center = [42.3265,-122.8756]; // Replace with your desired center coordinates
//     const zoom = 6;

//     return (
//         <div className="App">
//             {/* <h1>Leaflet Map Example</h1> */}
//             <MapComponent center={center} zoom={zoom} />
//         </div>
//     );
// }

// export default App;

