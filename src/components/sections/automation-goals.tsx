import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const metrics = [
  {
    id: 'efficiency',
    label: 'Operational Efficiency',
    description: 'Improve speed and reduce manual work',
  },
  {
    id: 'leads',
    label: 'Lead Generation',
    description: 'Increase quality leads and conversion rates',
  },
  {
    id: 'sales',
    label: 'Sales Conversions',
    description: 'Boost sales and revenue through automation',
  },
  {
    id: 'costs',
    label: 'Cost Reduction',
    description: 'Lower operational costs and overhead',
  },
  {
    id: 'quality',
    label: 'Quality Improvement',
    description: 'Reduce errors and improve consistency',
  },
  {
    id: 'customer',
    label: 'Customer Satisfaction',
    description: 'Enhance customer experience and support',
  },
];

export default function AutomationGoals({ form }: { form: UseFormReturn<any> }) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="expectedSavings"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expected Annual Savings/Revenue Impact</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Estimated impact in dollars"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="metrics"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Key Metrics to Improve</FormLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <FormField
                  key={metric.id}
                  control={form.control}
                  name="metrics"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={metric.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(metric.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, metric.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== metric.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium leading-none">
                            {metric.label}
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            {metric.description}
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
    </div>
  );
}