const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
