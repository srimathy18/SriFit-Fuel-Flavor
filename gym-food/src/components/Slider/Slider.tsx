import "./Slider.css";
const Slider = function () {
  const sliderSectionStyle: React.CSSProperties = {
    position: "absolute",
    top: "40vh",
    // padding: "45px 0 75px 0",
    paddingTop: "45px",
    paddingBottom: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const detailBoxStyle = {
    color: "#ffffff",
    marginBottom: "145px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const h1Style = {
    fontSize: "5rem",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const pStyle = {
    fontSize: "1.rem",
    width: "50%",
  };
  return (
    <section className="slider_section" style={sliderSectionStyle}>
      <div className="detail_box" style={detailBoxStyle}>
        <h1 style={h1Style}>Gym Food Restaraunt</h1>
        <p style={pStyle}>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
      </div>
    </section>
  );
};

export default Slider;
