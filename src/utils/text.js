export const sizes = {
  none: "none",
  small: "small",
  medium: "medium",
  large: "large",
};

export const replaceWithSpace = (string = "") => string.replace(/[^A-Z0-9]+/ig, " ");

export const removeCharacters = (string = "") => {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^-A-Za-z0-9]+/g, "")
    .toLowerCase();
}

export const uppercaseAllFirstLetter = (string = "") => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const removeLastSlash = (text = "") => {
  return text.charAt(text.length - 1) === "/" ? text.slice(0, -1) : text;
};

export const generateUUID = () => {
  let uuid = "";
  let random;

  for (let i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
      16
    );
  }
  return uuid;
};
