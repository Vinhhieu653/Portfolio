// src/components/Contact.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const resetForm = () => {
        setForm({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation checks
        if (form.name.length < 5) {
            toast.error('Name must be at least 5 characters long');
            return;
        }
        if (!validateEmail(form.email)) {
            toast.error('Please enter a valid email address');
            return;
        }
        if (form.phone.length < 10) {
            toast.error('Phone number must be at least 10 digits long');
            return;
        }
        if (form.message.length < 3) {
            toast.error('Message must be at least 3 characters long');
            return;
        }

        // Send email using emailjs
        const templateParams = {
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message
        };

        emailjs.send('service_j7hehay', 'template_1mvy0tq', templateParams, 's3sCkmROIiETt8ycx')
            .then(() => {
                toast.success('Email sent successfully!');
                resetForm();
            }, (error) => {
                toast.error('Failed to send email: ' + error.text);
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h2>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 p-4">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={form.name}
                            placeholder="Full Name"
                            className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                            placeholder="Email Address"
                            className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={form.phone}
                            placeholder="Phone Number"
                            className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            required
                        />

                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            placeholder="Your Message"
                            className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                            rows="4"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full p-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="md:w-1/3 p-4 bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">My Contact Info</h3>

                    <div className="flex items-center mb-4 text-gray-400">
                        <i className="fas fa-envelope text-blue-500 mr-2 text-xl"></i>
                        <p className="text-gray-300">duongvinhhieu652003@gmail.com</p>
                    </div>

                    <div className="flex items-center mb-4 text-gray-400">
                        <i className="fas fa-phone-alt text-blue-500 mr-2 text-lg"></i>
                        <p className="text-gray-300">+84 899 793 903</p>
                    </div>

                    <div className="flex items-center text-gray-400">
                        <i className="fas fa-map-marker-alt text-blue-500 mr-2 text-xl"></i>
                        <p className="text-gray-300">Vinhomes Grand Park, Long Binh Ward, Thu Duc City, Ho Chi Minh City</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
