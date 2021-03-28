import React from 'react'
import Rating from '../Rating/Rating'

const NavBar = ({setRatingSearch , ratingSearch , name , setName}) => {
    return (
        <div>
            <input type="text" placeholder ="search "  value={name} onChange={(e)=>setName(e.target.value)} />
            <Rating setRate={setRatingSearch} rate={ratingSearch} />
            
        </div>
    )
}

export default NavBar
