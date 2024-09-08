//@ts-nocheck
'use client'
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from '@/lib/actions/contactActions';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef<HTMLFormElement>(null);
 
  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitForm(formData);
      if (result.success) {
        setSubmitStatus('success');
        formRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
        <AnimatePresence>
          {submitStatus && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 text-center ${
                submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {submitStatus === 'success'
                ? 'Message sent successfully!'
                : 'An error occurred. Please try again.'}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;