import { parseStyle } from "./piw-utils-internal";
import { AgGridPreviewProps } from "../typings/AgGridProps";

declare function require(name: string): string;

export function preview(props: AgGridPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
