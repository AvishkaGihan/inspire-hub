import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import { FaReact, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content}>
          <div className={styles.profileSection}>
            <Image
              src="/images/profile-picture.jpg"
              alt="Avish"
              width={150}
              height={150}
              className={styles.profilePicture}
            />
            <div className={styles.introduction}>
              <p>
                Hello! I&apos;m{" "}
                <span className={styles.highlight}>Avishka</span>, a passionate
                software engineer based in Kadawatha, Sri Lanka.
              </p>
            </div>
          </div>
          <div className={styles.skillsSection}>
            <h2>Specializations</h2>
            <div className={styles.skills}>
              <span className={styles.skill}>
                <FaCode />
                TypeScript
              </span>
              <span className={styles.skill}>
                <FaReact />
                React
              </span>
            </div>
          </div>
          <p>
            With 5 years of experience in the industry, I&apos;ve had the
            opportunity to work on a variety of exciting projects and
            collaborate with talented individuals.
          </p>
          <p>
            My goal is to build{" "}
            <span className={styles.highlight}>user-friendly</span> and{" "}
            <span className={styles.highlight}>scalable</span> web applications.
            I&apos;m always eager to learn new technologies and methodologies to
            improve my craft.
          </p>
          <div className={styles.hobbies}>
            <h2>When Im not coding</h2>
            <p>
              You can find me exploring new hiking trails and playing the
              guitar.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
