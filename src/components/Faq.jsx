import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, this software can help recover deleted files from your desktop.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, this software can help recover deleted files from your desktop.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, this software can help recover deleted files from your desktop.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, this software can help recover deleted files from your desktop.",
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, this software can help recover deleted files from your desktop.",
  },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
   <>
    <div className="max-w-[90%] mx-auto p-6">
      <h2 className="text-center text-sm text-orange-500 tracking-widest uppercase" style={{boxShadow:"14px -9px 22px -8px #919191"}}>
        FAQ
      </h2>
      <h1 className="text-center text-2xl font-bold text-brown-800 mt-2">
        Frequent Ask Questions
      </h1>

      <div className="mt-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md mb-4 transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-white rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-700">{item.question}</span>
              <FaChevronRight
                className={`text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-600 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center flex justify-center">
        <button className="bg-[#1C4670] hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold flex items-center justify-center gap-2">
          Show more <FaChevronRight />
        </button>
      </div>
    </div>
   </>
  )
}

export default Faq
