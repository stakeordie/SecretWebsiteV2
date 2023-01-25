export const sizes = {
  none: "none",
  small: "small",
  medium: "medium",
  large: "large",
};

export function removeCharacters(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^-A-Za-z0-9]+/g, "")
    .toLowerCase();
}

export function uppercaseAllFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const removeLastSlash = (text) => {
  return text.charAt(text.length - 1) === "/" ? text.slice(0, -1) : path;
};
