import {
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"

interface IFormItemTextareaProps {
  rows: number,
  field: object,
  label: string
}

export const FormItemTextarea: React.FC<IFormItemTextareaProps> = (props) => {  
  const { field, rows, label } = props
  
  return (
    <FormItem>
    <FormLabel>{label}</FormLabel>
    <Textarea
      rows={rows}
      className="resize-none"
      autoCorrect="off"
      spellCheck={false}
      {...field}
    />
    <FormMessage />
  </FormItem>
  )
}

export default FormItemTextarea