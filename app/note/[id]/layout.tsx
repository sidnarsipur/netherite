import Breadcrumb from "@/components/note/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getNote } from "@/lib/note-manager";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SearchDialog } from "@/components/search-dialog/search-dialog";
import NavActions from "@/components/sidebar/nav-actions";
import Editor from "@/components/editor";
import { Input } from "@/components/ui/input";

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}) {
  const id = (await params).id;
  const note = await getNote(id);

  if (!note) {
    return <></>;
  }

  return (
    <Dialog>
      <div className="flex flex-1 flex-col items-start gap-5 p-10">
        <div className="flex w-full items-center gap-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb path={note.path} />
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </div>
        <div className="w-full rounded-xl border border-border bg-card">
          <input
            className="w-full bg-transparent p-5 text-2xl font-bold focus-visible:outline-none"
            defaultValue={note.name}
          />
          <Separator />
          <Editor noteID={note.id} />
        </div>
        <DialogTrigger asChild>
          <Button>Open Semantic Search</Button>
        </DialogTrigger>
        <SearchDialog>{children}</SearchDialog>
      </div>
    </Dialog>
  );
}