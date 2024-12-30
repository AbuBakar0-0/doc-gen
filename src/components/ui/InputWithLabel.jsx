import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const InputWithLabel = ({ title = "", type = "text", id, width = "w-[32%]", value, onChange }) => {
  return (
    <div className={`${width} flex flex-col gap-1.5 my-2`}>
      <Label htmlFor={id}>{title}</Label>
      <Input
        type={type}
        placeholder={title}
        id={id}
        name={id}
        value={value} // Controlled input value
        onChange={onChange} // Controlled input change handler
      />
    </div>
  );
};

export default InputWithLabel;
