// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getArrayCustomResult(a?: number, opts?: pulumi.InvokeOptions): Promise<outputs.CustomResult[]> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeSingle("std:index:GetArrayCustomResult", {
        "a": a,
    }, opts);
}
export function getArrayCustomResultOutput(a?: pulumi.Input<number | undefined>, opts?: pulumi.InvokeOutputOptions): pulumi.Output<outputs.CustomResult[]> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeSingleOutput("std:index:GetArrayCustomResult", {
        "a": a,
    }, opts);
}
