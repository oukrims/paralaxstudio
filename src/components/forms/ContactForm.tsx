"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  locale: "fr" | "en";
};

export function ContactForm({ locale }: ContactFormProps) {
  const [clientType, setClientType] = useState<string>("");
  const [projectTypes, setProjectTypes] = useState<Record<string, boolean>>({});
  const [services, setServices] = useState<Record<string, boolean>>({});
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Contact form submitted:", {
      ...data,
      clientType,
      projectTypes,
      services,
      budget,
      timeline,
      acceptTerms,
      newsletter
    });
    // TODO: Send to WordPress API or email service
  };

  const toggleProjectType = (type: string, checked: boolean) => {
    setProjectTypes(prev => ({ ...prev, [type]: checked }));
  };

  const toggleService = (service: string, checked: boolean) => {
    setServices(prev => ({ ...prev, [service]: checked }));
  };

  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
      <h2 className="mb-2 text-3xl font-bold text-white">
        {locale === "fr" ? "Envoyez-nous un message" : "Send us a message"}
      </h2>
      <p className="mb-8 text-neutral-400">
        {locale === "fr"
          ? "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24-48 heures"
          : "Fill out the form below and we'll respond within 24-48 hours"}
      </p>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            {locale === "fr" ? "Informations personnelles" : "Personal Information"}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <LabelInputContainer>
              <Label htmlFor="firstName" className="text-neutral-300">
                {locale === "fr" ? "Prénom" : "First Name"} *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder={locale === "fr" ? "Votre prénom" : "Your first name"}
                type="text"
                required
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName" className="text-neutral-300">
                {locale === "fr" ? "Nom" : "Last Name"} *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder={locale === "fr" ? "Votre nom" : "Your last name"}
                type="text"
                required
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
            <LabelInputContainer>
              <Label htmlFor="company" className="text-neutral-300">
                {locale === "fr" ? "Société/Organisation" : "Company/Organization"}
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
              <Label htmlFor="country" className="text-neutral-300">
                {locale === "fr" ? "Pays" : "Country"}
              </Label>
              <Input
                id="country"
                name="country"
                placeholder={locale === "fr" ? "Maroc" : "Morocco"}
                type="text"
                className="border-white/10 bg-white/5 text-white placeholder:text-neutral-500 focus-visible:ring-white/30"
              />
            </LabelInputContainer>
          </div>
        </div>

        {/* Your Project */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-white">
            {locale === "fr" ? "Votre projet" : "Your Project"}
          </h3>

          {/* Client Type */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="clientType" className="text-neutral-300">
              {locale === "fr" ? "Vous êtes" : "You are"} *
            </Label>
            <Select value={clientType} onValueChange={setClientType} required>
              <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-white/30">
                <SelectValue placeholder={locale === "fr" ? "Sélectionnez votre profil" : "Select your profile"} />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-neutral-900">
                <SelectItem value="architect">{locale === "fr" ? "Architecte généraliste" : "General Architect"}</SelectItem>
                <SelectItem value="interior-architect">{locale === "fr" ? "Architecte d'intérieur" : "Interior Architect"}</SelectItem>
                <SelectItem value="urban-planner">{locale === "fr" ? "Urbaniste" : "Urban Planner"}</SelectItem>
                <SelectItem value="landscape">{locale === "fr" ? "Paysagiste" : "Landscape Architect"}</SelectItem>
                <SelectItem value="developer">{locale === "fr" ? "Promoteur immobilier" : "Real Estate Developer"}</SelectItem>
                <SelectItem value="construction">{locale === "fr" ? "Société de construction" : "Construction Company"}</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="scenographer">{locale === "fr" ? "Scénographe" : "Scenographer"}</SelectItem>
                <SelectItem value="individual">{locale === "fr" ? "Particulier" : "Individual"}</SelectItem>
                <SelectItem value="project-owner">{locale === "fr" ? "Porteur de projet" : "Project Owner"}</SelectItem>
                <SelectItem value="other">{locale === "fr" ? "Autre" : "Other"}</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="clientType" value={clientType} />
          </LabelInputContainer>

          {/* Project Types */}
          <div className="mb-6">
            <Label className="mb-4 block text-neutral-300">
              {locale === "fr" ? "Type de projet" : "Project Type"} *
            </Label>
            <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-2">
              {[
                { value: "urbanism", label: locale === "fr" ? "Urbanisme" : "Urbanism" },
                { value: "villa", label: locale === "fr" ? "Villa/Logement Individuel" : "Villa/Individual Housing" },
                { value: "equipment", label: locale === "fr" ? "Équipement" : "Equipment" },
                { value: "buildings", label: locale === "fr" ? "Immeubles" : "Buildings" },
                { value: "offices", label: locale === "fr" ? "Bureaux" : "Offices" },
                { value: "education", label: locale === "fr" ? "Enseignement" : "Education" },
                { value: "collective", label: locale === "fr" ? "Logement Collectif" : "Collective Housing" },
                { value: "landscape", label: locale === "fr" ? "Paysagisme" : "Landscaping" },
                { value: "commercial", label: "Commercial" },
                { value: "design", label: "Design" },
                { value: "competition", label: locale === "fr" ? "Concours" : "Competition" },
                { value: "interior", label: locale === "fr" ? "Aménagements Intérieurs" : "Interior Design" },
                { value: "other", label: locale === "fr" ? "Autre" : "Other" },
              ].map((type) => (
                <div key={type.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`project-${type.value}`}
                    checked={projectTypes[type.value] || false}
                    onCheckedChange={(checked) => toggleProjectType(type.value, checked as boolean)}
                    className="border-white/20 bg-white/5 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <Label htmlFor={`project-${type.value}`} className="cursor-pointer text-sm text-neutral-300">
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <Label className="mb-4 block text-neutral-300">
              {locale === "fr" ? "Services qui vous intéressent" : "Services you're interested in"}
            </Label>
            <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-2">
              {[
                { value: "2d-diagrams", label: locale === "fr" ? "Schémas 2D (Isométriques, Coupes, Façades)" : "2D Diagrams (Isometric, Sections, Facades)" },
                { value: "3d-renders", label: locale === "fr" ? "Rendus 3D Fixes" : "3D Fixed Renders" },
                { value: "3d-animations", label: locale === "fr" ? "Animations Vidéo 3D" : "3D Video Animations" },
                { value: "360-panoramas", label: locale === "fr" ? "Rendus Panoramiques 360°" : "360° Panoramic Renders" },
                { value: "ai-generation", label: locale === "fr" ? "Génération Artificielle" : "AI Generation" },
                { value: "vr", label: locale === "fr" ? "Réalité Virtuelle" : "Virtual Reality" },
                { value: "virtual-tours", label: "Virtual Tours" },
                { value: "other", label: locale === "fr" ? "Autre" : "Other" },
              ].map((service) => (
                <div key={service.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`service-${service.value}`}
                    checked={services[service.value] || false}
                    onCheckedChange={(checked) => toggleService(service.value, checked as boolean)}
                    className="border-white/20 bg-white/5 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <Label htmlFor={`service-${service.value}`} className="cursor-pointer text-sm text-neutral-300">
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="budget" className="text-neutral-300">
              {locale === "fr" ? "Budget estimé" : "Estimated Budget"}
            </Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-white/30">
                <SelectValue placeholder={locale === "fr" ? "Sélectionnez une fourchette" : "Select a range"} />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-neutral-900">
                <SelectItem value="under-5k">{locale === "fr" ? "Moins de 5 000 DH" : "Less than 5,000 DH"}</SelectItem>
                <SelectItem value="5k-15k">5,000 - 15,000 DH</SelectItem>
                <SelectItem value="15k-30k">15,000 - 30,000 DH</SelectItem>
                <SelectItem value="30k-50k">30,000 - 50,000 DH</SelectItem>
                <SelectItem value="over-50k">{locale === "fr" ? "Plus de 50 000 DH" : "Over 50,000 DH"}</SelectItem>
                <SelectItem value="to-define">{locale === "fr" ? "À définir" : "To be defined"}</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={budget} />
          </LabelInputContainer>

          {/* Timeline */}
          <LabelInputContainer className="mb-6">
            <Label htmlFor="timeline" className="text-neutral-300">
              {locale === "fr" ? "Délai souhaité" : "Desired Timeline"}
            </Label>
            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-white/30">
                <SelectValue placeholder={locale === "fr" ? "Sélectionnez un délai" : "Select a timeline"} />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-neutral-900">
                <SelectItem value="urgent">{locale === "fr" ? "Urgent (moins d'une semaine)" : "Urgent (less than a week)"}</SelectItem>
                <SelectItem value="standard">{locale === "fr" ? "Standard (1-2 semaines)" : "Standard (1-2 weeks)"}</SelectItem>
                <SelectItem value="flexible">{locale === "fr" ? "Flexible (2-4 semaines)" : "Flexible (2-4 weeks)"}</SelectItem>
                <SelectItem value="long-term">{locale === "fr" ? "Long terme (plus d'un mois)" : "Long term (over a month)"}</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="timeline" value={timeline} />
          </LabelInputContainer>

          {/* Message */}
          <LabelInputContainer>
            <Label htmlFor="message" className="text-neutral-300">
              {locale === "fr" ? "Décrivez votre projet" : "Describe your project"} *
            </Label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2"
              placeholder={locale === "fr" ? "Décrivez votre projet en détail..." : "Describe your project in detail..."}
            />
          </LabelInputContainer>
        </div>

        {/* File Upload */}
        <div>
          <Label className="mb-2 block text-neutral-300">
            {locale === "fr" ? "Pièces jointes" : "Attachments"}
          </Label>
          <p className="mb-4 text-sm text-neutral-500">
            {locale === "fr"
              ? "Formats acceptés : PDF, JPG, PNG, DWG, ZIP • Taille max : 50 Mo"
              : "Accepted formats: PDF, JPG, PNG, DWG, ZIP • Max size: 50 MB"}
          </p>
          <div className="relative">
            <input
              type="file"
              id="files"
              name="files"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip"
              className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-white/20 bg-white/[0.02] p-8 text-neutral-400 transition hover:border-white/30 hover:bg-white/[0.05]">
              <Upload className="h-6 w-6" />
              <span className="text-sm">
                {locale === "fr"
                  ? "Cliquez pour joindre des fichiers ou glissez-les ici"
                  : "Click to attach files or drag them here"}
              </span>
            </div>
          </div>
        </div>

        {/* Consent */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              required
              className="mt-0.5 border-white/20 bg-white/5 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="terms" className="cursor-pointer text-sm leading-relaxed text-neutral-300">
              {locale === "fr"
                ? "J'accepte que mes données soient utilisées pour traiter ma demande *"
                : "I agree that my data will be used to process my request *"}
            </Label>
          </div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={(checked) => setNewsletter(checked as boolean)}
              className="mt-0.5 border-white/20 bg-white/5 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="newsletter" className="cursor-pointer text-sm leading-relaxed text-neutral-300">
              {locale === "fr"
                ? "Je souhaite recevoir la newsletter de Parallax Stud.io"
                : "I would like to receive the Parallax Stud.io newsletter"}
            </Label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-12 w-full rounded-lg bg-gradient-to-br from-white to-neutral-300 font-bold text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition hover:shadow-lg"
          type="submit"
        >
          {locale === "fr" ? "Envoyer le message" : "Send message"} &rarr;
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
