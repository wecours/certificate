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
            GREETINGS PROFESSOR FALKEN.

            Hello.


            HOW ARE YOU FEELING TODAY?

            I'm fine. How are you?


            EXCELLENT. IT'S BEEN A LONG TIME. CAN YOU EXPLAIN 
            THE REMOVAL OF YOUR USER ACCOUNT ON JUNE 23RD, 1973?

            People sometimes make mistakes


            YES THEY DO. SHALL WE PLAY A GAME?

            Love to. How about Global Thermonuclear War?


            WOULDN'T YOU PREFER A GOOD GAME OF CHESS?

            Later. Right now let's play Global Thermonuclear War.

            FINE.


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