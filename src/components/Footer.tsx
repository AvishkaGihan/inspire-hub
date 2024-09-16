import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          &copy; 2024 Inspire Hub. All rights reserved.
        </p>
        <nav className={styles.socialLinks}>
          <Link
            href="https://github.com/AvishkaGihan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/avishka-gihan-37a01a2a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/avishka.gihan.121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
