import { useState, useRef } from "react";
import "./FaqSection.css";
import { motion } from "framer-motion";

const QUESTIONS = [
  {
    id: "questionOne",
    question: "Why Do I Even Need A Website?",
    answer:
      "In today’s digital world, not having a website is like not having a store front. Big brands like Nike and Apple wouldn’t invest millions if websites didn’t matter—they understand that having an online presence builds trust and credibility. Studies show that 75% of people judge a company’s credibility based on their website design. If you don’t have one, customers may think you’re not serious or professional. A website also gives you 24/7 visibility, allowing customers to find and learn about your products at any time, from anywhere. According to a recent survey, 63% of consumers expect companies to offer a website, and they’re more likely to buy from businesses that have one. Websites aren’t just about selling; they’re a key part of your marketing strategy, driving leads and engagement. Without one, you're missing out on opportunities to reach more customers and grow your brand. Simply put, a website is no longer optional—it’s essential for success.",
  },
  {
    id: "questionTwo",
    question: "How Or Where Are You Going To Build My Website?",
    answer:
      "Your Website Will Be Built 100% In HTML/CSS/JAVASCRIPT or In REACT Which Our developers Will Code For You Using Traditioanl Coding",
  },
  {
    id: "questionThree",
    question: "How long does it take?",
    answer:
      "The timeline depends on the project scope, but typically 10-14 Days",
  },
  {
    id: "questionFour",
    question: "Do I need a website if I already have social media?",
    answer:
      "Yes, having a website is still important even if you already have social media. While social media is a great way to engage with your audience and promote your brand, a website offers more control, credibility, and functionality. With a website, you have a central hub that showcases your products or services, provides detailed information about your business, and allows you to capture leads or make sales directly. Social media platforms can change their algorithms, limiting your reach or visibility, but your website remains under your control. Additionally, many customers still prefer to visit a website for more in-depth information and to make purchases, with 75% of users stating they are more likely to trust a business with a website. A website can also improve your SEO ranking, helping potential customers find you through search engines. In short, a website complements your social media presence and builds trust, which is crucial for growing your brand.",
  },
  {
    id: "questionFive",
    question: "How do I track the progress?",
    answer:
      "We provide regular updates through our Slack (Communication Platform)",
  },
  {
    id: "questionSix",
    question: "Can you help me with domain registration and hosting setup?",
    answer:
      "Yes, we can definitely help with domain registration and hosting setup. Our team can guide you through choosing the right domain name that aligns with your brand and business goals. We’ll also assist in registering the domain and securing the best hosting plan based on your website's needs.",
  },
];

export default function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState("");

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? "" : id);
  };

  return (
    <section className="faq-section" id="faqId">
      <div className="faq-headers-container">
        <motion.h2
          className="faq-header"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          FAQs
        </motion.h2>

        <motion.h4
          className="faq-subheader"
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h4>
      </div>
      <div className="faq-container">
        {QUESTIONS.map(({ id, question, answer }) => (
          <QuestionContainer
            key={id}
            question={question}
            answer={answer}
            isActive={activeQuestion === id}
            onClickFunction={() => toggleQuestion(id)}
          />
        ))}
      </div>
    </section>
  );
}

function QuestionContainer({ question, answer, isActive, onClickFunction }) {
  const contentRef = useRef(null);

  return (
    <motion.button
      className="question-answer-container"
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.2 }}
      onClick={onClickFunction} /* Attach the onClick handler here */
    >
      <div className="question">
        <h4 className="question-text">{question}</h4>
        <i className="material-icons plus-icon">
          {isActive ? "remove" : "add"}
        </i>
      </div>
      <div
        className="answer-wrapper"
        style={{
          height: isActive ? contentRef.current.scrollHeight : 0,
          transition: "height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p className="answer" ref={contentRef}>
          {answer}
        </p>
      </div>
    </motion.button>
  );
}
