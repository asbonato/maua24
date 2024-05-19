import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faker } from '@faker-js/faker';
//npm install @faker-js/faker --save-dev
import Comentario from './Comentario';
import Cartao from './Cartao';
import ListaComentarios from './ListaComentarios';
import Feedback from './Feedback';

const App = () => {
    const funcaoOK = () => {
        alert('Comentário aprovado!');
    }
    const funcaoNOK = () => {
        alert('Comentário reprovado!');
    }
    const textoOK = 'Aprovar';
    const textoNOK = 'Reprovar';
    const feedbackComponent = <Feedback funcaoOK={funcaoOK} funcaoNOK={funcaoNOK} textoOK={textoOK} textoNOK={textoNOK} />;
  return (
    <ListaComentarios>
        <div className='row'>
            <div className='col-12'>
                <Cartao>
                    <Comentario nome={faker.internet.userName()} texto={faker.lorem.sentences()} data={faker.date.past().toLocaleTimeString()} foto={faker.image.avatar()} />
                    <div className='d-flex justify-content-center'>
                        {feedbackComponent}
                    </div>
                </Cartao>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <Cartao>
                    <Comentario nome={faker.internet.userName()} texto={faker.lorem.sentences()} data={faker.date.past().toLocaleTimeString()} foto={faker.image.avatar()} />
                    <div className='d-flex justify-content-center'>
                        {feedbackComponent}
                    </div>
                </Cartao>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <Cartao>
                    <Comentario nome={faker.internet.userName()} texto={faker.lorem.sentences()} data={faker.date.past().toLocaleTimeString()} foto={faker.image.avatar()} />
                    <div className='d-flex justify-content-center'>
                        {feedbackComponent}
                    </div>
                </Cartao>
            </div>
        </div>
    </ListaComentarios>
  );
}
//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

