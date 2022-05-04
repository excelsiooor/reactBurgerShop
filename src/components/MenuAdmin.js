import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component {
    render() {
        return (
            <div className='menu-admin'>
                <h2>Menu Management</h2>
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.loadSampleBurgers}>
                    Add Burger
                    </button>
            </div>
        )
    }
}

export default MenuAdmin;