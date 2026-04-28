import styles from './Footer.module.css';

import {FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Manos */}
        <div className={styles.column}>
          <h3>Manos</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusamus dolorum necessitatibus voluptate, accusantium itaque! Sapiente provident ipsa obcaecati optio nobis ea et, aperiam quibusdam! Velit laboriosam cum vero dignissimos!</p>
        </div>

        {/*Produtos*/}
        <div className={styles.column}>
          <h3>Produtos</h3>
          <ul>
            <li><a href="#">Produto 1</a></li>
            <li><a href="#">Produto 2</a></li>
            <li><a href="#">Produto 3</a></li>
            <li><a href="#">Produto 4</a></li>
          </ul>
        </div>

        {/*Links Uteis */}
        <div className={styles.column}>
          <h3>Links Uteis</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </div>

        {/*Contato*/}
        <div className={styles.column}>
          <h3>Contato</h3>
          <div className={styles.contactInfo}>
            <span>🏠</span>
            <span>Rua Casa, 543 - Teuslandia, japaraibá</span>
          </div>
          <div className={styles.contactInfo}>
            <span>📞</span>
            <span>(83) 99999-9999</span>
          </div>
          <div className={styles.contactInfo}>
            <span>✉️</span>
            <span>contato@manos.com</span>
          </div>
        </div>

      </div>

      {/* Bbar */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div>
            ©2067 Copyright: <strong>ManosINC</strong>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" aria-label='Facebook'><FaFacebookF /></a>
            <a href="#" aria-label='Twitter'><FaTwitter /></a>
            <a href="#" aria-label='Google Plus'><FaGooglePlusG /></a>
            <a href="#" aria-label='LinkedIn'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;