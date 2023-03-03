import React, { useState } from "react";
import classNames from "classnames";
import Activity from "./components/sections/Activity";
import styles from "./styles.module.scss";

function App() {
  const [type, SetType] = useState("activity");
  return (
    <div className={styles.app}>
      <div className={classNames(styles["btn-box"])}>
        <button
          className={classNames({ [styles.active]: type === "activity" })}
          onClick={() => SetType("activity")}
        >
          活动
        </button>
        <button
          className={classNames({ [styles.active]: type === "video" })}
          onClick={() => SetType("video")}
        >
          视频
        </button>
      </div>
      {type === "activity" && <Activity></Activity>}
    </div>
  );
}

export default App;
