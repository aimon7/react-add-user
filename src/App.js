import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
    const initialState = {
        users: []
    }
    const [state, setState] = useState(initialState);

    function usersHandler() {

    }

    return (
        <div>
            <AddUser/>
            <UsersList users={state.users}/>
        </div>
    );
}

export default App;
