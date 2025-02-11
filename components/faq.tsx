"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What features are included in the platform?",
    answer: "Our platform includes investor management, project tracking, document management, payment processing, AI-powered communication tools, and customizable investor portals. Each feature is designed to streamline your syndication operations."
  },
  {
    question: "How secure is the platform?",
    answer: "We implement bank-level security measures including encryption, multi-factor authentication, and regular security audits. All data is stored securely and backed up regularly."
  },
  {
    question: "Can I customize the investor portal?",
    answer: "Yes, you can fully customize the investor portal with your branding, choose which features to enable, and create custom reports and dashboards for your investors."
  },
  {
    question: "How does the AI integration work?",
    answer: "Our AI tools help automate investor communications, generate reports, and provide instant responses to common investor queries. The system learns from your interactions to provide more personalized support over time."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 technical support, dedicated account managers, and regular training sessions to help you make the most of the platform."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 bg-[#151819]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our platform
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