import {contacts} from "../static/contacts.js";
import BlackBtn from "../components/UI/BlackBtn.jsx";
import contactBg from '../assets/images/contact-bg.jpg'
const ContactsPage = () => {
    return (
        <>
            <div className={'about'}>
                <div className={'about-bg'} />
                <h1 className={'container'}>Contacts</h1>
            </div>
            <section className="contacts-form">
                <div className={'container'}>
                    {/*<div className={'contacts-wrapper'}>*/}
                    {/*    <div className={'contact-details'}>*/}
                    {/*        {contacts.map((contact, index) =>*/}
                    {/*            <div key={index}>*/}
                    {/*                <img src={contact.icon} alt="icon" />*/}
                    {/*                <h3>{contact.title}</h3>*/}
                    {/*                <p>{contact.text}</p>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*    <form action="#">*/}
                    {/*        <label htmlFor="nume">*/}
                    {/*            <p>Name/ Surname</p>*/}
                    {/*        </label>*/}
                    {/*        <input id="nume" type="text" placeholder="insert name and surname" />*/}
                    {/*        <label htmlFor="email">*/}
                    {/*            <p>Email</p>*/}
                    {/*        </label>*/}
                    {/*        <input id="email" type="email" placeholder="insert your email" />*/}
                    {/*        <label htmlFor="comment">*/}
                    {/*            <p>Message</p>*/}
                    {/*        </label>*/}
                    {/*        <textarea id="comment" placeholder="insert the message"></textarea>*/}
                    {/*        <div className="contacts-btn">*/}
                    {/*            <BlackBtn>*/}
                    {/*                Submit*/}
                    {/*            </BlackBtn>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    <div className={'contacts-inner'}>
                        <div>
                            <h3>Drop a Message</h3>
                            <form action="#">
                                <input id="nume" type="text" placeholder="Name/ Surname" />
                                <input id="email" type="email" placeholder="Email" />
                                <textarea id="comment" placeholder="Message"></textarea>
                                <div className="contacts-btn">
                                    <BlackBtn>
                                        Submit
                                    </BlackBtn>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h3>Our Address</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita magnam neque reiciendis similique soluta, voluptatibus!</p>
                            <div className={'contacts-items'}>
                                {contacts.map((contact, index) =>
                                    <div style={{textAlign: 'center', display: 'flex', alignItems: 'flex-start'}} key={index}>
                                            <img src={contact.icon} alt="icon" />
                                        <div className={'contact-item'}>
                                            <h4>{contact.title}:</h4>
                                        <p>{contact.text}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10351.397784672383!2d5.82595904000069!3d49.56286381980249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eab6427e7e8251%3A0x23600db0f18ecbe7!2z0JDRgtGOLCA2NzkxINCe0LHQsNC90LYsINCR0LXQu9GM0LPQuNGP!5e0!3m2!1sru!2s!4v1681066015075!5m2!1sru!2s"
                        width="100%" height="400" style={{border: 'none', margin: '80px 0'}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </section>
        </>
    )
}
export default ContactsPage