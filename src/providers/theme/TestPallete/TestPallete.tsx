import ColorBlock from "./ColorBlock";
import styles from "./testpallete.module.css";

export default function TestPallete({}) {
  const progressiveElevation = `linear-gradient(
    to right,
    var(--elev-lowest) 0 20%,
    var(--elev-lower) 20% 40%,
    var(--background) 40% 60%,
    var(--elev-higher) 60% 80%,
    var(--elev-highest) 80% 100%
  )`;

  //   const progressiveElevation =
  //     "linear-gradient(to right, red 0 50%, blue 50% 100%)";

  return (
    <main className={styles.container}>
      <span className={styles.title}>HELLO FRIEND</span>
      <div className={styles.pallete}>
        <div className={styles.block}>
          <ColorBlock label="Primary" variant="primary" />
          <ColorBlock label="Secondary" variant="secondary" />
          <ColorBlock label="Tertiary" variant="tertiary" />
          <ColorBlock label="Extra" variant="extra" />
        </div>

        <div
          style={{ background: progressiveElevation }}
          className={styles["elevations-block"]}
        />

        <div className={`${styles.block} ${styles.alerts}`}>
          <ColorBlock label="Success" variant="alert-yay" />
          <ColorBlock label="Neutral" variant="alert-none" />
          <ColorBlock label="Info" variant="alert-info" />
          <ColorBlock label="Warning" variant="alert-warn" />
          <ColorBlock label="Danger" variant="alert-dg" />
        </div>

        <div className={styles["shadow-block"]}>
          <div style={{ boxShadow: "var(--shadow-left)" }}></div>
          <div style={{ boxShadow: "var(--shadow-up)" }}></div>
          <div style={{ boxShadow: "var(--shadow-down)" }}></div>
          <div style={{ boxShadow: "var(--shadow-center)" }}></div>
          <div style={{ boxShadow: "var(--shadow-right)" }}></div>
        </div>
      </div>
    </main>
  );
}
