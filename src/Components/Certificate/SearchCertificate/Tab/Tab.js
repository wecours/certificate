import { Component } from "react";
import "./Tab.scss";

class Tab extends Component {
  tabsModule = null;
  resizeTimeout = null;

  constructor(props){
    super(props);
    /**
     * Les elements(View) ne sont pas encore rendu, ni prêt
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
          // ref={ref => this.refOnglet = ref}
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
    window.addEventListener("resize", this.resizeThrottler, false);
  }

  handleTabClick(tabId){
    const { onTabClick } = this.props;
    onTabClick && onTabClick(tabId);
  }

  resizeThrottler() {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(function() {
        this.resizeTimeout = null;
        this.actualResizeHandler();
      }, 66);
    }
  }
  actualResizeHandler() {
    this.positionIndicator();
  }
}

export default Tab;