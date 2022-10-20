import React from 'react'
import Navbar from './Navbar'
import '../Styles/DetailsPage.css'
import TabArea from './Tabs';


const DetailsPage = () => {
  const data = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="detailsPageContainer">
      <Navbar />
      <div className='displayContainer'>
        <div className="sideProfile">
          <div className="profilePic">
            <img src={data[0].avatar_url} alt={data[0].login} />
            <h1> {data[0].name} </h1>
            <h2> {data[0].login} </h2>
          </div>
          <button className='follow'> Follow </button>
          <div className="details">
            <div className="followings">
              <h2><i className="fa-solid fa-users"></i> {data[0].followers} followers </h2>
              <h2><i className="fa-solid fa-circle"></i> {data[0].following} followers </h2>
            </div>
            <div className="professionalDetails">
              {data[0].company && <div className="extras"> <i class="fa-solid fa-building"></i> {data[0].company} </div>}
              {data[0].location && <div className="extras"> <i class="fa-solid fa-location-dot"></i> {data[0].location} </div>}
              {data[0].email && <div className="extras"> <i class="fa-solid fa-envelope"></i> {data[0].email} </div>}
              {data[0].blog && <div className="extras"> <i class="fa-solid fa-link"></i> {data[0].blog} </div>}
              {data[0].twitter_username && <div className="extras"> <i class="fa-brands fa-twitter"></i> {data[0].twitter_username} </div>}
            </div>
          </div>
        </div>
        <div className="detailsSide">
          <TabArea />
        </div>
      </div>
    </div>
  )
}

export default DetailsPage