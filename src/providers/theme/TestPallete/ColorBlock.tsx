import styles from "./colorblock.module.css";

type Props = {
  label: string;
  variant: string;
};

export default function ColorBlock({ label, variant }: Props) {
  const conic = `conic-gradient(
    var(--${variant}-bg) 0deg,
    var(--${variant}-bg) 110deg,
    var(--${variant}-bg-hov) 120deg, 
    var(--${variant}-bg-hov) 230deg, 
    var(--${variant}-bg-act) 240deg,
    var(--${variant}-bg-act) 350deg
  )`;

  return (
    <div style={{ color: `var(--${variant}-txt)` }} className={styles.showcase}>
      <div
        style={{ background: `var(--${variant}-bg)` }}
        className={styles.block}
      >
        Aa
      </div>

      <div className={styles.title}>{label}</div>
      <div style={{ background: conic }} className={styles.action} />
    </div>
  );
}
