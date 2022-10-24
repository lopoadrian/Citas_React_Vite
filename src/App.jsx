import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import Paciente from "./components/Paciente"


function App() {

  const[pacientes, setPacientes] = useState([]);
  const[paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPacientes(pacientesActualizados)
  }

  useEffect(() => {// El operador ?? devuelve el la expresion del lado derecho cuando la expresion izquierda es null o undefined. Caso contrario devuelve el izquierdo de una
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }
   
    obtenerLS()
    
  }, [])

  useEffect( () => {// Cuando hay un cambio en pacientes, lo registra en el localStorage como un string
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

 return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} /*Es el prop */ 
          paciente={paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
        />
      </div>
    </div>
  
  )
}

export default App
