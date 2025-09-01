import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="space-y-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Contatti</h2>
      <p className="text-gray-600">Vuoi entrare in contatto con me? Ecco dove trovarmi:</p>
      <ul className="space-y-2 text-gray-700">
        <li>📧 Email: <a href="mailto:mariafalanga00@gmail.com" className="text-orange-600 hover:underline">mariafalanga00@gmail.com</a></li>
        <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/maria-falanga-74836918b/" className="text-orange-600 hover:underline">linkedin.com/in/maria-falanga</a></li>
        <li>🐙 GitHub: <a href="https://github.com/marfal16" className="text-orange-600 hover:underline">github.com/marfal16</a></li>
      </ul>
    </div>
  );
};

export default Contact;