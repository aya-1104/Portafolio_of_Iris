import { useEffect, useState } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
        fetch('/projectsInfo.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error cargando proyectos:', error));
    }, []);
    
    return { projects};
}