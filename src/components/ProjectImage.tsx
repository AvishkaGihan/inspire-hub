import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectImage.module.css";

interface ProjectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={styles.image}
      />
    </div>
  );
};

export default ProjectImage;
