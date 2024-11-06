import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { PrinterLogo } from "../components/PrinterLogo";
import '../styles/tramite-page.css';

export const TramitePage2 = () => {

    return (
        <>
            <Navbar />

            <Link to='/mis-tramites' style={{ textDecoration: 'none', color: 'white' }}>
                <button className="btn-return" style={{ marginLeft: '120px', marginTop: '20px' }}>
                    Regresar
                </button>
            </Link>

            <p className="procedure-title">Certificado Nivel Doctorado</p>

            <div className="steps">

                <div className="step-1">
                    <p className="step-title">Paso 1 - Realizar los pagos correspondientes</p>
                    <div className="payment" style={{ marginBottom: '30px' }}>

                        <p className="payment-title">Expedición del Título Nivel Licenciatura</p>
                        <p className="payment-amount">Total $1,886</p>
                        <p className="payment-title">Fotografías digitales para el Título</p>
                        <p className="payment-amount">Total $250</p>
                        <Link to="/payment">
                            <button className="btn-payment" style={{ textDecoration: 'none' }}>
                                <span className="btn-title">
                                    Ir a formulario de pago
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="step-2">

                    <p className="step-title">Paso 2 - Ir a la cita</p>
                    <p>Fecha asignada: 25/10/2024</p>

                    <p style={{ width: '80%', fontSize: '18px' }}>Llevar la siguiente papelería en original y un juego de copias:</p>

                    <ul style={{ fontSize: '18px' }}>
                        <li>
                            <a href="https://www.gob.mx/ActaNacimiento/" target="_blank">
                                Acta de Nacimiento
                            </a>
                        </li>
                        <li>
                            <a href="https://www.gob.mx/curp/">
                                CURP
                            </a>
                        </li>
                        <li>KARDEX</li>
                        <li>
                            <a href="https://www.gob.mx/tramites/ficha/certificado-de-estudios-de-educacion-primaria-o-secundaria/Entidades7286">
                                Certificado de Secundaria
                            </a>
                        </li>
                        <li>Certificado de Preparatoria</li>
                        <li>Carta Consentimiento</li>
                        <li>Hoja de Solicitud</li>
                    </ul>

                    <div style={{ display: 'flex' }}>

                        <a href="/documents/carta_de_consentimiento.pdf" download="cartaConsentimiento.pdf">
                            <button className="btn-payment" style={{ width: '190px', marginRight: '10px' }}>

                                <PrinterLogo />

                                <span className="btn-title">
                                    Carta Consentimiento
                                </span>

                            </button>
                        </a>

                        <a href="/documents/solicitud_titulo_UANL.pdf" download="hojaSolicitud.pdf">

                            <button className="btn-payment">
                                <PrinterLogo />

                                <span className="btn-title">
                                    Hoja de Solicitud
                                </span>
                            </button>
                        </a>

                    </div>

                </div>

            </div>

        </>
    );

};