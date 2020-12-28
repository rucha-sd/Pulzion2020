import React from "react";
import Card from "./Card";
import { allEvents } from "./eventConfig";
import './events.css'

const Index = () => {
  return (
    <>
    <h1 className="text-center" style={{color:"#0ff"}}>All Events</h1>
    <div className="hero-link-container">
            <a href="/" className="link link-active">All</a>
            <a href="/technical" className="link">Technical Events</a>
            <a href="/nonTechnical" className="link">Non Technical Events</a>
        </div>

      {/* <Head>
        <title>ALL Events</title>
      </Head>*/}
      {/* <section id="#hero" className="container">
        <h1 className="hero-title">Events</h1>
        <div className="hero-link-container">
          <Link href="/">
            <a className="link link-active">All</a>
          </Link>
          <Link href="/technical">
            <a className="link">Technical Events</a>
          </Link>
          <Link href="/nonTechnical">
            <a className="link">Non Technical Events</a>
          </Link>
        </div> */}
        <div className="e-card-container row justify-content-around">
          {allEvents.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </div>
      {/* </section>  */}
    </>
  );
};

export default Index;