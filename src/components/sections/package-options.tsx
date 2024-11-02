import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const packages = [
  {
    id: 'bronze',
    title: 'Bronze',
    price: '$5,000/month',
    description: 'Essential automation for small businesses',
    features: [
      'Basic process automation',
      'Email automation',
      'Basic reporting',
      'Standard support',
    ],
  },
  {
    id: 'silver',
    title: 'Silver',
    price: '$10,000/month',
    description: 'Advanced automation for growing companies',
    features: [
      'Advanced process automation',
      'CRM integration',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    id: 'gold',
    title: 'Gold',
    price: '$20,000/month',
    description: 'Enterprise-grade automation solutions',
    features: [
      'Custom automation solutions',
      'Full system integration',
      'Real-time analytics',
      '24/7 dedicated support',
    ],
  },
];

const addOns = [
  {
    id: 'analytics',
    label: 'Advanced Analytics',
    description: 'Detailed insights and reporting',
    price: '+$1,000/month',
  },
  {
    id: 'training',
    label: 'Team Training',
    description: 'Comprehensive training sessions',
    price: '+$2,000',
  },
  {
    id: 'optimization',
    label: 'Ongoing Optimization',
    description: 'Regular performance updates',
    price: '+$1,500/month',
  },
  {
    id: 'integration',
    label: 'Custom Integrations',
    description: 'Connect with existing systems',
    price: '+$3,000',
  },
];

export default function PackageOptions({ form }: { form: UseFormReturn<any> }) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="selectedPackage"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Select Package</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {packages.map((pkg) => (
                  <FormItem key={pkg.id}>
                    <FormControl>
                      <RadioGroupItem
                        value={pkg.id}
                        className="peer sr-only"
                        id={pkg.id}
                      />
                    </FormControl>
                    <label
                      htmlFor={pkg.id}
                      className="flex flex-col h-full peer-aria-checked:border-primary peer-aria-checked:ring-2 peer-aria-checked:ring-primary"
                    >
                      <Card className="h-full cursor-pointer hover:border-primary transition-colors">
                        <CardHeader>
                          <CardTitle>{pkg.title}</CardTitle>
                          <CardDescription>{pkg.price}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            {pkg.description}
                          </p>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li
                                key={index}
                                className="text-sm flex items-center gap-2"
                              >
                                <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </label>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="addOns"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Add-ons</FormLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addon) => (
                <FormField
                  key={addon.id}
                  control={form.control}
                  name="addOns"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={addon.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, addon.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== addon.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium leading-none">
                            {addon.label}
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            {addon.description}
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {addon.price}
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