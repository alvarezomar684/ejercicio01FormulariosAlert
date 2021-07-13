import './App.css';
import {useForm} from 'react-hook-form'

function App() {

  const {handleSubmit, register} = useForm() //todas las que estan en {} son funciones 

  // const values = watch ()
  // console.log(watch) //observa el formulario al presenciar cambios
  

  const callback = (FormValues) => {  //para formularios bien sin fallas
    
    // alert(FormValues.JSON.stringify())
    // console.log(FormValues)
    // console.log(JSON.stringify(FormValues))
    alert(JSON.stringify(FormValues))
  }

  // const callbackParaFormularioInvalido = errores => { //para formularios con fallas para avisarle al usuario redaccion 
  //   console.log(errores)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(callback)} > {/* dentro de handleSubmit se mete a donde queremos mandar la info */}
        <div>
            <label>
              Nombre:
              <input type="text" {...register("name")}  />
            </label>
          </div>
          <div>
            <label>
              Apellido:
              <input type="text" {...register("lastName")}  />
            </label>
          </div>
          <div>
            <label>
              Edad:
              <input type="number" {...register("age")}  />
            </label>
          </div>          
          <div>
            <label>
              Email:
              <input type="email" {...register("email")} />  {/* ... operador spread le decie creame un nuevo elemento pero en ese nuevo meteme en orden los valores anteriores, register devuelve un objeto  */}
            </label>
          </div>
          <div>
            <label>
              Pais:
              <input type="text" {...register("country")}  />
            </label>
          </div>

          <button type="submit" > Mandar datos a un servidor </button> {/* dispara el evento submit */}
        </form>
      </header>
    </div>
  );
}

export default App;
