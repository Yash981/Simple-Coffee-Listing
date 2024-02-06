// import React from 'react'
import star from '../public/assets/star_fill.svg'
import EmptyStar from '../public/assets/Star.svg'
import PropTypes from 'prop-types';

const CoffeeListingComponent = ({ coffee }) => {
    // console.log({coffee})
    const { name, image, price, rating, votes, popular, available } = coffee
    return (
        <>
            <div className="">
                <div className="Image relative">
                    {popular && <div className="popular absolute top-2 left-2 w-fit bg-[#F6C768] px-2 py-1 rounded-2xl text-[0.7rem]">Popular</div>}
                    <img src={image} alt="coffee" className=' rounded-xl'/>
                </div>
                <div className="text my-5 mb-0">
                    <div className="title flex justify-between">
                        <h3 className='text-[#FEF7EE] text-lg  font-semibold'>{name}</h3>
                        <p className='bg-[#BEE3CC] px-2 py-1 rounded-lg'>{price}</p>
                    </div>
                    <div className="available flex justify-between m-2">
                    <div className="rating flex gap-1">
                        {rating !== null ? (
                            <>
                        <img src={star} alt="star" />
                        <p className='text-[#FEF7EE]'>{rating}</p>
                        <p className='text-[#6F757C]'>({votes} votes)</p>
                        </>):(<>
                        <img src={EmptyStar} alt="Empty star" />
                        <p className='text-[#6F757C]'>No rating</p></>)}
                    </div>
                    
                        {!available && <p className='text-[#ED735D]'>Sold out</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoffeeListingComponent

CoffeeListingComponent.propTypes = {
    coffee: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
      popular: PropTypes.bool.isRequired,
      available: PropTypes.bool.isRequired,
    }).isRequired,
  };