import "bulma/css/bulma.css";
import { useEffect } from "react";
import BookCreate from "./Books/BookCreate";
import BookList from "./Books/BookList";
import useBookContext from "./hooks/use-books-context";
// import Searchbar from "./pics/Searchbar";
// import searchImages from "./pics/api";
// import ImageList from "./pics/ImageList";
// import { useState } from "react";

// import ProfileCard from "./Profilecard/ProfileCard";
// import alexaImage from "./images/alexa.png";
// import conrtanaImage from "./images/cortana.png";
// import siriImage from "./images/siri.png";

function App() {
  const { fetchBooks } = useBookContext();
  // const [images,setResult]=useState([]);

  // const handleSubmit=async(term)=>{
  //  const result = await searchImages(term);
  //  setResult(result);
  //  console.log({result})
  // }
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    // <div>
    //   <section class="hero is-primary">
    //     <div class="hero-body">
    //       <p class="title">Personal Digital Ass</p>
    //     </div>
    //   </section>
    //   <div className="container">
    //     <section className="section">
    //       <div class="columns">
    //         <div class="column is-4">
    //           <ProfileCard
    //             title="Alexa"
    //             handle="@alexa99"
    //             imgSrc={alexaImage}
    //             description="Alexa was created by amazon"
    //           />
    //         </div>
    //         <div class="column is-4">
    //           <ProfileCard
    //             title="Cortana"
    //             handle="@cortana32"
    //             imgSrc={conrtanaImage}
    //             description="Alexa was created by amazon"
    //           />
    //         </div>
    //         <div class="column is-4">
    //           <ProfileCard
    //             title="Siti"
    //             handle="@siri01"
    //             imgSrc={siriImage}
    //             description="Alexa was created by amazon"
    //           />
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    // <div>
    //   <Searchbar onSubmit={handleSubmit} />
    //   <ImageList images={images} />
    // </div>
    <div>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
