import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { sendMessage } from "@/src/utils/api";


const Contact = () => {
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
  )
  const [status, setStatus] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const result = await sendMessage(form);
    if (result.success) {
      setForm({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus(result.message);
    }
  }

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />

      {/*====== Start Contact Info section ======*/}
      <section className="contact-info-section pt-100">
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="../../assets/images/icon/icon-1.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <h6>Bole Sub city, Near Adey Ababa Stadium, Addis Ababa, Ethiopia </h6><hr />
                    <h6>Meshek 83 Kfar Yehoshua 3658200, Israel</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <h6>
                      <a href="mailto:info@netagroengineering.com">info@netagroengineering.com</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Phone No</span>
                    <h6>
                      <a href="tel:+251118627424"> Tel : +251118627424</a> <hr />
                      <a href="tel:+251118627424"> Mobile : +251118627424</a> <hr />
                      <a href="tel:+251118627424"> Mobile : +251118627424</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Info section ======*/}
      {/*====== Start Contact section ======*/}
      <section className="contact-section pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*====== Section-title ======*/}
              <div className="section-title wow fadeInRight mb-50">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Contact Us
                </span>
                <h2>Ready to Work With Us</h2>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Map Box ===*/}
                <div className="map-box wow fadeInLeft mb-50">
                  <iframe src="https://maps.google.com/maps?q=Yoki%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Contact Form Wrapper ======*/}
                <div className="contact-form-wrapper mb-50 wow fadeInRight">
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                  >
                    <div className="form_group">
                      <label>
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-phone-plus" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone Number"
                        name="number"
                        value={form.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-map-marker-exclamation" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-pen-fancy" />
                      </label>
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact section ======*/}
      {/*====== Start Info Section ======*/}
      <section className="info-section pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-one mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Need Any Consultations to Build Gardening ?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-two mb-40 wow fadeInDown">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Get Every Single Update Or 24/7 Support
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Support &amp; Join</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-three mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-2.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Need A Career ?</span>
                  <h4 className="title">
                    Need Any Jobs Or Work With a Team Member?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Contact;
