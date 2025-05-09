# coding=utf-8
# *** WARNING: this file was generated by test. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import builtins
import pulumi
from enum import Enum

__all__ = [
    'ExampleEnum',
    'ExampleEnumInput',
    'ResourceType',
]


@pulumi.type_token("example::ExampleEnum")
class ExampleEnum(builtins.str, Enum):
    ONE = "one"
    TWO = "two"


@pulumi.type_token("example::ExampleEnumInput")
class ExampleEnumInput(builtins.str, Enum):
    ONE = "one"
    TWO = "two"


@pulumi.type_token("example::ResourceType")
class ResourceType(builtins.str, Enum):
    HAHA = "haha"
    BUSINESS = "business"
