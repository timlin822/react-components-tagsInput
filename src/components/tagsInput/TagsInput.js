import {FaTimes} from 'react-icons/fa';

import Error from 'components/message/Error';

import './TagsInput.css';

const TagsInput=({error,setError,tags,changeHandler,inputHandler,removeHandler})=>{
    return (
        <div className="input-group">
            {error && <Error error={error} setError={setError} />}
            <label htmlFor="tags">標籤:</label>
            <div className="tags-input">
                {tags.map((tag,index)=>(
                    <div key={index} className="tag"><span className="tag-title">{tag}</span><span className="tag-close" onClick={()=>removeHandler(index)}><FaTimes /></span></div>
                ))}
                <input type="text" className="input" id="tags" name="tags" placeholder="請輸入標籤" autoComplete="off" onChange={changeHandler} onKeyUp={(e)=>e.key==="Enter"?inputHandler(e):null} />
            </div>
        </div>
    );
}

export default TagsInput;