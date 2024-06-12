<script>
import Menu from '/src/components/header.vue';

export default {
  name: 'Sobre',
  components: {
    Menu
  }

}
</script>
<template>

  <div class="home">

    <Menu class="menu"></Menu>

    <div class="sobre">
      <div class="bloco">
        <img class="logo" src="../assets/imagens/body.png">

        <p>Uma solução inovadora que utiliza análise preditiva com inteligência artificial para prever a
          probabilidade de um funcionário deixar a empresa. A aplicação é projetada para auxiliar na retenção de
          talentos, oferecendo insight
          sobre o turnover de funcionários.</p>
      </div>
      <div class="bloco">
        <p class="titulo">Funcionalidades da Aplicação</p>
        <p>1. Coleta de Dados do Funcionário:
          A aplicação coleta informações essenciais sobre os funcionários para realizar as análises preditivas. Os dados
          necessários incluem:

          Idade: Idade do funcionário.
          Ano da Contratação: Ano em que o funcionário foi contratado pela empresa.
          Gênero: Masculino ou Feminino.
          Grau de Estudo: Nível de educação, categorizado como Bacharel, Mestre ou PHD.
          Nível de Pagamento: Comparação do salário do funcionário em relação ao padrão para o cargo exercido,
          classificado
          como Baixo, Médio ou Alto.
          Ever Benched: Indicação se o funcionário já esteve sem atribuições de trabalho por um período (Sim ou Não).
          Experiência na Área Atual: Anos de experiência na área em que o funcionário atua.</p>

        <p>2. Envio e Limpeza de Dados:

          ENVIAR DADOS: Função que permite enviar os dados coletados para análise.
          LIMPAR DADOS: Função que permite limpar os dados inseridos para corrigir ou atualizar informações.
          Processamento e Análise</p>
      </div>
      <div class="bloco">

        <p class="titulo">
          Análise Preditiva de Turnover:</p>
        <p>
          A aplicação utiliza algoritmos avançados de machine learning para analisar os dados fornecidos. Com o uso de
          bibliotecas como Scikit-Learn e técnicas de machine learning, o RH Predict IA processa as informações e gera
          previsões sobre a probabilidade de um funcionário deixar a empresa.</p>
      </div>
      <div class="bloco">

        <p class="titulo">
          Informações Sobre o Projeto:</p>
        <p>Desenvolvedor: Carlos Eduardo Padilha</p>
        <p>Linguagem API: Python - Framework: FastAPI</p>
        <p>Deploy da API: Utilizando Docker na Plataforma de Nuvem Render</p>
        <p>FrontEnd: VueJS - Deploy do FrontEnd: Netlify</p>
        <p>Algoritimo Utilizado para Predição: SVM - Máquina de Vetores de Suporte</p>
        <p> Fonte dos dados utilizados:</p> <a
          href="https://www.kaggle.com/datasets/tawfikelmetwally/employee-dataset">Clique Aqui Para Acessar - Link dos Dados</a>
        <p> Link da API:</p> <a href="https://rhpredict.onrender.com">Clique Aqui Para Acessar - API Backend</a>

      </div>
    </div>
  </div>
</template>
<style scoped>
.sobre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 5rem;
  padding: 20px 0px;
}

.home {
  background: linear-gradient(#def0f7, #def0f7);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.menu {
  position: fixed;
  z-index: 1;
  padding: 0px;
}

.bloco {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  gap: 10px;
  width: 90%;
}

.titulo {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
}

.logo {
  width: 5rem;
  margin: 0px 0rem;
}

a {
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
</style>