const initialState = {
    nombre: '',
    apellido: '',
    programa: '',
    semestre: '',
    cedula: '',
    informacion: '',

    //Modificar Campos
    newnombre:'',
    newapellido:'',
    newprograma: '',
    newsemestre: '',
    newcedula: '',
    newinformacion: '',
  };
  
  const Inputs = (state = initialState, action) => {
    switch (action.type) {
      case `SET_${action.type.split("_")[1]}`:
        return {
          ...state,
          [action.payload.varName]: action.payload.value
        };
      default:
        return state;
    }
  }
  export default Inputs;