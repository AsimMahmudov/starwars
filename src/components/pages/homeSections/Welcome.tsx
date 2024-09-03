import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section id="home" className={scss.Welcome}>
      <div className="container">
        <div className={scss.logo}>
          <img
            src="https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefront-2-mono-logo.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
