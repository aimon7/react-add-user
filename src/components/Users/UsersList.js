import classes from './UsersList.module.css';
import Card from '../UI/Card';

function UsersList(props) {
    const users = props.users.map((user, index) => {
        return (
            <li key={index}>
                {user.name} ({user.age} years old)
            </li>
        );
    });

    return (
        <Card className={classes.users}>
            <ul>
                {users}
            </ul>
        </Card>
    )
}

export default UsersList;
