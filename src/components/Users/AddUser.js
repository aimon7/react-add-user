import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';

function AddUser(props) {
    const initialState = {
        name: '',
        age: ''
    };
    const [state, setState] = useState(initialState);

    function addUserHandler(event) {
        event.preventDefault();
        console.log(state);

        // setState(initialState);
    }

    function usernameChangeHandler(event) {
        setState(prevState => {
            return {
                ...prevState,
                name: event.target.value
            }
        });
    }

    function ageChangeHandler(event) {
        setState(prevState => {
            return {
                ...prevState,
                age: event.target.value
            }
        });
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type={`submit`}>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;
