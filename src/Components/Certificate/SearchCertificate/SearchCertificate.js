import { Component } from "react";
import "./SearchCertificate.css";
import Tab from "./Tab/Tab";
import TabContainer from "./Tab/TabContainer/TabContainer";

class SearchCertificate extends Component {
  state = {
    codeCertificate: null,
    /**
     * Valeur possible : 
     * - byNumeroCertificat
     * - byNameParticipant
     */
    searchMode: TypeSearchMode.byReferenceCertificat,
    tabs: [],
    refTabContainer: null,
    activeTabId: null,
  };

  onSubmit(event){
    event.preventDefault();
    console.log("onSubmit::codeCertificate", this.state.codeCertificate)
    const { onCodeCertificateValidated } = this.props;
    onCodeCertificateValidated && onCodeCertificateValidated();
  }

  render(){
    console.log(24, this.state.searchMode == "B" ? "byNameParticipant" : "byReferenceCertificat")
    return (
      <div>
        <TabContainer ref={ref=> this.state.refTabContainer=ref}
          activeTabId={this.state.activeTabId}
          tabs={this.state.tabs}>
          <Tab 
            tabId="A"
            tabTitle="Par reference certificat"
            onTabClick={identifiantTab => this.setState({
              searchMode: identifiantTab,
              activeTabId: identifiantTab,
            })}
            ref={ref => ref && this.state.tabs.push(ref)}
          />
          <Tab 
            tabId="B"
            tabTitle="Par nom du participant"
            onTabClick={(identifiantTab) => this.setState({
              searchMode: identifiantTab,
              activeTabId: identifiantTab,
            })}
            ref={ref => ref && this.state.tabs.push(ref)}
          />
        </TabContainer>
        <div id="cover">
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search" required 
                onKeyUp={(event)=>this.setState({codeCertificate: event.target.value})}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                  <div id="s-circle"></div>
                  <span></span>
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  
}

export default SearchCertificate;

/**
 * <form onSubmit={this.onSubmit}> KO
 * <form onSubmit={(event) => this.onSubmit(event)}> OK
 * <form onSubmit={this.onSubmit.bind(this)}> OK
 */

export const TypeSearchMode = {
  byReferenceCertificat: 1,
  byNameParticipant: 2,
}