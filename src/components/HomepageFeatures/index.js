import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Matriz',
    src: "img/matriz.png",
    description: (
      <>
        A matriz é uma representação de dados, geralmente numéricos, divididos por linhas e colunas. Em Python, uma matriz pode ser representada como uma lista de listas <code>[[], [], []]</code>, onde um elemento da lista contém uma linha da matriz, que por sua vez corresponde a uma lista com os elementos da coluna da matriz. É possível imprimir partes específicas dela informando a lógica adequada sobre os valores de <code>i</code> (linha) e <code>j</code> (coluna).
      </>
    ),
  },
  {
    title: 'Algoritmos de Busca',
    src: "img/search.png",
    description: (
      <>
        Um algoritmo de busca é o procedimento passo a passo usado para localizar dados específicos entre uma coleção de dados. Um exemplo prático disso são as Buscas Lineares ou Buscas Binárias em listas (<code>[]</code>), onde o objetivo é encontrar o valor desejado dentro dela, retornando seu <code>index</code> dentro da lista ou até o número de iterações que foram necessárias para encontrar esse valor.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{textAlign: 'justify'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
