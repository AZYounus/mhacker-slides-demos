import Navbar from '../components/Navbar.jsx'
import MyCard from '../components/MyCard.jsx'
import { useEffect, useState } from 'react'

function Projects() {
  const [avatarURL, setAvatarURL] = useState();
  const [gitHubUsername, setGitHubUsername] = useState();
  // runs every time application starts
  useEffect(() => {
    fetch("https://api.github.com/users/AZYounus")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <>
      <div className="frontPage">
        <div style={{height: 50}}></div>
        <MyCard img_url={avatarURL} title={"Michigan Hackers Slideshow"} />
      </div>
    </>
  )
}

export default Projects
