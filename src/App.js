import React from 'react';
import { Admin, Resource, Login } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import { createMuiTheme } from '@material-ui/core/styles';


const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/random/1600x900/daily"
    />
);

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin loginPage={MyLoginPage}
           theme={theme}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
