import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import CustomCombobox from "../atoms/customCombobox";
import { DatePickerDemo } from "../atoms/customDatapicker";
const optioneTime = [
  { label: "7 giờ", value: "7a.m" },
  { label: "8 giờ", value: "8a.m" },
  { label: "9 giờ", value: "9a.m" },
  { label: "10 giờ", value: "10a.m" },
  { label: "11 giờ", value: "11a.m" },
  { label: "12 giờ", value: "12a.m" },
  { label: "13 giờ", value: "1p.m" },
  { label: "14 giờ", value: "2p.m" },
  { label: "15 giờ", value: "3.m" },
  { label: "16 giờ", value: "4.m" },
  { label: "17 giờ", value: "5p.m" },
  { label: "18 giờ", value: "6p.m" },
  { label: "19 giờ", value: "7p.m" },
  { label: "20 giờ", value: "8p.m" },
  { label: "21 giờ", value: "9p.m" },
  { label: "22 giờ", value: "10p.m" },
];
const optionNumberPeople = [
  { label: "1 người", value: "1" },
  { label: "2 người", value: "2" },
  { label: "3 người", value: "3" },
  { label: "4 người", value: "4" },
  { label: "5 người", value: "5" },
  { label: "6 người +", value: "6.5" },
];
const FormSlider = () => {
  const valueDefault = {
    name: "",
    phone: "",
    date: "",
    time: "",
    numberPeople: "",
  };
  const [formData, setFormData] = useState(valueDefault);
  const handleComboboxChange = (value, key) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };
  const handleDateChange = (selectedDate) => {
    setFormData({
      ...formData,
      date: selectedDate, // Cập nhật ngày vào state
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-9 w-[80%] 2md:w-[860px] xl:w-[1200px] flex flex-col 2md:flex-row justify-center items-center gap-5 bg-primaryColor text-black"
    >
      <div className=" flex flex-col 2md:flex-row justify-center items-center gap-5 w-full">
        <Input
          className=" basis-1/6 xl:w-[170px] 2md:w-[120px] w-full xl:px-6 xl:py-8 px-3 py-4 2md:px-4 2md:py-6 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Họ và tên"
        />
        <Input
          className=" basis-1/6 xl:w-[170px] 2md:w-[120px] w-full xl:px-6 xl:py-8 px-3 py-4 2md:px-4 2md:py-6 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Số điện thoại"
        />
        <DatePickerDemo
          onDateChange={handleDateChange}
          className="basis-1/6 xl:w-[170px] 2md:w-[120px] xl:px-6 xl:py-8 px-3 py-4 2md:px-4 2md:py-6 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
        />
        <CustomCombobox
          nameCombobox="Thời gian"
          options={optioneTime}
          value={formData.time} // Đây là combobox cho "Thời gian"
          onChange={(value) => handleComboboxChange(value, "time")}
          className="basis-1/6 xl:w-[170px] 2md:w-[120px] w-full xl:px-6 xl:py-8 px-3 py-4 2md:px-4 2md:py-6 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
        />

        <CustomCombobox
          nameCombobox="Số người"
          options={optionNumberPeople} // Đây là combobox cho "Số người"
          value={formData.numberPeople}
          onChange={(value) => handleComboboxChange(value, "numberPeople")}
          className="basis-1/6 xl:w-[170px] 2md:w-[120px] w-full xl:px-6 xl:py-8 px-3 py-4 2md:px-4 2md:py-6 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
        />
        {/* <Input
          className="px-6 py-8 text-xl 2md:text-[16px] xl:text-xl font-Great text-[#0f0f0f] border-[#fff]"
          name="numberPeople"
          value={formData.numberPeople}
          onChange={handleInputChange}
          placeholder="Số người"
        /> */}
      </div>
      <Button
        className="basis-1/6 2md:w-[120px] px-16 py-4 xl:px-16 xl:py-8 2md:px-12 2md:py-6 text-xl 2md:text-sm xl:text-xl font-Great bg-white text-[#000]"
        type="submit"
      >
        Đặt bàn
      </Button>
    </form>
  );
};
export default FormSlider;
