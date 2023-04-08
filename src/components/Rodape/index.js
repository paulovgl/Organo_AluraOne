import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="Facebook Imagem" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/images/tw.png" alt="Twitter Imagem" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/images/ig.png" alt="Instagram Imagem" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="/images/logo.png" alt="Logo Organo" />
      </div>
      <div>
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
};

export default Rodape;
