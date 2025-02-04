import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import {client, urlFor} from "@/src/utils/configSanity"
import { useState, useEffect } from "react";

const Index = () => {
  const [projects, setProjects] = useState([])
  const [feedbacks , setFeedbacks] = useState([])
  const [news, setNews] = useState([])

  useEffect(()=>{
    const fetchProjects = async () => {
      const query = `*[_type == "project"]`
      try {
        const result = await client.fetch(query);
        console.log("projects", projects)
        setProjects(result);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects()
  }, [])

  useEffect(()=>{
    const fetchNews = async () => {
      const query = `*[_type == "news"]`
      try {
        const result = await client.fetch(query);
        console.log("news", news)
        setNews(result);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews()
  },[])

  useEffect(()=>{
    const fetchFeedbacks = async () => {
      const query = `*[_type == "feedback"]`
      try {
        const result = await client.fetch(query);
        console.log("feedbacks", feedbacks)
        setFeedbacks(result);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    }

    fetchFeedbacks()
    })

  return (
    <Layout header={3} footer={3}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg.png" className="waves one" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two" autoplay>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/irrigation1.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="experience-box-two position-absolute" style={{ 
                    top: '20px', 
                    right: '50px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '15px 25px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transform: 'scale(0.85)'
                  }}>
                      <h2 className="number" style={{ fontSize: '2.5rem', marginBottom: '5px' }}>
                        <Counter end={7} />+
                      </h2>
                      <h6 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                  </div>
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-left">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Drip, Sprinkler, Center Pivot irrigation system
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                       Irrigation system
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Reliable, Cost-effective design and user–friendly systems
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            Projects
                          </a>
                        </Link>
                      </div>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/bg/abebas1.png)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                <div className="experience-box-two position-absolute" style={{ 
                    top: '20px', 
                    right: '50px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '15px 25px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transform: 'scale(0.85)'
                  }}>
                      <h2 className="number" style={{ fontSize: '2.5rem', marginBottom: '5px' }}>
                        <Counter end={7} />+
                      </h2>
                      <h6 style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                  </div>
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                       Landscaping
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We Provide Beautiful Gardening &amp; Landscaping
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                       <div className="hero-button mb-30">
                              <Link href="/services" className="main-btn golden-btn mb-10">
                                Explore More
                              </Link>

                              <Link href="/projects" legacyBehavior>
                                <a className="main-btn filled-btn filled-white mb-10">
                                  Projects
                                </a>
                              </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  
                  What We Do For Irrigation
                </span>
                <h2>Irrigation systems and types we can install </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                NETAGRO employs a team of skilled engineers 
                with extensive experience in the study, design, and implementation of cutting-edge irrigation systems. 
                We offer expert guidance on the latest and most efficient irrigation practices,
                ensuring that our clients benefit from the most advanced solutions available in the industry today.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">
                    Learn More
                    <i className="far fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/drip_and_splinkler.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <h5 className="title">Drip &amp; sprinkler systems</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/Centre_pivot _lateral_move_systems.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <h5 className="title">Centre pivot &amp; Lateral move systems</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/automatic_irrigation.jpeg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <h5 className="title">Manual &amp; Automated systems</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/rainwater_harvesting.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <h5 className="title">Rain water harvesting, 
                    Tailings &amp; dust suppression</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">
        {/*====== About BG ======*/}
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/bg/abebas1.png)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                      
                      About NETAGRO
                    </span>
                    <h2>We Care Your Garden &amp; Landscaping</h2>
                  </div>
                  <p className="mb-45">
                  We bring a blend of expertise and creativity to every project, 
                  offering innovative designs and the right materials for optimal results. 
                  Our team excels in specialized installations, delivering solutions that set us apart from the competition.
                  </p>
                  <div className="about-inner-content d-flex justify-content-between">
                    <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          A Trusted Name in Gardening &amp; Green Space Design
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Leading Experts Delivering Excellence in the Sector
                        </li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="main-btn primary-btn">Learn More Us</a>
                      </Link>
                    </div>
                    <div className="experience-box-two">
                      <h2 className="number">
                        <Counter end={7} />+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  
                  Popular Services
                </span>
                <h2>We Care For Your Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                      <a>Drip and Sprinkler Irrigation System</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/drip_and_splinkler.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".35s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/center_pivot_irrigation">
                      <a>Center pivot irrigation system</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/center_pivot_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/Centre_pivot _lateral_move_systems.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/family_drip_irrigation">
                      <a>Family drip Irrigation System (FDS)</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/family_drip_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/fds.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/landscaping">
                      <a>Landscaping</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/landscaping">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/hydroseeding_rehabilitation">
                      <a>Hydroseeding / rehabilitation</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/hydroseeding_rehabilitation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/rehabillitation.jpeg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".45s"
              >
                <div className="service-info">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Equipments supply and import</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/products.png"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-section">
        <div className="container">
          {/*====== CTA Wrapper ======*/}
          <div className="cta-wrapper pt-60 border-top-1">
            <div className="row align-items-center">
              <div className="col-lg-9">
                {/*====== CTA Content Box ======*/}
                <div className="cta-content-box d-flex align-items-center mb-40 wow fadeInLeft">
                  <h2>Looking For Some of Our Projects?</h2>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== CTA Button ======*/}
                <div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/projects">
                    <a className="main-btn golden-btn">Explore More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="team-section pt-55 pb-30">
        <div className="container">
          <div className="row">
            {projects.slice(0,2).map((project, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 item cat-1 cat-4">
                {/*====== Gallery Item ======*/}
                <div className="single-project-item-three mb-30 wow fadeInDown">
                  <div className="project-img">
                    {project.images && project.images.length > 0 && (
                      <img src={urlFor(project.images[0]).url()} alt={project.title} 
                       height={300} 
                      />
                    )}
                    <div className="hover-overlay">
                      <Link legacyBehavior href={`projects/${project.projectName}`}>
                        <a className="icon-btn">
                          <i className="fas fa-arrow-right" />
                        </a>
                      </Link>
                      <div className="hover-content text-white">
                        <h4 className="title">{project.projectName}</h4>
                        <p> <a href={`projects/${project.projectName}`}>{project.projectName}</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
            
            <div className="col-lg-3 col-sm-6">
              {/*====== Experience Box ======*/}
              <div
                className="experience-box mt-25 mb-40 text-center wow fadeInUp"
                data-wow-delay=".35s"
              >
                <h2 className="fill-text">15+</h2>
                <h4>Successful projects</h4>
                <Link legacyBehavior href="/projects">
                  <a className="btn-link">
                    View All projects <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  
                  Testimonials
                </span>
                <h2>Global Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            {feedbacks.map((feedback, index) => (
              <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>{feedback.title}</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  {feedback.message}
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    
                    <img
                      src={
                        feedback.gender === "Male" ?
                        "assets/images/testimonial/male-avator.png" 
                        : feedback.gender === "Female" 
                        ? "assets/images/testimonial/female-avator.png"
                        : "assets/images/testimonial/thumb-2.jpg"
                      }
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">{feedback.author}</h6>
                    <p className="position">{feedback.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Blog Section  ======*/}
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  
                  News &amp; Events
                </span>
                <h2>Read Latest News &amp; Events</h2>
              </div>
            </div>
          </div>
              <div className="row justify-content-center">
              {news.slice(0,3).map((news, index) => (
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div
                    className="single-blog-post-two mb-40 wow wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="entry-content">
                      <div className="post-meta">
                        <span className="date">
                          <Link legacyBehavior href={`/news/${news.title}`}>
                            <a>{news.date}</a>
                          </Link>
                        </span>
                      </div>
                      <h4 className="entry-title">
                        <Link legacyBehavior href={`/news/${news.title}`}>
                          <a>{news.title}</a>
                        </Link>
                      </h4>
                      <div className="author">
                        <img
                          src="assets/images/logo/netagro-logo2.png"
                          alt="Author Image"
                        />
                        <h6>
                          <span>By</span>
                          <Link legacyBehavior href={`/news/${news.title}`}>
                            <a>{news.author}</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="post-thumbnail">
                      <img
                        src={urlFor(news.coverImage).url()} 
                        alt={news.title}
                        height={260}
                      />
                    </div>
                  </div>
                </div>
              ))}
              </div>
        </div>
      </section>
      {/*====== End Blog Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index;
