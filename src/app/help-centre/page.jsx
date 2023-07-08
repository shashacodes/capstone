"use client";
import React, { useState } from "react";

const HelpCentrePage = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleQuestionSubmit = (e) => {
    e.preventDefault();

    const fakeAPIResponse =
      "Thank you for your question! We will get back to you shortly.";
    setResponse(fakeAPIResponse);
    setUserQuestion("");
  };

  return (
    <div>
      <h1 className="font-bold text-xl text-center">Help Centre</h1>
      <div className="mr-6 ml-6">
        <h2 className="font-bold text-md mt-3">Have a question?</h2>
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your question or message here..."
            rows={4}
            cols={50}
            required
            className="bg-transparent border w-[250px]"
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
        {response && <p>{response}</p>}
      </div>
    </div>
  );
};

export default HelpCentrePage;
