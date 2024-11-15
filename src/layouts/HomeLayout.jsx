import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () =>{
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
        </div>
    )
};

export default HomeLayout;