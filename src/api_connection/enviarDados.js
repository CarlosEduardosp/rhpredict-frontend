import axios from 'axios';

export async function fazerRequisicaorhpredictPOST(
    grau_estudo, ano_contratacao, nivel_pagamento,
          idade, genero, ever, experiencia
) {
    // URL da API 
    const apiUrl = 'https://rhpredict.onrender.com/inserir_dados';

    // Criando um objeto com os dados para a requisição
    const dados = {
        grau_estudo,
        ano_contratacao,
        nivel_pagamento,
        idade,
        genero,
        ever,
        experiencia
    };

    try {
        // Fazendo uma solicitação POST usando Axios
        const resposta = await axios.post(apiUrl, dados, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        // Manipule os dados da resposta aqui
        const data = resposta.data;
        console.log('resposta rhpredict:', data);
        return data;
    } catch (error) {
        // Trate os erros de solicitação ou resposta
        console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
        throw error; // Lança o erro novamente para tratamento posterior, se necessário
    }
}
