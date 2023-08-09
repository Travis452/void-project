import ProjectList from '../components/ProjectList.js';
import Header from '../components/Header.js';
const Home = () => {
    return (
        <div>
            <Header />
            <div className='home-container'>
                <ProjectList />
            </div>
        </div>
    );
};


export default Home;