import {
  BrickWall,
  Zap,
  Construction,
  Hammer,
  Flame,
  Wrench,
  PaintRoller,
  SquareStack,
  AirVent,
} from "lucide-react";
import masonImg from "@/assets/service-mason.jpg";
import shutteringImg from "@/assets/service-shuttering.jpg";
import actechnician from "../assets/ac-technician.jpg";
import gypsum from "../assets/gypsum.jpg";
export type Service = {
  slug: string;
  icon: typeof BrickWall;
  title: string;
  desc: string;
  longDesc: string;
  bg: string;
};

export const services: Service[] = [
  {
    slug: "mason",
    icon: BrickWall,
    title: "Mason",
    desc: "Skilled masons for blockwork, plastering, and concrete finishing on all project types.",
    longDesc:
      "Rock Point supplies experienced masons in Dubai and across the UAE for blockwork, brickwork, cement plastering, screeding, and precision concrete finishing. Our masons work on villas, high-rise towers, commercial fit-outs, and infrastructure projects, following approved drawings and UAE construction standards. Available for short-term site support or long-term contracts with fast deployment.",
    bg: masonImg,
  },
  {
    slug: "electrician",
    icon: Zap,
    title: "Electrician",
    desc: "Certified electricians for wiring, panels, and complete electrical system installations.",
    longDesc:
      "Hire certified electricians in Dubai for LV wiring, DB and panel installation, cable pulling, lighting, containment, and complete electrical fit-out and testing. Our electricians are trained in DEWA and UAE wiring regulations and safety compliance, supporting construction, facility management, and industrial clients with reliable, code-compliant workmanship.",
    bg: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "steel-fixer",
    icon: Construction,
    title: "Steel Fixer",
    desc: "Experienced steel fixers for rebar tying, reinforcement, and structural steelwork.",
    longDesc:
      "Our steel fixers (rebar fixers) in the UAE handle cutting, bending, and tying of reinforcement for foundations, columns, slabs, beams, and structural concrete works. Experienced in reading bar bending schedules and structural drawings, they ensure accurate reinforcement placement on schedule for construction and infrastructure projects of any scale.",
    bg: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "shuttering-carpenter",
    icon: Hammer,
    title: "Shuttering Carpenter",
    desc: "Precision shuttering carpenters for formwork, moulds, and concrete casting support.",
    longDesc:
      "Skilled shuttering carpenters in Dubai for timber and system formwork, column and slab moulds, and safe concrete casting support. Our carpenters set out and erect accurate, well-aligned formwork for reliable concrete finishes, working efficiently to meet pour schedules on residential, commercial, and industrial sites across the Emirates.",
    bg: shutteringImg,
  },
  {
    slug: "welder",
    icon: Flame,
    title: "Welder",
    desc: "Expert welders skilled in MIG, TIG, and arc welding for structural and industrial work.",
    longDesc:
      "Rock Point provides certified welders in Dubai and the UAE skilled in MIG, TIG, and arc (SMAW) welding for structural steel, pipelines, fabrication, and industrial maintenance. Our welders work with carbon steel, stainless steel, and aluminium, follow WPS and QA/QC requirements, and produce strong, clean, code-compliant welds. 6G-qualified and fabrication-experienced welders are available for oil & gas, construction, and manufacturing projects with rapid deployment.",
    bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "plumber",
    icon: Wrench,
    title: "Plumber",
    desc: "Licensed plumbers for residential, commercial, and industrial installations and maintenance.",
    longDesc:
      "Hire licensed plumbers in the UAE for water supply, drainage, sanitary fixtures, pipe fitting, and pressure testing across residential, commercial, and industrial projects. Our plumbers install and maintain PPR, PVC, and copper systems to UAE plumbing codes, and are available for new installations, fit-outs, and ongoing maintenance support.",
    bg: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "painter",
    icon: PaintRoller,
    title: "Painter",
    desc: "Professional painters for interior, exterior, and decorative finishing with a flawless result.",
    longDesc:
      "Professional painters in Dubai for interior and exterior painting, surface preparation, putty and primer application, texture coats, and decorative finishes. Our painters deliver smooth, uniform, high-quality results for villas, apartments, offices, and commercial spaces, using durable UAE-climate-suitable coatings and working to tight handover deadlines.",
    bg: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "gypsum-carpenter",
    icon: SquareStack,
    title: "Gypsum Carpenter",
    desc: "Skilled gypsum carpenters for false ceilings, partitions, and decorative gypsum works.",
    longDesc:
      "Skilled gypsum carpenters in the UAE for false ceilings, gypsum board partitions, bulkheads, cornices, and decorative gypsum works. Experienced in drywall framing, jointing, and finishing, our workers create clean, level surfaces ready for paint on fit-out, retail, hospitality, and residential projects across Dubai.",
    bg: "gypsumcarpenter",
  },
  {
    slug: "ac-technician",
    icon: AirVent,
    title: "AC Technician",
    desc: "Qualified AC technicians for installation, servicing, and repair of HVAC and cooling systems.",
    longDesc:
      "Qualified AC and HVAC technicians in Dubai for installation, servicing, repair, and maintenance of split, ducted, and central cooling systems. Our technicians handle ducting, gas charging, fault diagnosis, and preventive maintenance to keep HVAC systems efficient in the UAE climate, supporting construction, FM, and industrial clients year-round.",
    bg: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
