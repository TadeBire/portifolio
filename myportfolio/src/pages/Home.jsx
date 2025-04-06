const Home = () => {
  return (
    <div className="py-16 px-4 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Description on the Left */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-500">
            Welcome to My Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hi, I'm Birhanu Tadele,Software Engineering Student in Debre markos
            University and a passionate Frontend Developer
          </p>
          {/* Removed the View My Projects button */}
        </div>

        {/* Image on the Right */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/m.jpg" // Image path from the public folder
            alt="Birhanu Tadele"
            className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg md:ml-16" // Increased size to 64
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
