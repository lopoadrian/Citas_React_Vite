import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente}) =>{

    
      

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >
        {/*con un Ternario evaluo, si hay paciente muestro un mensaje, si no muestro otro*/ } 
            {pacientes && pacientes.length ?  (
                <>
                    <h2 className="font-black text-3xl text-center ">Listados Paciente</h2> 
                    <p className="text-center mt-5 mb-10 text-xl">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    { pacientes.map( paciente => // Cuando se usa Map hay que asignar una Key unico a cada variable creado 
                        (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                            
                            
                        )
                        
                    )}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center ">No hay pacientes</h2> 
                    <p className="text-center mt-5 mb-10 text-xl">
                        Comienza agregando pacientes {' '}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
                ) 
            }
           
            
            

        </div>
    )
}

export default ListadoPaciente;