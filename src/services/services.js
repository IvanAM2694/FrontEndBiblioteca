export async function getUsuarios() {
    const url = "https://localhost:44368/api/usuarios/listarUsuarios";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return await response.json();
      
    } catch (error) {
      console.error("Error en la solicitud: ", error.message);
      throw error; // Rethrow the error to let the caller handle it if needed
    }
}

export async function getLibros() {
    const url = "https://localhost:44368/api/libros/listarLibros";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return await response.json();
      
    } catch (error) {
      console.error("Error en la solicitud: ", error.message);
      throw error; // Rethrow the error to let the caller handle it if needed
    }
}

export async function registrarPrestamo(registroPrestamo) {
    const url = "https://localhost:44368/api/prestamos/registrarPrestamo";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registroPrestamo)
      });
  
      return await response.json();
      
    } catch (error) {
      console.error("Error en la solicitud: ", error.message);
      throw error; // Rethrow the error to let the caller handle it if needed
    }
}