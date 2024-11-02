import { UseFormReturn } from 'react-hook-form';
import {
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

export default function ClientInfo({ form }: { form: UseFormReturn<any> }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Size</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="automationNeeds"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Main Automation Needs</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your main automation needs"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="currentProcesses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Processes</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your current processes"
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}