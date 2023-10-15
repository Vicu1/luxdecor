import home2 from '../assets/images/home2.jpg'
const WhyWeBest = () => {
    return (
        <section className={'whywebest container'}>
            <img src={home2} alt="home"/>
                <div>
                    <h1>Why We're Better</h1>
                    <p>
                        Anytime you can switch to a higher web hosting account without losing money, without changing the data, without website intervention.
                    </p>
                    <ul>
                        <li>Free Website Migration from another host</li>
                        <li>Protection from DDOS attacks, Malware Injection</li>
                        <li>Control panel</li>
                        <li>Multiple PHP versions</li>
                    </ul>
                </div>
        </section>
    )
}
export default WhyWeBest
