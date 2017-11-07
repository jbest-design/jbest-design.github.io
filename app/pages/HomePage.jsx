import React, { Component } from  'react';
import WhatIDoModal from '../components/WhatIDoModal.jsx';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            svgLineStyle : {
                stroke: "rgb(255,255,255)", strokeWidth:2, strokeDasharray: "13,8"
            }
        }
    }

    componentDidMount() {
        const { hash } = window.location;
        if (hash !== '') {
            console.log(hash);
          // Push onto callback queue so it runs after the DOM is updated,
          // this is required when navigating from a different page so that
          // the element is rendered on the page before trying to getElementById.
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
          }, 0);
        }
    }

    render() {
        return (
            <div>
                <div className="pink-band connections padd">
                    <div className="main-container">
                        <div className="relative">
                            <div className="mess-1">
                                Creating <br />Connections
                            </div>
                            <div className="mess-2">
                                Creative<br />Design
                            </div>
                            <div className="connect-lines">
                                <svg width="1000" height="500">
                                    <line x1="135" y1="215" x2="135" y2="460" style={this.state.svgLineStyle}></line>
                                    <line x1="135" y1="460" x2="712" y2="460" style={this.state.svgLineStyle}></line>
                                    <line x1="448" y1="74" x2="980" y2="74" style={this.state.svgLineStyle}></line>
                                    <line x1="980" y1="74" x2="980" y2="325" style={this.state.svgLineStyle}></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lt-purple-band what-i-do padd">
                    <div className="main-container center">

                        <h1><a name="services" id="services">What I Do</a></h1>
                        <div className="box-group">
                            <svg width="855" height="220">
                                <a href="javascript://" data-anchor="brand-identity" onClick={() => { this.whatIDoModal.showModal("brand-identity"); } }>
                                    <g className="box-hover" id="logos-and-branding">
                                        <circle cx="105" cy="105" r="100" stroke="#ffffff"strokeDasharray="13,8"strokeWidth="2" fill="#87709e"></circle>
                                        <text x="55" y="105" className="box-label">branding &amp;</text>
                                        <text x="68" y="130" className="box-label">identity</text>
                                    </g>
                                </a>
                                <a href="javascript://" data-anchor="print-design" onClick={() => { this.whatIDoModal.showModal("print-design"); } }>
                                    <g className="box-hover">
                                        <circle cx="320" cy="105" r="100" stroke="#ffffff"strokeDasharray="13,8"strokeWidth="2" fill="#87709e"></circle>
                                        <text x="300" y="105" className="box-label">print</text>
                                        <text x="288" y="130" className="box-label">design</text>
                                    </g>
                                </a>
                                <a href="javascript://" data-anchor="web-design-dev" onClick={() => { this.whatIDoModal.showModal("web-design-dev"); } }>
                                    <g className="box-hover">
                                        <circle cx="535" cy="105" r="100" stroke="#ffffff"strokeDasharray="13,8"strokeWidth="2" fill="#87709e"></circle>
                                        <text x="467" y="105" className="box-label">web design &amp;</text>
                                        <text x="467" y="135" className="box-label">development</text>
                                    </g>
                                </a>
                                <a href="javascript://" data-anchor="custom-projects" onClick={() => { this.whatIDoModal.showModal("custom-projects"); } }>
                                    <g className="box-hover">
                                        <circle cx="750" cy="105" r="100" stroke="#ffffff"strokeDasharray="13,8"strokeWidth="2" fill="#87709e"></circle>
                                        <text x="713" y="105" className="box-label">custom</text>
                                        <text x="710" y="135" className="box-label">projects</text>
                                    </g>
                                </a>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="dk-purple-band padd">
                    <div className="main-container center">
                        <h1><a name="portfolio">What I've Done</a></h1>
                        <div className="box-group what-ive-done">
                        <svg width="850" height="420">
                                <Link to={"/portfolio/"}>
                                    <g className="box-hover-dk">
                                        <rect x="10" y="10" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="70" y="105" className="box-label">logos &amp;</text>
                                        <text x="63" y="130" className="box-label">branding</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio#web-design"}>
                                    <g className="box-hover-dk">
                                        <rect x="220" y="10" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="272" y="120" className="box-label">websites</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio#brochures-books-pamphlets"}>
                                    <g className="box-hover-dk">
                                        <rect x="430" y="10" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="475" y="120" className="box-label">brochures</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio/#brochures-books-pamphlets"}>
                                    <g className="box-hover-dk">
                                        <rect x="640" y="10" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="695" y="105" className="box-label">books &amp;</text>
                                        <text x="690" y="130" className="box-label">pamplets</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio/#invitations-weddings-meetings"}>
                                    <g className="box-hover-dk">
                                        <rect x="10" y="220" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="55" y="326" className="box-label">invitations</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio#web-design"}>
                                    <g className="box-hover-dk">
                                        <rect x="220" y="220" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="267" y="310" className="box-label">marketing</text>
                                        <text x="285" y="335" className="box-label">emails</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio#posters-flyers"}>
                                    <g className="box-hover-dk">
                                        <rect x="430" y="220" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="480" y="310" className="box-label">posters &amp;</text>
                                        <text x="495" y="335" className="box-label">flyers</text>
                                    </g>
                                </Link>
                                <Link to={"/portfolio#childrens-art"}>
                                    <g className="box-hover-dk">
                                        <rect x="640" y="220" width="195" height="195" style={{fill: "#58537b", stroke:"#fff", strokeDasharray:"13,8", strokeWidth:2}}></rect>
                                        <text x="690" y="310" className="box-label">children's</text>
                                        <text x="720" y="335" className="box-label">art</text>
                                    </g>
                                </Link>
                            </svg>                            
                        </div>
                    </div>
                </div>
                <div className="blue-band about-me padd">
                    <div className="main-container">
                        <h1><a name="about">About Me</a></h1>

                        <div className="body-content white">
                            <p>
                                The way I see it, communication is all about connection. Connecting a question with an answer, a need with a product, a problem with a solution. But how?
                            </p><p>
                                For over 10 years I've helped large and small companies, for- and not-for-profits, answer that question. Because it's not always a website, it's not always a flyer. Sometimes it's neither. Sometimes it's both. I'll help you figure out what you need...and then I'll get to work making that plan a reality.
                                I specialize in branding packages including logo and template creation; meeting branding; print publications, such as educational booklets, toolkits, and newsletters; and digital communications efforts, including websites (both business card and highly complex functional sites), html email, banner ads, and social media.
                            </p><p>
                                While I've spent a lot of time in the corporate world, I love helping small business and not-for-profits find new and effective methods of communicating and connecting with their audiences, whether it's new customers, old faithfuls, or your neighbor down the street.
                            </p><p>
                                I landed in Caldwell, New Jersey by way of New York, but got my start in Baltimore, Maryland. You'll find me, my programmer husband, and our two young children, in the brightest, and often loudest, house on the block. While I'm still getting used to the small town vibe, I have to admit it's pretty magical to look up at night and see stars.
                            </p>
                            <h2 className="white">Get in touch</h2>
                            <p>
                                If you’re interested in discussing a project, contact me at <a className="underline" href="mailto:hello@jordanbestdesign.com">hello@jordanbestdesign.com</a>, and I’ll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
                <WhatIDoModal ref={(modal) => { this.whatIDoModal = modal; }} />
            </div>            
        );
    }
}

export default HomePage;