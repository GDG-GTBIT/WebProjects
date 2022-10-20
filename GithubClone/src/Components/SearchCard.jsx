
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const SearchCard = ({ val }) => {
  const navigate = useNavigate()
  const viewProfile = () => {
    navigate(`/details`);
  }

  return (
    <div className="searchCardContainer">
      <div>
        <img alt={val.name} width="150px" height="100%" style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '50%', border: '5px solid black' }}
          src={val.avatar_url} />
      </div>
      <div className="detailsContainer">
        <div className="topSection"> <h1> {val?.name || val.login} ({val.login}) </h1> <button onClick={viewProfile}> View Profile </button></div>
        <div className="bioSection">
          {val.bio}
        </div>
        <div className="followDetails">
          <h2>{val.followers} followers</h2>
          <h2> {val.following} following  </h2>
          <h2> {val.public_repos} Repos  </h2>
        </div>
      </div>

    </div>
  )
}

export default SearchCard