import { useEffect } from "react";

const getBanglaDate = (day, date, month, year) => {
  console.log(day, date, month, year);
  const dayName = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  const monthBD = [
    "জানুয়ারী",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর"
  ];
  const numBD = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const banglaMonth = monthBD[month - 1];
  const banglaDay = dayName[day];
  const banglaDate = numBD[date.toString().split("")[0]] + (date.toString().split("")[1] ? numBD[date.toString().split("")[1]] :"");
  const banglaYear = numBD[year.toString().split("")[0]] + numBD[year.toString().split("")[1]] + numBD[year.toString().split("")[2]] + numBD[year.toString().split("")[3]];

  return (banglaDay + "," + " " + banglaDate + " " + banglaMonth + " " + banglaYear);
};

export default getBanglaDate;
