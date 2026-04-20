import { useParams } from "react-router-dom";

export default function EditProductPage () {
    const { id } = useParams();


    return (
        <div>
            Editar produto {id}
        </div>
    );
}
