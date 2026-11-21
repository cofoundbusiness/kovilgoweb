/**
 * Form primitives and validation wrappers.
 * To be built alongside React Hook Form & Zod in upcoming phases.
 */
export interface FormFieldProps {
  name: string;
  label?: string;
  error?: string;
  helperText?: string;
}
