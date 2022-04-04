export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_COLOR = "CHANGE_COLOR";

export const changeColor = (color: string) => ({
   type: CHANGE_COLOR,
   color: color,
});

export const changeMode = (mode: string) => ({
   type: CHANGE_THEME,
   mode: mode,
});

