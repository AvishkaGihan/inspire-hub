import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import styles from "@/styles/ProjectDetail.module.css";

const projects = [
  {
    id: "1",
    title: "E-commerce Website",
    description:
      "This is a project where I built a responsive e-commerce website using React and Redux. It includes features such as product listing, cart functionality, and user authentication.",
    imageUrl: "/images/project1.jpg",
    technologies: ["React", "Redux"],
  },
  {
    id: "2",
    title: "Weather Application",
    description:
      "This is a project where I developed a weather application using React and the OpenWeatherMap API. It allows users to search for weather information by city and displays the current weather conditions.",
    imageUrl: "/images/project2.jpg",
    technologies: ["React", "OpenWeatherMap API"],
  },
  {
    id: "3",
    title: "Task Management Application",
    description:
      "This is a project where I created a task management application using React and Firebase. It enables users to create, update, and delete tasks, and stores the data in a cloud database.",
    imageUrl: "/images/project3.jpg",
    technologies: ["React", "Firebase"],
  },
  {
    id: "4",
    title: "Social Media App",
    description:
      "This is a project where I built a social media application using React and Node.js. It allows users to create posts, follow other users, and interact with their posts through likes and comments.",
    imageUrl: "/images/project4.jpg",
    technologies: ["React", "Node.js"],
  },
  {
    id: "5",
    title: "Recipe Finder",
    description:
      "This is a project where I developed a recipe finder application using React and the Spoonacular API. It allows users to search for recipes based on ingredients, dietary restrictions, and cooking time.",
    imageUrl: "/images/project5.jpg",
    technologies: ["React", "Spoonacular API"],
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "This is a project where I created a fitness tracker application using React and MongoDB. It enables users to track their workouts, set goals, and view their progress over time.",
    imageUrl: "/images/project6.jpg",
    technologies: ["React", "MongoDB"],
  },
  {
    id: "7",
    title: "Blog Website",
    description:
      "This is a project where I built a blog website using React and Express.js. It allows users to create and publish blog posts, as well as comment on existing posts.",
    imageUrl: "/images/project7.jpg",
    technologies: ["React", "Express.js"],
  },
  {
    id: "8",
    title: "Music Player",
    description:
      "This is a project where I developed a music player application using React and the Spotify API. It allows users to search for and play their favorite songs and playlists.",
    imageUrl: "/images/project8.jpg",
    technologies: ["React", "Spotify API"],
  },
  {
    id: "9",
    title: "Movie Recommendation App",
    description:
      "This is a project where I created a movie recommendation application using React and the TMDB API. It suggests movies based on user preferences and provides details about each movie.",
    imageUrl: "/images/project9.jpg",
    technologies: ["React", "TMDB API"],
  },
];

interface ProjectDetailProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.content}>
          <ProjectImage
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
          />
          <p className={styles.description}>{project.description}</p>
          <h2>Technologies Used</h2>
          <ul className={styles.technologies}>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
