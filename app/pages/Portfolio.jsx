import React, {Component} from 'react';
import PortfolioSection from '../components/PortfolioSection.jsx';
import PortfolioImage from '../components/PortfolioImage.jsx';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("mounted");
        $('.thumbnails a').lightBox({
                overlayOpacity: 0.4,
                imageLoading: '/Images/lightbox-ico-loading.gif',
                imageBtnClose: '/Images/lightbox-btn-close.gif',
                imageBtnPrev: '/Images/lightbox-btn-prev.gif',
                imageBtnNext: '/Images/lightbox-btn-next.gif',
        });

        const { hash } = window.location;
        if (hash !== '') {
            console.log(hash);
          // Push onto callback queue so it runs after the DOM is updated,
          // this is required when navigating from a different page so that
          // the element is rendered on the page before trying to getElementById.
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            console.log('scrolling to ')
            if (element) element.scrollIntoView();
          }, 0);
        } else { 
            console.log('scroll top');
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div className="main-container">
                <h1 className="ochre"></h1>
                <div className="sample-work">Sample Work</div>
                <div className="portfolio">
                    <PortfolioSection name="logos-branding" title="LOGOS & BRANDING"><PortfolioImage url={{large: "/assets/images/photos/Brand_CS_Large.png", small: "/assets/images/photos/Brand_CS_Small.png"}} title="Brand Package: New Non-Profit Organization. Development of primary and secondary logos, presentation and letterhead templates, business cards, and website." alt="Brand Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brand_CIN_Large.png", small: "/assets/images/photos/Brand_CIN_Small.png"}} title="Logo Development for Healthcare Collaborative" alt="Logo Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brand_GNYHA_Large.png", small: "/assets/images/photos/Brand_GNYHA_Small.png"}} title="Brand Package: Rebranding with a goal of refreshing all collateral, including letterhead, newsletters, responsive email alerts and branding guidelines." alt="Brand Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brand_PFP_Large.png", small: "/assets/images/photos/Brand_PFP_Small.png"}} title="Brand Package: New Joint Non-Profit Organization Initiative. Development of primary and secondary logos, presentation and letterhead templates, website, and promotional materials." alt="Brand Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brand_Sarah_Large.png", small: "/assets/images/photos/Brand_Sarah_Small.png"}} title="Brand Package: Therapy Private Practice. Development of all communications materials including letterhead, business card, website, and forms." alt="Brand Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Logo_Football1_Large.png", small: "/assets/images/photos/Logo_Football1_Small.png"}} title="Logo Development for Fantasy Football League" alt="Logo Development" />
                        <PortfolioImage url={{large: "/assets/images/photos/Logo_Football2_Large.png", small: "/assets/images/photos/Logo_Football2_Small.png"}} title="Logo Development for Fantasy Football League" alt="Logo Development" />
                    </PortfolioSection>

                    <PortfolioSection name="web-design" title="WEB DESIGN"><PortfolioImage url={{large: "/assets/images/photos/GF_Large.png", small: "/assets/images/photos/GF_Small.png"}} title="Healthcare Lobbying Campagin: Desktop and Mobile Sites" alt="Lobbying Site" />
                        <PortfolioImage url={{large: "/assets/images/photos/Bill_Large.png", small: "/assets/images/photos/Bill_Small.png"}} title="Children's Music Teacher: Desktop and Mobile" alt="Music Teacher" />
                        <PortfolioImage url={{large: "/assets/images/photos/CharityStrong_Large.png", small: "/assets/images/photos/CharityStrong_Small.png"}} title="Job Match Non-Profit: Desktop and Mobile" alt="Non-Profit" />
                        <PortfolioImage url={{large: "/assets/images/photos/Emails-Large.png", small: "/assets/images/photos/Emails-Small.png"}} title="Custom Marketing Emails / HTML Handcoded" alt="Marketing Emails" />
                        <PortfolioImage url={{large: "/assets/images/photos/Event_Large.png", small: "/assets/images/photos/Event_Small.png"}} title="Annual Event Promotion and Registration Site and Email Campaign" alt="Annual Event" />
                        <PortfolioImage url={{large: "/assets/images/photos/HITE_Large.png", small: "/assets/images/photos/HITE_Small.png"}} title="Non-Profit - Small Budget Full Redesign: Reworking of complete site including redesign and overhaul of UX." alt="Non-Profit Redesign" />
                        <PortfolioImage url={{large: "/assets/images/photos/MedMal_Large.png", small: "/assets/images/photos/MedMal_Small.png"}} title="Healthcare Lobbying Campagin: Desktop and Mobile Sites, Email Campaign, Banner Ads. Project launchtime: 3 days." alt="Lobbying Site" />
                        <PortfolioImage url={{large: "/assets/images/photos/NYSPFP_Large.png", small: "/assets/images/photos/NYSPFP_Small.png"}} title="Joint Organization Healthcare Initiative: Large desktop site. Multiple subbranded sections and calendars. Built to Section 508 accessibility standards." alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/QualityWeek_Large.png", small: "/assets/images/photos/QualityWeek_Small.png"}} title="Patient Safety Email Campagin: Custom HTML emails." alt="Healthcare Email Campaign" />
                        <PortfolioImage url={{large: "/assets/images/photos/Sarah_Large.png", small: "/assets/images/photos/Sarah_Small.png"}} title="Private Practice Therapist Site" alt="Therapy" />
                        <PortfolioImage url={{large: "/assets/images/photos/Snedding_Large.png", small: "/assets/images/photos/Snedding_Small.png"}} title="Wedding Details and RSVP Site" alt="Wedding" />
                        <PortfolioImage url={{large: "/assets/images/photos/Stockroom_Large.png", small: "/assets/images/photos/Stockroom_Small.png"}} title="Database-Driven Custom Inventory Site" alt="Inventory" />
                        <PortfolioImage url={{large: "/assets/images/photos/THEORI_Large.png", small: "/assets/images/photos/THEORI_Small.png"}} title="Healthcare Economics Organization: Desktop Site" alt="Healthcare" />
                    </PortfolioSection>

                    <PortfolioSection name="brochures-books-pamphlets" title="BROCHURES, BOOKS & PAMPLETS"><PortfolioImage url={{large: "/assets/images/photos/Brochure_Large.png", small: "/assets/images/photos/Brochure_Small.png"}} title="Corporate Brochure" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/YearEnd1_Large.png", small: "/assets/images/photos/YearEnd1_Small.png"}} title="Corporate Year End Report" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Legislative_Agendas_Large.png", small: "/assets/images/photos/Legislative_Agendas_Small.png"}} title="Healthcare Legislative Agenda" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Book1_Large.png", small: "/assets/images/photos/Book1_Small.png"}} title="Healthcare Educational Booklet" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Book2_Large.png", small: "/assets/images/photos/Book2_Small.png"}} title="Healthcare Educational Booklet" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/YearEnd2_Large.png", small: "/assets/images/photos/YearEnd2_Small.png"}} title="Corporate Year End Report" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Application1_Large.png", small: "/assets/images/photos/Application1_Small.png"}} title="Fellowship Application" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Books3.png", small: "/assets/images/photos/Books3_Small.png"}} title="Healthcare Educational Booklets" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brochure_SEP_Large.png", small: "/assets/images/photos/Brochure_SEP_Small.png"}} title="Internship Application" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Brochure3_Large.png", small: "/assets/images/photos/Brochure_Quality_Small.png"}} title="Quality Initiatives Brochure" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Toolkit1_Working2.png", small: "/assets/images/photos/Toolkit2_Small.png"}} title="Healthcare Educational Toolkit" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Toolkit2_Working2.png", small: "/assets/images/photos/Toolkit1_Small.png"}} title="Healthcare Educational Toolkit" alt="Healthcare" />
                        <PortfolioImage url={{large: "/assets/images/photos/Books4_large.png", small: "/assets/images/photos/Books4_Small.png"}} title="Healthcare Educational Booklets" alt="Healthcare" />
                    </PortfolioSection>

                    <PortfolioSection name="invitations-weddings-meetings" title="INVITATIONS, WEDDINGS & MEETING MATERIALS"><PortfolioImage url={{large: "/assets/images/photos/Corp_Invite4_Large.png", small: "/assets/images/photos/Cop_Ivites_Small.png"}} title="Corporate Meeting Invitation and Signage " alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Corp_Invite1_Large.png", small: "/assets/images/photos/Corp_Invite1_Small.png"}} title="Corporate Meeting & Event Invitations" alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Corp_Invite2_Large.png", small: "/assets/images/photos/Corp_Invite2_Small.png"}} title="Corporate Event Invitation and Website" alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Corp_Invite3_Large.png", small: "/assets/images/photos/Corp_Invite3_Small.png"}} title="Corporate Event Invitation and Website" alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Corp_Invite5_Large.png", small: "/assets/images/photos/Corp_Invite5_Small.png"}} title="Corporate Event Invitation, Signage, and Materials" alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Wedding1_Large.png", small: "/assets/images/photos/Wedding1_Small.png"}} title="Wedding Invitation and Collateral Materials" alt="Event Materials" />
                        <PortfolioImage url={{large: "/assets/images/photos/Wedding_Snedd_New.png", small: "/assets/images/photos/Wedding2_Small.png"}} title="Wedding Invitation & Website" alt="Event Materials" />
                    </PortfolioSection>

                    <PortfolioSection name="posters-flyers" title="POSTERS & FLYERS"><PortfolioImage url={{large: "/assets/images/photos/Poster_PH1_Large.png", small: "/assets/images/photos/Poster_PH1_Small.png"}} title="Public Health Campaign: Flu Shot Campaign" alt="Poster" />
                        <PortfolioImage url={{large: "/assets/images/photos/Poster_PH2_Large.png", small: "/assets/images/photos/Poster_PH2_Small.png"}} title="Public Health Campaign: Antibiotics Week Campaign" alt="Poster" />
                        <PortfolioImage url={{large: "/assets/images/photos/Poster_PH3_Large.png", small: "/assets/images/photos/Poster_PH3_Small.png"}} title="Public Health Campaign: Antibiotics Week Campaign" alt="Poster" />
                        <PortfolioImage url={{large: "/assets/images/photos/Poster_PH4_Large.png", small: "/assets/images/photos/Poster_PH4_Small.png"}} title="Public Health Campaign: Flu Shot Campaign" alt="Poster" />
                        <PortfolioImage url={{large: "/assets/images/photos/Seleni_Large.png", small: "/assets/images/photos/Seleni_Small.png"}} title="Maternal Depression Clinical Poster" alt="Poster" />
                        <PortfolioImage url={{large: "/assets/images/photos/Poster_Exchange_Large.png", small: "/assets/images/photos/Poster_Exchange_Small.png"}} title="Public Health Campaign: Health Exchange Education" alt="Poster" />
                    </PortfolioSection>

                    <PortfolioSection name="childrens-art" title="STUFF FOR LITTLES"><PortfolioImage url={{large: "/assets/images/photos/Poster_USA_Large.png", small: "/assets/images/photos/Poster_USA_Small.png"}} title="US Map for Children" alt="Children's Art'" />
                        <PortfolioImage url={{large: "/assets/images/photos/Posters_Animals_Large.png", small: "/assets/images/photos/Poster_Animals_Small.png"}} title="Animal Posters for Children" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Invite_BDAY1_Large.png", small: "/assets/images/photos/Invite_BDAY1_Small.png"}} title="Child's Birthday Invitation" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Poster_NJ_Large.png", small: "/assets/images/photos/Poster_NJ_Small.png"}} title="Poster for Child's Room" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Invite_BDAY2_Large.png", small: "/assets/images/photos/Invite_BDAY2_Small.png"}} title="Child's Birthday Invitation" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Posters_Code_Large.png", small: "/assets/images/photos/Posters_Code_Small.png"}} title="Poster for Child's Room" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Invite_BDAY3_Large.png", small: "/assets/images/photos/Invite_BDAY3_Small.png"}} title="Child's Birthday Invitation" alt="Children's Art" />
                        <PortfolioImage url={{large: "/assets/images/photos/Kids_RainbowName_Large.png", small: "/assets/images/photos/Kids_RainbowName_Small.png"}} title="Poster for Child's Room" alt="Children's Art" />
                    </PortfolioSection>
                </div>
            </div>
        );
    }
}

export default Portfolio;