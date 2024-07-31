import { useState } from "react";

const FaqPage = () => {
  const [isOpen, setIsOpen] = useState(null);

  const faqData = [
    {
      question: "What is your question",
      answer:
        "what is what was was Lorem ipsum dolor sit amet consectetur adipisicing elidebitis fuga rerum aspernatur quidem ut eveniet numquam architerror ullamthat eteg the waga tegr ea  gerea wahjj euggcg",
    },
    {
      question: "What is your question",
      answer:
        "what is what was Lorem ipsum dolor sit amet consectetur adipisicing elidebitis fuga rerum aspernatur quidem ut eveniet numquam architerror ullamwas that eteg the waga tegr ea  gerea wahjj euggcg",
    },
    {
      question: "What is your question",
      answer:
        "what is whatLorem ipsum dolor sit amet consectetur adipisicing elidebitis fuga rerum aspernatur quidem ut eveniet numquam architerror ullam was was that eteg the waga tegr ea  gerea wahjj euggcg",
    },
    {
      question: "What is your question",
      answer:
        "what is what Lorem ipsum dolor sit amet consectetur adipisicing elidebitis fuga rerum aspernatur quidem ut eveniet numquam architerror ullamwas was that eteg the waga tegr ea  gerea wahjj euggcg",
    },
    {
      question: "What is your question",
      answer:
        "what is what was was that eteg theLorem ipsum dolor sit amet consectetur adipisicing elidebitis fuga rerum aspernatur quidem ut eveniet numquam architerror ullam waga tegr ea  gerea wahjj euggcg",
    },
  ];

  const handleToggle = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div className="text-teal-400 p-6  px-8 space-y-3">
      <div className="text-white my-6 ">
        <h2 className="text-3xl md:text-5xl my-4 font-semibold ">
          Frequently Asked Questions
        </h2>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui optio
          tempor
        </p>
      </div>

      {faqData.map((faq, index) => (
        <div className="text-left  " key={index}>
          <div
            className="text-xl md:text-2xl flex p-1 md:p-2 justify-between mb-2 border-t-2 border-teal-400 border-spacing-3 bg-teal-400/15"
            onClick={() => handleToggle(index)}
          >
            {faq.question}{" "}
            <span className="md:text-3xl">{isOpen === index ? "-" : "+"}</span>
          </div>
          {isOpen === index && (
            <div className="text-white mb-6 md:text-xl">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FaqPage;
