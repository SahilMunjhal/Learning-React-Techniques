import axios from "axios";
import {useState,useEffect} from "react";

const HOC=(WrappedComponent,entity)=> {
    
    const B= ()=>{
           const [data,setData]=useState([]);
           const [filteredData,setFilteredData]=useState([]);
           const [search,setSearch]=useState('');

          const handleSearch=(e)=>{
              setSearch(e.target.value);

              const filtered=data.filter((term)=>{
                 if(entity=="users"){
                  const {name}=term;
                    return name.indexOf(search)>=0;
                    
                 }

                 if(entity=="todos"){
                  const {title}=term;
                    return title.indexOf(search)>=0;
                    
                 }
              })

              setFilteredData(filtered);
          }
        
          useEffect(()=>{
              axios.get(`https://jsonplaceholder.typicode.com/${entity}`).then(({data})=>{
                setData(data);
              })
          },[]);
        
          return (
            <div>
                <h1>{entity}</h1>
                <input type="text" value={search} onChange={handleSearch}/>
                <WrappedComponent data={search.length?filteredData:data}></WrappedComponent>
            </div>
          )

    }
    
return B;
}

export default HOC