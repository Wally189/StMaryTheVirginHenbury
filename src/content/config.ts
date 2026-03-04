import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    category: z.enum(["Parish", "Community", "Worship"]).default("Parish"),
    draft: z.boolean().default(false),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    time: z.string(),
    location: z.string(),
    category: z.enum(["All-age", "Music", "Seasonal", "Community"]),
    featured: z.boolean().default(false),
  }),
});

const people = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().int().default(99),
    phone: z.string().optional(),
    email: z.string().optional(),
    photo: z.string(),
    photoAlt: z.string(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    cards: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
          linkText: z.string().optional(),
          linkHref: z.string().optional(),
        }),
      )
      .optional(),
    sections: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        }),
      )
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    nextSteps: z.array(z.string()).optional(),
  }),
});

const serviceTimes = defineCollection({
  type: "data",
  schema: z.object({
    updated: z.string(),
    entries: z.array(
      z.object({
        day: z.string(),
        time: z.string(),
        title: z.string(),
        notes: z.string().optional(),
      }),
    ),
  }),
});

const safeguarding = defineCollection({
  type: "data",
  schema: z.object({
    urgentGuidance: z.array(z.string()),
    localContacts: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        phone: z.string().optional(),
        email: z.string().optional(),
      }),
    ),
    helplines: z.array(
      z.object({
        name: z.string(),
        phone: z.string().optional(),
        website: z.string().optional(),
        notes: z.string().optional(),
      }),
    ),
    documents: z.array(
      z.object({
        title: z.string(),
        file: z.string(),
        summary: z.string(),
      }),
    ),
  }),
});

const history = defineCollection({
  type: "data",
  schema: z.object({
    intro: z.string(),
    entries: z.array(
      z.object({
        era: z.string(),
        title: z.string(),
        summary: z.string(),
      }),
    ),
    churchyard: z.array(z.string()),
  }),
});

export const collections = {
  news,
  events,
  people,
  pages,
  "service-times": serviceTimes,
  safeguarding,
  history,
};
