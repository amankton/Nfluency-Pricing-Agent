import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BudgetScope({ form }: { form: UseFormReturn<any> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Budget Range</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k+">$100,000+</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="projectScope"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Scope</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select project scope" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="one-time">One-time Project</SelectItem>
                <SelectItem value="ongoing">Ongoing Support</SelectItem>
                <SelectItem value="multiple">Multiple Phases</SelectItem>
                <SelectItem value="retainer">Monthly Retainer</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Timeline</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred timeline" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1-3">1-3 months</SelectItem>
                <SelectItem value="3-6">3-6 months</SelectItem>
                <SelectItem value="6-12">6-12 months</SelectItem>
                <SelectItem value="12+">12+ months</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}