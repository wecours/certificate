import { Component } from "react";
import "./Tab.scss";

class Tab extends Component {
  tabsModule = null;
  resizeTimeout = null;

  // Les elements(View) ne sont pas encore rendu, ni prêt
  constructor(props){
    super(props);
  }

  componentDidMount(){
    /**
     * Vu les taches à faire, c'est obligatoirement
     * A appeler ici sur componentDidMount
     * (Mais pas dans le constructor)
     */
     window.addEventListener("resize", this.resizeThrottler, false);
  }
  
  setTabsModule(tabsModule){
    this.tabsModule = tabsModule
  }

  render(){
    const { tabTitle, tabId } = this.props;
    return (
        <a 
          href={`#ns-TabPanel${tabId}`}
          className="ns-TabNav_Link" 
          data-tab={tabId}
          onClick={() => this.handleTabClick(tabId)}
        > 
          <span>{ tabTitle }</span>
        </a>
    )
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