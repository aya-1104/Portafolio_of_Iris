import projectsData from '../data/projectsInfo.json';

export default function useProjects() {
    return { projects: projectsData };
}