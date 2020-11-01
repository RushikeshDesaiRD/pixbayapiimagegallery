import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesCard from "./ImagesCard.js";
function App() {
  const [images,setImages]=useState([])
  const [loading,setLoading]=useState(true)
  const [term, setTerm]=useState('')
  const [search,setSearch]=useState('')
  const onSubmit=()=>{

  }
  useEffect(() => {
     fetch(`https://pixabay.com/api/?key=17468276-4ae7eb715694c4092ad903c33&q=${term}&image_type=photo&pretty=true`)
 
      .then(res=> res.json())
      .then(data => {
            console.log(data.hits)
             console.log("data")
            setImages(data.hits);
         
      })
      .catch(err =>console.log(err))
    
  },[term])
  const onSubmitto = ()=>{
    setTerm(search)
  }
  //17468276-4ae7eb715694c4092ad903c33
  //"flowers"
  //(e)=>setTerm(e.target.value)
  return (
    <div className="container">
            <br/>
            <br/>
          <div className="col-md-6 shadow-lg p-5 mx-auto d-flex">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control"/>
              <button onClick={onSubmitto} className="btn btn-outline-primary">Search</button>
          </div>
           <br/>
            <br/>
          <ImagesCard images={images}/>
    </div>
     
  );
}

export default App;
