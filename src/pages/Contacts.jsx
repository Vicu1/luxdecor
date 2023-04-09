const ContactsPage = () => {
    return (
        <>
            <section className="contacts">
                <h1 className="title">
                    Let's talk!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo eius. Culpa deserunt optio
                    quo non, adipisci repellat eveniet id?
                </p>
            </section>
            <section className="contacts-form">
                <form action="#">
                    <label htmlFor="nume">
                        <p>Name/ Surname</p>
                    </label>
                    <input id="nume" type="text" placeholder="insert name and surname" />
                    <label htmlFor="email">
                        <p>Email</p>
                    </label>
                    <input id="email" type="email" placeholder="insert your email" />
                    <label htmlFor="comment">
                        <p>Message</p>
                    </label>
                    <textarea id="comment" placeholder="insert the message"></textarea>
                    <div className="contacts-btn">
                        <button className="button form-btn" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default ContactsPage