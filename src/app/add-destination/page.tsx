"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save, Trash2 } from "lucide-react";
import { useState } from "react";

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
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

const initialForm = {
  name: "",
  country: "",
  category: "",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const AddDestinationPage = () => {
  const [form, setForm] = useState(initialForm);

  const handelOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/add-destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="px-14 pt-28 pb-16">
      <h1 className="text-[40px] leading-snug font-light text-[#1c1c1c]">
        Add New Travel Package
      </h1>

      <form action="" onSubmit={handelOnSubmit}>
        <Card className="mx-auto mt-8 w-full max-w-107.5 py-6 shadow-sm">
          <CardContent className="flex flex-col gap-4 px-6">
            <Field label="Destination Name" htmlFor="destination-name">
              <Input
                id="destination-name"
                type="text"
                value={form.name}
                placeholder="Bali Paradise"
                className={fieldClass}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Country" htmlFor="country">
                <Input
                  id="country"
                  type="text"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  placeholder="Indonesia"
                  className={fieldClass}
                />
              </Field>

              <Field label="Category" htmlFor="category">
                <Select
                  value={form.category}
                  onValueChange={(e) => setForm({ ...form, category: e ?? "Beach" })}
                >
                  <SelectTrigger
                  
                    id="category"
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
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="e.g., 1299"
                  className={fieldClass}
                />
              </Field>
              <Field label="Duration" htmlFor="duration">
                <Input
                  id="duration"
                  value={form.duration}
                  onChange={(e) =>
                    setForm({ ...form, duration: e.target.value })
                  }
                  type="text"
                  placeholder="e.g., 7 Days/6 Nights"
                  className={fieldClass}
                />
              </Field>
            </div>

            <Field label="Departure Date" htmlFor="departure-date">
              <Input
                id="departure-date"
                value={form.departureDate}
                onChange={(e) =>
                  setForm({ ...form, departureDate: e.target.value })
                }
                type="date"
                placeholder="mm/dd/yyyy"
                className={fieldClass}
              />
            </Field>

            <Field label="Image URL" htmlFor="image-url">
              <Input
                id="image-url"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                type="text"
                placeholder="https://example.com/image.jpg"
                className={fieldClass}
              />
            </Field>

            <Field label="Description" htmlFor="description">
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Describe the travel experience..."
                className={`field-sizing-fixed h-24 py-2.5 ${fieldClass}`}
              />
            </Field>

            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-9 border-[#ef4444]/40 px-4 text-[#ef4444] hover:bg-[#ef4444]/5 hover:text-[#ef4444]"
              >
                <Trash2 size={16} />
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-9 gap-2 bg-[#15A1BF] px-4 text-white hover:bg-[#128daa]"
              >
                <Save size={16} />
                Add Travel Package
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default AddDestinationPage;
