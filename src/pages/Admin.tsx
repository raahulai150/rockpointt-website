import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useTeamMembers, TeamMember } from "@/hooks/useTeamMembers";
import { useSiteContent, SITE_DEFAULTS, SITE_CONTENT_LABELS, SiteContent } from "@/hooks/useSiteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2, LogOut, Plus, Trash2, Upload, Save, ExternalLink } from "lucide-react";

const SIGNED_URL_TTL = 60 * 60 * 24 * 365 * 10; // ~10 years

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (user && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-heading font-bold">Access denied</h1>
        <p className="text-muted-foreground max-w-md">
          Your account is signed in but does not have admin access. Contact the site owner.
        </p>
        <Button variant="outline" onClick={() => signOut().then(() => navigate("/auth"))}>
          <LogOut className="w-4 h-4 mr-2" /> Sign out
        </Button>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-heading font-bold">Admin Panel</h1>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.open("/", "_blank")}>
              <ExternalLink className="w-4 h-4 mr-2" /> View site
            </Button>
            <Button variant="outline" size="sm" onClick={() => signOut().then(() => navigate("/auth"))}>
              <LogOut className="w-4 h-4 mr-2" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="team">
          <TabsList className="mb-6">
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="content">Site Content</TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <TeamManager />
          </TabsContent>
          <TabsContent value="content">
            <ContentEditor />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

/* ---------------- Team Manager ---------------- */

const TeamManager = () => {
  const { data: members = [] } = useTeamMembers();
  const queryClient = useQueryClient();
  const refresh = () => queryClient.invalidateQueries({ queryKey: ["team_members"] });

  const addMember = async () => {
    const maxOrder = members.reduce((m, x) => Math.max(m, x.sort_order), 0);
    const { error } = await supabase.from("team_members").insert({
      name: "New Member",
      role: "Position",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      sort_order: maxOrder + 1,
    });
    if (error) return toast.error(error.message);
    toast.success("Member added");
    refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{members.length} team members</p>
        <Button onClick={addMember} size="sm" className="gradient-primary text-accent-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add member
        </Button>
      </div>
      <div className="grid gap-4">
        {members.map((m) => (
          <MemberCard key={m.id} member={m} onChange={refresh} />
        ))}
      </div>
    </div>
  );
};

const MemberCard = ({ member, onChange }: { member: TeamMember; onChange: () => void }) => {
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [imageUrl, setImageUrl] = useState(member.image_url);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const dirty = name !== member.name || role !== member.role || imageUrl !== member.image_url;

  const save = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("team_members")
      .update({ name, role, image_url: imageUrl })
      .eq("id", member.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Saved");
    onChange();
  };

  const remove = async () => {
    if (!confirm(`Delete ${member.name}?`)) return;
    const { error } = await supabase.from("team_members").delete().eq("id", member.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    onChange();
  };

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${member.id}-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("team-photos").upload(path, file, { upsert: true });
      if (upErr) throw upErr;
      const { data, error: signErr } = await supabase.storage
        .from("team-photos")
        .createSignedUrl(path, SIGNED_URL_TTL);
      if (signErr) throw signErr;
      setImageUrl(data.signedUrl);
      toast.success("Photo uploaded — click Save to apply");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="relative w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : null}
          <label className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 hover:opacity-100 transition-opacity cursor-pointer text-primary-foreground">
            {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
            />
          </label>
        </div>
        <div className="flex-1 space-y-3">
          <div className="space-y-1">
            <Label className="text-xs">Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Position / Role</Label>
            <Input value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={save} disabled={!dirty || saving}>
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={remove} className="text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4 mr-2" /> Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ---------------- Content Editor ---------------- */

const ContentEditor = () => {
  const { data: content = SITE_DEFAULTS } = useSiteContent();
  const queryClient = useQueryClient();
  const [values, setValues] = useState<SiteContent>(content);
  const [saving, setSaving] = useState(false);

  useEffect(() => setValues(content), [content]);

  const save = async () => {
    setSaving(true);
    const rows = (Object.keys(values) as (keyof SiteContent)[]).map((key) => ({
      key,
      value: values[key],
    }));
    const { error } = await supabase.from("site_content").upsert(rows, { onConflict: "key" });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Content saved");
    queryClient.invalidateQueries({ queryKey: ["site_content"] });
  };

  return (
    <Card className="p-6 space-y-4">
      {(Object.keys(SITE_CONTENT_LABELS) as (keyof SiteContent)[]).map((key) => (
        <div key={key} className="space-y-1">
          <Label className="text-xs">{SITE_CONTENT_LABELS[key]}</Label>
          <Input
            value={values[key] ?? ""}
            onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
          />
        </div>
      ))}
      <Button onClick={save} disabled={saving} className="gradient-primary text-accent-foreground">
        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
        Save changes
      </Button>
    </Card>
  );
};

export default Admin;
