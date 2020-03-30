import React, {useState} from 'react';

const UserContext = React.createContext([{}, () => {}]);

function UserContextProvider(props) {
    let userCookie = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(userCookie ? userCookie : 
                                        {id: 0,
                                         first_name: "Default",
                                         last_name: "Default",
                                         type: ""});

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider};