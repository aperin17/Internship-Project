import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function FormTextField({
    name,
    label,
    rules,
    type = "text",
    children,
    ...props
}) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    {...props}
                    type={type}
                    label={label}
                    fullWidth
                    size="small"
                    error={!!error}
                    helperText={error?.message}
                >
                    {children}
                </TextField>
            )}
        />
    );
}