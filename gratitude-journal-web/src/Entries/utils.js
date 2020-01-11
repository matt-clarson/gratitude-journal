import omit from "lodash/omit";
import moment from "moment";

export const headers = [
  { key: "content", name: "Entry", colWidth: "35vw" },
  { key: "created", name: "Date Posted" }
];

export const formatData = data =>
  data?.myEntries?.map(entry =>
    Object.entries(omit(entry, "__typename")).reduce(
      (dataEntry, [key, value]) => ({
        ...dataEntry,
        [key]: {
          value,
          display:
            key === "created" ? d => moment(d).format("Do MMMM YYYY") : null
        }
      }),
      {}
    )
  ) ?? [];
