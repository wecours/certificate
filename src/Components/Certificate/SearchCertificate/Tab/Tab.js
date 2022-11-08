import { Component } from "react";
import "./Tab.scss";
import jQuery from "jquery";
import { TypeSearchMode } from "../SearchCertificate";

const $ = jQuery;

class Tab extends Component {
  tabsModule = null;
  tabNavLinks = null;
  refOnglet = null;
  // refOngletByRefCert = null;
  // refOngletByNomParticipant = null;

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
  
  setTabsModule(tabsModule){
    this.tabsModule = tabsModule
  }

  render(){
    const { tabTitle, tabId } = this.props;
    return (
        <a 
          ref={ref => this.refOnglet = ref}
          href={`#ns-TabPanel${tabId}`}
          className="ns-TabNav_Link" 
          data-tab={tabId}
          onClick={() => this.handleTabClick(tabId)}
        > 
          <span>{ tabTitle }</span>
        </a>
    )
  }

  initialize(){
    const { tabId } = this.props;
    //get all tab nav links
    this.tabNavLinks = $(".ns-TabNav_Link");
    //show tab panel A first because panel A nav link has indicator on page load
    document.getElementById(`ns-TabPanel${tabId}`).style.display = "block";

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

  handleTabClick(tabId){
    const { onTabClick } = this.props;
    onTabClick && onTabClick(tabId);
  };
}

export default Tab;