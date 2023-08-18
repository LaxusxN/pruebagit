import React from 'react';

export default function Home() {
  return (
    <body className='flex'>
      <h1 className='titulos'>LOGIN DE LEVEL STUDIO</h1>
      <div className="login_box">
      <form>
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            className="login-input"
            type="text"
            placeholder="Usuario"
            required
          />
          <label htmlFor="contraseña">Contraseña</label>
          <input
            id="contraseña"
            className="login-input"
            type="password"
            placeholder="Contraseña"
            required
          />
          <div className='flex'>
            <label>Genero </label>
              <select>
                <option value ="hombre"> hombre</option>
                <option value ="mujer">mujer</option>
              </select>
          </div>
          <div className='flex'>
            <button className="login-button" type="submit">
              Iniciar sesión
            </button>
          </div>
          <a href='#'> forget password </a>
      </form>
      </div>
     
    </body>
  );
}
