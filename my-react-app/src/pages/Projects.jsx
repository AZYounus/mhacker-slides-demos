import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard'

function Projects() {
    const [reposArray, setReposArray] = useState([]);
    const [avatarURL, setAvatarURL] = useState();

    // runs on initial page render
    useEffect(() => {
        fetch("https://api.github.com/users/AZYounus")
            .then((res) => res.json()
            ).then((result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
            }, (error) => {
                console.log(error)
            }
            )
        fetch("https://api.github.com/users/AZYounus/repos")
            .then((res) => res.json()
            ).then((result) => {
                console.log(result)
                result.map((elem) => {
                    reposArray.push(elem)
                })
                console.log(reposArray)
            }, (error) => {
                console.log(error)
            }
            )
    }, [])
    return (
        <>
        <GithubCard image_url={avatarURL}/>
        </>
    )
}

export default Projects;