"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is fractional real estate investing?",
    answer: "Fractional real estate investing allows multiple investors to own shares of a single property, making real estate investment more accessible with lower capital requirements."
  },
  {
    question: "How much do I need to start investing?",
    answer: "You can start investing with as little as $100, making it possible for anyone to build a diversified real estate portfolio."
  },
  {
    question: "How do returns work?",
    answer: "Returns come from both rental income (distributed monthly) and property value appreciation when the property is sold."
  },
  {
    question: "Is my investment secure?",
    answer: "Yes, all investments are backed by real property and protected through legal structures and insurance."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 bg-[#151819]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about fractional real estate investing
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-[#7fd8be]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}