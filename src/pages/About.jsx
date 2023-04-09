import about from '../assets/images/about/about.jpeg'
import webDesign from '../assets/images/about/web-design.png'
import {abilities} from "../static/abilities.js";
import aboutBg from '../assets/images/about-bg.jpg'
const AboutPage = () => {
    return (
        <>
            <div className={'about'}>
                <div className={'about-bg'} />
                <h1>About</h1>
            </div>

            <section className={'container'}>
                <div className="about-content">
                    <img className="img-about" src={about} alt="about" />
                        <div className="about-content-inner">
                            <h2 className="title">
                                About me
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, mollitia. Exercitationem
                                error quod enim, consectetur blanditiis placeat pariatur, alias minus quaerat corrupti
                                debitis nisi ea, adipisci atque. Aperiam blanditiis aliquam mollitia molestias est corporis
                                nostrum et ad delectus libero, earum corrupti fugit debitis velit accusantium sed fugiat
                                sequi adipisci suscipit?
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maxime totam sit temporibus
                                enim optio soluta numquam earum facilis. Eius, ullam hic eos sit minima voluptate quia
                                voluptatum et blanditiis autem deleniti nemo perspiciatis maiores tempore similique atque
                                necessitatibus ex.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit maxime totam sit temporibus
                                enim optio soluta numquam earum facilis. Eius, ullam hic eos sit minima voluptate quia
                                voluptatum et blanditiis autem deleniti nemo perspiciatis maiores tempore similique atque
                                necessitatibus ex.
                            </p>
                        </div>
                </div>
            </section>
            <section className="knowladge">
                <div className={'container'}>
                    <h2 className="title">
                        My abilities
                    </h2>
                    <div className="knowladge-inner">
                        {abilities.map((ability, index) =>
                            <div key={index} className="knowladge-inner-card">
                                <div className={'knowladge-title'}>
                                    <img className="knowladge-icon" src={ability.image} alt="img" />
                                    <h3>
                                        {ability.title}
                                    </h3>
                                </div>
                                <p>
                                    {ability.text}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutPage