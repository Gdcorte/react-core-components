"use client";

import { Select } from "radix-ui";
import { ReactNode } from "react";
import styles from "./simple-select.module.css";

type SelectConfig = {
  useMarker?: boolean;
};

type Props = {
  values: string[] | readonly string[];
  triggerClass?: string;
  contentClass?: string;
  onSelect: (value: string) => void;
  selected?: string;
  defaultValue?: string;
  config?: SelectConfig;
  optionRendering: (value: string) => ReactNode;
};

export default function SimpleSelect({
  onSelect,
  triggerClass,
  contentClass,
  values,
  selected,
  defaultValue,
  config,
  optionRendering,
}: Props) {
  return (
    <Select.Root
      value={selected}
      onValueChange={onSelect}
      defaultValue={defaultValue}
    >
      <Select.Trigger className={`${styles.trigger} ${triggerClass}`}>
        {selected && optionRendering(selected)}

        {config?.useMarker && <Select.Icon />}
      </Select.Trigger>
      <Select.Content
        className={`${styles.content} ${contentClass}`}
        position="popper"
      >
        {values.map((option: string) => (
          <Select.Item key={option} className={styles.option} value={option}>
            {optionRendering(option)}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
