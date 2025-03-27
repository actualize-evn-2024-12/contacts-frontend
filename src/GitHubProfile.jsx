import axios from 'axios'
import { useEffect, useState } from "react";

export function GitHubProfile() {
  const [userGithubProfile, setUserGithubProfile] = useState({})


  
  const handleProfile = () => {
    const githubAccessToken = localStorage.getItem("github_access_token");
    if (githubAccessToken) {
      console.log("Got the access token", githubAccessToken);
      axios.get("https://api.github.com/user", {
        headers: {Authorization: `Bearer ${githubAccessToken}`}
      }).then(response => {
        console.log(response.data)
        setUserGithubProfile(response.data)
      })
    }
  };

  useEffect(handleProfile, []);

  return (
    <div>
      {JSON.stringify(userGithubProfile)}
      <h1>{userGithubProfile.avatar_url}</h1>
      <img src={userGithubProfile.avatar_url} />
      <h1>GitHub Profile</h1>
    </div>
  );
}



