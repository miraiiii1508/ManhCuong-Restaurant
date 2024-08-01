import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";

const CustomCombobox = ({
  options = [],
  value,
  onChange,
  className,
  nameCombobox,
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const handleSelect = (selectedValue) => {
    onChange(selectedValue === value ? "" : selectedValue);
    setOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${className}`}
        >
          {value
            ? options.find((option) => option.value === value)?.label ||
              `${nameCombobox}`
            : `${nameCombobox}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="flex flex-col border border-gray-300 rounded-md bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border-b border-gray-300 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="max-h-[300px] overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
                    value === option.value ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                  {value === option.value && (
                    <CheckIcon className="ml-auto h-4 w-4 text-blue-500" />
                  )}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No options available.</div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomCombobox;
