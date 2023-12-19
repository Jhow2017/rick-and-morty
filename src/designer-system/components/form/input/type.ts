import { TextInputProps, TextStyle } from "react-native";

type InputTypes = "text" | "search" | "date" | "password" | "number";

export type DsInputProps = Omit<TextInputProps, "textAlign"> &
    TextStyle & {
        type: InputTypes;
        TypeInput?: "flat" | "outlined";
        size: "small" | "medium" | "large";
        disabled?: string;
        error?: string;
    };
