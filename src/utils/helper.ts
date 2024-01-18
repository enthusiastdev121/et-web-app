import { differenceInYears, format } from "date-fns";
import { ApiImage } from "types/profile";
import momentTz from "moment-timezone";

export const userAccessToken = () => {
  const accessToken =
    localStorage.getItem("accessToken") !== undefined
      ? JSON.parse(localStorage.getItem("accessToken")!)
      : localStorage.clear();

  return accessToken;
};

export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user")!)
      : localStorage.clear();

  return userInfo;
};

export const convertToUnix = (val: number) => {
  return Math.floor(new Date(val).getTime() / 1000);
};

export const numberWithCommas = (x: any) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatSize = (bytes: number) => {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + "" + sizes[i];
};

export const formatPlayerDuration = (t: any) => {
  let s = Number(t).toFixed(0);
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
};

export const fetchAuthCreds = () => {
  const authCreds =
    localStorage.getItem("authCreds") !== undefined
      ? JSON.parse(localStorage.getItem("authCreds")!)
      : localStorage.clear();

  return authCreds;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const generateRandomString = (length: any) => {
  let result = "";
  const characters = "0123456789";
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters
      .charAt(Math.floor(Math.random() * charactersLength))
      .trim();
  }

  return result;
};

export const validatePassword = (password: string) => {
  return String(password).match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );
};

export const formatDate = (val: number) => {
  if (typeof val == "number") {
    if (differenceInYears(new Date(), new Date(val * 1000)) > 0) {
      return format(new Date(val * 1000), "d/MM/yyyy");
    } else {
      return format(new Date(val * 1000), "d MMM yyyy, K:mmaa");
    }
  } else {
    if (differenceInYears(new Date(), new Date(val)) > 0) {
      return format(new Date(val), "d/MM/yyyy");
    } else {
      return format(new Date(val), "K:mmaa, d MMM");
    }
  }
};

export const formatTimeAgo = (createdAt) => {
  return formatDate(momentTz.tz(createdAt, "America/Los_Angeles"));
};

export const formatTime = (val: string) => {
  const date = new Date(val);
  const time = date.toLocaleTimeString("en-US");
  const sec = time.slice(-6, -3);
  return time.replace(sec, "");
};

export const formateTimeWithMin = (val: string) => {
  const date = new Date(parseInt(val));
  const time = date.toLocaleTimeString("en-US");
  const sec = time.slice(-6, -3);
  return moment(date).fromNow();
};

export const formatDescription = (desc: string) => {};

export const formatAudtionDetailSlug = (str: string, id: number) => {
  const removeSpecialChar = str.replace(/[^\w\s]/gi, "");
  const slug = removeSpecialChar.replace(/\s+/g, "-").toLowerCase() + "_" + id;
  return slug;
};

export const formatContestDetailSlug = (str: string, id: number) => {
  const removeSpecialChar = str.replace(/[^\w\s]/gi, "");
  const slug = removeSpecialChar.replace(/\s+/g, "-").toLowerCase() + "-" + id;
  return slug;
};

export const formatContestantDetailSlug = (
  name: string,
  title: string,
  id: number
) => {
  const str = name + " " + title;
  const removeSpecialChar = str.replace(/[^\w\s]/gi, "");
  const removeSpace = removeSpecialChar.trim();
  const slug = removeSpace.replace(/\s+/g, "-").toLowerCase() + "-" + id;
  return slug;
};

export const formatNumberWithComma = (n: any) => {
  const num = n?.toString();
  const emptyStr = "";
  const group_regex = /\d{3}/g;

  // delete extra comma by regex replace.
  const trimComma = (str: any) => str.replace(/^[,]+|[,]+$/g, emptyStr);

  const str = num + emptyStr;
  const [integer, decimal] = str.split(".");

  const conversed = integer.split("").reverse().join("");

  const grouped = trimComma(
    conversed
      .replace(/\d{3}/g, (match) => `${match},`)
      .split("")
      .reverse()
      .join("")
  );

  return !decimal ? grouped : `${grouped}.${decimal}`;
};

