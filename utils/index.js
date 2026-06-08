import crypto from "crypto";
//currency formatter
export const moneyFormatter = (amount, currency) => {
  try {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    });
    if (formatted) {
      return formatted.format(amount, currency);
    } else {
      throw new Error("Unable to connect the endpoint");
    }
  } catch (error) {
    throw new Error("Error occured: ", error);
  }
};

export const capitalizeFirstLetter = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const lowerAllButFirst = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const genUniqueString = (length) => {
  const xters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * xters.length);
    result += xters[randomIndex];
  }
  return result;
};

export const tokenizer = (intValue) => {
  const token = crypto.randomBytes(intValue).toString("hex");
  return token;
};
export const tokenizerHash = (token) => {
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  return hash;
};

export const add2Nums = (v1, v2) => {
  const result = v1 + v2;
  return result;
};

export const subs2Nums = (v1, v2) => {
  const result = v1 - v2;
  return result;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
