import { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // Importar jsPDF
import { useNavigate } from "react-router-dom"; // Importar useNavigate para la navegación
import "../styles/payment-form.css"

const PaymentForm = () => {
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [conceptoPago, setConceptoPago] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [monto, setMonto] = useState("");

  const navigate = useNavigate(); // Usar el hook useNavigate

  // Función para manejar los cambios en el concepto de pago y autocompletar el monto
  useEffect(() => {
    if (conceptoPago === "Pago de Fotografías") {
      setMonto("$250.00");
    } else if (
      conceptoPago === "Pago de título nivel licenciatura" ||
      conceptoPago === "Pago de título nivel doctorado" ||
      conceptoPago === "Pago de título nivel programa técnico"
    ) {
      setMonto("$1,866.00");
    } else {
      setMonto("");
    }
  }, [conceptoPago]);

  // Función para generar la boleta en PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar título
    doc.setFontSize(24);
    doc.text("Universidad Autónoma de Nuevo León", 105, 20, { align: "center" });
    doc.setFontSize(20);
    doc.text("Boleta de Pago", 105, 35, { align: "center" });

    // Agregar detalles del pago
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 50);
    doc.text(`Matrícula: ${matricula}`, 20, 60);
    doc.text(`Concepto de Pago: ${conceptoPago}`, 20, 70);
    doc.text(`Método de Pago: ${metodoPago}`, 20, 80);
    doc.text(`Monto: ${monto}`, 20, 90);

    // Guardar PDF
    doc.save("boleta_pago.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(); // Generar el PDF al enviar el formulario
  };

  // Función para manejar el botón de salir
  const handleExit = () => {
    navigate("/mis-tramites"); // Redirigir a la página /mis-tramites
  };

  return (
    <div className="payment-form-container">
      <h1>Formulario de Pago</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="conceptoPago">Concepto de Pago:</label>
          <select
            id="conceptoPago"
            value={conceptoPago}
            onChange={(e) => setConceptoPago(e.target.value)}
            required
          >
            <option value="">Selecciona un concepto</option>
            <option value="Pago de Fotografías">Pago de fotografías</option>
            <option value="Pago de título nivel licenciatura">Pago de título nivel licenciatura</option>
            <option value="Pago de título nivel doctorado">Pago de título nivel doctorado</option>
            <option value="Pago de título nivel programa técnico">Pago de título nivel programa técnico</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="metodoPago">Método de Pago:</label>
          <select
            id="metodoPago"
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            required
          >
            <option value="">Selecciona un método</option>
            <option value="Tarjeta Bancaria">Tarjeta bancaria</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Cheque">Cheque</option>
            <option value="Paypal">PayPal</option>
          </select>
        </div>

        

        <div className="form-group">
          <label htmlFor="monto">Monto:</label>
          <input
            type="text"
            id="monto"
            value={monto}
            readOnly
            disabled
          />
        </div>

        <button type="submit" className="btn-submit">Generar Boleta</button>
      </form>

      {/* Botón para salir */}
      <button onClick={handleExit} className="btn-exit">Salir</button>
    </div>
  );
};

export default PaymentForm;