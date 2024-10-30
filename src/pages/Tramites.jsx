import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TramiteCard } from "../components/TramiteCard";
import { TramiteCardTwo } from "../components/TramiteCardTwo";
import { TramiteCardThree } from "../components/TramiteCardThree";

export const Tramites = () => {

    return (
        <>
            <Navbar />

                <Link to='/'>
                    <button className="btn-return" style={{ marginLeft: '120px', marginTop: '20px' }}>
                        Regresar
                    </button>
                </Link>
                
                <h2 className="tramites-title">Mis Trámites</h2>

                <div className="tramites-container">

                    <TramiteCard />
                    <TramiteCardTwo />
                    <TramiteCardThree />

                </div>
        </>
    );

};