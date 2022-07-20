import { useMemo } from "react";
import { AgGridContainerProps } from "../typings/AgGridProps";
import { ValueStatus } from "mendix";

export default function (props: AgGridContainerProps) {
    console.log(props);
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute]);

    return (
        <div>
            hello {props.sampleText} and your value is {value}
        </div>
    );
}
