import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string;
  sort_order: number;
}

export function useTeamMembers() {
  return useQuery({
    queryKey: ["team_members"],
    queryFn: async (): Promise<TeamMember[]> => {
      const { data, error } = await supabase
        .from("team_members")
        .select("id,name,role,image_url,sort_order")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      // Remap Lovable CDN URLs to locally-hosted /team/ files so the site
      // works when self-hosted (Hostinger, Node, etc.) without CDN access.
      const mapped = (data ?? []).map((m) => {
        let url = m.image_url || "";
        const match = url.match(/\/__l5e\/assets-v1\/[^/]+\/(.+)$/);
        if (match) url = `/team/${match[1]}`;
        return { ...m, image_url: url };
      });
      return mapped;
    },
  });
}
