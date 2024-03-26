import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

interface IFormItemInputProps {
  field: object,
  addClass: string,
  label: string,
  inputRef: React.RefObject<HTMLInputElement>;
}

export const FormItemInput: React.FC<IFormItemInputProps> = (props) => {
  const { field, addClass, label, inputRef } = props

  return (
    <FormItem className={addClass}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...field} ref={inputRef} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FormItemInput