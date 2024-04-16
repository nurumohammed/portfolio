import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaTelegram, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

 const handleEmail = () => {
   window.open("https://mail.google.com", "_blank");
 };
  return (
    <section>
      <div className="flex items-center justify-center h-screen text-4xl bg-gray-100 rounded-lg m-2">
        <div className="flex flex-col items-center">
          <img
            src="src/assets/nuru.jpg"
            alt="Your Image"
            className=" w-56 h-56 sm:w-64 sm:h-64 p-4 mt-8"
          />
          <h1 className="text-nowrap animation">
            Hello, I m Nuru
            <br />
            Full Stack Web Developer
          </h1>
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateY(550px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <button
              className="mt-2 px-4 sm:px-6 py-1 sm:py-2 bg-transparent text-yellow-900 border border-yellow-500 rounded-md cursor-pointer text-2xl md:text-4xl hover:bg-yellow-500 hover:text-white"
              onClick={handleContact}
            >
              Hire Me
            </button>
          </Animate>
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p className="text-lg">
              Feel free to reach out to me via email or connect with me on
              social media.
            </p>
            <div className="flex m-4 gap-20 md:gap-28 items-center text-emerald-900">
              <button onClick={handleEmail}>
                <FaEnvelope />
              </button>
              <button
                onClick={() =>
                  handleRedirect("https://www.linkedin.com/in/nuru-m")
                }
              >
                <FaLinkedin />
              </button>
              <button
                onClick={() =>
                  handleRedirect("https://github.com/nurumohammed")
                }
              >
                <FaGithub />
              </button>
              <button onClick={() => handleRedirect("https://t.me/nuruwollo")}>
                <FaTelegram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
