import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_PRODUCT_ACTION } from "../../store/productsReducer";
import "../../styles/css/Admin/style.css"


export default function Admin() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSuppr = () => {
        dispatch({
            type: DELETE_PRODUCT_ACTION,
            payload: {
              id: parseInt(id),
            },
        });
        navigate('/');
    }

    return(
        <div className="admin-buttons">
            <button className="suppr" onClick={handleSuppr}>Delete</button>
            <button className="update" onClick={() => {navigate(`update_product`)}} style={{cursor: "pointer"}}>Update</button>
        </div>
    )
}