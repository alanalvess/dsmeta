import logo from '../../assets/img/logo.svg';
import './styles.scss';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/alanalvess/"> Alan Alves</a>
                </p>
            </div>
        </header>
    )
}

export default Header;