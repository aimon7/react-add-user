import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const initialState = {
        error: null
    };
    const [state, setState] = useState(initialState);

    function addUserHandler(event) {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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

        if (+enteredAge < 1) {
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

        // console.log(state);
        props.onAddUser({
            name: enteredName,
            age: enteredAge
        });
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
            {state.error &&
            <ErrorModal title={state.error.title} message={state.error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" ref={nameInputRef} type="text"/>
                    <label htmlFor="age">Age</label>
                    <input id="age" ref={ageInputRef} type="number"/>
                    <Button type={`submit`}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
