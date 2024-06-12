<script>
import Menu from '/src/components/header.vue';
import { fazerRequisicaorhpredictPOST } from '@/api_connection/enviarDados';

export default {
  name: 'HomeView',
  components: {
    Menu
  },

  data() {
    return {
      idade: '',
      ano_contratacao: '',
      genero: '',
      grau_estudo: '',
      nivel_pagamento: '',
      ever: '',
      experiencia: '',
      resposta_requisicao: '',
      resultado: '',
    }
  },
  methods: {
    enviar_dados() {
      this.resposta_requisicao = ''
      this.resultado = 'Aguarde Alguns Instantes, Sua Resposta Está Sendo Processada. Por estar hospedada em um servidor gratuito, a resposta pode demorar em média uns 50segundos.'
      console.log('enviando...', this.enviar)
      this.enviando();
    },
    async enviando() {

      this.grau_estudo = parseInt(this.grau_estudo)
      this.ano_contratacao = parseInt(this.ano_contratacao)
      this.nivel_pagamento = parseInt(this.nivel_pagamento)
      this.idade = parseInt(this.idade)
      this.genero = parseInt(this.genero)
      this.ever = parseInt(this.ever)
      this.experiencia = parseInt(this.experiencia)


      try {
        // Realiza a requisição com os dados do formulário ou dados fixos para teste
        const data = await fazerRequisicaorhpredictPOST(
          this.grau_estudo, this.ano_contratacao, this.nivel_pagamento,
          this.idade, this.genero, this.ever, this.experiencia

        );

        this.resposta_requisicao = data;

      } catch (error) {
        console.error('Erro ao iniciar:', error);
      }


    },
    limpar() {
        this.idade = '',
        this.ano_contratacao = '',
        this.genero = '',
        this.grau_estudo = '',
        this.nivel_pagamento = '',
        this.ever = '',
        this.experiencia = '',
        this.resposta_requisicao = '',
        this.resultado = ''      
    }
  }
}
</script>

<template>
  <div class="home">

    <Menu class="menu"></Menu>

    <div class="titulo">
      <p class="subtitulo">Análise Preditiva de Turnover de Funcionários com IA</p>
      <p class="text">O RH Predict, utiliza algoritmos avançados para prever se
        um colaborador está propenso a deixar a empresa.</p>
    </div>

    <form @submit.prevent="enviar_dados" class="form">

      <div class="sub">
        <p class="subtitulo2">Dados do Funcionário:</p>
      </div>

      <div class="bloco2">
        <div class="inputs">
          <label class="dados_titulo" for="idade">Idade</label>
          <input class="input_idade" v-model="idade" type="number" min="16" max="120" step="1" id="idade" required>

          <label class="dados_titulo" for="ano_contratacao">Ano da Contratação</label>
          <input class="input_nome" v-model="ano_contratacao" type="number" min="1970" max="2024" step="1"
            id="ano_contratacao" required>

        </div>

      </div>

      <label for="" class="dados">Gênero </label>
      <div class="bloco">
        <div>
          <label>
            <input class="input-genero" v-model="genero" type="radio" name="genero" value="0" required> Masculino
          </label>
          <label>
            <input class="input-genero" type="radio" v-model="genero" name="genero" value="1" required> Feminino
          </label>
        </div>
      </div>

      <label for="" class="dados">Grau de Estudo </label>
      <div class="bloco">
        <div>
          <label>
            <input class="input-genero" v-model="grau_estudo" type="radio" name="grau_estudo" value="0" required>
            Bacharel
          </label>
          <label>
            <input class="input-genero" type="radio" v-model="grau_estudo" name="grau_estudo" value="1" required> Mestre
          </label>
          <label>
            <input class="input-genero" type="radio" v-model="grau_estudo" name="grau_estudo" value="2" required> PHD
          </label>
        </div>
      </div>



      <label class="dados">Nível de Pagamento</label>
      <p>Conforme o padrão para o cargo exercido</p>
      <div class="bloco">
        <div>
          <label>
            <input class="input-alcool" v-model="nivel_pagamento" type="radio" name="nivel_pagamento" value="1"
              required> Baixo
          </label>
          <label>
            <input class="input-alcool" type="radio" v-model="nivel_pagamento" name="nivel_pagamento" value="2"
              required> Médio
          </label>
          <label>
            <input class="input-alcool" type="radio" v-model="nivel_pagamento" name="nivel_pagamento" value="3"
              required> Alto
          </label>

        </div>
      </div>

      <label class="dados">Ever Benched</label>
      <p class="text">indicar se um funcionário já esteve em uma situação em que não tinha atribuições de trabalho por
        um período,
        como estar em um banco de reservas, aguardando tarefas ou projetos para trabalhar.</p>
      <div class="bloco">
        <label>
          <input class="input-alimentos_caloricos" v-model="ever" type="radio" name="ever" value="0" required> Não
        </label>
        <label>
          <input class="input-alimentos_caloricos" type="radio" v-model="ever" name="ever" value="1" required> Sim
        </label>
      </div>

      <label class="dados">Experiência na Área Atual</label>
      <p class="text">Experiência em Anos</p>
      <div class="bloco">
        <label>
          <input class="input_exp" v-model="experiencia" type="number" name="experiencia" required>
        </label>

      </div>

      <h4 class="resposta" v-show="this.resultado && !this.resposta_requisicao">{{ this.resultado}}</h4>
      <h4 class="resposta" v-show="this.resposta_requisicao['success']">{{ this.resposta_requisicao['message'] }}</h4>
      
      <button type="submit">ENVIAR DADOS</button>


    </form>

    <button class="limpar" @click="limpar" type="submit">LIMPAR DADOS</button>
  </div>
</template>


<style scoped>
.home {
  background: linear-gradient(#def0f7, #def0f7);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130vh;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.titulo {
  text-align: center;
  font-size: 1rem;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.menu {
  position: fixed;
  z-index: 1;
}

.subtitulo {
  font-size: 1.3rem;
  font-weight: 500;
  color: #1d3f2e;
  width: 70%;
}

.text {
  width: 70%;
  text-align: center;
}

.subtitulo2 {
  font-size: 1.3rem;
  font-weight: 200;
  margin-bottom: 1rem;
}

.input_nome {
  width: 40%;
  border: none;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
  text-align: center;
}

.input_idade {
  width: 25%;
  border: none;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
  text-align: center;
}

.input_exp {
  width: 100%;
  border: none;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
  text-align: center;
}

.input_altura {
  width: 30%;
  border: none;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
}

.input_peso {
  width: 20%;
  border: none;
  height: 1.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.dados_titulo {
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0rem;
  text-align: center;
}

.dados {
  font-size: 1.2rem;
  font-weight: 390;
  margin: 0.5rem 0rem;
  text-align: center;
  letter-spacing: 2px;
}

.bloco2 {
  background-color: none;
  border-radius: 10px;
  padding: 1rem 0rem;
  width: 100%;
  box-shadow: 0px 5px 10px 0px #ffffff;
  margin-bottom: 1rem;
}

.bloco {
  background-color: none;
  border-radius: 10px;
  padding: 1rem 0rem;
  width: 95%;
  font-weight: 300;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px 0px #ffffff;
  margin: 1.5rem 0rem;
  gap: 0.5rem;
}

button {
  padding: 1rem;
  width: 95%;
  border: none;
  border-radius: 10px;
  background-color: #1d3f2e;
  color: #def0f7;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
}

.resposta {
  padding: 1.2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
}

.limpar {
  width: 95%;
}
</style>
