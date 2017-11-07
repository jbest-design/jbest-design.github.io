import React, {Component} from 'react';

class WhatIDoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : props.show,
            section: props.section
        };
    }

    showModal(section) {
        console.log(section);

        this.setState({
            show: true,
            section: section
        });
    }

    hideModal() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div id="myModal" className="modal" style={(this.state.show) ? { display: 'block' } : {} }>
                <div className="modal-content">
                    <div className="modal-wrapper">
                        <div id="brand-identity">
                            <h2>Branding &amp; Identity</h2>
                            <p>
                                It's not just a logo. It's who you are and what you do. Choosing the way you visually represent your company or product can be critical to its success. I'll work closely with you to understand who you are, and together we will create the visual representation that best suits your needs. From simple logo creation to complete brand packages that include logos, stationary and electronic templates, business cards, websites, and more, I will help you create the look and feel of your brand and create guidelines so you'll keep on track for years to come.
                                <br /><a href="/home/portfolio">Check out some of my branding work.</a>
                            </p>
                        </div>

                        <div id="print-design">
                            <h2>Print Design</h2>
                            <p>
                                Say what you will about print being dead, at the end of the day, there's nothing like holding something in your hands. Invitations, flyers, posters, or booklets, some things just can't be communicated on a screen. Large textbooks, toolkits, or brochures, let's design something beautiful, and see how lovely it can be when the ink dries.
                                <br /> <a href="/home/portfolio#brochures-books-pamphlets">Check out some of my print design work.</a>
                            </p>
                        </div>

                        <div id="web-design-dev">
                            <h2>Web Design &amp; Development</h2>
                            <p>
                                I enjoy all forms of design, but websites have my heart. Mix the problem solving of a screen full of code with the obsession over color and layout, and that about sums me up. Websites are the most important and visible way to represent your business or product. "Business card sites" built on standard content management systems, blogs with beautiful visuals, highly complex database-driven sites with lots of functionality, they all have their place. I'll help you determine what you need, from a simple template-based site, to a completely customized set up. We'll discuss hosting, maintenance, analytics and more.
                                <br /> <a href="/home/portfolio#web-design">Check out some of my web design work.</a>
                            </p>
                        </div>

                        <div id="custom-projects">
                            <h2>Custom Projects</h2>
                            <p>
                                Birth announcements? I've done a couple of those while holding a baby. Birthday invitations? Likewise. Life is full of amazing events. Birthdays, weddings, and parties, why not make them a little more beautiful with custom invitations, digital or print? I love creating full packages for weddings and events, from invitations to programs, menus and even accompanying websites.
                                <br /> <a href="/home/portfolio">Check out some of my work.</a>
                            </p>
                            <p>
                                At my very core, I am a problem solver, and I believe that good communication, with a little bit of gloss, can go a long way. I will work with you to create strategies to effectively communicate with your audience, and then execute that plan with creativity, focus, and coffee-induced cheerfulness.
                            </p>
                            <p>Let's get to work.</p>
                        </div>
                    </div>
                    <div className="close-space">
                        <span className="close" onClick={this.hideModal.bind(this)}> close x</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default WhatIDoModal;