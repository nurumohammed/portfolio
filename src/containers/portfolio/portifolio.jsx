
import { BsInfoCircleFill } from "react-icons/bs";
import Page from "../../components/pageHeaderContent/page";

const Portfolio = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:your-email@example.com";
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="portfolio" className="bg-gray-100 p-8">
      <Page headerText="Portfolio" icon={<BsInfoCircleFill />} />
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-lg">
          Add your introduction and information about yourself here. Describe
          your background, skills, and experiences. Showcase your unique value
          proposition and what sets you apart from others in your field.
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">Resume/CV</h2>
        <p className="text-lg">
          Add a link or button to download your resume/CV here. Visitors can
          click on it to access and review your detailed work history,
          education, and accomplishments.
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-lg">
          Feel free to reach out to me via email or connect with me on social
          media.
        </p>
        <div className="flex mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleEmailClick}
          >
            Email
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() =>
              handleRedirect("https://www.linkedin.com/your-linkedin-profile")
            }
          >
            LinkedIn
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() =>
              handleRedirect("https://github.com/your-github-profile")
            }
          >
            GitHub
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleRedirect("https://t.me/your-telegram-profile")}
          >
            Telegram
          </button>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-center">
        <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Portfolio;
