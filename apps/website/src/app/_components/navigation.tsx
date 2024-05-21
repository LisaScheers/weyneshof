'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@weyneshof/ui/navigation-menu';
import { type PropsWithChildren } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@weyneshof/ui/avatar';
import { Button } from '@weyneshof/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Navigation(props: PropsWithChildren) {
  return (
    <div className="grid w-full grid-cols-3 p-2">
      <div></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Speelpleinwerking</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Verhuur</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/domein'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Domein
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/info'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Info VZW
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/contact'} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className={'flex items-center justify-end'}>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant={'link'}>Loggin</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
