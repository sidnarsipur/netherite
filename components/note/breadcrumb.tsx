import { ChevronDown, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbWithDropdown({ path }: { path: String }) {
  const segments = path.split("/");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, idx) => (
          <>
            {idx !== 0 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}
            <BreadcrumbItem>{segment}</BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
