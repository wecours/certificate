// ----
// Principe Encapsulation : 
// - Un component => Independante
// ----


class ComponentA extends React.Component;
<ComponentA styles={{color: "black"}}   />
class ComponentB extends React.Component;

class ComponentA extends React.Component {

    styles = {
        button: {
            backgroundColor: "white",
            color: "black"
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

class ComponentB extends React.Component {

    componentA = new ComponentA();

    styles = {
        button: {
            backgroundColor: "white",
            color: "black"
        }
    }

    componentDidMount(){
        // Changement direct
        // A eviter comme la peste pulmonaire
        componentA.styles.button.color = "red";
        document.getElementById(`ns-TabPanel${tabId}`).style.display = "block";
    }

    updateStyle(newStyles){}
    
    render(){
        return (
            <div>
                
            </div>
        )
    }
}