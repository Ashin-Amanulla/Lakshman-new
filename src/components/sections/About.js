"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ScaleIcon,
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    number: "25+",
    label: "Years Experience",
    description: "Serving clients with dedication since 1999",
    icon: TrophyIcon,
  },
  {
    number: "1000+",
    label: "Cases Won",
    description: "Successful legal outcomes across practice areas",
    icon: CheckCircleIcon,
  },
  {
    number: "50+",
    label: "Legal Experts",
    description: "Experienced advocates and legal professionals",
    icon: UserGroupIcon,
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Track record of favorable case resolutions",
    icon: ScaleIcon,
  },
];

const achievements = [
  {
    year: "2023",
    title: "Best Law Firm Award",
    description:
      "Recognized for excellence in legal services by Kerala Bar Association",
  },
  {
    year: "2022",
    title: "Legal Innovation Award",
    description:
      "Honored for implementing modern legal practices and client service",
  },
  {
    year: "2021",
    title: "Community Service Recognition",
    description:
      "Acknowledged for pro bono work and legal awareness initiatives",
  },
];

function CountUpNumber({ target, duration = 2000, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseInt(target.replace(/[^0-9]/g, ""));

    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return <span>{target.includes("%") ? `${count}%` : `${count}+`}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section
      id="stats-section"
      className="section-padding bg-gradient-to-b from-white to-neutral-50"
      ref={ref}
    >
      <div className="container">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-h2 mb-6">Trusted by Thousands</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Our proven track record speaks for itself. With decades of
            experience and unwavering commitment to justice, we've built a
            reputation as Kerala's premier legal firm.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="card-hover text-center group"
            >
              <div className="card-body space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto group-hover:bg-primary-500 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    <CountUpNumber target={stat.number} inView={isInView} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-small text-neutral-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                  About SL Advocates
                </span>
                <h2 className="heading-h2">
                  Leading Legal Excellence in Kerala
                </h2>
              </div>

              <div className="space-y-4 text-body">
                <p>
                  Established in 1999, SL Advocates has grown to become one of
                  Kerala's most respected legal firms. Our commitment to
                  providing exceptional legal services with integrity and
                  expertise has earned us the trust of thousands of clients.
                </p>
                <p>
                  We specialize in a comprehensive range of legal services, from
                  complex civil litigation to corporate law, family matters, and
                  property transactions. Our team of seasoned legal
                  professionals brings decades of combined experience to every
                  case.
                </p>
                <p>
                  At SL Advocates, we believe that quality legal representation
                  should be accessible, transparent, and results-driven. We work
                  tirelessly to protect our clients' interests while maintaining
                  the highest standards of professional excellence.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Supreme Court Practice",
                "High Court Representation",
                "24/7 Legal Support",
                "Multilingual Services",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/team" className="btn-primary group">
                Meet Our Team
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <Image
                src="/images/asokha.webp"
                alt="SL Advocates Office"
                width={600}
                height={1000}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>

            {/* Achievements Timeline */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
