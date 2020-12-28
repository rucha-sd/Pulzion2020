import React from "react";
import Link from "next/link";
import Card from "../component/Card";
import { technicalEvents } from "../eventConfig";
import Head from "next/head";

const technical = () => {
  React.useEffect(() => {
    window.document.title = "Technical Events | Pulzion 2020";
  }, []);

  return (
    <>
      <Head>
        <title>Technical Events</title>
      </Head>
      <section id="#hero" className="container">
        <h1 className="hero-title">Technical Events</h1>
        <div className="hero-link-container">
          <Link href="/">
            <a className="link">All</a>
          </Link>
          <Link href="/technical">
            <a className="link link-active">Technical Events</a>
          </Link>
          <Link href="/nonTechnical">
            <a className="link">Non Technical Events</a>
          </Link>
        </div>
        <div className="card-container">
          {technicalEvents.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default technical;
