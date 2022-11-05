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
    searchMode: TypeSearchMode.byReferenceCertificat
  };

  onSubmit(event){
    event.preventDefault();
    console.log("onSubmit::codeCertificate", this.state.codeCertificate)
    const { onCodeCertificateValidated } = this.props;
    onCodeCertificateValidated && onCodeCertificateValidated();
  }

  render(){
    console.log(24, this.state.searchMode == TypeSearchMode.byNameParticipant ? "byNameParticipant" : "byReferenceCertificat")
    return (
      <div>
        <TabContainer>
          <Tab onTabClick={identifiantTab => 
              this.setState({searchMode: identifiantTab})}
          />
          <Tab onTabClick={(identifiantTab) => 
              this.setState({searchMode: identifiantTab})}
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