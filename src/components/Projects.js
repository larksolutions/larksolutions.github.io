import React, { useEffect, useState } from "react";
import NavBar from "./utils/navBar";
import { Card, Spinner } from "flowbite-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Lark Solutions - Projects";
    
    // Fetch repositories from GitHub
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/larksolutions/repos?sort=updated&per_page=100');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        // Filter out forks and sort by stars/updated date
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        setProjects(filteredProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <NavBar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Our Projects</h1>
          
          {loading && (
            <div className="flex justify-center items-center min-h-[400px]">
              <Spinner size="xl" />
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-500 text-xl">
              Error loading projects: {error}
            </div>
          )}
          
          {!loading && !error && projects.length === 0 && (
            <div className="text-center text-gray-400 text-xl">
              No projects found
            </div>
          )}
          
          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-xl transition-shadow duration-300">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 min-h-[60px]">
                    {project.description || 'No description provided'}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.language && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {project.language}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      ⭐ {project.stargazers_count}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      🍴 {project.forks_count}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View on GitHub →
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-semibold"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
