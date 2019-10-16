import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import url from '../config';



function Upload() {

  const[dataFile,setDataFile] = useState({})


  var handleChangeFile = (event) => {
    console.log("data file",event.target.files[0]);
    setDataFile(event.target.files[0])
  }

  var handleClickConfirm = (event) => {

    console.log("hello jai confirmer");

    const data = new FormData()
    data.append('file', dataFile)


    fetch(url+"upload", {
      method: 'post',
      body: data
    }).then(res => {
      console.log(res)
      return res.json()
    }).then(picture => {
      console.log("retour fetch upload",picture)

    }).catch(err => {
      console.log(err)
    })


  }


  return (

    <div>

        <input type="file" name="file" onChange={handleChangeFile}/>
        <button type="button" onClick={handleClickConfirm}>Upload</button>

    </div>


  );
}

export default Upload;
