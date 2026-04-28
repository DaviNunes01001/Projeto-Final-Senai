import style from '.Contato.module.css'

function Contato() {
    return (
        <>
        
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
            </div>
        
        </>
    )
}