export const checkValidImage = (url: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

export const diff_year_month_day = (dt1: any, dt2: any) => {
  var time = (dt2.getTime() - dt1.getTime()) / 1000;
  let time2 = new Date(dt2.getTime() - dt1.getTime());
  var year = Math.abs(Math.round(time / (60 * 60 * 24) / 365.25));
  var month = Math.abs(Math.round(time / (60 * 60 * 24 * 7 * 4)));
  var week = Math.abs(Math.round(time / (60 * 60 * 24 * 7)));
  var days = Math.abs(Math.round(time / (60 * 60 * 24)));
  var hours = time2.getHours();
  var minutes = time2.getMinutes();

  if (year > 0) {
    if (month > 0) {
      return `${year} years ${month} months`;
    } else {
      return `${year} years`;
    }
  } else if (month > 0) {
    if (month === 1) {
      return `${month} month`;
    } else {
      return `${month} months`;
    }
  } else if (week > 0) {
    if (week === 1) {
      return `${week} week`;
    } else {
      return `${week} weeks`;
    }
  } else if (days < 7) {
    if (days > 1) {
      return `${days} day`;
    } else {
      if (hours > 1) {
        return `${hours} hours`;
      } else {
        return `${minutes} minutes`;
      }
    }
  }
};

export function getVideoUploadDate(createdAt: number) {
  const dateCreated = new Date(1000 * createdAt);
  let currentDate = new Date();

  return diff_year_month_day(dateCreated, currentDate);
}

export function getMonth(month: any) {
  let output = null;
  switch (month) {
    case 1:
      output = "January";
      break;
    case 2:
      output = "February";
      break;
    case 3:
      output = "March";
      break;
    case 4:
      output = "April";
      break;
    case 5:
      output = "May";
      break;
    case 6:
      output = "June";
      break;
    case 7:
      output = "July";
      break;
    case 8:
      output = "August";
      break;
    case 9:
      output = "September";
      break;
    case 10:
      output = "October";
      break;
    case 11:
      output = "November";
      break;
    case 12:
      output = "December";
      break;
    default:
      output = month;
  }
  return output;
}

export const validateHttps = (string: string) => {
  let Regex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  return Regex.test(string);
};

export const formatApiImage = (image: any): ApiImage => {
  return {
    uri: image.path,
    type: image.mime,
    name: image.filename || image.path.split("/").pop(),
    filename: image.filename || image.path.split("/").pop(),
  };
};
export const formatApiMedia = (image: any): ApiImage => {
  return {
    uri: image.path,
    type: image.mime,
    name: image.filename || image.path.split("/").pop(),
    filename: image.filename || image.path.split("/").pop(),
  };
};

export function makePassword(length: number) {
  var result = "";
  var characters = "0123456789";
  // var characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getTimeRemaining(endtime: Date) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export const MONTHS = [
  {
    value: 1,
    label: "January",
  },
  {
    value: 2,
    label: "February",
  },
  {
    value: 3,
    label: "March",
  },
  {
    value: 4,
    label: "April",
  },
  {
    value: 5,
    label: "May",
  },
  {
    value: 6,
    label: "June",
  },
  {
    value: 7,
    label: "July",
  },
  {
    value: 8,
    label: "August",
  },
  {
    value: 9,
    label: "September",
  },
  {
    value: 10,
    label: "October",
  },
  {
    value: 11,
    label: "November",
  },
  {
    value: 12,
    label: "December",
  },
];

export function secondsToHms(d = 0) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);

  let hDisplay = h > 0 ? h + "h " : "";
  let mDisplay = m > 0 ? m + "m " : "";
  let sDisplay = s > 0 ? s + "s" : "";
  return hDisplay + mDisplay + sDisplay;
}
