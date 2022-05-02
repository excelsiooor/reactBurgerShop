import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
    render(){
        return (
                <div className="restaurant_select">
                <div className="restaurant_select_top">
                    <div className="restaurant_select_top-header, font-effect-outline">
                        Choise Restourant!
                    </div>
                    <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                    </div>
                </div>
                <div className="restaurant_select_bottom">
                    <ul>
                        {restaurants.map(restaurant=>{
                                    return <li key={restaurant.id}>
                                        {restaurant.title}
                                    </li>
                                })
                        }
                    </ul>
                </div>

                <button>sign in restorant</button>
            </div>
        )
    }
}

export default Landing;