import {useState,useEffect} from 'react';

import TagsInput from 'components/tagsInput/TagsInput';

import './App.css';

function App() {
  const [tags,setTags]=useState([]);
  const [error,setError]=useState("");

  useEffect(()=>{
    setError("");
  },[]);

  const changeHandler=()=>{
    setError("");
  };

  const inputHandler=(e)=>{
    if(e.target.value===""){
      return setError("請填寫標籤");
    }
    else if(tags.find(tag=>(tag.toLowerCase()===e.target.value.toLowerCase()))){
      return setError("標籤已存在");
    }
    else{
      setTags([...tags,e.target.value]);
      e.target.value="";
    }
  };

  const removeHandler=(i)=>{
      setTags(tags.filter((_,index)=>(index!==i)));
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <TagsInput error={error} setError={setError} tags={tags} changeHandler={changeHandler} inputHandler={inputHandler} removeHandler={removeHandler} />
      </div>
    </section>
  );
}

export default App;