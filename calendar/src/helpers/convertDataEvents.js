import { parseISO } from "date-fns";

export const convertDataEvents = (events = []) => {
  return events.map((event) => {
    event.end = parseISO(event.end);

    event.start = parseISO(event.start);
    return events;
  });
};
