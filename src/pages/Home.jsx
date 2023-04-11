import bg from '../assets/images/bg.jpg'
import BlackBtn from "../components/UI/BlackBtn.jsx";
const HomePage = () => {
    return (
        <section className="home">
            <img className={'home-bg'} src={bg} alt={'bg'}/>
            <div className={'container home-wrapper'}>
                <h1>
                    Site name
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
                <BlackBtn url={'/services'}>
                    See services
                </BlackBtn>
            </div>
        </section>
    )
}
export default HomePage;