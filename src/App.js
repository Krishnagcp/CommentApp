
import './App.css';
import { CommentInput } from './Components/comment-input';
import { CommentList } from './Components/comment-list';
import { useState, useEffect, useRef} from 'react';

function App() {
  const [comments,setComments]=useState([]);
  const buttonref =useRef();
  useEffect(()=>{
    if(comments.length===3){
      setTimeout(()=>{
        alert("You have reached maximum comment limit...");
      buttonref.current.disabled=true;
      },100);
      
    }
  },[comments]);

  const addComments =(comment) =>{
    setComments([...comments,comment]);
  }
  return (
    <div className="App">
    
      <CommentInput handleSubmit={addComments} buttonref=
      {buttonref}/>
      <CommentList comments={comments}/>
    </div>
  );
}

export default App;
