import home1 from '../assets/images/home1.jpg'
const WhatGet = () => {
    return (
        <section className={'whatget container'}>
                <div>
                    <h1>What You Get</h1>
                    <p>
                        A web site hosting account is chosen depending on resources consumed and approximate traffic for the coming months. Our hosting accounts can be extended (upgraded) at any time.
                    </p>
                    <ul>
                        <li>Professional backup</li>
                        <li>SSL support</li>
                        <li>Guaranteed Uptime</li>
                        <li>Auto installation and CMS Script</li>
                    </ul>
                </div>
                <img src={home1} alt="home"/>
        </section>
    )
}
export default WhatGet
