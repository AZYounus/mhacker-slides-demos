import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard'
import './Projects.css'

function Projects() {
    const [reposArray, setReposArray] = useState([]);
    const [avatarURL, setAvatarURL] = useState();
    const [createdAtArray, setCreatedAtArray] = useState([]);

    async function fetchUserPage(user) {
        await fetch(`https://api.github.com/users/${user}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
            }, (error) => {
                console.log(error)
            }
            )
    }

    async function fetchUserRepos(user) {
        await fetch(`https://api.github.com/users/${user}/repos`)
            .then((res) => res.json())
            .then((result) => {
                setReposArray(result)
                console.log("array: ", result)
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
                <GithubCard className={`GitHubCard${index}`} image_url={avatarURL} project_title={repo.name} repo_link={repo.html_url} key={index} />
            ))}
        </div>
        </>
    )
}

export default Projects;