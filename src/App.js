import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Seacher from './components/Seacher';
import Pagination from './components/Pagination';
import qs from 'qs'

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [musics, setMusics] = useState()
  const [offset, setOffset] = useState(0)
  const LIMIT = 12
  

  useEffect(()=>{

    const url = `/search?q=${text}%2Ftop&limit=${LIMIT}&index=${offset}`
    getApi(url).then(res => {
      setMusics(res)})
    
  }, [text, offset])


  const getApi = async (url) =>{
    const res = await axios.get(url)
    return res
  }

  return (
    <div className="App">
      <header>Music</header>
      <div>
        <Seacher  value={text} onChange={(seach)=> setText(seach)}/>
        
      </div>


      {musics &&(
        <ul className='grid'>
          {musics.data.data.map((item, index)=>(
            <li key={index}>
              <img src={item.album.cover_medium}/>
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      )}

      {musics && (
      
              <Pagination limit={LIMIT} total={musics.data.total} offset={offset} setOffset={setOffset} />

      )}
      
    </div>
  );
}

export default App;
