import { useState } from "react";
export const CommentInput = ({
    handleSubmit,
    buttonref
}) =>{
    const [commentInput, setCommentInput] =useState("");
    const handleChange=(e) =>{
        setCommentInput(e.target.value);
    }
    return (
       <section className="comment-input">
        <input
        type="text"
        placeholder="Enter your comment"
        value={commentInput}
        onChange={handleChange}
        />
        <button
        onClick={()=>{
            handleSubmit(commentInput);
            setCommentInput("");
        }}
        ref={buttonref}
        >
            Submit
        </button>
       </section> 
    )
}