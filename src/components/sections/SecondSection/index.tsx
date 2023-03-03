import { FC, useEffect, useRef, useState } from "react";
import CartoonImage from "../../../assets/cartoon.png";
import FoodImage from "../../../assets/food.png";
import MovieImage from "../../../assets/movie.png";
import LifeImage from "../../../assets/life.png";
import Logo from "../../../assets/logo.png";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cartoon");
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const TAB_HEIGHT = 56; // tab高度zz
  const SECTION_MARGIN = 56;
  // 点击tab，跳转到该section
  const activate = (key: string) => {
    setActiveTab(key);

    // 指定的section滚动到视野
    const tabContentEl = document.querySelector(`[data-id=${key}]`);
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: "smooth" }); // 滚动速度smooth
    }
  };
  const onScroll = () => {
    if (secondSectionRef.current) {
      // tab吸顶
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);

      // 滚动模块，触发tab切换
      const sectionNodes = secondSectionRef.current.querySelectorAll("section");
      Array.from(sectionNodes).forEach((sectionEl) => {
        const { top } = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute("data-id") || "";
        if (top <= TAB_HEIGHT + SECTION_MARGIN) {
          setActiveTab(key);
        }
      });
    }
  };

  // 全局监听滚动事件
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      // 销毁监听
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const tab = [
    {
      key: "cartoon",
      title: "动画",
      image: CartoonImage,
    },
    {
      key: "food",
      title: "美食",
      image: FoodImage,
    },
    {
      key: "movie",
      title: "电影",
      image: MovieImage,
    },
    {
      key: "life",
      title: "生活",
      image: LifeImage,
    },
  ];
  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      <ul className={classNames({ [styles.fixed]: isFixed })}>
        {tab.map((item) => (
          <li key={item.key} onClick={() => activate(item.key)}>
            <span>{item.title}</span>
            <span
              className={classNames(styles.line, {
                [styles.visible]: activeTab === item.key,
              })}
            ></span>
          </li>
        ))}
      </ul>

      <div>
        {tab.map((item) => (
          <section data-id={item.key} key={item.key}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.key} />
          </section>
        ))}
      </div>

      {/* 底部跳转提示 */}
      <div
        className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}
      >
        <img src={Logo} alt="bili" />
        <a href="https://bilibili.com/" target="_blank">
          <button>App 内打开</button>
        </a>
      </div>
    </div>
  );
};

export default SecondSection;
