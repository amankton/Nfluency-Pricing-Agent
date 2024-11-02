import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

const pricingModels = [
  {
    id: 'hourly',
    label: 'Hourly Pricing',
    description: 'Pay for the actual time spent on development and implementation',
  },
  {
    id: 'savings',
    label: 'Cost Savings Based',
    description: 'Pricing tied to the amount of cost savings achieved',
  },
  {
    id: 'revenue',
    label: 'Revenue Uplift',
    description: 'Pricing based on increased revenue generated',
  },
  {
    id: 'outcome',
    label: 'Per Outcome Model',
    description: 'Pay for specific outcomes or milestones achieved',
  },
  {
    id: 'retainer',
    label: 'Hourly Retainer',
    description: 'Pre-purchased hours at a discounted rate',
  },
  {
    id: 'deliverable',
    label: 'Deliverable Based',
    description: 'Fixed price for specific deliverables',
  },
  {
    id: 'asset',
    label: 'Per Asset-Based',
    description: 'Pricing per automated process or asset',
  },
  {
    id: 'percentage',
    label: 'Percentage of Revenue',
    description: 'Fee based on a percentage of revenue generated',
  },
];

export default function PricingModels({ form }: { form: UseFormReturn<any> }) {
  return (
    <FormField
      control={form.control}
      name="pricingModels"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">Preferred Pricing Models</FormLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingModels.map((model) => (
              <FormField
                key={model.id}
                control={form.control}
                name="pricingModels"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={model.id}
                      className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(model.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, model.id])
                              : field.onChange(
                                  field.value?.filter((value: string) => value !== model.id)
                                );
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none">
                          {model.label}
                        </FormLabel>
                        <p className="text-sm text-muted-foreground">
                          {model.description}
                        </p>
                      </div>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}