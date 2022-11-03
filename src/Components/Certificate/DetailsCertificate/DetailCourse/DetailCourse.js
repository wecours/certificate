import { Component } from "react";
import Course from "../../../../Models/Course";
import Syllabus from "../../../../Models/Syllabus";

class DetailCourse extends Component{
  state = {
    course: new Course(),
  };

  /**
   * Ato no atao ny initialization 
   * isan'karazany
   */
  componentDidMount(){
    this.initilizeCourse(); 
  }

  initilizeCourse(){
    const { course } = this.state;
    course.title = "React – Le guide complet (incl Hooks, React Router, Redux)";
    course.description = "Plongez et apprenez React.js à partir de zéro ! Apprenez Reactjs, Hooks, Redux, React Routing, Animations, Next.js et bien plus encore !"
    course.syllabus = new Syllabus();
    course.syllabus.addPart("React Basics & Working With Components");
    course.syllabus.addPart("React State & Working with Events");
    course.syllabus.addPart("Rendering Lists & Conditional Content");
    this.setState({course: course})
  }

  render(){
    const { course } = this.state;
    console.log(course);
    return (
      <div>
        <h1> {course.title} </h1>
        <div> {course.description} </div>
        <div className="Syllabus">
          <h2> Syllabus </h2>
          <ol>
            { course.syllabus.part.map(item => 
                <li>{ item }</li>
            )}
          </ol>
        </div>
      </div>
    )
  }

}

export default DetailCourse;