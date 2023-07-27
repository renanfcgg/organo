import './Footer.css';
import RedeSociais from '../RedeSociais';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='box-img'>
                <RedeSociais />
            </div>
            
            <div>
                <img src="/imagens/logo.png" alt="Logo Organo"/>
            </div>

            <div>
                <p>Desenvolvido por Alura</p>
            </div>

        </footer>
    )
}

export default Footer