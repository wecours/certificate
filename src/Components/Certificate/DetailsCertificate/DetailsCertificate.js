  import { Component } from "react";
import DetailCourse from "./DetailCourse/DetailCourse";
import DetailParticipant from "./DetailParticipant/DetailParticipant";

 class DetailsCertificate extends Component {
 
  render(){
    return (
      <div>
        <section className="certificate">
          certificate
          <img src="/assets/certificate-exemple.jpg" alt="Certificate" />
        </section>
        <section className="detailCourse">
          <DetailCourse />
        </section>
        <section className="detailParticipant">
          <DetailParticipant />
          {/* Tsy atao ato ny detail lavabe */}
        </section>
        <section className="detailParticipantProject">
          detailParticipantProject
        </section>
      </div>
    )
  }
 }
 
 export default DetailsCertificate;