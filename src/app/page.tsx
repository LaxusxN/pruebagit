import React from 'react';

export default function Home() {
  return (
    <body>
      <div className='flex'>
          <h1 className='titulo'>LOGIN DE LEVEL STUDIO</h1>
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
                <label>Genero</label>
                <select>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
              <div className='flex'>
                <button className="login-button" type="submit">
                 olvide mi contraseña
                </button>
                <a href='#'>Iniciar sesion</a>
              </div>
            </form>
          </div>
      </div>
    </body>
  );
}