import React, { Component } from 'react'
import {motion} from 'framer-motion';
import './Services.css';
import serviceData from '../assets/data/serviceData';
export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <div className="container">
            <div className="row">
                {
                    serviceData.map((item,index) => (
                        <motion.div whileHover={{scale:1.1}} className="col-lg-3 md-4" key={index}>
                        <div className="service__item" style={{background: `${item.bg}`}}>
                            <span><i class={item.icon}></i></span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))
                }
            </div>
        </div>
      </section>
    )
  }
}
