import { object } from 'prop-types';
import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends React.Component {
    render() {
        return (
            <div className='menu-admin'>
                <h2>Menu Management</h2>
                {Object.keys(this.props.burgers).map(key =>{
                    return <EditBurgerForm
                    deleteBurger={this.props.deleteBurger}
                    key={key}
                    index ={key}
                    burger={this.props.burgers[key]}
                    updateBurger={this.props.updateBurger}
                    />;
                })}
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.loadSampleBurgers}>
                    Add Burger
                </button>
            </div>
        )
    }
}

export default MenuAdmin;