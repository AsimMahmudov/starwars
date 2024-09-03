import scss from "./VideoStar.module.scss";

const VideoStar = () => {
  return (
    <div className={scss.VideoStar}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.video}>
            <h2>Star Wars Battlefront 2: официальный трейлер</h2>
            <iframe
              className={scss.trey}
              src="https://www.youtube.com/embed/_q51LZ2HpbE"
              title="Star Wars Battlefront 2: официальный трейлер игрового процесса"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStar;
