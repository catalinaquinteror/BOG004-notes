//Aqui voy a hacer la vista de logout, debe estar en el ruteo de App,
//deberia tener un componente button off?

import { ButtonLogin } from "components/ButtonLogin";



export const Logout = () => {
  return(
      <div>
          <h1>LabNotes</h1>
          <p>Are you sure you want to logout?</p>
          <ButtonLogin />
{/* este texto puede ser un componente editado en props lo mismo que el boton?, boton confirmar y cancelar*/}
      </div>
  )
};