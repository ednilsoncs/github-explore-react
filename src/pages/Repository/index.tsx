import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronsLeft size={16} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/48322101?s=460&u=5e3e7725c27da542a750dfc40d19f97145cf3e98&v=4" alt="Logo" />
          <div>
            <strong>ednilson</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asasdas">
          <div>
            <strong>Ednilson</strong>
            <p>
              alguma coisa
            </p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
