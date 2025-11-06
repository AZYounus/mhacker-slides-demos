import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard'
import './Projects.css'

function Projects() {
    const [reposArray, setReposArray] = useState([]);
    const [avatarURL, setAvatarURL] = useState();
    const [createdAtArray, setCreatedAtArray] = useState([]);

    function fetchUserPage(user) {
        fetch(`https://api.github.com/users/${user}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
            }, (error) => {
                console.log(error)
            }
            )
    }

    function fetchUserRepos(user) {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then((res) => res.json())
            .then((result) => {
                setReposArray(result)
                console.log(reposArray)
            }, (error) => {
                console.log(error)
            }
            )
    }
    // runs on initial page render
    useEffect(() => {
        fetchUserPage("AZYounus")
        fetchUserRepos("AZYounus")
    }, [])
    return (
        <>
        <div className="gitHubCards">
            {reposArray.map((repo, index) => (
                <GithubCard className={`GitHubCard${index}`} image_url={avatarURL} project_title={repo.name} key={index} style={{gridArea: `GitHubCard${index}`}} />
            ))}
        </div>
        </>
    )
}

export default Projects;