import {Link} from "react-router-dom";
import BlackBtn from "./UI/BlackBtn.jsx";

const Plans = () => {
    const plans = [{
        title: 'Web Hosting',
        text: "Benefit from our powerful and high-speed servers that guarantee lightning-fast loading times and seamless website performance, providing an optimal experience for your visitors.",
        price: "3 €/month",
        url: '/web-hosting'
    },
    {
        title: 'VPS Hosting',
        text: "Our VPS hosting solutions are designed to provide you with the control, security, and performance necessary to take your online presence to new heights.",
        price: "19 €/month",
        url: '/vps-hosting'
    },
    {
        title: 'Dedicated Servers',
        text: "With our dedicated servers, you can experience the ultimate level of control, security, and customization for your critical applications and data.",
        price: "59 €/month",
        url: '/dedicated-servers'
    },
    ]
    return (
        <section className={'Plans container'}>
            <h1>Our plans</h1>
            <div className={'plans-wrapper'}>
                {plans.map((item, index) =>
                    <div className={'plan'} key={index}>
                        <div className={'plan-title'}>
                            <h2>{item.title}</h2>
                        </div>
                        <div className={'plan-content'}>
                            <p>
                                {item.text}
                            </p>
                        </div>
                        <div className={'plan-link'}>
                            <div className={'plan-price'}>
                                <div>
                                    from
                                </div>
                                <span>
                                    {item.price}
                                </span>
                            </div>
                                <BlackBtn url={item.url}>
                                    View details
                                </BlackBtn>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Plans
