import React, { useContext } from 'react';
import { Context } from '..';
import UserItem from './UserItem';
import { observer } from 'mobx-react-lite';

const UserList = observer(() => {
    const { user } = useContext(Context);

    return (
        <div className="main-content">
        <h3>Юзеры</h3>            
        {user.userAuth.map(userItem =>
                <UserItem key={userItem.id} user={userItem} />
            )}
        </div>
    );
});

export default UserList;
