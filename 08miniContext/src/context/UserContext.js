import React from "react";

const UserContext = React.createContext()    // firstly we created a context

export default UserContext;

/*
<UserContext>

<Login />
<Card />
    <Dashboard/>
</ Card>

</UserContext>
so basically this UserContext is a context Provider and it provides access to all the components wrappped inside it to the global variable
*/