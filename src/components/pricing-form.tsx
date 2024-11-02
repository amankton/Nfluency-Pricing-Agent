import { zodResolver } from '@hookform/resolvers/zod';
import { Building2, ChevronRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import ClientInfo from './sections/client-info';
import BudgetScope from './sections/budget-scope';
import PricingModels from './sections/pricing-models';
import AutomationGoals from './sections/automation-goals';
import PackageOptions from './sections/package-options';
import ContactInfo from './sections/contact-info';
import Summary from './sections/summary';

const formSchema = z.object({
  // Client Info
  companyName: z.string().min(2).max(100),
  industry: z.string().min(2).max(100),
  companySize: z.string(),
  automationNeeds: z.string().min(10),
  currentProcesses: z.string().min(10),

  // Budget & Scope
  budget: z.string(),
  projectScope: z.string(),
  timeline: z.string(),

  // Pricing Models
  pricingModels: z.array(z.string()).min(1),
  
  // Goals
  expectedSavings: z.string(),
  metrics: z.array(z.string()).min(1),
  
  // Package
  selectedPackage: z.string(),
  addOns: z.array(z.string()),
  
  // Contact
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  preferredContact: z.string(),
  scheduleCall: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const sections = [
  'Client Information',
  'Budget & Scope',
  'Pricing Models',
  'Automation Goals',
  'Package Options',
  'Contact Information',
  'Summary',
] as const;

export default function PricingForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      industry: '',
      companySize: '',
      automationNeeds: '',
      currentProcesses: '',
      budget: '',
      projectScope: '',
      timeline: '',
      pricingModels: [],
      expectedSavings: '',
      metrics: [],
      selectedPackage: '',
      addOns: [],
      name: '',
      email: '',
      phone: '',
      preferredContact: '',
      scheduleCall: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success('Form submitted successfully!');
      // Reset form and section
      form.reset();
      setCurrentSection(0);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Building2 className="h-6 w-6" />
          Automation Services Pricing Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {sections.map((section, index) => (
                <div
                  key={section}
                  className="flex items-center"
                  onClick={() => setCurrentSection(index)}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors',
                      currentSection === index
                        ? 'bg-primary text-primary-foreground'
                        : index < currentSection
                        ? 'bg-primary/20'
                        : 'bg-secondary'
                    )}
                  >
                    {index + 1}
                  </div>
                  {index < sections.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>

            {/* Form Sections */}
            <div className="space-y-6">
              {currentSection === 0 && <ClientInfo form={form} />}
              {currentSection === 1 && <BudgetScope form={form} />}
              {currentSection === 2 && <PricingModels form={form} />}
              {currentSection === 3 && <AutomationGoals form={form} />}
              {currentSection === 4 && <PackageOptions form={form} />}
              {currentSection === 5 && <ContactInfo form={form} />}
              {currentSection === 6 && <Summary form={form} />}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevSection}
                disabled={currentSection === 0}
              >
                Previous
              </Button>
              {currentSection === sections.length - 1 ? (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              ) : (
                <Button type="button" onClick={nextSection}>
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}