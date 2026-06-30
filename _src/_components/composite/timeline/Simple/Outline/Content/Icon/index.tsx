import { useMemo } from "react";
import { TimelinePlacement } from "../../../interface";
import ContentIconOpen from "./Down";
import ContentIconClose from "./Up";

export type IconAction = "expand" | "collapse";
type IconType = "up" | "down";

type Props = {
  placement: TimelinePlacement;
  action: IconAction;
};

export default function SmartIcon({ placement, action }: Props) {
  const targetIcon: IconType = useMemo(() => {
    let target: IconType = "down";

    if (placement == "bottom") {
      target = "up";
    }

    //   Reverse for collapsing
    if (action == "expand") {
      target = target === "down" ? "up" : "down";
    }

    return target;
  }, [placement, action]);

  if (targetIcon === "up") return <ContentIconClose />;

  return <ContentIconOpen />;
}
