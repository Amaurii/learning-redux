import React from 'react';
import Button from '@material-ui/core/Button';
import OutlinedButtons from '../../components/IconLabelButtons';


const Home = () => {
    return (
        <div id="page-home">
            <Button onClick={() => { alert('clicado') }}>Clique aqui</Button>

            <Button></Button>
        </div>
    );
};

export default Home;