import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { AgGridPreviewProps } from "../typings/AgGridProps";

export function getProperties(
    values: AgGridPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: AgGridPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
