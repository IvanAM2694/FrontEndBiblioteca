import { useEffect, useState } from 'react';
import { registrarPrestamo } from './services/services';

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    IdUsuario: '',
    IdLibro: ''
  });

  useEffect(() => {
    fetch('https://localhost:44368/api/usuarios/listarUsuarios')  // Reemplaza con tu endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error al obtener usuarios:', error));
  }, []);

  // Función para obtener libros del servicio
  useEffect(() => {
    fetch('https://localhost:44368/api/libros/listarLibros')  // Reemplaza con tu endpoint
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error al obtener libros:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos del formulario:', formData);

    const response = await registrarPrestamo(formData);
    alert(response.message);
  };


  return (
    <>
      <form style={{border: '1px solid black', borderRadius: '15px', padding: '12px'}} onSubmit={handleSubmit}>
      <div style={{padding: '6px'}}>
        <label style={{marginRight: '10px'}} htmlFor="IdUsuario">Usuario:</label>
        <select
          id="IdUsuario"
          name="IdUsuario"
          value={formData.selectedUser}
          onChange={handleChange}
        >
          <option value="">Seleccione un usuario</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.nombres + ' ' +user.apellidos} {/* Muestra el nombre del usuario */}
            </option>
          ))}
        </select>
      </div>
      <div style={{padding: '6px'}}>
        <label style={{marginRight: '10px'}} htmlFor="IdLibro">Libro:</label>
        <select
          id="IdLibro"
          name="IdLibro"
          value={formData.selectedBook}
          onChange={handleChange}
        >
          <option value="">Seleccione un libro</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.titulo} {/* Muestra el título del libro */}
            </option>
          ))}
        </select>
      </div>
      <button style={{marginTop: '25px'}} type="submit">Registrar Préstamo</button>
    </form>
    </>
  )
}

export default App
