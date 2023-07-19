import { Button } from '@mui/material';


const Dashboard = () => {

    return (
        <>
        <h1>Martins dashboard, Vite + React </h1><Button color="secondary">Secondary</Button><Button variant="contained" color="success">
            success btn
        </Button><Button variant="outlined" color="error">
                Error
            </Button><div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div></>
      );
}

export default Dashboard;