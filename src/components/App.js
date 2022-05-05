import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    };

    addBurger = burger => {
        const burgers = {...this.state.burgers};
        burgers [`burgers${Date.now()}`] = burger;
        this.setState({burgers});
    };

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers});
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    };

    render() {
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Very Hot Burger"/>
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger 
                                key={key}
                                index={key}
                                addToOrder={this.addToOrder}
                                details={this.state.burgers[key]}
                            />;
                        })}
                    </ul>
                </div>
                <Order/>
                <MenuAdmin 
                addBurger={this.addBurger}
                loadSampleBurgers={this.loadSampleBurgers}
                />
            </div>
        )
    }
};

export default App;