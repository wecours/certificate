import { Component } from "react";
import "./Tab.scss";
import jQuery from "jquery";
import { TypeSearchMode } from "../SearchCertificate";

const $ = jQuery;

class Tab extends Component{
  tabPanels = null;
  tabNavList = null;
  tabsModule = null;
  tabNavCurrentLinkindicator = null;
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
      <div>
        <section className="ns-TabsModule" data-active-tab="A">
        
        <div className="ns-ScrollWrapper">    
          <nav className="ns-TabNav">
          <a 
            ref={(ref) => this.refOngletByRefCert = ref}
            href="#ns-TabPanelA" 
            className="ns-TabNav_Link" 
            data-tab={"A"}
            onClick={() => this.tabNavLinkEvent(TypeSearchMode.byReferenceCertificat)}
          > 
            <span>Par reference certificat</span>
          </a>
          <a 
            ref={(ref) => this.refOngletByNomParticipant = ref}
            href="#ns-TabPanelB" 
            className="ns-TabNav_Link" 
            data-tab={"B"}
            onClick={() => this.tabNavLinkEvent(TypeSearchMode.byNameParticipant)}
          >
            <span>Par nom du participant</span>
          </a>
          <span className="ns-TabNav_Indicator"></span>
          </nav>
        </div>
        
        <div className="ns-TabPanels">
          <div className="ns-TabPanel" id="ns-TabPanelA" data-tab-panel="A">Panel reference certificat</div>
          <div className="ns-TabPanel" id="ns-TabPanelB" data-tab-panel="B">Panel nom du participant</div>
        </div>
        
        </section>
      </div>
    )
  }

  initialize(){
    //get tabs module parent
    this.tabsModule = $(".ns-TabsModule");
    console.log("Initialize::tabsModule", this.tabsModule)
    //get tab nav
    this.tabNavList = document.body.querySelector(".ns-TabNav");
    //get all tab nav links
    this.tabNavLinks = $(".ns-TabNav_Link");
    //get tab nav current nav link indicator
    this.tabNavCurrentLinkindicator = this.tabNavList.querySelector(".ns-TabNav_Indicator");
    //get all tab panels
    this.tabPanels = document.querySelectorAll(".ns-TabPanel");
    //show tab panel A first because panel A nav link has indicator on page load
    document.getElementById("ns-TabPanelA").style.display = "block";

    /**
    * tab nav link function
    * tab nav link event displays matching tab panel,
    * and positions current tab nav link indicator
    */

    /**
    * attach tabNavLinkEvent to all tab nav links
    * loop through all nav links and add event
    * need to change to parent element and use e.target maybe
    */
    // console.log(97, "tabNavLinks", this.tabNavLinks);
    // for (var i = 0; i < this.tabNavLinks.length; i++) {
    //   //for each nav link, add click event that fires tab nav link click event function
    //   this.tabNavLinks[i].addEventListener("click", tabNavLinkEvent, false);
    // }

    /** 
    * should really position indicator from parent left edge rather than body, 
    * to keep indicator in position on resize. meh
    * for now, here's a quick win because i'm tired 
    * https://developer.mozilla.org/en-US/docs/Web/Events/resize 
    */
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

    /**
    * fire position indicator function right away
    */
    this.positionIndicator();
  }

  hideAllTabPanels() {
    //loop through all tab panel elements
    for (let i = 0; i < this.tabPanels.length; i++) {
      //remove style attribute from all tab panels to hide them
      this.tabPanels[i].removeAttribute("style");
    }
  };

  /**
  * position indicator function
  */
  positionIndicator() {
    //get left position of tab nav ul
    var tabNavListLeftPosition = this.tabNavList.getBoundingClientRect().left;
    //get tab module parent current data value
    var tabsModuleSectionDataValue = this.tabsModule.attr("data-active-tab") || "A";
    //get nav link span with data value that matches current tab module parent data value
    var tabNavCurrentLinkText = this.tabNavList.querySelector("[data-tab='" + tabsModuleSectionDataValue + "'] span");
    //get dimensions of current nav link span
    var tabNavCurrentLinkTextPosition = tabNavCurrentLinkText.getBoundingClientRect();
    //set indicator left position via CSS transform
    //current nav link span left position - tab nav ul left position
    //prefix me for live
    this.tabNavCurrentLinkindicator.style.transform =
      "translate3d(" +
      (tabNavCurrentLinkTextPosition.left - tabNavListLeftPosition) +
      "px,0,0) scaleX(" +
      tabNavCurrentLinkTextPosition.width * 0.01 +
      ")";
  }

  tabNavLinkEvent(typeAction){
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