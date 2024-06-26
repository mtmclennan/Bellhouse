import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import logo from "../../public/assets/BellhouseLogo-text.png";
import { useRouter } from "next/router";

import LayoutHome from "@/components/layoutsWeb/layoutHome";
import ServiceCard from "@/components/UI/ServiceCard";

const HomePage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>BellHouse</title>
        <meta name="description" content="BellHouse Excavating" />
      </Head>
      <LayoutHome>
        <div className="hero__container">
          <section className="hero">
            <div className="hero-title">
              <h1>Excavating Excellence Since 1982</h1>
              <div className="hero-logo__mobile">
                <Image
                  src={logo}
                  alt="Bellhouse Excavating"
                  width={375}
                  height={300}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <h3 className="hero-desktop">
                Your Trusted Partner for Superior Results
              </h3>
              <p>
                With our line up of earth moving equipment, We can help with
                your project. Lets dig!
              </p>

              <div className="hero__button-container">
                <button id="cta-btn" onClick={() => router.push("/contact")}>
                  Contact Us
                </button>
                <button onClick={() => router.push("/services")}>
                  Services
                </button>
              </div>
            </div>
            {/* <div className="hero-logo">
              <div className="hero-logo__image-container">
                <Image src={logo} alt="Excavator" layout="responsive" />
              </div>
            </div> */}
          </section>
        </div>
        <section className="services">
          <ul>
            <li>
              <Image
                src={"/assets/gallery1.jpg"}
                alt={"bucket of dirt"}
                width={650}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
            <li>
              <Image
                src={"/assets/gallery2.jpg"}
                alt={"bucket of dirt"}
                width={650}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
            <li>
              <Image
                src={"/assets/gallery3.jpg"}
                alt={"bucket of dirt"}
                width={650}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
            <li>
              <Image
                src={"/assets/gallery4.jpg"}
                alt={"bucket of dirt"}
                width={650}
                height={650}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </li>
          </ul>
          {/* <h2>Our Services</h2> */}

          {/* <ul>
            <ServiceCard
              heading="FOUNDATIONS"
              image="/assets/foundation.jpg"
              link="/trucking"
              text="Your Expert in Foundation and Backfilling Services! "
            />
            <ServiceCard
              heading="TRUCKING"
              link="/trucking"
              image="/assets/trucking.jpg"
              text="From Dump trucks to equipment floating, we can help"
            />
            <ServiceCard
              heading="AGGREGATES"
              link="/trucking"
              image="/assets/aggregates.jpg"
              text="Your Trusted Aggregates Delivery Partner!"
            />
            <ServiceCard
              heading="DOZER"
              link="/trucking"
              image="/assets/IMG_0889[2382].jpg"
              text="From Dump trucks to equipment floating, we can help"
            />
            <ServiceCard
              heading="EXCAVATOR"
              image="/assets/hero.jpg"
              link="/trucking"
              text="From Dump trucks to equipment floating, we can help"
            />
            <ServiceCard
              heading="ROCK TRUCK"
              image="/assets/8420228339_78691eb78c_b.jpg"
              link="/offroad"
              text="From Dump trucks to equipment floating, we can help"
            />
            <ServiceCard
              heading="SEPTIC SYSTEMS"
              link="/trucking"
              image="/assets/Septic_tank_Bolduc.jpg"
              text="From Dump trucks to equipment floating, we can help"
            />
            <ServiceCard
              heading="FOUNDATIONS"
              image="/assets/iStock_996232320-1-scaled.jpg.optimal.jpg"
              link="/trucking"
              text="From Dump trucks to equipment floating, we can help"
            />
          </ul> */}
        </section>

        <section className="reviews">
          <h3>Serving Brant County and surrounding areas</h3>
          {/* <div className="review-image__container">
            <Image src={pinevest} alt="PineVest Homes" layout="responsive" />
          </div>
          <div className="review-image__container">
            <Image
              src={navacon}
              alt="PineVest Homes"
              layout="responsive"
              width={30}
              height={15}
            />
          </div> */}
        </section>
        <section className="why">
          <h2>WHY CHOOSE US?</h2>
          <div className="why__container">
            <div className="why-item">
              <h3>EXPERTISE</h3>
              <p>
                Our team has years of experience in the excavation industry and
                has worked on a wide range of projects. We have the knowledge
                and expertise to handle any project, no matter how complex.
              </p>
            </div>
            <div className="why-item">
              <h3>EQUIPMENT</h3>
              <p>
                We use the latest equipment and technology to ensure that every
                project is completed to the highest standards. Our equipment is
                regularly serviced and maintained to ensure that it is in top
                working order.
              </p>
            </div>
            <div className="why-item">
              <h3>SAFETY</h3>
              <p>
                Safety is our top priority, and we take every precaution to
                ensure that our staff and customers are safe on the job site. We
                provide regular safety training to our staff and use the latest
                safety equipment and procedures to minimize the risk of
                accidents.
              </p>
            </div>
            <div className="why-item">
              <h3>CUSTOMER SERVICE</h3>
              <p>
                We believe that good customer service is key to building strong
                relationships with our clients. We take the time to listen to
                our customers needs and concerns and work with them to develop a
                solution that meets their specific requirements.
              </p>
            </div>
            <div className="why-item">
              <h3>QUALITY WORK</h3>
              <p>
                We take pride in the quality of our work and strive to exceed
                our customers expectations. We pay attention to every detail,
                from site preparation to final cleanup, to ensure that the
                project is completed to the highest standards.
              </p>
            </div>
          </div>
        </section>
        <section className="last-call">
          <div>
            <h2>Lets get started on your next project</h2>
            <button id="cta-btn" onClick={() => router.push("/contact")}>
              Contact Us
            </button>
          </div>
        </section>
      </LayoutHome>
    </Fragment>
  );
};

export default HomePage;
