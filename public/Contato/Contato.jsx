import style from '.Contato.module.css'
import Header from '../../src/components/Header/Header.jsx'

function Contato() {
    return (
        <>
            <Header />
        
            <div className='ola'>
                <h1>Entre em Contato</h1>
                <p>Estamos aqui para ajudar, Fale conosco!</p>
            </div>

            <div className="cards">
                <div className="card">
                    <img className='email' src="" alt="Email"></img>
                    <h2>Email</h2>
                    <p>giolitoscontato@gmail.com</p>
                </div>

                <div className="card">
                    <img className='telefone' src="" alt="Telefone"></img>
                    <h2>Telefone</h2>
                    <p>(67) 12345-9999</p>
                </div>

                <div className="card">
                    <img className='endereço' src="" alt="Endereço"></img>
                    <h2>Endereço</h2>
                    <p>Rua Casa, 543 - Teuslandia, japaraibá</p>
                </div>
            </div>
            <div className='conta'> 
                <h2>Contate-nos diretamente</h2>
                <form action="#">
                    Email
                    <input type="text" placeholder='seu nome' required></input>
                    <input type="email" placeholder='email' required></input>
                    <textarea placeholder='sua mensagem' rows="6" required></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        
        </>
    )
}