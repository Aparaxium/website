import Image from "next/image";
import Link from "next/link";

export default function Contact() {

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center m-6">
      <p className="pt-2"> Contact us</p>
      <form
        className=" w-2/3 xl:w-1/3"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="lname"
      >
        <div class="m-2 hidden">
        <input
            className="w-full"
            type="text"
            name="lname"
            placeholder="Your Name"
          />
        </div>

        <div className="m-2">
          <input
            className="w-full"
            type="text"
            name="fname"
            placeholder="Your Name"
          />
        </div>

        <div className="m-2">
          <input
            className="w-full"
            type="tel"
            name="tel"
            placeholder="Your Phone Number"
          />
        </div>

        <div className="m-2">
          <input
            className="w-full"
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>

        <div className="m-2">
          <textarea
            className="w-full"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="m-2 bg-blue-500">
          <button className="w-full" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
