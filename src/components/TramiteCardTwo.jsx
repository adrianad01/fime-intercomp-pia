
import { Link } from 'react-router-dom';
import '../styles/tramite-card.css';

export const TramiteCardTwo = () => {

    return (
        <div className='tramite-card'>
        
            <h4>Título Nivel Doctorado</h4>
            <p>Estatus: En Curso</p>
            <p>Fecha asignada:</p>
            <p className='assigned-date'>20/04/2024</p>

            <Link to='/tramite-doctorado' style={{ textDecoration: 'none' }}>
                <button className='view-button'>
                    Ver
                </button>
            </Link>
        
        </div>
    )

};