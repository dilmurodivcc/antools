import Header from "./components/Header";
import Corousel from "./components/Corousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import NewC from "./components/NewComer";
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Cards/>
      <NewC/>
      <Corousel/>
      <Footer/>
    </>
     
    )
}
export default App;



// document.addEventListener("mousemove", (e) => {
//   const smoke = document.createElement("div");
//   smoke.classList.add("tutun");

//   smoke.style.left = `${e.pageX}px`;
//   smoke.style.top = `${e.pageY}px`;

//   document.body.appendChild(smoke);

//   setTimeout(() => {
//     smoke.style.opacity = "0";
//   }, 100);

//   setTimeout(() => {
//     smoke.remove();
//   }, 600);
// });


// const toggleBtn = document.getElementById("toggle-theme");
// const body = document.body;

// toggleBtn.addEventListener("click", () => {
//     body.classList.toggle("light");
//     if (body.classList.contains("light")) {
//         toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
//     } else {
//         toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
//     }
// })


