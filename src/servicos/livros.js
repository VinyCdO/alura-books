import axios from "axios";

const livrosAPI = "http://localhost:8000/livros";

async function getLivros() {
  try {
    const response = await axios.get(livrosAPI);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter livros:", error);
    throw error; 
  }  
}

export {
  getLivros
}
