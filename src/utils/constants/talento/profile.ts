import { InterestCategories } from "../profile";

export const categoriesKeys = {
  modeling: "modeling",
  performing: "performing",
  professional: "professional",
  support: "support",
  technology: "technology",
  other: "other",
};

export const interest: InterestCategories = {
  [categoriesKeys.modeling]: {
    id: 13,
    label: "Modeling",
    sub: [
      {
        categoryId: 13,
        id: 77,
        label: "Nude Models",
      },
      {
        categoryId: 13,
        id: 78,
        label: "Fetish Models",
      },
      {
        categoryId: 13,
        id: 79,
        label: "Webcam Models",
      },
      {
        categoryId: 13,
        id: 80,
        label: "Lingerie Models",
      },
      {
        categoryId: 13,
        id: 81,
        label: "Internet Models",
      },
      {
        categoryId: 13,
        id: 82,
        label: "Glamour Models",
      },
      {
        categoryId: 13,
        id: 83,
        label: "Promo Models",
      },
    ],
  },
  [categoriesKeys.performing]: {
    id: 14,
    label: "Performing",
    sub: [
      { categoryId: 14, id: 84, label: "Actors / Actress (Hard)" },
      { categoryId: 14, id: 85, label: "Amateurs" },
      { categoryId: 14, id: 86, label: "Clip Performers" },
      { categoryId: 14, id: 87, label: "Actors / Actreses (Soft)" },
      { categoryId: 14, id: 88, label: "Sub Perfomers" },
      { categoryId: 14, id: 89, label: "Reality Performers" },
      { categoryId: 14, id: 90, label: "Dom Performers" },
    ],
  },
  [categoriesKeys.professional]: {
    label: "Professional",
    id: 15,
    sub: [
      {
        categoryId: 15,
        id: 91,
        label: "Phone Sex Operators",
      },
      {
        categoryId: 15,
        id: 92,
        label: "Exotic Dancers",
      },
      {
        categoryId: 15,
        id: 93,
        label: "Executive Assistants",
      },
      {
        categoryId: 15,
        id: 94,
        label: "Text Chat Operators",
      },
      {
        categoryId: 15,
        id: 95,
        label: "Fan Page Managers",
      },
      {
        categoryId: 15,
        id: 96,
        label: "Miscelaneous",
      },
      {
        categoryId: 15,
        id: 97,
        label: "GO-GO Dancers",
      },
    ],
  },
  [categoriesKeys.support]: {
    id: 16,
    label: "Support",
    sub: [
      {
        categoryId: 16,
        id: 98,
        label: "Talent Recruiters",
      },
      {
        categoryId: 16,
        id: 99,
        label: "Managers",
      },
      {
        categoryId: 16,
        id: 100,
        label: "Admin / Office Staff",
      },
      {
        categoryId: 16,
        id: 101,
        label: "Make Up Artists",
      },
      {
        categoryId: 16,
        id: 102,
        label: "Club / Bar Staff",
      },
      {
        categoryId: 16,
        id: 103,
        label: "Booker / Dispatcher",
      },
      {
        categoryId: 16,
        id: 104,
        label: "Sales / Marketing",
      },
    ],
  },
  [categoriesKeys.technology]: {
    id: 17,
    label: "Technology",
    sub: [
      {
        categoryId: 17,
        id: 105,
        label: "Photographers",
      },
      {
        categoryId: 17,
        id: 106,
        label: "Webmasters",
      },
      {
        categoryId: 17,
        id: 107,
        label: "Editors / Writers",
      },
      {
        categoryId: 17,
        id: 108,
        label: "Security / Drivers",
      },
      {
        categoryId: 17,
        id: 109,
        label: "Graphic Artists",
      },
      {
        categoryId: 17,
        id: 110,
        label: "Production Staff",
      },
      {
        categoryId: 17,
        id: 111,
        label: "Social Media Experts",
      },
    ],
  },
  [categoriesKeys.other]: {
    id: 18,
    label: "Other",
    sub: [
      {
        categoryId: 18,
        id: 112,
        label: "Paid Travel",
      },
      {
        categoryId: 18,
        id: 113,
        label: "Work From Home",
      },
      {
        categoryId: 18,
        id: 114,
        label: "Newest Jobs",
      },
      {
        categoryId: 18,
        id: 115,
        label: "Top 50 Jobs",
      },
      {
        categoryId: 18,
        id: 116,
        label: "Industry Services",
      },
      {
        categoryId: 18,
        id: 117,
        label: "Shoot Locations",
      },
      {
        categoryId: 18,
        id: 118,
        label: "Business Opportunities",
      },
    ],
  },
};

export const interestArray = Object.values(interest);
