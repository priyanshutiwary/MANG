import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const register = () => {
    navigate('/register');
    console.log("Registration initiated");
  };

  return (
    <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-4xl font-bold mb-6 text-center">
          <span className="text-blue-500">About</span> Our Company
        </h1>
        <p className="text-lg mb-8 text-gray-700 max-w-3xl text-center leading-relaxed text-align-justify">
          Welcome to our company! We are a team of passionate individuals dedicated to providing top-notch solutions
          for all your needs. With years of experience and a commitment to excellence, we strive to deliver innovative
          products and services that exceed your expectations.
        </p>
        <p className="text-lg mb-8 text-gray-700 max-w-3xl text-center leading-relaxed text-align-justify">
          Our mission is to create a seamless and enjoyable experience for our customers, ensuring that every
          interaction with our company is a positive one. We value transparency, integrity, and customer satisfaction
          above all else.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={login}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={register}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Core Values</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700 max-w-3xl">
        <li>Innovation: We continuously seek new and better ways to solve problems and improve our offerings.</li>
        <li>Quality: We maintain the highest standards of quality in everything we do, from product development to customer service.</li>
        <li>Collaboration: We believe in the power of teamwork and foster an environment of open communication and collaboration.</li>
        <li>Sustainability: We are committed to sustainable practices that minimize our environmental impact and contribute to a better future.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Join Our Community</h2>
      <p className="text-lg mb-8 text-gray-700 max-w-3xl text-center leading-relaxed text-align-justify">
        Become a part of our vibrant community and stay up-to-date with the latest news, updates, and exclusive
        offers. Join now and unlock a world of benefits!
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <Link to="/contact" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Contact Us
        </Link>
        <span className="text-gray-500">|</span>
        <Link to="/team" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          Meet Our Team
        </Link>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>&copy; 2023 Our Company. All rights reserved.</p>
          <div>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;


// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div
//         className=" mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16"
//         style={{
//           backgroundImage: "url('/about-bg.jpg')",
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">About Our Revolutionary Product</h1>
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/2 px-4 mb-8">
//             <div className="bg-indigo-500 rounded-lg p-6 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-4">Seamless Integration</h2>
//                 <p className="text-white">
//                   Our product seamlessly integrates with your existing devices and workflows, ensuring a smooth transition and minimizing disruption to your routine.
//                 </p>
//               </div>
//               <div className="mt-6">
//                 <img src="/seamless-integration.svg" alt="Seamless Integration" className="h-32 mx-auto" />
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 px-4 mb-8">
//             <div className="bg-purple-500 rounded-lg p-6 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-4">Personalized Experience</h2>
//                 <p className="text-white">
//                   With customizable features and personalization options, our product adapts to your unique preferences and needs, providing a tailored experience that feels like it was made just for you.
//                 </p>
//               </div>
//               <div className="mt-6">
//                 <img src="/personalized-experience.svg" alt="Personalized Experience" className="h-32 mx-auto" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="text-lg text-gray-700 mb-8">
//           Our team of experts has poured countless hours into research, development, and testing to ensure that our product meets the highest standards of quality and performance. We are committed to delivering an exceptional experience that exceeds your expectations.
//         </p>
//         <div className="text-center">
//           <a
//             href="/pre-register"
//             className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md"
//           >
//             Pre-Register Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
