import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const initialState = {
        users: []
    }
    const [state, setState] = useState(initialState);

    function usersHandler(user) {
        setState(prevState => {
            return {
                ...prevState,
                users: [...prevState.users, user]
            }
        })
    }

    return (
        <Fragment>
            <AddUser onAddUser={usersHandler} />
            <UsersList users={state.users}/>
        </Fragment>
    );
}

export default App;
