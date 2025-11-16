"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { cn } from "@/lib/utils";

type CustomQuoteFormProps = {
  locale: "fr" | "en";
};

export function CustomQuoteForm({ locale }: CustomQuoteFormProps) {
  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({});
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [projectType, setProjectType] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data, { deliveryDate, projectType, selectedServices });
    // TODO: Send to WordPress API
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setSelectedServices(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
      <h2 className="mb-2 text-3xl font-bold text-white">
        {locale === "fr" ? "Forfait À LA CARTE" : "CUSTOM Package"}
      </h2>
      <p className="mb-4 text-lg text-neutral-300">
        {locale === "fr"
          ? "Pour les projets avec des besoins uniques et particuliers"
          : "For projects with unique and specific needs"}
      </p>
      <p className="mb-8 max-w-3xl text-neutral-400">
        {locale === "fr"
          ? "Chaque projet est unique avec des besoins uniques et particuliers. Si vous avez une demande bien précise pour un projet bien précis, remplissez le formulaire ci-dessous pour obtenir un devis sur-mesure."
          : "Every project is unique with unique and specific needs. If you have a specific request for a specific project, fill out the form below to get a custom quote."}
      </p>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            {locale === "fr" ? "Informations de contact" : "Contact Information"}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <LabelInputContainer>
              <Label htmlFor="name" className="text-neutral-300">
                {locale === "fr" ? "Nom / Prénom" : "Name"} *
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={locale === "fr" ? "Votre nom complet" : "Your full name"}
                type="text"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="company" className="text-neutral-300">
                {locale === "fr" ? "Société" : "Company"}
              </Label>
              <Input
                id="company"
                name="company"
                placeholder={locale === "fr" ? "Nom de votre société" : "Your company name"}
                type="text"
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-neutral-300">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="contact@exemple.com"
                type="email"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="phone" className="text-neutral-300">
                {locale === "fr" ? "Téléphone" : "Phone"}
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+212 6XX XXX XXX"
                type="tel"
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
          </div>
        </div>

        {/* Project Type */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            {locale === "fr" ? "Votre projet" : "Your Project"}
          </h3>
          <LabelInputContainer>
            <Label htmlFor="projectType" className="text-neutral-300">
              {locale === "fr" ? "Type de projet" : "Project Type"} *
            </Label>
            <Select value={projectType} onValueChange={setProjectType} required>
              <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-white/30">
                <SelectValue placeholder={locale === "fr" ? "Sélectionnez un type" : "Select a type"} />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-neutral-900">
                <SelectItem value="all">{locale === "fr" ? "Tout" : "All"}</SelectItem>
                <SelectItem value="urbanism">{locale === "fr" ? "Urbanisme" : "Urbanism"}</SelectItem>
                <SelectItem value="villa">{locale === "fr" ? "Villa/Logement Individuel" : "Villa/Individual Housing"}</SelectItem>
                <SelectItem value="equipment">{locale === "fr" ? "Équipement" : "Equipment"}</SelectItem>
                <SelectItem value="buildings">{locale === "fr" ? "Immeubles" : "Buildings"}</SelectItem>
                <SelectItem value="offices">{locale === "fr" ? "Bureaux" : "Offices"}</SelectItem>
                <SelectItem value="education">{locale === "fr" ? "Enseignement" : "Education"}</SelectItem>
                <SelectItem value="collective">{locale === "fr" ? "Logement Collectif" : "Collective Housing"}</SelectItem>
                <SelectItem value="landscape">{locale === "fr" ? "Paysagisme" : "Landscaping"}</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="competition">{locale === "fr" ? "Concours" : "Competition"}</SelectItem>
                <SelectItem value="interior">{locale === "fr" ? "Aménagements intérieurs" : "Interior Design"}</SelectItem>
                <SelectItem value="other">{locale === "fr" ? "Autre" : "Other"}</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="projectType" value={projectType} />
          </LabelInputContainer>
        </div>

        {/* Services Type */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            {locale === "fr" ? "Type de service" : "Service Type"}
          </h3>

          {/* 2D Diagrams */}
          <div className="mb-6 rounded-lg border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 font-semibold text-neutral-200">
              {locale === "fr" ? "Schémas 2D" : "2D Diagrams"}
            </p>
            <div className="space-y-3">
              <ServiceCheckbox
                name="isometric"
                label={locale === "fr" ? "Schémas Isométriques et autres" : "Isometric Diagrams and others"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
              <ServiceCheckbox
                name="sections"
                label={locale === "fr" ? "Traitement de coupes et de façades" : "Section and Facade Treatment"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>

          {/* 3D Renders */}
          <div className="mb-6 rounded-lg border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 font-semibold text-neutral-200">
              {locale === "fr" ? "Rendus 3D" : "3D Renders"}
            </p>
            <div className="space-y-3">
              <ServiceCheckbox
                name="fixedRenders"
                label={locale === "fr" ? "Rendus Fixes" : "Fixed Renders"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
              <ServiceCheckbox
                name="videoRenders"
                label={locale === "fr" ? "Rendus Vidéo" : "Video Renders"}
                locale={locale}
                onChange={handleCheckboxChange}
                quantityLabel={locale === "fr" ? "Durée (min)" : "Duration (min)"}
              />
              <ServiceCheckbox
                name="panoramic360"
                label={locale === "fr" ? "Panoramiques 360°" : "360° Panoramas"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
              <ServiceCheckbox
                name="aiGeneration"
                label={locale === "fr" ? "Génération Artificielle" : "AI Generation"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>

          {/* Virtual Experiences */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 font-semibold text-neutral-200">
              {locale === "fr" ? "Expériences 3D Virtuelles" : "Virtual 3D Experiences"}
            </p>
            <div className="space-y-3">
              <ServiceCheckbox
                name="virtualReality"
                label={locale === "fr" ? "Réalité Virtuelle" : "Virtual Reality"}
                locale={locale}
                onChange={handleCheckboxChange}
              />
              <ServiceCheckbox
                name="virtualTours"
                label="Virtual Tours"
                locale={locale}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>

        {/* Delivery Date */}
        <LabelInputContainer>
          <Label htmlFor="deliveryDate" className="text-neutral-300">
            {locale === "fr" ? "Date de livraison souhaitée" : "Desired Delivery Date"} *
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start border-white/10 bg-white/5 text-left font-normal text-white hover:bg-white/10 hover:text-white focus-visible:ring-white/30",
                  !deliveryDate && "text-neutral-500"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {deliveryDate ? format(deliveryDate, "PPP") : <span>{locale === "fr" ? "Sélectionnez une date" : "Pick a date"}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto border-white/10 bg-neutral-900 p-0">
              <Calendar
                mode="single"
                selected={deliveryDate}
                onSelect={setDeliveryDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="deliveryDate" value={deliveryDate ? format(deliveryDate, "yyyy-MM-dd") : ""} />
        </LabelInputContainer>

        {/* Project Description */}
        <LabelInputContainer>
          <Label htmlFor="description" className="text-neutral-300">
            {locale === "fr" ? "Description de votre projet" : "Project Description"}
          </Label>
          <textarea
            id="description"
            name="description"
            rows={6}
            className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2"
            placeholder={locale === "fr" ? "Décrivez votre projet en détail..." : "Describe your project in detail..."}
          />
        </LabelInputContainer>

        {/* Budget */}
        <LabelInputContainer>
          <Label htmlFor="budget" className="text-neutral-300">
            {locale === "fr" ? "Budget indicatif (optionnel)" : "Indicative Budget (optional)"}
          </Label>
          <Input
            id="budget"
            name="budget"
            placeholder={locale === "fr" ? "Ex: 15,000 - 25,000 DH" : "Ex: 15,000 - 25,000 DH"}
            type="text"
            className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
          />
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-br from-white to-neutral-300 font-bold text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition hover:shadow-lg"
          type="submit"
        >
          {locale === "fr" ? "Envoyer ma demande" : "Send my request"} &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const ServiceCheckbox = ({
  name,
  label,
  locale,
  onChange,
  quantityLabel,
}: {
  name: string;
  label: string;
  locale: "fr" | "en";
  onChange: (name: string, checked: boolean) => void;
  quantityLabel?: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange(name, checked);
  };

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={name}
        name={name}
        checked={isChecked}
        onCheckedChange={handleChange}
        className="border-white/20 bg-white/5 data-[state=checked]:bg-white data-[state=checked]:text-black"
      />
      <Label htmlFor={name} className="flex-1 cursor-pointer text-neutral-300">
        {label}
      </Label>
      {isChecked && (
        <Input
          type="number"
          name={`${name}Quantity`}
          placeholder={quantityLabel || (locale === "fr" ? "Quantité" : "Quantity")}
          min="1"
          className="w-32 border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
        />
      )}
    </div>
  );
};
