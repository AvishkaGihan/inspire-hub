import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Get in Touch</h1>
        <div className={styles.content}>
          <p className={styles.introduction}>
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out through any of the following channels:
          </p>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <a
                href="mailto:avishkag18@gmail.com"
                className={styles.contactLink}
              >
                avishkag18@gmail.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <FaLinkedin className={styles.contactIcon} />
              <a
                href="https://www.linkedin.com/in/avishka-gihan-37a01a2a3/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/avishka-gihan
              </a>
            </li>
            <li className={styles.contactItem}>
              <FaGithub className={styles.contactIcon} />
              <a
                href="https://github.com/AvishkaGihan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                github.com/AvishkaGihan
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
