import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { GearIcon, TrashIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { useRef } from "react"

interface IFormItemSelectProps {
  field: {
    onChange: () => void,
    value: string
  },
  options: object,
  newGenre: string,
  setNewGenre: (name: string) => void,
  handleNewGenre: () => void,
  handleDeleteGenre: (id: string) => void
}

export const SelectManageGenre: React.FC<IFormItemSelectProps> = (props) => {
  const { field, options, newGenre, setNewGenre, handleNewGenre, handleDeleteGenre } = props
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.focus();

  return (
    <Drawer>
      <FormItem className="w-1/2">
        <FormLabel>Genre</FormLabel>
        <div className="flex items-center justify-between space-x-2">
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select" defaultValue={field.value} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {
                  options && Object.values(options).map((option) => (
                    <SelectItem key={option.id} value={option.id}>{option.name}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
          <DrawerTrigger asChild>
            <Button variant="outline"><GearIcon /></Button>
          </DrawerTrigger>
        </div>
        <FormMessage />
      </FormItem>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">         
          <div className="p-4 pb-0">
            <div className="flex items-center space-x-2 mb-3">
              <Input
                ref={inputRef}
                placeholder='New Category...'
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
              <Button variant="outline" onClick={handleNewGenre}>Save</Button>
            </div> 

            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                {options && Object.values(options).map((option) => (
                  <div key={option.id}>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        {option.name}
                      </div>
                      <TrashIcon className="cursor-pointer" onClick={() => handleDeleteGenre(option.id)}/>
                    </div>
                    <Separator className="my-4" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SelectManageGenre