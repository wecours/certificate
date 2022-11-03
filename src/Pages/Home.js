import { Component } from "react"
import "./Home.css";

class HomePage extends Component {
  props = {};

  /**
   * Maniere de recuperer les props 
   * => via constructeur
   * @param {*} props 
   */
  constructor(props){
    /**
     * Creer l'objet parent 
     * =>React.Component
     */
    super(props);
    this.props = props;
  }

  componentDidMount(){
    const { onEnterKB } = this.props;
    document.addEventListener("keyup", (event) => {
      if(event.code == "Enter"){
        console.log("keyup", event);
        onEnterKB && onEnterKB();
      }
    });
  }

  render(){
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet" type="text/css" />

        <div id="content">
          <div id="wargames">
          <pre style={{height: 400}}>
            <code >
            Bonjour Bonhomme
            <br/>
            HOW ARE YOU FEELING TODAY?
            <br/>
            I'm fine. How are you?

            <br/>
            Merci d'appuyer sur entrer pour continuer

            </code>	
          </pre>
          <h2>Welcome</h2>
        </div>
        </div>
      </div>
    );
  }
}

export default HomePage;