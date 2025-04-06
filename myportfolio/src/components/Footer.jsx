const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-6 mt-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 My Portfolio | All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/YourGithubUsername"
            className="hover:text-gray-300 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YourLinkedIn"
            className="hover:text-gray-300 mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
