import axios from "axios";

const Home = () => {
  const handlePaynow = async () => {
    try {
      const response = await axios.post("/api/initiate");
      const { data } = response;
      const {
        data: {
          instrumentResponse: { redirectInfo },
        },
      } = data;

      window.open(redirectInfo.url, "_self");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };

  return (
    <div className="phonepe">
      <div className="phonepe-header">
        <h1 className="phonepe-heading">Phone pe Payment Gateway</h1>
      </div>
      <button className="phonepe-button" onClick={handlePaynow}>
        Pay Now
      </button>
    </div>
  );
};

export default Home;
