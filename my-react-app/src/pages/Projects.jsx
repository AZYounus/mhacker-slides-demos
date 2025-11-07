import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard'
import './Projects.css'

function Projects() {
    const [reposArray, setReposArray] = useState([]);
    const [avatarURL, setAvatarURL] = useState();

    function getUserData(user) {
        fetch(`https://api.github.com/users/${user}`)
            .then((res) => res.json()
            ).then((result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
            }, (error) => {
                console.log(error)
            }
            )
    }
    function getUserRepos(user) {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then((res) => res.json()
            ).then((result) => {
                console.log(result)
                setReposArray(result)
            }, (error) => {
                console.log(error)
            }
            )
    }
    // runs on initial page render
    useEffect(() => {
        getUserData("AZYounus")
        getUserRepos("AZYounus")
    }, [])
    return (
        <>
        <div className='gitHubCards'>
            {reposArray.map((repo, index) => (
                <GithubCard image_url={avatarURL} key={index} repo_title={repo.name} repo_url={repo.html_url}/>                
            ))}
        </div>
        </>
    )
}

export default Projects;