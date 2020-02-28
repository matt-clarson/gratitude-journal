import omit from "lodash/omit";
import moment from "moment";

export const formatData = data =>
  data?.myEntries?.map(entry =>
    Object.entries(omit(entry, "__typename")).reduce(
      (dataEntry, [key, value]) => ({
        ...dataEntry,
        [key]: key === "created" ? moment(value).format("Do MMMM YYYY") : value
      }),
      {}
    )
  ) ?? [];
