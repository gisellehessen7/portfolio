// import React from 'react';

// const ProjectsPage = () => {
//   return (
//     <div>
//       <h1>My Projects</h1>
//       <p>This is the projects page.</p>
//     </div>
//   );
// };

// export default ProjectsPage;

"use client";

import { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { ref, get } from 'firebase/database';

interface Project {
  name: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsRef = ref(database, 'projets');
        const snapshot = await get(projectsRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const projectsArray = Object.values(data).map((item: any) => ({ name: item.nom }));
          setProjects(projectsArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main-container'>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
