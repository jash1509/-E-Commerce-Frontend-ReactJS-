import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container" id="loader">
      <div className="loader-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;
