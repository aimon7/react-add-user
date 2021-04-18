import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
    const initialState = {
        name: '',
        age: '',
        error: null
    };
    const [state, setState] = useState(initialState);

    function addUserHandler(event) {
        event.preventDefault();
        if (state.name.trim().length === 0 || state.age.trim().length === 0) {
            setState(prevState => {
                return {
                    ...prevState,
                    error: {
                        title: 'Invalid input',
                        message: 'Please enter a valid name and age (non-empty values)'
                    }
                }
            })
            return;
        }

        if (+state.age < 1) {
            setState(prevState => {
                return {
                    ...prevState,
                    error: {
                        title: 'Invalid age',
                        message: 'Please enter a valid age (> 0)'
                    }
                }
            })
            return;
        }

        console.log(state);
        props.onAddUser(state);
        setState(initialState);
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

    function errorHandler() {
        setState(prevState => {
            return {
                ...prevState,
                error: null
            }
        })
    }

    return (
        <Wrapper>
            {state.error && <ErrorModal title={state.error.title} message={state.error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={state.name} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={state.age} onChange={ageChangeHandler}/>
                    <Button type={`submit`}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
