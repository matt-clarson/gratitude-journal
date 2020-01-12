import moment from "moment";

export const formatEntry = entry =>
  `${entry.content} - ${moment(entry.created).format("Do MMM YYYY")}`;
