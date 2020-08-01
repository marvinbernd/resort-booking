import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Culpa laboris duis culpa et est qui qui do ipsum aliqua minim fugiat.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info:
          'Culpa laboris duis culpa et est qui qui do ipsum aliqua minim fugiat.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info:
          'Culpa laboris duis culpa et est qui qui do ipsum aliqua minim fugiat.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          'Culpa laboris duis culpa et est qui qui do ipsum aliqua minim fugiat.',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
