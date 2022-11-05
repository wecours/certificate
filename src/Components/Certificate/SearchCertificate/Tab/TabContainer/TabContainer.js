import { Component } from "react";
import jQuery from "jquery";
const $ = jQuery;

class TabContainer extends Component {
  tabsModule = null;
  tabPanels = null;
  tabNavList = null;
  tabNavCurrentLinkindicator = null;

  // constructor(){}

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
  }

  render(){
    const { children } = this.props
    return (
      <div>
        <section className="ns-TabsModule" data-active-tab="A">
        
          <div className="ns-ScrollWrapper">    
            <nav className="ns-TabNav">
              { children }
            </nav>
          </div>
          
          <div className="ns-TabPanels">
            <div className="ns-TabPanel" id="ns-TabPanelA" data-tab-panel="A">Panel reference certificat</div>
            <div className="ns-TabPanel" id="ns-TabPanelB" data-tab-panel="B">Panel nom du participant</div>
          </div>
        </section>
        <span className="ns-TabNav_Indicator"></span>
      </div>
    );
  }

  initilize(){
    //get tab nav
    this.tabNavList = document.body.querySelector(".ns-TabNav");

    //get tab nav current nav link indicator
    this.tabNavCurrentLinkindicator = this.tabNavList.querySelector(".ns-TabNav_Indicator");

    //get tabs module parent
    this.tabsModule = $(".ns-TabsModule");
    console.log("Initialize::tabsModule", this.tabsModule)

    //get all tab panels
    this.tabPanels = document.querySelectorAll(".ns-TabPanel");

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
    
  }
}

export default TabContainer;