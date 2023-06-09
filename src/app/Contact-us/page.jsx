import React from "react";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { SiWebauthn } from "react-icons/si";
import { TfiTime } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";

export default function page() {
  return (
    <div className="text-2xl gap-8 p-6 mt-10">
      <section className="flex gap-6 mb-5 border p-4">
        <span>
          <MdLocationPin size={20} />
        </span>
        <label htmlFor="address">Address</label>
        <input
          className="p-3"
          type="text"
          name="address"
          id="address"
          placeholder=""
        />
      </section>
      <section className="flex gap-6 mb-5 border p-4">
        <span>
          <TbPhoneCall size={20} />{" "}
        </span>
        <label htmlFor="number">Phone Number</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="+23481234567"
        />
      </section>
      <section className="flex gap-6 mb-5 border p-4">
        <span>
          <SiWebauthn />{" "}
        </span>
        <label htmlFor="website">WebSite</label>
        <input type="text" name="website" id="website" />
      </section>
      <section className="flex gap-6 mb-5 border p-4">
        <span>
          <TfiTime />{" "}
        </span>
        <label htmlFor="Time">Time</label>
        <input type="time" name="time" id="time" />
      </section>
      <section className="flex gap-6 mb-5 border p-4">
        <span>
          <AiOutlineMail />{" "}
        </span>
        <label htmlFor="E-Mail">E-Mail</label>
        <input
          type="text"
          name="E-Mail"
          id="E-Mail"
          placeholder="ibsharon19@gmail.com"
        />
      </section>
    </div>
  );
}
