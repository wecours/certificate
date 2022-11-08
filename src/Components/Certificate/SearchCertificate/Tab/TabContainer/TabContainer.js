import { Component } from "react";
import jQuery from "jquery";
const $ = jQuery;

class TabContainer extends Component {
  tabsModule = null;
  tabPanels = null;
  tabNavList = null;
  tabNavCurrentLinkindicator = null;
  refTabContentA = null;
  refTabContentB = null;
  tabNavCurrentLinkindicator = null;

  /**
   * Hook => function special react
   * Repond à evenement bien defini
   * 
   * componentDidMount => 
   *  Hook rehefa vita montage ilay component
   * 
   * Vita montage => Vita complet ny view (=> render())
   * Appelé UNE SEUL fois
   */
  componentDidMount(){
    this.initilize();
    const { getTabsModule } = this.props;
    /**
     * Exemple :
     * const b;
     * const entana = {}; // Declaré tany alavitra tan e
     * 
     * // On est sûr que "b" n'est pas vide
     * const BAO = entana;
     * 
     * // On n'est pas sûr que "b" n'est pas vide
     * const BAO = b ? entana : null;
     * Equivalant à 
     * const BAO = b && entana;
     */
    console.log("TabContainer.js:40, this.tabsModule:", this.tabsModule)
    getTabsModule && getTabsModule(this.tabsModule);

    const { children, tabs } = this.props;
    console.log("TabContainer.js:44:children, tabs : ", children, tabs);
    /**
     * Passage donnée de cette component(parent) => component enfant
     */
     tabs.forEach(tab => tab.setTabsModule(this.tabsModule) );
  }

  componentDidUpdate(){
    console.log("TabContainer:52:componentDidUpdate");
    const { activeTabId } = this.props;
    activeTabId && this.handleClickTab(activeTabId);
  }

  render(){
    const { children } = this.props;
    return (
      <div>
        <section ref={ref => this.tabsModule = ref} // Récuperation element facon React
          className="ns-TabsModule" data-active-tab="A">
        
          <div className="ns-ScrollWrapper">
            <nav className="ns-TabNav" ref={ref=>this.tabNavList=ref}>
              { children }
            </nav>
          </div>
          
          <div className="ns-TabPanels">
            <div ref={ref => this.refTabContentA=ref} className="ns-TabPanel" id="ns-TabPanelA" data-tab-panel="A">Panel reference certificat</div>
            <div ref={ref => this.refTabContentB=ref}  className="ns-TabPanel" id="ns-TabPanelB" data-tab-panel="B">Panel nom du participant</div>
          </div>
        </section>
        <span ref={ref => this.tabNavCurrentLinkindicator = ref}
          className="ns-TabNav_Indicator"></span>
      </div>
    );
  }

  initilize(){
    this.tabPanels = document.querySelectorAll(".ns-TabPanel");
    this.positionIndicator();
  }

  /**
   * hideAllTabPanels :
   * Manafina ny <Tab/> (Onglet) rehetra
   */
  hideAllTabPanels() {
    //loop through all tab panel elements
    for (let i = 0; i < this.tabPanels.length; i++) {
      this.tabPanels[i].removeAttribute("style");
    }
  };

  handleClickTab(tabId){
    this.tabsModule.setAttribute("data-active-tab", tabId);
    this.hideAllTabPanels();
    if(tabId == "A"){
      this.refTabContentA.style.display = "block";
    }else if(tabId == "B"){
      this.refTabContentB.style.display = "block";
    }
    this.positionIndicator();
  }

  positionIndicator() {
    var tabNavListLeftPosition = this.tabNavList.getBoundingClientRect().left;
    var tabsModuleSectionDataValue = this.tabsModule.getAttribute("data-active-tab") || "A";
    var tabNavCurrentLinkText = this.tabNavList.querySelector("[data-tab='" + tabsModuleSectionDataValue + "'] span");
    var tabNavCurrentLinkTextPosition = tabNavCurrentLinkText.getBoundingClientRect();
    this.tabNavCurrentLinkindicator.style.transform =
      "translate3d(" +
      (tabNavCurrentLinkTextPosition.left - tabNavListLeftPosition) +
      "px,0,0) scaleX(" +
      tabNavCurrentLinkTextPosition.width * 0.01 +
      ")";
  }


}

export default TabContainer;