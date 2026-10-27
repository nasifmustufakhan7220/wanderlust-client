"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IDestination } from "./DestinationCard";
import { useRouter } from "next/navigation";
const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Wildlife",
];
const fieldClass =
  "rounded-md border border-[#e9ebee] bg-[#f4f6f8] px-3.5 placeholder:text-[#9aa1ab]";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </span>
  );
}

const EditDialog = ({ detail }: { detail: IDestination }) => {
  const router = useRouter();

  const initialForm = {
    name: detail.name,
    country: detail.country,
    category: detail.category,
    price: detail.price,
    duration: detail.duration,
    departureDate: detail.departureDate.slice(0, 10),
    imageUrl: detail.imageUrl,
    description: detail.description,
  };
  const handelOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const res = await fetch(
      `http://localhost:8000/destinations/${detail._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      },
    );

    const data = await res.json();
    if (data.matchedCount > 0) router.refresh();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          render={
            <Button className="flex items-center gap-1.5 border border-gray-300 px-3 py-1.5 text-xs cursor-pointer">
              <Pencil size={12} />
              Edit
            </Button>
          }
        />
        <DialogContent className={`min-w-xl`}>
          <DialogHeader>
            <DialogTitle>Update Travel Package</DialogTitle>
            <DialogDescription>
              Make changes to the travel package details below
            </DialogDescription>
            <form action="" onSubmit={handelOnSubmit}>
              <Card className="mx-auto mt-8 w-full max-w-107.5 py-6 shadow-sm">
                <CardContent className="flex flex-col gap-4 px-6">
                  <Field label="Destination Name" htmlFor="destination-name">
                    <Input
                      id="destination-name"
                      name="name"
                      defaultValue={initialForm.name}
                      type="text"
                      placeholder="Bali Paradise"
                      className={fieldClass}
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Country" htmlFor="country">
                      <Input
                        id="country"
                        name="country"
                        defaultValue={initialForm.country}
                        type="text"
                        placeholder="Indonesia"
                        className={fieldClass}
                      />
                    </Field>

                    <Field label="Category" htmlFor="category">
                      <Select
                        name="category"
                        defaultValue={initialForm.category}
                      >
                        <SelectTrigger
                          id="category"
                          name="category"
                          className={`w-full ${fieldClass}`}
                        >
                          <SelectValue placeholder="Beach" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Price (USD)" htmlFor="price">
                      <Input
                        id="price"
                        type="text"
                        name="price"
                        defaultValue={initialForm.price}
                        placeholder="e.g., 1299"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Duration" htmlFor="duration">
                      <Input
                        id="duration"
                        name="duration"
                        defaultValue={initialForm.duration}
                        type="text"
                        placeholder="e.g., 7 Days/6 Nights"
                        className={fieldClass}
                      />
                    </Field>
                  </div>

                  <Field label="Departure Date" htmlFor="departure-date">
                    <Input
                      id="departure-date"
                      name="departureDate"
                      defaultValue={initialForm.departureDate}
                      type="date"
                      placeholder="mm/dd/yyyy"
                      className={fieldClass}
                    />
                  </Field>

                  <Field label="Image URL" htmlFor="image-url">
                    <Input
                      id="image-url"
                      name="imageUrl"
                      defaultValue={initialForm.imageUrl}
                      type="text"
                      placeholder="https://example.com/image.jpg"
                      className={fieldClass}
                    />
                  </Field>

                  <Field label="Description" htmlFor="description">
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={initialForm.description}
                      placeholder="Describe the travel experience..."
                      className={`field-sizing-fixed h-24 py-2.5 ${fieldClass}`}
                    />
                  </Field>

                  
                    <DialogFooter className="flex justify-end gap-3">
                      <DialogClose
                        render={
                          <Button
                            type="button"
                            variant="outline"
                            className="h-9 border-[#ef4444]/40 px-4 text-[#ef4444] hover:bg-[#ef4444]/5 hover:text-[#ef4444]"
                          >
                            <Trash2 size={16} />
                            Cancel
                          </Button>
                        }
                      ></DialogClose>

                      <DialogClose
                        render={
                          <Button
                            type="submit"
                            className="h-9 gap-2 bg-[#15A1BF] px-4 text-white hover:bg-[#128daa]"
                          >
                            <Save size={16} />
                            Edit Travel Package
                          </Button>
                        }
                      ></DialogClose>
                    </DialogFooter>
                </CardContent>
              </Card>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDialog;
