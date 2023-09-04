const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="front-normal normal-case"> Mateo</span> </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="front-normal normal-case"> Miguel</span> </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="front-normal normal-case"> llanten@gmail.com</span> </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="front-normal normal-case"> 13-12-2023</span> </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="front-normal normal-case"> Peste </span></p>
        </div>
    )
}

export default Paciente;