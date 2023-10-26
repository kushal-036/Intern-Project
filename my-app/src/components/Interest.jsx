import React, { useState } from "react";
import axios from 'axios';

function Interest(props) {

    const [query, setQuery] = useState({
        category: "",
        country: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setQuery((prevQuery) => {
            return {
                ...prevQuery,
                [name]: value,
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.onSearch(query);
        
        try {
          const response = await axios.post('http://localhost:8080/internData', query);
          console.log('Response from server:', response.data);  // res come from res.json(doc)
        } catch (error) {
          console.error('Error posting data:', error);
        }
        setQuery({
            category: "",
            country: ""
        });
        
      };


    return (
        <div className="inputform">
            <form method="post">

                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Category</label>
                    <select
                        class="form-select"
                        id="inputGroupSelect01"
                        onChange={handleChange}
                        name="category">
                        <option selected>Choose...</option>
                        <option value="general">general</option>
                        <option value="business">business</option>
                        <option value="entertainment">entertainment</option>
                        <option value="health">health</option>
                        <option value="science">science</option>
                        <option value="sports">sports</option>
                        <option value="technology">technology</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Country</label>
                    <select
                        class="form-select"
                        id="inputGroupSelect01"
                        onChange={handleChange}
                        name="country">
                        <option selected>Choose...</option>
                        <option value="us">USA</option>
                        <option value="in">India</option>
                    </select>
                </div>

                <button class="btn btn-primary" type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Interest;