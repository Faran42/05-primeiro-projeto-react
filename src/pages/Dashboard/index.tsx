import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4"
            alt="Franklyn Rocha"
          />
          <div>
            <strong>Faran42/simo</strong>
            <p>Sistema de Marcação Otimizada</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4"
            alt="Franklyn Rocha"
          />
          <div>
            <strong>Faran42/simo</strong>
            <p>Sistema de Marcação Otimizada</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/14254545?s=400&u=f69cff6ceff20f8a73698f2b32592c9bd4b7fcc2&v=4"
            alt="Franklyn Rocha"
          />
          <div>
            <strong>Faran42/simo</strong>
            <p>Sistema de Marcação Otimizada</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
