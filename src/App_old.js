import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
    return <div><h1 > I like { name } < /h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} width='500' alt={name} />
    </div>;  }

const foodLike = [
    {
        id: 1,
        name: 'Kimchi',
        image: 'https://cdn.clien.net/web/api/file/F01/10527433/89c68868f3a57.PNG?w=780&h=30000&gif=true',
        rating: 5,
    },
    {
        id: 2,
        name: 'Samgyeopsal',
        image: 'https://cdn.clien.net/web/api/file/F01/10527489/89d6c6d7aa9b2.png?w=780&h=30000',
        rating: 4.9,
    }

];


function App() {
    return ( < div > {foodLike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
        </div> );
    }

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating : PropTypes.number,
};
    export default App;