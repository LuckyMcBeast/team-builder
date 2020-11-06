import React from 'react';


export default function Form() {


    return (

        <div className="form">
            <form>
                <label htmlFor="name"> Name : </label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="Enter Member Name"
                    />
                <label htmlFor="email"> Email : </label>
                <input 
                    id="email"
                    type="text"
                    placeholder="Enter Member Email"
                     />
                <label htmlFor="role"> Role: </label>
                <select id="role" name="role">
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">UX Designer</option>
                    <option value="api_integ">API Integrations Engineer</option>
                </select>
            </form>
        </div>

    );
}