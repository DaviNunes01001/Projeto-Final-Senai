import Styles from "./Sobre.module.css";

function Sobre() {
  return (
    <>
    <div className={Styles.sobre}>
    <main>
    <h2>Sobre</h2>
    <p>
    Este é um projeto do curso de Análise e Desenvolvimento de Sistemas para demonstrar a habilidade em desenvolvimento web do grupo. O objetivo deste projeto é criar um site simples e funcional para demosntrar o conhecimento e as habilidades dos integrantes do grupo.
    </p>
    <h2>Objetivo do projeto:</h2>
    <p>
    O objetivo deste projeto é criar um site FRONT-END usando React + Vite + JavaScript, consumindo uma API desenvolvida pelos integrantes do grupo em aulas passadas.
    </p>
    <h2>O site foi desenvolvido utilizando as seguintes tecnologias:</h2>
    <ul>
    <li>React</li>
    <li>React Router</li>
    <li>JavaScript</li>
    <li>CSS</li>
    <li>Vite</li>
    <li>Fetch</li>
    </ul>
    <h2>Integrantes do grupo:</h2>
    <ul>
    <li>Mathes Lopes: Lider e principal responsável pelo andamento do projeto e um dos responsável pelo desenvolvimento do site</li>
    <li>Davi Nunes: Vice-lider e responsável pela divisão das tarefas e um dos responsável pelo desenvolvimento do site</li>
    <li>Miguel Frango: Integrante do grupo e responsável pelo desenvolvimento de partes definidas do site</li>
    <li>Lucas Emanuel: Integrante do grupo e responsável pelo desenvolvimento de partes definidas do site</li>
    <li>Kaio Pires: Integrante do grupo e responsável pelo desenvolvimento de partes definidas do site</li>
    <li>Giovanni Perigoso: Integrante do grupo e responsável pelo desenvolvimento de partes definidas do site</li>
    </ul>                
    </main>
    </div>
    </>
  )
}

export default Sobre
