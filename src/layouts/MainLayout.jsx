// src/layouts/MainLayout.jsx
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container mt-4 flex-grow-1">
        <div className="d-flex justify-content-center align-items-center">
          <h1
            className="text-center m-3 text-white py-2 px-4 rounded"
            style={{
              backgroundColor: "#131718",
              borderRadius: "8px",
              border: "1px solid white",
            }}
          >
            Recipe Reverie
          </h1>
        </div>

        {children}
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
