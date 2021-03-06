import React from 'react';
import './UserResultCard.css';
import { withRouter } from 'react-router-dom'

function UserResultCard({ user, history }) {

    function goto(user){
        history.push(`/profile/${user}`)
    }

    return (
        <div className="userResultCard">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user profile" />
            <div className="userInfo">
                <h1>{user.name}</h1>
                <h2>@{user.username}</h2>
                <h2>{user.location}</h2>
            </div>

            <button className="btn btn-info" onClick={() => goto(user.userId)}>View Profile</button>

        </div>
    )
}

export default withRouter(UserResultCard)