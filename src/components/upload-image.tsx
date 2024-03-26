import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { Button } from "./ui/button";
import { UploadIcon } from "@radix-ui/react-icons";

interface IUploadImageProps {
  field: object,
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const UploadImage: React.FC<IUploadImageProps> = (props) => {
  const {field, handleFileChange} = props
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
    
  return (
    <FormItem className="w-1/2">
      <FormLabel>Image</FormLabel>
      <FormControl>
      
      <div className="flex items-center space-x-2">
        <Input placeholder="URL image"{...field} />
        <Input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <Button 
          className="text-sm" 
          variant="outline" 
          type="button" 
          onClick={handleClick}><UploadIcon />
        </Button>             
      </div>
   
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default UploadImage