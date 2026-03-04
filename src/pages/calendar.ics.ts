import { getCollection } from "astro:content";

const escapeText = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

const toIcsDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

export async function GET() {
  const events = (await getCollection("events")).sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
  const now = toIcsDate(new Date());
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//St Mary the Virgin Henbury//Events//EN",
    "CALSCALE:GREGORIAN",
  ];

  for (const event of events) {
    const startDate = event.data.start;
    const endDate = event.data.end ?? new Date(startDate.getTime() + 60 * 60 * 1000);
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${event.slug}@stmaryhenbury.org.uk`);
    lines.push(`DTSTAMP:${now}`);
    lines.push(`DTSTART:${toIcsDate(startDate)}`);
    lines.push(`DTEND:${toIcsDate(endDate)}`);
    lines.push(`SUMMARY:${escapeText(event.data.title)}`);
    lines.push(`DESCRIPTION:${escapeText(event.data.summary)}`);
    lines.push(`LOCATION:${escapeText(event.data.location)}`);
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  return new Response(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "attachment; filename=st-mary-henbury-events.ics",
    },
  });
}
