import Paciente from "./components/Paciente";

const ListadoPacientes = ()=> {
    return (
<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
<h2 className="front-blank text-3x1 text-center">Listado pacientes</h2>
<p className="text-xl mt-5 mb-10 text-center">Admisitra tus <span className="text-indigo-600 front-bold"> Pacientes y citas </span></p>
<Paciente />
</div>


    )
}
export default ListadoPacientes;