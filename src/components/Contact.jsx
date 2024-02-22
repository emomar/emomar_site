import { useState } from "react";
import { FaLocationDot, FaPhoneVolume, FaRegClock } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-[#23153C] overflow-hidden" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div
            data-aos="zoom-out-down"
            data-oas-duration="600"
            data-aos-delay="600"
            className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12"
          >
            <p className="text-base font-semibold uppercase tracking-wide text-secondary/70">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-primary  text-3xl sm:text-5xl">
              Entrer en Contact
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p
                data-aos="zoom-in-down"
                data-oas-duration="600"
                data-aos-delay="600"
                className="mt-3 mb-12 text-center sm:text-center text-sm sm:text-base md:text-lg text-white"
              >
                EMOMAR offre des services de qualité en génie électrique,
                climatique et sécurité, guidé par Modibo Mariko pour fournir des
                solutions adaptées et un partenariat solide grâce à une équipe
                expérimentée.
              </p>
              <ul className="mb-6 md:mb-0">
                <li
                  data-aos="fade-down-right"
                  data-oas-duration="600"
                  data-aos-delay="600"
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <FaLocationDot size={24} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-primary">
                      Notre Adresse
                    </h3>
                    <p className="text-gray-100">
                      Baco Djicoroni ACI, Golf, R. 731, Lot. 3717
                    </p>
                    <p className="text-gray-100">Bamako, Mali</p>
                  </div>
                </li>
                <li
                  data-aos="zoom-down-left"
                  data-oas-duration="600"
                  data-aos-delay="600"
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <FaPhoneVolume size={24} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-primary">
                      Contact
                    </h3>
                    <p className="text-gray-100">Mobile: +223 20 28 25 23</p>
                    <p className="text-gray-100">E-Mail: emomar@emomar.net</p>
                  </div>
                </li>
                <li
                  data-aos="zoom-in-down"
                  data-oas-duration="600"
                  data-aos-delay="600"
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <FaRegClock size={24} />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-primary">
                      Horaires de travail
                    </h3>
                    <p className="text-gray-100">
                      Lundi - Vendredi: 08:00 - 18:00
                    </p>
                    <p className="text-gray-100">
                      Saturday - Sunday: 08:00 - 16:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in-down"
              data-oas-duration="600"
              data-aos-delay="600"
              className="card h-fit max-w-6xl p-5 md:p-12"
              id="form"
            >
              <h2 className="mb-4 text-2xl font-bold text-secondary">
                Nous ecrire directement
              </h2>
              <form id="contactForm" onSubmit={handleSubmission}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        autoComplete="true"
                        placeholder="Votre nom"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Votre adresse mail"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleInputChange}
                      value={formData.message}
                      cols="30"
                      rows="5"
                      placeholder="Votre message"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
