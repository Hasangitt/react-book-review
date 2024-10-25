import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Nav from "../NavBar/Nav";


const Home = () => {
    return (
        <div className="bg-white">
          <Nav></Nav>
          <Banner></Banner>
          <Books></Books>
        </div>
    );
};

export default Home;