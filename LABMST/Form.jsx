import axios from "axios";
import { useState } from "react";
import './App.css'

function showSubmittedData(submittedData) {
  return (
    submittedData && (
      <div className="result">
        <h2>Submitted Data:</h2>
        <p><strong>Name:</strong> {submittedData.firstname}</p>
        <p><strong>Email:</strong> {submittedData.Email}</p>
      </div>
    )
  );
}

function Form(){
    var data={firstname:"", Email:""}
    const [inputdata, setdata]=useState(data)
    const [submittedData, setSubmittedData]=useState(null)

    function handleData(e){
        setdata({...inputdata,[e.target.name]: e.target.value})
    }
    function submitData(e){
        e.preventDefault();
        setSubmittedData(inputdata)
        axios.post("api",inputdata)
        .then((res)=>(console.log(res)));
    }

    return(
        <>
        <h1>INPUT FORM</h1>
        <div className="form">
        <form onSubmit={submitData} className="formmm">
        <label>NAME: </label>
        <input type="text" name="firstname" value={inputdata.firstname} onChange={handleData}></input>
        <label>EMAIL: </label>
        <input type="text" name="Email" value={inputdata.Email} onChange={handleData}></input>
        <br></br>
        <button type="submit">submit</button>
        </form>
        </div>
        {showSubmittedData(submittedData)}
        </>
    );
}

export default Form;