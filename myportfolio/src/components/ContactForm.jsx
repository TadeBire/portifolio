const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm">Your Name</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Your Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Your Message</label>
        <textarea className="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
