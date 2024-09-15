import React from "react";
import Link from "next/link";
import ProjectImage from "./ProjectImage";
import styles from "../styles/ProjectCard.module.css";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <ProjectImage src={imageUrl} alt={title} />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href={`/projects/${id}`} className={styles.link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
