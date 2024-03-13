import { MdDelete } from "react-icons/md";
import { doDelete } from "../actions/reqActions";

export default function RevmoveCompo(params){
    const id = params.id;
    const removehandler = async() => {
        try{
            const res = confirm('are Your really want to delete this component ?');
            if(res){
                await doDelete(`/topicroute/${id}`);
            }
        }
        catch(error){
            console.log("comonent can't remvove")
        }
    }
    return(
        <MdDelete size={23} color='red' className="inneri" onClick={removehandler}/>
    )
}