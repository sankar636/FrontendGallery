import React from 'react';

const ProjectTile = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col items-center justify-center bg-gray-200 p-4 m-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      role="button"
      tabIndex={0}
    >
      {/* Background image layer that fades in on hover */}
      {project.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      )}

      {/* Foreground content stays on top */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-32 h-32 object-cover rounded"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-400 flex items-center justify-center text-white rounded">
            No Image
          </div>
        )}
        <h1 className="text-center mt-2 font-medium">{project.name}</h1>
      </div>
    </div>
  );
};

export default ProjectTile;
