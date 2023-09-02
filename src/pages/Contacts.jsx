import { contacts } from '../static/contacts.js';
import BlackBtn from '../components/UI/BlackBtn.jsx';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';
import { useForm } from 'react-hook-form';

const ContactsPage = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const handleClose = () => {
    setOpen(false);
  };
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_m5aj7ih',
        'template_yzcfvfs',
        formRef.current,
        '5pLAJHgJbYrzRJQey'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location = '/contacts'
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1
          className={'container'}
          data-aos="zoom-in"
        >
          Contacts
        </h1>
      </div>
      <section className="contacts-form">
        <div className={'container'}>
          <div className={'contacts-inner'}>
            <div data-aos="fade-right">
              <h3>Drop a Message</h3>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(sendEmail)}
              >
                <div style={{ position: 'relative' }}>
                  <input
                    name={'from_name'}
                    type="text"
                    placeholder="Name / Surname"
                  />
                  {/*{form.formState.errors?.from_name && (*/}
                  {/*  <Box*/}
                  {/*    sx={{*/}
                  {/*      position: 'absolute',*/}
                  {/*      bottom: 0,*/}
                  {/*      left: '5px',*/}
                  {/*      color: 'red',*/}
                  {/*    }}*/}
                  {/*  >*/}
                  {/*    {form.formState?.errors?.from_name?.message}*/}
                  {/*  </Box>*/}
                  {/*)}*/}
                </div>
                <input
                  type="email"
                  name={'from_email'}
                  placeholder="Email"
                />
                <textarea
                  name={'message'}
                  placeholder="Message"
                ></textarea>
                <div className="contacts-btn">
                  <BlackBtn>Submit</BlackBtn>
                </div>
              </form>
            </div>
            <div data-aos="fade-left">
              <h3>Our Address</h3>
              <p>
                Feel free to visit us at our office or reach out through the provided contact information. We look forward to assisting you with your construction needs.
              </p>
              <div className={'contacts-items'}>
                {contacts.map((contact, index) => (
                  <div
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                    key={index}
                  >
                    <img
                      src={contact.icon}
                      alt="icon"
                    />
                    <div className={'contact-item'}>
                      <h4>{contact.title}:</h4>
                      {contact.title !== 'HOURS' &&
                          <a href={contact.url} target={contact.title === 'ADDRESS' ? '_blank' : ''}>
                            {contact.text}
                          </a>
                      }
                      {contact.title === 'HOURS' && <p>{contact.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <iframe
              className={'map'}
              data-aos="fade-up"
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14960.353365365034!2d5.339694576742728!3d49.91093382165617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c029f3ec4f6fb7%3A0xb5ffd626245f5f63!2zUnVlIGRlIExpYmluIDIzLCA2ODAwIExpYnJhbW9udC1DaGV2aWdueSwg0JHQtdC70YzQs9C40Y8!5e0!3m2!1sru!2s!4v1693648439534!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully send message!
        </Alert>
      </Snackbar>
    </>
  );
};
export default ContactsPage;
