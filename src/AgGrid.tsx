// import { useMemo } from "react";
import { AgGridContainerProps } from "../typings/AgGridProps";
// import { ValueStatus } from "mendix";
import { HelloWorldSample } from "./components/HelloWorldSample";

export default function (props: AgGridContainerProps) {
    console.log(props);
    // const value = useMemo(() => {
    //     if (props.attribute && props.attribute.status === ValueStatus.Available) {
    //         return props.attribute.value;
    //     }
    // }, [props.attribute]);

    return (
        <div>
            <HelloWorldSample></HelloWorldSample>
        </div>
    );
}
