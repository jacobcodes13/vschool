import Header from "./components/Header"
import BlogPost from "./components/BlogPost"
import BlogList from "./components/BlogList"
import Footer from "./components/Footer"

function App() {
  const list = BlogList.map(item => {
    return (
      <BlogPost
        key={item.title}
        {...item}
      />
    )
  })

  return (
    <div>
      <Header />
      {list}
      <div className="post--button">
        <div>
          OLDER POSTS
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
