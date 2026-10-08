import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section>
        <p>Course: MCON 505</p>
        <p>Topic: React Fundamentals</p>
        <p>Current Module: Module 4</p>
      </section>

      <StudentCard
        name="Maria Johnson"
        major="Computer Science"
        graduationYear={2027}
      />

      <StudentCard
        name="David Smith"
        major="Information Systems"
        graduationYear={2026}
      />

      <StudentCard
        name="Emily Davis"
        major="Cybersecurity"
        graduationYear={2027}
      />

      <StudentCard
        name="Sarah Miller"
        major="Computer Science"
        graduationYear={2028}
      />

      <StudentCard
        name="Michael Brown"
        major="Information Technology"
        graduationYear={2027}
      />

      <Footer />
    </>
  );
}

export default App;