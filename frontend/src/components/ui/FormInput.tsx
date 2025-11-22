import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

interface FormInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    className?: string;
}

export function FormInput<T extends FieldValues>({ control, name, label, className, ...props }: FormInputProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({field, fieldState}) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name}>{label}</FieldLabel>
                    <Input
                        {...field}
                        {...props}
                        id={name}
                        aria-invalid={fieldState.invalid}
                        value={field.value || ""}
                    />
                    {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        >
        </Controller>
    )
}