import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Summary({ form }: { form: UseFormReturn<any> }) {
  const formValues = form.getValues();
  const selectedPackage = {
    bronze: {
      name: 'Bronze Package',
      price: '$5,000/month',
    },
    silver: {
      name: 'Silver Package',
      price: '$10,000/month',
    },
    gold: {
      name: 'Gold Package',
      price: '$20,000/month',
    },
  }[formValues.selectedPackage as keyof typeof selectedPackage];

  const addOns = {
    analytics: {
      name: 'Advanced Analytics',
      price: '$1,000/month',
    },
    training: {
      name: 'Team Training',
      price: '$2,000',
    },
    optimization: {
      name: 'Ongoing Optimization',
      price: '$1,500/month',
    },
    integration: {
      name: 'Custom Integrations',
      price: '$3,000',
    },
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Company Information</h3>
            <div className="text-sm">
              <p>
                <span className="text-muted-foreground">Company:</span>{' '}
                {formValues.companyName}
              </p>
              <p>
                <span className="text-muted-foreground">Industry:</span>{' '}
                {formValues.industry}
              </p>
              <p>
                <span className="text-muted-foreground">Size:</span>{' '}
                {formValues.companySize}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Selected Package</h3>
            <div className="text-sm">
              <p>
                <span className="text-muted-foreground">Package:</span>{' '}
                {selectedPackage?.name}
              </p>
              <p>
                <span className="text-muted-foreground">Base Price:</span>{' '}
                {selectedPackage?.price}
              </p>
            </div>
          </div>

          {formValues.addOns?.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Selected Add-ons</h3>
              <div className="text-sm space-y-1">
                {formValues.addOns.map((addon: keyof typeof addOns) => (
                  <p key={addon}>
                    <span className="text-muted-foreground">
                      {addOns[addon].name}:
                    </span>{' '}
                    {addOns[addon].price}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-medium">Contact Information</h3>
            <div className="text-sm">
              <p>
                <span className="text-muted-foreground">Name:</span>{' '}
                {formValues.name}
              </p>
              <p>
                <span className="text-muted-foreground">Email:</span>{' '}
                {formValues.email}
              </p>
              <p>
                <span className="text-muted-foreground">Phone:</span>{' '}
                {formValues.phone}
              </p>
              <p>
                <span className="text-muted-foreground">
                  Preferred Contact Method:
                </span>{' '}
                {formValues.preferredContact}
              </p>
              <p>
                <span className="text-muted-foreground">Schedule Call:</span>{' '}
                {formValues.scheduleCall ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}