import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Inspire Hub</h1>
        <p className={styles.description}>
          A showcase of my projects and skills
        </p>
        <div className={styles.projectGrid}>
          <ProjectCard
            id="1"
            title="E-commerce Website"
            description="This is a project where I built a responsive e-commerce website using React and Redux. It includes features such as product listing, cart functionality, and user authentication."
            imageUrl="/images/project1.jpg"
          />
          <ProjectCard
            id="2"
            title="Weather Application"
            description="This is a project where I developed a weather application using React and the OpenWeatherMap API. It allows users to search for weather information by city and displays the current weather conditions."
            imageUrl="/images/project2.jpg"
          />
          <ProjectCard
            id="3"
            title="Task Management Application"
            description="This is a project where I created a task management application using React and Firebase. It enables users to create, update, and delete tasks, and stores the data in a cloud database."
            imageUrl="/images/project3.jpg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
