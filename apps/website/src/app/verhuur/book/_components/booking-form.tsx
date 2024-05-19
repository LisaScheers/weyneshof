'use client';

import { type PropsWithChildren } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@weyneshof/ui/form';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Input } from '@weyneshof/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@weyneshof/ui/popover';
import { Button } from '@weyneshof/ui/button';
import { cn } from '@weyneshof/util';
import { format, addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@weyneshof/ui/calendar';
import { Checkbox } from '@weyneshof/ui/checkbox';
import Link from 'next/link';

const bookingFormSchema = z.object({
  firstName: z.string().min(2).max(50).trim(),
  lastName: z.string().min(2).max(50).trim(),
  email: z.string().email().trim(),
  phone: z.string().min(10).max(15).trim(),
  street: z.string().min(2).trim(),
  houseNumber: z.string().min(1).trim(),
  postalCode: z.string().min(4).trim(),
  city: z.string().min(2).trim(),

  schuur: z.boolean(),
  hoeve: z.boolean(),
  paviljoen: z.boolean(),

  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),

  nightSupplement: z.boolean(),
  recaptcha: z.string().optional(),
});

export default function BookingForm(props: PropsWithChildren) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      dates: {
        from: addDays(new Date(), 1),
        to: addDays(new Date(), 2),
      },
      schuur: false,
      hoeve: false,
      paviljoen: false,
      nightSupplement: false,
    },
  });

  const availabilityFn: (date: Date) => boolean = (date: Date) => {
    // return false if date is available

    // block dates in the past and today
    if (date <= new Date()) return true;

    // todo: check if date is available

    return false;
  };

  const submit: () => void = () =>
    form.handleSubmit(async (data) => {
      if (!executeRecaptcha) {
        console.error('Recaptcha not loaded');
        return;
      }
      const recaptcha = await executeRecaptcha('login');
      if (!recaptcha) {
        console.error('Recaptcha failed');
        return;
      }
      data.recaptcha = recaptcha;

      // todo: submit data
    });

  return (
    <>
      <div className="mx-auto max-w-lg space-y-6 px-3 py-12">
        <Form {...form}>
          <form action={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name={'firstName'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Voornaam</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={'lastName'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className={'space-y-2'}>
                    <FormLabel>Familie naam</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Doe" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name={'email'}
              control={form.control}
              render={({ field }) => (
                <FormItem className={'space-y-2'}>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="john.doe@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={'phone'}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>telefoon of gsm</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+31612345678" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={'grid grid-cols-2 gap-4'}>
              <FormField
                name="street"
                control={form.control}
                render={({ field }) => (
                  <FormItem className={'space-y-2'}>
                    <FormLabel>Straat</FormLabel>
                    <FormControl>
                      <Input placeholder="Grote Markt" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={'houseNumber'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className={'space-y-2'}>
                    <FormLabel>Huis nummer</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="123" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={'grid grid-cols-2 gap-4'}>
              <FormField
                name={'postalCode'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className={'space-y-2'}>
                    <FormLabel>Postcode</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="2800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={'city'}
                control={form.control}
                render={({ field }) => (
                  <FormItem className={'space-y-2'}>
                    <FormLabel>Gemeente of Stad</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Mechelen" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className={'grid grid-cols-1 gap-4'}>
              <FormField
                control={form.control}
                name="schuur"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>De Schuur (€250/dag)</FormLabel>
                      <FormDescription>
                        In onze recent gerenoveerde schuur (ook bekend als de
                        kapel) hebt u de beschikking over een zaal die plaats
                        biedt aan maximum 50 personen, een volledig uitgeruste
                        keuken, een sanitaire blok en een terras buiten. Ideaal
                        voor recepties en vergaderingen. De schuur is gelegen
                        aan de ingang van het domein.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hoeve"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>De Hoeve (€110/dag)</FormLabel>
                      <FormDescription>
                        Hier is plaats voor maximum 24 personen. De hoeve
                        bestaat uit één ontspanningsruimte, één
                        gemeenschappelijke slaapruimte met 24 slaapplaatsen,
                        voldoende sanitaire voorzieningen, twee douches en een
                        volledig uitgeruste keuken.
                      </FormDescription>
                      <FormField
                        name="nightSupplement"
                        render={(a) => (
                          <FormItem
                            className={
                              'flex flex-row items-start space-x-3 space-y-0 '
                            }
                          >
                            <FormControl>
                              <Checkbox
                                checked={a.field.value}
                                onCheckedChange={a.field.onChange}
                              />
                            </FormControl>
                            <FormLabel>overnachting (+€25/dag)</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paviljoen"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Het Paviljoen (€300/dag)</FormLabel>
                      <FormDescription>
                        Midden tussen het groen staat er een paviljoen dat
                        plaats biedt aan maximum 100 personen. U beschikt hier
                        over twee zalen en een volledig uitgeruste keuken. Op
                        deze locatie is geen overnachting toegestaan.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className={'grid grid-cols-2 gap-4'}>
              <FormField
                name="dates"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>When is the booking for</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            variant={'outline'}
                            className={cn(
                              'w-[300px] justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? (
                              field.value.to ? (
                                <>
                                  {format(field.value.from, 'dd LLL, y')} -{' '}
                                  {format(field.value.to, 'dd LLL, y')}
                                </>
                              ) : (
                                format(field.value.from, 'dd LLL, y')
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          disabled={availabilityFn}
                          selected={field.value}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
