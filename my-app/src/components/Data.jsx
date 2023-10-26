import React, { useState } from "react";
import axios from 'axios';

function Data(props){

    const [mydata, setMydata] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.get('http://localhost:8080/internData');
          console.log('Response from server:', response.data);   // res come from res.json(docs)
          setMydata(response.data);
          console.log("mera data ye hai : " , mydata);
          props.onAction(mydata);
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };

    return (
        <div>
            <button class="btn data-btn btn-primary" type="submit" onClick={handleSubmit}>Get stored data till now</button>
        </div>
    );
}

export default Data;