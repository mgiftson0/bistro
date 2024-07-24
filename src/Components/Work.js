import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title:"Pick Meals",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio nulla, aliquam doloremque quis."
        },
        {
            image:ChooseMeals,
            title:"Choose How Often",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio nulla, aliquam doloremque."
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio nulla, aliquam doloremque quis neque quidem dignissimos."
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works?</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate rem maxime earum ut voluptas soluta explicabo ex, facilis sunt provident! Veritatis, unde.
            </p>
        </div>
        <div className="work-section-bottom">
    {workInfoData.map((data, index) => (
        <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
        </div>
    ))}
</div>
    </div>
  )
}

export default Work;









