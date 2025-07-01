import React from 'react';

export default function ContactForm() {
  return (
    <form
      action="https://usebasin.com/f/6bdb64a8c007"
  method="POST"
  encType="multipart/form-data"
  acceptCharset="UTF-8"
  className="...tailwind-styles..."
    >
      <h2 className="text-3xl font-heading font-bold text-duke text-center mb-2">
        Request a Free Quote
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Let us know how we can help with your window cleaning, gutter clearing, or house washing around the Kapiti Coast.
      </p>

      <label className="block text-sm font-medium text-gray-700">
        Name
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Address
        <input
          type="text"
          name="address"
          required
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Phone Number
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Message
        <textarea
          name="message"
          required
          rows="4"
          placeholder="Tell us what needs cleaning..."
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-duke"
        ></textarea>
      </label>

      {/* Anti-spam honeypot (optional) */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      {/* Redirect after submission */}
      <input type="hidden" name="_redirect" value="https://dukepropertyservices.co.nz/thanks" />

      <button
        type="submit"
        className="bg-duke-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-duke-dark transition-colors w-full"
      >
        Send Request
      </button>
    </form>
  );
}
