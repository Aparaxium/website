import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <form className="bg-gray-300" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname" />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail" />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage" />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
