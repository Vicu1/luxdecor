import about from '../assets/images/about/about.jpeg'
import webDesign from '../assets/images/about/web-design.png'
const AboutPage = () => {
    return (
        <>
            <section>
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
                            <a className="button" href="">
                                More about me
                            </a>
                        </div>
                </div>
            </section>
            <section className="knowladge">
                <h2 className="title">
                    My abilities
                </h2>
                <div className="knowladge-inner">
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                            <h3>
                                Responsitive design
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                                fugiat porro quibusdam saepe magnam, architecto ex sint?
                            </p>
                    </div>
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                            <h3>
                                HTML & CSS
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                                fugiat porro quibusdam saepe magnam, architecto ex sint?
                            </p>
                    </div>
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                            <h3>
                                JavaScript
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                                fugiat porro quibusdam saepe magnam, architecto ex sint?
                            </p>
                    </div>
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                            <h3>
                                Comunication
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                                fugiat porro quibusdam saepe magnam, architecto ex sint?
                            </p>
                    </div>
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                            <h3>
                                Feel Colors
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                                fugiat porro quibusdam saepe magnam, architecto ex sint?
                            </p>
                    </div>
                    <div className="knowladge-inner-card">
                        <img className="knowladge-icon" src={webDesign} alt="img" />
                        <h3>
                            Different systems
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id voluptate tenetur
                            fugiat porro quibusdam saepe magnam, architecto ex sint?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutPage