import { Comment } from "./comment";
export const CommentList=({comments})=>{
    return (
        <ul>
            {
                comments.map((comment,index)=>{
                    return(
                        <Comment comment={comment} key={index}/>
                    )
                })
            }
        </ul>
    )
}