import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const SITE_DEFAULTS = {
  hero_company: "Rock Point Technical Services Co.",
  hero_heading: "Reliable Skilled Manpower Supply Across Dubai,UAE",
  hero_subheading:
    "Certified Plumbers, Electricians, Welders & Technical Experts Ready For Immediate Deployment",
  contact_location: "Dubai, UAE",
  contact_phone: "+971 58 260 3787",
  contact_email: "rockpointtechservices.dubai@gmail.com",
  contact_hours: "Mon–Sat: 9AM–6PM",
};

export type SiteContent = typeof SITE_DEFAULTS;
export const SITE_CONTENT_LABELS: Record<keyof SiteContent, string> = {
  hero_company: "Hero – Company name",
  hero_heading: "Hero – Main heading",
  hero_subheading: "Hero – Subheading",
  contact_location: "Contact – Location",
  contact_phone: "Contact – Phone",
  contact_email: "Contact – Email",
  contact_hours: "Contact – Working hours",
};

export function useSiteContent() {
  return useQuery({
    queryKey: ["site_content"],
    queryFn: async (): Promise<SiteContent> => {
      const { data, error } = await supabase.from("site_content").select("key,value");
      if (error) throw error;
      const map: Record<string, string> = { ...SITE_DEFAULTS };
      (data ?? []).forEach((row) => {
        map[row.key] = row.value;
      });
      return map as SiteContent;
    },
  });
}
