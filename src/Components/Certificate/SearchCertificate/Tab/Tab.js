import { Component } from "react";
import "./Tab.scss";
import jQuery from "jquery";
import { TypeSearchMode } from "../SearchCertificate";

const $ = jQuery;

class Tab extends Component{
  tabNavLinks = null;
  refOngletByRefCert = null;
  refOngletByNomParticipant = null;

  constructor(props){
    super(props);
    /**
     * Les elements ne sont pas encore rendu, ni prêt
     */
  }

  componentDidMount(){
    /**
     * Vu les taches à faire, c'est obligatoirement
     * A appeler ici sur componentDidMount
     * (Mais pas dans le constructor)
     */
    this.initialize();
  }

  render(){
    return (
        <a 
          ref={(ref) => this.refOngletByRefCert = ref}
          href="#ns-TabPanelA" 
          className="ns-TabNav_Link" 
          data-tab={"A"}
          onClick={() => this.handleTabClick(TypeSearchMode.byReferenceCertificat)}
        > 
          <span>Par reference certificat</span>
        </a>
        /* <a 
          ref={(ref) => this.refOngletByNomParticipant = ref}
          href="#ns-TabPanelB" 
          className="ns-TabNav_Link" 
          data-tab={"B"}
          onClick={() => this.handleTabClick(TypeSearchMode.byNameParticipant)}
        >
          <span>Par nom du participant</span>
        </a> */
    )
  }

  initialize(){
    //get all tab nav links
    this.tabNavLinks = $(".ns-TabNav_Link");
    //show tab panel A first because panel A nav link has indicator on page load
    document.getElementById("ns-TabPanelA").style.display = "block";

    (function() {
      //someone smarter than me "debounce" code
      var resizeTimeout;
      function resizeThrottler() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            actualResizeHandler();
          }, 66);
        }
      }
      //function to fire after resize timeout delay
      function actualResizeHandler() {
        //fire the position indicator function
        this.positionIndicator();
      }
      //window resize event
      window.addEventListener("resize", resizeThrottler, false);
    })();
  }

  handleTabClick(typeAction){
    let refCurrent = null;
    if(typeAction == TypeSearchMode.byNameParticipant){
      refCurrent = this.refOngletByNomParticipant
    }
    if(typeAction == TypeSearchMode.byReferenceCertificat){
      refCurrent = this.refOngletByRefCert
    }
    //get this link data value
    var thisLink = refCurrent.getAttribute("data-tab");
    console.log(81, "this.tabsModule", this.tabsModule, refCurrent, thisLink)
    //get this link href value
    var thisHref = refCurrent.getAttribute("href");
    //get tab panel element with ID that matches this link href value
    var thisTabPanel = document.querySelector(thisHref);
    //set tab module parent data to this link data value
    this.tabsModule.attr("data-active-tab", thisLink);
    //fire hide all tab panels function
    this.hideAllTabPanels();
    //get tab panel element with ID that matches this link href value and set its style to show it
    thisTabPanel.style.display = "block";
    //fire the position indicator function
    this.positionIndicator();

    const { onTabClick } = this.props;
    onTabClick && onTabClick(typeAction);
  };
}

export default Tab;