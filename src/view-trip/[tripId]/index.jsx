import { db } from '../../service/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function Viewtrip() {
    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(()=> {
        tripId&&getTripData();
},[tripId])

    const getTripData=async()=>{
        const docRef = doc(db, 'cities', tripId);
        const docSnap= await getDoc(docRef)
        if(docSnap.exists()){
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document!")
            toast('No such trip found!')

        }

    }
  
    return (
    
    
    <div>
      {/* Information Section */}

      {/* Recommended Hotels */}

      {/* Daily Plan */}

      {/* Footer */}
    </div>
  )
}

export default Viewtrip
