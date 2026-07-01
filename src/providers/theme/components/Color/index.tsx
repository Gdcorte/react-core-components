"use client";

import { SimpleSelect } from "@/components/Select";
import { useTheme } from "@/providers/theme";
import { baseColors, isColor } from "@/providers/theme/layout";
import { ReactNode } from "react";
import styles from "./color.module.css";

export default function ColorPicker() {
  const { theme, color, setColor } = useTheme();

  function optionComponent(option: string): ReactNode {
    return (
      <div
        data-theme={theme}
        data-color={option}
        key={`item-${option}`}
        className={` ${styles["item-box"]}`}
      >
        <span
          style={{ background: "var(--primary-bg)" }}
          className={`${styles.item} `}
        ></span>
      </div>
    );
  }

  function handleSelection(value: string) {
    if (isColor(value)) {
      setColor(value);
    }
  }

  return (
    <SimpleSelect
      onSelect={handleSelection}
      triggerClass={styles["select-trigger-sizing"]}
      values={baseColors}
      selected={color}
      defaultValue="green"
      optionRendering={optionComponent}
    />
  );
}
