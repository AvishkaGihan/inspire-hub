import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles/Projects.module.css";

const projects = [
  {
    id: "1",
    title: "E-commerce Website",
    description:
      "This is a project where I built a responsive e-commerce website using React and Redux. It includes features such as product listing, cart functionality, and user authentication.",
    imageUrl: "/images/project1.jpg",
  },
  {
    id: "2",
    title: "Weather Application",
    description:
      "This is a project where I developed a weather application using React and the OpenWeatherMap API. It allows users to search for weather information by city and displays the current weather conditions.",
    imageUrl: "/images/project2.jpg",
  },
  {
    id: "3",
    title: "Task Management Application",
    description:
      "This is a project where I created a task management application using React and Firebase. It enables users to create, update, and delete tasks, and stores the data in a cloud database.",
    imageUrl: "/images/project3.jpg",
  },
  {
    id: "4",
    title: "Social Media App",
    description:
      "This is a project where I built a social media application using React and Node.js. It allows users to create posts, follow other users, and interact with their posts through likes and comments.",
    imageUrl: "/images/project4.jpg",
  },
  {
    id: "5",
    title: "Recipe Finder",
    description:
      "This is a project where I developed a recipe finder application using React and the Spoonacular API. It allows users to search for recipes based on ingredients, dietary restrictions, and cooking time.",
    imageUrl: "/images/project5.jpg",
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "This is a project where I created a fitness tracker application using React and MongoDB. It enables users to track their workouts, set goals, and view their progress over time.",
    imageUrl: "/images/project6.jpg",
  },
  {
    id: "7",
    title: "Blog Website",
    description:
      "This is a project where I built a blog website using React and Express.js. It allows users to create and publish blog posts, as well as comment on existing posts.",
    imageUrl: "/images/project7.jpg",
  },
  {
    id: "8",
    title: "Music Player",
    description:
      "This is a project where I developed a music player application using React and the Spotify API. It allows users to search for and play their favorite songs and playlists.",
    imageUrl: "/images/project8.jpg",
  },
  {
    id: "9",
    title: "Movie Recommendation App",
    description:
      "This is a project where I created a movie recommendation application using React and the TMDB API. It suggests movies based on user preferences and provides details about each movie.",
    imageUrl: "/images/project9.jpg",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
